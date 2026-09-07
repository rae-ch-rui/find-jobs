# Workflow states and gates

Use one state at a time. State the current state internally and expose it to the user only when it improves clarity.

| State | Required input | Output | Exit gate |
|---|---|---|---|
| `intake_pending` | Basic situation and at least one experience item | Missing-evidence list and at most five questions | Enough evidence to diagnose or explicitly low confidence |
| `bottleneck_ready` | Intake plus application history when applicable | Evidence summary and bottleneck hypothesis | User can understand what is blocking interviews |
| `role_research_active` | Evidence map plus raw role term or uncertain direction | Current JD responsibility clusters and source coverage | Enough current evidence to present a role map, or an explicit thin-sample limitation |
| `meaning_confirmation` | Responsibility clusters | User-confirmed inclusions, exclusions, and corrections | The work content being considered is clear without requiring a career choice |
| `direction_ready` | Evidence map, confirmed responsibility scope, preferences, constraints, and JD evidence when available | A/B/C hypotheses or one-role analysis plus system-selected potential-check plan | One primary hypothesis and at most one contrast are assigned for questions |
| `potential_check_active` | System-assigned hypothesis and the confirmed responsibility profile | One-at-a-time scenario questions with role-workflow mappings | Four to six answers provide enough signal, or a specific execution unknown remains |
| `potential_review` | Question answers and optional practical-probe result | Potential rubric, primary/backup recommendation, and explicit untested capabilities | Potential supports one direction, needs one focused probe, or favors the backup |
| `target_confirmation` | Potential result plus responsibility profile | User-confirmed target responsibilities | Actual work scope is accepted or corrected after evidence exists |
| `project_ready` | Supported direction, updated evidence, and confirmed target responsibilities | Dynamically generated primary and backup 3–7 day MVP cards plus role mapping | User accepts one feasible scope and confirms business context, daily time, tools/access, and constraints |
| `project_active` | Accepted MVP, confirmed context, daily time, tools/access, and constraints | Full roadmap plus one expanded current step, checkpoints, tests, and fallback scope | Current artifact passes before the next step is expanded |
| `portfolio_ready` | Runnable result, tests, logs, screenshots, and reflection | Portfolio description and interview evidence | Artifacts are honest, inspectable, and attributable |
| `blocked` | A decision-critical input is unavailable | Exact blocker and smallest next action | Missing input or authorization arrives |

## Transition rules

- A known target role can move from `bottleneck_ready` to a one-role analysis, but it does not bypass evidence checks.
- A broad title or unknown target requires current role research and meaning confirmation before scoring.
- An unknown target role requires A/B/C hypotheses, but the system assigns the potential questions; the user does not have to choose a career direction first.
- Do not enter `project_ready` from self-reported preference alone. Require described evidence plus a completed potential check, or explain why confidence remains low.
- Do not enter `project_ready` until the user confirms the post-check target responsibilities.
- Do not enter `project_active` while business context, daily time, or tool/access constraints are unknown. A provisional roadmap does not count as project start.
- Permit one focused follow-up or practical probe when the question evidence is insufficient. Do not repeatedly redesign questions to force a pass.
- Return to `direction_ready` when the potential evidence contradicts the role hypothesis.
- Use `blocked` only for a decision-critical gap. Ordinary uncertainty should be represented as confidence and a next test.

## Minimum evidence gates

- Bottleneck diagnosis: one experience item plus application evidence when the user has applied.
- A direction: at least two supporting evidence points; C also requires explicit uncertainty.
- Final project: one completed potential check, confirmed target responsibilities, and a project score of at least 70.
- Portfolio-ready: runnable or demonstrable path, integration, test cases, failure or review path, basic record, and clear ownership.
