// ================================================================
// BEN-Field: data.js — Children Data (from Excel, 200 anak)
// ================================================================

const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzCx4CiGyxXRj01nP8v8W-2D9livH1Zk9r_uuCx2v4WCKIYJ-dBlugpvoYUE1ymw98a/exec';
const CACHE_KEY       = 'ben_children_cache';
const CACHE_TTL_MS    = 1000 * 60 * 60 * 6; // 6 jam

const CBR_WORKERS = [
  { value: 'jack_roka',               label: 'Jack Roka' },
  { value: 'laurensius_h__semparang', label: 'Laurensius Herbianto' },
  { value: 'leonardus_mawardi',       label: 'Leonardus Mawardi' },
  { value: 'magdalena_sabe',          label: 'Magdalena Sabe' },
  { value: 'magdalena_siung',         label: 'Elfrida Suryati' },
  { value: 'maria_diana_banut',       label: 'Maria Diana Banut' },
  { value: 'miseldis_hamilda',        label: 'Miseldis Hamilda' },
  { value: 'stanis_j__ngalu',         label: 'Stanis J. Ngalu' }
];

const CHILDREN_FALLBACK = {
  'magdalena_siung': [
    {v:'elentrida_muliati_murni',l:'Elentrida Muliati Murni'},
    {v:'felisitas_alfinda_lulus',l:'Felisitas Alfinda Lulus'},
    {v:'jenselsiana_onam',l:'Jenselsiana Onam'},
    {v:'kresensia_kamelda_putri',l:'Kresensia Kamelda Putri'},
    {v:'natalia_delsindi_sanul',l:'Natalia Delsindi Sanul'},
    {v:'philipus_neri_sanja',l:'Philipus Neri Sanja'},
    {v:'yohanes_leonardus_garut',l:'Yohanes Leonardus Garut'},
    {v:'yohanes_royan_saputra_dagal',l:'Yohanes Royan Saputra Dagal'},
  ],
  'jack_roka': [
    {v:'alfredo_ndak',l:'Alfredo Ndak'},
    {v:'antonio_febriano_ono_ompot',l:'Antonio Febriano Ono Ompot'},
    {v:'antonius_retno_serto',l:'Antonius Retno Serto'},
    {v:'asisi_aglisia_kurnia',l:'Asisi Aglisia Kurnia'},
    {v:'aurelia_vanya_andromeda',l:'Aurelia Vanya Andromeda'},
    {v:'bernadeta_vj_ndavas',l:'Bernadeta V.J Ndavas'},
    {v:'bonefasius_nurung',l:'Bonefasius Nurung'},
    {v:'brianus_donot',l:'Brianus Donot'},
    {v:'dionisius_irfan_jaya',l:'Dionisius Irfan Jaya'},
    {v:'elisa_astiana_gamung',l:'Elisa Astiana Gamung'},
    {v:'epivio_ganggus',l:'Epivio Ganggus'},
    {v:'fransiska_anjela',l:'Fransiska Anjela'},
    {v:'fransiskus_dika_habut',l:'Fransiskus Dika Habut'},
    {v:'frederikus_a_dagur_ds',l:'Frederikus A. Dagur (Ds)'},
    {v:'jerianus_jhon',l:'Jerianus Jhon'},
    {v:'natasha_eugenia_palus',l:'Natasha Eugenia Palus'},
    {v:'oktaviani_dais',l:'Oktaviani Dais'},
    {v:'robinson_wahar',l:'Robinson Wahar'},
    {v:'stefiani_jehabut',l:'Stefiani Jehabut'},
    {v:'wihelmus_agung',l:'Wihelmus Agung'},
    {v:'yanuarius_gan_jeferison_ds',l:'Yanuarius Gan Jeferison (Ds)'},
    {v:'yohana_natalia_bahagia',l:'Yohana Natalia Bahagia'},
    {v:'yohanes_ridianus_joni',l:'Yohanes Ridianus Joni'},
    {v:'yulita_klaudia_oktaviani',l:'Yulita Klaudia Oktaviani'},
  ],
  'laurensius_h__semparang': [
    {v:'adelia_yohana_luhur',l:'Adelia Yohana Luhur'},
    {v:'afrilianus_jera',l:'Afrilianus Jera'},
    {v:'andreas_leonanda_slb',l:'Andreas Leonanda (SLB)'},
    {v:'antonius_junino_gapon',l:'Antonius Junino Gapon'},
    {v:'arenfantus_nenggos',l:'Arenfantus Nenggos'},
    {v:'basilika_jiani_ngara',l:'Basilika Jiani Ngara'},
    {v:'beatrix_serviana_toton',l:'Beatrix Serviana Toton'},
    {v:'bernadino_keor_slb',l:'Bernadino Keor (SLB)'},
    {v:'claudius_aldi_ndaur',l:'Claudius Aldi Ndaur'},
    {v:'eltreda_jenita_moa',l:'Eltreda Jenita Moa'},
    {v:'ernesti_yolanda_neno',l:'Ernesti Yolanda Neno'},
    {v:'flora_ekkliysia_muel',l:'FLORA EKKLIYSIA MUEL'},
    {v:'fransiska_pradela_juita',l:'Fransiska Pradela Juita'},
    {v:'geovani_laura_enje',l:'Geovani Laura Enje'},
    {v:'gordianus_jehadin',l:'Gordianus Jehadin'},
    {v:'gregorius_alfares_amal',l:'Gregorius Alfares Amal'},
    {v:'ignasius_arseno_aba',l:'Ignasius Arseno Aba'},
    {v:'januar_erdilon_suri_hayon',l:'Januar Erdilon Suri Hayon'},
    {v:'jesenferter_rapang',l:'Jesenferter Rapang'},
    {v:'klaudio_seve_talion',l:'Klaudio Seve Talion'},
    {v:'lusiana_cahaya_rana',l:'Lusiana Cahaya Rana'},
    {v:'margareta_cerin_angkar',l:'Margareta Cerin Angkar'},
    {v:'maria_adinda_linut',l:'Maria Adinda Linut'},
    {v:'maria_bricilia_celsa',l:'Maria Bricilia Celsa'},
    {v:'maria_fiola_din',l:'Maria Fiola Din'},
    {v:'maria_jeane_kembo',l:'Maria Jeane Kembo'},
    {v:'maria_olivia_fontain',l:'Maria Olivia Fontain'},
    {v:'martir_enda_sumarlin',l:'Martir Enda Sumarlin'},
    {v:'novaldi_javier_amal',l:'Novaldi Javier Amal'},
    {v:'novalia_monika_saskia',l:'Novalia Monika Saskia'},
    {v:'patrisius_kesi_stoner',l:'Patrisius Kesi Stoner'},
    {v:'paulus_putra_miki',l:'Paulus Putra Miki'},
    {v:'piternus_aldycapirlo',l:'Piternus Aldycapirlo'},
    {v:'teresia_tania_suhartin',l:'Teresia Tania Suhartin'},
    {v:'velisiandra_trivia_sumarlin',l:'Velisiandra Trivia Sumarlin'},
    {v:'viktorianus_moreno',l:'Viktorianus Moreno'},
    {v:'vinsensius_ajril_ambun',l:'Vinsensius Ajril Ambun'},
    {v:'vitalianus_merici_sumar',l:'Vitalianus Merici Sumar'},
    {v:'wilfebri_oswaldus_bero',l:'Wilfebri Oswaldus Bero'},
    {v:'yosefina_atma_kusuma_patut',l:'Yosefina Atma Kusuma Patut'},
    {v:'yuanita_wulandari_deagon',l:'Yuanita Wulandari Deagon'},
  ],
  'leonardus_mawardi': [
    {v:'aloisius_orlando_s_luruk',l:'Aloisius Orlando S. Luruk'},
    {v:'arfan_tantu',l:'Arfan Tantu'},
    {v:'elciana_kanul',l:'Elciana Kanul'},
    {v:'ferdinandus_putra_chafara_r',l:'Ferdinandus Putra Chafara R'},
    {v:'gilberto_carlo_jemalu',l:'Gilberto Carlo Jemalu'},
    {v:'gunfrantus_jenaman',l:'Gunfrantus Jenaman'},
    {v:'herkolanus_wang',l:'Herkolanus Wang'},
    {v:'ignasius_raflino_pratama_jompal',l:'Ignasius Raflino Pratama Jompal'},
    {v:'jefrianus_domi',l:'Jefrianus Domi'},
    {v:'kamsia',l:'Kamsia'},
    {v:'ketrina_cantika_celsi',l:'Ketrina Cantika Celsi'},
    {v:'leonardo_mahardika_tingka',l:'Leonardo Mahardika Tingka'},
    {v:'maria_divani_calista_banggut',l:'Maria Divani Calista Banggut'},
    {v:'maria_juliva_grezela_ayu',l:'Maria Juliva Grezela Ayu'},
    {v:'maria_septiani_m_jebarus',l:'Maria Septiani M. Jebarus'},
    {v:'martinus_alvianto_damo',l:'Martinus Alvianto Damo'},
    {v:'milania_ambun',l:'Milania Ambun'},
    {v:'quintus_r_tangkut',l:'Quintus R. Tangkut'},
    {v:'rafaello_afrisco_ndona',l:'Rafaello Afrisco Ndona'},
    {v:'revano_tamo_amanaot',l:'Revano Tamo Amanaot'},
    {v:'simon_trismon_samur',l:'Simon Trismon Samur'},
    {v:'vinsensius_yuda_saputra',l:'Vinsensius Yuda Saputra'},
    {v:'yohana_elisabet_mol',l:'Yohana Elisabet Mol'},
    {v:'yongginus_alberto_hartono',l:'Yongginus Alberto Hartono'},
    {v:'yosefina_elda_hibur',l:'Yosefina Elda Hibur'},
    {v:'yulius_julio_pane',l:'Yulius Julio Pane'},
  ],
  'magdalena_sabe': [
    {v:'agresia_arot',l:'Agresia Arot'},
    {v:'agustin_kirana_talar',l:'Agustin Kirana Talar'},
    {v:'aloysius_jeriko_madut',l:'Aloysius Jeriko Madut'},
    {v:'andreas_karman',l:'Andreas Karman'},
    {v:'arkan_anjela_selviani',l:'Arkan Anjela Selviani'},
    {v:'benedikta_jelita',l:'Benedikta Jelita'},
    {v:'delfina_eliana',l:'Delfina Eliana'},
    {v:'edmundus_dilan_wanggor',l:'Edmundus Dilan Wanggor'},
    {v:'ekavantura_gerlan',l:'Ekavantura Gerlan'},
    {v:'febronia_ndeo',l:'Febronia Ndeo'},
    {v:'gregorius_agung',l:'Gregorius Agung'},
    {v:'hilarius_argon',l:'Hilarius Argon'},
    {v:'jhosua_devanka_kantur',l:'Jhosua Devanka Kantur'},
    {v:'kelianus_jemat',l:'Kelianus Jemat'},
    {v:'kresensia_setia',l:'Kresensia Setia'},
    {v:'maria_flora',l:'Maria Flora'},
    {v:'maria_kresensia_madut',l:'Maria Kresensia Madut'},
    {v:'maria_rosvita',l:'Maria Rosvita'},
    {v:'mariana_ladung',l:'Mariana Ladung'},
    {v:'mariani_ladung',l:'Mariani Ladung'},
    {v:'marianus_enggot',l:'Marianus Enggot'},
    {v:'marselinus_evansi_anggun',l:'Marselinus Evansi Anggun'},
    {v:'natalia_mayora_daiman',l:'Natalia Mayora Daiman'},
    {v:'pakhormius_mai',l:'Pakhormius Mai'},
    {v:'paulinus_aquino_koko',l:'Paulinus Aquino Koko'},
    {v:'renaldis_anur',l:'Renaldis Anur'},
    {v:'romanus_riski_putra',l:'Romanus Riski Putra'},
    {v:'salfina_sartika',l:'Salfina Sartika'},
    {v:'stanislaus_sagun',l:'Stanislaus Sagun'},
    {v:'yosef_alfan_kaso',l:'Yosef Alfan Kaso'},
  ],
  'maria_diana_banut': [
    {v:'agustina_tiara_nalkofi',l:'Agustina Tiara Nalkofi'},
    {v:'alga_farid',l:'Alga Farid'},
    {v:'angelika_kurniati_hamen',l:'Angelika Kurniati Hamen'},
    {v:'claudio_valentamur',l:'Claudio Valentamur'},
    {v:'exra_xander_chornelius_jebarut_mantut',l:'Exra Xander Chornelius Jebarut Mantut'},
    {v:'familia_mutiara_johor',l:'Familia Mutiara Johor'},
    {v:'febrianus_bertolomeus_yoasa',l:'Febrianus Bertolomeus Yoasa'},
    {v:'fransisko_sajua_ngampa',l:'Fransisko Sajua Ngampa'},
    {v:'frederikus_realino_laput',l:'Frederikus Realino Laput'},
    {v:'ghio_jeconia_rojo_mola',l:'Ghio Jeconia Rojo Mola'},
    {v:'hieronimus_gerard_ambur',l:'Hieronimus Gerard Ambur'},
    {v:'karitasiana_bili',l:'Karitasiana Bili'},
    {v:'maria_angelina_kartika_sari',l:'Maria Angelina Kartika Sari'},
    {v:'maria_sri_rahayu_bongkar',l:'Maria Sri Rahayu Bongkar'},
    {v:'mariani_citra_jemadu',l:'Mariani Citra Jemadu'},
    {v:'ronaldus_gosa_gado',l:'Ronaldus Gosa Gado'},
    {v:'silviani_kirana_kagung',l:'Silviani Kirana Kagung'},
    {v:'theresia_yulisna_ngorang',l:'Theresia Yulisna Ngorang'},
    {v:'yohanes_putra_pongko',l:'Yohanes Putra Pongko'},
    {v:'yusufiano_betran_jebaru',l:'Yusufiano Betran Jebaru'},
  ],
  'miseldis_hamilda': [
    {v:'agustino_hilari_hibur',l:'Agustino Hilari Hibur'},
    {v:'alvonosus_wagul',l:'Alvonosus Wagul'},
    {v:'andrasius_supardi',l:'Andrasius Supardi'},
    {v:'angelina_maria_delima',l:'Angelina Maria Delima'},
    {v:'athanasius_janes_susanto',l:'Athanasius Janes Susanto'},
    {v:'aurelia_anita_jun',l:'Aurelia Anita Jun'},
    {v:'citra_manuraja',l:'Citra Manuraja'},
    {v:'elisabet_klarisa_wela',l:'Elisabet Klarisa Wela'},
    {v:'emanuel_nael',l:'Emanuel Nael'},
    {v:'eustakia_selmayani_jebau',l:'Eustakia Selmayani Jebau'},
    {v:'febriani_agung',l:'Febriani Agung'},
    {v:'gervasius_rofitianus_terang',l:'Gervasius Rofitianus Terang'},
    {v:'hendriko_sandur',l:'Hendriko Sandur'},
    {v:'jackson_purnama_ds',l:'Jackson Purnama (Ds)'},
    {v:'maria_arena_lestari',l:'Maria Arena Lestari'},
    {v:'maria_dian_hambut',l:'Maria Dian Hambut'},
    {v:'maria_gema_galgani_sahat',l:'Maria Gema Galgani Sahat'},
    {v:'maria_julita_setia',l:'Maria Julita Setia'},
    {v:'maria_vinsensia_momang',l:'Maria Vinsensia Momang'},
    {v:'marselo_halu',l:'Marselo Halu'},
    {v:'nova_aditya_malvin',l:'Nova Aditya Malvin'},
    {v:'rafael_jemparu',l:'Rafael Jemparu'},
    {v:'satria_salut',l:'Satria Salut'},
    {v:'septiana_nahut',l:'Septiana Nahut'},
    {v:'viktorianus_dangkut',l:'Viktorianus Dangkut'},
    {v:'yohanes_kevintus_aber',l:'Yohanes Kevintus Aber'},
    {v:'yosep_satria_rm_anggul',l:'Yosep Satria R.M. Anggul'},
    {v:'yunatia_setia_ds',l:'Yunatia Setia (Ds)'},
  ],
  'stanis_j__ngalu': [
    {v:'andreas_ganti_guntur',l:'Andreas Ganti Guntur'},
    {v:'aprianus_eizel_sumardi',l:'Aprianus Eizel Sumardi'},
    {v:'arian_fazar',l:'Arian Fazar'},
    {v:'avinoldus_sapak',l:'Avinoldus Sapak'},
    {v:'eduardus_panggang',l:'Eduardus Panggang'},
    {v:'elisabet_angginita_wijaya',l:'Elisabet Angginita Wijaya'},
    {v:'enjilia_viani_putri_naeng',l:'Enjilia Viani Putri Naeng'},
    {v:'fitri_abiliya_untahwa',l:'Fitri Abiliya Untahwa'},
    {v:'fransiskus_j_pirlo_angke',l:'Fransiskus J. Pirlo Angke'},
    {v:'januarius_evaldo_sungga',l:'Januarius Evaldo Sungga'},
    {v:'leonardo_bertino_mamput',l:'Leonardo Bertino Mamput'},
    {v:'maria_ana_junita_nanda',l:'Maria Ana Junita Nanda'},
    {v:'maria_noya',l:'Maria Noya'},
    {v:'maria_wulandari_jemahan',l:'Maria Wulandari Jemahan'},
    {v:'marianus_r_jeradut',l:'Marianus R. Jeradut'},
    {v:'paskalia_nera_jenina',l:'Paskalia Nera Jenina'},
    {v:'paskalis_aldora',l:'Paskalis Aldora'},
    {v:'priska_saputri_daim',l:'Priska Saputri Daim'},
    {v:'pudensianus_suyusta_edor',l:'Pudensianus Suyusta Edor'},
    {v:'rahmad_dani',l:'Rahmad Dani'},
    {v:'raihan_afina',l:'Raihan Afina'},
    {v:'stefanus_wangku',l:'Stefanus Wangku'},
    {v:'yusuf_usman',l:'Yusuf Usman'},
  ],
};

