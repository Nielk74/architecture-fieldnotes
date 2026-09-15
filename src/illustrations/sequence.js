// Explanatory illustrations have at most three readable beats. This does not
// limit real exercise states (for example, the interactive pipeline simulator).
export function threeBeatSequence(steps){
 if(steps.length<=3)return steps;
 const indices=[0,Math.floor((steps.length-1)/2),steps.length-1];
 return indices.map(index=>{
  const step={...steps[index]};
  const states=Object.assign({},...steps.slice(0,index+1).map(s=>s.states||{}));
  if(Object.keys(states).length)step.states=states;
  return step;
 });
}
