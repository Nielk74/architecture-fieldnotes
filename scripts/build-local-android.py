"""Local signed build; secrets live outside the checkout and are never printed."""
import json, os, subprocess
from pathlib import Path
folder = Path.home() / '.local/share/fieldnotes-signing'
credentials = json.loads((folder / 'credentials.json').read_text())
env = os.environ | {
    'JAVA_HOME': os.environ.get('JAVA_HOME', '/opt/homebrew/opt/openjdk@21'),
    'ANDROID_HOME': os.environ.get('ANDROID_HOME', '/opt/homebrew/share/android-commandlinetools'),
    'ANDROID_KEYSTORE_PATH': str(folder / 'release.jks'),
    'ANDROID_KEYSTORE_PASSWORD': credentials['password'],
    'ANDROID_KEY_PASSWORD': credentials['password'],
    'ANDROID_KEY_ALIAS': credentials['alias'],
}
subprocess.run(['./gradlew', ':app:assembleRelease', ':app:assembleDebug', ':app:assembleDebugAndroidTest'], cwd='android', env=env, check=True)
