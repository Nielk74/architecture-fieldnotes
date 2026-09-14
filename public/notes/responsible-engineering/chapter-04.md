# Chapter 4: Anticipating and Planning for Downstream Consequences

Original learning notes. Source: text lines 2318–3086 in the supplied book.

Safety requires looking beyond whether individual functions return the expected result. A protective feature can itself create harm when its assumptions fail, as the crash-cart authentication example demonstrates. Teams need varied perspectives and several forms of investigation: adversarial testing explores misuse, survivor testing examines the experience of harmed people, and stress or change testing reveals unexpected interactions. Future-regret and tabletop exercises make possible consequences and response gaps discussable before launch. These activities should produce concrete adjustments with owners, rather than end as speculative workshops. The objective is to reduce foreseeable harm while understanding the costs and limitations of the chosen safeguards.

## Safety and harm

Safety concerns whether software can cause physical, psychological, financial, interpersonal, allocative, representational, quality-of-service, or social-system harm. A conventional functional test cannot enumerate all these pathways.

## Breadth and red teams

Testing with varied people and adversarial “abuser” behavior exposes failures ordinary happy-path tests miss. The chapter contrasts abuser testing, which probes malicious misuse, with survivor testing, which asks whether an innocent harmed user has recovery and support.

## Future regret and tabletop

Future-regret exercises imagine a decision becoming publicly regrettable; tabletop exercises have a group walk through a crisis and response. Both surface ethical consequences before an incident, though imagination cannot replace real evidence.

## Change and stress

Complex systems produce unexpected interactions after changes. Stress tests, chaos experiments, and careful rollout reveal behavior under extreme load, weather, outages, or altered dependencies; safety controls also carry costs such as friction and false alarms.

## Teaching extension

A voice assistant change intended to block abusive content causes a benign phrase to disappear from answers. The team must protect against misuse while avoiding broad quality regressions.

Both choices are defensible under different constraints; the responsible decision states the accepted consequence and the evidence that could change it.

Choose a feature with plausible misuse or failure. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
