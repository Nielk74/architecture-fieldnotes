# Chapter 1: Introduction

*Pip’s adventure: Pip joins the harbor’s pager rotation. Fictional teaching story; concepts follow the cited source.*

Source: text lines 785–1146.

Pip joins the crew running harbor bookings and finds engineers repeating yesterday’s repairs. SRE applies software engineering to that operational work. Protected project time, a shared error budget, and distinct responses to pages, tickets, and logs help the service grow sustainably.

## Software engineering applied to operations

Pip replaces another failed replica by hand. SRE treats service operation as a software design problem, building deployment, recovery, monitoring, and capacity mechanisms. A tested repair controller can make staffing grow more slowly than workload. Pip still works with production failures so engineering stays connected to reality.

Source: text lines 785–1146.

## Protected engineering capacity

Pip’s crew spends 70% of its time on operations. Google’s model caps aggregate operational work at half, protecting the rest for development. Pip measures actual time and shares some responsibility with developers. The breathing room supports fixing recurrent service problems instead of adding an endless stream of operators.

Source: text lines 785–1146.

## Error budgets align incentives

Pip and product agree on 99.9% eligible-request success. Among a million requests, the implied error budget permits 1,000 failures. Development and SRE share that user-informed target: remaining budget supports controlled change, exhaustion redirects effort to reliability. Pip makes safer rollouts valuable to both sides.

Source: text lines 785–1146.

## Operational responsibilities need distinct responses

Pip receives a capacity forecast and an active outage together. The outage needs immediate human action; the forecast can become a planning ticket. Logs preserve diagnostics, while rehearsals and capacity work address longer timescales. Pip builds preventive software so recurring manual responses do not become permanent duties.

Source: text lines 785–1146.

## Transfer challenge: Make room to eliminate recurring intervention

A growing service needs manual replica repair every day. SRE spends 70% of its time on operations, and a proposed repair controller keeps being postponed. Product developers want to add another feature this month.

### Share operational duties and fund the controller

Developers see the production burden while SRE gains time to remove it. Feature work slows during the investment. The teams reserve engineering time and track whether recurring repair hours fall.

### Add temporary operational coverage

Immediate response capacity improves while the service is busy. Recurring work remains and will grow unless engineering time is explicitly protected. Coverage relieves today’s pressure, but a dated repair project is still needed.

Headcount can relieve immediate overload, but the SRE model requires a lasting engineering investment. Shared operational responsibility supplies feedback about the cost of the product’s behavior.

## Protect time for engineering

A six-person team spends four days each week on recurring interventions. Propose an ownership change and one engineering investment that reduce this load.

- Recurring work
- Shared responsibility
- Evidence of improvement
