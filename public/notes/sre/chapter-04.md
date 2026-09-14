# Chapter 4: Service Level Objectives

Define what users experience, the target, and any contractual consequence

Service level indicators describe measured behavior; objectives specify acceptable values; agreements attach consequences to commitments. Keeping these meanings distinct prevents an internal target from being mistaken for a customer contract. The useful starting point is what users need, even when measurement requires an imperfect proxy. A latency average can hide a slow tail, and server measurements can miss delays in the browser or network. Define the population, collection point, aggregation, and interval so the target can guide a real decision. Different workloads may need different objectives. Targets should be few, understandable, and strong enough to change priorities. Publishing them also shapes dependencies: consistently exceeding a promise can teach clients to rely on behavior the service never intended to guarantee.

## Service level indicators

An SLI is a quantitative description of a service property, such as the fraction of eligible requests that succeed or the distribution of completion times. Its definition includes what is measured, where, and over which population and interval. Measurement should approximate user experience; a backend-only timer cannot capture a page that arrives quickly but remains unusable in the browser.

## Service level objectives

An SLO sets a target or acceptable range for a defined SLI. It turns observations into priorities: a latency distribution only tells a team to act when compared with user needs and an agreed objective. Select a small number of meaningful targets, distinguish workloads when necessary, and refine them as understanding improves rather than automatically promising today’s best observed performance.

## Agreements and consequences

An SLA is an agreement that includes consequences for meeting or missing service commitments. An internal SLO can guide engineering even when no such agreement exists. SRE helps make commitments measurable and evaluates their feasibility; business and legal participants determine the contractual consequences. The presence of reputational harm alone does not turn every internal performance target into a formal customer agreement.

## Distributions and expectations

Averages compress behavior and can conceal poor experiences for a minority of requests. Percentiles expose different parts of a latency distribution, while explicit sampling and aggregation windows prevent misleading comparisons. Published objectives also establish dependency expectations. If clients rely on much better observed behavior, a service can meet its stated target yet still break those clients when performance returns to the promised level.

## Apply it

Write one search-latency objective that another team could implement without guessing. Distinguish its measurement from any contractual consequence.

Source: *Site Reliability Engineering*, chapter 4, text lines 1905–2265. This note is an original synthesis; the exercise is a teaching extension.
