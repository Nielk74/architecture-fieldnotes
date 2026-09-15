# Chapter 28: Accelerating SREs to On-Call and Beyond

*Pip’s adventure: Pip’s first shift is a rehearsal, not a surprise. Fictional teaching story; concepts follow the cited source.*

Source: text lines 13348–13941.

Pip learns the booking service by following a request, testing hypotheses, and practicing failures before taking primary duty. Mentors check understanding rather than reading completion. Shadowing and supported responsibility connect training to real production work.

## An ordered learning path

Pip follows a booking request from ingress to storage. An ordered training path supplies concepts, practical tasks, documents, experts, and questions that demonstrate understanding. A mentor asks which failures preserve the main response. Visible progress means growing operational readiness, not merely checking off reading.

Source: text lines 13348–13941.

## Reasoning beyond procedures

Pip redraws the live dependency graph and discovers an undocumented fallback. Runbooks cannot anticipate every incident; reverse engineering, comparison, and hypothesis tests build reasoning. Pip explains which observations support the model to an expert. The discussion can repair the team’s assumptions as well as teach the newcomer.

Source: text lines 13348–13941.

## Practice failures before primary responsibility

Pip predicts what happens when a staging dependency becomes unresponsive. Postmortems teach mechanisms, role-play explores choices, and contained breakage builds tool familiarity. The isolated stack lets Pip compare expected exhaustion with actual metrics. A first real page should not also be the first encounter with a failing service.

Source: text lines 13348–13941.

## Shadowing, documentation, and continuing ownership

Pip observes a real shift, then leads one with an experienced engineer available. Shadowing and reverse shadowing develop responsibility without abandoning support. Pip coauthors the review and corrects training material with an expert. Project ownership and continuing technical sessions keep learning alive after qualification.

Source: text lines 13348–13941.

## Transfer challenge: Train an engineer for real duty

A new SRE understands the service code but has never handled a page. Two senior engineers are available for one rotation and the service has a complicated recovery procedure.

### Use shadowing, a bounded practice incident, then paired duty

Training converts implicit expertise into observed operational skill. Senior time is required and practice can expose simulated faults. The learner handles a rehearsed failover with a mentor before taking solo duty.

### Put the new engineer alone on the next rotation

The new engineer gains direct experience quickly. A real incident becomes the first rehearsal with customer impact. The learner escalates late and the senior must reconstruct context.

Code familiarity alone does not establish incident readiness. Combine a service learning path, realistic practice, and observed shifts, then let the learner lead with support before relying on independent response.

## Plan an on-call apprenticeship

Design a short progression for an engineer who knows the code but has not operated the service.

- Comprehension
- Practice
- Observed readiness
