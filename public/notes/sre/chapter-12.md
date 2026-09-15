# Chapter 12: Effective Troubleshooting

*Pip’s adventure: The familiar outage has a different cause. Fictional teaching story; concepts follow the cited source.*

Source: text lines 4944–5519.

Pip sees a familiar failure but resists repeating the old fix blindly. The crew mitigates user impact, preserves evidence, and tests competing explanations at observable boundaries. Every experiment records what changed and what remains uncertain.

## Triage precedes complete diagnosis

Pip’s harbor bookings are failing across a region. Mitigation—shifting traffic, reducing features, or stopping corrupting work—may precede a complete explanation. Pip matches urgency to impact and preserves logs and state where practical. Recovery should not wait unnecessarily for diagnosis, nor erase every clue for later investigation.

Source: text lines 4944–5519.

## Build and discriminate hypotheses

Pip suspects either slow database work or delay on the network path. A useful hypothesis predicts observations that distinguish it from alternatives. Pip compares caller and server timing to eliminate possibilities. System knowledge and past incidents guide tests, but correlation does not prove today’s cause.

Source: text lines 4944–5519.

## Reduce the problem at observable interfaces

Pip’s request succeeds directly at the backend but fails through the proxy. Known inputs and component interfaces locate where behavior first becomes wrong. Traces and shared IDs connect observations; bisection narrows a long pipeline. Pip builds a minimal reproducible case for safer, more invasive testing outside production.

Source: text lines 4944–5519.

## Control experiments and record uncertainty

Pip connects successfully from a laptop and nearly rules out access trouble. The failing application may use different credentials, paths, or workload. Extra logging or CPU can also alter later evidence, so Pip records hypotheses, actions, results, and temporary configuration. Unsafe-to-reproduce failures may leave probable contributing causes rather than one proven explanation.

Source: text lines 4944–5519.

## Transfer challenge: Mitigate checkout failures while preserving clues

A recent checkout deployment coincides with rising errors. A known-compatible previous version is available, and logs can be retained. Database saturation and a changed request path are both plausible explanations.

### Restore the prior version and preserve evidence

A reversible mitigation can reduce current user harm quickly. Rollback may not help if the deployment is only coincidental. The responder checks recovery, retains traces, and continues a focused comparison of hypotheses.

### Run a bounded diagnostic check first

A quick discriminating observation may prevent an ineffective change. Users remain exposed while the check runs. This is appropriate only if the check is short and its value justifies delaying an available mitigation.

Triage prioritizes restoring service. Diagnosis still matters, but it should not indefinitely postpone a useful mitigation; preserve evidence and test whether the recovery action actually helped.

## Write a discriminating experiment

An application has higher latency without higher request volume. Propose two explanations and a safe observation that would separate them.

- Competing hypotheses
- Predicted observations
- Experiment controls
