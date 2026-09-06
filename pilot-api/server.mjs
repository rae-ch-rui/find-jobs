import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join } from "node:path";
import { fileURLToPath } from "node:url";
import process from "node:process";

const here = fileURLToPath(new URL(".", import.meta.url));
const publicDir = join(here, "public");
const host = process.env.HOST ?? "127.0.0.1";
const port = Number(process.env.PORT ?? 8787);
const model = process.env.OPENAI_MODEL ?? "gpt-5.4-mini";
const skillId = process.env.OPENAI_SKILL_ID;
const skillVersion = process.env.OPENAI_SKILL_VERSION;
const accessCode = process.env.PILOT_ACCESS_CODE;
const apiKey = process.env.OPENAI_API_KEY;
const projectId = process.env.OPENAI_PROJECT_ID;

const sessions = new Map();
const rateBuckets = new Map();
const maxBodyBytes = 100_000;

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
};

function json(res, status, payload) {
  const body = JSON.stringify(payload);
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  res.end(body);
}

function authorized(req) {
  return Boolean(accessCode) && req.headers["x-pilot-code"] === accessCode;
}

function rateAllowed(req) {
  const key = req.socket.remoteAddress ?? "unknown";
  const now = Date.now();
  const current = rateBuckets.get(key);
  if (!current || now - current.startedAt > 60 * 60 * 1000) {
    rateBuckets.set(key, { startedAt: now, count: 1 });
    return true;
  }
  current.count += 1;
  return current.count <= 30;
}

async function readJson(req) {
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > maxBodyBytes) throw new Error("BODY_TOO_LARGE");
    chunks.push(chunk);
  }
  return JSON.parse(Buffer.concat(chunks).toString("utf8"));
}

function outputText(payload) {
  if (typeof payload.output_text === "string") return payload.output_text;
  return (payload.output ?? [])
    .flatMap((item) => item.content ?? [])
    .filter((part) => part.type === "output_text")
    .map((part) => part.text)
    .join("\n");
}

async function callSkill(message, previousResponseId) {
  const skill = { type: "skill_reference", skill_id: skillId };
  if (skillVersion) skill.version = skillVersion;

  const payload = {
    model,
    input: message,
    instructions:
      "Use the hosted career-transition-ai-workflow skill for every response. Communicate in Chinese unless the user asks otherwise. Follow its stage gates, evidence labels, honesty rules, and output contract. Ask only the smallest useful next question when information is incomplete.",
    tools: [
      {
        type: "shell",
        environment: {
          type: "container_auto",
          network_policy: { type: "disabled" },
          skills: [skill],
        },
      },
    ],
  };
  if (previousResponseId) payload.previous_response_id = previousResponseId;

  const headers = {
    Authorization: `Bearer ${apiKey}`,
    "Content-Type": "application/json",
  };
  if (projectId) headers["OpenAI-Project"] = projectId;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers,
    body: JSON.stringify(payload),
  });
  const result = await response.json();
  if (!response.ok) {
    const error = new Error(result.error?.message ?? "OpenAI API request failed");
    error.status = response.status;
    throw error;
  }
  return { id: result.id, text: outputText(result) };
}

async function serveStatic(req, res) {
  const pathname = new URL(req.url, "http://localhost").pathname;
  const relative = pathname === "/" ? "index.html" : pathname.slice(1);
  if (!/^[a-zA-Z0-9._/-]+$/.test(relative) || relative.includes("..")) {
    return json(res, 404, { error: "Not found" });
  }
  try {
    const file = await readFile(join(publicDir, relative));
    res.writeHead(200, {
      "Content-Type": mimeTypes[extname(relative)] ?? "application/octet-stream",
      "Cache-Control": "no-store",
    });
    res.end(file);
  } catch {
    json(res, 404, { error: "Not found" });
  }
}

const server = createServer(async (req, res) => {
  const pathname = new URL(req.url, "http://localhost").pathname;

  if (req.method === "GET" && pathname === "/api/health") {
    return json(res, 200, {
      ok: true,
      ready: Boolean(apiKey && skillId && accessCode),
      model,
    });
  }

  if (pathname.startsWith("/api/") && !authorized(req)) {
    return json(res, 401, { error: "试用码无效" });
  }

  if (req.method === "POST" && pathname === "/api/chat") {
    if (!apiKey || !skillId || !accessCode) {
      return json(res, 503, { error: "试用服务尚未完成配置" });
    }
    if (!rateAllowed(req)) {
      return json(res, 429, { error: "请求过于频繁，请稍后再试" });
    }
    try {
      const body = await readJson(req);
      const sessionId = String(body.session_id ?? "");
      const message = String(body.message ?? "").trim();
      if (!/^[a-zA-Z0-9-]{16,64}$/.test(sessionId) || !message) {
        return json(res, 400, { error: "会话或消息格式无效" });
      }
      const result = await callSkill(message, sessions.get(sessionId));
      sessions.set(sessionId, result.id);
      return json(res, 200, { message: result.text, response_id: result.id });
    } catch (error) {
      const status = error.message === "BODY_TOO_LARGE" ? 413 : error.status ?? 500;
      return json(res, status, { error: error.message });
    }
  }

  if (req.method === "POST" && pathname === "/api/session/reset") {
    try {
      const body = await readJson(req);
      sessions.delete(String(body.session_id ?? ""));
      return json(res, 200, { ok: true });
    } catch {
      return json(res, 400, { error: "请求格式无效" });
    }
  }

  if (req.method === "GET") return serveStatic(req, res);
  json(res, 404, { error: "Not found" });
});

server.listen(port, host, () => {
  console.log(`Pilot server listening on http://${host}:${port}`);
  console.log(`Ready: ${Boolean(apiKey && skillId && accessCode)}`);
});
