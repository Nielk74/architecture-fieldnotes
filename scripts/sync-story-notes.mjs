import fs from 'node:fs';
import {execFileSync} from 'node:child_process';
import baseline from '../docs/storybook-baseline.json' with {type:'json'};
import {firstStoryIntro,firstStoryConcepts,firstStoryRoles} from '../src/chapters/first-story.js';

// Mechanical regeneration: the edited chapter remains the source of its story text.
let updated=0;
for(const [key,entry] of Object.entries(baseline.chapters)) {
 const chapter=JSON.parse(fs.readFileSync(entry.file,'utf8'));
 if(!chapter.story)continue;
 const [course,n]=key.split('/');
 const notes=`public/notes/${course==='fundamentals'?'':course+'/'}chapter-${n.padStart(2,'0')}.md`;
 const old=JSON.parse(execFileSync('git',['show',`${baseline.baselineCommit}:${entry.file}`],{encoding:'utf8'}));
 let text=execFileSync('git',['show',`${baseline.baselineCommit}:${notes}`],{encoding:'utf8'});
 const pairs=[[old.summary,chapter.summary],[old.scenario.title,chapter.scenario.title],[old.scenario.context,chapter.scenario.context],[old.scenario.debrief,chapter.scenario.debrief],[old.exercise.prompt,chapter.exercise.prompt]];
 old.concepts.forEach((concept,i)=>pairs.push([concept.body,chapter.concepts[i].body],[concept.example,chapter.concepts[i].example]));
 old.scenario.options.forEach((option,i)=>['benefit','cost','consequence'].forEach(field=>pairs.push([option[field],chapter.scenario.options[i][field]])));
 old.misconceptions.forEach((item,i)=>['claim','correction'].forEach(field=>pairs.push([item[field],chapter.misconceptions[i][field]])));
 for(const [from,to] of pairs)if(from&&text.includes(from))text=text.replaceAll(from,to||'');
 text=text.replace(/\n{3,}/g,'\n\n').trimEnd()+'\n';
 const heading=text.indexOf('\n');
 text=text.slice(0,heading)+`\n\n*Pip’s adventure: ${chapter.story.title}. Fictional teaching story; concepts follow the cited source.*`+text.slice(heading);
 // Earlier hand-written notes do not share the JSON wording. Rebuild those
 // from the authored lesson instead of leaving a second, stale textbook version.
 if(![chapter.summary,...chapter.concepts.map(c=>c.body),chapter.scenario.context].every(value=>text.includes(value))) {
  text=`# Chapter ${chapter.number}: ${chapter.title}\n\n*Pip’s adventure: ${chapter.story.title}. Fictional teaching story; concepts follow the cited source.*\n\nSource: ${chapter.source.reference||`printed pp. ${chapter.source.pages}`}.\n\n${chapter.summary}\n\n`;
  text+=chapter.concepts.map(c=>`## ${c.title}\n\n${c.body}\n\nSource: ${c.source}.`).join('\n\n');
  text+=`\n\n## Transfer challenge: ${chapter.scenario.title}\n\n${chapter.scenario.context}\n\n`;
  text+=chapter.scenario.options.map(o=>`### ${o.label}\n\n${o.benefit} ${o.cost} ${o.consequence}`).join('\n\n');
  text+=`\n\n${chapter.scenario.debrief}\n\n## ${chapter.exercise.title}\n\n${chapter.exercise.prompt}\n\n`+chapter.exercise.fields.map(f=>`- ${f.label}`).join('\n')+'\n';
 }
 fs.writeFileSync(notes,text);
 updated++;
}
console.log(`Synchronized ${updated} chapter notes from the authored story text.`);
const firstNotes=`# Chapter 1 — Pip opens a bookshop\n\nOriginal paraphrases of *Fundamentals of Software Architecture* (Richards and Ford, 2020), Chapter 1, printed pp. 1–20. Pip’s adventure is a fictional teaching extension, not a reported source case.\n\n${firstStoryIntro}\n\n## Four dimensions · pp. 3–7\n\n${firstStoryConcepts.map(c=>`### ${c.title}\n\n${c.description}`).join('\n\n')}\n\n## Eight expectations · pp. 8–12\n\n${firstStoryRoles.map(([title,body])=>`### ${title}\n\n${body}`).join('\n\n')}\n\n## The blueprint meets its environment · pp. 13–19\n\nPip changes an order rule and an automated check tests the architectural goal. A failed-deployment rehearsal reveals what operations can support. Observing the next release challenges a design assumption. Updating shared book data affects two capabilities. Engineering, operations, process, and data shape architecture together; their changing constraints require decisions to be revisited.\n\n## Two laws and a decision · pp. 19–20\n\nPip’s three-person shop keeps one deployment manageable, accepting shared releases and scaling. Later, four teams with uneven workloads may gain enough from independence to accept distributed troubleshooting and stronger automation. Every choice has trade-offs; the context decides which costs are worth accepting. These scenarios and their simulated effects are teaching examples, not measured comparisons or universal rankings.\n\nPip’s future teammate can follow the services but cannot recover the reasoning from the diagram alone. Why matters more than how: record the context, choice, and accepted cost so changed circumstances can prompt a useful review. The short ADR activity is a teaching aid, not a template prescribed by Chapter 1.\n`;
for(const file of ['chapter-1-summary.md','public/chapter-1-summary.md'])fs.writeFileSync(file,firstNotes);
console.log('Synchronized the original hardcoded chapter and its public notes.');
