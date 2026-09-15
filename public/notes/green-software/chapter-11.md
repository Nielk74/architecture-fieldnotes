# Chapter 11: Co-Benefits

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 167–179; text lines 6151–6578. References count literal newline-delimited lines in the supplied text.

## Overview

Sustainability often shares mechanisms with cost control, reliability, performance, security, and data management. This chapter explains these co-benefits as a way to make change practical when teams face competing priorities. Removing idle resources can reduce both spending and exposure; tested recovery can reduce dependence on permanently reserved capacity; suitable compute and storage can improve efficiency. Better data handling can avoid repeated transformations and unnecessary retention. These relationships are opportunities rather than universal equivalences. Cost can change without carbon changing, and reliability still has real engineering requirements. The authors encourage integrating sustainability into existing product and operational decisions, with a case that names the benefits, the implementation effort, and the constraints that remain.

## Key ideas

### Cost and carbon can share a cause

Rightsizing, retiring unused services, and using suitable shared platforms can reduce both cost and resource demand. FinOps connects technology, finance, and business around spending decisions, offering an existing collaboration pattern. The relationship is conditional: a cheaper tariff or discount does not necessarily change electricity or hardware. Explain the resource mechanism behind the proposed savings. (Source: pp. 167–169.)

Teaching extension: Finance and engineering inspect an idle service together, distinguishing reduced resource hours from a new contractual discount.

### Resilience can reduce idle redundancy

Reliability concerns consistent useful service; resilience concerns recovering from disruption. The chapter favors automation, recovery, and operational awareness over unexamined reliance on idle duplicate systems. This does not mean removing every backup or replica. Recovery time, data protection, correlated failure, and test results determine how much reserved capacity a service actually needs. (Source: pp. 170–172.)

Teaching extension: A team tests recovery onto fresh capacity before deciding whether a permanently idle standby can be reduced.

### Performance should fit the task

A suitable compute or storage option can improve performance and efficiency together. The fastest possible response is not always the user’s requirement, and infrequently accessed retained data may not need the same storage as active records. Fit matters more than a generic maximum-performance label. Include the resource and lifecycle costs associated with the chosen arrangement. (Source: pp. 172–173.)

Teaching extension: Current media metadata remains quickly accessible, while rarely requested historical material uses an archive with an accepted retrieval delay.

### Security can eliminate wasteful work

Abandoned services expand the attack surface, and malicious traffic can consume resources without legitimate value. Removing unused systems and preventing abusive requests can therefore support sustainability and security together. Necessary protections also perform work; the chapter’s argument is to reduce waste through good security, not to disable checks or encryption for a superficially smaller compute number. (Source: pp. 174–175.)

Teaching extension: A retired preview service no longer needs patching or background resources, and its unused public endpoint disappears.

### Data design connects multiple benefits

Unnecessary storage and repeated transformations consume resources and create operational complexity. Suitable data models, deliberate retention, and clean inputs can improve correctness, performance, and sustainability. Product and data teams must decide what information is useful and how long it is needed. The chapter uses these shared concerns to argue for sustainability as a regular design consideration. (Source: pp. 175–179.)

Teaching extension: Two pipeline stages agree on a compatible representation, removing a repeated conversion while retaining needed fields.

## Misconceptions

### Every cost cut is a carbon cut.

Commercial pricing changes can lower bills with identical resource use. Identify the physical mechanism.

### Resilience means backups are unnecessary.

Recovery objectives and data protection remain essential. Replace assumptions with tested evidence before reducing redundancy.

## Decision practice — teaching extension

Teaching extension. A team maintains a rarely used report endpoint. Security wants fewer exposed systems, finance wants lower recurring cost, and users occasionally need historical reports. The team can retire the endpoint and provide an archive workflow or consolidate it into an actively maintained service. Neither choice can discard required records.

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
