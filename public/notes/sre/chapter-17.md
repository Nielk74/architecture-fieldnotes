# Chapter 17: Testing for Reliability

Use complementary tests to reduce uncertainty before and after deployment

Testing provides evidence that selected behavior remains correct after change; passing tests cannot prove that every production condition is safe. Unit, integration, and system tests cover different scopes and have different costs. Production adds configurations, dependencies, traffic, and mixed software versions that isolated tests may never exercise. Stress tests reveal limits, configuration tests detect mismatches, and canaries bound exposure while real traffic supplies additional evidence. Operational and recovery tools need testing too, particularly when they bypass normal interfaces or interact with each other. Fast feedback makes failures easier to associate with a change, while flaky tests weaken that signal. A strong strategy starts with high-value coverage, converts incidents into regressions, and treats configuration and emergency changes as part of the same reliability problem.

## Tests reduce uncertainty rather than prove perfection

A test checks a particular behavior under particular conditions. Passing before and after a change provides evidence of equivalence for that case, while a failure reveals behavior needing explanation. Catching a defect before deployment can prevent any user-visible recovery interval. Coverage should reflect the importance and risk of the behavior, with fast smoke tests and incident-derived regressions offering practical starting points.

## Different test scopes reveal different failures

Unit tests isolate small pieces, integration tests exercise component interactions, and system tests assemble larger end-to-end behavior. Production configuration tests compare intended and running state, while stress tests find resource and load limits. These scopes complement one another because mocks and isolated environments cannot represent every production dependency, resource condition, or combination of deployed binaries and configuration.

## Canaries and probes cover deployment combinations

A canary exposes a limited part of production to a new version and observes real traffic before expanding. It is controlled exposure, not a deterministic proof that all faults are absent. Production probes exercise known behaviors through actual frontends and backends. During rolling updates, old and new callers may meet old and new servers, so compatibility across those combinations matters.

## Operational tools and test feedback need engineering

Automation, repair tools, and configuration changes can damage reliability even when application code is unchanged. Test their boundaries, restart behavior, and interactions; isolate risky maintenance behind barriers that prevent serving users until validation succeeds. Fast, dependable feedback helps engineers associate faults with changes. Emergency deployment can precede test completion, but tests should continue so a bad emergency change is identified quickly.

## Apply it

A backend changes its response format while old clients remain deployed. Propose tests and a rollout gate that expose incompatible combinations before broad impact.

Source: *Site Reliability Engineering*, chapter 17, text lines 6433–7220. This note is an original synthesis; the exercise is a teaching extension.
