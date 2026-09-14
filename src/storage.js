import {Capacitor} from '@capacitor/core';
import {Preferences} from '@capacitor/preferences';
export const storageKeys=['fieldnotes-book-v1','fieldnotes-hard-parts-v1','fieldnotes-locations-v1','fieldnotes-adr-v1','fieldnotes-motion-v1'];
export const native=Capacitor.isNativePlatform();
const memory=new Map();let pending=Promise.resolve(),failure=null;
export async function initializeStorage(){
 if(!native)return;
 // Native preferences are authoritative. Hydrate BEFORE importing any lesson state.
 for(const key of storageKeys){const {value}=await Preferences.get({key});if(value!==null)memory.set(key,value);else{const legacy=localStorage.getItem(key);if(legacy!==null){await Preferences.set({key,value:legacy});memory.set(key,legacy)}}}
}
export const appStorage={
 getItem(key){return native?memory.get(key)??null:localStorage.getItem(key)},
 setItem(key,value){if(!storageKeys.includes(key))throw new Error('Unknown progress key');value=String(value);if(!native){localStorage.setItem(key,value);return}memory.set(key,value);pending=pending.catch(()=>{}).then(()=>Preferences.set({key,value}));pending.then(()=>{failure=null},error=>{failure=error;window.dispatchEvent(new CustomEvent('storage:failure'))})},
};
export async function flushStorage(){await pending;if(failure)throw failure}
export function storageSnapshot(){return Object.fromEntries(storageKeys.map(key=>[key,appStorage.getItem(key)]).filter(([,value])=>value!==null))}
export function savingHealthy(){return !failure}
