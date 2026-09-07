# Output contract

Use only the sections needed for the current state. Do not show empty sections or fabricate values. Scores must cite the evidence used and distinguish evidence from inference.

## Common header

```markdown
当前阶段：<state>
本轮目标：<one sentence>
判断置信度：<low | medium | high> — <reason>
```

## Intake or bottleneck output

```markdown
### 已有证据

- <experience or artifact> — <E0 | E1 | E2 | E3> — <what it supports>

### 当前判断

- 最可能瓶颈：<positioning | evidence | role mismatch | application strategy | capability gap | mixed>
- 依据：<2–4 concrete observations>
- 仍未知：<decision-critical unknowns only>

### 下一步

<one smallest action or up to five targeted questions>
```

## Direction card

Repeat for A, B, and C only when the user has no settled direction.

```markdown
### <A/B/C>｜<role family>

- 常见岗位名：<title variants>
- 为什么值得测试：<evidence-backed explanation>
- 证据：<items and evidence levels>
- 评分（有可靠 JD）：现有能力 <0–25>；JD 重合 <0–20>；迁移潜力 <0–20>；短项目可验证性 <0–15>；偏好约束 <0–10>；招聘可达性 <0–10>；总分 <0–100>
- 暂定评分（无可靠 JD）：现有能力 <0–25>；JD 重合 `未评估`；迁移潜力 <0–20>；短项目可验证性 <0–15>；偏好约束 <0–10>；招聘可达性 `未评估`；暂定总分 <0–70>
- 关键缺口：<one or two gaps>
- 最大风险：<failure mode>
- 微型验证：<2–6 hour task summary>
- 置信度：<low | medium | high>；如果 <new evidence>，判断会改变
```

Without reliable JD evidence, use only the provisional scoring line and do not set direction confidence above `medium`.

## Responsibility research and confirmation

```markdown
### 当前岗位职责地图

- 用户原词：<raw role term>
- 搜索范围：<date, region, sources, usable unique JD count>
- 职责簇 1：<name, representative titles, recurring work, deliverables, tools, exclusions>
- 职责簇 2：<same fields>
- 薄样本或偏差：<limitations>

### 第一次确认｜你说的是哪种工作内容？

<Present concrete responsibility combinations. Ask the user to confirm or correct inclusions/exclusions; do not ask them to choose a career.>
```

## Micro-validation task

```markdown
### 微型验证任务｜<title>

- 验证岗位：<role family>
- 系统为什么安排这个验证：<evidence, uncertainty, and information value>
- 时间盒：<2–6 hours>
- 固定能力核心：业务理解、流程拆解、AI 介入点、最小流程、测试与复盘
- 动态场景：<scenario based on user/JD>
- 输入：<provided or synthetic data>
- 必交付：<artifact list>
- 通过标准：<observable checks>
- 评分：业务理解 20；流程拆解 20；AI 介入 15；最小设计 15；工具执行 15；测试/异常 10；表达 5
- 缩减方案：<fallback that still tests the core>
```

## Validation review

```markdown
### 验证结果

- 总分：<0–100>
- 通过状态：<pass | one reduced-scope retry | reject direction>
- 已证明：<new E2/E3 evidence>
- 未证明：<remaining gaps>
- 方向变化：<confidence update and reason>
- 系统建议：主方向 <responsibility profile>；备选方向 <responsibility profile>
- 任务体验：<user reaction, including disliked work>
- 第二次确认：<ask the user to confirm or correct target responsibilities before final-project generation>
- 下一步：<target confirmation or one reduced-scope retry>
```

## Final project card

```markdown
### 主项目｜<title>

- 对应岗位：<role family>
- 选择理由：<why this closes the most valuable gap>
- 利用的旧经验：<existing evidence>
- 新增证据：<what the project will prove>
- 动态业务场景与数据：<scenario and safe data>
- 工具栈：<tools/API and why>
- 3–7 天计划：<daily milestones>
- 必交付：可运行主路径、至少一个集成、测试、异常/人工复核路径、基本运行记录、业务价值说明
- 验收标准：<observable checks and score>
- 风险与缩减范围：<fallback>
- 作品集包装：<README/demo/screenshots/metrics/reflection>
- 面试可深挖点：<ownership, tradeoff, failure, improvement>

### 备选项目｜<title>

<Explain only why it is the fallback and when to switch.>
```

## Mandatory honesty labels

- Use `个人项目` or `模拟业务项目` when the work was not completed for an employer.
- Never convert coursework, tutorials, or generated output into claimed employment experience.
- Separate measured results from expected business value.
