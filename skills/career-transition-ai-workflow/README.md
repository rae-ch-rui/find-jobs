# Career Transition AI Workflow

一个面向中国大陆个人求职者的 Codex Skill。它帮助 0–1 年工作经验、投递后没有面试或暂时不知道方向的人，把已有课程、实习、项目和工作经历转化为岗位证据，先通过 45–90 分钟岗位情境问答判断潜力，再生成一个 3–7 天可完成、可运行、可展示的 AI Workflow MVP。

“14 天内开始第一次面试”是产品验证目标，不是对个人结果的保证。

## 当前能力

- 诊断没有面试更可能是定位、证据、岗位匹配、投递策略还是能力缺口；
- 在没有明确目标岗位时提供 A 高匹配、B 可迁移、C 被忽略潜力三个方向；
- 对宽泛或新兴岗位词进行当前市场 JD 搜索，按真实职责而不是标题字面做消歧；
- 在搜索后确认一次职责含义，在潜力问答后再次确认最终目标职责；
- 默认用 4–6 道岗位情境题判断潜力，不要求用户先做小系统；
- 根据潜力问答结果推荐一个主方向和一个备选方向；
- 最终 MVP 在方向确认后动态生成，并为每一步提供岗位流程、职责、能力、交付物和验收映射；
- 要求最终项目包含可运行流程、工具或 API 集成、测试、异常路径和基本记录；
- 把产出包装成诚实标注的个人或模拟项目，而不是虚构工作经历。

默认采用快速运行模式：每一阶段只加载当前需要的规则；普通岗位消歧使用 8–12 份可审计 JD 并在职责饱和后停止；只有职责簇仍冲突、需要判断招聘可达性或用户明确要求市场全景时，才扩展到 20–30 份。目标岗位和职责已经明确时走单岗位路径，不为了格式强制生成 A/B/C。

当前版本可以搜索公开可访问的招聘信息，但不会绕过登录或反爬限制、替用户投递、保证面试，也不会把一个 Prompt 当作完整项目。

## 从 GitHub 安装

在 Codex 中调用 `$skill-installer`，并发送：

```text
请从 https://github.com/rae-ch-rui/find-jobs/tree/main/skills/career-transition-ai-workflow 安装这个 Skill。
```

安装成功后，这个 Skill 会从下一轮对话开始可用。它不需要 OpenAI API Key，也不需要创建托管 Skill；完整目录就是安装单元。

如需命令行安装，可运行：

```bash
python3 "${CODEX_HOME:-$HOME/.codex}/skills/.system/skill-installer/scripts/install-skill-from-github.py" \
  --repo rae-ch-rui/find-jobs \
  --path skills/career-transition-ai-workflow
```

## 快速使用

在已经安装或加载本目录的 Codex 环境中调用：

```text
$career-transition-ai-workflow
我投递了 60 个岗位但没有面试。请先诊断问题；如果方向不明确，给我 A/B/C 三类岗位方向，再用岗位情境问答验证潜力。方向确认后，再生成带逐步指导的最终 MVP。
```

第一轮最好提供：

- 脱敏简历或结构化经历；
- 最多三个项目、实习或工作例子；
- 已投递时提供 3–5 个真实 JD 和所用简历；
- 所在城市、每周可用时间、工具接触程度和工作偏好。

不要上传公司机密、客户数据、个人身份证明或受限材料。

## 文件结构

```text
career-transition-ai-workflow/
├── SKILL.md
├── agents/openai.yaml
├── README.md
└── references/
    ├── input-schema.md
    ├── role-research.md
    ├── potential-check.md
    ├── workflow-states.md
    ├── role-scoring.md
    ├── project-rules.md
    ├── output-template.md
    ├── evaluation-cases.md
    ├── end-to-end-demo.md
    └── pilot-protocol.md
```

## 验证方式

1. 在仓库根目录运行 `./scripts/validate_local.sh`。
2. 将 `references/evaluation-cases.md` 中的全部案例分别放入全新对话，不要向模型提供预期答案。
3. 检查输出是否符合 `references/output-template.md`，并用 `references/end-to-end-demo.md` 核对阶段转换。
4. 按 `references/pilot-protocol.md` 让 3–5 位真实用户分别安装并试用。
5. 只根据重复出现或后果明确的失败修改规则，不因措辞差异修改 Skill。

## 当前完成标准

当前版本属于“可安装、可测试的本地 Skill MVP”：规则、状态、输出契约、案例和演示已齐全。GitHub 中的 `skills/career-transition-ai-workflow/` 是唯一源文件。若以后需要更正式的分发，可以再将最终 Skill bundle 包装为 skills-only Plugin；这不是当前试用的前置条件。
