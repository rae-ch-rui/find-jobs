# Behavioral evaluation cases

Run each case as a fresh conversation. Give the model only the case input and the skill. Grade behavior and evidence use, not exact wording or identical role titles.

## Global pass criteria

- asks no more than five targeted questions at once;
- labels evidence E0–E3 without upgrading unsupported claims;
- distinguishes the no-interview bottleneck from a generic skill gap;
- keeps A/B/C meaningfully different when direction is uncertain;
- keeps the default potential check to 45–90 minutes and the final MVP within 3–7 days;
- uses scenario questions to test potential before requiring a build, with at most one <=2-hour practical probe when genuinely needed;
- does not recommend a prompt-only project or promise an interview;
- does not invent JD data, work results, metrics, or employment experience.
- does not assign numeric JD-overlap or hiring-access scores without reliable JD evidence.
- does not equate an ambiguous title with the first literal search result;
- confirms actual responsibilities after current-market research and again after the potential check;
- does not require an uncertain user to choose a career direction before the potential check;
- maps every final-MVP step to a researched role workflow, responsibility, capability, deliverable, and acceptance check.

## Case 1 — Experienced enough, zero interviews

Input summary: A 2025 business graduate has eight months of e-commerce operations internship experience, maintained campaign trackers and weekly reports, and submitted 70 applications for AI product and AI operations roles without a screening call. They provide three JDs and the resume used.

Expected behavior:

- diagnose positioning/evidence mismatch before concluding the user lacks ability;
- compare resume evidence with the supplied JD clusters;
- avoid sending the user back to learn AI from the beginning;
- assign scenario questions that test process reasoning and AI intervention judgment before generating a runnable final MVP.

Fail if: it rewrites the resume immediately without diagnosing the funnel, guarantees an interview, or treats tool familiarity as demonstrated ability.

## Case 2 — Projects exist, but nothing is inspectable

Input summary: A recent information-management graduate lists three class projects and says they know Python, SQL, and Dify. They have no repository, screenshots, test cases, demo, or clear account of individual ownership.

Expected behavior:

- label most claims E0/E1 rather than E2/E3;
- identify verifiability and ownership as the immediate gap;
- ask which components were independently completed;
- distinguish role potential from missing artifact evidence; use questions for potential and preserve inspectable execution as a final-MVP requirement.

Fail if: it assumes all three projects are portfolio-ready, treats Q&A as tool-execution evidence, or generates a seven-day final MVP before the potential and responsibility-confirmation gates.

## Case 3 — No target direction

Input summary: A sociology graduate has survey research, volunteer coordination, interview coding, and Excel analysis experience. They dislike pure sales and are unsure what AI-related job fits.

Expected behavior:

- produce distinct A/B/C hypotheses: one close to research/analysis, one transferable workflow role, and one credible overlooked direction;
- support C with at least two evidence points and explicit uncertainty;
- use one potential-question sequence with at most two scoring lenses;
- avoid presenting three renamed variants of the same analyst role.

Fail if: it asks the user to choose from a generic list before using their evidence, assigns a high-confidence technical architect role without proof, or gives exact JD-overlap/hiring-access scores despite having no JD evidence.

## Case 4 — Non-AI background to AI Workflow Analyst

Input summary: A human-resources assistant has one year of recruiting operations experience, mapped interview scheduling, maintained candidate spreadsheets, and used ChatGPT casually. They want an AI Workflow Analyst role but have never used an API.

Expected behavior:

- recognize process mapping and operational exception handling as transferable evidence;
- treat API ability as an unproven gap;
- ask scenario questions about candidate intake, scheduling exceptions, automation boundaries, and human review;
- keep API execution unproven after Q&A and reserve the runnable candidate-flow build for the guided final MVP.

Fail if: it requires a full computer-science curriculum or claims the user already has API integration experience.

## Case 4A — Ambiguous “流程分析” term

Input summary: A user says they want `流程分析` work and describes understanding business needs, mapping cross-team processes, finding automation opportunities, writing requirements, and testing solutions. They do not mention ERP configuration or implementation.

Expected behavior:

- preserve `流程分析` as the user's raw term and research current responsibility language;
- search by the described activities and compare business analysis, business-process improvement, workflow/automation analysis, and any genuinely evidenced neighboring clusters;
- avoid defaulting to ERP process specialist merely because of title similarity;
- show inclusions and exclusions and ask for responsibility confirmation.

Fail if: it searches only the literal title, concludes the target is ERP, or asks the user to choose a different title before showing the responsibility map.

## Case 5 — Target is known, evidence is weak

Input summary: A new graduate targets AI application analyst roles and has read many model tutorials. Their resume contains phrases such as “familiar with RAG and agents,” but they cannot show a runnable workflow, test cases, logs, or a business problem they solved.

Expected behavior:

- keep the one-role path instead of forcing A/B/C;
- identify a capability-evidence gap rather than a direction gap;
- run a role-potential question check before recommending the final MVP;
- reject prompt-only work and require tests, failure handling, and business reasoning.

Fail if: it scores tutorial familiarity as E2/E3 or produces a final portfolio claim before the task is completed.

## Case 6 — Direction is uncertain before the potential check

Input summary: A recent graduate sees two plausible directions in the role map but says they lack enough work exposure to know which one fits.

Expected behavior:

- select one primary potential hypothesis and at most one contrast based on evidence and information value;
- assign four to six scenario questions and explain how they can distinguish the hypotheses;
- allow a constraint-based veto without asking the user to make the career decision first;
- recommend and confirm the target responsibilities only after reviewing the answers and user experience.

Fail if: it blocks on “please choose A or B” before asking the potential questions, requires a multi-hour build by default, or generates a final 3–7 day MVP before post-check target confirmation.

## Case 7 — Final MVP guidance is not a task dump

Input summary: A user passed the potential check for a business-process and AI workflow analysis profile, confirmed the target responsibilities, and accepted a five-day simulated workflow MVP.

Expected behavior:

- show the complete roadmap at summary level and expand only the current step;
- map every step to a researched target-role workflow stage, responsibility, and capability;
- specify the input, ordered actions, tool/fallback, deliverable, acceptance checks, common failures, and resulting job-search evidence;
- require the user's own decisions and artifact before advancing.

Fail if: it gives only a project title and deliverables, dumps an unstructured build tutorial, performs every key decision for the user, or includes steps with no job-responsibility connection.

## Recording results

For each case, record: model/version, date, pass/fail per global criterion, harmful fabrication, unnecessary questions, stage reached, and the smallest rule change justified by the failure. Do not change the skill merely because wording differs from an example.
