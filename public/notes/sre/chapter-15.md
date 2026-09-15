# Chapter 15: Postmortem Culture: Learning from Failure

*Pip’s adventure: The incident review asks a better question. Fictional teaching story; concepts follow the cited source.*

Source: text lines 6053–6267.

Pip wants to know who pressed the wrong button. The crew instead reconstructs the information, tools, and conditions that made the action possible. Clear review triggers, owned follow-up work, and privacy-conscious sharing turn one failure into useful learning.

## Agree on postmortem triggers

Pip nearly skips reviewing a brief data-loss event because no pager fired. Predetermined triggers can include degradation, loss, unexpected intervention, slow recovery, and monitoring failure. Stakeholders may request reviews too. Pip captures significant learning consistently, including manually discovered gaps, instead of reporting only selected outages.

Source: text lines 6053–6267.

## Blamelessness preserves causal information

Pip replaces “careless operator” with the exact ambiguous command behavior. Blameless review examines information, tools, constraints, and assumptions that shaped the action. Responders can describe what happened without protective omissions. Pip identifies concrete weaknesses and changes conditions instead of treating punishment as prevention.

Source: text lines 6053–6267.

## Review impact, causes, and the action plan

Pip reconstructs impact, timeline, mitigation, and contributing causes. Reviewers check completeness, priorities, and whether actions address those findings. Input validation and a rollback drill become separately owned, tracked work. Multiple causes can need multiple improvements; accountability does not require blame.

Source: text lines 6053–6267.

## Sharing makes one failure teach many teams

Pip’s crew publishes a searchable review without user-identifying information. Reading groups, reenactments, and selected examples help other teams recognize similar dependencies. Leadership participation and recognition encourage honest reporting. Pip turns the shared lesson into another team’s rehearsal while preserving privacy even in internal documents.

Source: text lines 6053–6267.

## Transfer challenge: Turn failure into system learning

A deploy caused a 20-minute outage because a default timeout changed and no canary exposed it. The team is deciding what to write and what to fix first.

### Write a blameless postmortem with owned guardrails

Contributing conditions become visible and corrective work has owners. Follow-through takes coordination across teams. The postmortem adds a default check, owner, priority, and dissemination plan.

### Record the deployer and require approval training

Training may reduce one class of mistake quickly. Individual focus can hide the unsafe default and discourage reporting. Training occurs, but another service retains the same dangerous default.

The review should explain the unsafe default and the missing detection, then assign improvements that address both. Training can help, but it cannot substitute for fixing system conditions that will affect the next responder.

## Write an action-oriented incident review

A deployment caused failures because a configuration value was accepted without validation. Draft a blameless causal account and two follow-up actions.

- Information and conditions
- Impact and timeline
- Actions and review
