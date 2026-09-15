import './navigation-icons.css';
import {initializeStorage,flushStorage,native} from './storage.js';
async function boot(){
 await initializeStorage();
 if(native){
  document.documentElement.classList.add('native-app');
  const {App}=await import('@capacitor/app');
  await App.addListener('backButton',async({canGoBack})=>{await flushStorage();if(canGoBack)history.back();else if(location.pathname!=='/')location.href='/';else App.exitApp()});
  // Full-page navigation must wait for queued native writes.
  document.addEventListener('click',async event=>{const link=event.target.closest('a[href]');if(!link||link.download||event.defaultPrevented)return;const url=new URL(link.href,location.href);if(url.origin!==location.origin||(url.pathname===location.pathname&&url.search===location.search))return;event.preventDefault();try{await flushStorage();location.href=url.href}catch{showFailure()}},true);
 }
 window.addEventListener('storage:failure',showFailure);
 const page=document.body.dataset.page;
 if(page==='home')await import('./home.js');else if(page==='chapter-one')await import('./main.js');else if(page==='companions')await import('./companions.js');else if(page==='studio')await import('./illustrations/studio.js');else await import('./book.js');
 const {mountCompanion}=await import('./companion.js');
 await import('./readability.css');
 mountCompanion();
}
function showFailure(){if(document.querySelector('#storage-failure'))return;const message=document.createElement('div');message.id='storage-failure';message.setAttribute('role','alert');message.textContent='Progress could not be saved. Keep this screen open and export a backup from the home page.';message.style.cssText='position:fixed;bottom:0;left:0;right:0;padding:16px;background:#fff0d6;color:#754620;z-index:9999';document.body.append(message)}
boot().catch(error=>{console.error('Fieldnotes startup failed:',error);if(error.message==='Unknown learning path'){document.querySelector('#app').innerHTML='<main style="padding:30px;font-family:sans-serif"><h1>Path not found</h1><a href="/">Choose a learning path</a></main>';return}document.querySelector('#app,#studio').innerHTML='<main style="padding:30px;font-family:sans-serif"><h1>Your progress could not be loaded.</h1><p>Close and reopen Fieldnotes to retry. Your saved data has not been reset.</p><button onclick="location.reload()">Retry</button></main>'});
