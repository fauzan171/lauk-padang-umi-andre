import padangFeastHero from './assets/padang-feast-hero.jpg';

export const HERO_IMAGE = padangFeastHero;

const commonsImage = (fileName) =>
  `https://commons.wikimedia.org/wiki/Special:Redirect/file/${encodeURIComponent(fileName)}`;

export const RESTAURANT_INFO = {
  name: "Warung Makan Padang Umi Andrew",
  shortName: "Umi Andrew",
  tagline: "Catering Masakan Padang & Lauk Rumahan di Cawang, Jakarta Timur",
  phone: "+62 857-2033-7580",
  phoneRaw: "6285720337580",
  address: "Jl. Dewi Sartika No. 128, Cawang, Kramat Jati, Jakarta Timur",
  addressDetail: "Dekat Simpang Cawang Kompor, mudah dicapai dari Tebet, Cililitan, dan Pancoran.",
  landmark: "Dekat Simpang Cawang Kompor • 3 Menit dari Halte TransJakarta BNN & LRT Cawang",
  hours: "09.00 – 22.00 WIB (Buka Setiap Hari)",
  /* Belum dirender di mana pun: link merchant ini belum terverifikasi dan
     diduga placeholder. Ganti dengan URL asli dari dashboard GoFood/GrabFood,
     lalu pasang kembali tombolnya (BrandLogos.jsx + CSS .gf-card/.gr-card
     sengaja dipertahankan untuk itu). */
  gofoodUrl: "https://gofood.link/u/padang-umi-andrew-cawang",
  grabfoodUrl: "https://food.grab.com/id/id/restaurant/warung-makan-padang-umi-andrew-cawang",
  mapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15864.298285741634!2d106.8606785!3d-6.2538965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3ab18bfa9fb%3A0x6b49826a7e5ea5db!2sCawang%2C%20Kec.%20Kramat%20jati%2C%20Kota%20Jakarta%20Timur!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid",
  mapsUrl: "https://maps.google.com/?q=Cawang+Jakarta+Timur",
  coverageArea: [
    "Cawang", "Dewi Sartika", "Cililitan", "Tebet",
    "Pancoran", "Kampung Melayu", "Halim", "Kramat Jati"
  ]
};

