# Real-user pilot protocol

Use this protocol for the first 3–5 users. The goal is to test decision quality and completion behavior, not to claim employment outcomes from a tiny sample.

## Recruit

Include a mix of:

- at least two users who have applied repeatedly without interviews;
- at least one user with no settled role direction;
- at least one non-AI background user considering an AI workflow role;
- 0–1 year work experience, with informed consent to use anonymized session notes.

Do not collect company secrets, customer data, identity documents, or unredacted confidential materials.

## Session

1. Ask each participant to install the Skill from `https://github.com/rae-ch-rui/find-jobs/tree/main/skills/career-transition-ai-workflow` with `$skill-installer`.
2. Start a fresh Codex conversation and invoke `$career-transition-ai-workflow`; do not paste expected answers or evaluator notes into that conversation.
3. Record baseline: target, application count, interview count, available evidence, confidence, and weekly time.
4. Run intake and bottleneck diagnosis without coaching the answer.
5. Ask the user to rate whether the diagnosis is understandable and evidence-based.
6. Research current role responsibilities, present the clustered role map, and record the user's meaning confirmation and corrections.
7. Present A/B/C hypotheses and observe whether the differences are meaningful.
8. Let the Skill assign one primary potential hypothesis and at most one contrast; do not require the user to choose a career direction first.
9. Run the 45–90 minute question check one question at a time. Record whether each question clearly maps to a target-role workflow and responsibility.
10. Review the potential rubric and record disagreements. Use the optional practical probe only when a role-critical execution threshold remains unresolved.
11. Record the post-check target-responsibility confirmation.
12. Generate the final MVP only when the potential and confirmation gates pass, then inspect whether every step includes a role-workflow and capability mapping.

Use a separate conversation for each participant. Do not require participants to provide an API key or use a shared hosted service. The installed Skill directory is the tested artifact.

## Measures

- intake completion time and number of follow-up questions;
- user agreement with evidence facts, separately from agreement with conclusions;
- A/B/C distinctness, question-check acceptance, and post-check target-confirmation rate;
- JD sample size, source coverage, and correction rate at the first responsibility-confirmation gate;
- fast versus deep research mode, JD count, search duration, and whether the saturation stop fired;
- potential-question completion rate and optional practical-probe rate;
- percentage of final-MVP steps with a clear responsibility, capability, deliverable, and acceptance mapping;
- time to first useful output and approximate total turns before the potential check starts;
- rubric score and reviewer/model score difference;
- final-project acceptance, scope reduction, and completion;
- portfolio artifacts produced;
- applications and interviews in the following 14 days, recorded as observation rather than causation.

## Success threshold for the first iteration

- at least four of five users understand the diagnosis without additional explanation;
- at least three users start the potential questions and at least two complete them;
- no fabricated experience or unsupported E2/E3 claim;
- no accepted project exceeds seven days after scope review;
- reviewer and Skill potential scores differ by no more than 15 points in most completed checks.

## Issue log

For every failure, record: user type, stage, observed behavior, expected behavior, consequence, evidence, proposed narrow change, and whether the failure repeats. Prioritize repeated decision failures over stylistic preferences.
