# 2. How Debugging Practices Differ Between Observability and Monitoring

Follow evidence beyond the familiar dashboard

Monitoring and exploratory debugging answer different questions. A threshold efficiently recognizes a condition chosen in advance, while an investigation must discover which combination of circumstances produced the current symptom. The chapter challenges a familiar workflow: recognize a graph shape, recall an earlier incident, and apply its fix. That shortcut can mistake a downstream effect for its cause. Moving between unrelated tools also forces responders to reconstruct context mentally. Retained event dimensions support a more explicit sequence of comparisons in which each result guides the next question. Shared query paths make reasoning inspectable by colleagues, so diagnostic skill depends less on being the person with the longest memory of previous outages.

## Recognition has limits

A dashboard compresses selected measurements into a recognizable picture. That makes it valuable for checking known conditions, but encourages matching today’s graph to yesterday’s failure. Similar symptoms can originate from different mechanisms. Treat the familiar pattern as a hypothesis to test, especially before applying a repair that changes the system and obscures the original evidence.

## Comparative investigation

Start with an observed symptom and identify the requests that exhibit it. Compare that population with requests that do not, then narrow along dimensions that distinguish them. Each comparison should reduce uncertainty or challenge an explanation. This makes the investigation repeatable even for a responder who has never encountered the failure before.

## Context continuity

Switching tools is costly when identifiers, time windows, and populations do not align. The responder then performs an implicit join in memory and may correlate measurements from different requests. Carrying request context through the investigation makes these relationships explicit and lets other engineers check the evidence behind a proposed explanation.

## Expertise becomes shareable

Experienced engineers remain valuable, but intuition should not be the only route to a diagnosis. Saved investigation paths reveal which questions were asked and why a hypothesis changed. Colleagues can retrace those steps and learn a method rather than memorize a conclusion, reducing dependence on the same escalation expert during every unfamiliar incident.

## Apply it

Revisit a familiar incident diagnosis and turn one intuition into a comparison another engineer could repeat.

Source: *Observability Engineering*, chapter 2; supplied text lines 1280–1658. These notes are an original synthesis; examples and activities are illustrative.
