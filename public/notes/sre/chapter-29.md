# Chapter 29: Dealing with Interrupts

Source: text lines 13942–14247 of the supplied book extract.

Operational work includes urgent pages, slower customer tickets, and ongoing duties such as rollouts. Distributing each arrival across the whole team can make everyone interruptible, sacrificing the sustained attention needed for engineering. The chapter proposes separating periods devoted to interrupts from periods devoted to projects. A designated responder gives urgent work clear ownership; ticket rotations and transferable operational roles keep the rest of the team focused. On-call weeks should not also carry normal project expectations. Handoffs preserve unfinished work and expose recurring ticket causes. Teams should examine and reduce those causes through automation, service changes, and reasonable request policies. Quietly helping the queue outside the rotation can hide understaffing or excessive demand instead of solving it.

## Different interrupts need different response policies

Pages, tickets, and ongoing operational duties differ in urgency, volume, and ownership. A production emergency needs a clear immediate responder, while a request for review may wait within an agreed response window. Choosing coverage requires considering backlog and severity alongside human costs. Treating every arrival as equally urgent unnecessarily interrupts work that needs concentration without necessarily improving service to users.

## Polarized time for projects and interrupts

Switching between deep project work and unpredictable operational demands has a cost beyond the minutes spent answering. Assigning substantial blocks to one work mode helps engineers know what success means that day. Primary on-call work should take priority during its block; quiet periods can accommodate interruptible cleanup. A project with an immovable deadline may require moving that engineer’s on-call assignment.

## Rotations and transferable responsibility

Concentrate tickets in an explicitly staffed rotation rather than assigning them randomly across the team. If volume exceeds one person’s capacity, add appropriate coverage without making everyone permanently interruptible. Document ongoing work and hand it over so a multiweek rollout does not follow its original owner into every project week. Clear ownership prevents both dropped work and diffuse responsibility.

## Reduce demand instead of enduring the queue

Regularly review ticket classes and handoffs to identify repeated causes rather than merely surviving each shift. Automation, clearer interfaces, and reasonable support policies can remove work. Requesters can supply necessary information or perform steps that do not require SRE privileges. Hidden help from off-rotation engineers obscures actual capacity, so the team needs an honest view of demand and sustainable coverage.

The lesson’s examples, decision scenario, and exercise are original teaching extensions rather than reported incidents.
