# Chapter 10: Layered Architecture Style

*Pip’s adventure: Four desks copy the same order. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 133–141.

Pip sends a bookshop request through presentation, business, persistence, and database layers. Clear roles can isolate change, but pass-through work adds cost. Deliberately opened paths need documented coupling trade-offs, especially as one deployable application grows.

## Horizontal responsibilities

Pip follows a customer view through presentation, eligibility rules, persistence, and durable storage. Layered architecture groups horizontal technical responsibilities, which may share or separate physical deployments. The customer domain consequently crosses every layer. Pip keeps contracts clear so replacing a browser need not rewrite eligibility rules.

Source: pp. 133–135.

## Closed layers isolate change

Pip’s screen calls business logic, which calls persistence, which accesses the database. A closed layer requires passing through the immediately lower layer. The extra step hides lower-level details and can isolate replacement behind stable contracts. Pip enforces that boundary so schema mapping changes do not leak upward.

Source: pp. 135–136.

## Open layers trade speed for coupling

Pip opens a reporting read path directly to persistence when business processing adds no value. Open layers allow bypasses or shared utilities with fewer objects and processing steps. They also expose more callers to lower-level changes. Pip documents the approved read exception while keeping writes through business rules.

Source: pp. 135–138.

## The architecture sinkhole

Pip finds 80% of dashboard reads copied unchanged through four layers. Such sinkholes add object creation, processing, and memory without rules, aggregation, calculation, or transformation. Some pass-through is normal; a dominant proportion questions the fit. Pip measures the path and considers carefully opening layers while accepting the new coupling.

Source: pp. 138–139.

## A pragmatic starting point

Pip starts the small bookshop with familiar, inexpensive layers under a tight deadline. Clear boundaries, limited reuse, and shallow inheritance preserve options while requirements emerge. A growing monolith redeploys together, expands tests, and shares failure with weak independent scale or elasticity. Pip treats the simple one-quantum starting point as a revisitable choice.

Source: pp. 137–141.

## Transfer challenge: The clinic portal's read path

A clinic portal has a layered monolith. Appointment writes must apply authorization and conflict rules, but the reception dashboard reads a prepared list of today's appointments. The dashboard is now slow because every row passes unchanged through presentation, business, persistence, and database code. The team has little budget and wants to preserve a replaceable UI while reducing the measured read overhead.

### Keep every layer closed

One consistent path preserves the strongest isolation and keeps all callers behind familiar contracts. Pass-through work remains on a high-volume read path, adding processing and making the sinkhole worse. The UI remains easy to replace, but the team may need caching and more hardware for a problem caused by unnecessary work. The choice is defensible if the read share is small or rules may soon appear.

### Open a read path

A documented read model can bypass business pass-through code and reduce latency and object creation for this specific use. The dashboard now couples to persistence or a read contract, so schema changes require an explicit compatibility plan. Measured dashboard latency improves while writes remain closed. The team records the exception, tests the read contract, and revisits it if reporting rules become substantive before broadening the exception to other screens.

The right boundary follows the work performed. Closed layers buy isolation, while an open path can be a deliberate response to a measured sinkhole. A style and its layer rules should serve the dominant requests and the team's ability to govern change.

## Draw one request honestly

Choose a request in a small application. Identify the layers it crosses, mark each boundary open or closed, and justify one boundary using measured work rather than convention.

- Context
- Decision
- Trade-off
