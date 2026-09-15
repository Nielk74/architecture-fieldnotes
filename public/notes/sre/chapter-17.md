# Chapter 17: Testing for Reliability

*Pip’s adventure: A green test is evidence, not a guarantee. Fictional teaching story; concepts follow the cited source.*

Source: text lines 6433–7220.

Pip’s unit tests pass while the deployed caller cannot read the response. Reliability testing uses complementary scopes, production probes, and controlled canaries. Repair tools and configuration changes deserve the same care as application code.

## Tests reduce uncertainty rather than prove perfection

Pip’s smoke test catches broken login before deployment. A test checks particular behavior under particular conditions, reducing uncertainty rather than proving perfection. Passing before and after supports equivalence for that case; failure needs explanation. Pip prioritizes important risks and incident-derived regressions to prevent user-visible recovery intervals.

Source: text lines 6433–7220.

## Different test scopes reveal different failures

Pip’s function passes alone but serializes a response its caller cannot read. Unit, integration, and system tests cover different scopes. Production configuration checks compare intended with running state; stress tests expose resource limits. Pip combines them because mocks cannot represent every dependency, workload, binary, and configuration combination.

Source: text lines 6433–7220.

## Canaries and probes cover deployment combinations

Pip’s old probe fails against a new booking backend. Canaries expose limited real traffic before expansion; probes exercise known production behaviors. Rolling updates can combine old and new callers with old and new servers. Pip stops the incompatible rollout, treating controlled exposure as evidence rather than proof that every fault is absent.

Source: text lines 6433–7220.

## Operational tools and test feedback need engineering

Pip tests a repair tool before it touches a serving replica. Boundaries, restart behavior, interactions, and isolation barriers matter even when application code is unchanged. Independent validation gates return to service, and fast feedback ties faults to changes. If emergency deployment precedes completed tests, Pip keeps those tests running to catch a bad repair quickly.

Source: text lines 6433–7220.

## Transfer challenge: Expose failure before launch

A storage client has never been tested against a slow disk or partial write. The next release changes retry behavior and has a large customer blast radius.

### Inject faults in a staging environment

The team observes recovery behavior before customers are exposed. Fault experiments need isolation and realistic assumptions. A controlled partial-write test reveals a missing idempotency guard.

### Rely on unit tests and production observation

The release path remains fast and unit tests catch regressions. Unseen interactions may corrupt or delay production traffic. Production monitoring detects the issue only after user impact.

A controlled system-level fault test can reveal behavior that unit tests with simpler dependencies miss. Keep the experiment isolated, make failure observable, and preserve the discovered case as a regression before increasing production exposure.

## Choose tests for a rolling migration

A backend changes its response format while old clients remain deployed. Propose tests and a rollout gate that expose incompatible combinations before broad impact.

- Compatibility matrix
- Production evidence
- Recovery tooling
