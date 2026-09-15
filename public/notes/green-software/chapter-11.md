# Chapter 11: Co-Benefits

*Pip’s adventure: Three visitors, one abandoned service. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 167–179; text lines 6151–6578. References count literal newline-delimited lines in the supplied text.

## Overview

Security, finance, and the projection crew bring Pip different requests. An abandoned service connects them: it costs money, consumes resources, and exposes an endpoint. Sustainability can share mechanisms with cost control, reliability, performance, security, and data management. Tested recovery and suitable compute or storage may help too. But a discount is not a carbon reduction, and backups still protect real needs. Pip builds a proposal naming who benefits, what changes physically, what effort it takes, and which constraints remain. Sustainability becomes part of ordinary engineering decisions.

## Key ideas

### Cost and carbon can share a cause

Finance offers Pip a discount; security points to an idle preview service. Both may lower a bill, but only releasing unused allocation directly changes resource demand. Rightsizing and suitable shared platforms can join cost and carbon goals through the same mechanism. FinOps provides an existing collaboration pattern across technology, finance, and business. Pip brings resource-hour evidence to that conversation instead of assuming every cheaper tariff means less electricity or hardware. (Source: pp. 167–169.)

### Resilience can reduce idle redundancy

A standby server waits forever for an outage. Pip asks whether tested recovery onto fresh capacity could reduce that idle reservation. Reliability concerns consistent useful service; resilience concerns recovering from disruption. Automation and recovery evidence can replace unexamined assumptions—not every backup or replica. Before reducing anything, Pip tests recovery time, data protection, and correlated failures. An elegant diagram is no substitute for knowing the cinema can actually recover. (Source: pp. 170–172.)

### Performance should fit the task

Pip puts every old film record on the fastest storage, then discovers most are rarely opened. The audience agrees to a retrieval delay for historical material while current metadata stays quick. Suitable compute and storage can improve efficiency and performance together, but “maximum performance” is not every user’s requirement. Pip checks resource and lifecycle costs against the actual task instead of buying speed that nobody needs. (Source: pp. 172–173.)

### Security can eliminate wasteful work

An abandoned preview endpoint still needs patching and receives unwanted traffic. Pip verifies it is unused before retiring it, removing both resource demand and exposure. Preventing abusive requests can also avoid work without legitimate value. Necessary checks and encryption still perform useful protection. The security co-benefit is reducing waste through good security—not disabling safeguards to make a CPU chart look smaller. (Source: pp. 174–175.)

### Data design connects multiple benefits

Two cinema pipeline stages keep converting the same records back and forth. Pip brings the teams together around a compatible representation, preserving needed fields while removing repeated work. Suitable models, clean inputs, and deliberate retention can improve correctness, performance, and sustainability. Product and data teams must decide what remains useful and for how long. The gain comes from avoiding unnecessary transformations and storage, not declaring every byte expendable. (Source: pp. 175–179.)

## Misconceptions

### Every cost cut is a carbon cut.

Commercial pricing changes can lower bills with identical resource use. Identify the physical mechanism.

### Resilience means backups are unnecessary.

Recovery objectives and data protection remain essential. Replace assumptions with tested evidence before reducing redundancy.

## Decision practice — teaching extension

Pip maintains an occasional report endpoint. Security wants less exposure, finance wants lower cost, and visitors still need historical reports. Pip can retire it with an archive workflow or consolidate it into a maintained service. Neither choice may discard required records.

### Retire the endpoint and provide archived reports

Removes an exposed service and its recurring allocation. Historical retrieval becomes slower and needs a documented owner. Users retain the required information with an agreed retrieval process. The team checks that the archived alternative is usable before closing the endpoint.

### Consolidate into the maintained platform

Keeps quicker retrieval and reduces a separate maintenance boundary. Retains active processing and can add complexity to the receiving service. The platform takes ownership of the report capability and removes duplicate resources. The team measures whether consolidation reduced total work.

A convincing proposal connects each stakeholder’s need to a concrete mechanism and acknowledges the new responsibility or delay.

## Transfer to your work — teaching extension

Select a change with a sustainability benefit and at least one benefit another team cares about. Explain the shared cause rather than merely listing desirable outcomes.

- Affected people and requirements: Who depends on this behavior, including occasional users?
- Mechanism and co-benefits: How does one concrete change reduce resources and improve cost, security, or recovery?
- Cost, ownership, and evidence: What new burden appears, who owns it, and what will verify the result?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
