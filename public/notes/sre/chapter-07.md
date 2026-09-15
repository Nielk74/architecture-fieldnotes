# Chapter 7: The Evolution of Automation at Google

*Pip’s adventure: A repair script learns to act safely. Fictional teaching story; concepts follow the cited source.*

Source: text lines 2892–3536.

Pip’s automation repairs replicas faster than people can—and could spread a mistake just as quickly. The crew keeps domain teams responsible for management contracts, distinguishes scripted steps from autonomous lifecycle behavior, and validates scope before any large action.

## Automation provides more than saved minutes

Pip finds three slightly different manual failover procedures. Software can execute one tested procedure consistently, quickly, repeatedly, and with measurements. Centralizing implementation also centralizes defects as well as fixes. Pip weighs recovery time and repeatability against development cost and the risk of applying a mistake at scale.

Source: text lines 2892–3536.

## Autonomy changes the system boundary

Pip still has to notice failure and start the replacement script. Autonomy detects conditions and performs lifecycle actions without that trigger. Borg changes the boundary: applications request resources instead of owning permanent machines. Pip treats scheduling and replacement as system behavior, not a pile of host-specific repair scripts.

Source: text lines 2892–3536.

## Service ownership keeps automation relevant

Pip’s central turnup script assumes an obsolete storage configuration. Automation decays when maintainers are detached from service changes and operation. Service teams owning management APIs let orchestration use stable contracts while implementations evolve. Pip returns storage turnup expertise to the team that actually changes storage.

Source: text lines 2892–3536.

## Resumability and bounded effects

Pip’s repair workflow resumes after a partial run. Idempotency avoids extra effects on repetition, but stale checks or ambiguous targets remain dangerous. The chapter’s erasure failure treated an empty selection as all machines. Pip requires explicit scope, rejects empty targets, limits change rate, and exposes state before automation can amplify a mistake.

Source: text lines 2892–3536.

## Transfer challenge: Replace hand-run deployment steps

A release requires copying artifacts, editing configuration, and restarting three services in order. One step was skipped last month. The release team has one afternoon to improve it.

### Automate the sequence with checkpoints

The repeatable path reduces omission risk and leaves evidence of each step. Automation must handle partial completion and rollback. A staged tool validates artifacts and stops safely between services.

### Add a longer runbook

The runbook can clarify unusual recovery without code changes. Human execution remains error-prone under time pressure. The runbook helps today, but the same manual toil returns next release.

A checkpoint records partial progress but does not by itself make retries safe. Validate each transition, make repeated operations safe, and expose the state needed to recover when the workflow stops.

## Make a partial workflow safe to resume

Design a service-turnup operation that may stop after configuration is created but before the service is ready. Specify ownership and retry behavior.

- State and dependencies
- Retry semantics
- Scope and visibility
