// Embed locally served artwork so downloaded SVGs also open offline.
export async function embedSceneArtwork(svg) {
 const sources=[...new Set([...svg.matchAll(/href="(\/artwork\/[a-z0-9-]+\.webp)"/g)].map(match=>match[1]))];
 const embedded=await Promise.all(sources.map(async source=>{
  const response=await fetch(source);
  if(!response.ok)throw new Error(`Artwork could not be loaded (${response.status}).`);
  const blob=await response.blob();
  if(blob.type!=='image/webp')throw new Error('Unexpected artwork format.');
  const data=await new Promise((resolve,reject)=>{
   const reader=new FileReader();reader.onload=()=>resolve(reader.result);reader.onerror=()=>reject(reader.error);reader.readAsDataURL(blob);
  });
  return [source,data];
 }));
 for(const [source,data] of embedded)svg=svg.replaceAll(`href="${source}"`,`href="${data}"`);
 return svg;
}
