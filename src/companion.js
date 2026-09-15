import {companionXP,progressFor} from './progress.js';
import {renderBot,evolutionFor,nextEvolution,evolutions} from './illustrations/sidekick.js';
import {courseEvolutions,courseEvolutionFor,nextCourseEvolution,renderCourseBot} from './illustrations/course-sidekicks.js';
import {paths} from './paths/registry.js';
import './companion.css';
function currentCourse(){if(location.pathname.endsWith('/companions.html')){const track=new URLSearchParams(location.search).get('track');return paths[track]?track:null}if(location.pathname.endsWith('/learn.html'))return new URLSearchParams(location.search).get('path');if(location.pathname.endsWith('/hard-parts.html'))return 'hard-parts';if(location.pathname.endsWith('/fundamentals.html')||location.pathname.endsWith('/chapter-one.html'))return 'fundamentals';return null}
export function mountCompanion(){
 let header=document.querySelector('header');if(!header){header=document.createElement('header');document.body.prepend(header)}
 document.body.classList.add('has-companion');
 const companion=document.createElement('aside');companion.className='companion-status';companion.setAttribute('aria-label','Pip evolution progress');header.append(companion);
 let course=currentCourse();const previous=new Map();let signature='';
 function track(id,xp){
  const isOverall=id==='overall',stages=isOverall?evolutions:courseEvolutions(id),stage=isOverall?evolutionFor(xp):courseEvolutionFor(id,xp),next=isOverall?nextEvolution(xp):nextCourseEvolution(id,xp),level=isOverall?stages.indexOf(stage):stage.level;
  const percent=next?Math.min(100,Math.floor((xp-stage.xp)/(next.xp-stage.xp)*100)):100,evolved=previous.has(id)&&level>previous.get(id);previous.set(id,level);
  const title=isOverall?stage.name:stage.name.replace('Pip · ',''),label=isOverall?'Overall':'Course';
  return `<section class="companion-track" data-companion-track="${id}" aria-label="${isOverall?'Overall':paths[id].shortTitle} companion"><a class="companion-portrait${evolved?' companion-evolved':''}" href="/companions.html?track=${id}" aria-label="Explore ${label.toLowerCase()} Pip evolutions" title="See all ten ${label.toLowerCase()} forms"><svg class="companion-ring" viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29"/><circle class="companion-ring-value" cx="32" cy="32" r="29" pathLength="100" stroke-dasharray="${percent} 100"/></svg>${isOverall?renderBot({xp}):renderCourseBot({course:id,xp})}</a><div class="companion-identity"><span>${label} · Level ${level+1} / 10</span><strong>${title}</strong></div><div class="companion-growth"><div><span>${next?`${(next.xp-xp).toLocaleString()} XP to evolve`:'All forms earned'}</span><strong>${percent}%</strong></div><progress max="100" value="${percent}" aria-label="Progress to ${label.toLowerCase()} Pip’s next evolution"></progress><small>${next?`Next: ${next.name.replace(/^Pip the |^Pip · /,'')}`:'Final evolution'}</small></div><span class="companion-announcement" role="status">${evolved?`${stage.name} unlocked!`:''}</span></section>`;
 }
 function update(){course=currentCourse();const xp=companionXP(),courseXP=course&&paths[course]?progressFor(course).totalXP():null,key=`${course}:${xp}:${courseXP}`;if(signature===key)return;signature=key;companion.innerHTML=`<div class="companion-inner ${courseXP!==null?'companion-dual':''}">${track('overall',xp)}${courseXP!==null?track(course,courseXP):''}</div>`}
 update();window.addEventListener('book:progress',update);window.addEventListener('companion:context',update);
}
