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
- 评分（有可靠 JD）：现有能力 <0–25>；JD 重合 <0–20>；迁移潜力 <0–20>；3–7 天 MVP 可验证性 <0–15>；偏好约束 <0–10>；招聘可达性 <0–10>；总分 <0–100>
- 暂定评分（无可靠 JD）：现有能力 <0–25>；JD 重合 `未评估`；迁移潜力 <0–20>；3–7 天 MVP 可验证性 <0–15>；偏好约束 <0–10>；招聘可达性 `未评估`；暂定总分 <0–70>
- 关键缺口：<one or two gaps>
- 最大风险：<failure mode>
- 潜力验证重点：<which responsibilities and reasoning patterns the questions will test>
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

## Role-potential question check

```markdown
### 潜力问答验证｜<target responsibility profile>

- 系统为什么验证这个方向：<evidence, uncertainty, and information value>
- 总时间盒：<45–90 minutes>
- 问题数量：<4–6, asked one at a time>
- 评分：问题定义 20；流程拆解 20；优先级与权衡 15；AI/规则/人工判断 15；测试与异常 15；沟通 10；学习反思 5

#### 问题 <n>｜<short scenario title>

- 岗位工作环节：<real workflow stage>
- 对应岗位职责：<responsibility from researched JD cluster>
- 验证能力：<potential being assessed>
- 情境题：<compact realistic scenario>
- 回答要求：<format and per-question timebox>
- 本题不要求：<tools, jargon, or finished artifact deliberately excluded>
```

## Potential review

```markdown
### 潜力验证结果

- 总分：<0–100>
- 潜力信号：<P0 | P1 | P2 | P3>
- 结论：<proceed | one focused follow-up/practical probe | compare backup hypothesis>
- 每个能力的回答证据：<brief answer evidence and score>
- 对应岗位流程与职责：<mapping for each scored dimension>
- 仍未证明：<especially tools, integration, delivery, and artifact quality>
- 方向变化：<confidence update and reason>
- 系统建议：主方向 <responsibility profile>；备选方向 <responsibility profile>
- 问答体验：<user reaction, including disliked work>
- 第二次确认：<ask the user to confirm or correct target responsibilities before final-project generation>
- 下一步：<target confirmation, one focused question, or optional <=2-hour practical probe>
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
- 3–7 天路线图：<daily milestones; show all at summary level>
- 必交付：可运行主路径、至少一个集成、测试、异常/人工复核路径、基本运行记录、业务价值说明
- 验收标准：<observable checks and score>
- 风险与缩减范围：<fallback>
- 作品集包装：<README/demo/screenshots/metrics/reflection>
- 面试可深挖点：<ownership, tradeoff, failure, improvement>

#### 项目步骤—岗位映射

| 步骤 | 岗位工作流程位置 | 对应岗位职责 | 训练/证明的能力 | 本步交付物 | 验收证据 |
|---|---|---|---|---|---|
| <n> | <workflow stage> | <JD-backed responsibility> | <capability> | <artifact> | <observable check> |

#### 当前步骤｜<n and title>

- 岗位工作流程位置：<where this happens in the real job>
- 对应岗位职责：<JD-backed responsibility>
- 训练/证明的能力：<capability>
- 为什么现在做：<dependency and purpose>
- 输入：<required materials>
- 操作指导：<ordered actions>
- 工具与替代方案：<recommended tool plus reasonable fallback>
- 本步交付物：<inspectable output>
- 自检与验收：<observable checks>
- 常见错误与求助条件：<failure modes and what to report>
- 形成的求职证据：<honest portfolio/interview evidence>

### 备选项目｜<title>

<Explain only why it is the fallback and when to switch.>
```

## Mandatory honesty labels

- Use `个人项目` or `模拟业务项目` when the work was not completed for an employer.
- Never convert coursework, tutorials, or generated output into claimed employment experience.
- Separate measured results from expected business value.
