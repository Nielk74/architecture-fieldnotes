# Chapter 7: Networking

*Pip’s adventure: The film takes the long way round. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 107–123; text lines 4144–4742. References count literal newline-delimited lines in the supplied text.

## Overview

Pip’s film travels through more than wires. Origin servers, caches, access networks, and viewers’ devices all do work. Compression and caching can reduce transfers while adding compute or storage, so Pip follows the whole delivery path. Changing global internet routing is not a quick local fix; applications can reduce unnecessary traffic and use established delivery controls. The book’s pandemic examples show preparation ahead of demand and lighter optional quality. Pip borrows that flexibility without assuming a cache or a smaller download is automatically carbon aware.

## Key ideas

### The internet includes more than wires

Pip follows a film from the origin to a viewer: backbone, metro, and last-mile links carry it through independently operated networks. Caches, compression, compute, and storage help along the way. Counting downloaded bytes alone misses much of the system. Even a satellite connection brings access benefits, equipment lifetime, infrastructure, and wider consequences. Pip draws the whole delivery path before deciding which resource to change. (Source: pp. 107–115.)

### Compression trades one resource for another

“Make the file smaller,” says Pip, reaching for the encoder again. But this video is already compressed. Extra encoding and decoding could consume more work for little transfer reduction. Pip compares actual compressibility, processor costs, network conditions, and hardware support across the full delivery path. A smaller payload is useful evidence about bytes—not proof of lower carbon. The chosen rendition must still meet the viewer’s need. (Source: pp. 110–111.)

### Application decisions are a practical lever

Pip sees a long network route and imagines rewriting the internet’s directions. Those directions cross autonomous systems and reflect commercial relationships and routing policy; the book warns that carbon-aware changes to BGP are complex and risky. Pip controls the cinema app more directly. Conditional updates can replace repeated full downloads, and established delivery controls can reduce unnecessary traffic. Moving application work is different from changing public-internet routing. (Source: pp. 115–118.)

### Caching can shift work ahead of demand

The premiere crowd has not arrived, but Pip can place likely popular film versions in nearby caches. Preparation happens before demand while viewers still choose when to watch. That flexibility reduces repeated long-distance transfers, yet stored copies and unused prefetches cost resources. Pip measures which copies actually serve viewers. A CDN creates room to shift work; it needs an electricity signal influencing that work before Pip can call it carbon aware. (Source: pp. 118–120.)

### Graceful degradation preserves essentials

A visitor’s connection falters. Pip lowers optional video detail while keeping clear audio and captions. Graceful degradation preserves the essential experience under constraint, as the book’s pandemic examples illustrate. The controls must already be designed and understood. To use this flexibility for electricity, Pip needs a relevant carbon or power signal and an agreed minimum service. Randomly making the picture worse does not establish a sustainability benefit. (Source: pp. 120–123.)

## Misconceptions

### Compressing every payload always saves energy.

Compression adds compute; evaluate actual size reduction and encoding and decoding costs.

### A CDN is automatically carbon aware.

Caching provides shifting capability. Carbon awareness additionally requires an electricity signal that influences operation.

## Decision practice — teaching extension

Pip expects a crowd for a new film. Popular renditions could wait in regional caches or be transformed on demand. Small screens and large displays need different versions. The popularity forecast may be wrong; preparing every format everywhere could leave unused copies and wasted work.

### Precompute and stage likely renditions

Reduces repeated origin work and smooths the peak transfer load. Uses storage and preparation that may be wasted if demand differs from the forecast. The service places likely popular versions and measures cache use. It keeps less common formats on demand until their demand justifies staging.

### Generate and transfer on demand

Avoids speculative renditions that nobody requests. Concentrates processing at request time and may repeat work during a surge. The team measures latency and repeated conversions, then considers selective caching where observed reuse supports the extra stored copy.

Demand predictability and reuse determine the best balance. A bandwidth improvement is evidence about delivery, not by itself a complete carbon result.

## Transfer to your work — teaching extension

Select a large or frequently requested asset. Compare immediate generation with selective preprocessing and caching, then define an essential service mode.

- Demand and delivery path: Who requests this asset, from where, and how predictable is reuse?
- Transfer, compute, and storage trade-off: What work is saved or added by caching or compression?
- Fallback and evidence: What quality is essential, and how will unused prefetches and repeated work be tracked?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
