# 18. Telemetry Management with Pipelines

Treat the telemetry pipeline as a service

A telemetry pipeline mediates between applications that emit data and backends that store or analyze it. This creates a place to buffer bursts, route records, normalize formats, enrich context, and apply filtering or sampling policies. Slack’s case shows why those responsibilities become operationally significant at scale. A backend outage need not immediately erase application evidence if buffers can hold and replay it, but queues cannot absorb sustained overload forever. Processing mistakes can silently corrupt the very data used to diagnose incidents. Pipelines therefore need their own checks for correctness, capacity, freshness, and availability. Their purpose is to keep useful evidence flowing under changing conditions, with explicit trade-offs about what is delayed, transformed, or dropped.

## Components separate responsibilities

A receiver accepts data, a buffer temporarily holds it, a processor transforms it, and an exporter sends it onward. These roles can be chained or combined depending on the workload. Separating responsibilities creates places to control flow and routing without requiring every application to implement each backend’s format and delivery behavior itself.

## Buffers absorb temporary disruption

A queue or local disk buffer can preserve telemetry when a backend is briefly unavailable or traffic spikes. Replay then catches up after recovery. Capacity is finite: if input persistently exceeds output, the backlog grows until something must change. Buffering buys time; it does not remove the need for throughput and overload policies.

## Transformation changes evidence

Pipelines may normalize formats, redact sensitive values, add infrastructure metadata, or filter low-value data. Each transformation affects what downstream users can ask and trust. Validate schemas, timestamps, and retained context, because an apparently healthy delivery rate can conceal incorrect values or records dropped by an overly broad rule.

## Freshness and history can compete

During a log storm, processing the entire backlog first may leave responders looking at stale conditions. Prioritizing fresh evidence can help current diagnosis, with historical backfill handled later if capacity permits. Make this policy visible and monitor age, loss, and backlog so users understand whether a quiet graph means recovery or delayed ingestion.

## Apply it

Describe how a pipeline behaves when a backend is unavailable and then recovers.

Source: *Observability Engineering*, chapter 18; supplied text lines 8054–8666. These notes are an original synthesis; examples and activities are illustrative.
