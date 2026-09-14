import {appStorage} from '../storage.js';
import {paths} from './registry.js';
export {paths} from './registry.js';
export const pathForPage=()=>location.pathname.endsWith('/hard-parts.html')?paths['hard-parts']:location.pathname.endsWith('/learn.html')?paths[new URLSearchParams(location.search).get('path')]:paths.fundamentals;
export function rememberLocation(path,chapter,step){try{const all=JSON.parse(appStorage.getItem('fieldnotes-locations-v1')||'{}');all[path]={chapter,step,at:Date.now()};appStorage.setItem('fieldnotes-locations-v1',JSON.stringify(all))}catch{}}
export function lastLocation(path){try{const value=JSON.parse(appStorage.getItem('fieldnotes-locations-v1')||'{}')[path];const config=paths[path];return value&&Number.isInteger(value.chapter)&&value.chapter>=1&&value.chapter<=config.count&&['map','intro','explore','scenario','quiz','apply','system','foundations','card-challenge','tradeoffs','architect','ecosystem','checkpoint','rationale'].includes(value.step)?value:null}catch{return null}}
export function resumeURL(path){const config=paths[path],last=lastLocation(path);if(!last)return config.entry;if(path==='fundamentals'&&last.chapter===1)return '/chapter-one.html'+(last.step==='map'?'#map':'#lesson/'+last.step);return config.entry+`#chapter/${last.chapter}/${last.step}`}
