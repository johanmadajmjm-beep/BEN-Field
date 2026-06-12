# BEN-Field

Aplikasi input lapangan untuk staf CBR Program BEN — Manggarai, NTT.

## Modul

| Modul | File | Deskripsi |
|---|---|---|
| Menu Utama | `index.html` | Landing page, navigasi semua modul |
| Perencanaan Anak | `perencanaan-anak-ben.html` | Input tujuan 1–3 bulan, kesulitan, rencana aksi ABC, foto, GPS |
| Buku Harian | `buku-harian.html` | 10 diary entry: tanggal + catatan naratif |
| Evaluasi Menengah | `evaluasi-menengah.html` | Score 1–10 per tujuan + analisis perubahan |
| Evaluasi Akhir | `evaluasi-akhir.html` | Konfirmasi Ya/Tidak tercapai per tujuan + saran |

## Struktur Repo

```
BEN-Field/
├── index.html
├── perencanaan-anak-ben.html
├── buku-harian.html
├── evaluasi-menengah.html
├── evaluasi-akhir.html
└── assets/
    ├── css/
    │   └── shared.css          ← Style bersama semua modul
    └── js/
        ├── data.js             ← Data CBR Workers & anak (shared)
        └── shared.js           ← Logika offline queue, draft, submit (shared)
```

## Setup

### 1. Aktifkan GitHub Pages
- Settings → Pages → Source: `main` branch, folder `/root`
- URL: `https://johanmadajmjm-beep.github.io/BEN-Field`

### 2. Isi URL Apps Script
Di masing-masing file HTML, ganti baris berikut dengan URL deploy Apps Script yang sesuai:

**perencanaan-anak-ben.html:**
```js
window.BEN_APPS_SCRIPT_URL = 'GANTI_DENGAN_URL_APPS_SCRIPT_PERENCANAAN';
```

**buku-harian.html:**
```js
window.BEN_APPS_SCRIPT_URL = 'GANTI_DENGAN_URL_APPS_SCRIPT_BUKU_HARIAN';
```

**evaluasi-menengah.html:**
```js
window.BEN_APPS_SCRIPT_URL = 'GANTI_DENGAN_URL_APPS_SCRIPT_EVAL_MENENGAH';
```

**evaluasi-akhir.html:**
```js
window.BEN_APPS_SCRIPT_URL = 'GANTI_DENGAN_URL_APPS_SCRIPT_EVAL_AKHIR';
```

## Fitur

- ✅ Conditional dropdown CBR Worker → Nama Anak
- ✅ Offline-first: data disimpan lokal jika tidak ada koneksi
- ✅ Antrian otomatis: kirim satu per satu atau semua sekarang
- ✅ Draft auto-save per modul (terpisah di localStorage)
- ✅ Status online/offline real-time
- ✅ Foto kamera (perencanaan) + GPS
