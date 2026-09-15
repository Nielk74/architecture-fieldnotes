import {roleGeometry, primitiveDescriptions} from './primitives.js';
import {renderCourseBot,courseThemes} from './course-sidekicks.js';
import {renderTeachingScene} from './teaching.js';
import {threeBeatSequence} from './sequence.js';
export {primitiveDescriptions} from './primitives.js';
/** Small, dependency-free SVG scene renderer. Scene data is separate from geometry. */
export const palettes = {
  sage: { top: '#f7faef', left: '#d6e2c8', right: '#e7eedc', stroke: '#8d9e7b', ink: '#526442' },
  lilac: { top: '#f3ecfc', left: '#c8b6df', right: '#e2d4ef', stroke: '#a08ab8', ink: '#715a8b' },
  peach: { top: '#ffb68f', left: '#eb8a60', right: '#f49c74', stroke: '#cc7957', ink: '#80472f' },
  honey: { top: '#fff1bb', left: '#e5c773', right: '#f3dfa0', stroke: '#bba15b', ink: '#79652f' },
};
let sceneSerial=0;
const escape = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const number = (value, fallback) => Number.isFinite(value) ? value : fallback;
const types = new Set(['block', 'database', 'document', 'gateway', 'person', ...Object.keys(primitiveDescriptions)]);

function geometry(node, p) {
  if(node.kind==='pip') {
    const course=Object.hasOwn(courseThemes,node.course)?node.course:'fundamentals';
    const bot=renderCourseBot({course,xp:number(node.xp,0)}).replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
    return `<g class="story-pip-avatar" data-story-course="${escape(course)}" data-story-xp="${number(node.xp,0)}" fill="none" transform="translate(-51 -66) scale(.57)">${bot}</g>`;
  }
  const role=roleGeometry(node.kind,p);if(role)return role;
  const w = number(node.width, 100), h = number(node.height, 37), a = w / 2, d = w / 4;
  if (node.kind === 'database') return `<path d="M${-a} 0v${h}a${a} 16 0 0 0 ${w} 0V0" fill="${p.right}"/><ellipse cy="${h}" rx="${a}" ry="16" fill="${p.left}"/><path d="M${-a} 0v${h}m${w} 0V0M${-a} ${h/2}a${a} 16 0 0 0 ${w} 0" fill="none"/><ellipse rx="${a}" ry="16" fill="${p.top}"/><text y="4" class="iso-label" fill="${p.ink}">${escape(node.label)}</text>`;
  if (node.kind === 'document') return `<path d="m-34-45 51-13 18 12v78l-69 18Z" fill="${p.left}"/><path d="m-30-48 51-13 18 12v78l-69 18Z" fill="${p.top}"/><path d="m21-61 0 18 18-6" fill="${p.right}"/><path d="m-17-17 40-10m-40 23 40-10m-40 23 30-8" fill="none" stroke-width="2"/><circle cx="23" cy="29" r="17" fill="${p.right}"/><path d="m15 28 6 6 12-14" fill="none" stroke-width="2"/>`;
  if (node.kind === 'gateway') return `<path d="m-42 36 0-63 75-19 10 7v62l-12 4V-28L-29-13v52Z" fill="${p.right}"/><path d="m-42-27 75-19 10 7-72 19Z" fill="${p.top}"/><path d="m-42-27 13 7v59l-13-3Z" fill="${p.left}"/><path d="m-22 12 53-14" stroke="${p.ink}" stroke-width="4" stroke-dasharray="8 4"/><circle cx="5" cy="-9" r="16" fill="${p.top}"/><path d="m-2-10 6 6 9-13" fill="none" stroke-width="2"/>`;
  if (node.kind === 'person') return `<ellipse cy="49" rx="28" ry="11" fill="${p.left}" opacity=".5" stroke="none"/><path d="m-10 25-4 23m24-23 4 23" fill="none" stroke-width="7" stroke-linecap="round"/><path d="M-23 25V10q0-31 46 0v15Z" fill="${p.right}"/><circle cy="-22" r="18" fill="${p.top}"/><path d="M-7-20h1m12 0h1" stroke-width="3" stroke-linecap="round"/><path d="M-5-12q5 5 10 0" fill="none"/>`;
  return `<path d="M${-a} 0v${h}l${a} ${d}V${d}Z" fill="${p.left}"/><path d="M0 ${d}l${a} ${-d}v${h}L0 ${d+h}Z" fill="${p.right}"/><path d="M${-a} 0 0 ${-d} ${a} 0 0 ${d}Z" fill="${p.top}"/><text y="4" class="iso-label" fill="${p.ink}">${escape(node.label)}</text>${node.windows?`<path d="M12 ${d+12}l13-6m7-4 9-4M12 ${d+24}l13-6m7-4 9-4" stroke="${p.stroke}" stroke-width="4"/>`:''}`;
}

