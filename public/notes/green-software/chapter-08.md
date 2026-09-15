# Chapter 8: Greener Machine Learning, AI, and LLMs

*Pip’s adventure: The recommendation machine keeps waking up. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 125–134; text lines 4743–5076. References count literal newline-delimited lines in the supplied text.

## Overview

Pip trains a recommendation model once, then hears it answering requests all month. The visible training run is not necessarily the largest lifecycle cost. Planning, data collection, training, serving, and maintenance all matter. Suitable existing data or models can avoid new work; pruning, quantization, and smaller models need quality checks. Flexible training may use cleaner intervals and suitable hardware. Pip measures repeated inference and idle serving capacity too, comparing useful outcomes rather than model glamour. The book’s limited industry evidence makes lifecycle hotspots a question to investigate, not a universal ranking.

## Key ideas

### Make sustainability a planning question

Pip wants a recommendation model before anyone has defined a good recommendation. A teammate asks what the feature must actually do. Pip writes a useful outcome, quality threshold, update frequency, and service expectations, then compares a simple baseline. Those product choices shape every later phase. Considering sustainability during planning is cheaper than repairing a deployed requirement that creates unnecessary work. A spectacular training optimization may miss the larger source of demand. (Source: pp. 125–128.)

### Collect suitable data rather than all data

A cart of new viewing data arrives at Pip’s workshop. Must the cinema collect it all again? An existing dataset might avoid gathering, cleaning, moving, and storing another archive—but only if it is permitted, representative, and suitable. Pip checks consent and labor concerns alongside coverage. Sustainability cannot excuse poor data: unsuitable inputs can harm results and trigger more training or processing later. (Source: pp. 128–130.)

### Reduce or reuse model work

The larger model fills Pip’s serving machine. A compact candidate might fit better: pruning removes structure, quantization reduces numerical precision, and transfer learning adapts existing learned capabilities. Pip tests the same task quality on the intended hardware before comparing memory and energy. A reused model may avoid new training; it does not erase its original training footprint or later inference. Smaller is an experiment, not permission to accept bad results. (Source: pp. 130–132.)

### Training has scheduling and hardware choices

Pip’s retraining run can wait; a visitor’s live recommendation usually cannot. Delayable training may fit a cleaner electricity interval, with a deadline and measured checkpoints or retries. Specialized processors can improve efficiency when the workload fits. Federated and edge approaches move work and communication rather than making them disappear. Pip checks data distribution, utilization, and convergence: no training topology is automatically greener for every job. (Source: pp. 131–132.)

### Inference can dominate repeated operation

The training job runs monthly; the recommendation service wakes millions of times. Pip totals inference energy and replicas kept ready during quiet periods alongside training and maintenance. Model size, unnecessary calls, serving allocation, and usage frequency can change the priority. The book acknowledges limited public evidence: a one-use research model differs from a busy production service. Pip measures the actual lifecycle instead of assuming the loudest training run dominates it. (Source: pp. 132–134.)

## Misconceptions

### Training is always the largest ML footprint.

Repeated inference and serving infrastructure may dominate in production. Measure the actual lifecycle.

### A smaller model is acceptable regardless of its results.

Resource efficiency must preserve the defined task quality and applicable representation and fairness needs.

## Decision practice — teaching extension

Pip compares the cinema’s large recommendation model with a smaller adapted candidate. Recommendations refresh frequently. Both can be tested on representative inputs. Pip wants fewer serving resources without losing useful quality or excluding less common interests; model choice and unnecessary calls offer different experiments.

### Evaluate and adapt the compact model

May reduce serving memory and repeated inference work. Requires a careful quality comparison and may need further adaptation. The team checks common and less common cases before accepting the smaller model. It then resizes serving capacity and measures real request volume.

### Retain the larger model and reduce unnecessary calls

Preserves an established quality baseline while targeting repeated work. Keeps a larger serving footprint and requires caching or freshness decisions. The service avoids redundant requests where results remain valid, then measures whether the reduction permits fewer active replicas.

The useful outcome and measured lifecycle determine the intervention. Neither model size nor reuse alone establishes the full reduction.

## Transfer to your work — teaching extension

Choose an ML feature and compare two ways of delivering it. Include useful quality and recurring operation, not just a one-time training score.

- Task and evaluation threshold: What result must the feature deliver, including less common cases?
- Data, training, and model choice: What can be reused, reduced, or scheduled, and what must be validated?
- Serving and total impact: How often will inference run, and what active hardware and energy will you compare?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
