import {evolutions} from './sidekick.js';
import {courseEvolutions} from './course-sidekicks.js';
import {paths} from '../paths/registry.js';

export const levelUpStages=track=>track==='overall'?evolutions:courseEvolutions(track);

// Pure comparison only: previewing never reads or changes a progress ledger.
export function levelUpTransition({track='overall',fromXP,toXP}){
 if(!Number.isFinite(fromXP)||!Number.isFinite(toXP)||fromXP<0||toXP<0)throw new Error('Level-up XP must be finite and nonnegative.');
 const stages=levelUpStages(track);
 const from=stages.findLastIndex(s=>s.xp<=fromXP),to=stages.findLastIndex(s=>s.xp<=toXP);
 if(to<=from)return null;
 return {track,fromXP,toXP,from,to,before:stages[from],after:stages[to],label:track==='overall'?'Overall journey':paths[track].shortTitle};
}
