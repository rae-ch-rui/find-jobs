# Workflow states and gates

Use one state at a time. State the current state internally and expose it to the user only when it improves clarity.

| State | Required input | Output | Exit gate |
|---|---|---|---|
| `intake_pending` | Basic situation and at least one experience item | Missing-evidence list and at most five questions | Enough evidence to diagnose or explicitly low confidence |
| `bottleneck_ready` | Intake plus application history when applicable | Evidence summary and bottleneck hypothesis | User can understand what is blocking interviews |
| `direction_ready` | Evidence map, preferences, constraints, JD evidence when available | A/B/C direction cards or one-role analysis | User selects at most two directions |
| `validation_active` | Selected direction and time/tool constraints | One 2–6 hour task with pass criteria | User submits artifacts or a specific result report |
| `validation_review` | Task output, tests, reflection, and ownership evidence | Rubric score and updated confidence | One direction passes, needs one retry, or is rejected |
| `project_ready` | Passed direction and updated evidence | Primary and backup 3–7 day project cards | User accepts one feasible scope |
| `project_active` | Accepted project and daily availability | Daily plan, checkpoints, tests, fallback scope | Deliverables meet the acceptance gate |
| `portfolio_ready` | Runnable result, tests, logs, screenshots, and reflection | Portfolio description and interview evidence | Artifacts are honest, inspectable, and attributable |
| `blocked` | A decision-critical input is unavailable | Exact blocker and smallest next action | Missing input or authorization arrives |

## Transition rules

- A known target role can move from `bottleneck_ready` to a one-role analysis, but it does not bypass evidence checks.
- An unknown target role requires A/B/C hypotheses before a final project recommendation.
- Do not enter `project_ready` from self-reported preference alone. Require at least described evidence plus a completed micro-validation, or explain why confidence remains low.
- Permit one reduced-scope retry after a failed validation when the failure was caused by scope or unfamiliar tooling. Do not repeatedly redesign tasks to force a pass.
- Return to `direction_ready` when the validation contradicts the role hypothesis.
- Use `blocked` only for a decision-critical gap. Ordinary uncertainty should be represented as confidence and a next test.

## Minimum evidence gates

- Bottleneck diagnosis: one experience item plus application evidence when the user has applied.
- A direction: at least two supporting evidence points; C also requires explicit uncertainty.
- Final project: one completed micro-validation and a project score of at least 70.
- Portfolio-ready: runnable or demonstrable path, integration, test cases, failure or review path, basic record, and clear ownership.
