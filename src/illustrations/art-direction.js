// A shared two-hue art palette. Shading changes value, never adds a third hue.
export const editorialPalette = {
 paper: '#f5f2fb', light: '#e4dcf5', mid: '#b79ae8',
 primary: '#7546d9', shade: '#4a2685', ink: '#251442',
 accent: '#f6ce55', white: '#ffffff',
};

// Fit an existing earned companion to its scene without changing its silhouette,
// equipment, XP metadata, transparency, or animation groups. Paint stays inline
// so an exported SVG has exactly the same colors as the live illustration.
export function recolorArtwork(svg, p = editorialPalette) {
 return svg.replace(/\b(fill|stroke)="(#[\da-f]{6}|white|black)"/gi, (_, attribute, color) => {
  const hex = color.toLowerCase();
  if (Object.values(p).includes(hex)) return `${attribute}="${hex}"`;
  const rgb = hex === 'white' ? [255,255,255] : hex === 'black' ? [0,0,0] : [1,3,5].map(i => parseInt(hex.slice(i,i+2),16));
  const [r,g,b] = rgb, light = .2126*r + .7152*g + .0722*b;
  const warm = light > 165 && r > 180 && g > 110 && g < 225 && b < g*.75;
  const paint = warm ? p.accent : light > 240 ? p.white : light > 205 ? p.light : light > 150 ? p.mid : light > 95 ? p.primary : light > 55 ? p.shade : p.ink;
  return `${attribute}="${paint}"`;
 });
}
