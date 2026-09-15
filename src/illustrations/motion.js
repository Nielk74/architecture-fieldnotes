import { initializeMotionPreference, motionEnabled, setMotionMode } from './motion-preference.js';
// One director for visible SVGs. No independent perpetual timer for each illustration.
let started=false;
const registry=new Map();
export function setSceneStep(svg,index){
 let sequence=[];try{sequence=JSON.parse(svg.dataset.sequence||'[]')}catch{}
 if(!sequence.length)return;
 const step=sequence[((index%sequence.length)+sequence.length)%sequence.length];
 svg.dataset.step=String(index%sequence.length);
 svg.querySelectorAll('[data-teaching-frame]').forEach(frame=>{frame.style.display=Number(frame.dataset.teachingFrame)===((index%sequence.length)+sequence.length)%sequence.length?'inline':'none'});
 svg.querySelectorAll('[data-iso-node]').forEach(n=>{
  n.classList.toggle('iso-processing',n.dataset.isoNode===step.node);
  const state=step.states?.[n.dataset.isoNode];
  if(state)n.dataset.storyState=state;else delete n.dataset.storyState;
 });
 svg.querySelectorAll('.iso-edge').forEach(e=>e.classList.toggle('iso-transmitting',e.dataset.from===step.node));
 const host=svg.closest('[data-scene-player]');
 if(host){const caption=host.querySelector('[data-scene-caption]');if(caption)caption.textContent=step.text;host.querySelectorAll('[data-scene-step]').forEach((b,i)=>{b.classList.toggle('active',i===index%sequence.length);b.setAttribute('aria-pressed',String(i===index%sequence.length))})}
 svg.dispatchEvent(new CustomEvent('scene:step',{detail:step}));
}
export function startSceneMotion(){
 if(started)return;started=true;initializeMotionPreference();
 const visibility=new IntersectionObserver(entries=>entries.forEach(e=>{const record=registry.get(e.target);if(record){record.visible=e.isIntersecting;e.target.classList.toggle('iso-sleep',!e.isIntersecting)}}));
 function scan(){for(const [svg] of registry)if(!svg.isConnected){visibility.unobserve(svg);registry.delete(svg)}document.querySelectorAll('.iso-scene').forEach(svg=>{if(registry.has(svg))return;registry.set(svg,{visible:false,last:performance.now()});visibility.observe(svg);setSceneStep(svg,0)})}
 new MutationObserver(scan).observe(document.body,{childList:true,subtree:true});scan();
 setInterval(()=>{
  if(document.hidden||!motionEnabled())return;
  const now=performance.now();
  for(const [svg,record] of registry){if(!record.visible||svg.closest('[hidden]')||svg.dataset.manual==='true'||svg.closest('[data-scene-player]')?.dataset.playing==='false')continue;
   if(now-record.last>2400){setSceneStep(svg,Number(svg.dataset.step||0)+1);record.last=now}
  }
 },200);
}
export function wireScenePlayer(host){
 if(host.dataset.wired==='true')return;
 host.dataset.wired='true';
 const svg=host.querySelector('svg');
 const initialPlay=host.querySelector('[data-scene-play]');if(initialPlay&&!motionEnabled()){initialPlay.textContent='▶ Play the sequence';initialPlay.setAttribute('aria-pressed','false')}

 host.querySelectorAll('[data-scene-step]').forEach(button=>button.addEventListener('click',()=>{host.dataset.playing='false';setSceneStep(svg,Number(button.dataset.sceneStep));const play=host.querySelector('[data-scene-play]');if(play){play.textContent='▶ Play the sequence';play.setAttribute('aria-pressed','false')}}));
 host.querySelector('[data-scene-play]')?.addEventListener('click',event=>{const playing=host.dataset.playing!=='false'&&motionEnabled();if(!playing&&!motionEnabled())setMotionMode('on');host.dataset.playing=String(!playing);event.currentTarget.textContent=playing?'▶ Play the sequence':'Ⅱ Pause sequence';event.currentTarget.setAttribute('aria-pressed',String(!playing))});
}
