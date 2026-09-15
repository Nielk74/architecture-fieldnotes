# Chapter 11: Pipeline Architecture Style

*Pip’s adventure: Pip builds a book-record assembly line. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 143–148.

Pip turns incoming records into useful catalog data through focused filters. One-way pipes make composition understandable, but do not promise separate processes or independent scaling. The crew tests each transformation and the failure boundary of the whole pipeline.

## One-way pipes

Pip passes a telemetry record from reader to duration test, calculator, then storage. Pipes usually connect filters point to point in one direction. Small payloads and hidden filter implementation keep processing order clear. Pip treats the pipeline as composition, not proof that stages are separate processes or independently scalable.

Source: pp. 143–145.

## Four focused filters

Pip’s producer emits records; a tester chooses the relevant kind. A transformer changes and forwards data; a consumer persists or presents the final result. Independent, generally stateless filters each do one task. Pip branches duration and uptime processing without changing the producer’s responsibility.

Source: pp. 143–146.

## Composition creates reuse

Pip reuses normalization in both search-index and reporting flows. Simple directional contracts let predictable filters combine into larger behavior. The Unix word-frequency example shows ordinary commands composing a clear solution. Pip adds a connection-wait tester after classification without rewriting the earlier filters.

Source: pp. 144–146.

## A useful fit and its limits

Pip tests an import filter by filter, then a runaway parser exhausts the process. Pipelines suit one-way conversion, ETL, shell work, telemetry, and mediation with useful modularity. A typical monolithic pipeline still shares one deployment quantum and failure boundary. Pip needs additional concurrency or deployment design to scale and recover stages independently.

Source: pp. 145–148.

## Transfer challenge: Telemetry stream for a small platform

A platform team receives service telemetry and wants duration, uptime, and database-wait metrics. It has one deployment unit, modest load, and needs a clear way to add a metric next quarter. A few records are malformed, and the team must decide whether to keep a linear pipeline or introduce a shared branching coordinator for the initial release and a clear ownership rule.

### Pipes and filters

Small producer, tester, transformer, and consumer stages make each metric rule easy to isolate and extend. A monolithic process still shares failure and scaling fate, and branching behavior must be tested across the stream. The team adds a database-wait tester after uptime classification and reuses the existing consumer contract. A memory bug in one calculator still requires recovering the deployment unit after the stream drains.

### Central coordinator

One component can see the whole workflow, centralize malformed-record handling, and coordinate complex routes. The coordinator becomes coupling and a bottleneck, while simple transformations become harder to reuse independently. Malformed records have a visible path and workflow metrics are straightforward, but adding a new metric now requires coordinator changes and broader testing across the consumer support without pausing unrelated records.

A pipeline is strongest when work is naturally one-way and composable. Central control becomes attractive when workflow state and recovery dominate. The current load and the type of change determine whether the filters' simplicity outweighs coordination needs.

## Compose a useful stream

Design a five-stage pipeline for one data task. Label each stage producer, tester, transformer, or consumer, and specify the small payload passed between two adjacent stages.

- Context
- Decision
- Trade-off
