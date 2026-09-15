# Chapter 1: What Happens When There Are No Best Practices?

*Pip’s adventure: The least-worst crossing. Fictional teaching story; concepts follow the cited source.*

Source: text lines 196–799.

Pip’s island delivery system freezes while reports run. Splitting it might help, but the team cannot maximize speed, safety, and migration simplicity together. Pip records the least-worst decision and gives its important promises executable checks.

## Least-worst trade-offs

Pip wants faster deliveries, safer releases, and a migration finished tomorrow. The constraints pull in different directions; no design maximizes them all. Pip compares consequences and chooses the least-worst balance for this network. Advice from another organization may fail when business, data, or technology constraints change.

Source: text lines 196–255.

## ADRs preserve reasoning

Pip finds a service boundary nobody can explain. An ADR records context and alternatives, the decision with justification, and consequences including trade-offs. Pip documents why reporting moved and what migration and release complexity it introduced. Later crews inherit reasoning, not a topology mistaken for a timeless rule.

Source: text lines 337–379.

## Fitness functions

Pip promises an agile network, then asks what can be measured. Fitness functions objectively assess architectural characteristics: atomic checks catch cycles; holistic checks examine interacting qualities such as security and performance. Pip measures deployability, testability, or cycle time rather than a vague aspiration. Domain tests still check business behavior, not those architectural properties.

Source: text lines 380–506.

## Feedback and governance

Pip’s quarterly review finds months of new dependency violations. Continuous automated fitness checks would expose erosion during delivery. Pip adds the layer and dependency rules to CI, while scheduling necessary manual reviews as often as practical. Rapid feedback makes safeguards harder to postpone under release pressure.

Source: text lines 507–590.

## Transfer challenge: Protect the ticket path

The Sysops Squad monolith freezes during reporting and occasionally loses availability for ticket entry. The team has limited migration time and must make its reasoning reviewable. It can first document an ADR and add continuous architecture checks, or immediately split reporting without executable governance.

### ADR plus checks

Makes trade-offs explicit and provides ongoing evidence that boundaries and quality rules remain intact. Consumes initial engineering time and requires choosing measurable checks. The team records the migration context, then catches dependency cycles and layer violations in the build while the split proceeds.

### Split first

Moves quickly toward isolating the reporting load and may show visible operational relief sooner. The reasoning and safeguards remain implicit, so later changes can recreate coupling or weaken the intended boundary. Reporting is extracted, but a later shortcut reconnects it to ticket code; the team must reconstruct why the boundary mattered during an incident.

The chapter’s point is disciplined decision making under uncertainty. Documentation and measurable feedback do not remove trade-offs, but they make them inspectable and governable as the architecture changes.

## Write a decision record

Choose one structural decision in a system you know and write a compact ADR with measurable architectural checks.

- Context
- Decision
- Trade-off
