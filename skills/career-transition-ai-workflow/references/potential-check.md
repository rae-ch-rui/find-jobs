# Role-potential question check

Use this stage to test whether the user shows promising reasoning patterns for a role before asking them to build a portfolio project. It is not a miniature MVP and must not be presented as work experience or artifact-backed execution evidence.

## Default format

- Use a 45–90 minute adaptive, scenario-based question sequence.
- Ask one question at a time so follow-ups can react to the user's reasoning.
- Use four to six questions across the most decision-relevant parts of the confirmed responsibility profile.
- A written answer, voice transcript, lightweight diagram, or bullet-point response is acceptable.
- Do not require tool setup, API access, coding, or a runnable system by default.

If answers remain ambiguous and hands-on execution is genuinely a threshold requirement, assign one practical probe of no more than two hours. State exactly what the questions could not establish. Do not silently turn the potential check into a multi-hour build.

## Question design

Each question must include, in user-facing language:

- `岗位工作环节`: the real target-role workflow stage it represents;
- `岗位职责`: the responsibility being simulated;
- `验证能力`: the reasoning or behavior being assessed;
- `情境题`: a realistic but compact scenario;
- `回答要求`: the expected response form and timebox;
- `不要求`: tools, jargon, or finished output that are intentionally out of scope.

Use questions that reveal decisions rather than memory. Select from:

- clarifying an ambiguous business request;
- decomposing an existing process and identifying handoffs;
- finding bottlenecks, exceptions, and missing information;
- deciding whether AI, deterministic rules, or human review should handle a step;
- prioritizing requirements and explaining tradeoffs;
- defining acceptance tests and failure handling;
- communicating a recommendation to different stakeholders;
- reflecting on what the user would learn or change next.

Do not ask trivia, tool-menu questions, certification facts, or “define this term” questions unless recall is genuinely part of the target responsibility.

## Potential rubric

Score potential separately from E0–E3 employment/project evidence:

| Dimension | Weight |
|---|---:|
| Problem framing and clarification | 20 |
| Process decomposition and dependencies | 20 |
| Prioritization and tradeoffs | 15 |
| AI/rule/human intervention judgment | 15 |
| Testing, exceptions, and risk awareness | 15 |
| Stakeholder communication | 10 |
| Learning reflection | 5 |

Potential labels:

- `P0 — insufficient signal`: the answers do not yet support a direction conclusion;
- `P1 — emerging`: some useful instincts, but substantial prompting is required;
- `P2 — credible`: repeatable reasoning aligns with several target responsibilities;
- `P3 — strong`: clear, independent reasoning across the most important responsibilities.

Use `70+` as evidence to proceed to post-check target confirmation. Use `55–69` for one focused follow-up question or the optional practical probe. Below `55`, compare the backup hypothesis or explain which reasoning pattern is currently unproven; do not label the person incapable.

Q&A may produce demonstrated reasoning evidence for this constrained scenario, but it does not prove tool execution, production delivery, or job experience. Keep those capabilities unproven until the final MVP or another artifact supports them.

## Review output

For every scored dimension, return:

- concise evidence from the user's answer;
- score and uncertainty;
- the corresponding target-role workflow and responsibility;
- what the answer suggests about potential;
- what remains untested and must be tested in the final MVP.

Recommend one primary responsibility profile and one backup only after the questions are complete. Then run the second responsibility-confirmation gate from [role-research.md](role-research.md).

