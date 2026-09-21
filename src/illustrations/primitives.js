import {beaverGeometry,woodenLogGeometry} from './characters.js';
import {peopleGeometry,peopleDescriptions} from './people.js';
import {storyDescriptions,storyGeometry} from './story-geometry.js';
import {machineryGeometry} from './machinery.js';
// Role-specific SVG silhouettes. Shared palette, motion and labeling come from engine.js.
export const primitiveDescriptions = {
 beaver:'A beaver inspector: paddle tail, front teeth, clipboard and pencil',
 log:'A wooden log: bark grain and sawn growth rings; a metaphor for recorded events',
 ...storyDescriptions,
 ...peopleDescriptions,
 boundary:'Scope boundary: a dashed frame around related elements',
 source:'Data source: records emitted through an outgoing arrow',
 storefront:'Customer-facing shop: canopy, display window and door',
 browser:'User interface: screen chrome and content panels',
 service:'Running service: equipment tower and activity lights',
 terminal:'Code or transformation: command window and cursor',
 queue:'Ordered messages: separate envelopes on a conveyor',
 message:'One message or event: sealed envelope',
 cache:'In-memory data: chip with a lightning mark',
 plugin:'Extension: detachable puzzle piece',
 component:'Logical module: interlocking component tabs',
 deployment:'Deployment boundary: dashed enclosure around runtime units',
 gauge:'Measurement or fitness check: dial and moving needle',
 router:'Routing or coordination: hub with directional branches',
 balance:'Trade-off: two pans balanced around a pivot',
 target:'Goal or selection criteria: concentric target',
 team:'Collaboration: several people around one table',
 clock:'Time or repeated practice: clock and rotating hand',
 blueprint:'Architecture view: connected nodes on a drawing board',
};
export function roleGeometry(kind,p){
 if(kind==='beaver')return beaverGeometry();
 if(kind==='log')return woodenLogGeometry(p);
 const machinery=machineryGeometry(kind,p);if(machinery)return machinery;
 const story=storyGeometry(kind,p);if(story)return story;
 const people=peopleGeometry(kind,p);if(people)return people;
 const paper=p.top,side=p.left,front=p.right,ink=p.ink;
 const envelope=(x,y)=>`<g transform="translate(${x} ${y})"><path d="m-24-12 48-10v32l-48 10Z" fill="${paper}"/><path d="m-24-12 24 12 24-22m-48 42 19-23m29 13-19-15" fill="none"/></g>`;
 switch(kind){
 case 'boundary':return `<path d="m-46-29 59-16 33 23v62l-59 16-33-23Z" fill="${paper}" fill-opacity=".4" stroke-dasharray="5 4"/><path d="m-46-29 33 23 59-16m-59 16v62" fill="none" stroke-dasharray="5 4"/><path d="M-25 5 0 18 25 7" fill="none"/>${[[-25,5],[0,18],[25,7]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="${front}"/>`).join('')}`;
 case 'message':return `<g transform="scale(1.65)">${envelope(0,2)}</g>`;
 case 'plugin':return `<path d="M-35-26h22q-8-20 8-20t8 20h22v20q21-8 21 8T25 10v23H3q8-21-8-21t-8 21h-22Z" fill="${side}" transform="translate(7 8)"/><path d="M-35-26h22q-8-20 8-20t8 20h22v20q21-8 21 8T25 10v23H3q8-21-8-21t-8 21h-22Z" fill="${paper}"/>`;
 case 'component':return `<path d="m-29-26 65-14 10 8v68l-65 14-10-8Z" fill="${side}"/><path d="m-19-18 65-14v68l-65 14Z" fill="${paper}"/><path d="m-37-3 29-6v13l-29 6Zm0 27 29-6v13l-29 6Z" fill="${front}"/><path d="m4-5 28-6m-28 24 28-6m-28 24 18-4" fill="none" stroke-width="3"/>`;
 case 'deployment':return `<path d="m-48-26 62-18 34 23v63l-62 18-34-23Z" fill="${paper}" fill-opacity=".45" stroke-dasharray="5 4"/><path d="m-48-26 34 23 62-18m-62 18v63" fill="none" stroke-dasharray="5 4"/>${[-24,7].map(x=>`<g transform="translate(${x} 0)"><path d="m0 0 18-5 12 8v27l-18 5-12-8Z" fill="${front}"/><path d="m0 0 12 8 18-5m-18 5v27" fill="none"/><circle class="role-signal" cx="20" cy="18" r="2" fill="${ink}"/></g>`).join('')}`;
 case 'gauge':return `<ellipse cx="5" cy="6" rx="42" ry="43" fill="${side}"/><circle r="40" fill="${paper}"/><path d="M-28 10a30 30 0 1 1 56 0" fill="none" stroke="${front}" stroke-width="7"/><path d="M-22-19l5 5M0-30v8m22 3-5 5" stroke-width="2"/><g class="role-needle"><path d="M0 0 23-20" stroke="${ink}" stroke-width="3"/><circle r="5" fill="${front}"/></g><path d="M-13 23h26" stroke-width="4"/>`;
 case 'balance':return `<path d="m-24 40 28-8 23 12-28 8Z" fill="${side}"/><path d="M0 38V-30" stroke-width="5"/><circle cy="-30" r="5" fill="${front}"/><g class="role-balance"><path d="M-39-22 39-38" stroke-width="4"/><path d="m-34-23-12 38h25Zm66-13L19 2h26Z" fill="none"/><path d="M-48 15q14 23 29 0ZM17 2q15 23 30 0Z" fill="${front}"/></g>`;
 case 'target':return `<path d="M-17 45 0 11 23 42" fill="none" stroke-width="5"/><ellipse cx="5" cy="-1" rx="36" ry="39" fill="${side}"/><circle cy="-5" r="35" fill="${front}"/><circle cy="-5" r="24" fill="${paper}"/><circle cy="-5" r="13" fill="${front}"/><circle class="role-signal" cy="-5" r="5" fill="${ink}"/>`;
 case 'team':return `${[[-28,-9],[27,-20],[0,21]].map(([x,y])=>`<g transform="translate(${x} ${y})"><path d="M-13 23V13q0-18 26 0v10Z" fill="${front}"/><circle r="11" fill="${paper}"/></g>`).join('')}<path d="m-38 22 43-13 34 17-43 13Z" fill="${side}"/><path d="M-25 29v19m49-13v17" stroke-width="4"/>`;
 case 'clock':return `<path d="M-21 37-28 46m49-9 7 9" stroke-width="5"/><circle cx="4" cy="4" r="39" fill="${side}"/><circle r="37" fill="${paper}"/><path d="M0-28v6m28 6h-6M0 28v-6m-28-6h6" stroke-width="3"/><path class="role-clock" d="M0 0V-24" stroke="${ink}" stroke-width="3"/><path d="M0 0 16 9" stroke="${ink}" stroke-width="3"/><circle r="4" fill="${front}"/>`;
 default:return null;
 }
}
