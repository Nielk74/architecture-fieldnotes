# Chapter 2: Creating AI Systems That Work Well for Everyone

*Pip’s adventure: The job advert takes a biased route. Fictional teaching story; concepts follow the cited source.*

Original learning notes. Source: text lines 746–1675 in the supplied book.

The town’s hiring system looks accurate, but Pip discovers unequal delivery behind the aggregate score. Fairness definitions examine different relationships among outcomes, qualifications, and errors; context determines which question matters. Bias can enter through assumptions, representation, labels, or deployment conditions. Pip uses paired prompts and counterfactual comparisons to expose associations, then asks informed reviewers to interpret them. The book’s image-generation case shows iterative, cross-disciplinary work. Identifying a specific disparity and testing a mitigation is more useful than treating one reassuring number as a complete answer.

## Fairness definitions

The hiring dashboard tells Pip that advertisement exposure is balanced. A reviewer asks whether qualified applicants receive comparable opportunities. Those are different fairness questions: demographic parity compares outcome rates across groups; equality of opportunity concerns qualified people. An overall exposure target can coexist with exclusion. Pip names the relevant goal, records which outcome each measure addresses, and examines group-specific errors. Average accuracy cannot answer the fairness question by itself.

## Bias pathways

Pip’s speech tool understands one accent less well. Changing a threshold is tempting, but the team first inspects the pathway: assumptions, selected recordings, labels, the data itself, and operating conditions. The accent is scarcely represented in training. Models can inherit stereotypes or encounter inputs unlike those learned from. Locating the source of a disparity helps choose a mitigation instead of adjusting a convenient control and hoping.

## Counterfactual tests

Pip places two matching job-description prompts side by side and changes only a gender cue. The suggested roles differ. Paired examples and placeholder prompts make stereotyped associations visible by holding details constant. This counterfactual test supplies a clue to investigate; it does not certify aspects of the system as fair. Pip asks reviewers to examine what changed and why it matters.

## Accuracy and harm

The captioning model earns an overall score but keeps misidentifying assistive devices. Pip invites affected users to examine that concentrated harm. Aggregate accuracy can hide unequal quality, and generated captions or images may lack one objectively correct answer. Fairness evaluation therefore needs metrics, informed human judgment, and context together. The team tests a specific mitigation rather than asking the average score to speak for every person.

## Teaching extension

Pip finds doctor job ads reaching men more often, despite no intended gender targeting. The town team has limited time to investigate delivery while preserving legitimate relevance.

Pip names the fairness goal and its trade-offs before changing delivery. An improved aggregate score cannot substitute for checking affected groups.

Choose an AI output and define the fairness goal that fits its use. These practice scenarios are invented to apply the chapter; their consequences are not reported measurements.
