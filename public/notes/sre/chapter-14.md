# Chapter 14: Managing Incidents

Separate command, operations, communication, and planning during an incident

A technically capable team can prolong an outage when everyone changes production independently and nobody maintains the overall picture. Incident management makes responsibilities explicit so technical response and coordination can proceed together. The commander assigns roles and tracks priorities; operations controls production changes; communication keeps stakeholders informed; planning handles continuity and longer-term needs. A recognized coordination channel and a live incident document let new participants understand what has happened without interrupting the responder repeatedly. Command transfers require explicit acknowledgment, particularly across time zones. Declare an incident early when impact, duration, or cross-team work justifies coordination. Practicing these roles during exercises and substantial operational changes makes the process familiar before an emergency, reducing confusion without requiring the commander to solve every technical problem.

## The commander holds the overall picture

The incident commander coordinates the response, assigns responsibilities, tracks priorities, and removes obstacles. They initially hold any role not yet delegated, but should delegate as workload grows. Separating command from detailed troubleshooting protects attention for the incident’s overall state, needed help, and recovery direction. Authority becomes clear enough that each participant can work independently within an assigned scope.

## Only coordinated operations change production

The operations lead directs technical work and is the focal point for changes to the affected system. Other participants provide expertise through that structure rather than independently deploying promising fixes. This prevents conflicting interventions and preserves understanding of the system’s state. Communication and planning roles remove status requests and continuity tasks from the people making operational changes.

## Maintain a common operational record

A recognized communication channel and live incident document expose the current impact, roles, actions, and unresolved questions. The record lets arriving responders catch up and preserves failed attempts so they are not repeated blindly. Keep essential information easy to find and choose tools that remain available during the incident; relying exclusively on the service being repaired creates a circular dependency.

## Declare early and hand off explicitly

An incident process is easier to start before coordination becomes chaotic. The chapter suggests triggers including customer visibility, a second team’s involvement, or a prolonged unresolved investigation. At handoff, the outgoing commander briefs the replacement, obtains explicit acceptance, and informs participants. Practicing the process during drills or cross-team work keeps these habits available when pressure is high.

## Apply it

A two-region outage needs application and database teams. Assign command, operations, communication, and planning, then describe a shift handoff.

Source: *Site Reliability Engineering*, chapter 14, text lines 5838–6052. This note is an original synthesis; the exercise is a teaching extension.
