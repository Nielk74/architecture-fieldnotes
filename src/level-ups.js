import {levelUpTransition} from './illustrations/level-up-model.js';
import {showLevelUpCelebration,dismissLevelUpCelebration} from './illustrations/level-up.js';

let initialized=false;
export const dismissLevelUp=dismissLevelUpCelebration;

export function initializeLevelUps(){
 if(initialized)return;initialized=true;
 let pending=[],showing=false,scheduled=false;
 function schedule(){
  if(scheduled)return;scheduled=true;
  // Let the reward handler finish saving, updating its UI and placing focus.
  queueMicrotask(()=>{scheduled=false;showNext();});
 }
 function showNext(){
  if(showing||document.hidden||!pending.length)return;
  showing=true;
  showLevelUpCelebration(pending.shift(),{onClose:()=>{showing=false;schedule();}});
 }
 function clear(){pending=[];dismissLevelUpCelebration();}
 window.addEventListener('book:reward',({detail})=>{
  const {path,beforeXP,afterXP,beforeOverallXP,afterOverallXP}=detail;
  // One real mission can evolve both companions. Never overlap the dialogs.
  const course=levelUpTransition({track:path,fromXP:beforeXP,toXP:afterXP});
  const overall=levelUpTransition({track:'overall',fromXP:beforeOverallXP,toXP:afterOverallXP});
  pending.push(...[course,overall].filter(Boolean));schedule();
 });
 document.addEventListener('visibilitychange',()=>{if(!document.hidden)schedule();});
 window.addEventListener('hashchange',clear);
 window.addEventListener('pagehide',clear);
}
