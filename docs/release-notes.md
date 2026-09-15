v0.5.1 brings Pip’s level-up celebration into the app. Earn a new course or overall form and Pip leaps, transforms, and lands in a burst of stars. The screen keeps just the new level, form name, and “Let’s go!” button.

This release fixes the Android test timing race that blocked v0.5.0. The native test now records animation frames inside the WebView before checking them, so a busy emulator can verify real movement even after the celebration has finished.

All eight courses use the same celebration, including the original Fundamentals Chapter 1. When a mission levels up both companions, their celebrations appear one at a time. Reloading, restoring progress, revisiting a completed mission, reading, and saving drafts do not replay rewards.

Animations follow the shared motion setting, including explicit enable on devices using reduced motion. Paused learners see the final form immediately. Android Back dismisses the celebration without leaving the lesson. The Illustration Studio retains a no-XP preview for every form.

Existing progress, reflections, course content, backup and restore, XP thresholds, and all 90 companion appearances are preserved. Install the signed APK over your existing app to keep your progress.

Release checks cover the production web build, all learning journeys, earned celebrations, phone layouts, native save/restart/update persistence, and real level-up animation plus Back dismissal inside the signed Android app. The release includes the APK and its SHA-256 checksum.
