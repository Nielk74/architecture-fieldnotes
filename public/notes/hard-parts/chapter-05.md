# Chapter 5: Component-Based Decomposition Patterns

*Pip’s adventure: From a tangled map to delivery domains. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1754–3574.

Pip inventories the delivery code before moving it. Oversized reporting becomes visible, hidden components are flattened, and dependencies guide the extraction order. The crew groups business capabilities before turning them into deployable services.

## Identify and size

Pip measures reporting instead of guessing from its folder name. In the book’s Sysops Squad case, Reporting occupies roughly one third of the codebase. Size prompts investigation alongside cohesion, coupling, and business change—not an automatic split threshold. Pip separates report families only after confirming responsibilities.

Source: text lines 1812–2450.

## Gather common domain

Pip discovers three copies of customer notification behavior. Common domain processing serves some business workflows; infrastructure such as logging, metrics, and security crosses them all. Pip gathers notifications under an explicit domain responsibility. Removing duplication helps only if the shared component does not become an oversized coupling hub.

Source: text lines 2451–2758.

## Flatten components

Pip cannot see shared queries beneath a deep reporting package tree. Flattening makes logical components and dependencies visible. Pip places report families beside shared query components to inspect their relationships. This clarifies structure; it neither defines service boundaries nor removes dependencies by itself.

Source: text lines 2759–3075.

## Determine dependencies

Pip traces delivery reports into formatting and financial reports into billing. Dependency direction and strength expose cycles and shared extraction risks. Pip isolates contracts and chooses a refactoring order from that evidence. Fitness functions stop new cycles from undoing the migration plan.

Source: text lines 3076–3217.

## Create component domains

Pip groups intake, assignment, notification, and routing as a delivery capability. Functional cohesion and change drivers matter more than neighboring packages. The group becomes a candidate ownership and deployment domain. Pip tests its viability against shared data and communication contracts before drawing a firm boundary.

Source: text lines 3218–3525.

## Create domain services

Pip deploys Delivery and Reporting separately after refining their domains. Service boundaries follow business capabilities, not arbitrary technical layers. The incremental service-based transition still needs contracts, dependency governance, and operational work. Pip makes limits around the existing shared database explicit before deciding on later data separation.

Source: text lines 3526–3574.

## Transfer challenge: Refine reporting

Reporting accounts for a large part of a monolith and includes common formatters, queries, and distribution logic alongside ticket, expert, and financial reports. The team can create a shared reporting component first, or immediately deploy three independent report services.

### Refine then group

Makes responsibilities and dependencies visible before choosing deployable domains. Delays independent deployment while refactoring and measuring the components. The team separates shared domain logic, maps dependencies, groups report families, and then deploys boundaries supported by evidence.

### Deploy immediately

May isolate report load quickly and provide an early operational boundary. Unexamined shared queries and formatters can become cross-service coupling or duplicated logic. Three services launch, but a common change requires coordinated releases; the team later refactors the boundaries under production pressure.

The patterns are a sequence of discovery and refinement. Speed can matter, but a visible dependency map and coherent domain grouping reduce the chance of distributing the monolith’s existing tangles.

## Apply the pattern sequence

Take one monolithic area and walk it through sizing, common-domain review, flattening, dependency mapping, domain grouping, and a proposed service boundary.

- Context
- Decision
- Trade-off