/** Returns an accessible SVG string. IDs are local data attributes, so scenes can repeat. */
export function renderScene({ title, nodes = [], edges = [], platform = true, className = '', theme = 'sage', sequence = [], teaching }) {
  const effectId=`iso-light-${++sceneSerial}`;
  sequence=sequence.length?sequence:nodes.map(n=>({node:n.id,text:n.caption||n.label}));
  if (!title) throw new Error('An illustration needs an accessible title.');
  const byId = new Map();
  nodes.forEach(n => {
    if (!n.id || byId.has(n.id)) throw new Error('Scene node IDs must be present and unique.');
    if (!Number.isFinite(n.x) || !Number.isFinite(n.y)) throw new Error(`Invalid coordinates for ${n.id}`);
    if (n.kind && !types.has(n.kind)) throw new Error(`Unknown illustration primitive: ${n.kind}`);
    byId.set(n.id, n);
  });
  sequence.forEach(step=>{
    if(!byId.has(step.node))throw new Error('An illustration step references a missing node.');
    for(const [id,state] of Object.entries(step.states||{})) {
      if(!byId.has(id)||!['working','idle','off','blocked','ready'].includes(state))throw new Error('Invalid illustration state.');
    }
  });
  sequence=threeBeatSequence(sequence);
  if(teaching){
    if(nodes.length!==1||nodes[0].kind!=='pip')throw new Error('Teaching scenes need their course Pip presenter.');
    return renderTeachingScene({title,nodes,sequence,teaching},geometry(nodes[0],palettes[theme]||palettes.sage));
  }
  const connections = edges.map((edge, i) => {
    const from = byId.get(edge.from), to = byId.get(edge.to);
    if (!from || !to) throw new Error('An illustration edge references a missing node.');
    const path = `M${from.x} ${from.y+24} L${to.x} ${to.y+24}`;
    return `<g class="iso-edge" data-from="${escape(edge.from)}" data-to="${escape(edge.to)}"><path d="${path}" fill="none" stroke="#9eac92" stroke-width="1.6" ${edge.dashed?'stroke-dasharray="5 5"':''}/>${edge.flow===false?'':`<path class="iso-packet packet" d="${path}" pathLength="100" fill="none" stroke="${edge.color==='lilac'?'#9a77b6':'#ec865d'}" stroke-width="3" style="animation-delay:${i*-.8}s"/><circle class="iso-traveler" cx="${from.x}" cy="${from.y+24}" r="4" fill="#ed895d" style="--travel-x:${to.x-from.x}px;--travel-y:${to.y-from.y}px;animation-delay:${i*-.8}s"/>`}</g>`;
  }).join('');
  // Painter order follows depth; stable IDs let callers highlight objects independently.
  const objects = [...nodes].sort((a,b)=>a.y-b.y).map((n,i) => {
    const p = palettes[n.tone] || palettes[theme] || palettes.sage;
    const shape=geometry(n,p);
    const silhouette=shape.replace(/<text\b[^>]*>[\s\S]*?<\/text>/g,'').replace(/class="[^"]*"/g,'');
    const clipId=`${effectId}-${i}`;
    const role=!!primitiveDescriptions[n.kind];
    const subtitleY = role?78:n.kind==='document'||n.kind==='gateway'||n.kind==='person' ? 73 : (n.kind==='database'?number(n.height,37)+32:number(n.width,100)/4+number(n.height,37)+20);
    return `<g class="iso-node" data-kind="${escape(n.kind||'block')}" data-iso-node="${escape(n.id)}" transform="translate(${n.x} ${n.y})"><g class="iso-work-ring" aria-hidden="true"><ellipse class="iso-work-bloom" cy="${subtitleY-17}" rx="${number(n.width,100)/2+7}" ry="16" fill="${p.stroke}"/><ellipse cy="${subtitleY-17}" rx="${number(n.width,100)/2-4}" ry="9" fill="${p.stroke}" opacity=".22"/></g><ellipse class="iso-shadow" style="animation-delay:${i*-.7}s" cy="${subtitleY-17}" rx="${number(n.width,100)/2}" ry="10" fill="${p.stroke}" opacity=".1"/><g class="iso-object float-block" style="animation-delay:${i*-.7}s" stroke="${p.stroke}" stroke-width="1.2" stroke-linejoin="round"><defs><clipPath id="${clipId}" clipPathUnits="userSpaceOnUse">${silhouette}</clipPath></defs>${shape}<g clip-path="url(#${clipId})" aria-hidden="true" stroke="none" pointer-events="none"><rect class="iso-scan" x="-110" y="-16" width="220" height="32" fill="url(#${effectId})"/></g></g><text y="${subtitleY}" class="iso-subtitle" fill="${p.ink}">${escape(role?n.label:n.caption || (['document','gateway','person'].includes(n.kind)?n.label:''))}</text>${role&&n.caption?`<text y="${subtitleY+14}" class="iso-role-caption" fill="${p.ink}">${escape(n.caption)}</text>`:''}${n.badge?`<g class="iso-badge" transform="translate(30 -37)"><rect x="-26" y="-10" width="72" height="22" rx="5" fill="#fffbed" stroke="${p.stroke}"/><text x="10" y="4" fill="${p.ink}">${escape(n.badge)}</text></g>`:''}</g>`;
  }).join('');
  return `<svg class="iso-scene ${escape(className)}" data-sequence="${escape(JSON.stringify(sequence.length?sequence:nodes.map(n=>({node:n.id,text:n.caption||n.label}))))}" viewBox="0 0 480 375" role="img" aria-label="${escape(title)}" xmlns="http://www.w3.org/2000/svg">${`<defs><linearGradient id="${effectId}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffdf4" stop-opacity="0"/><stop offset=".5" stop-color="#fffdf4" stop-opacity="1"/><stop offset="1" stop-color="#fffdf4" stop-opacity="0"/></linearGradient></defs>`}${platform?'<g class="iso-platform"><path d="m30 250 210-107 210 107-210 108Z" fill="#e4e9dc" fill-opacity=".7" stroke="#bac8ac"/><path d="m30 250v9l210 108 210-108v-9M240 358v9" fill="none" stroke="#bac8ac"/></g>':''}${connections}${objects}</svg>`;
}

export function renderFigure(scene, { label = 'A visual fieldnote', caption = '', theme = 'sage', className = '' } = {}) {
  return `<figure class="iso-figure iso-theme-${escape(theme)} ${escape(className)}"><div class="iso-kicker">${escape(label)}<span aria-hidden="true">↗</span></div>${renderScene(scene)}${caption?`<figcaption>${escape(caption)}</figcaption>`:''}</figure>`;
}

/** Highlight by semantic ID, without depending on SVG drawing order. */
export function highlightScene(root, ids = []) {
  root.querySelectorAll('[data-iso-node]').forEach(node => node.classList.toggle('iso-active', ids.includes(node.dataset.isoNode)));
}
