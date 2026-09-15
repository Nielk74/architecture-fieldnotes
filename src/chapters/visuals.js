// One positioning and rendering contract for chapter and concept story scenes.
import {teachingRecipes} from '../illustrations/teaching-recipes.js';
import {threeBeatSequence} from '../illustrations/sequence.js';
export function chapterScene(ch,{visual=ch.visual,course=ch.story?.course||'fundamentals',xp=0}={}) {
 const concept=ch.concepts?.findIndex(c=>c.visual===visual||JSON.stringify(c.visual)===JSON.stringify(visual));
 const teaching=visual.teaching||teachingRecipes[`${course}/${ch.number}/${concept}`];
 if(teaching){
  const pip=visual.nodes.find(n=>n.kind==='pip');
  if(!pip)throw new Error('A teaching illustration needs Pip.');
  return {title:`${ch.story?.title||ch.title}: ${visual.steps.map(s=>s.text).join(' ')}`,teaching,
   nodes:[{...pip,x:63,y:58,course,xp}],edges:[],sequence:threeBeatSequence(visual.steps).map((s,i)=>({node:pip.id,text:teaching.captions?.[i]||s.text}))};
 }
 const n=visual.nodes.length;
 const layouts={3:[[100,110],[240,175],[375,240]],4:[[130,95],[350,95],[130,235],[350,235]],5:[[240,75],[105,165],[370,165],[155,265],[325,265]]};
 const positions=layouts[n];
 if(!positions)throw new Error('Chapter illustrations need three to five readable nodes.');
 return {title:`${ch.story?.title||ch.title}: ${visual.steps.map(s=>s.text).join(' ')}`,
  nodes:visual.nodes.map((node,i)=>({...node,x:node.x??positions[i][0],y:node.y??positions[i][1],width:node.width??90,caption:node.caption||'',windows:node.kind==='block',...(node.kind==='pip'?{course:node.course||course,xp}: {})})),
  edges:visual.edges,sequence:threeBeatSequence(visual.steps)};
}
