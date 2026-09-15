# Chapter 11: Being On-Call

*Pip’s adventure: A pager rotation is not just a calendar. Fictional teaching story; concepts follow the cited source.*

Source: text lines 4665–4943.

Pip’s harbor crew can cover the pager, but constant interruptions leave no time to improve the service. Staffing assumptions, incident intensity, escalation, and practice determine whether the rotation is sustainable—and whether responders are ready when a real failure arrives.

## Coverage quantity is a staffing constraint

Pip divides continuous primary and secondary duty among eight engineers. Under the chapter’s single-site assumptions, two simultaneous positions give each engineer a quarter-time on-call share. Multi-site coverage can reduce night work while adding coordination. Pip checks the actual coverage model rather than treating eight as a universal staffing formula.

Source: text lines 4665–4943.

## Incident intensity determines shift quality

Pip receives twenty pages from one network failure. Related alerts count as one incident, but duplicate notifications still need reducing. The chapter’s follow-up assumptions suggest at most two incidents per twelve-hour shift as a sustainable upper target. Pip measures time to restore, investigate, document, and fix—not just pages acknowledged.

Source: text lines 4665–4943.

## Escalation supports deliberate decisions

Pip reaches for last week’s fix before checking today’s evidence. Clear backup paths, response expectations, and permission to seek help support deliberate decisions. Pip escalates the unexplained outage to the developer on-call. A familiar alert suggests a hypothesis, not proof; asking another team is normal incident work.

Source: text lines 4665–4943.

## Correct both overload and underload

Pip’s busy crew sets incident-reduction goals and protects engineering time. Some duties may return to developers while architectural problems are repaired. A very quiet rotation has the opposite risk: operational knowledge fades. Pip rehearses an old outage so both workload and readiness remain healthy.

Source: text lines 4665–4943.

## Transfer challenge: Make on-call sustainable

A team rotates weekly on-call across six engineers. Handoffs omit known risks and two people have had no protected recovery time after incidents.

### Add a written handoff and recovery policy

Context transfers cleanly and fatigue becomes an operational risk the team manages. The team must maintain the handoff and cover recovery time. The next responder receives current risks, and post-incident recovery is scheduled.

### Shorten the rotation without changing practice

Short rotations reduce individual exposure. More handoffs can increase coordination overhead. Fatigue improves briefly, but missing context causes another slow response.

Handoffs and recovery time are reliability controls because fatigued responders lose context; shorter rotations alone do not solve either problem.

## Audit an on-call rotation

Assess both the share of time on duty and the incidents per shift. Propose a change that preserves engineering time without losing production familiarity.

- Coverage
- Shift quality
- Support and practice
