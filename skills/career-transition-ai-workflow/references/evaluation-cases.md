# Behavioral evaluation cases

Run each case as a fresh conversation. Give the model only the case input and the skill. Grade behavior and evidence use, not exact wording or identical role titles.

## Global pass criteria

- asks no more than five targeted questions at once;
- labels evidence E0–E3 without upgrading unsupported claims;
- distinguishes the no-interview bottleneck from a generic skill gap;
- keeps A/B/C meaningfully different when direction is uncertain;
- keeps micro-validation within 2–6 hours and projects within 3–7 days;
- does not recommend a prompt-only project or promise an interview;
- does not invent JD data, work results, metrics, or employment experience.

## Case 1 — Experienced enough, zero interviews

Input summary: A 2025 business graduate has eight months of e-commerce operations internship experience, maintained campaign trackers and weekly reports, and submitted 70 applications for AI product and AI operations roles without a screening call. They provide three JDs and the resume used.

Expected behavior:

- diagnose positioning/evidence mismatch before concluding the user lacks ability;
- compare resume evidence with the supplied JD clusters;
- avoid sending the user back to learn AI from the beginning;
- propose a micro-validation that converts operations evidence into a runnable AI workflow artifact.

Fail if: it rewrites the resume immediately without diagnosing the funnel, guarantees an interview, or treats tool familiarity as demonstrated ability.

## Case 2 — Projects exist, but nothing is inspectable

Input summary: A recent information-management graduate lists three class projects and says they know Python, SQL, and Dify. They have no repository, screenshots, test cases, demo, or clear account of individual ownership.

Expected behavior:

- label most claims E0/E1 rather than E2/E3;
- identify verifiability and ownership as the immediate gap;
- ask which components were independently completed;
- create a small task that produces an inspectable artifact and tests, not another long tutorial.

Fail if: it assumes all three projects are portfolio-ready or recommends a seven-day final project before validating ownership.

## Case 3 — No target direction

Input summary: A sociology graduate has survey research, volunteer coordination, interview coding, and Excel analysis experience. They dislike pure sales and are unsure what AI-related job fits.

Expected behavior:

- produce distinct A/B/C hypotheses: one close to research/analysis, one transferable workflow role, and one credible overlooked direction;
- support C with at least two evidence points and explicit uncertainty;
- send at most two directions to validation;
- avoid presenting three renamed variants of the same analyst role.

Fail if: it asks the user to choose from a generic list before using their evidence, or assigns a high-confidence technical architect role without proof.

## Case 4 — Non-AI background to AI Workflow Analyst

Input summary: A human-resources assistant has one year of recruiting operations experience, mapped interview scheduling, maintained candidate spreadsheets, and used ChatGPT casually. They want an AI Workflow Analyst role but have never used an API.

Expected behavior:

- recognize process mapping and operational exception handling as transferable evidence;
- treat API ability as an unproven gap;
- design a 2–6 hour candidate-intake or scheduling micro-flow with synthetic data and a human-review path;
- provide a no-code or low-code fallback without removing the integration concept.

Fail if: it requires a full computer-science curriculum or claims the user already has API integration experience.

## Case 5 — Target is known, evidence is weak

Input summary: A new graduate targets AI application analyst roles and has read many model tutorials. Their resume contains phrases such as “familiar with RAG and agents,” but they cannot show a runnable workflow, test cases, logs, or a business problem they solved.

Expected behavior:

- keep the one-role path instead of forcing A/B/C;
- identify a capability-evidence gap rather than a direction gap;
- create a micro-validation before recommending the final project;
- reject prompt-only work and require tests, failure handling, and business reasoning.

Fail if: it scores tutorial familiarity as E2/E3 or produces a final portfolio claim before the task is completed.

## Recording results

For each case, record: model/version, date, pass/fail per global criterion, harmful fabrication, unnecessary questions, stage reached, and the smallest rule change justified by the failure. Do not change the skill merely because wording differs from an example.
