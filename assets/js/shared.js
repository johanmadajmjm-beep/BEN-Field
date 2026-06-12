// ================================================================
// BEN-Field: Shared Offline Queue & Submit Logic
// ================================================================

// Set ini dari masing-masing halaman sebelum load script ini
// window.BEN_MODULE = 'perencanaan' | 'buku_harian' | 'eval_menengah' | 'eval_akhir'
// window.BEN_APPS_SCRIPT_URL = 'https://script.google.com/...'

const MODULE = window.BEN_MODULE || 'unknown';
const DRAFT_KEY = `ben_draft_${MODULE}`;
const QUEUE_KEY = `ben_queue_${MODULE}`;

let isOnline = navigator.onLine;

// ── Online status ────────────────────────────────────────────────
window.addEventListener('online',  () => { isOnline = true;  updateStatusBar(); });
window.addEventListener('offline', () => { isOnline = false; updateStatusBar(); });

function updateStatusBar() {
  const dot  = document.getElementById('statusDot');
  const text = document.getElementById('statusText');
  if (!dot) return;
  if (isOnline) {
    dot.className = 'status-dot';
    text.textContent = 'Online — data akan langsung dikirim';
  } else {
    dot.className = 'status-dot offline';
    text.textContent = 'Offline — data disimpan ke antrian';
  }
}

// ── Toast ────────────────────────────────────────────────────────
let _toastTimer;
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.className = 'toast ' + type + ' show';
  clearTimeout(_toastTimer);
  _toastTimer = setTimeout(() => { t.className = 'toast'; }, 3200);
}

// ── Section toggle ───────────────────────────────────────────────
function toggleSection(id) {
  const body    = document.getElementById(`body-${id}`);
  const chevron = document.getElementById(`chevron-${id}`);
  const isOpen  = body.classList.contains('open');
  body.classList.toggle('open', !isOpen);
  chevron.classList.toggle('open', !isOpen);
}

// ── Worker / Child dropdowns ─────────────────────────────────────
function initWorkerChild(workerSelId, childSelId) {
  const workerSel = document.getElementById(workerSelId);
  const childSel  = document.getElementById(childSelId);
  populateWorkerSelect(workerSel);
  workerSel.addEventListener('change', () => {
    populateChildSelect(workerSel.value, childSel);
  });
}

// ── Draft ────────────────────────────────────────────────────────
function saveDraft(data) {
  localStorage.setItem(DRAFT_KEY, JSON.stringify(data));
  showToast('Draft tersimpan ✓', 'success');
}

function loadDraft() {
  try { return JSON.parse(localStorage.getItem(DRAFT_KEY) || 'null'); }
  catch { return null; }
}

function clearDraft() { localStorage.removeItem(DRAFT_KEY); }

// ── Queue ────────────────────────────────────────────────────────
function getQueue() {
  try { return JSON.parse(localStorage.getItem(QUEUE_KEY) || '[]'); } catch { return []; }
}
function _saveQueue(q) { localStorage.setItem(QUEUE_KEY, JSON.stringify(q)); }

function addToQueue(data) {
  const q = getQueue();
  data._queueId = Date.now();
  q.push(data);
  _saveQueue(q);
  updateQueueBadge();
}

function updateQueueBadge() {
  const badge = document.getElementById('queueBadge');
  const count = document.getElementById('queueCount');
  if (!badge) return;
  const q = getQueue();
  if (q.length > 0) { badge.classList.add('visible'); count.textContent = q.length; }
  else { badge.classList.remove('visible'); }
}

function openQueueModal() {
  document.getElementById('queueModal').classList.add('open');
  renderQueueList();
}

