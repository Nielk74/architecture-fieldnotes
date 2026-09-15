# Chapter 2: Designing Agent Systems

*Pip’s adventure: One ticket before the whole museum. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 1195–2066 in the supplied book.

Pip wants a guide that can do everything. The team starts with one ticket cancellation: understand, look up, act, confirm. A narrow useful task makes model trade-offs, context mistakes, and evaluation failures visible before the museum expands the agent’s role.

## System components

Pip’s cancellation demo says “done” before anything happens. The model needs instructions, context, tools, memory, orchestration, and evaluation around it. Pip connects ticket lookup, cancellation, and conversation state. The orchestrator waits for the tool’s result before confirming success.

## Model selection

Pip tries two models on the same cancellation cases. Capability competes with latency, cost, context length, modality, and deployment constraints. A smaller specialized model may suit this narrow task better than a broad one. Pip compares wrong actions, end-to-end delay, and expense before choosing.

## Context engineering

Pip’s guide mixes yesterday’s booking into today’s refund. Context engineering assembles relevant instructions, user input, retrieved facts, and tool results. Pip supplies this ticket and its applicable policy, leaving unrelated purchases out. Conflicting or irrelevant context consumes limits and can redirect the task.

## Evaluation loop

Pip fixes cancellations; address changes suddenly break. A successful demo did not cover the whole workflow. Pip observes failures, changes one component, and reruns representative evaluation cases. Both request groups must pass before the next rollout.

## Teaching extension

A support agent must answer policy questions and update tickets, but model cost is capped.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
