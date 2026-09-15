# Chapter 14: Managing Incidents

*Pip’s adventure: Too many rescuers, conflicting fixes. Fictional teaching story; concepts follow the cited source.*

Source: text lines 5838–6052.

Pip’s booking outage attracts three teams and several promising fixes. Clear incident roles keep those interventions coordinated. A common record, early declaration, and an acknowledged handoff let responders work independently without losing the overall recovery picture.

## The commander holds the overall picture

Pip coordinates the outage while a specialist investigates the database. The incident commander initially holds undelegated roles, then assigns responsibilities as work grows. Tracking priorities, obstacles, help, and recovery direction requires attention separate from detailed troubleshooting. Pip delegates technical work while retaining the overall picture.

Source: text lines 5838–6052.

## Only coordinated operations change production

Pip sees a developer about to apply a second configuration fix. The operations lead coordinates production changes so interventions do not conflict or obscure state. Specialists propose work through that structure. Communication and planning roles absorb status and continuity needs, freeing operators to focus.

Source: text lines 5838–6052.

## Maintain a common operational record

Pip’s replacement asks whether the old binary was tried. A live record and recognized channel show impact, roles, actions, failed attempts, and open questions. Pip highlights the unsuccessful rollback so nobody repeats it blindly. The record must stay reachable without depending exclusively on the broken service.

Source: text lines 5838–6052.

## Declare early and hand off explicitly

Pip declares an incident before cross-team work becomes chaotic. Customer visibility, another team’s involvement, or prolonged investigation can justify early coordination. The outgoing commander briefs a replacement, receives explicit acceptance, and tells participants. Pip practices that handoff during drills rather than discovering the process under pressure.

Source: text lines 5838–6052.

## Transfer challenge: Coordinate experts during a regional outage

Two teams are diagnosing a growing outage. One developer wants to change retry settings while another prepares a database restart. Stakeholders are repeatedly asking the on-call engineer for updates.

### Assign command, operations, and communication roles

Technical changes can be coordinated while stakeholders receive regular updates. Participants must briefly establish ownership and a shared record. The operations lead evaluates proposed changes; the commander obtains help and keeps the overall picture.

### Let each expert pursue their proposed fix independently

Several hypotheses can be investigated in parallel. Independent production changes can interact and make results uninterpretable. Parallel diagnosis may help, but production interventions need an agreed operations owner.

Role separation permits parallel work without conflicting changes. The commander coordinates; operations changes production; communication handles updates; planning maintains continuity.

## Assign roles before changing production

A two-region outage needs application and database teams. Assign command, operations, communication, and planning, then describe a shift handoff.

- Role ownership
- Live state
- Handoff
