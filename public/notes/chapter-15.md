# Chapter 15: Space-Based Architecture Style

*Pip’s adventure: The signed-book sale outruns the database. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 211–234.

Pip prepares for thousands of simultaneous book orders and finds the database limits concurrency. Space-based architecture moves hot transactions into memory with dynamic processing units. The apparent speed depends on explicit consistency, durable updates, and recovery design.

## Remove the database bottleneck

Pip’s web capacity grows while the database remains the sale’s bottleneck. Space-based processing units keep transactional data in replicated memory, avoiding synchronous database access for hot requests. Units start and stop with load for elasticity. Pip retains the database as system of record, updated asynchronously through durable pumps rather than every transaction.

Source: pp. 211–213, 231–232.

## Processing units and middleware

Pip’s auction request reaches an available processing unit. Each unit contains application logic, web components, and caches. Virtualized middleware supplies messaging and data grids, optional cross-unit processing coordination, and a deployment manager. Pip uses those distinct responsibilities to route work, synchronize memory, and add capacity rather than treating the system as one magic cache.

Source: pp. 213–219.

## Pumps, writers, and readers

Pip changes a customer phone number and sends its ID, action, and values through a data pump. A writer applies the asynchronous update; normal processing units avoid direct database reads and writes. After complete cache loss, a reader and reverse pump load one temporary owner under a lock before synchronization. Pip keeps schema changes behind those data-layer contracts.

Source: pp. 219–223.

## Collision is a consistency cost

Pip’s two units decrement inventory from 500 to 490 and 495 before replication arrives. The correct combined result is 485, but conflicting updates can leave incorrect copies. Collision probability grows with instance count, update rate, and replication latency, and falls with cache size. Pip measures latency and considers partitioning or another cache model for high-conflict data.

Source: pp. 223–226.

## Choose a cache model

Pip keeps stable product codes replicated in every unit for fast independent reads. Large or rapidly changing inventory may instead use one external distributed cache for consistency, accepting latency and an availability dependency. The application can combine models by data need. The chapter discourages near-cache hybrids whose differing front copies create uneven behavior.

Source: pp. 226–230.

## Power with operational weight

Pip adds sale capacity and then rehearses losing every cache. Strong performance, scale, and elasticity bring memory, licensing, and peak-concurrency testing costs. Partitioning may be technical or domain-based, and synchronous relationships still determine quanta. Pip designs durable pumps, collision checks, recovery, and pending-database semantics before relying on seemingly limitless scale.

Source: pp. 231–234.

## Transfer challenge: Release-night ticket sale

A concert ticketing site normally has a few hundred concurrent users but expects tens of thousands when sales open. Seat availability must be accurate enough to prevent double selling, while reference data such as venue descriptions changes rarely. The team can pay for cache infrastructure but has limited ability to test peak load safely outside production before and during the sale.

### Replicated cache

Every processing unit can serve hot reads from memory with excellent speed and no single cache server dependency. Concurrent seat updates can collide across copies, and each new unit consumes memory; collision and restart behavior are difficult to test. Venue metadata and other stable reference data respond quickly from each unit. Seat reservations need partitioning, collision monitoring, and a durable ordered pump so a stale copy cannot sell the same seat twice.

### Distributed cache

One cache authority avoids conflicting replicated seat copies and provides stronger consistency for highly dynamic inventory. Every access crosses a remote cache boundary, and a cache outage can make all processing units nonoperational unless mirrored carefully. Seat counts are easier to reason about during the sale, but remote cache latency and failover must be measured. Stable venue data can still use replicated caches in the same system.

The workload points to space-based architecture, but different data has different needs. Use replicated caching where performance and fault tolerance dominate, distributed caching where consistency dominates, and make collision and outage behavior part of the design.

## Give each cache a reason

Choose two data sets in a high-volume system. Select replicated, distributed, or both, and state the update rate, size, consistency need, and failure behavior that support each choice.

- Context
- Decision
- Trade-off
