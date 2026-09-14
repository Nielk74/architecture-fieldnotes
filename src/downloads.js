import {native,flushStorage} from './storage.js';
export async function downloadText(name,text,type='text/markdown'){
 await flushStorage();
 if(native){const {Filesystem,Directory,Encoding}=await import('@capacitor/filesystem');const {Share}=await import('@capacitor/share');const {uri}=await Filesystem.writeFile({path:name,data:text,directory:Directory.Cache,encoding:Encoding.UTF8});await Share.share({title:name,files:[uri],dialogTitle:'Save or share your fieldnotes'});return}
 const url=URL.createObjectURL(new Blob([text],{type}));const link=document.createElement('a');link.href=url;link.download=name;link.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
}
