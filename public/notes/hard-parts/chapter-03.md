# Chapter 3: Architectural Modularity

*Pip’s adventure: Reporting steals the delivery desk. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1201–1476.

Pip’s reports consume the same resources as parcel intake. Modularity could separate change, capacity, and failure boundaries, but moving code alone will not remove shared dependencies. Pip builds the business case around measurable customer problems.

## Why modularize

Pip adds a machine, but it duplicates the entire delivery application. One monolith shares capacity and failure boundaries across functions. Separately deployable modules can align change, capacity, and failures with domain needs. Pip isolates reporting only after connecting the work to business and technical change.

Source: text lines 1201–1282.

## Maintainability

Pip opens the entire codebase for a tiny assignment change. Smaller cohesive modules can reduce understanding and review scope, shortening feedback and limiting accidental effects. Pip checks whether assignment has a stable contract. Shared code, shared data, or synchronous tangles can merely move complexity across a network.

Source: text lines 1283–1342.

## Test and deploy

Pip’s routing fix waits for an unrelated reporting release. Modularity can narrow tests and deployment risk around changed behavior. Pip gives routing focused tests and an independent release cadence. The team must also build, deploy, and monitor multiple units; pipelines and architecture reinforce each other.

Source: text lines 1343–1364.

## Scale and elasticity

Pip scales parcel intake for a festival without enlarging surveys. Separate units support sustained scalability and burst elasticity. A synchronous wait on survey processing would still tie intake to its slowest dependency. Pip checks the end-to-end call chain before declaring the boundary independent.

Source: text lines 1365–1382.

## Fault tolerance

Pip’s survey processor runs out of memory. Independent queued work can keep parcel creation responsive. Replicating a monolith is a weak, costly substitute when the same defect can fell every copy. Pip removes unnecessary synchronous failure paths; deployment separation alone cannot protect callers.

Source: text lines 1383–1476.

## Transfer challenge: Make a business case

Support sponsors will fund architectural work only if it addresses customer-visible failures. Metrics show that reporting loads the database while ticket creation spikes. The team can split reporting and ticketing into independently deployed units now, or optimize the monolith and defer structural change.

### Split domains

Targets fault isolation, independent scale, smaller test scope, and safer release cadence. Requires migration effort, database work, and additional deployment operations. Ticketing remains responsive while reporting is scaled separately; the team accepts migration cost and must evolve its pipeline.

### Tune monolith

Avoids immediate migration cost and keeps one deployment and data model. Reporting and ticketing retain shared capacity and failure scope, limiting independent change. Indexes and caching may postpone freezes, but a future reporting change still shares release risk with customer ticket entry.

The chapter treats modularity as a reasoned business decision. A persuasive case connects observed problems to qualities modularity can improve and states migration consequences openly.

## Build the case

Map three observed system problems to modularity drivers, then write one consequence and one measurable signal for each.

- Context
- Decision
- Trade-off
