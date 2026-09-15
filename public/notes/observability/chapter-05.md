# Chapter 5: Structured Events Are the Building Blocks of Observability

*Pip’s adventure: Keep the clues on the same receipt. Fictional teaching story; concepts follow the cited source.*

Source: text lines 2386–2716.

Pip’s market logs contain all the right words but cannot connect them to one request. Structured events accumulate context during a unit of work and record its outcome. Wide fields keep combinations available for questions nobody thought to ask in advance.

## An event represents a unit of work

Pip starts an event when a checkout enters the service. The chapter’s event represents that request’s interaction with the service. Route, tenant, selected backend, duration, and final status accumulate until completion. Pip keeps input, circumstances, and outcome associated instead of asking tomorrow’s investigator to guess their relationship.

Source: text lines 2386–2716.

## Structure enables comparison

Pip stores “request took 820 milliseconds” inside a JSON message. Encoding prose as JSON does not structure the useful attributes. A numeric duration_ms field supports comparison; a tenant field supports grouping without parsing changing sentences. Pip gives machines stable named fields for the questions that matter.

Source: text lines 2386–2716.

## Wide records retain combinations

Pip finds failures only for one rare build-region combination. A wide event retains many attributes of the same request. Joint context permits comparisons involving build, user group, and backend together. Separate aggregates can lose the association even when every individual total survives.

Source: text lines 2386–2716.

## Enrich during execution

Pip does not know the account or chosen shard at request entry. Authentication, routing, retries, and errors reveal context during execution. Pip enriches the same event as those facts arrive. The final record explains what actually happened, including the outcome unavailable at the start.

Source: text lines 2386–2716.

## Transfer challenge: A pile of disconnected logs

A service logs tenant, backend choice, and failure on separate lines without request identity.

### Emit one enriched request event

Preserves the relationship among context and outcome. Requires collecting attributes through the request lifecycle. Concurrent requests remain distinguishable because each record holds its own context.

### Add more descriptive text to each line

Can improve readability for an individual message. Still leaves concurrent requests difficult to correlate. The investigator must still guess which messages describe the same request.

The missing information is the relationship among facts, not the volume of prose.

## Sketch a wide event

Design the record for one request from entry through completion.

- Known on entry
- Learned during execution
- Outcome and typed measurements
