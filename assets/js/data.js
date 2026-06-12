// ================================================================
// BEN-Field: Shared Data — CBR Workers & Children
// Digunakan oleh semua modul (perencanaan, buku harian, evaluasi)
// ================================================================

const CBR_WORKERS = [
  { value: 'jack_roka',               label: 'Jack Roka' },
  { value: 'laurensius_h__semparang', label: 'Laurensius Herbianto' },
  { value: 'leonardus_mawardi',       label: 'Leonardus M. Mawardi' },
  { value: 'magdalena_sabe',          label: 'Magdalena Sabe' },
  { value: 'magdalena_siung',         label: 'Elfrida Suryati' },
  { value: 'maria_diana_banut',       label: 'Maria Diana Banut' },
  { value: 'miseldis_hamilda',        label: 'Miseldis Halmida' },
  { value: 'stanis_j__ngalu',         label: 'Stanis J. Ngalu' }
];

const CHILDREN_BY_WORKER = {
  'magdalena_siung': [
    {v:'elentrida_muliati_murni',   l:'Elentrida Muliati Murni'},
    {v:'fransiska_santiana_elos',   l:'Natalia Delsindi Sanul'},
    {v:'kresensia_kamelda_putri',   l:'Kresensia Kamelda Putri'},
    {v:'nofrinda_ngamut',           l:'Jenselsiana Onam'},
    {v:'philippus_neri_sanja',      l:'Philippus Neri Sanja'},
    {v:'vebrianus_jemarus',         l:'Felisitas Alfinda Lulus'},
    {v:'yohanes_leonardus_garut',   l:'Yohanes Leonardus Garut'},
    {v:'yosef_apriliano_nyoman',    l:'Yohanes Royan Saputra Dagal'}
  ],
  'jack_roka': [
    {v:'alfredo_ndak',                    l:'Alfredo Ndak'},
    {v:'antonio_febriano_ono_ompot',      l:'Antonio Febriano Ono Ompot'},
    {v:'antonius_retno_serto',            l:'Antonius Retno Serto'},
    {v:'asisi_aglisia_kurnia',            l:'Asisi Aglisia Kurnia'},
    {v:'aurelia_vanya_andromeda',         l:'Aurelia Vanya Andromeda'},
    {v:'bonefasius_nurung',               l:'Bonefasius Nurung'},
    {v:'brianus_donot',                   l:'Brianus Donot'},
    {v:'dionisius_irfan_jaya',            l:'Dionisius Irfan Jaya'},
    {v:'elisa_astiana_gamung',            l:'Elisa Astiana Gamung'},
    {v:'epivio_ganggus',                  l:'Epivio Ganggus'},
    {v:'fransiska_anjela',                l:'Fransiska Anjela'},
    {v:'fransiskus_dika_habut',           l:'Fransiskus Dika Habut'},
    {v:'frederikus_a__dagur__ds',         l:'Frederikus A. Dagur (Ds)'},
    {v:'gabriel_alexander_wilson_oboth',  l:'Yohanes Ridianus Joni'},
    {v:'jerianus_jhon',                   l:'Jerianus Jhon'},
    {v:'natasha_eugenia_palus',           l:'Natasha Eugenia Palus'},
    {v:'oktaviani_dais',                  l:'Oktaviani Dais'},
    {v:'robinson_wahar',                  l:'Robinson Wahar'},
    {v:'stefiani_jehabut',                l:'Stefiani Jehabut'},
    {v:'wihelmus_agung',                  l:'Wihelmus Agung'},
    {v:'yanuarius_gan_jeferison__ds',     l:'Yanuarius Gan Jeferison (Ds)'},
    {v:'yohana_natalia_bahagia',          l:'Yohana Natalia Bahagia'},
    {v:'yulita_klaudia_oktaviani',        l:'Yulita Klaudia Oktaviani'},
    {v:'bernadeta_v_j_ndavas',            l:'Bernadeta V.J Ndavas'}
  ],
  'laurensius_h__semparang': [
    {v:'adelia_yohana_luhur',         l:'Adelia Yohana Luhur'},
    {v:'afrilianus_jera',             l:'Afrilianus Jera'},
    {v:'andreas_leonanda__slb',       l:'Andreas Leonanda (SLB)'},
    {v:'antonius_junino_gapon',       l:'Antonius Junino Gapon'},
    {v:'arenfantus_nenggos',          l:'Arenfantus Nenggos'},
    {v:'basilika_jiani_ngara',        l:'Basilika Jiani Ngara'},
    {v:'beatrix_serviana_toton',      l:'Beatrix Serviana Toton'},
    {v:'bernadino_keor__slb',         l:'Bernadino Keor (SLB)'},
    {v:'claudius_aldi_ndaur',         l:'Claudius Aldi Ndaur'},
    {v:'eltreda_jenita_moa',          l:'Eltreda Jenita Moa'},
    {v:'ernesti_yolanda_neno',        l:'Ernesti Yolanda Neno'},
    {v:'flora_ekkliysia_muel',        l:'Flora Ekkliysia Muel'},
    {v:'fransiska_pradela_juita',     l:'Fransiska Pradela Juita'},
    {v:'geovani_laura_enje',          l:'Geovani Laura Enje'},
    {v:'gordianus_jehadin',           l:'Gordianus Jehadin'},
    {v:'gregorius_alfares_amal',      l:'Gregorius Alfares Amal'},
    {v:'ignasius_arseno_aba',         l:'Ignasius Arseno Aba'},
    {v:'januar_erdilon_suri_hayon',   l:'Januar Erdilon Suri Hayon'},
    {v:'jesenferter_rapang',          l:'Jesenferter Rapang'},
    {v:'klaudio_seve_talion',         l:'Klaudio Seve Talion'},
    {v:'lusiana_cahaya_rana',         l:'Lusiana Cahaya Rana'},
    {v:'margareta_cerin_angkar',      l:'Margareta Cerin Angkar'},
    {v:'maria_adinda_linut',          l:'Maria Adinda Linut'},
    {v:'maria_bricilia_celsa',        l:'Maria Bricilia Celsa'},
    {v:'maria_fiola_din',             l:'Maria Fiola Din'},
    {v:'maria_jeane_kembo',           l:'Maria Jeane Kembo'},
    {v:'maria_olivia_fontain',        l:'Maria Olivia Fontain'},
    {v:'martir_enda_sumarlin',        l:'Martir Enda Sumarlin'},
    {v:'novaldi_javier_amal',         l:'Novaldi Javier Amal'},
    {v:'novalia_monika_saskia',       l:'Novalia Monika Saskia'},
    {v:'patrisius_kesi_stoner',       l:'Patrisius Kesi Stoner'},
    {v:'paulus_putra_miki',           l:'Paulus Putra Miki'},
    {v:'piternus_aldycapirlo',        l:'Piternus Aldycapirlo'},
    {v:'teresia_tania_suhartin',      l:'Teresia Tania Suhartin'},
    {v:'velisiandra_trivia_sumarlin', l:'Velisiandra Trivia Sumarlin'},
    {v:'viktorianus_moreno',          l:'Viktorianus Moreno'},
    {v:'vinsensius_ajril_ambun',      l:'Vinsensius Ajril Ambun'},
    {v:'vitalianus_merici_sumar',     l:'Vitalianus Merici Sumar'},
    {v:'wilfebri_oswaldus_bero',      l:'Wilfebri Oswaldus Bero'},
    {v:'yosefina_atma_kusuma_patut',  l:'Yosefina Atma Kusuma Patut'},
    {v:'yuanita_wulandari_deagon',    l:'Yuanita Wulandari Deagon'}
  ],
  'leonardus_mawardi': [
    {v:'agustinus_darung',                l:'Gilberto Carlo Jemalu'},
    {v:'aloisius_orlando_s__luruk',       l:'Aloisius Orlando S. Luruk'},
    {v:'arfan_tantu',                     l:'Arfan Tantu'},
    {v:'elciana_kanul',                   l:'Elciana Kanul'},
    {v:'ferdinandus_putra_chafara_r',     l:'Ferdinandus Putra Chafara R'},
    {v:'herkolanus_wang',                 l:'Herkolanus Wang'},
    {v:'jefrianus_domi',                  l:'Jefrianus Domi'},
    {v:'kamsia',                          l:'Kamsia'},
    {v:'ketrina_cantika_celsi',           l:'Ketrina Cantika Celsi'},
    {v:'leonardo_mahardika_tingka',       l:'Leonardo Mahardika Tingka'},
    {v:'maria_divani_calista_banggut',    l:'Maria Divani Calista Banggut'},
    {v:'maria_elvika_nasri',              l:'Gunfrantus Jenaman'},
    {v:'maria_juliva_grezela_ayu',        l:'Maria Juliva Grezela Ayu'},
    {v:'maria_septiani_m__jebarus',       l:'Maria Septiani M. Jebarus'},
    {v:'maria_suryati_sanung',            l:'Ignasius Raflino Pratama Jompal'},
    {v:'martinus_alvianto_damo',          l:'Martinus Alvianto Damo'},
    {v:'milania_ambun',                   l:'Milania Ambun'},
    {v:'natalia_fitriani_putri_charita',  l:'Natalia Fitriani Putri Charita'},
    {v:'olfani_fatima_anul',              l:'Olfani Fatima Anul'},
    {v:'quintus_r__tangkut',             l:'Quintus R. Tangkut'},
    {v:'rafaello_afrisco_ndona',          l:'Rafaello Afrisco Ndona'},
    {v:'revano_tamo_amanaot',             l:'Revano Tamo Amanaot'},
    {v:'vinsensius_yuda_saputra',         l:'Vinsensius Yuda Saputra'},
    {v:'yohana_elisabet_mol',             l:'Yohana Elisabet Mol'},
    {v:'yosefina_elda_hibur',             l:'Yosefina Elda Hibur'},
    {v:'yulius_julio_pane',               l:'Yulius Julio Pane'}
  ],
  'magdalena_sabe': [
    {v:'agresia_arot',              l:'Agresia Arot'},
    {v:'agustin_kirana_talar',      l:'Agustin Kirana Talar'},
    {v:'aloysius_jeriko_madut',     l:'Aloysius Jeriko Madut'},
    {v:'andreas_karman',            l:'Andreas Karman'},
    {v:'arkan_anjela_selviani',     l:'Arkan Anjela Selviani'},
    {v:'benedikta_jelita',          l:'Benedikta Jelita'},
    {v:'delfina_eliana',            l:'Delfina Eliana'},
    {v:'edmundus_dilan_wanggor',    l:'Edmundus Dilan Wanggor'},
    {v:'ekavantura_gerlan',         l:'Ekavantura Gerlan'},
    {v:'febronia_ndeo',             l:'Febronia Ndeo'},
    {v:'gregorius_agung',           l:'Gregorius Agung'},
    {v:'hilarius_argon',            l:'Hilarius Argon'},
    {v:'jhosua_devanka_kantur',     l:'Jhosua Devanka Kantur'},
    {v:'kelianus_jemat',            l:'Kelianus Jemat'},
    {v:'kresensia_setia',           l:'Kresensia Setia'},
    {v:'maria_flora',               l:'Maria Flora'},
    {v:'maria_kresensia_madut',     l:'Maria Kresensia Madut'},
    {v:'maria_rosvita',             l:'Maria Rosvita'},
    {v:'mariana_ladung',            l:'Mariana Ladung'},
    {v:'mariani_ladung',            l:'Mariani Ladung'},
    {v:'marianus_enggot',           l:'Marianus Enggot'},
    {v:'marselinus_evansi_anggun',  l:'Marselinus Evansi Anggun'},
    {v:'natalia_mayora_daiman',     l:'Natalia Mayora Daiman'},
    {v:'pakhormius_mai',            l:'Pakhormius Mai'},
    {v:'paulinus_aquino_koko',      l:'Paulinus Aquino Koko'},
    {v:'renaldis_anur',             l:'Renaldis Anur'},
    {v:'romanus_riski_putra',       l:'Romanus Riski Putra'},
    {v:'salfina_sartika',           l:'Salfina Sartika'},
    {v:'stanislaus_sagun',          l:'Stanislaus Sagun'},
    {v:'yosef_alfan_kaso',          l:'Yosef Alfan Kaso'}
  ],
  'maria_diana_banut': [
    {v:'agustina_tiara_nalkofi',                  l:'Agustina Tiara Nalkofi'},
    {v:'alga_farid',                              l:'Alga Farid'},
    {v:'angelika_kurniati_hamen',                 l:'Angelika Kurniati Hamen'},
    {v:'claudio_valentamur',                      l:'Claudio Valentamur'},
    {v:'exra_xander_chornelius_jebarut_mantut',   l:'Exra Xander Chornelius Jebarut Mantut'},
    {v:'familia_mutiara_johor',                   l:'Familia Mutiara Johor'},
    {v:'febrianus_bertolomeus_yoasa',             l:'Febrianus Bertolomeus Yoasa'},
    {v:'fransisko_sajua_ngampa',                  l:'Fransisko Sajua Ngampa'},
    {v:'frederikus_realino_laput',                l:'Frederikus Realino Laput'},
    {v:'ghio_jeconia_rojo_mola',                  l:'Ghio Jeconia Rojo Mola'},
    {v:'hieronimus_gerard_ambur',                 l:'Hieronimus Gerard Ambur'},
    {v:'karitasiana_bili',                        l:'Karitasiana Bili'},
    {v:'maria_angelina_kartika_sari',             l:'Maria Angelina Kartika Sari'},
    {v:'maria_sri_rahayu_bongkar',                l:'Maria Sri Rahayu Bongkar'},
    {v:'mariani_citra_jemadu',                    l:'Mariani Citra Jemadu'},
    {v:'ronaldus_gosa_gado',                      l:'Ronaldus Gosa Gado'},
    {v:'silviani_kirana_kagung',                  l:'Silviani Kirana Kagung'},
    {v:'theresia_yulisna_ngorang',                l:'Theresia Yulisna Ngorang'},
    {v:'yohanes_putra_pongko',                    l:'Yohanes Putra Pongko'},
    {v:'yusufiano_betran_jebaru',                 l:'Yusufiano Betran Jebaru'}
  ],
  'miseldis_hamilda': [
    {v:'alvonosus_wagul',           l:'Alvonosus Wagul'},
    {v:'andrasius_supardi',         l:'Andrasius Supardi'},
    {v:'athanasius_janes_susanto',  l:'Athanasius Janes Susanto'},
    {v:'aurelia_anita_jun',         l:'Aurelia Anita Jun'},
    {v:'citra_manuraja',            l:'Citra Manuraja'},
    {v:'elisabet_klarisa_wela',     l:'Elisabet Klarisa Wela'},
    {v:'emanuel_nael',              l:'Emanuel Nael'},
    {v:'eusabeus_jefson_danggar',   l:'Agustino Hilari Hibur'},
    {v:'eustakia_selmayani_jebau',  l:'Eustakia Selmayani Jebau'},
    {v:'febriani_agung',            l:'Febriani Agung'},
    {v:'gervasius_rofitianus_terang',l:'Gervasius Rofitianus Terang'},
    {v:'hendriko_sandur',           l:'Hendriko Sandur'},
    {v:'jackson_purnama__ds',       l:'Jackson Purnama (Ds)'},
    {v:'maria_arena_lestari',       l:'Maria Arena Lestari'},
    {v:'maria_dian_hambut',         l:'Maria Dian Hambut'},
    {v:'maria_gema_galgani_sahat',  l:'Maria Gema Galgani Sahat'},
    {v:'maria_julita_setia',        l:'Maria Julita Setia'},
    {v:'maria_vinsensia_momang',    l:'Maria Vinsensia Momang'},
    {v:'marselo_halu',              l:'Marselo Halu'},
    {v:'nova_aditya_malvin',        l:'Nova Aditya Malvin'},
    {v:'rafael_jemparu',            l:'Rafael Jemparu'},
    {v:'satria_salut',              l:'Satria Salut'},
    {v:'septiana_nahut',            l:'Septiana Nahut'},
    {v:'stefanus_gadil_jadur',      l:'Angelina Maria Delima'},
    {v:'viktorianus_dangkut',       l:'Viktorianus Dangkut'},
    {v:'yohanes_kevintus_aber',     l:'Yohanes Kevintus Aber'},
    {v:'yosep_satria_r_m__anggul',  l:'Yosep Satria R.M. Anggul'},
    {v:'yunatia_setia__ds',         l:'Yunatia Setia (Ds)'}
  ],
  'stanis_j__ngalu': [
    {v:'andreas_ganti_guntur',        l:'Andreas Ganti Guntur'},
    {v:'aprianus_eizel_sumardi',      l:'Aprianus Eizel Sumardi'},
    {v:'arian_fazar',                 l:'Arian Fazar'},
    {v:'avinoldus_sapak',             l:'Avinoldus Sapak'},
    {v:'eduardus_panggang',           l:'Eduardus Panggang'},
    {v:'elisabet_angginita_wijaya',   l:'Elisabet Angginita Wijaya'},
    {v:'enjilia_viani_putri_naeng',   l:'Enjilia Viani Putri Naeng'},
    {v:'fitri_abiliya_untahwa',       l:'Fitri Abiliya Untahwa'},
    {v:'fransiskus_j__pirlo_angke',   l:'Fransiskus J. Pirlo Angke'},
    {v:'fransiskus_juano_kalat',      l:'Maria Ana Junita Nanda'},
    {v:'januarius_evaldo_sungga',     l:'Januarius Evaldo Sungga'},
    {v:'leonardo_bertino_mamput',     l:'Leonardo Bertino Mamput'},
    {v:'maria_wulandari_jemahan',     l:'Maria Wulandari Jemahan'},
    {v:'marianus_r__jeradut',         l:'Marianus R. Jeradut'},
    {v:'paskalia_nera_jenina',        l:'Paskalia Nera Jenina'},
    {v:'paskalis_aldora',             l:'Paskalis Aldora'},
    {v:'priska_saputri_daim',         l:'Priska Saputri Daim'},
    {v:'pudensianus_suyusta_edor',    l:'Pudensianus Suyusta Edor'},
    {v:'rahmad_dani',                 l:'Rahmad Dani'},
    {v:'raihan_afina',                l:'Raihan Afina'},
    {v:'stefanus_wangku',             l:'Stefanus Wangku'},
    {v:'yohanes_fari_baru',           l:'Maria Noya'},
    {v:'yusuf_usman',                 l:'Yusuf Usman'}
  ]
};

