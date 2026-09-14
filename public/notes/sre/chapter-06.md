# Chapter 6: Monitoring Distributed Systems

Use golden signals and actionable symptoms to protect the pager

Monitoring supports planning, diagnosis, comparison, and alerting, but these purposes do not all justify interrupting a person. A page should indicate an urgent condition with a useful response. Latency, traffic, errors, and saturation provide a compact view of service health; their definitions must reflect the service and distinguish failed requests from successful ones. Distributions matter because averages hide slow tails and uneven resource pressure. Black-box checks expose externally visible failures, while internal measurements reveal mechanisms and impending constraints. Neither perspective is sufficient alone. Keep the path from failure detection to page simple enough for the team to understand. Repeated, predictable responses are candidates for automation or design repair, and monitoring work should reduce long-term operational burden rather than normalize constant interruption.

## The four golden signals

Latency measures how long requests take, traffic describes demand, errors capture unsuccessful results, and saturation shows pressure on the limiting resource. Together they connect user experience with load and available headroom. Measure successful and failed request latency separately, because quick failures can make an aggregate timer look healthy. An error can also be wrong content or a response that violates a promised deadline.

## Symptoms justify pages; causes guide diagnosis

A symptom describes what is failing for the service, while a cause explains why. Pages should usually target urgent symptoms or clear imminent problems that require human action. Internal causes remain valuable diagnostic evidence without each needing a separate interruption. The distinction depends on viewpoint: slow database requests are a symptom for database owners and a possible cause for a slow frontend.

## Black-box and white-box coverage

Black-box monitoring exercises behavior from outside the system, revealing whether a user-like operation currently works. White-box monitoring reads internal metrics or logs and can expose hidden retries, approaching resource exhaustion, and diagnostic detail. Combining them helps distinguish a working process from a working service and can reveal problems before they cause complete external failure.

## Resolution, tails, and monitoring simplicity

A mean can hide rare slow requests and a long sampling interval can hide brief resource spikes. Histograms preserve useful distributions without retaining every individual event. Select collection resolution according to the failure being detected and its cost. Keep alert rules understandable and periodically remove unused signals or obsolete conditions so the monitoring system does not become another fragile service dependency.

## Apply it

Choose an urgent user-visible failure, define its detection, and identify internal measurements that help diagnose it without creating additional pages.

Source: *Site Reliability Engineering*, chapter 6, text lines 2452–2891. This note is an original synthesis; the exercise is a teaching extension.
