# Find Jobs Skills

这个仓库当前维护一个可直接安装到 Codex 的本地 Skill：

- [`career-transition-ai-workflow`](skills/career-transition-ai-workflow/)：帮助中国大陆 0–1 年工作经验的求职者诊断没有面试的原因、测试岗位方向，并完成一个 3–7 天可运行、可展示的 AI Workflow 项目。

## 安装

在 Codex 中调用 `$skill-installer`，并发送：

```text
请从 https://github.com/rae-ch-rui/find-jobs/tree/main/skills/career-transition-ai-workflow 安装这个 Skill。
```

安装完成后，在下一轮对话中调用：

```text
$career-transition-ai-workflow
我投递后一直没有面试，请先帮我诊断，不要直接改简历。
```

也可以在本机通过安装器脚本安装：

```bash
python3 "${CODEX_HOME:-$HOME/.codex}/skills/.system/skill-installer/scripts/install-skill-from-github.py" \
  --repo rae-ch-rui/find-jobs \
  --path skills/career-transition-ai-workflow
```

如果同名目录已经存在，安装器会停止。先保留旧版本或将其移走，再安装新版本。

## 本地验证

```bash
./scripts/validate_local.sh
```

行为测试位于 [`evaluation-cases.md`](skills/career-transition-ai-workflow/references/evaluation-cases.md)，3–5 人试用流程位于 [`pilot-protocol.md`](skills/career-transition-ai-workflow/references/pilot-protocol.md)。

最新完整行为测试基线和后续修复记录位于 [`behavioral-evaluation-2026-09-07.md`](behavioral-evaluation-2026-09-07.md)。Skill 默认使用阶段化快速模式：普通职责消歧搜索 8–12 份可审计 JD，只有存在深度研究触发条件时才扩展到 20–30 份。

本仓库不要求 OpenAI API 密钥，也不创建服务端托管 Skill。GitHub 中的 Skill 目录是当前唯一源文件。
