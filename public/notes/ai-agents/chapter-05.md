# Chapter 5: Orchestration

*Pip’s adventure: The plan meets a missing exhibit. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 3834–4797 in the supplied book.

Pip plans a perfect museum tour; one exhibit has moved. A direct rule, an observation-driven loop, or a planner and executor may each fit different work. Pip compares useful adaptation with the calls, delay, and failure paths each pattern introduces.

## Reflex and ReAct

Pip routes a known opening-hours request directly to its tool. That reflex maps input to action. For a blocked booking, ReAct interleaves planning, actions, and observations so later steps use returned facts. Pip bounds the loop: adaptive trajectories can become long and difficult to control.

## Planner-executor

Pip’s planner divides a tour into rooms, timing, and access. An executor discovers that one exhibit has closed. Planner-executor separation aids clarity, debugging, and cost control, but plans can become stale. Pip reports the blocked step so planning and execution reconnect.

## Query decomposition

Pip researches a new exhibition’s staffing, transport, and insurance. Query decomposition breaks the question into subquestions for iterative retrieval and synthesis. Pip reconciles dates and locations before combining the findings. More coverage brings more calls and opportunities for unsupported joins.

## Reflection and research

Pip’s draft compares ticket prices from different years. A reflection step critiques the attempt and requests comparable sources. Deep research coordinates planning, tools, and synthesis; both patterns need explicit state and evaluation. Pip checks the revision against evidence because a critique can repeat an error.

## Teaching extension

A research request needs several sources, but users tolerate only a few minutes.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
