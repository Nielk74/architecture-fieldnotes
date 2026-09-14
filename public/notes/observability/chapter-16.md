# 16. Efficient Data Storage

Store for unpredictable questions and fresh answers

Observability storage must support an unusual combination: high-volume event ingestion, arbitrary filtering and grouping, rapid queries, fresh data, and resilience during incidents. Pre-aggregating into fixed time series sacrifices the context needed for unfamiliar questions, while indexing every possible field can become prohibitively expensive. The chapter uses Honeycomb’s Retriever to illustrate a different trade-off. Time-bounded segments reduce the search space, and column-oriented data within them limits reads to fields a query actually uses. Append-only ingestion accommodates out-of-order events through segment timestamp ranges rather than constant rewriting. This is a reference design, not a universal prescription. Its value lies in connecting physical storage choices to the speed, fidelity, and availability required by an engineer’s investigation loop.

## The workload determines the design

Investigators do not know every useful field or grouping in advance. Storage must therefore retain event-level attributes and answer new combinations quickly, including newly arrived data. Optimizing only prepared queries can leave unfamiliar investigations slow or impossible. Freshness and fault tolerance matter too, because responders need to verify changes while production is already under stress.

## Time segments bound the scan

Retriever groups incoming data into append-only segments and records their oldest and newest event timestamps. Queries select segments whose ranges overlap the requested interval. Events need not arrive in exact timestamp order, but mixing very old backfill with fresh data can widen many segment ranges and increase the amount a later query must scan.

## Columns reduce unnecessary reads

Within relevant segments, column-oriented storage lets a query read the fields it filters, groups, or returns instead of every attribute in every event. Sparse and repeated values can also compress efficiently. Reconstructing full rows requires additional work, so the design balances analytical scans with the need to inspect individual events and traces.

## Avoid preselecting every future question

A traditional metric series gains efficiency when the same label combinations repeat. Unique request-like attributes undermine that assumption by generating many distinct combinations. The chapter instead emphasizes retained events and efficient reads without requiring every interesting dimension to be predicted and specially indexed, preserving flexibility for the next unfamiliar investigation.

## Apply it

Design a recent-event query and identify which storage work it should avoid.

Source: *Observability Engineering*, chapter 16; supplied text lines 6676–7402. These notes are an original synthesis; examples and activities are illustrative.
