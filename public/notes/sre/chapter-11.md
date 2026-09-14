# Chapter 11: Being On-Call

Balance coverage, incident load, and confidence in the responder

On-call keeps engineers connected to production and enables rapid intervention, but its organization must leave room for engineering. Coverage quantity and incident intensity are different constraints: a well-sized rotation can still suffer from noisy, repeated pages. Google’s model limits on-call time and allows enough time per incident for investigation and follow-up, with primary and secondary duties made explicit. Response expectations should reflect the service’s reliability needs, while escalation, clear procedures, and blameless learning reduce pressure on individuals. Persistent overload calls for measurable improvement work and sometimes renegotiated responsibilities with developers. Excessive quiet has a different danger: responders lose familiarity with the system. Practice exercises and sufficient production exposure help maintain the judgment needed when an unfamiliar failure finally occurs.

## Coverage quantity is a staffing constraint

On-call staffing determines how much of each engineer’s time remains available for project work. The chapter’s single-site model needs eight engineers to cover continuous primary and secondary duties while limiting each person’s on-call share to a quarter. Multi-site coverage can reduce night work but adds coordination costs. These numbers follow the stated coverage assumptions rather than constituting a universal staffing formula.

## Incident intensity determines shift quality

A shift with frequent interruptions can leave no time to investigate, restore, document, and fix the causes of incidents. Count related alerts as one incident, while also reducing redundant notifications. The chapter uses at most two incidents per twelve-hour shift as a sustainable upper target based on follow-up effort. A recurring daily page is a reason to improve the service or monitoring.

## Escalation supports deliberate decisions

A responder needs clear backup paths, agreed response expectations, and permission to ask for help. Under pressure, a familiar alert can tempt an engineer to assume the previous cause without checking. A supportive rotation and an incident process create space to inspect evidence, escalate unknowns, and coordinate action. Seeking another team’s expertise is a normal response to an uncertain outage.

## Correct both overload and underload

Persistent overload needs concrete goals, such as fewer daily tickets or fewer incidents per shift, and protected engineering time to achieve them. Responsibilities may temporarily return to developers while architectural problems are repaired. Underload also needs attention: infrequent exposure can erode operational knowledge. Rehearsals and a rotation that keeps engineers familiar with production reduce surprises when a real incident occurs.

## Apply it

Assess both the share of time on duty and the incidents per shift. Propose a change that preserves engineering time without losing production familiarity.

Source: *Site Reliability Engineering*, chapter 11, text lines 4665–4943. This note is an original synthesis; the exercise is a teaching extension.
