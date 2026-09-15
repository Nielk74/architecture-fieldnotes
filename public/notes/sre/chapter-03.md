# Chapter 3: Embracing Risk

*Pip’s adventure: Another nine has a price. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1485–1904.

Pip wants perfect harbor availability, but every extra guarantee costs capacity, engineering time, and freedom to change. The crew chooses reliability around user consequences, measures partial failures, and gives different workloads service classes that fit their needs.

## Reliability has an opportunity cost

Pip proposes another expensive nine of uptime for a reporting tool. Higher availability consumes resources, engineering work, and room for change. Product judgment weighs user expectations and failure consequences against other useful improvements. Pip supports that choice with feasibility and cost estimates instead of assuming maximum reliability always wins.

Source: text lines 1485–1904.

## Request-based availability captures partial failure

Pip sees a region fail while most harbor requests still succeed. Time-based uptime hides that partial impact; request availability uses successful requests divided by total eligible requests. Losing 2,000 of a million daily requests yields 99.8% success. Pip states the window and denominator, remembering that critical transactions may matter more than optional refreshes.

Source: text lines 1485–1904.

## Different clients need different service classes

Pip gives batch reports the same spare capacity as interactive booking. Batch clients may accept queues for throughput and lower cost; interactive clients need short delays. Separate classes can vary redundancy, placement, and resource policies. Pip chooses the least expensive class that meets each workload’s needs.

Source: text lines 1485–1904.

## Measured failures consume a shared budget

Pip’s network incident spends half the shared error allowance. Failures consume the budget regardless of whether a release, network, or another cause produced them. The team’s agreed policy now calls for a smaller canary and slower expansion. Pip preserves room for future change by reducing risk, not by arguing whose failures count.

Source: text lines 1485–1904.

## Transfer challenge: Spend reliability deliberately

A payments API is currently more reliable than its target, but a release would consume some of that margin while fixing a costly reconciliation process. The team must choose whether to release during the measured budget period.

### Release within the error budget

The team buys user value while staying inside an agreed reliability allowance. A weak SLO or bad measurement could hide real user harm. The release proceeds with rollback and budget monitoring.

### Freeze all change until perfect reliability

The service avoids introducing new failure during a sensitive period. The backlog and operational cost grow without a defined benefit. No outage occurs, but the reconciliation problem remains and consumes engineers.

An error budget turns reliability into a release decision: spend it for user value only while the SLO and rollback signal remain trustworthy.

## Price one additional nine

Compare an interactive checkout service with a nightly report. Explain which failure consequences justify different objectives and define a budget-based release decision.

- User consequences
- Cost of improvement
- Budget policy
