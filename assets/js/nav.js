// BEN-Field: Bottom Navigation v3
const NAV_ITEMS = [
  { id:'nav-home',     href:'index.html',                icon:'home',      label:'Menu',     color:'' },
  { id:'nav-perenc',   href:'perencanaan-anak-ben.html', icon:'clipboard', label:'Rencana',  color:'' },
  { id:'nav-harian',   href:'buku-harian.html',          icon:'book',      label:'Harian',   color:'c-blue' },
  { id:'nav-menengah', href:'evaluasi-menengah.html',    icon:'chart',     label:'Eval.Mid', color:'c-purple' },
  { id:'nav-akhir',    href:'evaluasi-akhir.html',       icon:'flag',      label:'Ev.Akhir', color:'c-red' },
];
const QUEUE_KEYS = {
  'nav-perenc':   'ben_queue_perencanaan',
  'nav-harian':   'ben_queue_buku_harian',
  'nav-menengah': 'ben_queue_eval_menengah',
  'nav-akhir':    'ben_queue_eval_akhir'
};
const ICONS = {
  home:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  clipboard: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="4" rx="1"/><path d="M9 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V4a2 2 0 00-2-2h-3"/><line x1="9" y1="12" x2="15" y2="12"/><line x1="9" y1="16" x2="13" y2="16"/></svg>`,
  book:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 016.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 014 19.5v-15A2.5 2.5 0 016.5 2z"/></svg>`,
  chart:     `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>`,
  flag:      `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`,
};

function getQC(k) { try { return JSON.parse(localStorage.getItem(k)||'[]').length; } catch { return 0; } }

function injectNav() {
  const active = window.BEN_ACTIVE_NAV || '';

  // Inject CSS inline — tidak bergantung pada shared.css load order
  const style = document.createElement('style');
  style.textContent = `
    body { padding-bottom: 72px !important; }

    .bottom-nav {
      position: fixed;
      bottom: 0; left: 0; right: 0;
      height: 60px;
      background: rgba(255,255,255,0.97);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-top: 1px solid #E2EDE8;
      display: flex;
      z-index: 9000;
      box-shadow: 0 -2px 20px rgba(0,0,0,0.07);
    }

    .nav-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 3px;
      text-decoration: none;
      color: #94A3B8;
      font-size: 9px;
      font-weight: 600;
      font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
      position: relative;
      cursor: pointer;
      border: none;
      background: none;
      padding: 6px 2px 8px;
      min-width: 0;
      -webkit-tap-highlight-color: transparent;
      transition: color 0.18s ease;
    }

    .nav-item svg {
      flex-shrink: 0;
      transition: transform 0.18s ease;
    }

    .nav-item span.nav-label {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
      display: block;
    }

    .nav-item.active { color: #166534; }
    .nav-item.active svg { transform: translateY(-2px); }
    .nav-item.active.c-blue   { color: #1E3A5C; }
    .nav-item.active.c-purple { color: #4C1D95; }
    .nav-item.active.c-red    { color: #7F1D1D; }

    .nav-bar {
      position: absolute;
      top: 0; left: 15%; right: 15%;
      height: 3px;
      border-radius: 0 0 3px 3px;
      background: #166534;
      transform: scaleX(0);
      transition: transform 0.22s cubic-bezier(0.34,1.56,0.64,1);
    }
    .nav-item.active .nav-bar { transform: scaleX(1); }
    .nav-item.active.c-blue   .nav-bar { background: #1E3A5C; }
    .nav-item.active.c-purple .nav-bar { background: #4C1D95; }
    .nav-item.active.c-red    .nav-bar { background: #7F1D1D; }

    .n-badge {
      position: absolute;
      top: 4px; left: calc(50% + 7px);
      background: #F97316;
      color: #fff;
      font-size: 8px; font-weight: 800;
      min-width: 14px; height: 14px;
      border-radius: 7px; padding: 0 3px;
      display: none; align-items: center; justify-content: center;
      line-height: 1;
      border: 2px solid #fff;
      font-family: 'Plus Jakarta Sans', sans-serif;
    }
    .n-badge.show { display: flex; }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';

  NAV_ITEMS.forEach(item => {
    const isActive = item.id === active;
    const a = document.createElement('a');
    a.href = item.href;
    a.id   = item.id;
    a.className = ['nav-item', isActive ? 'active' : '', item.color].filter(Boolean).join(' ');
    a.innerHTML = `
      <div class="nav-bar"></div>
      ${ICONS[item.icon]}
      <span class="nav-label">${item.label}</span>
      <span class="n-badge" id="nb-${item.id}"></span>`;
    nav.appendChild(a);
  });

  document.body.appendChild(nav);
  updateNavBadges();
}

function updateNavBadges() {
  let total = 0;
  Object.entries(QUEUE_KEYS).forEach(([navId, qKey]) => {
    const c = getQC(qKey);
    total += c;
    const el = document.getElementById('nb-' + navId);
    if (el) { el.textContent = c > 9 ? '9+' : c; el.classList.toggle('show', c > 0); }
  });
  const home = document.getElementById('nb-nav-home');
  if (home) { home.textContent = total > 9 ? '9+' : total; home.classList.toggle('show', total > 0); }
}

document.addEventListener('DOMContentLoaded', () => {
  injectNav();
  setInterval(updateNavBadges, 8000);
});
