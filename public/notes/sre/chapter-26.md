# Chapter 26: Data Integrity: What You Read Is What You Wrote

Source: text lines 11532–12622 of the supplied book extract.

Data integrity is judged through users’ ability to access correct data, so intact but inaccessible backups are not a sufficient success condition. Recovery requirements should determine backup frequency, retention, location, and format. Replication protects against some failures but promptly copies bad deletions and corruption, making independent defenses necessary. The chapter combines soft deletion, tiered backups, and out-of-band validation to detect problems early and preserve recoverable history. At large scale, sharding and incremental work reduce copying costs, while long incremental chains complicate restores. Gmail and Google Music recovery cases show the value of rehearsed procedures and the difficulty of delayed detection, cross-store references, and offline media logistics. Continuous end-to-end restore tests provide evidence that recovery still works as systems evolve.

## Recovery as the objective

A backup is useful for disaster recovery only when the application can load it and make data available within an acceptable time. Archive retention alone does not demonstrate this capability. Define how much recent data can be lost and how long users can wait, then test the whole restore path, including capacity, dependencies, format compatibility, and post-processing needed for actual user access.

## Independent layers of protection

Replication copies valid changes quickly, but also propagates accidental deletion and corruption. Soft deletion preserves a limited opportunity to undo mistakes; tiered backups provide older or more isolated recovery points. The layers should differ enough to survive relevant common failures. Retention and deletion delays must also fit the product’s privacy commitments, rather than accumulating copies indefinitely.

## Early validation of application invariants

Storage consistency does not guarantee that application relationships remain correct. Independent validators can check invariants such as whether a listed file has corresponding contents, detecting slow corruption before usable recovery points disappear. Validators need monitoring, investigation logs, ownership, and rate limits so they do not overload serving systems. Product teams define meaningful invariants while shared infrastructure can provide the execution framework.

## Restore engineering at scale

Large datasets require parallel, well-balanced shards and incremental processing to make verification and restoration timely. However, a long sequence of dependent incremental backups increases restore complexity and failure exposure. Recovery must also reconcile data and metadata from compatible points in time. Automated end-to-end exercises reveal missing media, insufficient capacity, broken tools, and schema drift before a real incident forces reliance on them.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
