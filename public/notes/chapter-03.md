# Chapter 3: Modularity

*Pip’s adventure: Books belong together for a reason. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 37–53.

Pip organizes the bookshop code, but tidy folders do not guarantee useful modules. Cohesion, coupling, and connascence reveal what actually changes together. Metrics raise questions; the domain’s meaning decides whether a boundary helps.

## Logical modules

Pip groups customer behavior in a package without creating a new service. A module is a logical collection of related classes, functions, or code; packages and namespaces provide language-specific organization. It need not be a separate process or deployable file. Pip lets the logical seam guide future extraction while avoiding unnecessary coupling now.

Source: pp. 37–40.

## Cohesion

Pip splits customer creation from update and creates more cross-module calls. Cohesion asks how strongly parts belong together: functional is strongest, followed by sequential, communicational, procedural, temporal, logical, and coincidental relationships. Change patterns and coupling determine whether a split helps. Pip uses LCOM as a structural warning, not a final design verdict.

Source: pp. 40–44.

## Coupling and balance

Pip measures incoming afferent and outgoing efferent dependencies. Abstractness compares abstract with concrete artifacts; instability is outgoing coupling divided by total coupling. Distance from the main sequence combines them, warning of overly concrete pain or overly abstract uselessness. Pip interprets the metrics in context: a stable abstract contract and volatile concrete adapter can be appropriate.

Source: pp. 44–48.

## Connascence

Pip changes a magic order-status number and breaks another component. Connascence means one change requires another to preserve correctness. Static forms involve names, types, meanings, positions, or algorithms; dynamic forms involve execution, timing, related values, or identity. Pip replaces the hidden meaning with a named constant, considering strength, locality, and the number affected.

Source: pp. 48–52.

## Modularity guidance

Pip finds a harmless local convention copied across distant services. Page-Jones’s guidance minimizes total and cross-boundary connascence while concentrating necessary relationships inside encapsulation. Weaker forms suit greater distance; static dependencies are often easier for tools to expose than dynamic ones. Pip checks intent and affected scope rather than expecting a metric to settle the boundary.

Source: pp. 50–53.

## Transfer challenge: Split the order workspace

A retail monolith has one CustomerWorkspace module containing customer creation, profile updates, order lookup, order cancellation, and notification. Order operations are growing quickly, but they use customer identifiers and a shared database. The team wants clearer ownership without creating a web of calls that makes everyday changes harder. Decide whether to keep the grouping, split orders, or create a smaller boundary first.

### Keep one module

Shared customer knowledge stays local, so workflows require fewer calls and remain easy to follow while order behavior is still small. The module may accumulate unrelated responsibilities and make ownership, testing, and future extraction less clear. The team keeps a cohesive workflow for now and records a measurement baseline. If order code grows independently, rising lack of cohesion becomes evidence for a later split.

### Extract Order module

Order behavior gains a focused boundary that can evolve and be tested with a clearer responsibility. Customer and order data now require an explicit contract; poorly chosen calls can introduce stronger cross-boundary coupling. Order lookup and cancellation move behind a contract, while customer data remains authoritative in its module. The team must choose stable names and avoid leaking internal representations.

The right boundary depends on behavior, change, and coupling rather than a naming rule. A split that increases communication and hidden dependencies may be worse than a larger cohesive module; a growing accidental grouping may justify extraction.

## Map one boundary

Choose a small code area or imagined feature. List the behavior that belongs together, name one dependency crossing the boundary, and propose a refactoring or measurement that would make the relationship easier to change.

- Context
- Boundary
- Trade-off
