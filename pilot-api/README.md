# 3–5 人封闭试用端

这是 `career-transition-ai-workflow` 的最小 API 试用入口。它使用服务端 OpenAI API Key、托管 Skill ID 和一个共享试用码，为少量用户提供多轮文字对话。

## 运行前提

- Node.js 20 或以上；
- 一个有 API 额度的 OpenAI 项目；
- 通过 `/v1/skills` 创建的 `OPENAI_SKILL_ID`；
- 一个只发给试用者的 `PILOT_ACCESS_CODE`。

API Key 只能配置在服务端环境变量中，不能放进网页、GitHub 或发给试用用户。

## 创建托管 Skill

在仓库根目录执行：

```bash
./scripts/package_skill.sh
export OPENAI_API_KEY="在本机设置，不要提交"
export OPENAI_PROJECT_ID="可选的项目 ID"
node scripts/create_hosted_skill.mjs
```

记录返回的 `skill_id`。更新已有 Skill 时设置 `OPENAI_SKILL_ID` 后再次运行；脚本会创建新版本并将其设为默认版本。

## 启动试用端

```bash
cd pilot-api
export OPENAI_API_KEY="在本机设置，不要提交"
export OPENAI_PROJECT_ID="可选的项目 ID"
export OPENAI_SKILL_ID="skill_..."
export PILOT_ACCESS_CODE="自行生成的试用码"
npm start
```

打开 `http://127.0.0.1:8787`。需要远程试用时，把此服务部署到支持 Node.js 和 HTTPS 的服务端，在服务端配置相同环境变量，并按托管环境要求设置 `HOST` 和 `PORT`。

默认模型是 `gpt-5.4-mini`，可用 `OPENAI_MODEL` 覆盖。可用 `OPENAI_SKILL_VERSION` 固定一个正整数版本或 `latest`；留空则使用 Skill 默认版本。

## 试用边界

- 会话映射只保存在进程内存中；服务重启后用户需要重新开始；
- 不提供简历文件上传，用户只能粘贴脱敏文字；
- 每个来源地址每小时最多 30 次 API 请求；
- 共享试用码只适合 3–5 人封闭测试，不适合公开发布；
- 生产化之前需要用户账户、数据库、单用户限额、监控、审计和正式隐私政策。

## 检查

```bash
npm run check
curl http://localhost:8787/api/health
```

当 `ready` 为 `true` 时，API Key、Skill ID 和试用码均已配置。
