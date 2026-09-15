import './navigation-icons.css';
const shapes={
 paths:'<path d="M4 5h4v15H4zM10 3h4v17h-4zM16 6l4-1 3 14-4 1z"/><path d="M5 9h2m4-2h2m5 3 2-.5"/>',
 chapters:'<path d="M12 6C9 4 5 4 2 5v14c3-1 7-1 10 1 3-2 7-2 10-1V5c-3-1-7-1-10 1Z"/><path d="M12 6v14M5 8h4m-4 4h4m6-4h4m-4 4h4"/>',
 map:'<circle cx="5" cy="5" r="2.5"/><circle cx="19" cy="19" r="2.5"/><path d="M8 5h9a4 4 0 0 1 0 8H7a3 3 0 0 0 0 6h9"/>',
 pause:'<rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/>',
 play:'<path d="m7 4 13 8-13 8Z"/>',
};
export function navigationIcon(name){return `<svg class="navigation-icon" data-icon="${name}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${shapes[name]||shapes.paths}</svg>`}
