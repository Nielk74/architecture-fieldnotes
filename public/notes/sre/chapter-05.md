# Chapter 5: Eliminating Toil

Distinguish recurring service work from improvements that last

Toil is recurring work that keeps a production service in its present state and tends to grow with that service. Manual execution, repetition, automation potential, interrupt-driven timing, and lack of lasting value help identify it. The category does not mean unpleasant work: a difficult cleanup may be engineering, while a satisfying daily repair can still be toil. Administrative overhead is a separate category. Measure human effort, including time spent invoking scripts, and look at individual workloads because team averages hide overload. The chapter protects at least half of SRE time for engineering over a meaningful period. Some toil remains unavoidable, but unchecked repetition consumes the capacity needed to improve reliability, damages careers, and makes staffing rise alongside service growth.

## Recognizing toil

Toil is production work that tends to be repetitive, manual, tactical, automatable, and without enduring improvement. Its volume often increases with users, traffic, or service size. These characteristics are guides rather than a rigid checklist. The key question is whether completing the task changes the future operating burden or merely restores the same state until the next occurrence.

## Engineering and overhead are different categories

Engineering creates a lasting improvement through design and judgment; it may involve code, configuration, documentation, or a difficult cleanup. Overhead covers organizational work such as meetings and hiring that is not directly operating a production service. Classifying work by whether it is enjoyable or whether it contains code misses these distinctions and produces misleading estimates of engineering capacity.

## Measure the operator’s effort

A script does not eliminate toil if a person must repeatedly start it and inspect its result. Count hands-on effort rather than the script’s unattended runtime. On-call coverage creates a baseline commitment, and interruptions create additional work. Examine distributions across engineers and over time: a healthy team average can conceal one person spending nearly every day on repetitive service work.

## Protect the capacity to reduce future work

Google’s target reserves at least half of SRE time for engineering when assessed over a substantial period. This prevents reactive work from crowding out the improvements that would reduce it. Brief spikes can happen, but persistent overload needs changes in work allocation and priorities. Eliminating recurring work lets the service grow without adding equivalent operational effort or exhausting its engineers.

## Apply it

List three production tasks from a typical week. Classify each as toil or engineering using repetition and enduring value, then choose one recurring cost to remove.

Source: *Site Reliability Engineering*, chapter 5, text lines 2266–2451. This note is an original synthesis; the exercise is a teaching extension.
