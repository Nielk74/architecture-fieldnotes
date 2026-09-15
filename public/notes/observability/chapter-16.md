# Chapter 16: Efficient Data Storage

*Pip’s adventure: Store evidence for the question Pip has not asked yet. Fictional teaching story; concepts follow the cited source.*

Source: text lines 6676–7402.

Pip needs a new tenant-build comparison during an incident. Storage tuned only for prepared queries cannot help. Event-level attributes, bounded time scans, and selective column reads preserve investigative flexibility while controlling cost.

## The workload determines the design

Pip asks about a tenant-build combination nobody previously queried. Investigation needs new groupings over retained event attributes, including fresh arrivals. Prepared-query optimization alone may make unfamiliar questions slow or impossible. Pip also checks fault tolerance because the store must help verify changes while production is under stress.

Source: text lines 6676–7402.

## Time segments bound the scan

Pip queries a narrow incident window in Retriever. Append-only segments record their oldest and newest event timestamps so nonoverlapping segments can be skipped. Events need not arrive in exact timestamp order. Pip avoids mixing very old backfill broadly with fresh events, which widens ranges and increases later scans.

Source: text lines 6676–7402.

## Columns reduce unnecessary reads

Pip groups latency by build without reading every request header. Column storage reads filtered, grouped, and returned fields within relevant segments. Sparse and repeated values can compress efficiently. Pip balances fast analytical scans against the extra work needed to reconstruct full events and traces.

Source: text lines 6676–7402.

## Avoid preselecting every future question

Pip considers making every request ID a metric label. Unique request-like values create new series instead of reusable aggregate combinations. The chapter favors retained events and efficient reads without preselecting or specially indexing every future dimension. Pip preserves flexibility for the next unfamiliar question.

Source: text lines 6676–7402.

## Transfer challenge: Backfill slows live investigation

A pipeline mixes week-old spans with current events, and narrow recent-time queries now scan many segments.

### Examine segment ranges and separate backfill handling

Can restore useful time pruning while retaining historical data. Adds ingestion or partition-management complexity. Recent queries may scan fewer irrelevant segments once backfill is organized appropriately.

### Increase query workers immediately

May reduce latency by adding capacity. Can mask widening scan ranges and raise operating cost. The same poorly pruned queries consume a larger worker fleet.

Understand whether the scan is large because of data organization before treating it only as a capacity problem.

## Connect query needs to storage

Design a recent-event query and identify which storage work it should avoid.

- Time window and relevant fields
- Segments or columns to skip
- Effect of late-arriving events
