# Chapter 12: Effective Troubleshooting

Stabilize the service, then distinguish competing explanations with evidence

Troubleshooting combines a reusable method with knowledge of how a particular system should behave. Begin with an actionable problem report and assess its impact. During a serious outage, restore as much useful service as possible before pursuing a complete causal explanation, while preserving evidence when feasible. Metrics, logs, traces, and exposed state help locate where observed behavior diverges from expectations. Form several plausible hypotheses and choose tests that distinguish them, accounting for side effects and differences between the test environment and the failing path. Negative evidence is useful because it removes explanations. The application-latency case shows why correlation is insufficient: a suspected datastore problem failed to explain slow static responses, and later instrumentation revealed expensive local processing caused by accumulated data.

## Triage precedes complete diagnosis

The initial response should match the severity and scope of user impact. During a major outage, mitigation may mean shifting traffic, reducing functionality, or stopping an operation that corrupts data. A complete explanation is valuable but must not delay a useful recovery unnecessarily. Preserve logs and relevant state when practical so that mitigation does not erase every clue needed for later investigation.

## Build and discriminate hypotheses

A troubleshooting hypothesis predicts observations that should occur if a proposed cause is true. Start from system knowledge and likely failure modes, then look for evidence that separates competing explanations. Prefer tests that eliminate a meaningful group of possibilities. A correlation or a past incident suggests a hypothesis; it does not establish that the same cause explains the current failure.

## Reduce the problem at observable interfaces

Known inputs and well-understood component boundaries make it possible to find where behavior first becomes wrong. Follow the request path or bisect a large pipeline, checking inputs and outputs at each boundary. Traces and shared request identifiers connect observations across processes. A reproducible minimal case can then move investigation into a safer environment where more invasive experiments are possible.

## Control experiments and record uncertainty

An experiment can mislead if its credentials, network path, or workload differ from the failing request. Active changes can also alter later observations: extra logging consumes resources, and more CPU can change race timing. Record hypotheses, actions, results, and temporary configuration changes. Some production failures cannot safely be reproduced, so conclusions may remain probable contributing causes rather than a proven single cause.

## Apply it

An application has higher latency without higher request volume. Propose two explanations and a safe observation that would separate them.

Source: *Site Reliability Engineering*, chapter 12, text lines 4944–5519. This note is an original synthesis; the exercise is a teaching extension.
