# 5. Structured Events Are the Building Blocks of Observability

Keep one request’s context together

Structured events make later investigation possible by preserving the details of a meaningful unit of work. The chapter proposes collecting context as a request enters, executes, and exits a service, then emitting a record that associates those details with its outcome. This differs from scattering pieces across independent log lines or reducing them immediately into separate totals. Named fields enable filtering and comparison, while sufficiently wide records preserve combinations the instrumenter did not know would matter. The goal is not simply to make text look like JSON. The event must retain coherent request context at useful granularity, so an engineer can compare unusual behavior with normal behavior without reconstructing the story from disconnected fragments.

## An event represents a unit of work

For the chapter’s model, an event records one request’s interaction with a service. Begin collecting context when that work starts, add relevant details as they become known, and record the outcome when it ends. This scope associates the input, execution circumstances, and result rather than leaving their relationship for a later investigator to guess.

## Structure enables comparison

Named fields give machines stable places to find values. A duration field can be compared numerically, while a tenant field can be grouped without parsing changing message prose. Merely encoding a sentence in JSON leaves most of its useful meaning unstructured; the attributes needed for investigation must themselves be represented as fields.

## Wide records retain combinations

A wide event includes many attributes that describe the same request. Their joint presence lets an investigator ask whether failures depend on a particular build, user group, and backend together. If each attribute is recorded in a separate aggregate, that association may be lost even when all the individual totals are available.

## Enrich during execution

Not every useful detail is known at request entry. Authentication may discover an account, routing may select a shard, and execution may encounter a retry or error. Accumulating these facts into the event lets the final record capture what actually happened, including outcome information unavailable when the request began.

## Apply it

Design the record for one request from entry through completion.

Source: *Observability Engineering*, chapter 5; supplied text lines 2386–2716. These notes are an original synthesis; examples and activities are illustrative.