// ── Active data (diisi saat init) ────────────────────────────────
let CHILDREN_BY_WORKER = null;

// ── Helpers ──────────────────────────────────────────────────────
function populateWorkerSelect(selectEl) {
  if (!selectEl) return;
  selectEl.innerHTML = '<option value="">— Pilih CBR Worker —</option>';
  CBR_WORKERS.forEach(w => {
    const o = document.createElement('option');
    o.value = w.value; o.textContent = w.label;
    selectEl.appendChild(o);
  });
}

function populateChildSelect(workerValue, childSelectEl) {
  if (!childSelectEl) return;
  const source = CHILDREN_BY_WORKER || CHILDREN_FALLBACK;
  if (!workerValue || !source[workerValue]) {
    childSelectEl.innerHTML = '<option value="">— Pilih CBR Worker dulu —</option>';
    childSelectEl.disabled = true;
    return;
  }
  const list = [...source[workerValue]].sort((a,b) => a.l.localeCompare(b.l,'id'));
  childSelectEl.innerHTML = '<option value="">— Pilih Nama Anak —</option>';
  list.forEach(c => {
    const o = document.createElement('option');
    o.value = c.v; o.textContent = c.l;
    childSelectEl.appendChild(o);
  });
  childSelectEl.disabled = false;
}

