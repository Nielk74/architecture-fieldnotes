import {chapterScene} from './visuals.js';
import {teachingRecipes} from '../illustrations/teaching-recipes.js';

export const firstStoryIntro='Pip opens a tiny bookshop. One order reveals four kinds of choices—and why a blueprint cannot explain them all.';
export const firstStoryRoles=[
 ['Make decisions','Pip protects the shop’s goals with constraints, naming a product only when necessary and leaving other choices local.'],
 ['Keep analyzing','Pip’s once-useful plan meets new traffic and teams. The decision needs another look as its context changes.'],
 ['Stay curious','Pip tests a new tool against the shop’s problem. Novelty alone cannot justify adopting it.'],
 ['Check compliance','Pip’s automated check catches a forbidden dependency. Reviews handle justified exceptions explicitly.'],
 ['Build breadth','Pip explores unfamiliar platforms and languages, uncovering alternatives and costs that one specialty missed.'],
 ['Know the business','Pip listens to booksellers before drawing boundaries. Their language and priorities give the architecture its purpose.'],
 ['Work with people','Pip invites a quiet colleague’s concern. Listening, explaining, and mentoring help the team build together.'],
 ['Navigate the organization','Pip asks who carries a change’s cost. Incentives and decision authority shape the negotiation.'],
];
export const firstStoryConcepts=[
 {icon:'▧',title:'Structure gives the system its shape.',description:'Pip follows an order from storefront to business rules and storage. Layers organize those responsibilities; microservices or a microkernel would arrange them differently. The shape explains how parts fit, not the whole architecture.',example:'',caption:'Pip traces an order through the bookshop’s distinct responsibilities.',nodes:[0,1,2]},
 {icon:'◷',title:'Characteristics define success.',description:'Pip’s promotion brings readers—and a slow page. Selling books is the feature; performance, availability, and maintainability describe how well the shop must work. Pip agrees on a measurable response target and a check, rather than treating quality as a later extra.',example:'',caption:'The promotion tests a latency goal, not just whether the page responds.',nodes:[0,1]},
 {icon:'⊣',title:'Decisions set the boundaries.',description:'Pip spots the storefront taking a shortcut straight to the database. The team’s construction rule requires service-layer access. A justified exception is a variance: Pip brings it for explicit review instead of hiding the shortcut.',example:'',caption:'The boundary is a rule; an exception needs explicit review.',nodes:[1,2]},
 {icon:'↗',title:'Principles guide the choices.',description:'Pip usually queues order notifications, then meets a reader needing immediate confirmation. “Prefer asynchronous notifications” is guidance, not an absolute rule. Pip considers a direct response when the context makes it the better fit.',example:'',caption:'A preferred route can change when the reader needs an immediate answer.',nodes:[1]},
];
const recipes=[
 [['storefront','storefront','FIRST ORDER'],['service','service','ORDER RULES'],['database','database','SAVED ORDER']],
 [['storefront','storefront','PROMOTION'],['service','service','SLOW RESPONSE'],['check','gauge','LATENCY GOAL']],
 [['storefront','storefront','SHORTCUT?'],['boundary','gateway','SERVICE RULE'],['database','database','PROTECTED DATA']],
 [['orders','service','ORDER ACCEPTED'],['message','queue','PREFERRED QUEUE'],['notify','message','DIRECT CONFIRMATION']],
];
export function firstDimensionScene(index,xp=0){
 const c=firstStoryConcepts[index];
 const nodes=[{id:'pip',kind:'pip',label:'PIP',tone:'honey'},...recipes[index].map(([id,kind,label],i)=>({id,kind,label,tone:['sage','lilac','peach'][i]}))];
 const pairs=index===3?[['pip','orders'],['orders','message'],['orders','notify']]:[['pip',nodes[1].id],[nodes[1].id,nodes[2].id],[nodes[2].id,nodes[3].id]];
 return chapterScene({number:1,title:c.title,story:{course:'fundamentals',title:c.caption},visual:{teaching:teachingRecipes[`fundamentals/1/${index}`],nodes,edges:pairs.map(([from,to])=>({from,to,dashed:true,flow:false})),steps:nodes.map((n,i)=>({node:n.id,text:[c.caption,...recipes[index].map(r=>r[2])][i]}))}},{xp});
}
