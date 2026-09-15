# Chapter 4: Service Level Objectives

*Pip’s adventure: What did the passenger actually experience?. Fictional teaching story; concepts follow the cited source.*

Source: text lines 1905–2265.

Pip’s backend is fast, yet the booking page remains unusable. Indicators need a defined population and measurement point; objectives need user-relevant targets. The crew separates engineering goals from contractual consequences and checks latency tails as well as averages.

## Service level indicators

Pip’s backend timer says fast while the passenger cannot complete a booking. An SLI quantitatively describes success, latency, or another service property. Its definition states what, where, which population, and which interval are measured. Pip documents exclusions and measures close enough to the user to capture the actual experience.

Source: text lines 1905–2265.

## Service level objectives

Pip stares at a latency histogram without knowing whether to act. An SLO sets a target or acceptable range for a defined SLI. A goal might require 99% of eligible responses within 400 milliseconds over a specified window. Pip chooses a few meaningful workload-sensitive objectives, refining them instead of promising the best performance ever observed.

Source: text lines 1905–2265.

## Agreements and consequences

Pip calls an internal response target a customer contract. An SLA includes agreed consequences for service commitments; an SLO can guide engineering without one. SRE helps make commitments measurable and feasible, while business and legal participants decide contractual consequences. Pip distinguishes a service-credit agreement from an internal goal or reputational concern.

Source: text lines 1905–2265.

## Distributions and expectations

Pip celebrates a stable median while the 99th percentile worsens. Averages hide minority experiences; percentiles expose parts of the distribution. Pip checks sampling and aggregation windows before comparing results. Clients can still break while a service meets its objective if they relied on better observed behavior than the promise.

Source: text lines 1905–2265.

## Transfer challenge: Define the customer-visible target

A search service reports thousands of internal metrics, but users complain about slow results at the tail. Product, SRE, and support need a target for the next quarter.

### Choose a latency SLI and percentile SLO

The target represents user experience and creates a useful decision signal. Instrumentation and percentile selection require careful work. The team chooses a p95 result latency over a rolling window and reviews misses.

### Start with availability SLO

It is easier to measure and gives users a clear reliability floor. It may miss the tail-latency complaint that motivated the work. The team protects basic availability first, then adds a latency SLI when it can define the user journey.

Availability-first measurement is a reasonable floor under limited instrumentation, but it leaves the slow-results journey unmeasured and must be extended deliberately.

## Specify a measurable promise

Write one search-latency objective that another team could implement without guessing. Distinguish its measurement from any contractual consequence.

- Population and location
- Target and window
- Decision and consequence
