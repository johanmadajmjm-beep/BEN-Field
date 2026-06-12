// ================================================================
// BEN-Field: Bottom Navigation
// Inject ke semua halaman — set window.BEN_ACTIVE_NAV sebelum load
// ================================================================

const NAV_ITEMS = [
  { id: 'nav-home',       href: 'index.html',                  icon: '🏠', label: 'Menu',        cls: '' },
  { id: 'nav-perenc',     href: 'perencanaan-anak-ben.html',   icon: '📋', label: 'Rencana',     cls: 'nav-perencanaan' },
  { id: 'nav-harian',     href: 'buku-harian.html',            icon: '📓', label: 'Harian',      cls: 'nav-harian' },
  { id: 'nav-menengah',   href: 'evaluasi-menengah.html',      icon: '📊', label: 'Eval. Mid',   cls: 'nav-menengah' },
  { id: 'nav-akhir',      href: 'evaluasi-akhir.html',         icon: '🏁', label: 'Eval. Akhir', cls: 'nav-akhir' },
];

const QUEUE_KEYS = [
  'ben_queue_perencanaan',
  'ben_queue_buku_harian',
  'ben_queue_eval_menengah',
  'ben_queue_eval_akhir'
];

function injectBottomNav() {
  const active = window.BEN_ACTIVE_NAV || '';

  const nav = document.createElement('nav');
  nav.className = 'bottom-nav';

  nav.innerHTML = NAV_ITEMS.map(item => {
    const isActive = item.id === active;
    const activeCls = isActive ? `active ${item.cls}` : '';
    return `
      <a class="nav-item ${activeCls}" href="${item.href}" id="${item.id}">
        <span class="nav-icon">${item.icon}</span>
        <span>${item.label}</span>
        <span class="nav-badge" id="badge-${item.id}"></span>
      </a>`;
  }).join('');

  document.body.appendChild(nav);
  updateNavBadges();
}

function updateNavBadges() {
  // Total antrian semua modul → tampil di icon Menu (home)
  let total = 0;
  QUEUE_KEYS.forEach(k => {
    try { total += JSON.parse(localStorage.getItem(k) || '[]').length; } catch {}
  });
  const homeBadge = document.getElementById('badge-nav-home');
  if (homeBadge) {
    homeBadge.textContent = total;
    homeBadge.classList.toggle('show', total > 0);
  }

  // Badge per modul
  const moduleMap = {
    'badge-nav-perenc':   'ben_queue_perencanaan',
    'badge-nav-harian':   'ben_queue_buku_harian',
    'badge-nav-menengah': 'ben_queue_eval_menengah',
    'badge-nav-akhir':    'ben_queue_eval_akhir'
  };
  Object.entries(moduleMap).forEach(([badgeId, qKey]) => {
    const el = document.getElementById(badgeId);
    if (!el) return;
    try {
      const count = JSON.parse(localStorage.getItem(qKey) || '[]').length;
      el.textContent = count;
      el.classList.toggle('show', count > 0);
    } catch {}
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectBottomNav();
  // Refresh badge tiap 10 detik
  setInterval(updateNavBadges, 10000);
});
