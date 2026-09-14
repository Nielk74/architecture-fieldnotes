# Chapter 2: Creating AI Systems That Work Well for Everyone

Original learning notes. Source: text lines 746–1675 in the supplied book.

AI systems can reproduce stereotypes or deliver unequal quality even when aggregate accuracy looks strong. Fairness definitions ask different questions about outcomes, qualifications, and errors, so selecting a metric requires context rather than treating every measure as interchangeable. Bias can enter through assumptions, representation in training data, labeling, and deployment conditions. Paired prompts and counterfactual comparisons help expose problematic associations, but generated content also needs informed human judgment. The image-generation case illustrates an iterative, cross-disciplinary response to harmful outputs. Improving fairness means identifying specific disparities and testing mitigations, while acknowledging that a single score cannot settle every social trade-off.

## Fairness definitions

Fairness is not one interchangeable metric. Demographic parity asks whether groups receive an outcome at similar rates; equality of opportunity asks whether qualified people have comparable opportunities. A hiring-ad system can satisfy an overall exposure target while still excluding qualified people. Teams need to name the relevant fairness goal and examine errors across affected groups, rather than treating overall accuracy as evidence of fairness.

## Bias pathways

Bias can enter through assumptions, selection of training data, the data itself, and operation. A model may inherit stereotypes, represent some groups sparsely, or encounter inputs unlike its training set. Locating the pathway suggests a mitigation.

## Counterfactual tests

Counterfactual fairness changes a sensitive attribute while holding other prompt or situation details constant, then compares outputs. Placeholder prompts and paired examples make stereotyped associations visible in generative systems.

## Accuracy and harm

A system can be accurate on average while serving groups differently, and an output can be hard to label because captions or generated images have no single objectively correct answer. Fairness evaluation therefore combines metrics, human review, and context.

## Teaching extension

An advertising system delivers doctor job ads more often to men, although gender targeting is not an intended product goal. The team has limited time and must decide how to measure and change delivery without eliminating legitimate relevance.

Both choices are defensible under different constraints; the responsible decision states the accepted consequence and the evidence that could change it.

Choose an AI output and define the fairness goal that fits its use. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
