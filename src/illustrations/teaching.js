// Front-facing teaching surfaces: data and relationships, not decorative props.
// All typography is embedded for standalone SVG export. Recipes own domain facts.
const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const ink='#394738',muted='#626c60',line='#dce2d6',paper='#fffdf6',purple='#775d96',green='#658554',orange='#ba5f38';
const tones=['#e8eddd','#ede4f4','#fbe4d5','#fff0c5'];
const text=(x,y,value,{size=18,fill=ink,weight=500,anchor='start'}={})=>`<text x="${x}" y="${y}" fill="${fill}" stroke="none" text-anchor="${anchor}" font-family="sans-serif" font-size="${size}" font-weight="${weight}">${esc(value)}</text>`;
const rect=(x,y,w,h,fill,stroke='none',r=8)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${fill}" stroke="${stroke}"/>`;
const check=(ok,message)=>{if(!ok)throw new Error(`Invalid teaching illustration: ${message}`)};
export function validateTeaching(t){
 check(t&&['table','bars','timeline','compare','equation','flow'].includes(t.kind),'kind');
 check(typeof t.title==='string'&&t.title.length>0&&t.title.length<=42,'short title');
 check(typeof t.note==='string'&&t.note.length<=66,'example boundary');
 check(!t.frames||(Array.isArray(t.frames)&&t.frames.length<=3),'maximum three frames');
 if(t.kind==='table'){
  check(Array.isArray(t.columns)&&t.columns.length>=2&&t.columns.length<=4,'columns');
  check(Array.isArray(t.rows)&&t.rows.length>=2&&t.rows.length<=5,'rows');
  check(t.rows.every(r=>Array.isArray(r)&&r.length===t.columns.length),'table dimensions');
  for(const f of t.frames||[]){if(f.column!==undefined)check(Number.isInteger(f.column)&&f.column>=0&&f.column<t.columns.length,'column focus');if(f.row!==undefined)check(Number.isInteger(f.row)&&f.row>=0&&f.row<t.rows.length,'row focus');}
 }
 if(t.kind==='bars'){
  check(Number.isFinite(t.max)&&t.max>0,'bar scale');
  check(Array.isArray(t.items)&&t.items.length>=2&&t.items.length<=4,'bar count');
  check(t.items.every(v=>typeof v.label==='string'&&Number.isFinite(v.value)&&v.value>=0&&v.value<=t.max),'bar values');
 }
 if(t.kind==='timeline'){
  check(Number.isFinite(t.max)&&t.max>0,'time scale');
  check(t.items?.length>=2&&t.items.length<=4,'timeline rows');
  check(t.items.every(v=>Number.isFinite(v.start)&&Number.isFinite(v.end)&&v.start>=0&&v.end>v.start&&v.end<=t.max),'time spans');
 }
 if(t.kind==='compare')check(t.sides?.length===2&&t.sides.every(s=>s.lines?.length>=1&&s.lines.length<=4),'two comparisons');
 if(t.kind==='equation')check(t.terms?.length===3&&t.terms.every(v=>v.value&&v.label),'three terms');
 if(t.kind==='flow'){
  check(t.items?.length>=3&&t.items.length<=5,'flow nodes');
  const ids=new Set(t.items.map(v=>v.id));check(ids.size===t.items.length,'flow identities');
  check(t.items.every(v=>Number.isFinite(v.x)&&Number.isFinite(v.y)&&v.x>=85&&v.x<=395&&v.y>=150&&v.y<=310),'flow positions');
  check(t.links?.every(v=>ids.has(v.from)&&ids.has(v.to)&&(!v.via||(v.via.length===2&&v.via.every(Number.isFinite)))),'flow links');
 }
}
function table(t,f){
 const w=408/t.columns.length,h=37,y=128;
 let s=rect(36,y,408,(t.rows.length+1)*h,paper,line,10);
 if(f.column!==undefined)s+=rect(36+w*f.column,y,w,(t.rows.length+1)*h,tones[1]);
 if(f.row!==undefined)s+=rect(36,y+h*(f.row+1),408,h,tones[2]);
 t.columns.forEach((c,i)=>s+=text(36+w*(i+.5),y+24,c,{size:t.columns.length===4?17:19,weight:700,anchor:'middle',fill:purple}));
 t.rows.forEach((r,i)=>{s+=`<path d="M36 ${y+h*(i+1)}H444" stroke="${line}"/>`;r.forEach((c,j)=>s+=text(36+w*(j+.5),y+h*(i+1)+25,c,{size:20,anchor:'middle'}));});
 const badges=t.distinct?t.columns.map((_,i)=>new Set(t.rows.map(r=>r[i])).size+' distinct'):t.footer;
 if(badges)badges.forEach((c,i)=>s+=text(36+w*(i+.5),y+h*(t.rows.length+1)+26,c,{size:18,weight:700,anchor:'middle',fill:i===f.column?purple:muted}));
 return s;
}
function bars(t,f){
 const h=196/t.items.length;let s='';
 t.items.forEach((v,i)=>{const y=134+i*h; s+=text(40,y,v.label,{size:17,weight:600});s+=text(436,y,`${v.value}${t.unit||''}`,{size:17,weight:700,anchor:'end',fill:i===f.item?purple:ink});s+=rect(40,y+12,396,18,'#eceee6',undefined,6)+rect(40,y+12,396*v.value/t.max,18,i===f.item?'#ad91c4':i===t.warn?'#eaa07a':'#9eb78a',undefined,6);});
 return s+text(40,351,`Scale: 0–${t.max}${t.unit||''}`,{size:15,fill:muted});
}
function timeline(t,f){
 let s='';const x=146,w=290,h=176/t.items.length;
 [0,.5,1].forEach(n=>{s+=`<path d="M${x+w*n} 146V324" stroke="${line}" stroke-dasharray="3 5"/>`+text(x+w*n,137,`${t.max*n}${t.unit||''}`,{size:15,anchor:'middle',fill:muted});});
 t.items.forEach((v,i)=>{const y=163+i*h,start=x+w*v.start/t.max,end=x+w*v.end/t.max,short=end-start<58;s+=text(40,y+17,v.label,{size:16,weight:600});s+=rect(start,y,end-start,29,i===f.item?'#ae95c3':tones[i%4],line,5);s+=text(short?(end<385?end+8:start-8):(start+end)/2,y+20,`${v.end-v.start}${t.unit||''}`,{size:15,weight:600,anchor:short?(end<385?'start':'end'):'middle'});});return s;
}
function compare(t,f){
 return t.sides.map((v,i)=>{const x=36+210*i;let s=rect(x,130,198,202,i===f.item?tones[1]:tones[i*2],line,12)+text(x+16,159,v.title,{size:18,weight:700,fill:purple});v.lines.forEach((l,j)=>s+=text(x+16,199+j*31,l,{size:17}));return s;}).join('');
}
function equation(t,f){
 let s='';t.terms.forEach((v,i)=>{const x=36+i*146;s+=rect(x,153,116,125,i===f.item?tones[1]:tones[i],line,12)+text(x+58,195,v.value,{size:22,weight:700,anchor:'middle'})+text(x+58,224,v.unit||'',{size:17,anchor:'middle',fill:purple})+text(x+58,258,v.label,{size:15,anchor:'middle'});if(i<2)s+=text(x+130,218,i===0?t.operator||'×':'=',{size:24,anchor:'middle'});});return s;
}
function flow(t,f){
 let s='';const byId=new Map(t.items.map(v=>[v.id,v]));
 t.links.forEach(v=>{
  const a=byId.get(v.from),b=byId.get(v.to),control=v.via?{x:v.via[0],y:v.via[1]}:null;
  const dx=(control||b).x-a.x,dy=(control||b).y-a.y,l=Math.hypot(dx,dy),tx=b.x-(control||a).x,ty=b.y-(control||a).y,tl=Math.hypot(tx,ty);
  const sx=a.x+dx/l*58,sy=a.y+dy/l*30,ex=b.x-tx/tl*62,ey=b.y-ty/tl*32,ang=Math.atan2(ty,tx);
  const path=`M${sx} ${sy}${control?`Q${control.x} ${control.y} `:'L'}${ex} ${ey}`;
  s+=`<path d="${path}" fill="none" stroke="${v.dashed?purple:green}" stroke-width="2" ${v.dashed?'stroke-dasharray="5 5"':''}/><path d="M-7-4 0 0-7 4" fill="none" stroke="${green}" stroke-width="2" transform="translate(${ex} ${ey}) rotate(${ang*180/Math.PI})"/>`;
  if(v.label){const mx=control?(sx+2*control.x+ex)/4:(sx+ex)/2,my=control?(sy+2*control.y+ey)/4:(sy+ey)/2;s+=text(mx+(dx>=0?36:-36),my-14,v.label,{size:14,anchor:'middle',fill:muted});}
 });
 t.items.forEach((v,i)=>{s+=rect(v.x-57,v.y-25,114,51,i===f.item?tones[1]:tones[i%4],line,10)+text(v.x,v.y-3,v.label,{size:16,weight:600,anchor:'middle'})+text(v.x,v.y+17,v.detail||'',{size:14,anchor:'middle',fill:muted});});return s;
}
export function renderTeachingScene(scene,pipGeometry){
 const t=scene.teaching;validateTeaching(t);
 const render={table,bars,timeline,compare,equation,flow}[t.kind];
 const count=Math.max(1,scene.sequence.length),frames=Array.from({length:count},(_,i)=>t.frames?.[i]||{});
 const description=[scene.title,t.title,t.note,JSON.stringify(t.kind==='table'?{columns:t.columns,rows:t.rows,distinct:t.distinct}:t.items||t.sides||t.terms)].join('. ');
 const pip=scene.nodes[0];
 return `<svg class="iso-scene teaching-scene" data-teaching="${t.kind}" data-sequence="${esc(JSON.stringify(scene.sequence))}" viewBox="0 0 480 420" role="img" aria-label="${esc(description)}" xmlns="http://www.w3.org/2000/svg"><title>${esc(t.title)}</title>${rect(8,10,464,402,paper,line,20)}<path d="M88 73Q102 91 126 95" fill="none" stroke="${purple}" stroke-width="2" stroke-linecap="round"/><circle cx="126" cy="95" r="3" fill="${purple}"/><g class="iso-node teaching-pip" data-iso-node="${esc(pip.id)}" data-kind="pip" transform="translate(63 58)"><g class="iso-object float-block">${pipGeometry}</g></g>${text(121,39,'PIP’S FIELD DEMO',{size:13,weight:700,fill:purple})}${text(121,68,t.title,{size:t.title.length>26?17:20,weight:700})}<path d="M36 103H444" stroke="${line}"/>${frames.map((f,i)=>`<g class="teaching-board" data-teaching-frame="${i}" style="display:${i===0?'inline':'none'}">${render(t,f)}${f.callout?text(240,375,f.callout,{size:17,weight:600,anchor:'middle',fill:purple}):''}</g>`).join('')}${text(240,398,t.note,{size:13,anchor:'middle',fill:muted})}</svg>`;
}
