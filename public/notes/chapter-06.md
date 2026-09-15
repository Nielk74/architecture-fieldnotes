# Chapter 6: Measuring and Governing Architecture Characteristics

*Pip’s adventure: A promise becomes a check. Fictional teaching story; concepts follow the cited source.*

Source: printed pp. 77–89.

Pip writes “fast and agile” on the bookshop plan, then cannot tell whether the design meets it. Shared measures turn those words into useful evidence. Fitness checks protect important qualities when feature pressure rises, provided the crew understands what each check means.

## Define measurable qualities

Pip asks three teammates what “agile” means and receives three answers. Architecture qualities can be vague, local, or composite; shared definitions make disagreement actionable. Pip unpacks agility into modularity, testability, and deployability and states request budgets with workload assumptions. The measures represent priorities, not universal physical constants.

Source: pp. 77–78.

## Operational measures

Pip’s average page speed hides a minority of severe delays. Operational measures may need tail views, first visible progress, page bytes, and scale trends or statistical models. Pip records workload and measurement window beside each target. Devices, demand, and expectations change, so an observation outside a predicted range questions either the model or the service.

Source: pp. 77–79.

## Structural complexity

Pip finds two conditional branches and three independent paths in a method. For the chapter’s single-method graph, cyclomatic complexity is E − N + 2, giving CC 3 here. High complexity can harm modularity, testing, and deployment, but thresholds depend on domain difficulty and factoring. Pip refactors for coherent responsibilities, not a lower score alone.

Source: pp. 79–81.

## Process measures

Pip sees 100% coverage beside weak assertions and frequent rollbacks. Coverage is evidence about testing, not guaranteed confidence. Deployment success, duration, and post-release defects reveal other process qualities. Pip strengthens meaningful checks and isolates a repeatedly troublesome module, then evaluates later releases instead of celebrating a vanity score.

Source: pp. 80–82.

## Fitness functions

Pip’s build rejects a new package cycle. A fitness function objectively assesses one or more architectural characteristics through a metric, test, monitor, or experiment. Layer rules and distance thresholds are other possible mechanisms. Pip connects the check to understood reuse and ownership goals rather than enforcing a mysterious number.

Source: pp. 82–87.

## Governance through collaboration

Pip explains a controlled latency experiment before asking the team to run it. Governance protects qualities feature urgency can displace; automated checks scale beyond occasional reviews. Resilience, security, or orphan-service probes must fit the current architecture and have clear responses. Pip collaborates on failures as feedback instead of imposing unexplained punishment.

Source: pp. 82–89.

## Transfer challenge: Protect a growing service boundary

A team maintains a layered service whose release failures often follow direct controller-to-database imports. Developers are moving quickly, and reviews happen days after code lands. The architect wants an automated guard, but the team also sees a few complex domain methods and noisy test-coverage reports. Pick a governance approach that protects the boundary while keeping measures useful.

### Layer fitness test

Catches forbidden dependencies at build time, before a cycle or boundary leak spreads through the code base. Requires agreed package rules and can block legitimate exceptions if the team does not document intent and review the rule. Continuous integration rejects controller-to-persistence references and reports the violated layer. Developers can fix the dependency while the reason remains visible in the test.

### Review-only policy

Keeps exceptions flexible and avoids a new automated rule while the team learns where boundaries truly matter. Feedback arrives late, and rapid imports can create several coupled changes before anyone notices; governance depends on scarce reviewer attention. The architect samples dependency graphs during reviews and records baseline complexity. The team accepts a higher risk of drift while refining a future automated check.

Automation is strongest when the characteristic and purpose are clear. A fitness test can protect an important boundary early, but thresholds and exceptions should be context-aware. Reviews, metrics, and experiments remain complementary evidence.

## Write one useful guard

Choose one architecture characteristic in a system. Define the observable signal, its context, and the automated or manual check that would warn when integrity drifts.

- Context
- Decision
- Trade-off
