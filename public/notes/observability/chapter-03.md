# 3. Lessons from Scaling Without Observability

What Parse learned when every outage was different

Parse’s growth exposed the limits of an operational approach built around familiar failures. Shared tenants and a fixed pool of Ruby workers allowed one slow backend to consume capacity and impair unrelated requests. Dashboards designed after one noisy customer incident could not anticipate the next customer’s workload. Even impressive global reliability obscured a shard that was completely unavailable to its users. The case does not condemn the original stack: shipping quickly had helped Parse find demand. Its lesson is that successful early choices require new operating capabilities as scale changes. High-cardinality exploration in Scuba made unfamiliar incidents investigable through shared evidence and reduced dependence on veterans who previously carried the diagnosis in their heads.

## Shared capacity spreads symptoms

Parse’s API workers waited on several backends while serving many tenants. When one backend slowed, pending requests consumed the fixed worker pool, causing unrelated work to suffer. Broad slowness therefore did not mean every dependency independently failed. Understanding how scarce execution capacity was shared mattered more than simply locating the slowest chart.

## Yesterday’s culprit is insufficient

After one popular mobile application overwhelmed Parse, the team built controls and dashboards around that customer. New applications soon brought different workloads, making that specific prediction less useful. The lesson is to preserve the ability to identify whichever tenant and operation are unusual now, rather than assume the previous offender remains the important one.

## Global success hides local failure

The case describes apparently strong overall reliability alongside a shard that was completely down for its users. An aggregate averages over populations whose experiences can differ radically. Tenant and shard context are therefore essential for discovering uneven impact; a small global failure fraction does not imply a small disruption for every customer.

## Scuba changed the debugging method

Scuba enabled fast filtering and grouping over identifiers with many distinct values. Parse engineers could start from a symptom and follow comparisons to unfamiliar causes, rather than rely on remembered outage patterns. The practical gain included sharing those investigation steps, so curiosity and analytical skill became useful without years of accumulated incident history.

## Apply it

Map how one slow dependency could affect healthy tenants in a shared service.

Source: *Observability Engineering*, chapter 3; supplied text lines 1659–2169. These notes are an original synthesis; examples and activities are illustrative.
