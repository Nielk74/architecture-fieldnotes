# Chapter 7: Networking

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 107–123; text lines 4144–4742. References count literal newline-delimited lines in the supplied text.

## Overview

Networking offers lessons in adapting to a variable resource. The chapter describes the internet as wires, compute, and storage connected through independently operated networks. Lower layers have strong efficiency incentives, while applications still control how much data they request, process, cache, and send. Compression and caching trade computation or storage for reduced transfer, so they require a whole-system comparison. The authors caution against treating changes to internet routing as an easy sustainability project. Their pandemic examples show existing application techniques handling demand: assets were staged near users, and optional quality was reduced while core service continued. These mechanisms suggest how software can adapt to changing electricity conditions without assuming unlimited resources.

## Key ideas

### The internet includes more than wires

Backbone, metro, and last-mile connections carry traffic at different scales. Compute and storage also support networking through caching, compression, and content delivery. The best fit depends on the job and access conditions. The chapter’s discussion of satellites adds a reminder that access benefits, equipment lifetime, infrastructure, and wider consequences cannot be reduced to a single transmission statistic. (Source: pp. 107–115.)

Teaching extension: A delivery assessment includes the origin, cache, access network, and user device rather than counting only downloaded bytes.

### Compression trades one resource for another

Compressing a payload can reduce traffic while consuming processor work to encode and decode it. Whether that helps depends on compressibility, workload, network conditions, and hardware support. An already compressed asset may offer little further reduction. The application should compare the complete delivery path and user need, not assume that every smaller payload is a lower-carbon one. (Source: pp. 110–111.)

Teaching extension: A service compares recompressing video with sending an existing rendition, including encoder work and actual transfer savings.

### Application decisions are a practical lever

The internet connects autonomous systems whose routing reflects policy and commercial relationships. The authors argue that introducing carbon-based behavior into BGP is complex and risky. Applications can act more directly by reducing unnecessary transfers and adjusting delivery. This preserves the distinction between moving a workload at the application level and changing how the public internet routes packets. (Source: pp. 115–118.)

Teaching extension: A product team reduces repeated full downloads using conditional updates rather than proposing a new global routing policy.

### Caching can shift work ahead of demand

A content delivery network stores assets near users and can move them before peak demand. This decouples preparation from the request itself and reduces repeated long-distance transfers. Cached copies require storage, and unused prefetches can waste work. The book uses this mechanism as an example of flexibility, not proof that all caching automatically responds to carbon intensity. (Source: pp. 118–120.)

Teaching extension: A scheduled release stages the expected popular assets near its audience while monitoring how many prefetched copies are actually used.

### Graceful degradation preserves essentials

A service can reduce optional quality when resources are constrained, as video calls preserve audio while reducing video detail. The pandemic examples show the value of having such controls already designed and understood. Applying that flexibility to electricity requires a relevant carbon or power signal and agreed minimum functionality; merely degrading randomly does not establish a sustainability benefit. (Source: pp. 120–123.)

Teaching extension: A learning video lowers optional resolution under a constrained delivery mode while captions and clear audio remain available.

## Misconceptions

### Compressing every payload always saves energy.

Compression adds compute; evaluate actual size reduction and encoding and decoding costs.

### A CDN is automatically carbon aware.

Caching provides shifting capability. Carbon awareness additionally requires an electricity signal that influences operation.

## Decision practice — teaching extension

Teaching extension. A service expects many viewers for a new video. It can stage selected renditions in regional caches or fetch and transform them on demand. Viewers use a mix of small screens and large displays. The popularity forecast is imperfect, so precomputing every format everywhere may waste work.

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
