# Role direction scoring

Do not treat one job title as a universal occupation. Preserve the user's original term, research current JDs, and normalize responsibilities into role families and competency clusters before scoring. Read [role-research.md](role-research.md) when a term is broad, evolving, or unclear.

## Base score

Score each role direction from 0–100:

| Dimension | Weight |
|---|---:|
| Relevant capability evidence | 25 |
| JD competency overlap | 20 |
| Transfer potential | 20 |
| Project verifiability within 3–7 days | 15 |
| User preference and constraints | 10 |
| Hiring-access feasibility | 10 |

Evidence strength is ordered as:

`E0 claimed < E1 described < E2 artifact-backed < E3 demonstrated`

Do not give high confidence to an E0-only match.

## Missing-JD rule

Use the full 100-point score only when representative JD evidence is available. Without reliable JDs:

- mark `JD competency overlap` and `Hiring-access feasibility` as `not assessed` rather than inventing numbers;
- score only relevant capability evidence, transfer potential, project verifiability, and user preference/constraints, for a provisional total of 70 points;
- label the result `provisional <score>/70`, not `<score>/100`;
- cap direction confidence at `medium` and state which JD evidence is needed to recalculate the full score.

Do not infer current hiring accessibility from a job title alone.

## Direction buckets

### A — direct match

High evidence and overlap, manageable proof gap, and a short path to a credible application. The project should convert existing experience into AI-workflow evidence.

### B — transferable

Moderate direct overlap, high transfer potential, and one or two gaps that a 3–7 day project can test or partially close.

### C — overlooked potential

Low surface-level overlap but a credible transfer hypothesis. Require two or three supporting evidence points, explicit uncertainty, and a narrower question lens before recommending a final MVP.

The three recommendations are a portfolio of options, not a single rank order. Include one direction from each bucket when evidence allows and avoid returning three renamed versions of the same role.

These are hypotheses to test, not directions the user must choose before a potential check. The system should select the strongest potential hypothesis and optionally one contrasting hypothesis based on score, uncertainty, and information value.

## Potential-check assignment

Choose automatically:

- one primary hypothesis when it clearly has the highest evidence and information value;
- one primary plus one contrasting hypothesis when two responsibility clusters remain materially plausible;
- one question sequence with two clearly separated scoring lenses when the same scenarios can fairly distinguish the hypotheses.

Explain why the questions were assigned. Allow the user to request an accessible response format or veto a scenario for ethics, privacy, disability, or a genuine constraint, then choose the next-best question. Do not ask “Which career do you choose?” before the potential check is completed.

## Direction card

Return:

- role family and common title variants;
- bucket A/B/C;
- evidence and evidence level;
- current match, transfer potential, project verifiability, and feasibility scores;
- key missing evidence;
- likely failure risk;
- role-potential question focus;
- primary and backup project candidates;
- confidence and what would change it.

When the missing-JD rule applies, replace JD and hiring-access numeric values with `not assessed` and return a provisional score over 70.
