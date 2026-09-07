# End-to-end demonstration

This is an illustrative behavior trace, not a benchmark answer. Do not copy its role conclusions into unrelated users.

## 1. Intake

User: 2025 marketing graduate in Hangzhou; eight-month e-commerce operations internship; maintained campaign trackers, consolidated weekly channel data, wrote review notes, and coordinated late materials. Applied to 65 AI operations and AI product assistant roles with no response. Can spend 15 hours per week. Has tried ChatGPT and Feishu automation but has not used an API independently. Provides a resume and three representative JDs.

Evidence map:

- campaign tracker and anonymized weekly report — E2 — reporting and data hygiene;
- description of late-material escalation — E1 — workflow/exception awareness;
- claim of Feishu automation use — E1 — tool exposure, not independent implementation;
- 65 applications with one resume version — E2 — funnel evidence.

## 2. Bottleneck diagnosis

Most likely bottleneck: mixed positioning and evidence gap. The resume describes routine operations but does not expose process ownership, automation decisions, tests, or measurable artifacts. The three JDs repeatedly require workflow analysis, tool integration, documentation, and acceptance testing. This does not prove the user lacks those abilities; it shows the application currently cannot verify them.

## 3. Current-market role research and first responsibility confirmation

The three supplied JDs are supplemented with current publicly accessible postings. The search uses responsibility terms such as workflow mapping, requirements analysis, automation opportunity identification, integration, acceptance testing, and exception handling rather than searching only `AI Workflow Analyst`.

The resulting responsibility map separates AI operations, business-process/workflow analysis, and evaluation operations. The user confirms that they mean business-process and automation work, not ERP implementation or routine campaign operations. This is a meaning confirmation, not a final career choice.

## 4. Direction hypotheses and system-assigned potential check

### A — AI Operations / Automation Operations

Score 78/100. Strongest evidence: operations context, reporting, coordination, and exception awareness. Main gap: no inspectable automation artifact.

### B — AI Workflow Analyst

Score 72/100. Transfer is credible from process coordination and reporting, but integration and testing are unproven. This direction should enter a role-potential question check.

### C — AI Evaluation Operations

Score 64/100. Campaign review discipline and structured reporting may transfer to test-case operations, but there is no current evaluation evidence. Keep confidence low and use a contrasting question lens before any final MVP.

The system assigns B as the primary potential hypothesis because it has both credible transfer evidence and the highest unresolved information value. The user may request a different response format, but is not asked to choose a career direction first.

## 5. Role-potential question check

Total timebox: 60 minutes. Questions are asked one at a time; the user does not build a workflow.

Example question 1:

- Role workflow stage: requirements clarification.
- Responsibility: turn a vague business request into actors, inputs, outputs, constraints, and success measures.
- Capability: problem framing and stakeholder clarification.
- Scenario: a manager asks to “use AI to speed up campaign-material approval,” but teams disagree about what is slow.
- Answer requirement: list the first five questions to ask and explain which decision each answer affects; 10 minutes.
- Not required: a tool, process diagram, or technical architecture.

The remaining questions test process decomposition, AI/rule/human boundaries, exception handling, acceptance testing, and stakeholder tradeoffs. Each question shows the same role-workflow mapping without revealing a model answer.

## 6. Potential review and second responsibility confirmation

Illustrative score: 79/100, `P2 — credible`. The answers repeatedly show useful problem framing, process decomposition, human-review judgment, and test thinking. They do not prove Feishu automation, API integration, or runnable delivery; those remain explicit final-MVP gaps.

The system recommends business-process and AI workflow analysis as the primary direction and AI operations as the backup. The user confirms that requirements clarification, workflow design, automation opportunity analysis, testing, and exception handling match the target; ERP configuration and pure operations execution do not. Only now is the final MVP dynamically generated.

## 7. Final project recommendation

Primary project: Multi-channel campaign request triage and delivery-monitoring workflow — a simulated business project for AI Workflow Analyst applications.

Why selected: it reuses the user's actual campaign-operations context while adding the missing evidence: integration, test design, human review, logs, and business tradeoffs.

Five-day roadmap and role mapping:

| Step | Target-role workflow | Responsibility | Capability | Artifact | Acceptance evidence |
|---|---|---|---|---|---|
| 1 | Discovery and requirements | Clarify users, pain, scope, and success | Requirements analysis | Problem brief and requirement table | Ambiguities and exclusions are explicit |
| 2 | As-is/to-be process design | Map states, handoffs, rules, and exceptions | Process decomposition | Process map and synthetic dataset | Main and exception paths are traceable |
| 3 | Solution design and implementation | Choose AI/rule/human boundaries and integrate a tool | Automation design and integration | Runnable routing path | One genuine integration and human-review queue work |
| 4 | Acceptance and risk testing | Design normal and failure cases | Testing and exception handling | Test table and run log | At least five tests include technical failure |
| 5 | Improvement and handoff | Analyze failures and communicate value | Iteration and documentation | README, demo, metrics, limitations | Claims match recorded evidence |

The Skill then expands only step 1:

- Why this step exists: a workflow analyst cannot design the solution until the business problem, actors, boundaries, and acceptance conditions are explicit.
- Input: the synthetic campaign-request context and the user's earlier question answers.
- Actions: identify stakeholders; write the current pain; separate symptoms from causes; define in/out of scope; specify five acceptance conditions; record unresolved questions.
- Deliverable: one-page problem brief and a requirement table.
- Self-check: every requirement has a source, priority, acceptance condition, and unresolved-risk field.
- Common failure: jumping directly to an LLM or tool choice. If blocked, return the uncertain stakeholder, input, or success measure.
- Job-search evidence: requirements clarification, scope control, and acceptance-definition decisions that the user can explain in an interview.

After the user submits this artifact, the Skill checks it before expanding step 2.

Acceptance gate:

- one end-to-end runnable path;
- at least one genuine integration;
- at least five recorded tests;
- one human-review and one technical-failure path;
- basic run log;
- clear before/after business value without invented production metrics;
- personal ownership is demonstrable.

Backup project: E-commerce weekly-report synthesis and anomaly review workflow. Switch only if request routing cannot be completed within the timebox; preserve integration, testing, and human-review requirements.

## 8. Portfolio packaging

Label: `模拟业务项目｜个人独立完成`.

Portfolio evidence: problem statement, process diagram, architecture, runnable link or demo, synthetic dataset, tests and logs, one failed iteration, tradeoff explanation, and next-step limitations.

Interview story: explain the original operations pain, why deterministic checks precede the LLM step, how uncertain cases are reviewed, what the failed test changed, and what would be required before production use.
