# Chapter 13: Emergency Response

Rehearse recovery paths that still work when normal tools fail

Emergency readiness depends on preparation that survives contact with real failure. The chapter’s three incidents show different weaknesses: a scoped database test exposed hidden dependencies and an untested rollback; a global configuration change disabled both services and ordinary response tools; a decommissioning workflow amplified an empty-target error into widespread erasure. Recovery depended on aborting harmful activity, involving the right people, using alternative access, and directing traffic toward surviving capacity. Restoring user service and rebuilding the damaged fleet were separate milestones. Each event produced improvements that needed follow-through and renewed testing. The practical lesson is to rehearse the actual recovery process, including communication and installation dependencies, and to use bounded tests to discover assumptions before an uncontrolled outage exposes them.

## Test the rollback before the emergency

A planned failure experiment can affect dependencies beyond its intended target. The database exercise revealed that a reviewed scope was insufficient and that the assumed rollback did not work. Readiness therefore includes validating reversal and abort procedures, understanding dependency behavior, and having people available to respond. A test teaches something useful only if the team can also contain unexpected damage.

## Keep response access independent

An outage can disable the same tools engineers normally use to diagnose, communicate, and deploy fixes. During the configuration incident, alternative access and simpler communication paths helped responders act when ordinary infrastructure was unavailable. Independence must be tested in practice: possessing a backup tool is less useful if responders cannot authenticate to it or no longer remember how to use it.

## Stop propagation and distinguish recovery stages

When automation is expanding damage, stopping the workflow may matter more than repairing an individual machine. In the erasure incident, engineers halted automation and redirected traffic before rebuilding lost capacity. User-visible recovery can precede complete fleet restoration, but remaining capacity and network constraints still require attention. Reinstallation systems must also handle the unusual scale of a mass recovery.

## Turn emergency experience into practiced capability

Documenting an incident identifies concrete weaknesses, but prevention requires completed actions and later exercises. Test both systems and response processes, including communication, escalation, and unfamiliar recovery dependencies. Involve engineers who understand the initiating change without treating them as targets for blame. Repeated practice updates the team’s mental model as production evolves and reveals when an old recovery assumption is no longer valid.

## Apply it

Plan a bounded drill in which the usual management interface is unavailable. Include a tested reversal and a separate means of coordinating responders.

Source: *Site Reliability Engineering*, chapter 13, text lines 5520–5837. This note is an original synthesis; the exercise is a teaching extension.
