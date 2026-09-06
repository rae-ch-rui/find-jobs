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

## 3. Direction hypotheses

### A — AI Operations / Automation Operations

Score 78/100. Strongest evidence: operations context, reporting, coordination, and exception awareness. Main gap: no inspectable automation artifact.

### B — AI Workflow Analyst

Score 72/100. Transfer is credible from process coordination and reporting, but integration and testing are unproven. This direction should enter micro-validation.

### C — AI Evaluation Operations

Score 64/100. Campaign review discipline and structured reporting may transfer to test-case operations, but there is no current evaluation evidence. Keep confidence low and use a smaller validation before any final project.

User selects B.

## 4. Micro-validation task

Title: Campaign-material intake and review router.

- Timebox: four hours.
- Scenario: synthetic campaign requests arrive in a form or CSV with deadline, channel, asset type, owner, and free-text notes.
- Build: parse records, classify urgency and missing fields, route complete items to a ready queue, route uncertain/high-risk items to human review, and write a run result.
- Deliver: process map, runnable flow or recorded demo, five test cases, one failure path, result log, and a short reflection.
- Pass: at least four of five tests route correctly; ambiguous input reaches human review; the user explains why AI is used only for free-text interpretation.

## 5. Validation review

Illustrative submitted result:

- a Feishu form and table automation handles deterministic fields;
- an LLM step classifies free-text urgency;
- empty deadline and conflicting priority go to human review;
- five tests are recorded, four pass, and one reveals an overly broad urgency rule;
- the user explains their own workflow design and correction.

Score: 82/100. New evidence: E3 process decomposition and tool execution; E2 testing and failure awareness. Direction B increases from medium-low to medium-high confidence. The failed case becomes useful project evidence rather than being hidden.

## 6. Final project recommendation

Primary project: Multi-channel campaign request triage and delivery-monitoring workflow — a simulated business project for AI Workflow Analyst applications.

Why selected: it reuses the user's actual campaign-operations context while adding the missing evidence: integration, test design, human review, logs, and business tradeoffs.

Five-day plan:

1. Define users, inputs, states, exceptions, success metrics, and synthetic dataset.
2. Build the intake, validation, classification, and routing path.
3. Add one external tool/API integration and human-review queue.
4. Run normal, missing-field, conflicting-rule, malformed-input, and service-failure tests; record results.
5. Improve the failed paths and package README, diagram, demo, screenshots, metrics, limitations, and reflection.

Acceptance gate:

- one end-to-end runnable path;
- at least one genuine integration;
- at least five recorded tests;
- one human-review and one technical-failure path;
- basic run log;
- clear before/after business value without invented production metrics;
- personal ownership is demonstrable.

Backup project: E-commerce weekly-report synthesis and anomaly review workflow. Switch only if request routing cannot be completed within the timebox; preserve integration, testing, and human-review requirements.

## 7. Portfolio packaging

Label: `模拟业务项目｜个人独立完成`.

Portfolio evidence: problem statement, process diagram, architecture, runnable link or demo, synthetic dataset, tests and logs, one failed iteration, tradeoff explanation, and next-step limitations.

Interview story: explain the original operations pain, why deterministic checks precede the LLM step, how uncertain cases are reviewed, what the failed test changed, and what would be required before production use.
