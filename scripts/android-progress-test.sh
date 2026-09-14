#!/usr/bin/env bash
set -euo pipefail
# ANDROID_SERIAL selects an existing emulator; never erase its user data.
pkg=io.github.nielk74.fieldnotes
runner="$pkg.test/androidx.test.runner.AndroidJUnitRunner"
class="$pkg.ProgressPersistenceTest"
adb install -r android/app/build/outputs/apk/debug/app-debug.apk
adb install -r android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk
run_test() {
  local output
  output=$(adb shell am instrument -w -r -e class "$class#$1" "$runner")
  printf '%s\n' "$output"
  if ! [[ "$output" == *"OK (1 test)"* ]]; then return 1; fi
}
run_test seedProgressThroughUI
adb shell am force-stop "$pkg"
# Install the actual release APK over the existing app: same identity and signing key.
adb install -r android/app/build/outputs/apk/release/app-release.apk
run_test verifyProgressAfterUpdate
