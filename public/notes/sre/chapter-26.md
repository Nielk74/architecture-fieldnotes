# Chapter 26: Data Integrity: What You Read Is What You Wrote

*Pip’s adventure: The backup exists, but the booking is still gone. Fictional teaching story; concepts follow the cited source.*

Source: text lines 11532–12622.

Pip verifies a backup checksum and discovers that restoring usable bookings takes far too long. Recovery needs compatible data, metadata, capacity, and application access. Independent protection and early invariant checks help preserve a recovery point that actually works.

## Recovery as the objective

Pip’s export passes its checksum but rebuilding indexes exceeds the acceptable outage. Disaster recovery means the application can load and serve data, not merely retain an archive. Pip defines tolerated data loss and waiting time. The restore test includes capacity, dependencies, format compatibility, and post-processing through real user access.

Source: text lines 11532–12622.

## Independent layers of protection

Pip’s accidental deletion reaches every replica. Replication propagates bad changes as well as good ones. Soft deletion and tiered backups offer different undo windows and isolated older recovery points. Pip designs independence against common failures while keeping retention and deletion delays consistent with privacy commitments.

Source: text lines 11532–12622.

## Early validation of application invariants

Pip finds metadata pointing to missing audio before another backup cycle copies the defect. Storage consistency does not guarantee application relationships. Independent validators check product-defined invariants with ownership, monitoring, logs, and rate limits. Pip detects slow corruption early without overloading the service that the checks protect.

Source: text lines 11532–12622.

## Restore engineering at scale

Pip parallelizes restore across balanced shards and verifies that recovered objects are reachable in the application. Incremental processing speeds large datasets, but long dependent backup chains add recovery complexity and failure exposure. Data and metadata must come from compatible points. Pip rehearses end to end to reveal missing media, capacity shortages, broken tools, and schema drift.

Source: text lines 11532–12622.

## Transfer challenge: Prove what users received

A replicated profile store returns data after a regional failover. A checksum mismatch appears on one replica, but serving traffic is still possible from two healthy copies.

### Quarantine the mismatched replica and validate before repair

Users read from verified copies and the corruption boundary stays known. The healthy copies carry more load during validation. The team routes around the replica, verifies checksums, and rebuilds it.

### Accept the replica and repair asynchronously

Availability remains high and repair starts immediately. Bad data can spread or be read before repair completes. A later read exposes corrupted profile data to customers.

Isolating a suspect copy prevents unverified data from reaching users, but replica repair covers only some failure modes. Also test recovery from application corruption that reaches every replica, including restoring coherent data and metadata.

## Prove a data recovery

Choose a harmful deletion or corruption scenario and define a restore exercise that ends with correct data available through the application.

- Loss scenario
- Recovery point
- Proof
