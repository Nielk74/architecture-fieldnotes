# Chapter 9: Validation and Measurement

Original learning notes. Source: text lines 8458–9144 in the supplied book.

Agent evaluation needs an explicit definition of success that covers the intended outcome and the constraints on obtaining it. Component tests reveal local failures, while complete conversations and tool trajectories expose mistakes that a plausible final answer can hide. The support-agent examples show why simple refunds, ambiguous requests, and multistep changes belong in a representative evaluation set. Error analysis turns failures into targeted improvements and regression cases. Cost and latency remain relevant alongside quality and safety. Integrating these checks into development and release gates gives teams evidence for promotion, with human review where automated judgments cannot resolve important ambiguity.

## Measurement goals

Evaluation starts with explicit metrics tied to the task. For language agents, exact-match answers often fail to capture usefulness, so teams measure quality, safety, cost, latency, and successful completion.

## Trajectory metrics

A trajectory includes model decisions, tool calls, observations, and final outcome. Inspecting the path can reveal a wrong tool, unnecessary loop, or unsupported step hidden by a plausible final answer.

## Evaluation sets

A living set contains ordinary, ambiguous, adversarial, and edge cases. Model-generated cases can expand coverage, but humans review and refine them so the set remains a trustworthy specification.

## Lifecycle integration

Evaluation belongs in development and release workflows. Baselines, regression checks, and targeted generation let teams compare changes and learn whether an improvement generalizes.

## Teaching extension

A new agent has a strong demo but little coverage for cancellations and ambiguous requests.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
