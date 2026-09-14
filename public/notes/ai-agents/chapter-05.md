# Chapter 5: Orchestration

Original learning notes. Source: text lines 3834–4797 in the supplied book.

Orchestration determines how an agent selects tools, manages state, and uses each result to continue its work. A direct reflex can suit a simple predictable task; ReAct incorporates observations into successive actions; a planner-executor design separates task decomposition from execution. Research and reflection patterns add opportunities to explore or revise, but also add calls, delay, and failure paths. Context engineering connects these patterns to execution by assembling the relevant instructions, evidence, and workflow state for each invocation. Compare approaches on representative tasks, including how often plans must adapt, and use the simplest pattern that meets the required quality and latency.

## Reflex and ReAct

A reflex agent maps an input directly to an action. ReAct interleaves reasoning-like planning with actions and observations, allowing the next step to use tool results but potentially producing long or hard-to-control trajectories.

## Planner-executor

A planner first decomposes a task and an executor carries out steps. Separation can improve clarity, debugging, and cost control, but stale plans and coordination between phases must be handled.

## Query decomposition

A complex question is broken into subquestions, retrieved or researched iteratively, then synthesized. This improves coverage when knowledge is external, while increasing calls and opportunities for unsupported joins.

## Reflection and research

Reflection agents critique an attempt and revise it; deep-research patterns coordinate planning, tool use, and synthesis. Both need explicit state and evaluation because a critique can repeat the same error.

## Teaching extension

A research request needs several sources, but users tolerate only a few minutes.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
