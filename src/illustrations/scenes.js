// Compose new illustrations here: geometry and motion live in engine.js / illustrations.css.
import {firstDimensionScene} from '../chapters/first-story.js';
const roles={interface:'storefront',storefront:'storefront',service:'service',orders:'service',catalogue:'service',data:'database',message:'message',notify:'service',code:'terminal',release:'deployment',app:'service',infra:'deployment',watch:'gauge',team:'team',build:'component',learn:'gauge',choiceA:'blueprint',choiceB:'blueprint'};
const node = (id, x, y, label, extra = {}) => ({ id, x, y, label, kind:roles[id]||'block', ...extra });
const edge = (from, to, extra = {}) => ({ from, to, ...extra });
export const bookshop = {
  title: 'A bookshop interface connects to order and catalogue services, with shared data beneath.',
  nodes: [node('interface',240,80,'INTERFACE',{caption:'The experience'}),node('orders',115,160,'ORDERS',{caption:'Business rules'}),node('catalogue',365,160,'CATALOGUE',{caption:'Discover books'}),node('data',240,245,'DATA',{tone:'peach',caption:'Shared foundations'})],
  edges: [edge('interface','orders'),edge('interface','catalogue'),edge('orders','data'),edge('catalogue','data')],
};
export const engineering = { title:'Engineering: changes travel through automated checks before release.', nodes:[node('code',110,140,'CODE'),node('check',260,145,'CHECKS',{kind:'gateway',tone:'lilac'}),node('release',350,245,'RELEASE',{tone:'peach'})],edges:[edge('code','check'),edge('check','release')] };
export const operations = { title:'Operations: services rely on infrastructure and ongoing observation.', nodes:[node('app',150,105,'SERVICE',{tone:'lilac'}),node('infra',330,225,'PLATFORM',{windows:true}),node('watch',130,260,'OBSERVE',{kind:'gauge',tone:'honey'})],edges:[edge('app','infra'),edge('infra','watch'),edge('watch','app',{dashed:true})] };
export const feedback = { title:'Process: a team builds, observes, and adapts in a repeating feedback loop.', nodes:[node('team',240,85,'TEAM',{kind:'team',tone:'lilac'}),node('build',115,225,'BUILD'),node('learn',350,225,'LEARN',{tone:'honey'})],edges:[edge('team','build'),edge('build','learn'),edge('learn','team')] };
export const data = { title:'Data: two capabilities connect to storage, creating a shared dependency.', nodes:[node('orders',125,125,'ORDERS'),node('catalogue',345,125,'CATALOGUE',{tone:'lilac'}),node('database',235,245,'DATA',{kind:'database',tone:'peach',width:125,height:45})],edges:[edge('orders','database'),edge('catalogue','database')] };
export const rationale = { title:'A decision record carries context from today’s architect to a future teammate.', nodes:[node('author',110,130,'TODAY',{kind:'person'}),node('record',240,175,'THE WHY',{kind:'document',tone:'honey'}),node('reader',365,235,'TOMORROW',{kind:'person',tone:'lilac'})],edges:[edge('author','record'),edge('record','reader')] };
export const checkpoint = { title:'Different architectural choices pass through a reasoning checkpoint.', nodes:[node('choiceA',120,140,'CHOICE A'),node('choiceB',350,140,'CHOICE B',{tone:'lilac'}),node('reason',240,250,'CHECK THE CONTEXT',{kind:'gateway',tone:'honey'})],edges:[edge('choiceA','reason'),edge('choiceB','reason')] };
export function deployments(count = 1) {
  const n = Math.max(1,Math.min(5,Math.round(count)));
  const positions = n===1?[[240,180]]:n===2?[[140,145],[335,225]]:n===3?[[240,95],[120,230],[350,230]]:n===4?[[140,115],[330,115],[140,240],[330,240]]:[[240,75],[105,155],[370,155],[160,265],[320,265]];
  return { title:`${n} independently deployable unit${n===1?'':'s'}; connections illustrate coordination, not a prescribed topology.`,nodes:positions.map(([x,y],i)=>node(`service-${i}`,x,y,n===1?'BOOKSHOP':`UNIT ${i+1}`,{kind:'deployment',width:n===1?155:90,height:n===1?65:32,tone:i%2?'lilac':'sage',windows:true})),edges:positions.slice(1).map((_,i)=>edge(`service-${i}`,`service-${i+1}`)) };
}
export const dimensions=[0,1,2,3].map(i=>firstDimensionScene(i));
const storyCaptions={
 engineering:['Pip changes the order rule.','The code expresses a new choice.','Automated checks test the architectural goal.','Release only after the checks provide evidence.'],
 operations:['Pip rehearses a failed deployment.','The service depends on its platform.','The platform must support recovery.','Observation shows whether recovery worked.'],
 feedback:['Pip questions an assumption.','The team builds a small change.','The change reaches the system.','Observed behavior informs the next design.'],
 data:['Pip changes shared book data.','Orders depend on the record.','The catalog depends on it too.','Data ownership and change affect both.'],
 rationale:['Pip leaves a decision record.','Today’s author knows the context.','The record preserves why and accepted costs.','Tomorrow’s teammate can revisit the choice.'],
 checkpoint:['Pip compares two designs.','One choice favors a particular goal.','The alternative accepts different costs.','Check both against the actual context.'],
};
export function firstStoryScene(scene,name,xp=0){
 const positions=[[350,95],[130,235],[350,235]];
 const nodes=[{id:'pip',kind:'pip',course:'fundamentals',xp,label:'PIP',x:130,y:95,tone:'honey'},...scene.nodes.map((node,i)=>({...node,x:positions[i][0],y:positions[i][1]}))];
 return {...scene,title:`Pip’s bookshop: ${scene.title}`,nodes,edges:[{from:'pip',to:scene.nodes[0].id,dashed:true,flow:false},...scene.edges.map(edge=>({...edge,flow:false,dashed:true}))],sequence:nodes.map((node,i)=>({node:node.id,text:storyCaptions[name][i]}))};
}
export const sceneLibrary = { bookshop, structure:dimensions[0], characteristics:dimensions[1], decisions:dimensions[2], principles:dimensions[3],...Object.fromEntries(Object.entries({engineering,operations,feedback,data,rationale,checkpoint}).map(([name,scene])=>[name,firstStoryScene(scene,name)])),deployments:deployments(4) };
