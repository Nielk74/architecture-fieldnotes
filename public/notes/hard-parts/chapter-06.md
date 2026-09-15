# Chapter 6: Pulling Apart Operational Data

*Pip’s adventure: The database refuses to split neatly. Fictional teaching story; concepts follow the cited source.*

Source: text lines 3575–4926.

Pip separates delivery services, but reporting still consumes their shared database connections. Data ownership, transactions, and relationships make the next cut harder. The crew measures pressure, defines domains, and exposes hidden cross-schema dependencies before choosing new storage.

## Disintegration drivers

Pip watches reporting consume connections until parcel intake times out. A shared database can block independent change, scale, availability, quantum separation, or workload-specific technology. Those are disintegration drivers, not proof that splitting is correct. Pip weighs measured contention against data relationships and transactions that may need to stay together.

Source: text lines 3600–4018.

## Bounded data contracts

Pip renames a storage column and a neighboring service breaks. The owner should control writes and expose a contract, not its schema. Pip preserves the response field while changing internal representation within the bounded context. Direct cross-schema access would keep the accidental shared contract alive.

Source: text lines 3630–3704.

## Connection and scale

Pip budgets 100 database connections for five services. Scaling to fourteen instances in the chapter’s example consumes 242: every instance brings its pool. Pip starts with quotas, measures waits and maximum use, then reallocates by need. Quotas must account for instance counts and cannot replace a database scaling plan.

Source: text lines 3706–3998.

## Five step extraction

Pip defines data domains, assigns tables, and removes cross-domain artifacts. Service access moves to domain schemas before those schemas become physical databases. Local keys and views can remain; cross-domain joins, triggers, procedures, and views need explicit integration. Pip replaces a hidden customer join with an owner’s API.

Source: text lines 4116–4408.

## Choose data technology

Pip keeps payment relationships in relational storage and evaluates documents for articles. Key-value favors lookup, graphs traversal, column families wide distributed access, and time-series timestamped measurements. NewSQL and cloud-native choices balance relational behavior against operational goals. Pip chooses within an understood domain seam; comparative adoption guidance is not a universal technology ranking.

Source: text lines 4409–4790.

## Aggregate boundaries

Pip edits a survey and its questions together. One aggregate can preserve that atomic change when their lifecycle is shared. Reusable or independently administered questions may instead need references and explicit consistency rules. Pip follows how data loads and changes, avoiding a giant record merely because tables are related.

Source: text lines 4800–4925.

## Transfer challenge: Choose a data boundary

A support platform is moving from one relational database to domain services. Reporting causes connection waits, payment updates require atomic writes, and the knowledge base has document-shaped content. The database team has limited migration capacity and will accept only a reversible first slice. Decide what to separate first while preserving operational safety.

### Reporting first

Directly addresses measured connection contention and reduces load on ticketing. The team must replace cross-domain reporting joins and operate another data store. Reporting moves behind a domain schema and read contract. Ticketing remains on the original store while connection waits are measured again, giving the next extraction a clearer baseline.

### Payment first

Keeps the strongest transaction boundary explicit and protects sensitive payment data. It may not relieve the immediate reporting bottleneck, and payment’s relationships require careful artifact refactoring. Payment tables and local constraints move together. The migration improves ownership but users still see report timeouts until a later slice addresses reporting load.

The drivers point in different directions. A good first slice combines measurable benefit, a coherent domain, and a migration path that preserves required transactions. Technology choice follows the boundary; it should not substitute for one.

## Map one extraction slice

Draw one data domain from an existing schema, list its local artifacts, mark each cross-domain dependency, and justify the first migration step using one disintegrator and one integrator.

- Context
- Decision
- Trade-off
