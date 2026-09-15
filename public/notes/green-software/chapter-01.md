# Chapter 1: Introduction to Green Software

*Pip’s adventure: The cinema that used energy while everyone slept. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 1–14; text lines 634–1142. References count literal newline-delimited lines in the supplied text.

## Overview

Pip arrives to help reopen the town cinema. The films are ready, yet idle workers hum through the night and a working phone cannot run the new app. A faster converter will not solve everything. Pip follows three clues: electricity used, hardware kept useful, and the carbon intensity of electricity when work runs. Operations and suitable platforms offer a starting point before a costly rewrite. The screening must still be useful, secure, and reliable. Pip starts measuring obvious waste; perfect carbon data can come later.

## Key ideas

### Three complementary levers

Pip finds three switches, but none says “make green.” Removing duplicate conversions reduces electricity for the same film: energy efficiency. Sharing workers and supporting older phones improves hardware use: hardware efficiency. Scheduling flexible exports using electricity emissions data is carbon awareness. Pip can combine these levers, but one improved number is not the whole footprint. The test follows both the useful result and every resource supporting it. (Source: pp. 1–3.)

### Start with operations

The converter finishes sooner. Pip cheers—until the dedicated worker keeps humming through an empty weekend. Faster code has left idle allocation untouched. Pip checks who owns the worker and whether it can restart, then investigates sharing or scheduling it. Existing operational tools and suitable platforms can turn an improvement into fewer active resources. Rewriting the engine can wait until Pip knows what work the audience actually needs. (Source: pp. 6–9.)

### Design for flexibility

“A film now, or a download by morning?” Pip asks the audience. Playback must stay immediate; the optional high-resolution copy can wait. That deadline creates room for demand shifting. Offering a lighter version during a high-carbon period would instead be demand shaping. Pip writes down quality, freshness, and delivery promises before adapting anything. Flexibility comes from product design, not from painting a green label on an unchanged workload. (Source: pp. 10–12.)

### Keep devices and software useful

A visitor’s older phone still works, but the cinema app demands a newer chip. Pip keeps a lightweight playback path and reserves extra effects for newer devices. Compatibility and security support help working equipment stay useful instead of pushing people toward replacement. Servers are only part of the story. Pip’s greener design must also remain usable, secure, resilient, and practical for its developers—or the audience and team will abandon it. (Source: pp. 11–14.)

## Misconceptions

### The fastest implementation must have the lowest footprint.

Speed can come from more machines or parallel work. Assess electricity supply, aggregate energy, and hardware consequences.

### Nothing can improve until perfect measurement exists.

An inventory can expose unused resources and unnecessary work. Start with transparent evidence and improve measurement over time.

## Decision practice — teaching extension

Pip has one week before the screening. Exports must finish by 08:00, but a dedicated worker stays on between jobs. Its converter also consumes heavy CPU. Pip can investigate restart and operating schedules or begin replacing the converter—not complete both this week.

### Make the worker restartable and scheduled

Targets idle operation and creates flexibility for later carbon-aware scheduling. Requires recovery checks and confidence that no hidden consumer needs it overnight. The team defines the deadline, verifies a restart, and records active resource hours. It tests whether shorter operation actually reduces resource allocation.

### Profile and improve the conversion

Can reduce recurring compute and improve export capacity. Idle operation remains unless the allocation or operating schedule changes. The team benchmarks a focused improvement. It later needs to rightsize or share the worker to realize the full operational opportunity.

Choose the experiment using observed waste, team capacity, and service constraints. Both approaches may be useful, but their benefits must be checked.

## Transfer to your work — teaching extension

Select a real service. Define its useful result, a source of avoidable resource use, and an observation that would tell you whether a change helped.

- Useful result and constraints: Who needs the result, and when must it be ready?
- First change and its lever: Will you reduce energy, extend hardware use, or respond to cleaner electricity?
- Evidence and revisit point: What will you compare, and which result would change your plan?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
