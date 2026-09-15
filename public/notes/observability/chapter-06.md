# Chapter 6: Stitching Events into Traces

*Pip’s adventure: The order crosses three stalls. Fictional teaching story; concepts follow the cited source.*

Source: text lines 2717–3084.

Pip sees several plausible records but no complete request journey. Trace membership, span identity, and parentage connect the work. Timing must respect nesting and concurrency, while attributes explain why this order differed from the others.

## Membership and parentage differ

Pip gives authorization and profile lookup the same trace ID. That groups their request history but does not describe their relationship. Each span needs its own ID and a parent reference for useful nesting. Pip preserves membership and parentage instead of flattening every operation into one bag of events.

Source: text lines 2717–3084.

## Spans describe timed operations

Pip adds two parallel 200-millisecond lookups and predicts 400 milliseconds of delay. Span duration is elapsed operation time and may include child work. Summing nested or overlapping durations can double-count. Pip reads timing and relationships before assigning responsibility for the user-visible wait.

Source: text lines 2717–3084.

## Propagation crosses boundaries

Pip’s downstream service emits a new disconnected trace. The caller must carry incoming work’s context through the transport and the receiver must extract it. The downstream span then belongs to the same request journey. Without that handoff, individually plausible telemetry hides the relationship Pip needs.

Source: text lines 2717–3084.

## Attributes explain differences

Pip locates a slow database span but still cannot explain the difference. Timing shows where; build, host, tenant, and domain attributes help explain why this request was unusual. Pip records shard and operation type on the relevant span. The structured-event principle follows the work whose behavior the field explains.

Source: text lines 2717–3084.

## Transfer challenge: A broken handoff

A checkout trace stops at the payment client while payment-service traces start independently.

### Inspect context injection and extraction

Can restore the missing cross-service relationship. Requires checking both sides of the transport boundary. The next captured request can reveal the complete checkout-to-payment relationship.

### Increase payment span retention

Provides more payment examples. Does not connect them to their originating checkouts. The backend stores a larger collection of disconnected payment operations.

More disconnected spans do not repair missing propagation.

## Draw a trace by hand

Model one request that makes two downstream calls and explain the relationships.

- Trace and span identifiers
- Parent relationship at each hop
- Where durations overlap
