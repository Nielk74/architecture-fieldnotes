# Chapter 32: The Evolving SRE Engagement Model

*Pip’s adventure: The handover is not a pile of documents. Fictional teaching story; concepts follow the cited source.*

Source: text lines 15053–15595.

Pip’s crew is asked to accept a service with unresolved production risks. Readiness is a negotiated engineering transition. Early collaboration and shared frameworks may even let developers operate the service themselves, with clear boundaries for platform support.

## Production readiness as a negotiated transition

Pip’s readiness review finds missing SLO coverage and unpracticed recovery. Architecture, dependencies, monitoring, capacity, emergency response, and change management need examination before SRE takes responsibility. Developers and SRE prioritize improvements, train, and hand over progressively with continuing support. Pip accepts readiness, not an unchanged service wrapped in documentation.

Source: text lines 15053–15595.

## Early engagement changes the cost of reliability

Pip joins design early and adds safe traffic controls before clients depend on the API. Implementation can then include instrumentation, controls, and established infrastructure before launch validation. Earlier reliability work avoids expensive architectural commitments. If the resulting service is simple enough for developers to operate, Pip counts that as success too.

Source: text lines 15053–15595.

## Frameworks codify production experience

Pip sees teams repeatedly build incompatible overload controls. Frameworks encode tested logging, monitoring, configuration, and protection patterns beneath business logic. Shared control surfaces help automation and incident diagnosis, and improvements can reach many services. Pip replaces repeated bespoke integration with supported production experience.

Source: text lines 15053–15595.

## Platform and application responsibility

Pip separates a wrong pricing calculation from a shared admission failure. Developers support application-specific defects while SRE can own the common production platform. Reusable capabilities extend support beyond dedicated per-service SRE staffing. Pip documents the responsibility boundary so each incident reaches people able to resolve it.

Source: text lines 15053–15595.

## Transfer challenge: Prepare a service for SRE ownership

A growing service requests SRE support. Reviewers find missing user-error monitoring and an unsafe rollout procedure; the developers can help correct both.

### Agree on improvements, training, and gradual handover

The receiving team gains operational controls and service understanding. Both teams must invest engineering time before transfer. Developers and SRE fix readiness gaps, rehearse operations, and transfer responsibilities with backup support.

### Transfer the pager immediately

SRE begins responding without waiting for remediation. Unresolved controls and knowledge gaps follow the pager. Responders own incidents before they can reliably observe or reverse changes.

A PRR should lead to prioritized repairs, training, and a supported handover when the service merits SRE ownership. Earlier design work or shared platform controls can reduce the amount of bespoke remediation required.

## Choose an engagement model

A growing service asks for SRE support. Compare a readiness review, early design collaboration for its replacement, and adoption of shared production controls.

- Need and fit
- Readiness work
- Reusable boundary
