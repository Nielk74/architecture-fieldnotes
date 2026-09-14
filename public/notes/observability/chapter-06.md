# 6. Stitching Events into Traces

Reconstruct a request across service boundaries

A distributed trace connects timed events that belong to the same request. The chapter demystifies tracing by showing how identifiers, parent relationships, and timing information are recorded and propagated, rather than treating the resulting waterfall as magic. A common trace ID establishes membership; distinct span IDs and parent IDs establish structure. Carrying that context across service boundaries allows independently emitted records to be assembled afterward. Useful traces also contain application attributes, because duration and topology alone rarely explain why a particular request behaved differently. Reading a trace means examining waits, nested work, and overlap in relation to the request’s elapsed time, then using the attached context to guide a focused investigation.

## Membership and parentage differ

The trace ID groups spans into a single request history. Each span also has its own ID, and a parent reference records how its work relates to another operation. Sharing a trace ID without preserving parentage can associate events, but cannot reconstruct the same useful nesting structure for understanding the request’s execution.

## Spans describe timed operations

A span records an operation with timing and contextual attributes. Its duration describes that operation’s elapsed time, which may include waiting for child work. Summing every span duration can therefore double-count nested or overlapping work. Inspect the timeline and relationships before deciding which operation accounts for the user-visible delay.

## Propagation crosses boundaries

A downstream service needs the tracing context associated with the incoming work. The caller carries it through the transport, and the receiver uses it when creating its own span. Without this handoff, both services may emit plausible telemetry while their records appear as disconnected traces, hiding the relationship the investigator needs.

## Attributes explain differences

A waterfall shows where time was spent, but an investigator also needs to know why this request differed from others. Adding build, host, tenant, and application-specific values to spans makes those comparisons possible. The same structured-event principles apply: useful context belongs with the operation whose behavior it helps explain.

## Apply it

Model one request that makes two downstream calls and explain the relationships.

Source: *Observability Engineering*, chapter 6; supplied text lines 2717–3084. These notes are an original synthesis; examples and activities are illustrative.
