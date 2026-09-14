# Chapter 10: Distributed Data Access

When a service needs data owned by another domain, direct table access is tempting but breaks bounded contexts. The chapter compares four access patterns using the Wishlist and Catalog example (text lines 6557–6587).

Inter-service communication keeps ownership clear. The consumer asks the owner through a contract that hides schema details. The cost is network latency, runtime dependency, and possible aggregation across several calls (text lines 6587–6621). Timeouts and degraded behavior must be part of the design. Column schema replication copies selected fields into the consumer’s schema. It makes reads local and can avoid service dependency, but values become stale, synchronization is required, and the consumer’s relationship to ownership needs governance (text lines 6623–6661).

Replicated caching keeps synchronized copies in each service’s memory. It is exceptionally responsive and can remain available after the owner goes down once the cache is populated. The costs are startup ordering, product and network configuration, memory multiplied by service instances, and poor fit for large or rapidly changing data (text lines 6663–6729). A centralized distributed cache does not provide the same benefit: it remains a remote dependency and can blur ownership (text lines 6671–6685).

A shared data domain puts tables in one schema. SQL joins, foreign keys, views, triggers, and stored procedures remain available, and no replication or network call is needed. The price is a broader bounded context, wider change impact, ownership governance, and potentially excessive data access (text lines 6731–6780). It is a conscious integration choice, not a shortcut.

The decision should quantify data volume, update rate, latency target, availability needs, instance count, and consistency promise. The chapter’s final case chooses replicated caching for small, mostly static expert profiles: roughly 1.2 MB across 900 experts, with known service instance limits (text lines 6780–6848). It preserves User Management as the sole writer while allowing Ticket Assignment fast local reads. The startup dependency and licensing cost are recorded consequences.

Teaching extension: write an access decision record for one cross-domain read. Include the owner, selected pattern, freshness guarantee, outage behavior, synchronization or contract mechanism, and a fitness function for lag or latency. Revisit the choice if data volume or update rate changes; the pattern is workload-dependent.

The final Sysops Squad decision is a compact example of evidence-based selection. The team rejects a shared data domain because the ticket service already uses a ticket schema and the domains should remain separate; it rejects calls because performance and availability matter; it chooses a replicated cache after estimating volume and instances (text lines 6780–6848). The recorded startup dependency and licensing cost prevent the decision from being sold as a free optimization. Those consequences are part of the architecture and must be operated deliberately.

Do not hide these costs behind the word “cache.” A copied value needs a source of truth, an update path, a freshness target, and an answer for cold start. If those answers are missing, the design has created a second database without the governance needed to keep it trustworthy.
That governance keeps local copies trustworthy over time.