const waLink = (message) =>
  `https://wa.me/${RESTAURANT_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;

export const WA_LINKS = {
  catering: waLink("Halo Umi Andrew, saya mau konsultasi pesanan CATERING. Acaranya: [jenis acara], jumlah porsi: [..] porsi, tanggal: [..]. Boleh dibantu susun menunya?"),
  nasiKotak: waLink("Halo Umi Andrew, saya mau pesan NASI KOTAK untuk [kantor/acara]. Jumlah: [..] kotak, tanggal: [..]."),
  prasmanan: waLink("Halo Umi Andrew, saya mau tanya paket PRASMANAN/BUFFET untuk acara di [rumah/gedung]. Jumlah tamu: [..] orang, tanggal: [..]."),
  harian: waLink("Halo Umi Andrew, saya mau tanya CATERING HARIAN/RANTANGAN untuk [keluarga/kantor]."),
  laukPadang: waLink("Halo Umi Andrew, saya mau pesan LAUK PADANG untuk acara (rendang/ayam pop/gulai). Jumlah porsi: [..], tanggal: [..]."),
  menuHarian: waLink("Halo Umi Andrew, saya mau pesan menu harian untuk dikirim/diambil."),
  menuDetail: (name) => waLink(`Halo Umi Andrew, saya mau pesan ${name}. Bisa dikirim/diambil jam berapa?`),
  lokasi: waLink("Halo Umi Andrew, saya mau tanya lokasi warung dan ketersediaan menu hari ini.")
};

/* Menu yang memang tersedia tiap hari di warung. Harga tidak ditampilkan
   karena mengikuti porsi dan kesepakatan — diarahkan ke WhatsApp. */
export const DAILY_MENU_GROUPS = [
  {
    id: "paket-nasi",
    label: "Paket Nasi + Dadar Barendo",
    note: "Satu paket sudah termasuk nasi putih dan telur dadar barendo — dadar khas Padang yang pinggirannya berenda garing, tengahnya tetap tebal dan gurih.",
    items: [
      {
        id: "cumi-cabe-ijo",
        name: "Cumi Cabe Ijo + Dadar Barendo + Nasi",
        desc: "Cumi dimasak dengan cabe ijo dan bawang, rasanya pedas segar tanpa amis. Dipadukan telur dadar barendo yang garing di pinggir.",
        badge: "Paling Dipesan",
        traits: ["Pedas segar", "Termasuk nasi", "Dadar barendo"]
      },
      {
        id: "ayam-suwir-balado",
        name: "Ayam Suwir Balado + Dadar Barendo + Nasi",
        desc: "Ayam disuwir lalu ditumis balado merah sampai bumbunya meresap dan tidak berair, jadi aman dibungkus. Pedasnya bersih.",
        badge: "Favorit",
        traits: ["Balado merah", "Termasuk nasi", "Dadar barendo"]
      }
    ]
  },
  {
    id: "mie-nasi-goreng",
    label: "Mie, Kwetiaw & Nasi Goreng",
    note: "Dimasak per pesanan supaya masih panas saat sampai. Bisa request tingkat pedas dan tambahan telur.",
    items: [
      {
        id: "kwetiaw-goreng",
        name: "Kwetiaw Goreng",
        desc: "Kwetiaw digoreng dengan api besar sampai wangi, ditambah sayur dan telur. Teksturnya kenyal, tidak lembek.",
        traits: ["Wangi asap", "Bisa request pedas"]
      },
      {
        id: "nasi-goreng",
        name: "Nasi Goreng",
        desc: "Nasi goreng bumbu rumahan dengan telur dan sayur. Porsinya mengenyangkan untuk makan siang.",
        traits: ["Porsi kenyang", "Bisa tambah telur"]
      },
      {
        id: "mie-goreng",
        name: "Mie Goreng",
        desc: "Mie goreng kering berbumbu, dicampur sayur dan telur. Cocok untuk makan cepat di sela kerja.",
        traits: ["Kering berbumbu", "Bisa request pedas"]
      },
      {
        id: "mie-rebus",
        name: "Mie Rebus",
        desc: "Mie berkuah hangat dengan sayur dan telur. Paling pas dipesan saat cuaca dingin atau untuk makan malam.",
        traits: ["Kuah hangat", "Nyaman di perut"]
      }
    ]
  }
];

export const CATERING_TYPES = [
  {
    id: "nasi-kotak",
    title: "Nasi Kotak Kantor & Rapat",
    desc: "Untuk makan siang tim, meeting, training, atau acara kantor di sekitar Cawang. Lauk dikemas terpisah supaya tidak tumpah dan tetap rapi sampai tujuan.",
    points: ["Jadwal kirim bisa diatur per jam", "Lauk, kuah, dan sambal dipisah", "Label nama penerima bila perlu"],
    wa: "nasiKotak"
  },
  {
    id: "acara-keluarga",
    title: "Acara Keluarga & Syukuran",
    desc: "Arisan, ulang tahun, akikah, pengajian, dan syukuran rumah. Porsi ramean dengan lauk Padang yang biasa jadi hidangan utama acara.",
    points: ["Menu bisa disusun mengikuti budget", "Rendang & ayam pop untuk porsi besar", "Bisa diambil sendiri atau diantar"],
    wa: "catering"
  },
  {
    id: "prasmanan",
    title: "Prasmanan / Buffet",
    desc: "Beberapa lauk disajikan prasmanan untuk acara di rumah atau gedung. Kami bantu tentukan kombinasi lauk supaya tidak saling menutupi rasa.",
    points: ["Kombinasi lauk kering & berkuah", "Peralatan saji bisa dibicarakan", "Cocok untuk tamu 30 orang ke atas"],
    wa: "prasmanan"
  },
  {
    id: "harian",
    title: "Catering Harian & Rantangan",
    desc: "Langganan makan rutin untuk keluarga, anak kos, atau tim kecil. Menu berganti tiap hari supaya tidak bosan, tetap masakan rumahan.",
    points: ["Menu berganti harian", "Bisa atur jadwal mingguan", "Porsi menyesuaikan kebutuhan"],
    wa: "harian"
  }
];

export const CATERING_PACKAGES = [
  {
    id: "hemat",
    name: "Kotak Hemat",
    summary: "Porsi pas untuk makan siang rutin dan pesanan jumlah banyak.",
    contents: ["Nasi putih", "1 lauk utama", "Sayur harian", "Sambal", "Kerupuk"]
  },
  {
    id: "reguler",
    name: "Kotak Reguler",
    summary: "Paling sering dipesan untuk kantor dan acara keluarga.",
    contents: ["Nasi putih", "1 lauk utama", "1 lauk pendamping", "Sayur harian", "Sambal", "Kerupuk", "Air mineral"],
    featured: true
  },
  {
    id: "istimewa",
    name: "Kotak Istimewa",
    summary: "Untuk acara yang hidangannya mau terasa lebih spesial.",
    contents: ["Nasi putih atau nasi kuning", "Lauk utama premium (rendang / ayam pop)", "2 lauk pendamping", "Sayur harian", "Sambal ijo & sambal merah", "Kerupuk", "Buah potong", "Air mineral"]
  },
  {
    id: "prasmanan",
    name: "Prasmanan",
    summary: "Disajikan buffet, kombinasi lauk disusun bersama admin.",
    contents: ["Nasi putih / nasi kuning / nasi uduk", "3–5 pilihan lauk", "Sayur berkuah & tumis", "Aneka sambal", "Kerupuk & lalapan", "Buah atau minuman"]
  }
];

export const CATERING_STEPS = [
  {
    step: "01",
    title: "Ceritakan Kebutuhannya",
    desc: "Chat admin: jenis acara, jumlah porsi, tanggal, jam, dan lokasi pengiriman. Belum punya gambaran menu juga tidak apa-apa."
  },
  {
    step: "02",
    title: "Kami Susun Menu & Biayanya",
    desc: "Admin mengusulkan kombinasi lauk dan sayur yang masuk budget. Lauk dan harga bisa disesuaikan permintaan, jadi boleh minta diubah."
  },
  {
    step: "03",
    title: "Konfirmasi & Jadwal Dapur",
    desc: "Setelah menu disepakati, pesanan masuk jadwal dapur. Untuk porsi besar sebaiknya dikonfirmasi lebih awal supaya lauk dimasak bertahap."
  },
  {
    step: "04",
    title: "Diantar atau Diambil",
    desc: "Bisa diantar ke area Cawang dan sekitarnya lewat kurir instan, atau diambil sendiri di warung pada jam yang disepakati."
  }
];

/* Katalog lauk katering. Item ber-image tampil sebagai kartu, sisanya sebagai
   daftar — inilah yang jadi bahan referensi calon pelanggan. */
export const CATERING_CATALOG = [
  {
    id: "lauk-padang",
    title: "Lauk Padang & Minang",
    note: "Bumbu pekat dan santan harum. Kelompok ini yang paling sering diminta untuk nasi kotak, prasmanan, dan acara keluarga.",
    items: [
      {
        name: "Rendang Daging Sapi Hitam",
        desc: "Daging dimasak lama dengan santan, cabai, serai, lengkuas, dan daun jeruk sampai bumbu mengering dan gelap. Tahan lama, jadi paling aman untuk porsi besar dan pengiriman jauh.",
        tag: "Paling Laris",
        image: commonsImage("Rendang daging sapi asli Padang.JPG")
      },
      {
        name: "Ayam Pop Sambal Merah",
        desc: "Ayam ungkep air kelapa dan bawang putih, digoreng sebentar supaya tetap lembut, disajikan dengan sambal merah segar.",
        tag: "Menu Andalan",
        image: commonsImage("Ayam Pop 1.jpg")
      },
      {
        name: "Dendeng Balado Merah",
        desc: "Irisan daging tipis digoreng kering lalu dilumuri cabai merah balado. Pedasnya bersih dan tidak menutupi gurih daging.",
        tag: "Pedas Nagih",
        image: commonsImage("Dendeng balado.JPG")
      },
      {
        name: "Telur Dadar Barendo",
        desc: "Telur dadar tebal berbumbu daun bawang dan cabai, digoreng sampai pinggirannya berenda garing. Lauk pendamping yang hampir selalu ada di setiap kotak.",
        tag: "Pendamping Wajib",
        image: commonsImage("Nasi Padang Rendang Telur.jpg")
      },
      { name: "Gulai Tunjang (Kikil Sapi)" },
      { name: "Gulai Kepala Kakap Merah" },
      { name: "Gulai Tambunsu" },
      { name: "Ayam Bakar Bumbu Padang" },
      { name: "Gulai Ayam Kampung" },
      { name: "Dendeng Batokok" },
      { name: "Paru Goreng Balado" },
      { name: "Ikan Balado" },
      { name: "Ikan Kembung Balado" },
      { name: "Udang Balado Pete" },
      { name: "Cumi Cabe Ijo" },
      { name: "Ayam Suwir Balado" },
      { name: "Telur Balado" },
      { name: "Gulai Tauco" },
      { name: "Gulai Nangka (Cubadak)" },
      { name: "Sayur Kapau" },
      { name: "Perkedel Kentang Padang" },
      { name: "Daun Singkong Rebus Bumbu" },
      { name: "Sambal Ijo (Lado Mudo)" },
      { name: "Sambal Merah Padang" }
    ]
  },
  {
    id: "lauk-rumahan",
    title: "Lauk Rumahan Nusantara",
    note: "Untuk pelanggan yang butuh hidangan lebih netral dan tidak terlalu pedas — biasanya dipakai supaya satu acara bisa dinikmati semua tamu.",
    items: [
      {
        name: "Ayam Goreng Lengkuas",
        desc: "Ayam ungkep bumbu lengkuas, digoreng kering dengan taburan serundeng. Lauk aman yang disukai hampir semua usia.",
        tag: "Favorit Anak",
        image: commonsImage("Ayam bakar Aie Badarun.JPG")
      },
      { name: "Semur Daging Sapi" },
      { name: "Semur Ayam" },
      { name: "Orek Tempe Kering" },
      { name: "Tahu Bacem" },
      { name: "Tahu Balado" },
      { name: "Empal Gepuk" },
      { name: "Ikan Kembung Goreng" },
      { name: "Ikan Tongkol Suwir" },
      { name: "Sambal Goreng Ati Kentang" },
      { name: "Ayam Rica-Rica" },
      { name: "Terong Balado" },
      { name: "Perkedel Jagung" },
      { name: "Sop Ayam Sayur" },
      { name: "Sop Iga" },
      { name: "Sayur Lodeh" },
      { name: "Capcay Goreng" },
      { name: "Tumis Buncis Wortel" },
      { name: "Kering Kentang Mustofa" }
    ]
  },
  {
    id: "nasi-mie",
    title: "Nasi, Mie & Kwetiaw",
    note: "Menu warung harian kami yang juga bisa dipesan dalam jumlah banyak untuk acara santai, rapat informal, atau konsumsi malam.",
    items: [
      {
        name: "Nasi Goreng Porsi Besar",
        desc: "Nasi goreng bumbu rumahan yang juga jadi menu harian warung. Bisa dipesan banyak untuk acara santai.",
        tag: "Menu Harian",
        image: commonsImage("Masakan padang.jpg")
      },
      { name: "Nasi Putih" },
      { name: "Nasi Kuning" },
      { name: "Nasi Uduk" },
      { name: "Kwetiaw Goreng" },
      { name: "Mie Goreng" },
      { name: "Mie Rebus" },
      { name: "Bihun Goreng Sayur" }
    ]
  },
  {
    id: "pelengkap",
    title: "Sayur, Sambal & Pelengkap",
    note: "Bagian yang bikin satu kotak terasa lengkap. Semua bisa diminta terpisah supaya tidak bercampur saat pengiriman.",
    items: [
      {
        name: "Gulai Nangka & Daun Singkong",
        desc: "Sayur wajib nasi Padang: gulai nangka muda dan daun singkong rebus berbumbu. Kuahnya bisa dikemas terpisah.",
        tag: "Pelengkap Khas",
        image: commonsImage("Nasi Padang With beef rendang.jpg")
      },
      { name: "Kerupuk Udang / Kerupuk Putih" },
      { name: "Lalapan Segar" },
      { name: "Acar Kuning" },
      { name: "Sambal Terasi" },
      { name: "Air Mineral Gelas atau Botol" },
      { name: "Buah Potong atau Pisang" },
      { name: "Kemasan Food-Grade Anti Tumpah" }
    ]
  }
];

export const CATERING_FAQ = [
  {
    q: "Lauk dan harganya bisa disesuaikan permintaan?",
    a: "Bisa. Itu justru inti layanan katering kami. Sebutkan budget per porsi dan jumlah tamu, nanti admin menyusun kombinasi lauk yang masuk — termasuk mengurangi atau mengganti lauk tertentu."
  },
  {
    q: "Berapa minimal porsi dan kapan harus pesan?",
    a: "Jumlah porsi dibicarakan langsung lewat WhatsApp karena menyesuaikan jenis acara. Untuk pesanan besar sebaiknya dikonfirmasi lebih awal supaya lauk sempat dimasak bertahap, bukan mendadak."
  },
  {
    q: "Apakah bisa antar, atau harus ambil sendiri?",
    a: "Dua-duanya bisa. Pengantaran ke area Cawang dan sekitarnya pakai kurir instan, atau diambil sendiri di warung pada jam yang disepakati."
  },
  {
    q: "Apakah semua masakan halal?",
    a: "Ya. Dapur kami masakan halal rumahan, dan bahan dibeli harian dari pasar sekitar Cawang."
  },
  {
    q: "Kalau mau menu di luar katalog, bisa?",
    a: "Boleh ditanyakan dulu. Katalog di halaman ini adalah yang paling sering kami masak, tapi permintaan khusus tetap bisa dibicarakan."
  }
];
