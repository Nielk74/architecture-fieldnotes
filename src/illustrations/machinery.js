// Lesson equipment: broad faces, shallow depth and one identifying detail.
// Every paint comes from the scene palette; no gadget introduces extra hues.
export function machineryGeometry(kind, p) {
 const face = (d, fill) => `<path d="${d}" fill="${fill}" stroke="none"/>`;
 const line = (d, color = p.ink, width = 3, className = '') => `<path class="${className}" d="${d}" fill="none" stroke="${color}" stroke-width="${width}" stroke-linecap="round" stroke-linejoin="round"/>`;
 const dot = (x, y, r, fill = p.top) => `<circle class="role-signal" cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="none"/>`;
 const screen = content => `<g stroke="none">${face('M-46-34 35-57 48-49v76l-81 24-13-8Z', p.left)}${face('M-33-26 48-49v76l-81 24Z', p.right)}${face('M-25-20 40-39v53l-65 19Z', p.top)}${face('M0 41v13l-22 7 25 8 30-9-22-8V38Z', p.left)}${content}</g>`;
 switch (kind) {
 case 'service': return `<g stroke="none">${face('M-34-39 10-52 36-37v85L-8 62-34 47Z', p.left)}${face('M-8-24 36-37v85L-8 62Z', p.right)}${face('M-34-39 10-52 36-37-8-24Z', p.top)}${[-7,23].map(y => face(`M0 ${y} 27 ${y-8}v18L0 ${y+18}Z`, p.ink) + dot(19,y+3,3)).join('')}</g>`;
 case 'browser': return screen(face('m-16-11 14-4v27l-14 4Z', p.left) + line('M5-16 26-6M5-4l26-7M5 8l17-5', p.left, 3));
 case 'terminal': return screen(line('m-14-7 10 6-10 12m23-3 15-4', p.ink, 4) + line('m19 9 10-3', p.left, 4, 'role-cursor'));
 case 'blueprint': return screen(line('M-12-4 24-14M6-9V13', p.left, 3) + dot(-12,-4,5,p.right) + dot(24,-14,5,p.right) + dot(6,13,5,p.right));
 case 'queue': return `<g stroke="none">${face('M-55 20 29-6 55 9-29 37Z', p.top)}${face('M-55 20v15l26 16L55 23V9L-29 37Z', p.left)}${[-28,0,28].map(x => `<g transform="translate(${x} ${-x*.32})">${face('M-12-20 12-27 18-23v30l-24 7-6-4Z', p.left)}${face('M-6-16 18-23V7l-24 7Z', p.right)}${line('m-4-10 10 5 10-11', p.top, 2)}</g>`).join('')}${line('m-16 60 39-13-10-2m10 2-7 9',p.ink,3,'role-signal')}</g>`;
 case 'source': return `<g stroke="none">${face('M-30-38 8-49 25-39v72l-38 12-17-10Z',p.left)}${face('M-13-27 25-39v72l-38 12Z',p.right)}${[-14,8].map(y => face(`M-6 ${y} 18 ${y-7}v13l-24 7Z`,p.top)).join('')}${line('M14 49h31m-10-10 10 10-10 10',p.ink,4,'role-signal')}</g>`;
 case 'cache': return `<g stroke="none">${[-23,-7,9,25].map(x => line(`M${x} ${22-Math.abs(x)*.5}l-8 9M${x} ${-26+Math.abs(x)*.4}l8-9`,p.left,4)).join('')}${face('M-39-9 0-32 39-9V9L0 32-39 9Z',p.left)}${face('M-39-9 0-32 39-9 0 14Z',p.right)}${face('M-23-9 0-22 23-9 0 5Z',p.top)}${face('m2-20-13 14 11-2-3 12 17-18-12 2Z',p.ink)}</g>`;
 case 'router': return `<g stroke="none">${face('M-32-6 6-19 31-4v23L-7 32-32 17Z',p.left)}${face('M-32-6 6-19 31-4-7 9Z',p.top)}${face('M-7 9 31-4v23L-7 32Z',p.right)}${line('M-21-8v-27m44 20v-27',p.left,4)}${line('M-34 27h-20m8-7-8 7 8 7M37 1l15-15m-9 0h9v9M6 38l17 17m-10 0h10V45',p.ink,3,'role-signal')}${dot(9,15,3,p.top)}</g>`;
 case 'storefront': return `<g stroke="none">${face('M-40-15 17-32 43-18v61l-57 18-26-15Z',p.left)}${face('M-14 0 43-18v61l-57 18Z',p.top)}${face('M-49-23 14-42 50-23-13-4Z',p.top)}${face('M-49-23-13-4V9l-36-19Z',p.left)}${face('M-13-4 50-23v13L-13 9Z',p.right)}${face('M-5 13 15 7v26l-20 6Z',p.ink)}${line('M2 18v12m7-14v12',p.top,3)}${face('M25 4 36 1v45l-11 4Z',p.left)}</g>`;
 default: return null;
 }
}
