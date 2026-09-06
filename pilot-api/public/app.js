const form = document.querySelector("#chat-form");
const input = document.querySelector("#message");
const codeInput = document.querySelector("#access-code");
const messages = document.querySelector("#messages");
const sendButton = document.querySelector("#send");
const resetButton = document.querySelector("#reset");

let sessionId = sessionStorage.getItem("pilot-session-id");
if (!sessionId) {
  sessionId = crypto.randomUUID();
  sessionStorage.setItem("pilot-session-id", sessionId);
}
codeInput.value = sessionStorage.getItem("pilot-access-code") ?? "";

function addMessage(role, text) {
  const article = document.createElement("article");
  article.className = `message ${role}`;
  const label = document.createElement("strong");
  label.textContent = role === "user" ? "你" : "路径助手";
  const content = document.createElement("p");
  content.textContent = text;
  article.append(label, content);
  messages.append(article);
  article.scrollIntoView({ behavior: "smooth", block: "end" });
}

async function request(path, payload) {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-Pilot-Code": codeInput.value,
    },
    body: JSON.stringify(payload),
  });
  const body = await response.json();
  if (!response.ok) throw new Error(body.error ?? "请求失败");
  return body;
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = input.value.trim();
  if (!message || !codeInput.value) {
    addMessage("assistant", "请填写试用码和你的情况。");
    return;
  }
  sessionStorage.setItem("pilot-access-code", codeInput.value);
  addMessage("user", message);
  input.value = "";
  sendButton.disabled = true;
  sendButton.textContent = "分析中…";
  try {
    const body = await request("/api/chat", {
      session_id: sessionId,
      message,
    });
    addMessage("assistant", body.message || "本轮没有生成文本，请重试。");
  } catch (error) {
    addMessage("assistant", `暂时无法继续：${error.message}`);
  } finally {
    sendButton.disabled = false;
    sendButton.textContent = "发送";
    input.focus();
  }
});

resetButton.addEventListener("click", async () => {
  try {
    if (codeInput.value) {
      await request("/api/session/reset", { session_id: sessionId });
    }
  } catch {
    // A local reset is still useful when the remote session has expired.
  }
  sessionId = crypto.randomUUID();
  sessionStorage.setItem("pilot-session-id", sessionId);
  messages.replaceChildren();
  addMessage("assistant", "已经开始新会话。请描述你的求职阶段和一段最能代表你的经历。");
});

addMessage(
  "assistant",
  "先告诉我：你现在是否已经投递、目标岗位是否明确，以及一段最能代表你的项目、实习或工作经历。",
);

