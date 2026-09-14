#!/usr/bin/env bash
set -euo pipefail
npm run build
npx cap sync android
cd android
./gradlew assembleRelease
