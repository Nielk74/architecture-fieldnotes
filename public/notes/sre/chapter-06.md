# Chapter 6: Monitoring Distributed Systems

*Pip’s adventure: The fast reply contains the wrong booking. Fictional teaching story; concepts follow the cited source.*

Source: text lines 2452–2891.

Pip’s dashboard looks healthy because failures return quickly. Monitoring must connect latency, traffic, errors, and saturation to user outcomes. The crew combines external checks with internal evidence and pages people for actionable problems rather than every interesting signal.

## The four golden signals

Pip receives a fast HTTP 200 showing the wrong booking balance. Errors include wrong content and missed deadlines, not just status codes. Latency, traffic, errors, and saturation connect experience, demand, and limiting-resource pressure. Pip measures successful and failed latency separately so fast failures cannot improve the apparent average.

Source: text lines 2452–2891.

## Symptoms justify pages; causes guide diagnosis

Pip’s phone buzzes for every database queue change. Pages should usually indicate urgent service symptoms or clear imminent problems needing human action. Internal causes remain diagnostic context; the database owner may see that same queue as a symptom. Pip pages on booking failures and attaches queue depth to guide diagnosis.

Source: text lines 2452–2891.

## Black-box and white-box coverage

Pip’s process responds, but a passenger-like search returns nonsense. Black-box probes test external behavior; white-box metrics and logs reveal internal retries, pressure, and causes. Pip combines the failed search with backend queue evidence. A running process is not proof of a working service.

Source: text lines 2452–2891.

## Resolution, tails, and monitoring simplicity

Pip’s minute-average hides brief CPU bursts. Shorter sampling can reveal them; histograms preserve useful distributions without every raw event. Pip chooses resolution according to detection needs and cost, including latency tails. Understandable alert rules and removal of obsolete signals keep monitoring from becoming another fragile dependency.

Source: text lines 2452–2891.

## Transfer challenge: Page on symptoms users feel

A service has dashboards for CPU, garbage collection, queue depth, and request failures. During incidents the on-call receives ten pages for one user-visible outage.

### Page on a small set of actionable symptoms

The responder starts from impact and has a clear next action. Some precursors may be missed without supporting dashboards. The team pages on failed requests and keeps resource metrics for diagnosis.

### Add more infrastructure alerts

Additional signals may reveal an early resource problem. Alert volume increases and masks the primary failure. The extra pages are tuned later after measuring false positives.

Page on user symptoms and retain causal metrics for diagnosis; adding pages for every precursor would make the responder less reliable.

## Design one actionable page

Choose an urgent user-visible failure, define its detection, and identify internal measurements that help diagnose it without creating additional pages.

- Symptom and action
- Four-signal coverage
- Noise check
