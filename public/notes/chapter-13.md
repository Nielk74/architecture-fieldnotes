# Chapter 13: Service-Based Architecture Style

*Pip’s adventure: A few useful services, not one per verb. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 163–177.

Pip groups the expanding bookshop into coarse domain services with an independently deployed interface. This pragmatic style preserves local transactions and limits remote chatter. Shared data and broad service scope still constrain independent change and scaling.

## Coarse domain services

Pip groups quoting, receiving, assessment, accounting, status, recycling, and reporting into meaningful services. The basic style uses a separately deployed UI, remote coarse domains, and usually one shared database. The chapter commonly sees four to twelve services, averaging about seven. Pip adds instances and load balancing where actual throughput or fault-tolerance needs justify them.

Source: pp. 163–165.

## Flexible topology variants

Pip separates public quotation from internal receiving access. Service-based variants can federate UIs, split domain stores, and introduce gateways or reverse proxies. Separate databases help only when cross-domain data needs do not recreate calls and duplication. Pip fits security zones and workload boundaries rather than enforcing one topology.

Source: pp. 165–167, 172–173.

## Granularity and transactions

Pip’s OrderService creates an ID, applies payment, and adjusts inventory through local components. An API facade can coordinate business and persistence work within one ACID transaction. Payment failure can roll back the related writes together. Finer remote services narrow change scope but make partial state, BASE, eventual consistency, and coordination explicit costs.

Source: pp. 167–169, 177.

## Partition shared data deliberately

Pip changes invoicing and a universal entity library makes every service rebuild. Federated libraries aligned to coherent customer, invoice, or order domains narrow schema-change impact. A common library still creates a coordination hotspot. Pip governs shared changes and partitions logically rather than mistaking a convenient database for isolated ownership.

Source: pp. 169–171.

## A pragmatic characteristic profile

Pip deploys an assessment change without stopping quotation when receiving fails. Domain services improve agility, testing, deployment, and availability while using fewer remote calls and preserving more consistency. Coarse services duplicate more functionality when scaled, limiting elasticity and scalability. Pip checks shared UI and database coupling before claiming several quanta or microservice-level independence.

Source: pp. 172–177.

## Transfer challenge: Scale the recycling quote path

An electronics recycling company has seven business domains. Customer quote and item-status traffic is much higher than internal receiving and accounting traffic, while assessment rules change frequently. The company needs external data isolated from internal operations and wants to avoid a network call for every step of a quote or order transaction during normal working hours and support staff across sites.

### Coarse domain services

Quote and status can scale separately, while each domain keeps local orchestration and ACID data changes. A shared database and coarse service deployment still couple schema changes and replicate more code when scaling. The public services get multiple instances behind a gateway, while internal services stay single-instance. Assessment changes ship in one domain unit, and a public database is protected from direct internal access.

### Fine-grained services

Each operation can scale and deploy narrowly, potentially reducing the change scope for payment or inventory. The order flow now needs remote orchestration, contract versioning, retries, and eventual consistency across many services. A payment failure can leave an order and inventory reservation partially written. The team must build a saga and observability before the extra granularity is safe for customer support and reconciliation.

The domains and traffic profile reward coarse service boundaries: they isolate meaningful change and scale hotspots without turning every transaction into a distributed workflow. Finer granularity can be useful when independent change is worth its coordination cost, but it is not an automatic improvement.

## Choose a service boundary

Map one product into three to eight coarse domain services. Identify the transaction that should remain local, the data partition it needs, and the service that deserves independent scaling.

- Context
- Decision
- Trade-off