// ── Shared helpers ──────────────────────────────────────────────

function populateWorkerSelect(selectEl) {
  selectEl.innerHTML = '<option value="">— Pilih CBR Worker —</option>';
  CBR_WORKERS.forEach(w => {
    const o = document.createElement('option');
    o.value = w.value; o.textContent = w.label;
    selectEl.appendChild(o);
  });
}

function populateChildSelect(workerValue, childSelectEl) {
  childSelectEl.innerHTML = '';
  if (!workerValue || !CHILDREN_BY_WORKER[workerValue]) {
    childSelectEl.innerHTML = '<option value="">— Pilih CBR Worker dulu —</option>';
    childSelectEl.disabled = true;
    return;
  }
  const list = [...CHILDREN_BY_WORKER[workerValue]].sort((a,b) => a.l.localeCompare(b.l));
  childSelectEl.innerHTML = '<option value="">— Pilih Nama Anak —</option>';
  list.forEach(c => {
    const o = document.createElement('option');
    o.value = c.v; o.textContent = c.l;
    childSelectEl.appendChild(o);
  });
  childSelectEl.disabled = false;
}

function getWorkerLabel(value) {
  return CBR_WORKERS.find(w => w.value === value)?.label || value;
}

function getChildLabel(workerValue, childValue) {
  return (CHILDREN_BY_WORKER[workerValue] || []).find(c => c.v === childValue)?.l || childValue;
}
