"""Bound instrumentation runs so CI failures produce diagnostics, not endless waits."""
import subprocess,sys
runner='io.github.nielk74.fieldnotes.test/androidx.test.runner.AndroidJUnitRunner'
test='io.github.nielk74.fieldnotes.ProgressPersistenceTest#'+sys.argv[1]
print('Running native persistence check:',sys.argv[1],flush=True)
try:
 result=subprocess.run(['adb','shell','am','instrument','-w','-r','-e','class',test,runner],text=True,stdout=subprocess.PIPE,stderr=subprocess.STDOUT,timeout=180)
 output=result.stdout
 print(output,flush=True)
 success=result.returncode==0 and 'OK (1 test)' in output
except subprocess.TimeoutExpired as error:
 print('Instrumentation exceeded 180 seconds.',flush=True)
 print((error.stdout or b'').decode() if isinstance(error.stdout,bytes) else error.stdout or '',flush=True)
 success=False
if not success:
 subprocess.run(['adb','logcat','-d','-t','1200','TestRunner:I','AndroidRuntime:E','Capacitor/Console:E','*:S'])
 subprocess.run(['adb','shell','am','force-stop','io.github.nielk74.fieldnotes'])
 sys.exit(1)
