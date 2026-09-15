# Chapter 8: Analyzing Events to Achieve Observability

*Pip’s adventure: Follow the clue, then test it. Fictional teaching story; concepts follow the cited source.*

Source: text lines 3449–3796.

Pip hears that “the market is slow” and starts by finding the affected requests. Comparisons narrow the population one useful distinction at a time. Automated difference ranking speeds the search, but Pip must still test the explanation.

## Verify the starting observation

Pip hears a stall owner blame the database for slow checkout. The complaint identifies pain, not necessarily the failing component. Pip verifies the latency change, requests, and time range before selecting a cause. The investigation begins with observed behavior rather than a favored explanation.

Source: text lines 3449–3796.

## Search distinguishing dimensions

Pip finds one availability zone in nearly all slow requests but few normal ones. Samples, groups, and filters reveal distinguishing dimensions. A field appearing in every failure is weak evidence if it is equally common in successes. Pip chooses comparisons that meaningfully change the question.

Source: text lines 3449–3796.

## Repeat on a narrower population

Pip narrows to the affected zone, then compares instance types and operation paths. The first difference may identify only part of the problem. Repeated filtering and comparison connect each clue to the next question. Pip continues until evidence supports a concrete explanation or action, not an intuitive leap.

Source: text lines 3449–3796.

## Automate comparison, interpret the result

Pip’s comparison tool ranks region and instance type as unusually common in failures. Automated distribution comparison accelerates searching many dimensions. The ranking is not causation: both fields may describe one cohort. Pip examines their relationship and gathers further evidence before accepting the explanation.

Source: text lines 3449–3796.

## Transfer challenge: A misleading common attribute

Every slow request uses the same runtime, which also handles almost all healthy traffic.

### Compare attribute frequency against the baseline

Shows whether the runtime actually distinguishes the anomaly. Requires a relevant comparison population. The investigator can reject a ubiquitous field and continue toward a genuinely distinguishing clue.

### Escalate to the runtime maintainers

Can engage specialized expertise. May pursue a ubiquitous attribute that explains no difference. Specialists may spend time on a runtime shared equally by healthy and unhealthy requests.

Common among failures is not the same as unusually common among failures.

## Run the core analysis loop

Describe a symptom, verify it, and design two successive comparisons.

- Verified change and baseline
- First distinguishing dimension
- Next filter or stopping evidence
