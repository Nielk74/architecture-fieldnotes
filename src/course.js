import {rememberLocation} from './paths/catalog.js';
import { chapterState, totalXP, companionXP, completeReading } from './progress.js';
import { renderScene } from './illustrations/engine.js';
import { bookshop } from './illustrations/scenes.js';
import './course.css';
import { renderBot, evolutionFor, nextEvolution } from './illustrations/sidekick.js';

const $ = s => document.querySelector(s);
const lessons = [
  { id:'system', title:'Meet your system', hint:'Follow a book order', icon:'▧', time:'1 min' },
  { id:'foundations', title:'Four dimensions', hint:'Explore the architecture', icon:'◇', time:'2 min', mission:'explore' },
  { id:'card-challenge', title:'Sort the ideas', hint:'A tiny thinking challenge', icon:'▤', time:'2 min', mission:'sort' },
  { id:'tradeoffs', title:'Make a trade-off', hint:'Experiment with the system', icon:'⇌', time:'2 min', mission:'lab' },
  { id:'architect', title:'Think like an architect', hint:'Beyond the technical work', icon:'♧', time:'1 min' },
  { id:'ecosystem', title:'Connect the world', hint:'Four things that shape the system', icon:'⌘', time:'2 min' },
  { id:'checkpoint', title:'Check your thinking', hint:'Three quick reflections', icon:'✦', time:'2 min', mission:'quiz' },
  { id:'rationale', title:'Leave the why', hint:'Your first decision record', icon:'▱', time:'2 min', mission:'record' },
];
const firstState=chapterState(1);
const completed = new Set([...firstState.read,...lessons.filter(l=>l.mission&&firstState.missions[l.mission]).map(l=>l.id)]);
let current = -1;
$('.hero').id='system';
const ecosystem=$('.ecosystem');ecosystem.id='ecosystem';
$('#architect').after(ecosystem);
const law=$('.law-banner');$('#tradeoffs').prepend(law);
const main=$('main.shell');
// Move the existing activities, retaining every input, listener, and in-memory answer.
const activityNodes=lessons.map(l=>$('#'+l.id));
const stage=document.createElement('div');stage.className='course-stage';stage.id='course-stage';
activityNodes.forEach(node=>{node.classList.add('lesson-panel');node.classList.remove('reveal');node.classList.add('visible');stage.append(node)});
main.replaceChildren(stage);main.classList.add('course-main');
const map=document.createElement('section');map.id='course-map';map.className='course-map';
map.innerHTML=`<div class="map-intro"><div class="eyebrow"><span class="pill">Chapter 01</span> Your learning adventure</div><h1>Big ideas.<br><em>Small discoveries.</em></h1><p>One chapter, eight little stops. Follow the path, revisit an idea, or jump ahead. This is your journey.</p><div class="map-art">${renderScene(bookshop)}<span>YOUR BOOKSHOP. YOUR FIRST ARCHITECTURE.</span></div><button class="primary" id="map-start" type="button">Let’s begin <span>→</span></button><p class="map-source">Based on Richards & Ford · <i>Fundamentals of Software Architecture</i> · Chapter 1 (2020)</p></div><div class="map-journey"><div class="pip-status"><div class="map-pip">${renderBot({xp:companionXP(),decorative:false})}</div><div><b id="pip-name">Curious Pip</b><p id="pip-description">Pip grows with you. Complete challenges to discover six forms.</p><span id="pip-next">Next evolution at 100 XP</span></div></div><div class="map-path-heading"><span>THE CHAPTER PATH</span><b id="map-completion">0 / 8 explored</b></div><div class="map-path">${lessons.map((l,i)=>`<button type="button" class="map-stop" data-open-lesson="${l.id}" aria-label="Open lesson ${i+1}: ${l.title}"><span class="stop-orb"><span class="stop-icon">${l.icon}</span><span class="stop-number">${i+1}</span></span><span class="stop-copy"><strong>${l.title}</strong><small>${l.hint}</small><span class="stop-meta">${l.time} ${l.mission?'· +20 XP':''}</span></span><span class="stop-check" aria-hidden="true">↗</span></button>`).join('')}</div><p class="map-footnote">All lessons are open. Skipping never marks a challenge as complete.</p></div>`;
stage.prepend(map);
$('.nav-links').remove();$('.nav-end').remove();
const tools=document.createElement('div');tools.className='course-header-tools';tools.innerHTML='<a href="/fundamentals.html" class="all-chapters-link" aria-label="All chapters">▦ <span>All chapters</span></a><a href="/chapter-1-summary.md" target="_blank" rel="noopener" class="course-notes">Chapter notes ↗</a><button id="show-map" type="button" aria-label="Chapter map">⊞ <span>Chapter map</span></button>';
tools.append($('.quest-emblem'));tools.append($('.quest-level'));tools.append($('.motion-toggle'));$('.nav').append(tools);
const progress=document.createElement('nav');progress.className='course-progress';progress.setAttribute('aria-label','Jump to a lesson');progress.innerHTML=`<div class="shell"><div class="course-progress-label"><span id="course-location">Your chapter map</span><span id="course-count">0 of 8 complete</span></div><div class="course-steps">${lessons.map((l,i)=>`<button type="button" data-open-lesson="${l.id}" aria-label="Jump to lesson ${i+1}: ${l.title}" title="${l.title}"><span>${i+1}</span><i></i></button>`).join('')}</div></div>`;$('header').after(progress);
const footer=document.createElement('nav');footer.className='course-bottom';footer.setAttribute('aria-label','Lesson navigation');footer.innerHTML='<div class="shell"><button id="lesson-back" type="button">← Back</button><span id="lesson-position"></span><button class="primary" id="lesson-next" type="button">Continue →</button></div>';
document.body.append(footer);$('footer').hidden=true;$('.quest-dock').hidden=true;document.body.classList.add('course-mode');
function updateProgress(){
 $('#course-count').textContent=`${completed.size} of 8 complete`;
 $('#map-completion').textContent=`${completed.size} / 8 complete`;
 document.querySelectorAll('[data-open-lesson]').forEach(button=>{
   const index=lessons.findIndex(l=>l.id===button.dataset.openLesson);
   button.classList.toggle('complete',completed.has(button.dataset.openLesson));
   if(index===current)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');
   const check=button.querySelector('.stop-check');if(check)check.textContent=completed.has(button.dataset.openLesson)?'✓':'↗';
 });
 const nextUnfinished=lessons.find(l=>!completed.has(l.id));
 $('#map-start').innerHTML=completed.size===8?'Revisit the chapter <span>↻</span>':completed.size?`Keep exploring <span>→</span>`:'Let’s begin <span>→</span>';
 $('#map-start').dataset.next=nextUnfinished?.id||'system';
 if(current>=0){const lesson=lessons[current];$('#lesson-next').textContent=!lesson.mission&&!completed.has(lesson.id)?'Got it, continue →':current===7?'Back to the map ↗':completed.has(lesson.id)?'Continue →':'Skip for now →';}
}
function navigate(id, push=true){
 const index=lessons.findIndex(l=>l.id===id);current=index;rememberLocation('fundamentals',1,index<0?'map':lessons[index].id);
 activityNodes.forEach((node,i)=>node.hidden=i!==index);map.hidden=index!==-1;footer.hidden=index===-1;
 document.body.classList.toggle('on-map',index===-1);
 $('#course-location').textContent=index<0?'Your chapter map':`${String(index+1).padStart(2,'0')} / ${lessons[index].title}`;
 $('#lesson-position').textContent=index<0?'':`${index+1} of ${lessons.length}`;
 $('#lesson-back').textContent=index===0?'← Chapter map':'← Back';
 if(push)history.pushState(null,'',index<0?'#map':`#lesson/${lessons[index].id}`);
 updateProgress();stage.scrollTop=0;
 const active=index<0?map:activityNodes[index];active.classList.remove('lesson-enter');void active.offsetWidth;active.classList.add('lesson-enter');
 const heading=active.querySelector('h1,h2,h3');if(heading){heading.tabIndex=-1;heading.focus({preventScroll:true})}
}
document.querySelectorAll('[data-open-lesson]').forEach(button=>button.addEventListener('click',()=>navigate(button.dataset.openLesson)));
$('#map-start').addEventListener('click',()=>navigate($('#map-start').dataset.next));
$('#show-map').addEventListener('click',()=>navigate('map'));
$('#lesson-back').addEventListener('click',()=>navigate(current<=0?'map':lessons[current-1].id));
$('#lesson-next').addEventListener('click',()=>{const lesson=lessons[current];if(!lesson.mission){completed.add(lesson.id);completeReading(1,lesson.id)}navigate(current===7?'map':lessons[current+1].id)});
// Preserve old chapter links while routing them into single-activity screens.
document.addEventListener('click',event=>{const link=event.target.closest('a[href^="#"]');if(!link)return;const id=link.getAttribute('href').slice(1);if(id===''||id==='map'||lessons.some(l=>l.id===id)){event.preventDefault();navigate(id||'map')}});
window.addEventListener('fieldnotes:earned',event=>{const lesson=lessons.find(l=>l.mission===event.detail);if(lesson){completed.add(lesson.id);updateProgress()}});
function fromHash(){navigate(location.hash.replace(/^#lesson\//,'').replace(/^#/,''),false)}
window.addEventListener('popstate',fromHash);fromHash();

window.addEventListener('fieldnotes:pip',event=>{const xp=companionXP();$('.map-pip').innerHTML=renderBot({xp,decorative:false});const stage=evolutionFor(xp);$('#pip-name').textContent=stage.name;$('#pip-description').textContent=stage.description;$('#pip-next').textContent=nextEvolution(xp)?`Next evolution at ${nextEvolution(xp).xp} XP`:'Final form unlocked!';$('.quest-emblem').title=stage.name+' · '+stage.description});

window.dispatchEvent(new CustomEvent('fieldnotes:pip',{detail:totalXP()}));
$('.map-journey').insertAdjacentHTML('beforeend','<a class="next-book-chapter" href="/#chapter/2/map">Next chapter: Architectural Thinking →</a>');
