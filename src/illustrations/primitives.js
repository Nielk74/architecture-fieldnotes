import {peopleGeometry,peopleDescriptions} from './people.js';
import {storyDescriptions,storyGeometry} from './story-geometry.js';
// Role-specific SVG silhouettes. Shared palette, motion and labeling come from engine.js.
export const primitiveDescriptions = {
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
 const story=storyGeometry(kind,p);if(story)return story;
 const people=peopleGeometry(kind,p);if(people)return people;
 const paper=p.top,side=p.left,front=p.right,ink=p.ink;
 const screen=inside=>`<path d="m-46-36 84-16 9 7v65l-84 17-9-7Z" fill="${side}"/><path d="m-37-29 84-16v65l-84 17Z" fill="${paper}"/><path d="m-37-16 84-16"/><circle cx="-29" cy="-24" r="2" fill="${ink}"/><circle cx="-21" cy="-26" r="2" fill="${ink}"/>${inside}`;
 const envelope=(x,y)=>`<g transform="translate(${x} ${y})"><path d="m-24-12 48-10v32l-48 10Z" fill="${paper}"/><path d="m-24-12 24 12 24-22m-48 42 19-23m29 13-19-15" fill="none"/></g>`;
 switch(kind){
 case 'boundary':return `<path d="m-46-29 59-16 33 23v62l-59 16-33-23Z" fill="${paper}" fill-opacity=".4" stroke-dasharray="5 4"/><path d="m-46-29 33 23 59-16m-59 16v62" fill="none" stroke-dasharray="5 4"/><path d="M-25 5 0 18 25 7" fill="none"/>${[[-25,5],[0,18],[25,7]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="7" fill="${front}"/>`).join('')}`;
 case 'source':return `<path d="m-34-29 48-10 15 8v63l-48 10-15-8Z" fill="${side}"/><path d="m-26-21 48-10v55l-48 10Z" fill="${paper}"/><path d="m-17-8 27-6m-27 17 27-6m-27 17 18-4" stroke-width="3"/><path class="role-signal" d="M12 31h36m-10-10 10 10-10 10" fill="none" stroke="${ink}" stroke-width="4"/>`;
 case 'storefront':return `<path d="m-45-10 75-17 15 9v59l-75 17-15-9Z" fill="${side}"/><path d="m-30-1 75-17v59l-75 17Z" fill="${paper}"/><path d="m-30-1 75-17-12-24-75 17Z" fill="${front}"/><path d="m-17-4-12-24m30 20-12-24m30 20-12-24m30 20-12-24" stroke="${paper}" stroke-width="8"/><path d="m-30-1v10q7 6 15-3 7 6 15-3 7 6 15-3 7 6 15-3 7 6 15-3v-10" fill="${front}"/><path d="m-21 18 29-6v25l-29 6Z" fill="${side}"/><path d="m17 10 18-4v36l-18 4Z" fill="${front}"/><path d="m-16 24 17-4" stroke="${paper}" stroke-width="3"/><circle cx="22" cy="27" r="2" fill="${ink}"/>`;
 case 'browser':return screen(`<path d="m-26-5 25-5v23l-25 5Z" fill="${front}"/><path class="role-signal" d="m7-11 29-6m-29 17 22-5m-48 35 62-13" stroke-width="4"/>`);
 case 'terminal':return screen(`<path d="m-23-3 10 6-10 10m21-1 12-3" fill="none" stroke-width="3"/><path class="role-cursor" d="m18 10 14-3" stroke-width="4"/>`);
 case 'service':return `<path d="m-32-36 47-12 23 13v82l-47 12-23-13Z" fill="${side}"/><path d="m-9-23 47-12v82l-47 12Z" fill="${front}"/><path d="m-32-36 23 13 47-12-23-13Z" fill="${paper}"/>${[-12,10,32].map(y=>`<path d="m-2 ${y} 31-8v13l-31 8Z" fill="${paper}"/><circle class="role-signal" cx="23" cy="${y+1}" r="2.5" fill="${ink}"/>`).join('')}`;
 case 'queue':return `<path d="m-49 25 72-18 28 16-72 18Z" fill="${side}"/><path d="m-49 25v10l28 16 72-18V23" fill="none"/>${envelope(-22,13)}${envelope(0,0)}${envelope(22,-13)}<path class="role-signal" d="m-7 39 25-6-6-4m6 4-6 7" fill="none" stroke-width="2"/>`;
 case 'message':return `<g transform="scale(1.65)">${envelope(0,2)}</g>`;
 case 'cache':return `<path d="m-36-7 42-20 35 20-42 22Z" fill="${paper}"/><path d="m-36-7v22l35 22V15m0 22 42-22V-7" fill="${side}"/>${[-25,-10,5,20].map(x=>`<path d="m${x} 27-9 8m${x+19}-47 9-8" stroke-width="4"/>`).join('')}<path class="role-signal" d="m8-21-20 22 13-2-7 15 25-26-16 2Z" fill="${ink}"/>`;
 case 'plugin':return `<path d="M-35-26h22q-8-20 8-20t8 20h22v20q21-8 21 8T25 10v23H3q8-21-8-21t-8 21h-22Z" fill="${side}" transform="translate(7 8)"/><path d="M-35-26h22q-8-20 8-20t8 20h22v20q21-8 21 8T25 10v23H3q8-21-8-21t-8 21h-22Z" fill="${paper}"/>`;
 case 'component':return `<path d="m-29-26 65-14 10 8v68l-65 14-10-8Z" fill="${side}"/><path d="m-19-18 65-14v68l-65 14Z" fill="${paper}"/><path d="m-37-3 29-6v13l-29 6Zm0 27 29-6v13l-29 6Z" fill="${front}"/><path d="m4-5 28-6m-28 24 28-6m-28 24 18-4" fill="none" stroke-width="3"/>`;
 case 'deployment':return `<path d="m-48-26 62-18 34 23v63l-62 18-34-23Z" fill="${paper}" fill-opacity=".45" stroke-dasharray="5 4"/><path d="m-48-26 34 23 62-18m-62 18v63" fill="none" stroke-dasharray="5 4"/>${[-24,7].map(x=>`<g transform="translate(${x} 0)"><path d="m0 0 18-5 12 8v27l-18 5-12-8Z" fill="${front}"/><path d="m0 0 12 8 18-5m-18 5v27" fill="none"/><circle class="role-signal" cx="20" cy="18" r="2" fill="${ink}"/></g>`).join('')}`;
 case 'gauge':return `<ellipse cx="5" cy="6" rx="42" ry="43" fill="${side}"/><circle r="40" fill="${paper}"/><path d="M-28 10a30 30 0 1 1 56 0" fill="none" stroke="${front}" stroke-width="7"/><path d="M-22-19l5 5M0-30v8m22 3-5 5" stroke-width="2"/><g class="role-needle"><path d="M0 0 23-20" stroke="${ink}" stroke-width="3"/><circle r="5" fill="${front}"/></g><path d="M-13 23h26" stroke-width="4"/>`;
 case 'router':return `<path d="m-25-9 31-10 22 13v20l-31 10-22-13Z" fill="${front}"/><path d="m-25-9 22 13 31-10M-3 4v20" fill="none"/><g class="role-signal" fill="none" stroke-width="3"><path d="M-24 8h-25m7-6-7 6 7 6M25-8l22-18m-9 0h9v9M10 27l21 24m-9-1 9 1 1-9"/></g>`;
 case 'balance':return `<path d="m-24 40 28-8 23 12-28 8Z" fill="${side}"/><path d="M0 38V-30" stroke-width="5"/><circle cy="-30" r="5" fill="${front}"/><g class="role-balance"><path d="M-39-22 39-38" stroke-width="4"/><path d="m-34-23-12 38h25Zm66-13L19 2h26Z" fill="none"/><path d="M-48 15q14 23 29 0ZM17 2q15 23 30 0Z" fill="${front}"/></g>`;
 case 'target':return `<path d="M-17 45 0 11 23 42" fill="none" stroke-width="5"/><ellipse cx="5" cy="-1" rx="36" ry="39" fill="${side}"/><circle cy="-5" r="35" fill="${front}"/><circle cy="-5" r="24" fill="${paper}"/><circle cy="-5" r="13" fill="${front}"/><circle class="role-signal" cy="-5" r="5" fill="${ink}"/>`;
 case 'team':return `${[[-28,-9],[27,-20],[0,21]].map(([x,y])=>`<g transform="translate(${x} ${y})"><path d="M-13 23V13q0-18 26 0v10Z" fill="${front}"/><circle r="11" fill="${paper}"/></g>`).join('')}<path d="m-38 22 43-13 34 17-43 13Z" fill="${side}"/><path d="M-25 29v19m49-13v17" stroke-width="4"/>`;
 case 'clock':return `<path d="M-21 37-28 46m49-9 7 9" stroke-width="5"/><circle cx="4" cy="4" r="39" fill="${side}"/><circle r="37" fill="${paper}"/><path d="M0-28v6m28 6h-6M0 28v-6m-28-6h6" stroke-width="3"/><path class="role-clock" d="M0 0V-24" stroke="${ink}" stroke-width="3"/><path d="M0 0 16 9" stroke="${ink}" stroke-width="3"/><circle r="4" fill="${front}"/>`;
 case 'blueprint':return screen(`<path d="m-17 9 39-8m-20 4 3 19" fill="none" stroke-dasharray="3 2"/>${[[-24,4],[14,-4],[-3,23]].map(([x,y])=>`<path d="m${x} ${y} 16-3v11l-16 3Z" fill="${front}"/>`).join('')}`);
 default:return null;
 }
}
