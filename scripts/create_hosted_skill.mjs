import { readFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const apiKey = process.env.OPENAI_API_KEY;
const projectId = process.env.OPENAI_PROJECT_ID;
const existingSkillId = process.env.OPENAI_SKILL_ID;
const bundlePath = path.resolve(
  process.argv[2] ?? "dist/career-transition-ai-workflow.zip",
);

if (!apiKey) {
  console.error("OPENAI_API_KEY is not set.");
  process.exit(1);
}

const bundle = await readFile(bundlePath);
const form = new FormData();
form.append(
  "files",
  new Blob([bundle], { type: "application/zip" }),
  path.basename(bundlePath),
);

let endpoint = "https://api.openai.com/v1/skills";
if (existingSkillId) {
  endpoint += `/${encodeURIComponent(existingSkillId)}/versions`;
  form.append("default", "true");
}

const headers = { Authorization: `Bearer ${apiKey}` };
if (projectId) headers["OpenAI-Project"] = projectId;

const response = await fetch(endpoint, {
  method: "POST",
  headers,
  body: form,
});

const raw = await response.text();
let payload;
try {
  payload = JSON.parse(raw);
} catch {
  payload = { message: raw };
}

if (!response.ok) {
  console.error(
    JSON.stringify(
      { status: response.status, error: payload.error ?? payload },
      null,
      2,
    ),
  );
  process.exit(1);
}

const result = existingSkillId
  ? {
      action: "version_created",
      skill_id: payload.skill_id ?? existingSkillId,
      version: payload.version,
      default: true,
    }
  : {
      action: "skill_created",
      skill_id: payload.id,
      default_version: payload.default_version,
      latest_version: payload.latest_version,
      name: payload.name,
    };

console.log(JSON.stringify(result, null, 2));

