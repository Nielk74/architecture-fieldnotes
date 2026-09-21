import {robotGeometry} from './characters.js';
/** People and practice: a shared vocabulary for relationships, not job-title boxes. */
export const peopleDescriptions={
 api:'An explicit request and response contract: connected sockets',
 search:'Retrieval: a moving lens over a set of records',
 colleague:'A coworker with a notebook and a gesturing hand',
 mentor:'Two people exchanging experience, with a shared learning note',
 listening:'A listening circle: people take turns contributing',
 stakeholders:'People with different needs around a shared decision',
 handoff:'Two people passing responsibility with a visible record',
 whiteboard:'A shared drawing surface with an evolving plan',
 agent:'An automated agent: rounded robot, curved visor and articulated tool arms',
 shield:'A protective boundary with a deliberate admission check',
 leaf:'Resource use and environmental impact: leaf and energy meter',
 trace:'A causal trace with linked spans and a moving observation',
 alert:'An actionable alert with a signal and acknowledgement',
 experiment:'An experiment comparing a hypothesis with observed evidence',
};
export function peopleGeometry(kind,p){
 if(!peopleDescriptions[kind])return null;
 const {top:paper,left:side,right:front,ink}=p;
 const human=(x,y,scale=1,variant=0)=>`<g transform="translate(${x} ${y}) scale(${scale})"><path d="m-9 21-4 27m22-27 4 27" stroke="${ink}" stroke-width="6" stroke-linecap="round"/><path d="M-19 22V3q19-20 38 0v19Z" fill="${variant?side:front}"/><g class="people-nod"><circle cy="-23" r="15" fill="${paper}"/><path d="M-15-25q1-22 22-12l8 12-10-5-20 7" fill="${ink}" stroke="none"/><path d="M-5-23h1m8 0h1" stroke="${ink}" stroke-width="2.5"/><path d="M-4-15q4 3 8 0" fill="none"/></g><path class="people-gesture" d="M17 3 30-8 36-5" fill="none" stroke-width="5" stroke-linecap="round"/></g>`;
 const note=`<g class="people-note"><path d="m-13-9 26-6v25l-26 6Z" fill="${paper}"/><path d="m-7-2 14-3m-14 10 10-2"/></g>`;
 const bubble=(x,y,delay=0)=>`<g class="people-talk" style="animation-delay:${delay}s" transform="translate(${x} ${y})"><path d="M-15-11h30v20H1l-8 7V9h-8Z" fill="${paper}"/><path d="M-8-4H8M-8 2H3"/></g>`;
 if(kind==='api')return `<path d="m-46-35 33-8v75l-33 8Z" fill="${paper}"/><path d="m13-35 33-8v75l-33 8Z" fill="${side}"/><path d="M-27-18h10m-10 12h10m37 4h10m-10 12h10" stroke-width="3"/><path class="people-request" d="M-10-17H8m-5-5 5 5-5 5M8 20h-18m5-5-5 5 5 5" fill="none" stroke="${ink}" stroke-width="3"/><circle class="role-signal" cx="-29" cy="24" r="4" fill="${front}"/><circle class="role-signal" cx="29" cy="-25" r="4" fill="${front}"/>`;
 if(kind==='search')return `<path d="m-43-38 72-15v83l-72 15Z" fill="${paper}"/><path d="m-32-22 46-10m-46 25 46-10m-46 25 32-7" stroke="${side}" stroke-width="5"/><g class="people-search"><circle cx="18" cy="9" r="23" fill="${front}" fill-opacity=".4" stroke="${ink}" stroke-width="4"/><path d="m33 28 20 24" stroke="${ink}" stroke-width="8" stroke-linecap="round"/></g>`;
 if(kind==='colleague')return `${human(-5,0)}<g transform="translate(-25 16) rotate(-12)">${note}</g>${bubble(37,-45)}`;
 if(kind==='mentor')return `${human(-30,5,.8)}${human(30,12,.68,1)}<g transform="translate(0 8)">${note}</g>${bubble(-4,-57)}`;
 if(kind==='listening'||kind==='stakeholders')return `${human(0,-21,.6,1)}<path d="m-52 24 50-24 55 25-50 24Z" fill="${side}"/>${human(-40,23,.63)}${human(42,28,.63,1)}${kind==='listening'?bubble(-31,-20)+bubble(38,-17,-1.5):`<g class="people-decision"><path d="m0 7 12 13L0 34-12 20Z" fill="${paper}"/><path d="m-5 21 4 4 7-9" fill="none"/></g>`}`;
 if(kind==='handoff')return `${human(-40,4,.74)}${human(40,4,.74,1)}<path d="M-26 16H25m-7-6 7 6-7 6" fill="none" stroke-width="2"/><g class="people-pass">${note}</g>`;
 if(kind==='whiteboard')return `<path d="m-32 37-8 24m68-35 9 24" stroke-width="4"/><path d="m-51-39 98-16v87l-98 16Z" fill="${side}"/><path d="m-45-33 86-14v70l-86 14Z" fill="${paper}"/><path class="people-draw" d="m-32-13 22-4 0 20 30-6 0-22 14-3M-9 3l-20 22m20-22 34 16" fill="none" stroke="${ink}" stroke-width="3" pathLength="100"/><circle cx="-32" cy="-13" r="4" fill="${front}"/><circle cx="25" cy="19" r="4" fill="${front}"/>`;
 if(kind==='agent')return robotGeometry(p);
 if(kind==='shield')return `<path d="m0-52 42 14-5 50Q25 43 0 58q-33-18-39-48l-4-47Z" fill="${side}"/><path d="m0-42 31 10-4 41Q20 32 0 46Z" fill="${paper}"/><path class="people-check" d="m-18 0 13 14L22-16" fill="none" stroke="${ink}" stroke-width="6" stroke-linecap="round"/>`;
 if(kind==='leaf')return `<path class="people-leaf" d="M-4 34Q-63-7 18-53 64 13-4 34Z" fill="${front}"/><path d="M-12 52 17-37M-2 22-22 1M7-5 31-14" fill="none" stroke-width="3"/><rect x="23" y="18" width="22" height="35" rx="4" fill="${paper}"/><path class="role-signal" d="m37 24-8 14h9l-8 10" fill="none" stroke-width="3"/>`;
 if(kind==='trace')return `<path d="m-51-35 102-18v91l-102 18Z" fill="${paper}"/><path d="M-37-14 35-27M-19 3 27-6M-5 21 38 13" stroke="${front}" stroke-width="10" stroke-linecap="round"/><path d="m-37-14 18 17 14 18" fill="none" stroke-dasharray="3 3"/><circle class="people-observe" cx="-30" cy="-15" r="6" fill="${ink}"/>`;
 if(kind==='alert')return `<path d="M-30 23v-31q0-33 30-33T30-8v31l9 8h-78Z" fill="${front}"/><path class="people-bell" d="M-9 38q9 15 18 0" fill="${paper}"/><path class="role-signal" d="M-45-29q-13 16-5 32m95-32q13 16 5 32" fill="none" stroke-width="3"/><path d="M0-21v22" stroke="${ink}" stroke-width="5"/><circle cy="12" r="3" fill="${ink}"/>`;
 return `<path d="M-27-49h24m-19 0v35L-44 33q-5 13 10 13H9q14 0 8-13L-8-14v-35" fill="${paper}"/><path d="M-34 23H8l9 17H-41Z" fill="${front}"/><g class="people-bubbles"><circle cx="-19" cy="18" r="4" fill="${side}"/><circle cx="-7" cy="29" r="3" fill="${side}"/></g><path d="m27-24 24-6v62l-24 6Z" fill="${side}"/><path class="people-draw" d="m32 19 5-13 5 4 5-22" fill="none" stroke="${ink}" stroke-width="3"/>`;
}
