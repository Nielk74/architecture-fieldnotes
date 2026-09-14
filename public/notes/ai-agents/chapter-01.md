# Chapter 1: Introduction to Agents

Original learning notes. Source: text lines 620–1194 in the supplied book.

Agency concerns the ability to choose and revise actions using observations, rather than merely execute a predetermined script. Foundation models make this practical by interpreting varied requests and generating structured tool calls, but the complete agent also needs orchestration, memory, tools, and supporting infrastructure. Different applications require different degrees of initiative and human involvement. A conversational assistant, a bounded business task, and a more autonomous workflow therefore need different expectations. Frameworks can supply useful building blocks, but do not determine whether a design actually needs autonomy. Begin by identifying the adaptation the task requires and the limits within which actions should occur.

## Agent

An autonomous agent interprets inputs, reasons over context, chooses actions, and interacts with an environment toward a goal. Unlike a fixed script, it can adapt to ambiguous situations, but its autonomy makes boundaries and evaluation necessary.

## Pretraining

Large pretrained generative models learn broad language and world patterns before being adapted to tasks. Their capabilities include natural-language understanding, structured generation, context use, and multimodal synthesis; pretraining does not guarantee current or correct answers.

## Tool use

Tools let an agent retrieve information or perform actions outside model weights. Tool calls extend capability but introduce permissions, failures, latency, and data contracts that the surrounding system must manage.

## Agent types

Business-task, conversational, and autonomous agents differ in workflow and degree of initiative. The type helps set expectations about human involvement, context, and acceptable failure.

## Teaching extension

A scheduling agent can read calendars but sending an invitation is consequential. The team has limited reviewer time and must avoid double-booking.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
