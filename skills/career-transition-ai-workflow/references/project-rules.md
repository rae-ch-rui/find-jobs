# Final MVP generation and guidance rules

## Final project selection

Do not generate the final MVP immediately after scoring or user preference. Require:

- completed role-potential question check, plus the optional practical probe only when needed;
- a system recommendation of one primary direction and one backup;
- the user's post-check confirmation of the actual target responsibilities, not merely a title.

Select one primary and one backup project. Score candidates:

| Dimension | Weight |
|---|---:|
| Target-role relevance | 25 |
| Gap-closing evidence value | 20 |
| Existing-experience leverage | 15 |
| 3–7 day feasibility | 15 |
| Runnable and evaluable | 10 |
| Portfolio signal | 10 |
| User interest and constraints | 5 |

Require a score of at least 70 and all of the following:

- one end-to-end runnable path;
- at least one tool or API integration;
- test cases;
- at least one failure or human-review path;
- basic run logging or result recording;
- a clear business value statement;
- no confidential or unauthorized data.

## Project archetypes

Prefer a curated archetype with dynamic context:

- research and synthesis;
- document extraction and structuring;
- classification, review, and routing;
- reporting and analysis;
- workflow assistant or knowledge retrieval.

Dynamic generation may change scenario, data, tools, difficulty, and success metrics. It must not change the core competency rubric, timebox, or acceptance criteria.

Generate the scenario from the confirmed responsibility profile, current JD clusters, existing user experience, and capabilities still unproven after the potential check. Do not preselect the final MVP before those inputs exist.

## Step-by-step guidance contract

Give the user a short full-project roadmap first, then expand only the current step in detail. Do not dump every implementation detail at once. Advance after the user submits the expected artifact or reports a concrete blocker.

Every step must state:

- `岗位工作流程位置`: where this occurs in the target role's real workflow;
- `对应岗位职责`: the responsibility represented by the step, supported by the researched JD cluster;
- `训练/证明的能力`: the capability being practiced or evidenced;
- `为什么现在做`: how it connects to earlier and later steps;
- `输入`: data, requirement, artifact, or decision needed;
- `操作指导`: ordered actions, including tool choices and a no-code/low-code fallback when reasonable;
- `本步交付物`: the inspectable output;
- `自检与验收`: observable checks before moving on;
- `常见错误与求助条件`: likely failure modes and what information to return for help;
- `形成的求职证据`: what can honestly be shown in a portfolio or discussed in an interview.

For the entire project, include a mapping table from project steps to target-role workflow, responsibility, capability, artifact, and acceptance evidence. If a step cannot be linked to a researched responsibility or a required project gate, remove it.

Provide scaffolding without taking ownership away from the user. Explain examples and options, but require the user to make and document the key business, workflow, tool, and testing decisions.

## Final project card

Return:

- project title and target role;
- why it was selected;
- experience being leveraged;
- gap being tested or closed;
- fixed deliverables;
- dynamic scenario and data;
- tool stack;
- 3–7 day roadmap;
- step-to-role workflow and capability mapping;
- current-step instructions and completion check;
- evaluation rubric;
- risks and fallback scope;
- portfolio and interview packaging plan.

Reject projects that are prompt-only, cannot be tested, need more than two new foundational domains, exceed seven days, or cannot show the user's own contribution.
