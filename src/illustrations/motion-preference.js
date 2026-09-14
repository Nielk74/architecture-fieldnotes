import {appStorage} from '../storage.js';
// A single preference controls CSS, SVG sequencing, and every page's motion button.
const KEY='fieldnotes-motion-v1';
let mode='on',initialized=false;
const reduced=()=>matchMedia('(prefers-reduced-motion: reduce)').matches;
export function motionEnabled(){return mode==='on'||(mode==='system'&&!reduced())}
export function setMotionMode(value){mode=['on','off','system'].includes(value)?value:'system';try{appStorage.setItem(KEY,mode)}catch{}apply();}
function controls(){
 const enabled=motionEnabled();
 document.querySelectorAll('.motion-toggle,#studio-motion').forEach(button=>{
  const label=enabled?'Pause animations':mode==='system'&&reduced()?'Enable animations (device prefers reduced motion)':'Enable animations';
  button.setAttribute('aria-label',label);button.setAttribute('aria-pressed',String(!enabled));button.title=label;
  if(button.id==='studio-motion')button.textContent=enabled?'Pause motion':'Enable motion';
  else button.innerHTML=`<span aria-hidden="true">${enabled?'Ⅱ':'▶'}</span><span class="motion-state-label">${enabled?'Motion on':'Motion off'}</span>`;
 });
 document.querySelectorAll('[data-scene-play]').forEach(button=>{const playing=enabled&&button.closest('[data-scene-player]').dataset.playing!=='false';button.textContent=playing?'Ⅱ Pause sequence':'▶ Play the sequence';button.setAttribute('aria-pressed',String(playing))});
}
function apply(){document.body.classList.toggle('motion-on',mode==='on');document.body.classList.toggle('motion-paused',!motionEnabled());document.body.dataset.motion=mode;controls();window.dispatchEvent(new CustomEvent('motion:change',{detail:{enabled:motionEnabled(),mode}}));}
export function initializeMotionPreference(){if(initialized)return;initialized=true;
 try{const saved=appStorage.getItem(KEY);if(['on','off','system'].includes(saved))mode=saved}catch{}
 const override=new URLSearchParams(location.search).get('motion');if(['on','off','system'].includes(override)){mode=override;try{appStorage.setItem(KEY,mode)}catch{}const url=new URL(location.href);url.searchParams.delete('motion');history.replaceState(history.state,'',url)}
 apply();matchMedia('(prefers-reduced-motion: reduce)').addEventListener('change',apply);
 // Controls in Chapter 1 are mounted after startup. Reconcile only when a new control arrives.
 new MutationObserver(records=>{if(records.some(r=>[...r.addedNodes].some(n=>n.nodeType===1&&(n.matches?.('.motion-toggle,#studio-motion')||n.querySelector?.('.motion-toggle,#studio-motion')))))controls()}).observe(document.body,{childList:true,subtree:true});
 document.addEventListener('click',event=>{if(!event.target.closest('.motion-toggle,#studio-motion'))return;setMotionMode(motionEnabled()?'off':'on')});
}
