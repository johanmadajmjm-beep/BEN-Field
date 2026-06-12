// BEN-Field: Bottom Navigation v2 — SVG Icons
const NAV_ITEMS = [
  { id:'nav-home',     href:'index.html',                icon:'home',     label:'Menu',     color:'' },
  { id:'nav-perenc',   href:'perencanaan-anak-ben.html', icon:'clipboard',label:'Rencana',  color:'' },
  { id:'nav-harian',   href:'buku-harian.html',          icon:'book',     label:'Harian',   color:'c-blue' },
  { id:'nav-menengah', href:'evaluasi-menengah.html',    icon:'chart',    label:'Eval.Mid', color:'c-purple' },
  { id:'nav-akhir',    href:'evaluasi-akhir.html',       icon:'flag',     label:'Ev.Akhir', color:'c-red' },
];
const QUEUE_KEYS={
  'nav-perenc':'ben_queue_perencanaan','nav-harian':'ben_queue_buku_harian',
  'nav-menengah':'ben_queue_eval_menengah','nav-akhir':'ben_queue_eval_akhir'
};
const ICONS={
  home:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  clipboard:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2h-3"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  book:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  chart:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  flag:`<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
};

function getQC(k){try{return JSON.parse(localStorage.getItem(k)||'[]').length;}catch{return 0;}}

function injectNav(){
  const active=window.BEN_ACTIVE_NAV||'';
  const style=document.createElement('style');
  style.textContent=`body{padding-bottom:calc(68px + 24px)!important;}`;
  document.head.appendChild(style);
  const nav=document.createElement('nav');
  nav.className='bottom-nav';
  NAV_ITEMS.forEach(item=>{
    const isActive=item.id===active;
    const a=document.createElement('a');
    a.href=item.href;
    a.id=item.id;
    a.className='nav-item'+(isActive?` active ${item.color}`:' '+item.color).trim();
    a.innerHTML=`
      <div class="nav-indicator"></div>
      ${ICONS[item.icon]}
      <span>${item.label}</span>
      <span class="n-badge" id="nb-${item.id}"></span>`;
    nav.appendChild(a);
  });
  document.body.appendChild(nav);
  updateNavBadges();
}

function updateNavBadges(){
  let total=0;
  Object.entries(QUEUE_KEYS).forEach(([navId,qKey])=>{
    const c=getQC(qKey);
    total+=c;
    const el=document.getElementById('nb-'+navId);
    if(el){el.textContent=c>9?'9+':c;el.classList.toggle('show',c>0);}
  });
  const home=document.getElementById('nb-nav-home');
  if(home){home.textContent=total>9?'9+':total;home.classList.toggle('show',total>0);}
}

document.addEventListener('DOMContentLoaded',()=>{
  injectNav();
  setInterval(updateNavBadges,8000);
});
