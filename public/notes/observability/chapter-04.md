# Chapter 4: How Observability Relates to DevOps, SRE, and Cloud Native

*Pip’s adventure: The feature owner follows it into production. Fictional teaching story; concepts follow the cited source.*

Source: text lines 2170–2385.

Pip’s new market feature passes tests but behaves differently under live traffic. Observability connects development decisions to production outcomes. Shared responsibility works when engineers have both useful evidence and permission to investigate across changing service boundaries.

## DevOps needs a feedback path

Pip enables a market feature flag and compares requests before and after. DevOps ownership needs a feedback path from deployed behavior to the engineer’s next decision. Access to an alert channel alone does not provide it. Pip investigates the feature’s real effects while responsibility and implementation knowledge remain connected.

Source: text lines 2170–2385.

## SRE connects symptoms to objectives

Pip’s checkout objective fails while every host remains reachable. SLOs frame reliability around business and user outcomes without predicting each possible cause. Observability lets Pip explore affected requests and find a mitigation. One meaningful symptom need not require a separate prepared alert for every dependency failure.

Source: text lines 2170–2385.

## Cloud-native boundaries change diagnosis

Pip follows a failed order through three services and a managed queue. Ephemeral containers and cross-team infrastructure make one machine’s identity an incomplete account. Telemetry must carry request relationships and relevant context across those boundaries. Pip can investigate the work even after its original instance disappears.

Source: text lines 2170–2385.

## Practice and tooling reinforce each other

Pip gives the crew rich telemetry but nobody feels safe exploring production. Tools without usable access and habits deliver little; responsibility without evidence is equally weak. Pip pairs investigations with instrumentation and access improvements. Technical capability and social permission reinforce the same customer-facing outcome.

Source: text lines 2170–2385.

## Transfer challenge: Ownership without visibility

Developers must support a new service but depend on operations for every production query.

### Provide scoped access and practice shared investigations

Lets owners connect code decisions to production outcomes. Requires training and useful instrumentation. Developers can follow their own changes into production and bring findings back to implementation.

### Route every question through operations

Uses existing expertise immediately. Creates a bottleneck between responsibility and evidence. Operational questions queue behind a second team, delaying the owners’ learning.

The team needs a feedback path that makes its operational responsibility actionable.

## Close an ownership gap

Choose a service boundary where responsibility and visibility do not match.

- Who owns the user outcome
- Evidence currently inaccessible
- Change that enables investigation
