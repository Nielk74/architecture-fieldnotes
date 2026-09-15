# Chapter 14: Observability and the Software Supply Chain

*Pip’s adventure: The slow build is waiting, not testing. Fictional teaching story; concepts follow the cited source.*

Source: text lines 5812–6225.

Pip’s market release stalls in CI and another rerun reveals nothing. Build pipelines are distributed systems too. Connected operations, shared context, and direct links from build results let feature owners investigate delays without becoming build-system specialists.

## CI is also a distributed system

Pip’s slow build spends its time waiting for a runner. Webhooks, schedulers, workers, tests, and deployment machinery form a distributed workflow. A final pass or fail compresses those interactions. Pip traces the path to distinguish waiting from execution instead of repeatedly rerunning it.

Source: text lines 5812–6225.

## Shared clients spread useful context

Pip adds commit, suite, and environment fields to build spans. Slack’s case uses shared instrumentation libraries for common dimensions and trace emission across CI services. Consistent context connects boundaries and comparable runs. Pip can group failures by the same suite and revision, not merely host health.

Source: text lines 5812–6225.

## Bring evidence into the workflow

Pip opens a failed build result directly into its trace and suite query. Evidence belongs in interfaces developers already use. Preserved run identity and dimensions remove reconstruction work. Pip makes the investigation accessible to the feature owner rather than only the build specialist.

Source: text lines 5812–6225.

## Compare changes and validate recovery

Pip reverts a suspected CI change and watches fresh runs. Slack’s examples connect cohort and revision comparisons with successive hypotheses and observations. A revert is an experiment, not proof of recovery. Pip verifies whether the affected failure pattern actually disappears after the intervention.

Source: text lines 5812–6225.

## Transfer challenge: Reruns hide a queue problem

Developers repeatedly rerun slow CI jobs, but most elapsed time precedes test execution.

### Trace scheduling and runner allocation

Can distinguish queue delay from test runtime. Needs instrumentation across CI service boundaries. The improvement effort can target scheduling capacity or coordination rather than the assertions.

### Optimize individual tests first

May shorten execution for those tests. May barely affect total build time if waiting dominates. Faster tests can leave developers waiting nearly as long for the build.

Measure where elapsed time is actually spent before choosing the optimization target.

## Instrument the delivery path

Map one code change from CI trigger to test completion and identify where unexplained time could accumulate.

- Operations and boundaries
- Commit and test dimensions
- Evidence that verifies an improvement
