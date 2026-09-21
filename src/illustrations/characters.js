// Recognizable actors and materials for narrative teaching scenes.
// Rounded silhouettes and purposeful hands match the scenic course paintings.
const shape=(d,fill)=>`<path d="${d}" fill="${fill}" stroke="none"/>`;
const line=(d,stroke,width=2)=>`<path d="${d}" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
const ellipse=(x,y,rx,ry,fill)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${fill}" stroke="none"/>`;

export function woodenLogGeometry(p={top:'#fff0d4',right:'#ed942d',left:'#ad5e22'}){
 // Build one straight cylinder before rotating it: the end rings share a
 // center and aspect ratio, and every grain mark follows the cylinder axis.
 const grain=[[-20,-16,15],[4,-16,10],[23,-16,10],[-14,-8,23],[18,-8,18],[-18,1,10],[1,1,16],[26,1,10],[-13,10,20],[16,10,15],[-17,18,10],[3,18,14]];
 const raisedGrain=new Set([1,3,9]);
 return `<g class="wooden-log" stroke="none"><g transform="translate(0 7) rotate(-18)">
  ${shape('M-33-25H33a16 25 0 0 1 0 50H-33Z',p.right)}
  ${shape('M-33 15H45.8A16 25 0 0 1 33 25H-33Z',p.left)}
  ${grain.map(([x,y,length],i)=>{
   const d=`M${x} ${y}h${length}`;
   return raisedGrain.has(i)?line(d,p.top,6.5)+line(d,'#ffffff',2.8):`<g opacity=".65">${line(d,p.top,2.2)}</g>`;
  }).join('')}
  ${ellipse(-33,0,16,25,p.left)}${ellipse(-33,0,14.5,23,p.top)}
  ${[.74,.4].map(scale=>`<ellipse cx="-33" cy="0" rx="${14.5*scale}" ry="${23*scale}" fill="none" stroke="${p.right}" stroke-width="1.4"/>`).join('')}
  ${ellipse(-33,0,1.5,2.4,p.right)}
 </g></g>`;
}

export function beaverGeometry(){
 return `<g class="story-beaver" stroke="none">
  <g transform="rotate(-28 -31 25)">${ellipse(-36,27,17,31,'#653956')}${line('M-49 8-25 32m-26-13 25 24m-20-44 20 20m-25 9 26-25m-24 39 27-27m-23 40 23-23','#3a2045',1.8)}</g>
  ${ellipse(-9,45,13,6,'#382039')}${ellipse(17,45,13,6,'#382039')}
  ${shape('M-26 9q-2-25 29-26t32 27l-1 24q-24 27-53 8Z','#e87e20')}
  ${shape('M-19 7q11 14 35 1l5 34q-18 11-34-1Z','#bd6033')}
  ${ellipse(12,-39,6,7,'#bd6033')}
  ${shape('M-29-13C-34-28-20-44-2-44 15-44 27-35 30-23L35-17Q40-10 33-4 25 4 13 3L-9 2Q-24 0-29-13Z','#f59427')}
  ${ellipse(-15,-35,7,8,'#f59427')}${ellipse(-15,-35,3.5,4.5,'#713249')}
  <g transform="rotate(20 10 -25)">${ellipse(10,-25,4.2,1.9,'#271931')}${ellipse(12.2,-25,.8,.8,'#ffffff')}</g>
  ${shape('M29-17Q35-19 38-15 37-11 32-10 28-12 29-17Z','#271931')}
  ${shape('M23-2H32L31.5 5Q27.5 6 23.5 5Z','#fff6dc')}
  ${line('M27.5-1v6','#d6bb8e',.8)}
  ${shape('M-7 12 19 5l8 34-26 7Z','#49316d')}${shape('M-2 16 16 11l5 23-19 6Z','#fff0d4')}
  ${line('m3 21 11-3m-10 8 11-3','#a898b9',1.7)}
  <g class="people-gesture">${shape('M27 11q17-11 21-1t-19 11Z','#e87e20')}${ellipse(43,11,7,5,'#382039')}${line('M44 7 50-7','#7546d9',3)}</g>
  ${ellipse(-4,25,8,6,'#382039')}
 </g>`;
}

export function robotGeometry(p){
 return `<g class="story-robot" stroke="none">
  ${ellipse(0,55,23,5,p.left)}${ellipse(0,55,16,3,p.top)}
  ${shape('M-24 1q0-17 24-17T24 1l-5 30Q0 51-19 31Z','#ffffff')}
  ${shape('M8-13q22 2 16 22l-5 22Q10 44 1 39 18 17 8-13Z',p.top)}
  ${ellipse(0,1,13,6,p.left)}${ellipse(0,0,9,3,p.right)}
  ${ellipse(0,-31,32,28,'#ffffff')}${shape('M7-58q29 6 25 32T8-4q13-29-1-54Z',p.top)}
  ${shape('M-27-40q18-10 45-4 6 11 0 27-24 9-45-2Z',p.ink)}
  ${line('M-18-29q4-9 8 0M1-30q4-9 8 0','#ffffff',3)}
  ${ellipse(28,-29,8,12,p.left)}${ellipse(29,-30,5,8,p.right)}
  ${ellipse(-24,6,8,8,p.right)}${line('M-26 9-34 26-22 32',p.top,6)}${ellipse(-33,25,5,5,p.left)}${ellipse(-21,32,6,5,p.right)}
  <g class="people-gesture">${ellipse(24,6,8,8,p.right)}${line('M27 9 39 22 48 3',p.top,6)}${ellipse(39,22,5,5,p.left)}${ellipse(48,2,6,5,p.right)}${line('M47 1 44-6m5 8 6-5',p.right,3)}</g>
  ${shape('M-8 15h16v12H-8Z',p.left)}${line('M-4 21h8','#ffffff',2)}
 </g>`;
}
