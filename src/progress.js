import {appStorage} from './storage.js';
// Preserve the original ledger byte-for-byte until its own path is changed.
// Each book has independent chapter IDs, answers, drafts and mission flags.
const configs={fundamentals:{key:'fieldnotes-book-v1',count:24,total:2400},'hard-parts':{key:'fieldnotes-hard-parts-v1',count:15,total:1500}};
const stores=new Map();
export function progressFor(path='fundamentals'){
 if(stores.has(path))return stores.get(path);
 const config=configs[path];if(!config)throw new Error('Unknown learning path');
 let state={version:1,chapters:{}},persistent=true;
 try{const saved=JSON.parse(appStorage.getItem(config.key));if(saved?.version===1&&saved.chapters&&typeof saved.chapters==='object'&&!Array.isArray(saved.chapters))state=saved}catch{persistent=false}
 const validChapter=id=>Number.isInteger(+id)&&+id>=1&&+id<=config.count;
 function chapterState(id){if(!validChapter(id))throw new Error('Unknown chapter');let c=state.chapters[id];if(!c||typeof c!=='object'||Array.isArray(c))c=state.chapters[id]={};if(!c.missions||typeof c.missions!=='object')c.missions={};if(!Array.isArray(c.read))c.read=[];if(!c.activity||typeof c.activity!=='object')c.activity={};return c}
 const rewardsFor=id=>path==='fundamentals'&&+id===1?{explore:20,sort:20,lab:20,quiz:20,record:20}:{explore:20,scenario:20,quiz:20,apply:40};
 function chapterXP(id){const c=chapterState(id);return Object.entries(rewardsFor(id)).reduce((sum,[key,points])=>sum+(c.missions[key]===true?points:0),0)}
 function totalXP(){return Array.from({length:config.count},(_,i)=>chapterXP(i+1)).reduce((a,b)=>a+b,0)}
 function saveProgress(){try{appStorage.setItem(config.key,JSON.stringify(state));persistent=true}catch{persistent=false}window.dispatchEvent(new CustomEvent('book:progress',{detail:{path,xp:totalXP(),total:config.total,persistent}}))}
 function awardMission(id,key){const c=chapterState(id),value=rewardsFor(id)[key];if(!value||c.missions[key])return 0;c.missions[key]=true;saveProgress();return value}
 function completeReading(id,key){const c=chapterState(id);if(!c.read.includes(key)){c.read.push(key);saveProgress()}}
 const store={chapterState,rewardsFor,chapterXP,totalXP,saveProgress,awardMission,completeReading,storageAvailable:()=>persistent};stores.set(path,store);return store;
}
export const {chapterState,rewardsFor,chapterXP,totalXP,saveProgress,awardMission,completeReading,storageAvailable}=progressFor('fundamentals');
export const companionXP=()=>Object.keys(configs).reduce((sum,id)=>sum+progressFor(id).totalXP(),0);
