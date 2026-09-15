// Domain objects for Pip's teaching stories. Technical services keep their own kinds.
export const storyDescriptions = {
 pip: 'Pip: a learning companion participating in the illustrated decision',
 parcel: 'A shipment or useful delivery: a labelled parcel',
 phone: 'An end-user device: a phone with a working screen',
 cinema: 'A film screening: a screen, projector and seats',
 museum: 'A museum: exhibits and an information desk',
 ferry: 'A delivery crossing: a ferry connecting places',
 workshop: 'An engineering workshop: a shared workbench and tools',
 market: 'A night-market stall: orders and customers meet here',
};

export function storyGeometry(kind,p) {
 const shapes = {
  parcel: `<path d="m-39-22 39-20 39 20v51L0 51l-39-22Z" fill="${p.left}"/><path d="m0 0 39-22v51L0 51Z" fill="${p.right}"/><path d="m-39-22 39-20 39 20L0 0Z" fill="${p.top}"/><path d="m-17-33 38 20v26l-12 6V-7l-38-20" fill="${p.right}"/><path d="m-29 8 17 9m-17-1 12 6"/>`,
  phone: `<path d="m-27-53 51-11 9 9v96l-51 13-9-9Z" fill="${p.right}"/><path d="m-27-53 51-11v96l-51 13Z" fill="${p.top}"/><path d="m-20-38 37-9v64l-37 9Z" fill="${p.left}"/><path d="m-7-49 13-3m-7 82 4-1" stroke-width="3"/><path class="story-screen" d="m-11 0 8 7 18-25" fill="none" stroke-width="3"/>`,
  cinema: `<path d="m-47-43 94-10v61l-94 10Z" fill="${p.right}"/><path d="m-39-35 78-8V2l-78 8Z" fill="${p.top}"/><path d="m-6-27 24 13-24 16Z" fill="${p.left}"/><path d="M-30 17v19m60-26v18"/><g fill="${p.left}"><path d="m-40 35 22-4v19l-22 4Zm30-5 22-4v19l-22 4Zm30-5 22-4v19l-22 4Z"/></g>`,
  museum: `<path d="m-49-27 49-31 49 20-49 17Z" fill="${p.top}"/><path d="M-42-17v60l42 12 42-20v-63L0-11Z" fill="${p.left}"/><path d="M0-11v66l42-20v-63Z" fill="${p.right}"/><path d="M-32-14v45m18-40v45M14-14v40m17-47v40" stroke-width="6"/><path d="m-49 42 49 14 49-23v9L0 66l-49-15Z" fill="${p.top}"/>`,
  ferry: `<path d="m-51 17 67-19 38 16-19 26-61 15-25-22Z" fill="${p.right}"/><path d="m-51 17 67-19 38 16-73 22Z" fill="${p.top}"/><path d="m-23 17 0-37 35-11 21 9v36L0 28Z" fill="${p.left}"/><path d="m-23-20 35-11 21 9L-2-11Z" fill="${p.top}"/><path d="M12-32v-18m-44 42 0 12m12-16v12m12-16v12" stroke-width="4"/><path class="story-wake" d="m-57 50 19-3m-9 12 22-4m38-2 27-7" stroke="${p.stroke}" fill="none"/>`,
  workshop: `<path d="m-48 8 61-20 37 20-62 21Z" fill="${p.top}"/><path d="M-48 8v10l36 21 62-22V8l-62 21Z" fill="${p.right}"/><path d="M-39 23v32m28-19v34m51-46v28" stroke-width="7"/><path d="m-23-8 0-35 39-12 14 9v37L-9 7Z" fill="${p.left}"/><path d="m-16-34 22-6m-22 15 22-6m-22 15 12-4" stroke-width="3"/><path d="m23-5 10-13m-1-10 9 8-8 8-9-8Z" fill="${p.top}"/>`,
  market: `<path d="M-39-16v63l38 11 39-18v-65Z" fill="${p.left}"/><path d="m-1-6 39-19v65L-1 58Z" fill="${p.right}"/><path d="m-47-22 39-24 53 10-7 17-39 21Z" fill="${p.top}"/><path d="m-28-33 37 16m-18-27 38 17" stroke="${p.stroke}" stroke-width="6"/><path d="m-26 12 16 4v16l-16-4Zm36-6 19-9v24l-19 9Z" fill="${p.top}"/><circle class="story-lantern" cx="-48" cy="5" r="9" fill="${p.top}"/><path d="M-48-18V-4"/>`,
 };
 return shapes[kind] || '';
}
