# 14. Observability and the Software Supply Chain

Trace the build system as a distributed service

Slack’s software supply-chain case applies observability to the path from code change through testing and deployment. At scale, this path contains interacting services, runners, queues, and test workloads, so unexplained build delays and flaky failures resemble production debugging problems. Shared instrumentation libraries and rich span dimensions make those interactions searchable. Engineers can distinguish queueing from execution, associate failures with commits or test suites, and investigate what changed instead of treating a red CI result as a complete explanation. Links from familiar workflow surfaces help people reach the relevant evidence. The chapter’s contribution is operational visibility into delivery infrastructure: teams can test hypotheses, apply changes, and verify recovery using the same exploratory practices employed for customer-facing systems.

## CI is also a distributed system

A build may coordinate webhooks, schedulers, worker fleets, test services, and deployment machinery. Its final status compresses many interactions and cannot explain every delay or failure. Instrumenting this path as connected operations reveals where work waited or failed, giving developers a way to investigate the delivery system rather than repeatedly rerun it.

## Shared clients spread useful context

Slack’s case uses shared instrumentation libraries to make trace emission and common dimensions easier to adopt across its CI services. Consistent context lets engineers connect activity across boundaries and compare runs. Useful attributes reflect this domain, such as the relevant commit, test suite, or execution environment, rather than only generic host measurements.

## Bring evidence into the workflow

Telemetry becomes more useful when the interfaces people already use provide a route into relevant traces and queries. A CI failure or operational alert should connect its recipient to the affected run and dimensions. This reduces the effort of reconstructing context and helps engineers who are not build-system specialists investigate their own failures.

## Compare changes and validate recovery

When build behavior changes, compare cohorts and revisions to identify what is different, then inspect fresh telemetry after an intervention. Slack’s examples show investigation as a sequence of hypotheses and observed results. A revert or configuration change is therefore an experiment whose effect must be checked, rather than evidence by itself that the incident is resolved.

## Apply it

Map one code change from CI trigger to test completion and identify where unexplained time could accumulate.

Source: *Observability Engineering*, chapter 14; supplied text lines 5812–6225. These notes are an original synthesis; examples and activities are illustrative.
