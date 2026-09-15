import {paths} from '../paths/registry.js';
const milestones=[0,.05,.12,.22,.34,.48,.64,.78,.9,1];
const themes={
 fundamentals:{color:'#b8cf96',dark:'#506940',accent:'#edc56e',shape:'square',stages:[['Sketch','pencil'],['Blueprint','blueprint'],['Model maker','blocks'],['Structure builder','ruler'],['Style explorer','compass'],['Quality keeper','diamond'],['Boundary designer','gate'],['Decision author','scroll'],['System composer','city'],['Foundation master','temple']]},
 'hard-parts':{color:'#c2aedb',dark:'#685180',accent:'#e5b079',shape:'hex',stages:[['Boundary scout','gate'],['Service splitter','scissors'],['Coupling untangler','knot'],['Contract keeper','handshake'],['Data navigator','database'],['Trade-off balancer','balance'],['Workflow conductor','route'],['Saga coordinator','loop'],['Resilience weaver','bridge'],['Distributed master','network']]},
 'staff-engineer':{color:'#e7c58e',dark:'#88623d',accent:'#d29188',shape:'round',stages:[['Thoughtful listener','ear'],['Context gatherer','notebook'],['Trust builder','heart'],['Direction finder','compass'],['Clear communicator','chat'],['Project guide','flag'],['Team connector','handshake'],['Growth mentor','sprout'],['Influence multiplier','people'],['Staff pathfinder','beacon']]},
 'responsible-engineering':{color:'#b2cdae',dark:'#4e7755',accent:'#d8b875',shape:'leaf',stages:[['Impact observer','eye'],['Context explorer','globe'],['Stakeholder listener','people'],['Privacy guardian','lock'],['Fairness advocate','balance'],['Safety steward','shield'],['Planet caretaker','leaf'],['Accountability keeper','scroll'],['Trust cultivator','tree'],['Responsible builder','garden']]},
 sre:{color:'#a9c8dc',dark:'#456c89',accent:'#efb16e',shape:'visor',stages:[['On-call learner','bell'],['Signal watcher','pulse'],['Toil reducer','wrench'],['Service-level keeper','gauge'],['Capacity planner','battery'],['Load navigator','valve'],['Incident responder','radio'],['Recovery captain','lifebuoy'],['Reliability designer','bridge'],['Production guardian','lighthouse']]},
 observability:{color:'#e1b398',dark:'#875841',accent:'#b1cda2',shape:'lens',stages:[['Curious observer','lens'],['Event collector','notebook'],['Context explorer','tags'],['Trace follower','route'],['Query explorer','search'],['Hypothesis maker','flask'],['Sampling strategist','funnel'],['Signal interpreter','prism'],['Evidence connector','network'],['Production detective','telescope']]},
 'ai-agents':{color:'#b9b0df',dark:'#635887',accent:'#90ccbd',shape:'antenna',stages:[['Agent apprentice','chip'],['Tool user','wrench'],['Memory keeper','database'],['Planner','steps'],['Retrieval explorer','search'],['Team orchestrator','network'],['Evaluation pilot','checklist'],['Safety navigator','shield'],['Human collaborator','handshake'],['Agent systems master','satellite']]},
};
export const courseThemes=themes;
export function courseEvolutions(course){const config=paths[course],theme=themes[course];if(!config||!theme)throw new Error('Unknown companion course');return theme.stages.map(([name,gear],i)=>({xp:i===9?config.totalXP:Math.round(config.totalXP*milestones[i]/20)*20,name:`Pip · ${name}`,gear,level:i,course}))}
export function courseEvolutionFor(course,xp=0){return courseEvolutions(course).filter(s=>s.xp<=xp).at(-1)}
export function nextCourseEvolution(course,xp=0){return courseEvolutions(course).find(s=>s.xp>xp)||null}
const props={
 pencil:'<path d="m8 31 18-23 7 6-18 23-9 3Z"/><path d="m24 10 7 6M8 31l7 6"/>',
 blueprint:'<rect x="5" y="7" width="32" height="30" rx="3"/><path d="M10 13h20v17H10zM20 13v17M10 22h20"/>',
 blocks:'<path d="m4 24 9-5 9 5-9 6Zm0 0v10l9 5 9-5V24m-9 6v9m9-15 9-5 9 5-9 6m0 0v9m-9-5 9 5 9-5V24M13 19V9l9-5 9 5v10m-18-10 9 5 9-5m-9 5v10"/>',
 ruler:'<path d="m5 30 26-25 8 8-26 26Z"/><path d="m25 11 4 4m-10 2 4 4m-10 2 4 4"/>',
 compass:'<circle cx="22" cy="22" r="17"/><path d="m28 12-3 13-13 7 6-15Z"/>',
 diamond:'<path d="m4 15 9-10h18l9 10-18 24Zm0 0h36M13 5l9 34L31 5"/>',
 gate:'<path d="M7 38V6h30v32M13 38V13h18v25M22 13v25"/><path d="m17 25 5 5 5-5"/>',
 scroll:'<path d="M10 8h25v27H13a5 5 0 0 1 0-10h22M10 8a5 5 0 0 0-5 5h5V8Zm5 7h14m-14 6h10"/>',
 city:'<path d="M3 38h38M6 38V18h9v20m0 0V5h14v33m0 0V23h9v15M20 11h4m-4 7h4m-4 7h4"/>',
 temple:'<path d="m3 13 19-10 19 10ZM5 38h34M8 17v16m9-16v16m10-16v16m9-16v16M5 33h34"/>',
 scissors:'<circle cx="10" cy="32" r="6"/><circle cx="32" cy="32" r="6"/><path d="m13 27 21-22m-5 22L8 5"/>',
 knot:'<path d="M8 9c18-12 30 17 14 17S9 4 30 9s9 32-8 24S-4 20 8 9Z"/>',
 handshake:'<path d="m3 17 9-8 9 4 8-4 12 10-13 17-11-4-14-9Zm9-8 9 4-7 8 5 4 8-8 10 7M7 27l6-7m2 14 7-7"/>',
 database:'<ellipse cx="22" cy="9" rx="16" ry="6"/><path d="M6 9v23c0 8 32 8 32 0V9M6 20c0 8 32 8 32 0"/>',
 balance:'<path d="M22 4v33M12 39h20M5 12h34M10 12 3 26h14Zm24 0-7 14h14Z"/>',
 route:'<circle cx="8" cy="8" r="4"/><circle cx="35" cy="35" r="4"/><path d="M12 8h17a8 8 0 0 1 0 16H15a6 6 0 0 0 0 12h16"/>',
 loop:'<path d="M8 15a15 15 0 0 1 27-3l4 5M39 7v10H29M36 28a15 15 0 0 1-27 3l-4-5M5 36V26h10"/>',
 bridge:'<path d="M3 33h38M8 37V9m28 28V9M8 12q14 27 28 0M15 25v8m7-5v5m7-8v8"/>',
 network:'<circle cx="22" cy="22" r="6"/><circle cx="7" cy="7" r="4"/><circle cx="37" cy="7" r="4"/><circle cx="7" cy="37" r="4"/><circle cx="37" cy="37" r="4"/><path d="m10 10 8 8m8 8 8 8m-8-16 8-8M10 34l8-8"/>',
 ear:'<path d="M10 17C8-2 38 0 34 19c-2 9-11 7-12 17-1 8-13 6-13-1M16 17c0-10 14-10 12 0-1 5-8 6-9 11"/>',
 notebook:'<rect x="9" y="4" width="28" height="36" rx="4"/><path d="M15 4v36M5 11h8m-8 10h8m-8 10h8m7-18h12m-12 7h12m-12 7h8"/>',
 heart:'<path d="M22 37 6 22C-6 7 13-3 22 10c9-13 28-3 16 12Z"/>',
 chat:'<path d="M5 6h34v25H20L9 40v-9H5Z"/><path d="M12 14h20m-20 8h14"/>',
 flag:'<path d="M9 41V4m0 2c10-8 16 9 27 0v21c-11 9-17-8-27 0"/>',
 sprout:'<path d="M22 39V18M22 26C4 28 2 8 7 7c16-1 16 12 15 19Zm0-7C22 4 37 1 39 6c3 12-8 19-17 13Z"/>',
 people:'<circle cx="22" cy="10" r="6"/><circle cx="7" cy="22" r="4"/><circle cx="37" cy="22" r="4"/><path d="M12 32v-6c0-12 20-12 20 0v6M1 39v-5c0-8 12-8 12 0v5m18 0v-5c0-8 12-8 12 0v5"/>',
 beacon:'<path d="M16 38 19 17h6l3 21M14 38h16M15 17h14l-7-11ZM22 1v3M5 6l6 4m22 0 6-4M2 19h8m24 0h8"/>',
 eye:'<path d="M2 22c12-22 28-22 40 0-12 22-28 22-40 0Z"/><circle cx="22" cy="22" r="8"/>',
 globe:'<circle cx="22" cy="22" r="19"/><ellipse cx="22" cy="22" rx="9" ry="19"/><path d="M3 22h38M7 11h30M7 33h30"/>',
 lock:'<rect x="7" y="19" width="30" height="22" rx="4"/><path d="M13 19v-8c0-13 18-13 18 0v8m-9 8v7"/>',
 shield:'<path d="m22 3 17 6v13c0 11-17 19-17 19S5 33 5 22V9Z"/><path d="m13 22 6 6 13-14"/>',
 leaf:'<path d="M7 35C-1 9 19 3 39 5c-1 20-7 39-32 30Zm0 4L30 14M14 30V17m9 7h10"/>',
 tree:'<path d="M22 41V23m0 9L12 21m10 6 10-9"/><path d="M9 29C-2 22 3 9 13 9 15-3 35 0 34 12c13 5 9 21-4 21Z"/>',
 garden:'<path d="M3 38h38M10 38V21m12 17V13m12 25V23M10 28C0 24 2 12 10 21c8-9 11 3 0 7Zm12-9c-11-5-8-17 0-8 8-9 11 3 0 8Zm12 11c-11-5-8-17 0-8 8-9 11 3 0 8Z"/>',
 bell:'<path d="M7 31h30l-5-8V16c0-15-20-15-20 0v7ZM17 37q5 7 10 0M22 1v4"/>',
 pulse:'<path d="M1 22h9l6-16 11 32 6-16h10"/>',
 wrench:'<path d="M29 3a12 12 0 0 0-14 16L3 31a7 7 0 0 0 10 10l12-14A12 12 0 0 0 41 13l-10 6-7-7Z"/>',
 gauge:'<path d="M5 35a19 19 0 1 1 34 0ZM22 27 33 12M7 22h5m20 0h5M22 5v6"/><circle cx="22" cy="27" r="3"/>',
 battery:'<rect x="7" y="9" width="30" height="32" rx="4"/><path d="M16 9V3h12v6m-5 6-7 12h12l-7 10"/>',
 valve:'<path d="M1 16h10l22 13h10V15H33L11 29H1ZM22 22V6M12 6h20"/>',
 radio:'<rect x="10" y="12" width="24" height="29" rx="4"/><path d="M14 12V2m4 19h8m-8 6h8m-8 6h8M29 3l5 4m-5-6 10 6"/>',
 lifebuoy:'<circle cx="22" cy="22" r="19"/><circle cx="22" cy="22" r="9"/><path d="m9 9 7 7m12 12 7 7M9 35l7-7M28 16l7-7"/>',
 lighthouse:'<path d="m13 41 4-25h10l4 25M10 41h24M14 16V8l8-5 8 5v8ZM4 9l-3-2m39 2 3-2M16 26h13"/>',
 lens:'<circle cx="18" cy="18" r="14"/><path d="m28 28 13 13M10 15q2-7 9-7"/>',
 tags:'<path d="M3 6h20l18 18-17 17L3 20Z"/><circle cx="12" cy="14" r="3"/><path d="m24 17 9 9"/>',
 search:'<rect x="3" y="3" width="28" height="35" rx="3"/><circle cx="24" cy="25" r="9"/><path d="m31 32 10 10M9 10h16M9 17h8"/>',
 flask:'<path d="M15 3h14M18 3v15L5 36q-2 5 5 5h24q7 0 5-5L26 18V3M11 29h22"/><circle cx="22" cy="34" r="2"/>',
 funnel:'<path d="M3 5h38L27 24v13l-10 5V24Z"/><path d="M9 12h26"/>',
 prism:'<path d="m10 35 12-28 12 28ZM1 19l15 6m12 1 15-11m-14 16 14-2m-11 6 11 7"/>',
 telescope:'<path d="m3 15 29-12 7 17-29 12ZM25 6l7 17M21 28l-9 15m9-15 12 15m-12-15v15"/>',
 chip:'<rect x="9" y="9" width="26" height="26" rx="4"/><path d="M16 9V2m12 7V2M16 42v-7m12 7v-7M9 16H2m7 12H2m40-12h-7m7 12h-7M16 16h12v12H16Z"/>',
 steps:'<path d="M3 39h10V28h10V17h10V5h8M4 18 21 3m-10 0h10v10"/>',
 checklist:'<rect x="7" y="5" width="30" height="36" rx="3"/><path d="m12 13 3 3 5-6m-8 15 3 3 5-6m4-7h8m-8 12h8m-19 7h19"/>',
 satellite:'<path d="m16 14 14 14-9 9L7 23ZM5 7l8 8-7 7-8-8Zm25 20 8 8-7 7-8-8ZM24 20l9-9m-4-7 11 11M27 1q17-2 16 16"/>',
};
export function renderCourseBot({course,xp=0,level,decorative=true}={}){
 const stages=courseEvolutions(course),stage=level===undefined?courseEvolutionFor(course,xp):stages[Math.max(0,Math.min(9,level))],n=stage.level,t=themes[course];
 const heads={square:'<rect x="43" y="39" width="94" height="65" rx="13"/>',hex:'<path d="m53 39 74 0 14 17v32l-14 17H53L39 88V56Z"/>',round:'<rect x="40" y="39" width="100" height="65" rx="30"/>',leaf:'<path d="M43 68q0-38 47-34 48-4 48 34v13q0 26-48 25-47 1-47-25Z"/>',visor:'<path d="M42 66q0-31 48-31t48 31v25q-48 28-96 0Z"/>',lens:'<rect x="42" y="39" width="96" height="65" rx="22"/>',antenna:'<path d="M49 40h82l8 17v33l-12 14H53L41 90V57Z"/>'};
 let top='<circle cx="90" cy="24" r="5"/>';
 // Course headgear stays thematic; overall Pip owns the shared crown progression.
 if(n>0){
  if(course==='fundamentals')top=`<path d="M59 33q2-${16+n*2} 31-${16+n*2}t31 ${16+n*2}H59Z"/><path d="M90 ${17-n*2}v16M54 34h72"/>${n>=6?'<path d="M72 23v9m9-13v13m18-13v13m9-9v9"/>':''}${n===9?'<path d="M71 13V4h12v9m14 0V1h12v12"/>':''}`;
  if(course==='hard-parts')top=`<path d="M66 34h48M72 34V18m36 16V18M72 18h36"/><circle cx="72" cy="15" r="${4+n/3}"/><circle cx="108" cy="15" r="${4+n/3}"/>${n>=4?'<path d="M90 18V5"/><circle cx="90" cy="3" r="6"/>':''}${n>=7?'<path d="m66 15-9-7m57 7 9-7"/><circle cx="54" cy="6" r="4"/><circle cx="126" cy="6" r="4"/>':''}`;
  if(course==='staff-engineer')top=`<path d="M58 34q32-${12+n} 64 0H58Z"/>${n>=3?'<path d="M65 29q25-13 50 0"/>':''}${n>=6?'<path d="m62 34-9-7 3-9 8 9m54 7 9-7-3-9-8 9"/>':''}${n>=8?'<path d="m69 25-5-10 9-2 3 9m35 3 5-10-9-2-3 9"/>':''}${n===9?'<path d="m82 21-5-12 10-1 3 11 3-11 10 1-5 12"/>':''}`;
  if(course==='responsible-engineering')top=`<path d="M90 34V${23-n*2}"/><path d="M90 30Q${68-n} ${9+n} 73 12q18-1 17 18Z"/>${n>=3?'<path d="M90 22q21-26 23-12 0 16-23 12Z"/>':''}${n>=6?'<path d="M90 14Q74-8 87-6q15 4 3 20Z"/>':''}${n===9?'<path d="M61 35q-10-18 2-15 12 5 8 15m48 0q10-18-2-15-12 5-8 15"/>':''}`;
  if(course==='sre')top=`<path d="M58 34q4-${14+n} 32-${14+n}t32 ${14+n}Z"/><rect x="80" y="${22-n/2}" width="20" height="12" rx="3"/><circle cx="90" cy="${28-n/2}" r="4"/>${n>=5?'<path d="M63 24V9m54 15V9"/><circle cx="63" cy="6" r="3"/><circle cx="117" cy="6" r="3"/>':''}${n>=8?'<path d="M79 12h22m-17-5h12"/>':''}`;
  if(course==='observability')top=`<path d="M56 34h68M63 33q2-${14+n} 27-${14+n}t27 ${14+n}"/>${n>=3?'<path d="M68 26h44"/>':''}${n>=6?'<path d="m71 27 5-20 14 8 14-8 5 20"/>':''}${n>=8?'<circle cx="91" cy="22" r="7"/><path d="m96 27 7 5"/>':''}`;
  if(course==='ai-agents')top=`<path d="M64 34h52M77 34V18h26v16"/><path d="M82 19v-7m8 7V8m8 11v-7M82 25h16"/>${n>=4?'<ellipse cx="90" cy="18" rx="36" ry="10" fill="none"/><circle cx="56" cy="16" r="4"/>':''}${n>=7?'<path d="M72 6h36m-25 0V0m14 6V0"/>':''}${n===9?'<path d="m119 6 4 6 7 1-5 5 1 7-6-4-6 2 1-7-5-5 7-1Z"/>':''}`;
 }
 const shoulders=n>=3?`<path d="m54 102-14 9 4 18 14-5m68-22 14 9-4 18-14-5" fill="${t.accent}" stroke="${t.dark}" stroke-width="2"/>`:'';
 const back=n>=6?`<path class="pip-cape" d="m60 95-20 56 25-7 25 13 25-13 25 7-20-56Z" fill="${t.color}" stroke="${t.dark}" stroke-width="2"/>`:'';
 const ears=t.shape==='visor'?'<path d="M37 61v27m106-27v27M39 56q51-49 102 0" stroke-width="7"/>':t.shape==='round'?'<path d="M38 67h-7v18h9m100-18h7v18h-7"/>':t.shape==='antenna'?'<path d="m50 42-12-17m92 17 12-17"/><circle cx="36" cy="22" r="5"/><circle cx="144" cy="22" r="5"/>':t.shape==='leaf'?'<path d="M42 53q-22-26-18 0 4 14 18 0Zm96 0q22-26 18 0-4 14-18 0Z"/>':'';
 return `<svg class="pip-avatar course-pip-avatar" data-pip-course="${course}" data-pip-level="${n}" data-pip-gear="${stage.gear}" viewBox="0 0 180 175" fill="none" ${decorative?'aria-hidden="true"':`role="img" aria-label="${stage.name}"`}><ellipse cx="90" cy="160" rx="55" ry="8" fill="${t.dark}" opacity=".13"/><g class="bot-body">${back}<path d="m70 127-9 22m49-22 9 22" stroke="${t.dark}" stroke-width="9" stroke-linecap="round"/>${n>=4?`<path d="M49 150h23m36 0h23" stroke="${t.accent}" stroke-width="9" stroke-linecap="round"/>`:''}${shoulders}<rect x="55" y="94" width="70" height="43" rx="${t.shape==='hex'?8:17}" fill="${t.color}" stroke="${t.dark}" stroke-width="3"/><path d="m55 108-17 12m87-12 16 13" stroke="${t.dark}" stroke-width="7" stroke-linecap="round"/><g fill="${t.color}" stroke="${t.dark}" stroke-width="2">${ears}${heads[t.shape]}</g><rect x="52" y="51" width="76" height="36" rx="${t.shape==='square'?7:14}" fill="${t.dark}"/><g class="bot-eyes" fill="#f6f4d3"><rect x="67" y="61" width="7" height="12" rx="3"/><rect x="106" y="61" width="7" height="12" rx="3"/></g><path d="M84 76q6 5 12 0" stroke="#f6f4d3" stroke-width="2" stroke-linecap="round"/>${t.shape==='lens'?'<circle cx="109" cy="66" r="13" stroke="#f6f4d3" stroke-width="2"/><path d="m120 75 11 8" stroke="#f6f4d3" stroke-width="3"/>':''}<path d="M90 26v15" stroke="${t.dark}" stroke-width="2"/><g transform="translate(0 7)" fill="${t.accent}" stroke="${t.dark}" stroke-width="2" stroke-linejoin="round">${top}</g><g transform="translate(15 107) scale(.9)" stroke="${t.dark}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" fill="${t.accent}">${props[stage.gear]}</g><circle cx="94" cy="115" r="12" fill="${t.dark}"/><g transform="translate(85 106) scale(.41)" stroke="#fff3c6" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none">${props[stage.gear]}</g>${n>=2?`<path d="M113 107v17" stroke="${t.accent}" stroke-width="4" stroke-dasharray="${n>=7?'3 2':'12 0'}"/>`:''}${n>=5?`<g class="pip-guiding-light" stroke="${t.dark}" stroke-width="2"><path d="M144 118V84"/><circle cx="144" cy="80" r="${n>=8?9:6}" fill="${t.accent}"/></g>`:''}${n===9?`<g class="pip-constellation" fill="${t.accent}" stroke="${t.dark}"><path d="m17 44 9-14 128 0 10 14" stroke-dasharray="3 5"/><path d="m22 18 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Zm134 0 3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1Z"/></g>`:''}</g></svg>`;
}
