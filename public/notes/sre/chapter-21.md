# Chapter 21: Handling Overload

Source: text lines 8604–9019 of the supplied book extract.

Overload handling must protect individual tasks even when global load balancing works imperfectly. Resource measurements are more dependable than a fixed queries-per-second ceiling because request costs change. Per-customer quotas limit the damage one client can impose, while adaptive client throttling avoids spending backend capacity merely rejecting requests. Request criticality tells successive dependencies which work may be shed first; it is separate from latency sensitivity. Backends use local utilization to reject work before exhaustion, preserving throughput for requests they can serve. Retries may help when only a few tasks are busy, but request and client budgets prevent them from magnifying widespread overload. Connection maintenance and sudden connection bursts also consume resources and may need separate protection.

## Resource-based admission and customer quotas

A request count is not a stable measure of load when requests vary in cost or software changes their resource needs. Model capacity using the limiting resources, such as CPU and memory, and assign customers negotiated usage limits. This helps contain a customer’s excess demand, although oversubscribed quotas still require attention when several customers approach their limits together.

## Adaptive client-side throttling

Rejecting a request still consumes backend resources. A client can reduce that cost by tracking attempted requests and backend acceptances over a recent window, then dropping some attempts locally as rejection increases. The acceptance multiplier trades faster detection of recovery against more rejected traffic reaching the server. Sparse clients have weaker observations, so the mechanism’s usefulness depends on their request history.

## Criticality-aware overload protection

Criticality identifies the user impact of losing a request. Propagating it through RPC dependencies lets each overloaded task discard lower-value work first using local CPU, memory, or executor-load signals. Latency sensitivity is a different dimension: an optional suggestion can need a very fast response while remaining safe to omit. Protection should preserve useful throughput rather than make an overloaded task refuse everything.

## Bounded retries and connection costs

An isolated busy backend may justify retrying elsewhere, but widespread overload makes additional attempts harmful. Per-request limits, aggregate client retry budgets, and explicit nonretryable overload responses constrain amplification. Only the layer directly above the rejecting dependency should retry. Resource accounting must also include connection setup and health checks; a burst of idle clients can overload a service without a large query rate.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
