# Chapter 6: Hardware Efficiency

*Pip’s adventure: The perfectly good phone. Fictional teaching story; concepts follow the cited source.*

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 91–105; text lines 3601–4143. References count literal newline-delimited lines in the supplied text.

## Overview

A working phone cannot enter Pip’s new cinema app. The preview wants a newer chip, but ordinary playback still works. Manufacturing, transport, and disposal mean replacement has consequences beyond runtime electricity. Pip investigates compatibility, security support, repair, reuse, and useful utilization before asking for new hardware. Cloud customers and physical owners have different controls; specialized processors also trade efficient execution against fit and repurposing. E-waste affects materials and people. The goal is longer useful life without abandoning secure, reliable service—not changing an accounting lifetime and pretending past emissions vanished.

## Key ideas

### Embodied carbon is already spent

Pip finds an old device’s manufacturing footprint in the ledger. Extending its useful life does not rub out those emissions. In this fictional allocation, 1,200 kg over four years is 300 kg per year; over six, 200 kg. The original 1,200 kg remains. What changes physically is the useful service obtained and, potentially, the need for another manufacturing cycle. Pip combines longer life with higher useful utilization instead of confusing allocation with reversal. (Source: pp. 91–94, 98.)

### Compatibility affects replacement

A visitor stops Pip at the cinema door. “Yesterday, my phone worked.” The new preview needs a chip the phone lacks; ordinary playback still works. Pip almost recommends an upgrade, then pauses: software is retiring a working device. That is software-defined obsolescence. Pip builds a simpler preview and keeps security updates and device tests on the maintenance list. Less sparkle, longer useful life—but continued support is part of the bargain. (Source: pp. 94–96.)

### Cloud and owned hardware offer different controls

The cinema’s owned server reaches its accounting replacement date. Pip checks support, capacity, energy, reliability, and recovery instead of ordering automatically. Owners can choose repair, reuse, replacement timing, and off-peak shutdown directly. Cloud customers usually delegate asset management, but their allocation and resource choices still influence demand. Both can avoid unused capacity and reduce resource requirements. Reuse is an opportunity to investigate, not an instruction to ignore failing or unsupported equipment. (Source: pp. 96–99.)

### Specialization has a lifetime trade-off

A shiny media accelerator wins Pip’s per-frame benchmark. Will it keep winning after the festival? Specialized hardware can use less operational energy for a suitable task, but its manufacturing burden, utilization, required expertise, and useful lifetime still count. A general-purpose machine may find another job when demand changes. Pip checks sustained workload and reuse options before choosing: a brilliant benchmark on a soon-discarded device may be a poor lifetime bargain. (Source: pp. 99–101.)

### Reuse and repair address e-waste

Pip finds working devices beside the disposal bin. Their materials still have value, and badly handled e-waste can harm people and ecosystems. Supporting older hardware, repairing equipment, and considering secondhand devices can prevent avoidable disposal. Pip asks suppliers for spare parts, support lifetime, and lifecycle evidence while the app team tests its oldest supported phone. Book-era manufacturer targets and repair initiatives are commitments to examine, not proof that delivery happened. (Source: pp. 101–105.)

## Misconceptions

### Extending depreciation removes past manufacturing emissions.

Accounting allocation changes; historical emissions remain. The physical opportunity is additional useful life and avoided replacement.

### The newest, most efficient chip is always the greenest choice.

Replacement adds manufacturing impact. Compare useful life, workload fit, utilization, and operational energy.

## Decision practice — teaching extension

Pip’s cinema app adds an enhanced preview requiring acceleration that older, security-supported phones lack. Playback still works on them. Keeping a simpler preview adds testing and maintenance; raising the hardware minimum simplifies development but excludes working devices. Pip’s team has limited testing capacity.

### Keep a compatible core path

Helps people continue using functioning equipment. Adds device testing and a second rendering path to maintain. The release defines which visual features differ while preserving playback. Compatibility failures become visible product regressions rather than silent pressure to upgrade.

### Require newer hardware for the enhanced experience

Simplifies the rendering implementation and its test matrix. May exclude working devices and encourage replacements. The team must justify whether the enhancement is essential and document who loses access. A faster preview alone does not settle the lifecycle trade-off.

Support decisions belong in hardware impact assessments. Technical convenience and new-device energy efficiency do not capture the entire replacement consequence.

## Transfer to your work — teaching extension

Choose a device class your software affects. Explain the core task, support boundary, and change that would prevent avoidable replacement.

- Devices and essential use: Which older supported devices still meet the main user need?
- Compatibility and maintenance: What fallback, testing, repair, or security support keeps them useful?
- Replacement decision evidence: What energy, failure, support, and manufacturing information would justify replacement?

## Source and teaching boundary

These notes paraphrase the supplied 2024 book. Examples, decision cases, quizzes, and animated sequences are original teaching extensions. Illustrative numbers are assumptions, not measured savings. Product capabilities, supplier commitments, predictions, and the maturity framework are described in their book-era context; this course does not establish their current status or provide regulatory guidance.
