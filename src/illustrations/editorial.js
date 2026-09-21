// Each scenic cover has one cast; earned companions live in the surrounding UI.
// The paintings are local assets; the studio embeds their bytes when exporting.
const escape = value => String(value ?? '').replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[s]));

export const editorialArtwork = {
 bookshop: {file:'bookshop',cast:'beavers',description:'Two orange beavers exchange a book at a glowing canal-side bookshop at sunset.'},
 islands: {file:'islands',cast:'robots',description:'Two rounded robots steer a parcel ferry and read a route map between forested islands.'},
 workshop: {file:'workshop',cast:'beavers',description:'Two beavers review a drawing and tighten a timber bridge model in a riverside mill workshop.'},
 civic: {file:'civic',cast:'beavers',description:'Two beavers, one using a wheelchair, plan an accessible crossing in a leafy civic square.'},
 harbor: {file:'harbor',cast:'robots',description:'Two robots tend a lantern and a mooring winch beneath a lighthouse at dusk.'},
 market: {file:'market',cast:'beavers',description:'Two beavers inspect wooden logs on a straight conveyor at a lantern-lit riverside market. Cut ends show growth rings.'},
 museum: {file:'museum',cast:'robots',description:'Two rounded robots explore a luminous museum of mechanical exhibits.'},
 cinema: {file:'cinema',cast:'robots',description:'A robot technician prepares a film projector in a forest cinema with timber benches and solar panels.'},
};
export const editorialWorlds = Object.keys(editorialArtwork);

export function renderEditorialScene({title, world='bookshop'}) {
 const art=editorialArtwork[world];
 if (!art) throw new Error('Unknown editorial world');
 return `<svg class="iso-scene editorial-scene" data-world="${escape(world)}" data-cast="${art.cast}" viewBox="0 0 480 320" preserveAspectRatio="xMidYMid slice" role="img" aria-label="${escape(title)}" xmlns="http://www.w3.org/2000/svg"><title>${escape(title)}</title><desc>${escape(art.description)}</desc><image data-editorial-art="${escape(world)}" href="/artwork/${art.file}-v3.webp" x="0" y="0" width="480" height="320" preserveAspectRatio="xMidYMid slice"/></svg>`;
}
