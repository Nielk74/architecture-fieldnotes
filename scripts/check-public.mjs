import {readdirSync,readFileSync} from 'node:fs';
import {execFileSync} from 'node:child_process';
const tracked=execFileSync('git',['ls-files','-z'],{encoding:'utf8'}).split('\0').filter(Boolean);
const forbidden=tracked.filter(p=>p.startsWith('temp/')||/\.(pdf|epub|mobi|azw3?|jks|keystore|p12|apk|aab)$/i.test(p)||/\.env/.test(p)||p.endsWith('local.properties'));
if(forbidden.length)throw new Error('Private input or generated files are tracked: '+forbidden.join(', '));
function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(dir+'/'+e.name):[dir+'/'+e.name])}
const built=walk('dist');if(built.some(p=>/\.(pdf|epub|mobi|txt)$/i.test(p)))throw new Error('Book source found in build');
if(tracked.some(p=>/\.txt$/i.test(p)&&!/(robots|CMakeLists|requirements)\.txt$/.test(p)))throw new Error('Unexpected text input tracked');
console.log('Public-file audit passed: source books, local secrets and APK outputs are excluded.');
