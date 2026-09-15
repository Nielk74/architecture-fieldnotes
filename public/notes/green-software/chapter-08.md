# Chapter 8: Greener Machine Learning, AI, and LLMs

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 125–134; text lines 4743–5076. References count literal newline-delimited lines in the supplied text.

## Overview

The machine learning chapter examines sustainability across planning, data collection, training, deployment, and maintenance. It argues that attention should follow the actual lifecycle cost of the application, rather than the most visible training run alone. Reusing suitable data or a pretrained model may avoid substantial new work. Smaller models and techniques such as pruning and quantization can reduce resource requirements, provided the useful quality of the result remains acceptable. Flexible training can be shifted toward cleaner electricity, while hardware fit and utilization also matter. In a production service, repeated inference may be a large share of total work. The book identifies this as a reason to measure the full lifecycle, with explicit uncertainty about available industry evidence.

## Key ideas

### Make sustainability a planning question

Before building a model pipeline, define the useful outcome, service expectations, and how impact will be measured. Choices about update frequency, response quality, and optional functionality affect every later phase. The chapter emphasizes making these decisions early because changes are cheaper before deployment. A glamorous training optimization may miss a larger product requirement that creates unnecessary repeated work. (Source: pp. 125–128.)

Teaching extension: A recommendation feature is evaluated against a simple baseline and a specified quality threshold before committing to a new training pipeline.

### Collect suitable data rather than all data

Gathering, cleaning, moving, and storing data all consume resources. Existing datasets can avoid rebuilding collection, but must fit the use case and support representative results. The chapter also raises consent and labor concerns. Sustainability does not excuse unsuitable data: poor quality can undermine accuracy and cause additional training or repeated processing downstream. (Source: pp. 128–130.)

Teaching extension: The team checks whether a permitted, representative existing dataset covers the needed cases before collecting another large archive.

### Reduce or reuse model work

Pruning removes model structure, quantization uses lower-precision representations, and transfer learning adapts existing learned capabilities. These methods can reduce training or inference requirements, but their practical effects depend on model, hardware, and accuracy needs. Reusing a suitable model can avoid new training; it does not make later inference or the original training footprint disappear. (Source: pp. 130–132.)

Teaching extension: A compact candidate must pass the same task evaluation as the larger model before the team compares energy and memory use.

### Training has scheduling and hardware choices

Training is often more delayable than interactive inference, making it a candidate for carbon-aware scheduling. Specialized processors may improve energy efficiency, while federated or edge approaches change where work and communication happen. These alternatives require attention to data distribution, hardware utilization, and convergence. No training topology is automatically greener for every workload. (Source: pp. 131–132.)

Teaching extension: A retraining run waits for an eligible cleaner interval, with a completion deadline and a measured allowance for checkpoints and retries.

### Inference can dominate repeated operation

An enterprise model may be trained occasionally but queried many times. Model size, serving allocation, unnecessary calls, and maintenance therefore deserve measurement alongside training. The chapter presents lifecycle hotspots as scenario-dependent and acknowledges limited public evidence. A research model used once and a heavily used production model can justify very different priorities. (Source: pp. 132–134.)

Teaching extension: A service compares the month’s training energy with all inference energy, including replicas kept ready during quiet periods.

## Misconceptions

### Training is always the largest ML footprint.

Repeated inference and serving infrastructure may dominate in production. Measure the actual lifecycle.

### A smaller model is acceptable regardless of its results.

Resource efficiency must preserve the defined task quality and applicable representation and fairness needs.

## Decision practice — teaching extension

Teaching extension. A media team refreshes recommendations frequently. It has a large general model and a smaller candidate adapted from an existing model. Both can be measured on representative inputs. The team wants to reduce serving resources without reducing useful recommendation quality or excluding less common user interests.

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
