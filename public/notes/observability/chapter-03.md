# Chapter 3: Lessons from Scaling Without Observability

*Pip’s adventure: One stall borrows everybody’s workers. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1659–2169.

Pip’s market slows broadly after one backend stalls. The Parse case helps Pip recognize shared worker exhaustion and uneven tenant impact. Rich identifiers and fast comparisons reveal today’s unusual workload without assuming yesterday’s customer is still the culprit.

## Shared capacity spreads symptoms

Pip’s market workers wait on one slow backend and healthy stalls begin to suffer. The Parse case describes pending requests consuming a fixed shared API-worker pool. Broad symptoms do not imply independent failure in every dependency. Pip traces scarce execution capacity rather than merely choosing the slowest chart.

Source: text lines 1659–2169.

## Yesterday’s culprit is insufficient

Pip builds a dashboard around yesterday’s busiest stall. At Parse, controls for one popular mobile app did not predict the next applications’ different workloads. The case’s Norwegian-band application could not explain a new tenant’s geolocation burst. Pip preserves the ability to identify whichever tenant and operation are unusual now.

Source: text lines 1659–2169.

## Global success hides local failure

Pip celebrates global success until one shard’s users report total failure. The Parse case shows strong platform-wide reliability coexisting with a completely unavailable shard. Averages combine populations with radically different experiences. Pip retains tenant and shard context because small global impact can mean complete local disruption.

Source: text lines 1659–2169.

## Scuba changed the debugging method

Pip follows a failing tenant into its shard and query patterns. Scuba enabled Parse engineers to filter and group quickly over high-cardinality identifiers. The investigation could follow unfamiliar causes instead of remembered outage shapes. Pip shares the steps so curiosity and analysis help newer responders too.

Source: text lines 1659–2169.

## Transfer challenge: A new noisy neighbor

A new mobile app spikes while the dashboard for the previous troublesome tenant is quiet.

### Group current slow requests by tenant and backend

Can identify a different workload and its shared-capacity effects. Needs request context across the tenant and dependency boundaries. The team can choose tenant controls or a dependency mitigation based on the current workload.

### Add capacity to all API workers

May buy immediate breathing room. Costs more and can leave the backend bottleneck and tenant attribution unresolved. Extra workers may fill with the same blocked work while the initiating workload remains unidentified.

Temporary capacity can support mitigation, but finding the current cohort explains why the familiar tenant dashboard was unhelpful.

## Separate cause from shared symptoms

Map how one slow dependency could affect healthy tenants in a shared service.

- Resource shared by tenants
- How waiting propagates
- Fields that identify the initiating workload
