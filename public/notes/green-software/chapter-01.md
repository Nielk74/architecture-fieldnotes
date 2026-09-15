# Chapter 1: Introduction to Green Software

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 1–14; text lines 634–1142. References count literal newline-delimited lines in the supplied text.

## Overview

Green software starts with a physical question: what resources does a useful result require, and what emissions follow? The authors distinguish energy efficiency, hardware efficiency, and carbon awareness. Reducing processing is one lever; sharing machines, keeping devices useful, and moving flexible work to cleaner electricity are others. The introduction previews a practical route through these decisions, beginning with operations and suitable platforms before expensive custom optimization. It also connects sustainability to developer productivity, cost, reliability, and security. The goal is software that meets real needs while reducing its impact. Measurement guides that work, but a lack of perfect carbon data does not prevent an initial investigation of obvious waste.

## Key ideas

### Three complementary levers

Energy efficiency reduces electricity for useful work. Hardware efficiency improves equipment utilization and longevity. Carbon awareness changes when, where, or how much work runs in response to electricity emissions. These approaches can reinforce one another, but improving one does not establish that the complete system has become greener. Follow both the useful result and the resources supporting it. (Source: pp. 1–3.)

Teaching extension: A media service removes duplicate conversions, shares workers, and schedules flexible exports using grid data. Each change addresses a different part of its footprint.

### Start with operations

The introduction emphasizes avoiding idle and oversized resources because improvements can often use existing operational tools. A faster program on an unchanged, mostly idle server may leave much of the footprint in place. Platform choices and workload flexibility help convert software improvements into fewer active resources while retaining the service that users actually need. (Source: pp. 6–9.)

Teaching extension: An unused weekend worker prompts an ownership and restart check before the team considers rewriting its conversion engine.

### Design for flexibility

Separating urgent interactions from delayable work makes demand shifting possible. Demand shaping changes the service offered when electricity is more carbon intensive. Both require product decisions: a deadline, quality level, or freshness expectation must be explicit before a system can adapt. Flexibility comes from design rather than a green label attached to an unchanged workload. (Source: pp. 10–12.)

Teaching extension: Playback stays immediate, while an optional high-resolution download can finish by morning. Users can see when it will be ready.

### Keep devices and software useful

Dropping compatibility or security support can encourage replacement of working equipment. The introduction therefore treats device longevity as a software concern alongside server electricity. Its broader vision retains usability, security, resilience, and developer productivity. A sustainable design must still serve people well enough to remain useful and adopted, with attention to both clients and infrastructure. (Source: pp. 11–14.)

Teaching extension: The app keeps a lightweight playback path on supported older phones while offering additional effects on newer hardware.

## Misconceptions

### The fastest implementation must have the lowest footprint.

Speed can come from more machines or parallel work. Assess electricity supply, aggregate energy, and hardware consequences.

### Nothing can improve until perfect measurement exists.

An inventory can expose unused resources and unnecessary work. Start with transparent evidence and improve measurement over time.

## Decision practice — teaching extension

Teaching extension. A media team has one week available. Its export must finish by 08:00 but usually finishes much earlier. The dedicated worker stays on between jobs. There is also a CPU-heavy conversion function. The team can investigate operating schedules or begin replacing that function, but cannot complete both this week.

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
