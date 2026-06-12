// ================================================================
// BEN-Field: Bottom Navigation
// Set window.BEN_ACTIVE_NAV sebelum script ini di-load
// ================================================================

const NAV_ITEMS = [
  { id: 'nav-home',     href: 'index.html',                icon: '🏠', label: 'Menu',     cls: '' },
  { id: 'nav-perenc',   href: 'perencanaan-anak-ben.html', icon: '📋', label: 'Rencana',  cls: 'nav-perencanaan' },
  { id: 'nav-harian',   href: 'buku-harian.html',          icon: '📓', label: 'Harian',   cls: 'nav-harian' },
  { id: 'nav-menengah', href: 'evaluasi-menengah.html',    icon: '📊', label: 'Eval.Mid', cls: 'nav-menengah' },
  { id: 'nav-akhir',    href: 'evaluasi-akhir.html',       icon: '🏁', label: 'Ev.Akhir', cls: 'nav-akhir' },
];

const QUEUE_KEYS = {
  'nav-perenc':   'ben_queue_perencanaan',
  'nav-harian':   'ben_queue_buku_harian',
  'nav-menengah': 'ben_queue_eval_menengah',
  'nav-akhir':    'ben_queue_eval_akhir'
};

function getQueueCount(key) {
  try { return JSON.parse(localStorage.getItem(key) || '[]').length; } catch { return 0; }
}

function injectBottomNav() {
  const active = window.BEN_ACTIVE_NAV || '';

  // Inject CSS inline agar tidak tergantung load order shared.css
  const style = document.createElement('style');
  style.textContent = `
    body { padding-bottom: 80px !important; }
    .bottom-nav {
      position: fixed; bottom: 0; left: 0; right: 0;
      height: 64px; background: #fff;
      border-top: 1px solid #d4e8db;
      display: flex; z-index: 9999;
      box-shadow: 0 -4px 16px rgba(0,0,0,0.08);
    }
    .bottom-nav a {
      flex: 1; display: flex; flex-direction: column;
      align-items: center; justify-content: center;
      gap: 3px; text-decoration: none;
      color: #7a9e8a; font-size: 10px; font-weight: 600;
      padding: 6px 2px; position: relative;
      -webkit-tap-highlight-color: transparent;
      font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }
    .bottom-nav a .ni { font-size: 22px; line-height: 1; }
    .bottom-nav a .nl { font-size: 9px; margin-top: 1px; white-space: nowrap; }
    .bottom-nav a.active { color: #1a5c3a; }
    .bottom-nav a.active.c-blue   { color: #1a3d5c; }
    .bottom-nav a.active.c-purple { color: #4a2d7a; }
    .bottom-nav a.active.c-red    { color: #7a1a1a; }
    .bottom-nav a.active::before {
      content: ''; position: absolute;
      top: 0; left: 15%; right: 15%;
      height: 3px; background: #1a5c3a;
      border-radius: 0 0 3px 3px;
    }
    .bottom-nav a.active.c-blue::before   { background: #1a3d5c; }
    .bottom-nav a.active.c-purple::before { background: #4a2d7a; }
    .bottom-nav a.active.c-red::before    { background: #7a1a1a; }
    .n-badge {
      position: absolute; top: 5px;
      left: calc(50% + 4px);
      background: #e07b2a; color: #fff;
      font-size: 8px; font-weight: 800;
      min-width: 14px; height: 14px;
      border-radius: 7px; padding: 0 3px;
      display: none; align-items: center; justify-content: center;
      line-height: 1;
    }
    .n-badge.show { display: flex; }
  `;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';

  const colorMap = { 'nav-harian': 'c-blue', 'nav-menengah': 'c-purple', 'nav-akhir': 'c-red' };

  NAV_ITEMS.forEach(item => {
    const isActive = item.id === active;
    const colorCls = colorMap[item.id] || '';
    const a = document.createElement('a');
    a.href = item.href;
    a.id   = item.id;
    a.className = (isActive ? `active ${colorCls}` : '').trim();
    a.innerHTML = `
      <span class="ni">${item.icon}</span>
      <span class="nl">${item.label}</span>
      <span class="n-badge" id="nb-${item.id}"></span>`;
    nav.appendChild(a);
  });

  document.body.appendChild(nav);
  updateNavBadges();
}

function updateNavBadges() {
  // Badge per modul
  Object.entries(QUEUE_KEYS).forEach(([navId, qKey]) => {
    const el = document.getElementById('nb-' + navId);
    if (!el) return;
    const count = getQueueCount(qKey);
    el.textContent = count > 9 ? '9+' : count;
    el.classList.toggle('show', count > 0);
  });

  // Badge home = total semua antrian
  const total = Object.values(QUEUE_KEYS).reduce((s, k) => s + getQueueCount(k), 0);
  const homeEl = document.getElementById('nb-nav-home');
  if (homeEl) {
    homeEl.textContent = total > 9 ? '9+' : total;
    homeEl.classList.toggle('show', total > 0);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  injectBottomNav();
  setInterval(updateNavBadges, 8000);
});
