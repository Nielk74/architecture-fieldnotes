# Chapter 1: Introduction

Use engineering time and error budgets to change how services are run

SRE changes the economics of operating a service by investing in software that removes recurring human intervention. That investment needs protected time: when operational work consumes the team, the organization must change ownership or staffing so engineering can resume. Reliability also needs a product decision about how much failure users can tolerate. An error budget translates that decision into a shared constraint on release velocity, replacing an argument between stability and features with measurable remaining risk. Monitoring distinguishes urgent intervention from work that can wait and information retained for diagnosis. Incident preparation, capacity planning, and efficient resource use complete the model: engineers own production outcomes while continuously improving the systems that deliver them.

## Software engineering applied to operations

SRE treats running a service as a problem that can be improved through software design. Instead of adding an operator whenever traffic or machine count grows, engineers build mechanisms for deployment, recovery, monitoring, and capacity management. The intended result is a service whose operational staffing grows more slowly than its workload, while engineers retain direct experience of production failures.

## Protected engineering capacity

Operational work can consume every available hour because new tickets and incidents arrive continuously. Google therefore caps the aggregate operational share at half of SRE time and protects the remainder for development. Measuring actual time makes overload visible; moving some operational responsibility back to developers creates both breathing room and a reason to improve the service itself.

## Error budgets align incentives

An availability objective leaves a permitted fraction of unsuccessful service: the error budget. Product owners choose the target according to user needs, and development and SRE share responsibility for staying within it. Remaining budget supports controlled change; exhaustion redirects effort toward reliability. Safer rollouts become valuable because they permit useful innovation with less user disruption.

## Operational responsibilities need distinct responses

Monitoring, incident response, change management, and capacity planning are related responsibilities, but they operate on different timescales. An alert calls for immediate human action; a ticket records work that can wait; a log preserves diagnostic information. Capacity forecasts and rehearsed incident procedures move work out of emergencies, while software improvements prevent repeated manual responses from becoming permanent duties.

## Apply it

A six-person team spends four days each week on recurring interventions. Propose an ownership change and one engineering investment that reduce this load.

Source: *Site Reliability Engineering*, chapter 1, text lines 785–1146. This note is an original synthesis; the exercise is a teaching extension.
