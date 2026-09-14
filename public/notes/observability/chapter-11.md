# 11. Observability-Driven Development

Finish a change by observing it in production

Observability-driven development makes production behavior part of the development feedback loop. Tests check anticipated behavior under controlled conditions, but cannot reproduce every interaction among real users, dependencies, and concurrent changes. Engineers therefore design instrumentation while writing code and inspect the result after deployment. The chapter also distinguishes locating a problem from debugging its implementation: telemetry can reveal the failing component and triggering context, after which a debugger or profiler may be the appropriate tool. This practice reduces the distance between an engineer’s intent and the user’s actual experience. A change is better understood when its author can compare old and new behavior, recognize unexpected effects, and verify a correction using the same relevant population.

## Instrument while intent is fresh

While writing a feature, the engineer knows which decisions and outcomes matter. That is a good time to record the context needed to recognize whether the code behaves as intended. Retrofitting instrumentation during an incident often requires another deployment and another occurrence of the failure before the missing evidence becomes available.

## Observe after deployment

A passing test suite does not show how a change behaves under production traffic. Compare relevant outcomes after deployment, including the affected build or feature cohort, while the change is still fresh in the author’s mind. Fast feedback makes unexpected behavior easier to connect with the decisions that introduced it.

## Locate before inspecting code

Observability helps identify where a problem occurs and which circumstances trigger it across a running system. Once that narrows to a component or operation, a traditional debugger or profiler may be better suited to investigating code internals. These tools work at different scopes and can be combined using the context discovered in production.

## Tests and telemetry complement each other

Tests encode expectations and make repeatable checks before release. Production telemetry reveals behavior under combinations the tests did not represent. An unexpected observation can become a new test, while instrumentation can verify that the resulting fix helps real requests. Neither feedback source alone supplies every answer about software behavior.

## Apply it

Choose a feature and specify how its author will verify production behavior.

Source: *Observability Engineering*, chapter 11; supplied text lines 4486–4813. These notes are an original synthesis; examples and activities are illustrative.
