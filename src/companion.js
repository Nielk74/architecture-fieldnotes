import {companionXP} from './progress.js';
import {renderBot,evolutionFor,nextEvolution,evolutions} from './illustrations/sidekick.js';
import './companion.css';

export function mountCompanion(){
 let header=document.querySelector('header');if(!header){header=document.createElement('header');document.body.prepend(header)}
 document.body.classList.add('has-companion');
 const companion=document.createElement('aside');companion.className='companion-status';companion.setAttribute('aria-label','Pip evolution progress');header.append(companion);
 let previousXP=-1,previousLevel=-1;
 function update(){
  const xp=companionXP();if(xp===previousXP)return;
  const stage=evolutionFor(xp),next=nextEvolution(xp),level=evolutions.indexOf(stage),earned=xp-stage.xp,needed=next?next.xp-stage.xp:1,percent=next?Math.min(100,Math.floor(earned/needed*100)):100;
  const evolved=previousLevel>=0&&level>previousLevel;
  companion.innerHTML=`<div class="companion-inner"><div class="companion-portrait${evolved?' companion-evolved':''}"><svg class="companion-ring" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29"/><circle class="companion-ring-value" cx="32" cy="32" r="29" pathLength="100" stroke-dasharray="${percent} 100"/></svg>${renderBot({xp})}</div><div class="companion-identity"><strong>${stage.name}</strong><span>Evolution ${level+1} / ${evolutions.length}</span></div><div class="companion-growth"><div><span>${next?`${(next.xp-xp).toLocaleString()} XP to evolve`:'All evolutions earned'}</span><strong>${percent}%</strong></div><progress max="100" value="${percent}" aria-label="Progress to Pip’s next evolution"></progress><small>${next?`Next: ${next.name.replace(/^Pip the /,'')}`:'Pip the pathfinder'}</small></div><span class="companion-announcement" role="status">${evolved?`${stage.name} unlocked!`:''}</span></div>`;
  previousXP=xp;previousLevel=level;
 }
 update();window.addEventListener('book:progress',update);
}