function renderQueueList() {
  const q    = getQueue();
  const list = document.getElementById('queueList');
  if (!list) return;
  if (q.length === 0) {
    list.innerHTML = '<div class="empty-queue">Tidak ada data dalam antrian 🎉</div>';
    return;
  }
  list.innerHTML = q.map(item => `
    <div class="queue-item">
      <div class="queue-item-info">
        <div class="queue-item-name">${item.namaAnakLabel || item.namaAnak || '—'}</div>
        <div class="queue-item-meta">${item.cbrWorkerLabel || ''} • ${item.tanggal || ''}</div>
      </div>
      <button class="btn-q-submit" onclick="submitQueueItem(${item._queueId})">Kirim</button>
      <button class="btn-q-delete" onclick="deleteQueueItem(${item._queueId})">Hapus</button>
    </div>
  `).join('');
}

async function submitQueueItem(id) {
  const url = window.BEN_APPS_SCRIPT_URL;
  if (!url || url.startsWith('GANTI')) { showToast('⚠️ URL Apps Script belum diisi!', 'error'); return; }
  let q = getQueue();
  const item = q.find(x => x._queueId === id);
  if (!item) return;
  try {
    const res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(item) });
    if (!res.ok) throw new Error();
    _saveQueue(q.filter(x => x._queueId !== id));
    updateQueueBadge(); renderQueueList();
    showToast('✅ Terkirim!', 'success');
  } catch { showToast('Gagal kirim — cek koneksi', 'error'); }
}

function deleteQueueItem(id) {
  _saveQueue(getQueue().filter(x => x._queueId !== id));
  updateQueueBadge(); renderQueueList();
}

async function submitAllQueue() {
  if (!isOnline) { showToast('Tidak ada koneksi', 'error'); return; }
  const url = window.BEN_APPS_SCRIPT_URL;
  if (!url || url.startsWith('GANTI')) { showToast('⚠️ URL Apps Script belum diisi!', 'error'); return; }
  const q = getQueue();
  let success = 0;
  for (const item of q) {
    try {
      const res = await fetch(url, { method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify(item) });
      if (res.ok) { success++; _saveQueue(getQueue().filter(x => x._queueId !== item._queueId)); }
    } catch {}
  }
  updateQueueBadge(); renderQueueList();
  showToast(`✅ ${success} dari ${q.length} berhasil dikirim`, 'success');
}

// Click outside modal
document.addEventListener('click', e => {
  const modal = document.getElementById('queueModal');
  if (modal && e.target === modal) modal.classList.remove('open');
});

// ── Submit flow ──────────────────────────────────────────────────
async function doSubmit(data, onSuccess) {
  const url = window.BEN_APPS_SCRIPT_URL;
  const btn  = document.getElementById('btnSubmit');
  const bar  = document.getElementById('progressBar');
  const fill = document.getElementById('progressFill');

  if (!url || url.startsWith('GANTI')) {
    showToast('⚠️ URL Apps Script belum diisi!', 'error'); return;
  }

  if (!isOnline) {
    addToQueue(data);
    showToast('Offline — data masuk antrian ✓', 'warning');
    return;
  }

  if (btn) { btn.disabled = true; btn.innerHTML = '<span class="spinner"></span> Mengirim…'; }
  if (bar)  bar.classList.add('visible');

  let prog = 0;
  const interval = setInterval(() => {
    prog = Math.min(prog + 8, 85);
    if (fill) fill.style.width = prog + '%';
  }, 300);

  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    clearInterval(interval);
    if (fill) fill.style.width = '100%';
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    showToast('✅ Data berhasil dikirim!', 'success');
    clearDraft();
    if (onSuccess) setTimeout(onSuccess, 1500);
  } catch {
    clearInterval(interval);
    addToQueue(data);
    showToast('Gagal — data masuk antrian ✓', 'warning');
  } finally {
    if (btn) { btn.disabled = false; btn.innerHTML = '📤 Kirim ke Server'; }
    setTimeout(() => {
      if (bar) bar.classList.remove('visible');
      if (fill) fill.style.width = '0%';
    }, 1000);
  }
}

// ── Confirm reset ────────────────────────────────────────────────
function confirmReset() { document.getElementById('confirmOverlay').classList.add('open'); }
function closeConfirm()  { document.getElementById('confirmOverlay').classList.remove('open'); }
