# Chapter 6: Hardware Efficiency

Building Green Software — Anne Currie, Sarah Hsu, and Sara Bergman. First edition, March 2024.

Source: printed pp. 91–105; text lines 3601–4143. References count literal newline-delimited lines in the supplied text.

## Overview

Hardware brings emissions into a system before software starts running. Manufacturing, transport, and eventual disposal create a carbon burden that operational energy alone cannot describe. The chapter argues for longer device life and higher useful utilization, particularly for consumer devices whose manufacturing impact can be substantial. Software matters because compatibility and security support can determine whether working equipment remains useful. Cloud users influence allocation and supplier choices; owners of physical systems also control repair, reuse, shutdown, and replacement. Specialized hardware may save operational energy but can be hard to repurpose. E-waste broadens the concern to materials and people. The practical aim is to prevent unnecessary replacement while retaining secure, reliable service.

## Key ideas

### Embodied carbon is already spent

Manufacturing equipment creates emissions before use. Allocating those emissions over a longer useful life changes the footprint attributed to each year or task; it does not remove emissions already released. The practical benefit is obtaining more value from existing equipment and potentially delaying another manufacturing cycle. Utilization and longevity are therefore complementary hardware-efficiency levers. (Source: pp. 91–94, 98.)

Teaching extension: A fictional 1,200 kg embodied footprint allocated over four years is 300 kg per year; over six years it is 200. The original 1,200 kg is not erased.

### Compatibility affects replacement

Software-defined obsolescence occurs when support ends or software requirements exclude otherwise working equipment. Backward-compatible paths can keep core functionality accessible on older devices. Security support matters too: longevity is not an instruction to leave people with unpatched systems. The book asks application developers and manufacturers to support useful devices for longer, with explicit maintenance and testing effort. (Source: pp. 94–96.)

Teaching extension: An optional visual effect gets a fallback so a supported older phone can still perform the main task.

### Cloud and owned hardware offer different controls

Cloud customers usually delegate asset management but still influence capacity demand and resource choice. Owners of physical infrastructure can directly change replacement timing, repair practices, and off-peak shutdown. Both should avoid unused allocation. Reusing equipment and reducing resource requirements can reduce pressure for new hardware, while actual energy and reliability needs still affect replacement decisions. (Source: pp. 96–99.)

Teaching extension: A lab reuses a supported server after verifying capacity and recovery, instead of replacing it solely because an accounting interval ended.

### Specialization has a lifetime trade-off

A specialized processor can perform a known task efficiently. Its benefit depends on utilization, workload fit, skills, and how long it remains useful. General-purpose equipment is often easier to repurpose when the problem changes. A short-lived specialized device may fail to justify its manufacturing burden even if one benchmark shows excellent energy efficiency. (Source: pp. 99–101.)

Teaching extension: A media accelerator is evaluated against a multi-year demand forecast and its reuse options, not only its best per-frame benchmark.

### Reuse and repair address e-waste

Discarded electronics represent wasted material value and can harm people and ecosystems when handled badly. Software teams can reduce avoidable disposal by supporting older hardware and considering secondhand equipment. The chapter also discusses manufacturer targets and repair initiatives from its period. A commitment is not evidence of delivery; supplier questions should seek support, repair, and lifecycle evidence. (Source: pp. 101–105.)

Teaching extension: Procurement asks about spare parts and supported lifetime, while the app team tests core flows on the oldest supported device.

## Misconceptions

### Extending depreciation removes past manufacturing emissions.

Accounting allocation changes; historical emissions remain. The physical opportunity is additional useful life and avoided replacement.

### The newest, most efficient chip is always the greenest choice.

Replacement adds manufacturing impact. Compare useful life, workload fit, utilization, and operational energy.

## Decision practice — teaching extension

Teaching extension. A media app plans an enhanced preview feature that needs hardware acceleration absent from older, still security-supported devices. The core playback flow works on those devices. The team must choose whether to maintain a simpler preview path or raise its hardware minimum. Testing capacity is limited.

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
