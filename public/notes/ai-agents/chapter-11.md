# Chapter 11: Improvement Loops

Original learning notes. Source: text lines 9934–10987 in the supplied book.

An improvement loop begins by collecting and organizing evidence from production, evaluation, and user reports. Diagnosis and categorization turn that evidence into candidate changes, while prioritization directs limited effort toward consequential recurring problems. Shadow deployments observe candidates without letting them control live outcomes; controlled comparisons test whether a proposed improvement actually helps. Changes can affect context, prompts, orchestration, or trained model behavior, so regression evaluation must cover more than the original failing case. Human review remains useful for ambiguous judgments. Recording decisions and results connects feedback, experimentation, and learning, allowing the next team member to understand why the system changed.

## Feedback pipelines

Feedback collects outcomes, user reports, traces, and evaluation results, then routes them to analysis and improvement. Automation helps handle volume, but human review is needed for ambiguous or high-impact cases.

## Shadow experiments

Shadow mode runs a candidate system alongside the baseline without exposing its actions. Comparing outcomes estimates whether a change helps before it receives real authority.

## Prioritization

Improvements compete for limited engineering attention. Teams weigh frequency, severity, user value, confidence, and cost rather than optimizing a single metric.

## Continuous evaluation

Every change can introduce regression or overfit to the last failure. A stable benchmark plus newly discovered cases keeps the loop honest and provides evidence for release decisions.

## Teaching extension

A routing change appears better on a small offline sample.

Both choices can fit different constraints. The decision should state stakes, reversibility, evidence, and who owns correction.

Create a concise artifact for the chapter workflow that makes the agent decision inspectable. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
