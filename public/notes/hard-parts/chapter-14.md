# Chapter 14: Managing Analytical Data

*Pip’s adventure: Tomorrow’s forecast must not block today’s parcel. Fictional teaching story; concepts follow the cited source.*

Source: text lines 8722–9078.

Pip’s planning query competes with live parcel intake. Operational transactions and historical analysis need different shapes and ownership. The crew compares a warehouse, a lake, and domain-owned analytical products without hiding who must ensure quality and freshness.

## Two data purposes

Pip runs years of regional delivery totals against live intake. Operational stores favor current transactions and updates; analytics favor history, aggregation, and prediction. Their workloads and schemas differ, so direct joins can destabilize transactions. Pip decides how analytical copies are shaped, owned, and queried off the critical path.

Source: text lines 8726–8746.

## Data warehouse

Pip needs repeatable regional revenue figures. A warehouse extracts sources, transforms them into a designed analytical schema, loads centrally, then supports analysis. Central governance and predictable queries help the finance crew. Pip budgets pipelines, transformation, storage, freshness, and maintenance rather than treating the reporting table as free.

Source: text lines 8738–8836.

## Data lake

Pip stores raw orders, clicks, and sensor files before a forecast is requested. A lake loads natural formats and transforms later for a concrete consumer. It avoids premature transformation while retaining centralized storage and pipelines. Pip assigns discovery, quality, interpretation, and repeated transformation work so deferred modeling does not become nobody’s job.

Source: text lines 8836–8888.

## Data Mesh direction

Pip asks logistics to own delivery events and sales to own revenue data. Data Mesh shifts toward domain-owned analytical products, federated governance, and self-service capabilities. Shared discoverability and quality rules replace one team transforming everything. Pip checks organizational readiness because responsibility, not only data, becomes distributed.

Source: text lines 8889–9078.

## Transfer challenge: Build planning analytics

An online retailer wants predictive inventory planning while checkout must remain reliable. Data comes from orders, warehouses, suppliers, and customer behavior. Analysts need reproducible metrics; data scientists need raw history; domain teams vary in their ability to document datasets. Choose an analytical arrangement and define where quality and ownership sit.

### Warehouse first

Curated schemas and centralized governance support consistent reporting and protected operational workloads. Upfront extraction and transformation are expensive, and new exploratory uses wait for pipeline work. Finance gets trusted weekly metrics quickly, but a new forecasting feature requires another modeled pipeline and may lag behind changing source data.

### Lake with domains

Raw history supports exploration and domain teams can publish curated datasets as needs emerge. Consumers face discovery and quality variation, while governance and ownership require organizational discipline. Data science starts from raw events, while inventory publishes a documented feature dataset. Shared checks are needed to prevent opaque, duplicated transformations.

Predictable recurring metrics favor curated warehouse paths; exploratory and distributed ownership needs favor lake or mesh practices. The decision must name who pays for freshness, quality, and transformation.

## Trace an analytical product

Pick one analytical question. Map its operational sources, transformation point, owner, freshness expectation, quality checks, and consumer access path.

- Context
- Decision
- Trade-off
