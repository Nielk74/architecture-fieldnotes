import fs from 'node:fs';
import assert from 'node:assert/strict';
import baseline from '../docs/storybook-baseline.json' with {type:'json'};
import {chapterScene} from '../src/chapters/visuals.js';
import {renderScene} from '../src/illustrations/engine.js';
import {paths} from '../src/paths/registry.js';
import firstBaseline from '../docs/storybook-first-baseline.json' with {type:'json'};
import {firstStoryIntro,firstStoryRoles,firstStoryConcepts,firstDimensionScene} from '../src/chapters/first-story.js';

const words=s=>s.trim()?s.trim().split(/\s+/).length:0;
const strings=v=>typeof v==='string'?[v]:Array.isArray(v)?v.flatMap(strings):v&&typeof v==='object'?Object.values(v).flatMap(strings):[];
let count=0,oldWords=0,newWords=0,scenes=0;
const expected=Object.values(paths).flatMap(p=>p.catalog.filter(c=>p.id!=='fundamentals'||c.number!==1).map(c=>`${p.id}/${c.number}`));
assert.deepEqual(Object.keys(baseline.chapters).sort(),expected.sort(),'Baseline must cover the live registry, not silently skip a course.');
for(const [key,entry] of Object.entries(baseline.chapters)) {
 const ch=JSON.parse(fs.readFileSync(entry.file,'utf8'));
 if(!ch.story){assert(process.argv.includes('--partial'),`${key}: missing story`);continue;}
 assert.equal(ch.story.course,key.split('/')[0],`${key}: course`);
 assert(ch.story.title&&ch.story.world,`${key}: story identity`);
 assert.deepEqual(ch.source,entry.source,`${key}: source bounds changed`);
 assert.deepEqual(ch.concepts.map(c=>c.source),entry.conceptSources,`${key}: concept sources changed`);
 assert.deepEqual(ch.quiz.map(q=>q.answer),entry.answers,`${key}: saved answer identities changed`);
 assert.deepEqual(ch.quiz.map(q=>q.options.length),entry.options,`${key}: quiz shape changed`);
 assert(words(ch.summary)<=entry.summary,`${key}: intro grew`);
 assert(/\bPip\b/.test(ch.summary),`${key}: introduction lacks protagonist`);
 ch.concepts.forEach((c,i)=>{
  assert(words(c.body+' '+c.example)<=entry.concepts[i],`${key}/${i}: concept grew`);
  assert(/\bPip\b/.test(c.body),`${key}/${i}: concept lacks story`);
  assert(c.visual,`${key}/${i}: no adapted illustration`);
  assert(c.visual.steps.every(s=>words(s.text)<=25),`${key}/${i}: caption too long`);
  renderScene(chapterScene(ch,{visual:c.visual}));scenes++;
 });
 renderScene(chapterScene(ch));scenes++;
 const current=words(strings({summary:ch.summary,concepts:ch.concepts.map(c=>({title:c.title,body:c.body,example:c.example})),scenario:ch.scenario,misconceptions:ch.misconceptions,quiz:ch.quiz,exercise:ch.exercise}).join(' '));
 assert(current<=entry.reading,`${key}: total reading grew ${entry.reading} -> ${current}`);
 const [course,n]=key.split('/');
 const notes=fs.readFileSync(`public/notes/${course==='fundamentals'?'':course+'/'}chapter-${n.padStart(2,'0')}.md`,'utf8');
 assert(notes.includes(ch.source.reference||`printed pp. ${ch.source.pages}`),`${key}: notes lack chapter source`);
 assert(!notes.includes('Source: undefined'),`${key}: broken source attribution`);
 for(const text of [ch.summary,...ch.concepts.map(c=>c.body),ch.scenario.context])assert(notes.includes(text),`${key}: notes out of sync`);
 oldWords+=entry.reading;newWords+=current;count++;
}
console.log(`${count}/${Object.keys(baseline.chapters).length} data-driven chapters rewritten; ${scenes} valid scenes; reading ${oldWords} -> ${newWords} words.`);
assert(words(firstStoryIntro)<=firstBaseline.intro,'First chapter introduction grew');
firstStoryRoles.forEach(([title,body],i)=>assert(words(body)<=firstBaseline.roles[i],`First chapter role ${title} grew`));
const firstNotes=fs.readFileSync('public/chapter-1-summary.md','utf8');
assert.equal(firstNotes,fs.readFileSync('chapter-1-summary.md','utf8'),'Legacy notes differ from public notes');
firstStoryConcepts.forEach((c,i)=>{
 assert(words(c.description+' '+c.example)<=firstBaseline.concepts[i],`First chapter concept ${i} grew`);
 assert(firstNotes.includes(c.description),'Legacy notes omit a story paragraph');
 renderScene(firstDimensionScene(i));
});
console.log('Original chapter: four rewritten concepts and eight roles within their budgets; four valid concept scenes; public notes synchronized.');
