# Chapter 17: Microservices Architecture

*Pip’s adventure: The catalog owns its own meaning. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 245–265.

Pip separates bookshop domains for independent change, then finds a shared schema tying them back together. Microservices need cohesive bounded contexts and deliberate communication. Smaller is not automatically better when transactions and everyday workflows become a maze of remote calls.

## Bounded Contexts

Pip’s checkout imports Catalog’s schema and breaks when descriptions change. A microservice keeps code, subcomponents, and data coupled inside its bounded context, not to another service’s internals. Catalog owns authoritative product changes; checkout keeps the fields its orders need. Pip may duplicate a small value object to avoid stronger shared-model coupling.

Source: pp. 245–248.

## Granularity and Data

Pip turns address validation, shipping, and checkout into tiny services that call constantly. Cohesive purpose, transaction needs, and workflow communication should determine granularity, not every database entity. Isolated data needs a source of truth or deliberate replication and caching. Pip considers a larger workflow boundary while preserving independent storage choices for unrelated domains.

Source: pp. 247–249.

## Operational Reuse

Pip gives each payment instance consistent telemetry without sharing its business rules. Sidecars can supply monitoring, logging, circuit breaking, and discovery; connected proxies form a service mesh. A shared operational plane can evolve while domain teams retain behavior and data ownership. Discovery routes to changing instances instead of one fixed address.

Source: pp. 249–252.

## Communication Choices

Pip chooses a simple synchronous lookup but queues work that must absorb bursts. Known protocols connect heterogeneous languages and platforms; waiting calls and asynchronous messages have different operational costs. Choreography avoids a central coordinator, while a localized orchestrator can contain complex workflow knowledge. Pip does not quietly turn one domain service into everybody’s front controller.

Source: pp. 254–259.

## Transactions and Sagas

Pip’s auction reserves stock before payment fails. A cross-service transaction can undermine independence and signal an overly fine boundary, so Pip revisits the split first. If different architectural needs justify separation, a saga records progress and requests compensating actions. Pending states, undo, and coordination traffic remain real costs, not an invisible distributed ACID transaction.

Source: pp. 259–262.

## Transfer challenge: Split the outbreak response

A public health self-service service and a nurse portal use a diagnostics provider that handles a limited request rate. Demand spikes during an outbreak, while nurses need timely responses and patient records must remain isolated. The team can preserve simple request flow or introduce separate queues, cached outbreak answers, and stricter service boundaries. Choose using the actual latency, load, and security priorities rather than the fashionable label.

### Keep direct calls

The topology stays easy to understand and synchronous responses are convenient. Spikes can saturate the provider, causing timeouts and making both user groups compete for capacity. The team ships quickly, but an outbreak exposes the provider as a bottleneck. Retries amplify load, and nurses lose the predictable response time the domain requires.

### Queue and cache

Queues provide back pressure and separate priority paths; cached outbreak questions remove repeat traffic from the provider. The design adds asynchronous state, cache freshness decisions, and more operational components to operate. Common outbreak requests scale through the cache and nurse traffic can receive priority. The team must document stale-data behavior and observe queue delay to keep the trade-off visible.

The second choice fits variable load and differentiated priorities, but its complexity is justified only by those requirements. Direct calls may be right for a small, stable workflow. The chapter's lesson is to fit boundaries and communication to the domain, then iterate.

## Draw one bounded workflow

Sketch a small system with two or three domain services. Name each service's source of truth, one communication choice, and the condition that would make you revisit its boundary.

- Context
- Decision
- Trade-off
