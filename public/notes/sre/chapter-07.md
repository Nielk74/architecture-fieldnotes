# Chapter 7: The Evolution of Automation at Google

Move from scripts toward owned, observable, autonomous systems

Automation offers consistency, faster recovery, reusable interfaces, and measurable operations as well as saving time. Its value depends on the design of the action being amplified. Google’s examples move from hand-operated scripts toward service-owned APIs and systems that manage their own lifecycle. The MySQL migration required rapid automatic failover because human recovery could not keep pace with routine task movement. Cluster turnup exposed a different problem: separating automation ownership from service expertise allowed scripts to decay as services changed. Idempotent operations help resume work, but unreliable checks and hidden assumptions can still create inconsistent states. The disk-erasure incident shows the stakes of scope errors. Automation needs explicit targets, bounded effects, inspection, and recovery paths that operators can actually use when ordinary mechanisms fail.

## Automation provides more than saved minutes

A well-defined procedure executed by software is more consistent than repeated human execution. It can run frequently, react quickly, expose measurements, and make the same capability available to many operators. Centralizing the implementation also centralizes both fixes and defects. Evaluation must therefore include reduced recovery time and repeatability alongside development cost and the risk of applying a mistake at scale.

## Autonomy changes the system boundary

A manually started script automates steps but still depends on someone recognizing when to use it. An autonomous system detects conditions and performs the necessary lifecycle action itself. Borg illustrates a larger architectural move: applications request resources instead of permanently owning machines, so replacement and scheduling become system behavior rather than an external collection of machine-specific repair scripts.

## Service ownership keeps automation relevant

Automation decays when its maintainers are separated from the people changing and operating the underlying service. Cluster turnup improved when service teams owned management APIs and the orchestration layer called those contracts. This preserved domain knowledge and let implementation evolve behind a stable interface. A fast central turnup team alone could not compensate for obsolete assumptions in other teams’ scripts.

## Resumability and bounded effects

An idempotent operation can be repeated without adding unintended effects, which helps a workflow resume after partial completion. That property is insufficient if checks are stale or target selection is ambiguous. The disk-erasure failure arose when an empty target selection meant all machines. Explicit scope validation, limits on change rate, and visible state help prevent automation from turning a local error into fleet-wide damage.

## Apply it

Design a service-turnup operation that may stop after configuration is created but before the service is ready. Specify ownership and retry behavior.

Source: *Site Reliability Engineering*, chapter 7, text lines 2892–3536. This note is an original synthesis; the exercise is a teaching extension.
