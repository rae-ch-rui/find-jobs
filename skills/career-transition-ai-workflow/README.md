# Career Transition AI Workflow

一个面向中国大陆个人求职者的 Codex Skill。它帮助 0–1 年工作经验、投递后没有面试或暂时不知道方向的人，把已有课程、实习、项目和工作经历转化为岗位证据，并通过一次 2–6 小时的微型验证，选择一个 3–7 天可完成、可运行、可展示的 AI Workflow 项目。

“14 天内开始第一次面试”是产品验证目标，不是对个人结果的保证。

## 当前能力

- 诊断没有面试更可能是定位、证据、岗位匹配、投递策略还是能力缺口；
- 在没有明确目标岗位时提供 A 高匹配、B 可迁移、C 被忽略潜力三个方向；
- 用固定 70% 能力核心和动态 30% 场景生成微型验证任务；
- 根据验证结果推荐一个主项目和一个备选项目；
- 要求最终项目包含可运行流程、工具或 API 集成、测试、异常路径和基本记录；
- 把产出包装成诚实标注的个人或模拟项目，而不是虚构工作经历。

当前版本不会自动抓取招聘网站、替用户投递、保证面试，也不会把一个 Prompt 当作完整项目。

## 快速使用

在已经安装或加载本目录的 Codex 环境中调用：

```text
$career-transition-ai-workflow
我投递了 60 个岗位但没有面试。请先诊断问题；如果方向不明确，给我 A/B/C 三类岗位方向，再安排最小验证任务。
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
    ├── workflow-states.md
    ├── role-scoring.md
    ├── project-rules.md
    ├── output-template.md
    ├── evaluation-cases.md
    ├── end-to-end-demo.md
    └── pilot-protocol.md
```

## 验证方式

1. 运行 `references/evaluation-cases.md` 中的五个行为案例。
2. 检查输出是否符合 `references/output-template.md`。
3. 用 `references/end-to-end-demo.md` 核对完整阶段转换。
4. 按 `references/pilot-protocol.md` 完成 3–5 位真实用户试点。
5. 修改后运行 Skill 结构校验。

## 当前完成标准

当前版本属于“可测试的 Skill MVP”：规则、状态、输出契约、案例和演示已齐全。若要成为独立求职产品，还需要另行实现 JD 数据接入、用户账户与进度保存、项目执行环境、成果托管和效果数据闭环。
