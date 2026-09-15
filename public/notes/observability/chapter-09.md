# Chapter 9: How Observability and Monitoring Come Together

*Pip’s adventure: The counter rings the bell; the event explains why. Fictional teaching story; concepts follow the cited source.*

Source: text lines 3797–4158.

Pip’s error counter signals trouble but cannot identify the affected stalls. Metrics and events serve complementary jobs. Preserving the alert’s time and scope into detailed investigation connects economical summaries with the context needed to explain a specific failure.

## Metrics trade detail for efficiency

Pip’s fleet error counter rises without naming a customer. Metrics compress observations using chosen labels and intervals, making repeated collection and queries economical. That efficiency depends on deciding which details survive. Pip cannot reconstruct omitted request identities from the aggregate later.

Source: text lines 3797–4158.

## Events retain the investigation unit

Pip returns to individual request events and groups errors by build and tenant. Events retain operation-level attributes together for unanticipated questions, if the relevant fields were recorded. They cost more than totals but preserve cohort relationships. Pip can distinguish one concentrated failure from several unrelated situations.

Source: text lines 3797–4158.

## Different signals serve different questions

Pip uses utilization trends for capacity, an SLO alert for attention, and a trace for one slow checkout. Monitoring checks known conditions; exploration examines the affected population. Both can serve the same system. Pip chooses detail according to the question instead of demanding one signal do every job.

Source: text lines 3797–4158.

## Connect summaries to retained context

Pip opens an error graph directly into its failing endpoint requests. The handoff preserves time range and scope. Otherwise unrelated logs or samples can look connected merely because their timestamps resemble the graph. Pip links summaries to retained context so the next question stays about the actual symptom.

Source: text lines 3797–4158.

## Transfer challenge: The aggregate has no tenant field

An error graph spikes, but its labels contain only service and status.

### Investigate matching request events

Can identify which tenants and builds contribute to the spike. Requires a retained event source and aligned time range. The team can estimate impact and locate the affected customer population.

### Add tenant labels to the metric for future traffic

May support a specific recurring tenant-level measurement. Cannot recover past context and may greatly expand time-series cardinality. Future metrics change, but the current incident still requires another evidence source.

Use the retained event evidence for this incident and choose future metric labels for their intended measurement.

## Connect detection to explanation

Pair one useful aggregate with the event evidence needed to explain a change.

- Metric and its retained labels
- Question the aggregate cannot answer
- Context-preserving investigation link
