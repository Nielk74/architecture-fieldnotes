import {renderBot} from './sidekick.js';
import {courseThemes,renderCourseBot} from './course-sidekicks.js';
import {paths} from '../paths/registry.js';
import {initializeMotionPreference,motionEnabled,setMotionMode} from './motion-preference.js';
import './level-up.css';
import {levelUpStages as stagesFor,levelUpTransition} from './level-up-model.js';

const esc=value=>String(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const duration=4200;
const avatar=(track,xp)=>track==='overall'?renderBot({xp}):renderCourseBot({course:track,xp});
const theme=track=>track==='overall'?{color:'#c7b2df',dark:'#655184',accent:'#efc574'}:courseThemes[track];
const themeStyle=track=>{const t=theme(track);return `--evolution-color:${t.color};--evolution-ink:${t.dark};--evolution-gold:${t.accent}`};
const star='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 1 3.1 7.9L23 12l-7.9 3.1L12 23l-3.1-7.9L1 12l7.9-3.1Z" fill="currentColor"/></svg>';
function particles(){
 return Array.from({length:36},(_,i)=>{
  const angle=(i/36)*Math.PI*2,radius=160+(i%4)*25;
  return `<i class="level-up-particle ${i%2===0?'is-star':''}" style="--scatter-x:${Math.cos(angle)*radius}px;--scatter-y:${Math.sin(angle)*radius*.85-45}px;--twist:${i*47}deg;--delay:${1100+(i%6)*95}ms;--particle-color:${['var(--evolution-color)','var(--evolution-gold)','#c8d7b3','#d1bfdf'][i%4]}" aria-hidden="true">${i%2===0?star:''}</i>`;
 }).join('');
}
function stageMarkup(model){
 return `<div class="level-up-stage" aria-hidden="true"><div class="level-up-halo"></div><svg class="level-up-orbits" viewBox="0 0 480 340" fill="none"><ellipse cx="240" cy="176" rx="163" ry="91" transform="rotate(-24 240 176)"/><ellipse cx="240" cy="176" rx="163" ry="91" transform="rotate(24 240 176)"/><circle cx="95" cy="107" r="5"/><circle cx="384" cy="243" r="4"/><path d="m372 71 4 11 11 4-11 4-4 11-4-11-11-4 11-4ZM90 248v16m-8-8h16"/></svg><div class="level-up-ripple"></div><div class="level-up-ripple second"></div><div class="level-up-ground"></div><div class="level-up-satellites">${[0,1,2].map(i=>`<span style="--star-index:${i}">${star}</span>`).join('')}</div><div class="level-up-portrait level-up-before">${avatar(model.track,model.fromXP)}</div><div class="level-up-portrait level-up-after">${avatar(model.track,model.toXP)}</div><div class="level-up-spark-core">${star}</div><div class="level-up-particles">${particles()}</div><div class="level-up-level-chip"><span>LEVEL</span><strong>${model.to+1}</strong></div></div>`;
}

let active=null;
export function showLevelUpCelebration(model,{still:preferStill=false,source='reward',onClose=()=>{}}={}){
 if(!model||!levelUpTransition(model))throw new Error('A celebration needs a real level threshold crossing.');
 // Recompute display fields: callers cannot substitute a different earned form.
 model=levelUpTransition(model);
 active?.close();initializeMotionPreference();
 const trigger=document.activeElement;
 const dialog=document.createElement('dialog');dialog.className='level-up-dialog';dialog.setAttribute('aria-labelledby','level-up-title');dialog.style.cssText=themeStyle(model.track);
 dialog.dataset.track=model.track;dialog.dataset.source=source;
 const formName=model.after.name.replace(/^Pip · /,'');
 dialog.innerHTML=`<div class="level-up-card">${stageMarkup(model)}<div class="level-up-reveal"><h2 id="level-up-title"><span class="level-up-sr">Level ${model.to+1}. Pip: </span>${esc(formName)}</h2></div><button class="level-up-done primary" type="button" autofocus>Let’s go! <span aria-hidden="true">↗</span></button><span class="level-up-status" role="status"></span></div>`;
 document.body.append(dialog);
 let frame=0,started=0,closed=false;
 // The shared setting already resolves system reduction and explicit opt-in.
 const canAnimate=()=>!preferStill&&motionEnabled();
 function status(value){dialog.querySelector('.level-up-status').textContent=value;}
 function cancelFrame(){cancelAnimationFrame(frame);frame=0;}
 function still(){
  cancelFrame();dialog.dataset.mode='still';dialog.dataset.phase='celebrate';status(`${formName}, level ${model.to+1}.`);
 }
 function tick(time){
  if(closed)return;
  if(document.hidden){started=0;frame=requestAnimationFrame(tick);return;}
  if(!started)started=time;
  const elapsed=time-started;
  dialog.dataset.phase=elapsed<900?'gather':elapsed<1600?'transform':'celebrate';
  if(elapsed>=duration){dialog.dataset.mode='settled';status(`${formName}, level ${model.to+1}.`);cancelFrame();return;}
  frame=requestAnimationFrame(tick);
 }
 function replay(){
  if(!canAnimate()){still();return;}
  cancelFrame();dialog.dataset.mode='reset';void dialog.offsetWidth;
  started=0;dialog.dataset.mode='animated';dialog.dataset.phase='gather';
  status('Pip is evolving.');frame=requestAnimationFrame(tick);
 }
 const preferenceChanged=()=>{if(!canAnimate())still();};
 const visibilityChanged=()=>{if(document.hidden)still();};
 function cleanup(){
  if(closed)return;
  closed=true;cancelFrame();window.removeEventListener('motion:change',preferenceChanged);document.removeEventListener('visibilitychange',visibilityChanged);dialog.remove();
  if(active===handle){active=null;document.body.classList.remove('level-up-open');if(trigger?.isConnected)trigger.focus({preventScroll:true});}
  onClose();
 }
 function close(){if(!closed){if(dialog.open)dialog.close();cleanup();}}
 dialog.querySelector('.level-up-done').onclick=close;
 // This deliberately minimal dialog has exactly one focusable control.
 dialog.addEventListener('keydown',event=>{if(event.key==='Tab'){event.preventDefault();dialog.querySelector('.level-up-done').focus();}});
 dialog.addEventListener('click',event=>{if(event.target===dialog)close()});
 dialog.addEventListener('close',cleanup,{once:true});
 window.addEventListener('motion:change',preferenceChanged);document.addEventListener('visibilitychange',visibilityChanged);
 const handle={close,dialog};active=handle;document.body.classList.add('level-up-open');dialog.showModal();replay();return handle;
}

export function dismissLevelUpCelebration(){if(!active)return false;active.close();return true;}
export function showLevelUpPreview(model,options={}){return showLevelUpCelebration(model,{...options,source:'preview'});}

export function mountLevelUpStudio(root){
 root.id='level-up';root.className='level-up-studio';
 root.innerHTML=`<div class="level-up-studio-copy"><div class="eyebrow">Motion study / 01</div><h2>Pip’s next chapter.</h2><p>One leap. A whole new Pip.</p><div class="level-up-demo-controls"><label>Companion<select id="level-up-track"><option value="overall">Overall Pip</option>${Object.entries(paths).map(([id,path])=>`<option value="${id}">${esc(path.shortTitle)}</option>`).join('')}</select></label><label>New level<select id="level-up-target"></select></label></div><button class="primary" id="preview-level-up" type="button">Play celebration <span aria-hidden="true">▶</span></button><label class="level-up-still-option"><input id="level-up-still" type="checkbox"> Still preview</label><p class="level-up-demo-note">Just a preview. Your XP stays unchanged.</p></div><div class="level-up-poster" aria-hidden="true"><span class="level-up-poster-orbit"></span><span class="level-up-poster-orbit second"></span><div class="level-up-poster-avatar"></div><span class="level-up-poster-badge">LEVEL UP ${star}</span><span class="level-up-poster-caption">Ready for the next adventure.</span></div>`;
 const track=root.querySelector('#level-up-track'),target=root.querySelector('#level-up-target');
 function model(){const levels=stagesFor(track.value),level=Number(target.value),toXP=levels[level].xp;return levelUpTransition({track:track.value,fromXP:Math.max(0,toXP-20),toXP});}
 function draw(){const m=model();root.style.cssText=themeStyle(m.track);root.querySelector('.level-up-poster-avatar').innerHTML=avatar(m.track,m.toXP);root.querySelector('.level-up-poster-badge').innerHTML=`LEVEL ${m.to+1} ${star}`;}
 function choices(){target.replaceChildren(...stagesFor(track.value).slice(1).map((s,i)=>new Option(`${i+2} · ${s.name.replace(/^Pip · /,'')}`,String(i+1))));draw();}
 const stillOption=root.querySelector('#level-up-still'),play=root.querySelector('#preview-level-up');
 stillOption.addEventListener('change',()=>{play.innerHTML=stillOption.checked?'Preview still <span aria-hidden="true">✦</span>':'Play celebration <span aria-hidden="true">▶</span>';});
 track.addEventListener('change',choices);target.addEventListener('change',draw);
 play.onclick=()=>{
  // An explicit Play action opts into motion, just like the scene player's Play.
  if(!stillOption.checked&&!motionEnabled())setMotionMode('on');
  showLevelUpPreview(model(),{still:stillOption.checked});
 };choices();
 if(location.hash==='#level-up')requestAnimationFrame(()=>root.scrollIntoView({behavior:'instant',block:'start'}));
}
