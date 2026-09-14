# Chapter 2: Designing Agent Systems

Original learning notes. Source: text lines 1195–2066 in the supplied book.

The ecommerce support example starts with a small useful task: interpret a customer request, inspect order information, choose the appropriate action, and report the result. This provides a concrete way to connect model selection, tools, context, and orchestration instead of designing an unlimited assistant. Capability must be weighed against cost, latency, and deployment constraints. Evaluation supplies feedback about whether the assembled system actually performs the intended workflow. Iterative changes and phased exposure to real users reveal ambiguity and integration failures that a demonstration can miss. Expand only after the initial slice has clear success criteria and evidence from representative cases.

## System components

The chapter’s design view combines a foundation model with instructions, context, tools, memory, orchestration, and evaluation. A useful agent is therefore a system assembled around the model, not a prompt alone.

## Model selection

Choosing a model weighs capability, latency, cost, context length, modality, and deployment constraints. General pretrained models offer breadth; specialized or smaller models may be cheaper and easier to control for a narrow task.

## Context engineering

The system must assemble relevant user input, retrieved facts, tool results, and instructions in a form the model can use. Irrelevant or conflicting context consumes limits and can steer the agent away from the task.

## Evaluation loop

The example agent is tested with an evaluation script and representative cases. Design proceeds by observing failures, changing one part, and rerunning checks, rather than assuming a successful demo generalizes.

## Teaching extension

A support agent must answer policy questions and update tickets, but model cost is capped.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
