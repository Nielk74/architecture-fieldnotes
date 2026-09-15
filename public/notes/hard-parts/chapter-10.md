# Chapter 10: Distributed Data Access

*Pip’s adventure: A fast answer from a possibly old copy. Fictional teaching story; concepts follow the cited source.*

Source: text lines 6557–6855.

Pip needs product details while Catalog is unreachable. Calling the owner, copying selected fields, replicating a cache, or sharing a schema offer different freshness and independence. Pip chooses from the actual read pattern, not from speed alone.

## Inter-service calls

Pip’s delivery wishlist asks Catalog for a description. The owner’s API hides storage and avoids synchronization. Each request adds latency and an availability dependency; many calls can hurt throughput and resilience. Pip defines timeouts, retries, and unavailable behavior before depending on the answer.

Source: text lines 6577–6621.

## Column replication

Pip copies only product name and thumbnail into the wishlist store. Column replication makes reads local and independent. Values can become stale, and synchronization, monitoring, and write ownership need explicit rules. Catalog remains the writer while Pip tracks refresh events and lag.

Source: text lines 6623–6661.

## Replicated cache

Pip considers caching the book’s 900 mostly static expert profiles. Two owner instances plus four assignment instances multiply in-memory copies. Replicated caches provide fast reads and resilience after population, but large or volatile data strains memory and propagation. Pip checks startup dependence on an owner or populated peer before relying on independent operation.

Source: text lines 6663–6729, 6780–6848.

## Shared data domain

Pip joins Wishlist and Product directly in one schema. A shared data domain preserves local constraints, views, triggers, procedures, query performance, and consistency without replication. The broader bounded context makes schema changes, governance, access controls, and ownership less isolated. Pip accepts coordinated changes explicitly instead of describing the services as independent.

Source: text lines 6731–6780.

## Transfer challenge: Serve expert profiles

Ticket Assignment needs skill, zones, and scheduled availability from User Management. The data is 1.2 MB total, relatively static, and must be read quickly. Ticket Assignment may run four instances; User Management may run two. The services are separate domains and the assignment path cannot tolerate repeated network latency.

### Replicate cache

Reads are local and fast, and assignment keeps running after the owner is temporarily unavailable once populated. Memory multiplies across instances and the first instance depends on owner startup and cache-product configuration. User Management owns writes and populates a read-only replica. The team measures memory, startup sequencing, update lag, and product licensing before rollout.

### Service calls

No duplicate memory or synchronization stream; User Management remains the sole source. Every assignment depends on network latency and User Management availability. Ticket Assignment requests profiles with timeouts and retries. During owner outages assignment slows or pauses, but profile freshness and deployment setup remain simple.

Small, static data and strict latency favor replicated caching, provided startup and memory costs are acceptable. Volatile or large data would shift the balance toward calls or another pattern.

## Select an access pattern

For one cross-domain read, quantify payload size, update rate, latency target, instance count, availability need, and consistency promise, then select and defend one access pattern.

- Context
- Decision
- Trade-off
