# Chapter 21: Handling Overload

*Pip’s adventure: Keep the important bookings moving. Fictional teaching story; concepts follow the cited source.*

Source: text lines 8604–9019.

Pip’s service has the same request rate as yesterday but a new query exhausts CPU. Overload protection must follow resources, customer limits, and request criticality. Local throttling and bounded retries prevent rejection itself from becoming more load.

## Resource-based admission and customer quotas

Pip’s new query type exhausts CPU below yesterday’s safe request rate. Request counts do not capture variable cost or changing software. Pip models limiting CPU and memory resources and negotiates customer usage quotas. Oversubscribed quotas still need planning when customers approach their limits together.

Source: text lines 8604–9019.

## Adaptive client-side throttling

Pip’s client keeps sending requests only to receive quota rejections. Rejections cost backend resources too. Adaptive client throttling uses recent attempts and acceptances to drop some calls locally; the multiplier balances recovery detection against extra rejected traffic. Pip checks sparse-client history before trusting weak observations.

Source: text lines 8604–9019.

## Criticality-aware overload protection

Pip drops optional booking suggestions while preserving the main transaction. Criticality describes user impact and travels through RPC dependencies; tasks shed lower-value work using local pressure signals. Latency sensitivity is separate: optional suggestions may need speed without being essential. Pip protects useful throughput rather than making every overloaded task reject everything.

Source: text lines 8604–9019.

## Bounded retries and connection costs

Pip retries a busy backend and then notices the whole fleet is overloaded. Per-request limits, aggregate retry budgets, and explicit nonretryable responses constrain amplification; only the immediate caller should retry. Connections and health checks also consume resources, even with few queries. Pip can use a proxy to absorb connection bursts while controlling forwarded work.

Source: text lines 8604–9019.

## Transfer challenge: Protect service under overload

A recommendation backend is saturated and its queue is growing. Search results can omit recommendations, but checkout requests must remain available.

### Shed optional work and degrade recommendations

Critical capacity is preserved and users receive a reduced experience. The degraded response needs a clear user contract. The service rejects low-priority recommendation work and serves cached results.

### Accept every request until queues drain

No requests are rejected at the edge. Queue growth consumes memory and can take down checkout too. The shared process exhausts resources and loses both features.

Lower-criticality work should give way before resource exhaustion harms essential requests. Protect shared tasks with utilization-based admission, and ensure clients do not replace shed traffic with uncontrolled retries.

## Define overload admission

For a service with critical transactions and optional enrichment, specify how excess demand will be handled before its resources are exhausted.

- Resource signal
- Criticality
- Client behavior