// ── Cache ─────────────────────────────────────────────────────────
function loadFromCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return false;
    const parsed = JSON.parse(raw);
    if (Date.now() - parsed.fetchedAt > CACHE_TTL_MS) return false;
    CHILDREN_BY_WORKER = parsed.data;
    return true;
  } catch { return false; }
}

async function fetchFromSheets() {
  try {
    const res  = await fetch(APPS_SCRIPT_URL + '?action=children', { cache: 'no-store' });
    const json = await res.json();
    if (json.status !== 'ok' || !json.data) throw new Error(json.error || 'bad response');
    CHILDREN_BY_WORKER = {};
    Object.entries(json.data).forEach(([wVal, wData]) => {
      CHILDREN_BY_WORKER[wVal] = wData.children;
    });
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data: CHILDREN_BY_WORKER, fetchedAt: Date.now() }));
    return true;
  } catch (err) {
    console.warn('[data.js] fetch gagal:', err.message);
    return false;
  }
}

// ── Init — dipanggil SEBELUM DOMContentLoaded halaman ────────────
// Gunakan callback pattern agar halaman tahu kapan data siap
async function initChildrenData(callback) {
  // 1. Coba cache
  if (!loadFromCache()) {
    // 2. Coba fetch online
    if (navigator.onLine) {
      await fetchFromSheets();
    }
    // 3. Fallback hardcoded
    if (!CHILDREN_BY_WORKER) {
      CHILDREN_BY_WORKER = CHILDREN_FALLBACK;
      console.warn('[data.js] pakai data hardcoded');
    }
  } else {
    // Cache ada, fetch background untuk update
    if (navigator.onLine) {
      fetchFromSheets().catch(() => {});
    }
  }
  if (callback) callback();
}

// ── Tambah anak baru ──────────────────────────────────────────────
async function tambahAnakBaru(workerValue, workerLabel, namaAnakLabel) {
  function toVal(s) {
    return s.toLowerCase().replace(/[^a-z0-9\s]/g,'').replace(/\s+/g,'_').trim();
  }
  const namaAnakValue = toVal(namaAnakLabel);
  try {
    const res  = await fetch(APPS_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ modul:'tambah_anak', cbrWorkerValue:workerValue,
        cbrWorkerLabel:workerLabel, namaAnakValue, namaAnakLabel })
    });
    const json = await res.json();
    if (json.status === 200) {
      if (!CHILDREN_BY_WORKER[workerValue]) CHILDREN_BY_WORKER[workerValue] = [];
      CHILDREN_BY_WORKER[workerValue].push({ v: namaAnakValue, l: namaAnakLabel });
      localStorage.setItem(CACHE_KEY, JSON.stringify({ data: CHILDREN_BY_WORKER, fetchedAt: Date.now() }));
      return { ok: true, value: namaAnakValue, label: namaAnakLabel };
    }
    return { ok: false, message: json.message };
  } catch (err) {
    return { ok: false, message: err.message };
  }
}
