# 17. Cheap and Accurate Enough: Sampling

Spend retention on signal and preserve sampling weights

Sampling reduces telemetry cost while retaining detailed examples for investigation, but its design determines which questions remain trustworthy. Constant probability is simple and can represent common traffic, yet rare errors or low-volume tenants may disappear. Head sampling decides early without knowing the outcome; tail sampling can favor interesting completed traces but requires buffering and coordination. Dynamic rates and sampling keys allocate attention across changing traffic and uncommon cohorts. These choices also affect analysis. When retention probabilities differ, counts and distributions must account for how much traffic each retained event represents. Such estimates remain uncertain, and no weight recovers a cohort that had no chance of retention. Cost control therefore needs both a selection policy and honest interpretation of the resulting evidence.

## Constant probability preserves examples

Keeping each event with the same probability retains its full recorded attributes while reducing volume. It can represent frequent behavior well, but a small or rare cohort may leave no examples. Unlike aggregation, sampling preserves the context of retained requests; unlike complete capture, it cannot guarantee that the particular failure a customer reports survived.

## Head and tail know different facts

Head sampling decides near request entry, before the final status or duration is known. Tail sampling waits for outcome information and can preferentially retain errors or slow traces. That additional knowledge requires handling spans while the decision is pending and coordinating trace retention; collecting more outcome context is not operationally free.

## Dynamic rates protect useful cohorts

A rate can adapt to recent traffic to stay near a telemetry budget. Sampling by keys, such as tenant and outcome, can also keep high-volume sources from overwhelming rare populations. The key design matters: a globally adequate sample can still hide a quiet customer, and an error surge can overwhelm a policy that retains every error unconditionally.

## Weights enable honest estimates

For known nonzero retention probability p, a retained event represents an inverse-probability weight of 1/p. Unequal probabilities require weighted counts and distributions rather than naïve averages over retained rows. Weighting estimates the original population; it does not restore discarded request details, eliminate sampling variance, or justify inference about events assigned zero retention probability.

## Apply it

Specify how to preserve a rare customer cohort while keeping telemetry volume manageable.

Source: *Observability Engineering*, chapter 17; supplied text lines 7403–8053. These notes are an original synthesis; examples and activities are illustrative.
