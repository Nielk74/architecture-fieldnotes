# Chapter 13: Where Do We Go from Here?

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 193–202; text lines 6982–7347. References count literal newline-delimited lines in the supplied text.

## Overview

The final chapter turns the book’s ideas into an action sequence. The authors challenge less mature organizations to seek large reductions through inventories, manual rightsizing, stopping unused workloads, and using suitable platforms. Their 50% challenge is an ambition for the settings they describe, not a guaranteed result for every system. Like-for-like comparisons should account for the useful work delivered, while cost remains a rough proxy. Later progress adds repeatable processes, automation, carbon-aware design, supplier evidence, and longer device support. The chapter argues that green software must also remain productive, secure, resilient, and useful. Its closing epilogue broadens the discussion to water, pollution, and material impacts that a carbon-focused course cannot fully cover.

## Key ideas

### Start with a bounded cleanup

The proposed first phase targets obvious operational waste: abandoned resources, oversized allocations, unnecessary operating hours, and unsuitable resource choices. The authors frame a large reduction challenge for organizations early in their journey. Actual results depend on the baseline. Manual, reviewed changes can be a sensible beginning before a team invests in more elaborate automation. (Source: pp. 193–197.)

Teaching extension: A team limits its first month to the export fleet and verifies unused allocations, owners, and restart procedures.

### Compare equivalent useful output

A falling bill is difficult to interpret when demand, season, or price changes. The chapter calls for like-for-like comparisons using a relevant output measure, such as orders or visitors. Cost is an initial proxy rather than a direct carbon instrument. Preserve resource evidence and total values too so the report does not hide growth or shifted work behind a favorable ratio. (Source: pp. 196–197.)

Teaching extension: A report compares resource hours per completed export and total monthly resource hours, and records changed prices separately.

### Build repeatable operations before deep tuning

The next phase turns cleanup into routine practice and designs workloads for shifting or shaping. Performance bottlenecks still deserve attention, especially for always-on work, but a code improvement has limited physical effect if the same underused resources remain allocated. The book’s ordering prioritizes operations and flexible design before expensive specialist tuning for ordinary teams. (Source: pp. 197–199.)

Teaching extension: After a manual sizing trial succeeds, ownership and review become recurring work before the team automates the safe policy.

### Demand useful green platforms

The authors argue that services and shared code can spread the cost of difficult optimization across many users. Supplier and community commitments need evidence and pressure from consumers. Developer productivity, security, resilience, performance, and sustainability must coexist for broad adoption. Choosing a platform is therefore a continuing relationship, not a one-time acceptance of marketing claims. (Source: pp. 198–202.)

Teaching extension: A platform review asks for resource-allocation behavior, emissions-method boundaries, and a demonstrated path for flexible workloads.

### Keep the wider impact visible

The book’s final outlook extends beyond carbon to water, pollution, and ecological damage from material extraction. These concerns may require additional expertise and evidence rather than conversion into a single carbon number. Its predictions about the future energy market and regulation are arguments from the publication period. A practical plan can act on current internal evidence without treating those predictions as established requirements. (Source: pp. 194–195, 202.)

Teaching extension: The roadmap includes a separate question about facility water use and hardware sourcing, with an owner to investigate beyond the carbon baseline.

## Misconceptions

### The 50% challenge guarantees our system can halve emissions.

The authors target early-maturity settings with substantial waste. Establish a baseline and report the achieved outcome rather than promising a universal percentage.

### Green hosting means the engineering work has no cost.

Resource bills may fall while implementation, testing, maintenance, and opportunity costs remain. Include them in the plan.

## Decision practice — teaching extension

Teaching extension. A media organization has no complete resource inventory and suspects several idle environments. It also wants a live carbon dashboard and a low-level rewrite of its busiest service. One small team is available for the initiative. The roadmap must show useful results without losing service reliability.

### Inventory, clean up, then standardize

Targets visible waste and builds evidence for repeatable operations. Begins with imperfect proxies and requires manual effort and stakeholder coordination. The team publishes a baseline, verified changes, and resource results before automating the successful practices. It uses the findings to prioritize deeper work.

### Build detailed telemetry and prototype a rewrite first

May clarify a difficult hotspot and prepare for fine-grained tuning. Can delay action on idle capacity and consumes specialist time. The team must justify why missing data or a confirmed hot path blocks progress. Dashboard completion and a faster prototype are not reported as reductions until resources change.

Sequence work according to the actual constraint. In the described early-maturity setting, a bounded cleanup gives a practical baseline for the next investment.

## Transfer to your work — teaching extension

Turn the course into a staged plan for one system. Start with the available evidence and make the first milestone concrete. Treat percentage goals as hypotheses to test.

- Baseline and first month: Which system, useful-work measure, inventory, and first reversible cleanup will you use?
- Next practices and owners: What will become repeatable, then automated, and who will own the work?
- Results and next decision: Which unit and total outcomes, service checks, costs, and wider-impact questions will guide the next phase?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
