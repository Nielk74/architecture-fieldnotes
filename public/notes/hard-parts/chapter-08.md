# Chapter 8: Reuse Patterns

Distribution makes reuse harder because a shared capability can reconnect services that were separated for independent change. The chapter compares four techniques: code replication, shared libraries, shared services, and sidecars or service meshes (text lines 5480–5518).

Replication copies a capability into each service. It preserves deployment and runtime independence, and local teams can adapt it, but fixes must be repeated and behavior can drift (text lines 5528–5588). A shared library centralizes code at compile time. Coarse-grained libraries reduce dependency count but make a broad consumer set rebuild when anything changes. Fine-grained libraries reduce the blast radius while increasing dependency management (text lines 5593–5659). Versioning helps, but the library remains a static coupling point.

A shared service centralizes behavior at runtime. Consumers receive one implementation and can benefit from an isolated update, but every call adds network and security latency. The shared service must scale with its dependents, and its outage or incompatible response can affect many consumers (text lines 5663–5721). This is a meaningful trade when the behavior is genuinely centralized and stable enough to justify a runtime dependency.

Sidecars and service meshes move common operational concerns beside services and connect those proxies. The hexagonal example separates domain logic from technical coupling, while the mesh supplies a shared operational link (text lines 5759–5789). This can keep domain code focused, but introduces configuration, deployment, policy, and debugging work. A platform should provide a stable capability rather than force every domain into one release cadence.

The chapter’s broader warning is that reuse is over-praised. An abstraction becomes useful reuse when it changes more slowly than its consumers; otherwise every consumer inherits its volatility (text lines 5891–5915). A centralized “customer” model can erase legitimate domain meanings, while a shared ticket service may create a new bottleneck (text lines 5897–5987). Analyze semantic sameness, change rate, latency, failure, security, and ownership before choosing.

Teaching extension: take one capability used by three services and compare all four techniques. Record who owns changes, what happens during an outage, and which fitness function detects drift or latency. A deliberate decision to replicate a tiny stable rule can be more autonomous than a theoretically elegant shared platform.

The Sysops Squad reuse discussion applies this reasoning to database access as well as code. A shared ticket data service and a shared library both centralize common behavior, but they create different coupling: one at runtime and one at compile time (text lines 5921–5987). The choice should include connection-pool pressure, service instance counts, deployment geography, and the team’s experience with the technology. A platform is successful when it makes a stable capability easy to consume while preserving domain ownership and a service’s ability to evolve.

The same test applies to operational tooling. A mesh may be appropriate when many teams repeatedly need the same traffic and security controls, but its control plane becomes another platform responsibility. Start with the smallest stable capability and make adoption voluntary enough for domains to expose meaningful feedback.
The platform boundary should remain observable and optional.
