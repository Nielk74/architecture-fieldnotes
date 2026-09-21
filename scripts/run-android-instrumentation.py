"""Stream native checks and bound the full course traversal on hosted emulators."""
import subprocess, sys, threading

runner = 'io.github.nielk74.fieldnotes.test/androidx.test.runner.AndroidJUnitRunner'
test = 'io.github.nielk74.fieldnotes.ProgressPersistenceTest#' + sys.argv[1]
print('Running native persistence check:', sys.argv[1], flush=True)
process = subprocess.Popen(
    ['adb', 'shell', 'am', 'instrument', '-w', '-r', '-e', 'class', test, runner],
    text=True, stdout=subprocess.PIPE, stderr=subprocess.STDOUT,
)
lines = []
def stream():
    for line in process.stdout:
        lines.append(line)
        print(line, end='', flush=True)
reader = threading.Thread(target=stream, daemon=True)
reader.start()
try:
    process.wait(timeout=360)
    reader.join(timeout=5)
    success = process.returncode == 0 and 'OK (1 test)' in ''.join(lines)
except subprocess.TimeoutExpired:
    print('Instrumentation exceeded 360 seconds.', flush=True)
    process.kill()
    process.wait()
    reader.join(timeout=5)
    success = False
if not success:
    # A disconnected emulator can leave even diagnostic adb calls waiting forever.
    for command in [
        ['adb', 'logcat', '-d', '-t', '1200', 'TestRunner:I', 'AndroidRuntime:E', 'Capacitor/Console:E', '*:S'],
        ['adb', 'shell', 'am', 'force-stop', 'io.github.nielk74.fieldnotes'],
    ]:
        try:
            subprocess.run(command, timeout=10)
        except subprocess.TimeoutExpired:
            print('Device unavailable during diagnostics:', ' '.join(command), flush=True)
    sys.exit(1)
