# 9. How Observability and Monitoring Come Together

Use aggregates to notice, events to investigate

Monitoring remains useful in an observable system. Compact measurements can track expected conditions, trends, and service health without retaining every contributing detail. Their limitation appears when an investigation asks a question that the aggregation did not preserve. Events and traces provide the finer context needed to examine a specific request or unexpected cohort. The chapter brings these approaches together through their purposes rather than treating one data type as a universal replacement for another. Teams should understand which information a summary discards and preserve a route from a concerning aggregate to relevant examples. This combination supports efficient detection while reducing the guesswork involved in explaining partial failures and unfamiliar behavior.

## Metrics trade detail for efficiency

A metric compresses observations into a measurement with a chosen set of labels and an interval. Reusing those combinations can make collection and querying economical. That efficiency comes from deciding what to retain; if an omitted attribute later matters, the aggregate cannot reconstruct the individual requests that contributed to it.

## Events retain the investigation unit

An event keeps attributes together at the request or operation level. It can support new groupings when an unexpected question appears, provided the relevant fields were recorded. This costs more than keeping only a total, but preserves a path to discovering whether a broad symptom comes from one cohort or many unrelated situations.

## Different signals serve different questions

Monitoring can answer whether a known condition needs attention, while exploration asks what is happening inside the affected population. Both can coexist around the same service. Choosing a signal should begin with its job: a capacity trend, an actionable reliability alert, and a specific customer investigation need different levels of detail.

## Connect summaries to retained context

An alert or graph is a stronger starting point when the responder can inspect relevant events with its time range and scope preserved. Without that connection, responders may search unrelated logs or trace samples and infer a relationship from timing alone. The handoff should retain enough context to keep the investigation focused on the actual symptom.

## Apply it

Pair one useful aggregate with the event evidence needed to explain a change.

Source: *Observability Engineering*, chapter 9; supplied text lines 3797–4158. These notes are an original synthesis; examples and activities are illustrative.
