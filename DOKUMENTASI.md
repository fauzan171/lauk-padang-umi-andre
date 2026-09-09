# Dokumentasi Project — Warung Makan Padang Umi Andrew

> Landing page catering & warung harian di Cawang, Jakarta Timur.
> Dokumen ini memotret kondisi project per **9 September 2026** (commit `0524500`) sebagai bekal revamp menyeluruh.

---

## 1. Posisi Bisnis (BAGIAN PALING PENTING)

Baca ini sebelum menyentuh apa pun. Seluruh keputusan desain di project ini mengalir dari sini.

**Umi Andrew bukan rumah makan Padang dengan etalase lauk siap saji.** Realita operasionalnya:

| Aspek | Kenyataan |
|---|---|
| **Jalur utama** | **Catering.** Masakan Padang justru kuat di sini karena lauk & harga bisa disesuaikan permintaan, jadi tidak butuh stok. |
| **Stok lauk harian** | **Demand-nya kurang.** Menjual rendang / gulai tunjang / kepala kakap sebagai lauk etalase siap-saji tidak laku. |
| **Menu harian asli** | Hanya **6 item** — lihat §7.2 |
| **Positioning tepat** | Dapur rumahan yang melayani catering + warung harian sederhana |
| **Harga** | **Tidak pernah ditampilkan di website.** Selalu dinegosiasikan via WhatsApp. |

**Sejarah salah arah:** versi awal (commit `18f862c`) menjual situs ini sebagai rumah makan Padang klasik — rendang dapat foto hero, section spotlight sendiri, masuk navbar dan footer, plus 10 lauk Padang dipajang sebagai stok harian. Catering cuma jadi banner kecil di bawah grid menu. Itu mengoptimalkan hal yang lemah dan mengubur satu-satunya jalur yang demand-nya nyata. Commit `0ef7631` membalik semuanya.

**Aturan untuk revamp:**
- Jangan kembalikan framing "etalase lauk Padang harian".
- Lauk Padang (rendang, ayam pop, gulai, dendeng) boleh dipromosikan, tapi **selalu** sebagai katalog catering / by-order — bukan stok harian.
- Jangan tampilkan harga dalam bentuk apa pun.
- Sebelum menambah menu harian baru, konfirmasi dulu apakah benar-benar tersedia tiap hari.

---

## 2. Status Live & Repo

| Item | Nilai |
|---|---|
| Production URL | https://warung-padang-umi-andrew.vercel.app |
| Vercel project | `test2034/warung-padang-umi-andrew` |
| Vercel account | `andifauzan986-6960` |
| Git remote | `origin` → https://github.com/fauzan171/lauk-padang-umi-andre.git |
| Branch | `master` (sinkron dengan `origin/master`) |
| Visibilitas repo | **PUBLIC** |
| Auto-deploy | **BELUM** — deploy masih manual via CLI |

**Catatan:** nama repo GitHub (`lauk-padang-umi-andre`) berbeda dengan nama folder project (`warung-padang-umi-andrew`). Itu disengaja/dibiarkan, bukan bug.

### Deploy manual

Vercel CLI **tidak terpasang global** di mesin ini. Pakai `npx`:

```bash
npx --yes vercel@latest deploy --prod --yes
```

Auth sudah tersimpan di `~/Library/Application Support/com.vercel.cli/auth.json`, project sudah ter-link di `.vercel/project.json`, jadi tidak perlu login ulang. Deploy butuh ±15 detik dan otomatis ter-alias ke domain production.

Untuk auto-deploy tiap push: `vercel git connect`.

---

## 3. Tech Stack & Perintah

| | |
|---|---|
| Framework | React **19.2.8** |
| Build tool | Vite **8.2.2** |
| Plugin React | `@vitejs/plugin-react` 6.1.0 (memakai **Oxc**, bukan Babel/SWC) |
| Linter | **oxlint** 1.79.0 (bukan ESLint) |
| Ikon | `lucide-react` 1.42.0 |
| Font | Playfair Display (serif) + Plus Jakarta Sans (sans) via Google Fonts |
| Bahasa | JavaScript + JSX. **Tidak ada TypeScript** |
| Routing | **Tidak ada** — single page, anchor scroll |
| State | `useState` lokal di `App.jsx` saja (untuk modal). Tidak ada Redux/Context |
| Backend | **Tidak ada** — murni statis, semua CTA ke WhatsApp / Google Maps |

```bash
npm run dev       # dev server (default port 5173)
npm run build     # produksi -> dist/   (~450ms)
npm run lint      # oxlint              (~100ms)
npm run preview   # preview hasil build
```

**Tidak ada test sama sekali.** Tidak ada framework test terpasang. Verifikasi selama ini dilakukan lewat lint + build + inspeksi isi bundle produksi.

### Konfigurasi oxlint (`.oxlintrc.json`)

```json
{
  "plugins": ["react", "oxc"],
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

---

## 4. Struktur File

```
warung-padang-umi-andrew/
├── index.html                  # <head>: SEO + OG tags + Google Fonts
├── package.json
├── vite.config.js              # standar: plugin react, base default
├── .oxlintrc.json
├── .gitignore                  # termasuk .vercel
├── README.md                   # ⚠️ MASIH TEMPLATE DEFAULT VITE — belum diisi
├── DOKUMENTASI.md              # ← dokumen ini
├── .vercel/project.json        # link ke project Vercel
├── public/
│   ├── favicon.svg             # ⚠️ tidak direferensikan (lihat §13)
│   ├── icons.svg               # ⚠️ tidak direferensikan
│   └── og-image.jpg            # 282 KB, 1200×630, dipakai og:image
├── dist/                       # hasil build (gitignored)
└── src/
    ├── main.jsx                # entry: StrictMode + createRoot, import index.css
    ├── App.jsx                 # urutan section + sticky bar mobile + state modal
    ├── App.css                 # 3.026 baris — SEMUA styling ada di sini
    ├── index.css               # 40 baris — reset global + font + :root minor
    ├── data.js                 # 333 baris — SEMUA konten & konfigurasi
    ├── assets/
    │   ├── padang-feast-hero.jpg   # 343 KB, 1280×853 — DIPAKAI
    │   ├── padang-feast-hero.png   # 2,7 MB — TIDAK TERPAKAI, untracked
    │   ├── hero.png                # ⚠️ tidak terpakai
    │   ├── react.svg               # ⚠️ sisa template Vite
    │   └── vite.svg                # ⚠️ sisa template Vite
    └── components/
        ├── Navbar.jsx              # 100 baris
        ├── Hero.jsx                #  78
        ├── CateringHub.jsx         #  61  ← section gelap, layanan utama
        ├── CateringServices.jsx    #  91
        ├── CateringCatalog.jsx     #  99
        ├── About.jsx               #  80
        ├── MenuList.jsx            #  77
        ├── OrderChannels.jsx       #  81
        ├── DineIn.jsx              #  59
        ├── Testimonials.jsx        #  60
        ├── LocationMap.jsx         #  88
        ├── Footer.jsx              #  84
        ├── OrderModal.jsx          #  57
        └── BrandLogos.jsx          #  70  ⚠️ TIDAK DIPAKAI (lihat §12)
```

**Prinsip arsitektur:** semua teks, angka, daftar menu, dan URL terpusat di `src/data.js`. Komponen murni presentasional. Untuk mengubah konten, **cukup edit `data.js`** — tidak perlu menyentuh komponen.

---

## 5. Alur Halaman & Section ID

Urutan render di `App.jsx`:

| # | Komponen | `id` | Fungsi |
|---|---|---|---|
| — | `Navbar` | — | Top banner + header sticky + drawer mobile |
| 1 | `Hero` | `hero` | Headline catering-first, 2 CTA, foto hero |
| — | *(songket separator)* | — | `<div className="songket-separator-line">` |
| 2 | `CateringHub` | `catering` | **Section gelap.** 3 pilar keunggulan + CTA konsultasi |
| 3 | `CateringServices` | `layanan-catering` | 4 jenis layanan + 4 paket kotak + alur 4 langkah |
| 4 | `CateringCatalog` | `katalog-lauk` | Katalog 52 lauk + CTA request + FAQ |
| 5 | `About` | `about` | Cerita dapur, 3 value props |
| 6 | `MenuList` | `menu-harian` | 6 menu harian + banner cross-sell catering |
| 7 | `OrderChannels` | `order` | Kartu WhatsApp + 5 quick-link |
| 8 | `DineIn` | `dinein` | Makan di warung (dark banner) |
| 9 | `Testimonials` | *(tanpa id)* | 3 ulasan |
| 10 | `LocationMap` | `lokasi` | Google Maps embed + info kontak |
| 11 | `Footer` | — | 5 kolom + area layanan |

Plus dua elemen mengambang di `App.jsx`:
- `.mobile-sticky-quick-order` — sticky bar mobile: **Catering | Menu Harian**
- `<OrderModal>` — muncul saat `selectedItem` terisi (dari `MenuList`)

**Navigasi desktop** (`Navbar.jsx`): Catering · Jenis Layanan · Katalog Lauk · Menu Harian · Warung · Lokasi + tombol "Konsultasi".

**Drawer mobile** menambah: Cerita Dapur · Pesan via WhatsApp · Lokasi & Jam Buka.

---

## 6. Design System

### ⚠️ JEBAKAN UTAMA: `App.css` punya TIGA lapisan

File ini tumbuh dengan cara ditumpuk, bukan ditulis ulang. **Lapisan yang lebih bawah menang.**

| Lapisan | Baris | Isi |
|---|---|---|
| **1. Base** | 1 – 1158 | Reset, `:root` versi pertama, layout dasar semua section |
| **2. Responsif base** | 1159 – 1186 | `@media 992px` (1159) & `600px` (1175) untuk lapisan 1 |
| **3. Final design layer** | 1187 – ~2010 | `:root` **versi kedua yang meng-override** (1188), restyling semua section, media query sendiri di 1695 / 1750 / 2000 |
| **4. Lapisan catering-first** | ~2012 – ~2877 | Ditambahkan di commit `0ef7631`: section catering, menu harian, katalog. Media query di 2808 / 2815 / 2824 |
| **5. Lapisan WhatsApp** | ~2879 – akhir (3027) | Ditambahkan di commit `0524500`: kartu WA & quick-link. Media query di 3009 |

**Konsekuensi:** kalau lu menulis CSS baru di tengah file, kemungkinan besar akan ditimpa oleh lapisan yang lebih bawah. **Selalu tambahkan CSS baru di ujung file.**

### Token warna — YANG AKTIF adalah `:root` di baris 1188

Nilai di baris 2 sudah **tidak berlaku** untuk properti yang didefinisikan ulang. Bandingkan:

| Token | `:root` baris 2 (mati) | `:root` baris 1188 (**AKTIF**) |
|---|---|---|
| `--bg-dark` | `#120b09` | `#17100b` |
| `--bg-surface` | `#1c120e` | `#24160f` |
| `--bg-card` | `#241813` | `#fffaf0` |
| `--bg-light` | `#faf7f2` | `#fbf6ec` |
| `--bg-light-surface` | `#f4ede2` | `#f0e4d0` |
| `--primary-red` | `#8b0000` | `#8f1d14` |
| `--maroon-deep` | `#5c0606` | **`#64130e`** |
| `--gold-songket` | `#d49a37` | **`#c8922d`** |
| `--gold-accent` | `#f5b041` | **`#f0b64a`** |
| `--text-dark` | `#221813` | `#281a13` |
| `--text-muted` | `#6b5c53` | `#6e5d50` |
| `--text-light` | `#fdfbf7` | `#fff7e8` |
| `--border-gold` | `rgba(212,154,55,.35)` | `rgba(200,146,45,.35)` |
| `--shadow-sm` | `0 4px 12px rgba(0,0,0,.06)` | `0 8px 22px rgba(56,31,18,.08)` |
| `--shadow-md` | `0 10px 25px rgba(0,0,0,.12)` | `0 18px 42px rgba(56,31,18,.14)` |
| `--shadow-lg` | `0 16px 36px rgba(0,0,0,.2)` | `0 30px 80px rgba(23,16,11,.25)` |

Token yang **hanya ada** di lapisan final (tidak ada di lapisan 1):

```
--leaf-green   : #1f6b3a     dipakai 4×
--chili-green  : #4f7a22     ⚠️ didefinisikan tapi TIDAK PERNAH dipakai
--turmeric     : #d98224     ⚠️ didefinisikan tapi TIDAK PERNAH dipakai
```

Token yang **tidak di-override** sehingga nilai lapisan 1 tetap berlaku:

```
--gold-light   : #fef5e7     (baris 12, lapisan 1 — tetap aktif)
--font-serif   : 'Playfair Display', Georgia, serif     (nilainya sama di kedua lapisan)
--font-sans    : 'Plus Jakarta Sans', ...               (lapisan 3 menambah ui-sans-serif di depan system-ui)
```

### Palet yang dipakai di luar token

Nilai hardcoded yang muncul berulang di lapisan catering — kalau mau merapikan, ini kandidat jadi token baru:

| Warna | Dipakai untuk |
|---|---|
| `#fffaf0` | Latar kartu terang |
| `#fffdf8` | Latar kartu menu harian |
| `#f7ecd9` | Latar section katalog |
| `#eedfc9` | Border kartu halus |
| `#eee0cb` | Border pemisah dalam kartu |
| `#f2e6d2` | Latar chip/trait |
| `#5b4534` | Teks chip |
| `#9d5d12` | Teks aksen emas gelap (badge, catatan harga) |
| `#cdb89f` / `#d8c7b8` / `#e3d3c1` / `#dfd0c4` / `#c9b9ac` | Teks muted di atas latar gelap |
| `#3b0c08` | Ujung gradien kartu gelap |

### Tipografi

- **Judul** → `var(--font-serif)` Playfair Display, weight 700–800
- **Body/UI** → `var(--font-sans)` Plus Jakarta Sans
- Kelas judul yang tersedia: `.section-heading` (besar), `.section-heading-sm` (sedang), `.light-heading` (versi terang untuk latar gelap)
- Eyebrow: `.eyebrow-text` (uppercase, letter-spacing lebar), varian `.gold-text`

### Breakpoint

Hanya ada 5, semuanya `max-width`:

```
1080px   → grid paket & langkah jadi 2 kolom
 992px   → pilar hub, grid 2 kolom, jenis catering jadi 1 kolom
 720px   → padding section mengecil, kartu & CTA jadi vertikal, grid 1 kolom
 600px   → (lapisan base) navbar & hero
 390px   → (lapisan base) brand-sub disembunyikan, judul hero 2rem
```

---

## 7. Kontrak Data — `src/data.js`

Satu-satunya sumber konten. 333 baris, 8 ekspor publik + 2 helper privat.

### 7.1 Ekspor

| Ekspor | Baris | Bentuk | Dipakai oleh |
|---|---|---|---|
| `HERO_IMAGE` | 3 | import gambar | `Hero`, `About`, `CateringHub` |
| `RESTAURANT_INFO` | 8 | object | hampir semua komponen |
| `WA_LINKS` | 35 | object of URL + 1 fungsi | `Hero`, `Navbar`, `CateringHub`, `CateringServices`, `CateringCatalog`, `MenuList`, `OrderChannels`, `DineIn`, `Footer`, `OrderModal`, `App` |
| `DAILY_MENU_GROUPS` | 48 | array[2] of group | `MenuList` |
| `CATERING_TYPES` | 103 | array[4] | `CateringServices` |
| `CATERING_PACKAGES` | 134 | array[4] | `CateringServices` |
| `CATERING_STEPS` | 162 | array[4] | `CateringServices` |
| `CATERING_CATALOG` | 187 | array[4] of group | `CateringCatalog` |
| `CATERING_FAQ` | 312 | array[5] | `CateringCatalog` |

Helper privat (tidak diekspor):
- `commonsImage(fileName)` → URL `https://commons.wikimedia.org/wiki/Special:Redirect/file/<encoded>`
- `waLink(message)` → URL `https://wa.me/<phoneRaw>?text=<encoded>`

### 7.2 `DAILY_MENU_GROUPS` — 6 menu yang benar-benar ada

```
Group "paket-nasi" — Paket Nasi + Dadar Barendo
  1. Cumi Cabe Ijo + Dadar Barendo + Nasi      badge: "Paling Dipesan"
  2. Ayam Suwir Balado + Dadar Barendo + Nasi  badge: "Favorit"

Group "mie-nasi-goreng" — Mie, Kwetiaw & Nasi Goreng
  3. Kwetiaw Goreng
  4. Nasi Goreng
  5. Mie Goreng
  6. Mie Rebus
```

Bentuk item:
```js
{
  id: "cumi-cabe-ijo",     // wajib, unik — dipakai sebagai React key
  name: "...",             // wajib — juga dipakai isi pesan WA
  desc: "...",             // wajib
  badge: "...",            // OPSIONAL — hanya 2 paket nasi yang punya
  traits: ["...", "..."]   // wajib array, jadi chip
}
```
**Tidak ada field `price`, `image`, `category`, atau `spiceLevel`.** Semua itu sudah dihapus sengaja. Jangan dikembalikan tanpa alasan bisnis.

### 7.3 `CATERING_CATALOG` — 52 lauk

```
Lauk Padang & Minang          20 lauk  (4 berfoto)
Lauk Rumahan Nusantara        18 lauk  (1 berfoto)
Nasi, Mie & Kwetiaw            7 lauk  (1 berfoto)
Sayur, Sambal & Pelengkap      7 lauk  (1 berfoto)
                              ─────────────────
                              52 lauk  (7 berfoto)
```

Bentuk group:
```js
{ id: "lauk-padang", title: "...", note: "...", items: [...] }
```

Bentuk item — **dua varian, dan ini penting**:
```js
// Varian A: jadi KARTU BERFOTO (featured)
{ name: "...", desc: "...", tag: "...", image: commonsImage("Nama File.JPG") }

// Varian B: jadi CHIP teks
{ name: "..." }
```

`CateringCatalog.jsx` memisahkan keduanya secara otomatis:
```js
const featured = group.items.filter((item) => item.image);
const rest     = group.items.filter((item) => !item.image);
```
Jadi **menambah `image` pada sebuah item otomatis memindahkannya dari chip jadi kartu berfoto.**

Foto lauk diambil dari **Wikimedia Commons** (hotlink, bukan file lokal). Konsekuensinya: butuh koneksi internet, bisa lambat, dan nama file harus persis — kalau salah, gambar rusak. Untuk revamp, pertimbangkan mengganti semuanya dengan foto asli milik sendiri.

### 7.4 `WA_LINKS` — 8 entri

| Key | Isi pesan (ringkas) |
|---|---|
| `catering` | Konsultasi catering, tanya jenis acara/porsi/tanggal |
| `nasiKotak` | Pesan nasi kotak |
| `prasmanan` | Tanya paket prasmanan/buffet |
| `harian` | Tanya catering harian/rantangan |
| `laukPadang` | Pesan lauk Padang untuk acara |
| `menuHarian` | Pesan menu harian |
| `lokasi` | Tanya lokasi & ketersediaan menu hari ini |
| `menuDetail(name)` | **FUNGSI** — pesan menu spesifik, dipakai `OrderModal` |

Semua memakai nomor `RESTAURANT_INFO.phoneRaw` = `6285720337580`.

Pesan-pesan ini mengandung placeholder `[..]` yang sengaja dibiarkan supaya pelanggan mengisinya sendiri, contoh:
```
Halo Umi Andrew, saya mau konsultasi pesanan CATERING.
Acarnya: [jenis acara], jumlah porsi: [..] porsi, tanggal: [..].
```

`CATERING_TYPES[].wa` menyimpan **nama key** (bukan URL) dan di-resolve di komponen lewat `WA_LINKS[type.wa]`. Kalau menambah jenis layanan baru, pastikan key-nya ada di `WA_LINKS`.

### 7.5 `RESTAURANT_INFO`

```js
name, shortName, tagline,
phone        // "+62 857-2033-7580" — format tampil
phoneRaw     // "6285720337580"     — untuk wa.me
address, addressDetail, landmark, hours,
mapsEmbedUrl, mapsUrl,
coverageArea // array[8]: Cawang, Dewi Sartika, Cililitan, Tebet,
             //           Pancoran, Kampung Melayu, Halim, Kramat Jati
gofoodUrl, grabfoodUrl   // ⚠️ TIDAK DIRENDER — lihat §12
```

---

## 8. Inventaris Komponen

Semua komponen `export default function`, tanpa props kecuali disebut.

| Komponen | Props | Data yang dikonsumsi | Kelas CSS utama |
|---|---|---|---|
| `Navbar` | — | `RESTAURANT_INFO`, `WA_LINKS.catering` | `.top-banner`, `.header-nav`, `.brand-badge`, `.gonjong-roof`, `.desktop-links`, `.mobile-overlay`, `.mobile-menu-pane` |
| `Hero` | — | `HERO_IMAGE`, `WA_LINKS.catering` | `.hero-section`, `.hero-headline`, `.gold-gradient-text`, `.hero-cta-row`, `.hero-trust-badges`, `.hero-image-frame`, `.floating-dish-card` |
| `CateringHub` | — | `HERO_IMAGE`, `WA_LINKS.catering` | `.section-catering-hub`, `.chub-photo-strip`, `.chub-pillar`, `.chub-pillar-highlight`, `.chub-action-box` |
| `CateringServices` | — | `CATERING_TYPES`, `CATERING_PACKAGES`, `CATERING_STEPS`, `WA_LINKS` | `.section-catering-services`, `.catering-types-grid`, `.ctype-card`, `.packages-grid`, `.package-card`, `.steps-row`, `.step-card` |
| `CateringCatalog` | — | `CATERING_CATALOG`, `CATERING_FAQ`, `WA_LINKS.laukPadang`, `RESTAURANT_INFO` | `.section-catering-catalog`, `.catalog-group`, `.catalog-feature-card`, `.catalog-chip`, `.catalog-cta-strip`, `.faq-item` |
| `About` | — | `HERO_IMAGE` + konstanta lokal `ABOUT_SUB_IMAGE` | `.section-about`, `.grid-two-cols`, `.about-visuals`, `.image-card-main`, `.floating-experience-badge`, `.value-props-list`, `.prop-item` |
| `MenuList` | **`onSelectItem(item)`** | `DAILY_MENU_GROUPS`, `WA_LINKS.catering` | `.section-menu`, `.daily-group`, `.daily-card`, `.daily-card-badge`, `.daily-traits`, `.btn-add-order`, `.catering-alert-box` |
| `OrderChannels` | — | `RESTAURANT_INFO`, `WA_LINKS` + konstanta lokal `QUICK_LINKS` | `.section-order`, `.wa-primary-card`, `.wa-quicklinks`, `.wa-quicklink`, `.order-note` |
| `DineIn` | — | `WA_LINKS.lokasi` | `.section-dinein`, `.dinein-card-banner`, `.dinein-perks-grid`, `.dinein-perk-item`, `.dinein-booking-box` |
| `Testimonials` | — | **hardcoded di dalam komponen** (array `reviews`) | `.section-testi`, `.testimonials-grid`, `.review-card`, `.star-row`, `.reviewer-info`, `.avatar-chip` |
| `LocationMap` | — | `RESTAURANT_INFO` | `.section-location`, `.location-split-grid`, `.map-embed-side`, `.map-frame-wrapper`, `.map-floating-label`, `.location-info-side`, `.location-details-list`, `.detail-item`, `.location-buttons-row` |
| `Footer` | — | `RESTAURANT_INFO`, `WA_LINKS` | `.footer-site`, `.footer-main-grid`, `.footer-col`, `.halal-stamp`, `.footer-coverage-chip`, `.footer-bottom-bar` |
| `OrderModal` | **`item`, `onClose`** | `WA_LINKS.menuDetail` | `.modal-backdrop`, `.modal-container`, `.modal-top`, `.modal-trait-chip`, `.modal-channel-btn` |
| `BrandLogos` | — | **TIDAK DIPAKAI** | `MinangCarvingBorder`, `GoFoodLogo`, `GrabFoodLogo` (+ varian `White`) |

### Interaksi satu-satunya di seluruh situs

```
MenuList → onSelectItem(item) → App.setState(selectedItem) → OrderModal render
                                                              ↓
                                          klik backdrop / tombol X → onClose()
```

Selain itu **tidak ada interaktivitas lain** — sisanya anchor scroll dan link keluar. FAQ pakai `<details>`/`<summary>` native, tanpa JavaScript.

---

## 9. Arsitektur CSS & Konvensi

### Penamaan

- Semua kelas **kebab-case**, deskriptif, di-prefix per section: `.chub-*`, `.ctype-*`, `.catalog-*`, `.daily-*`, `.wa-*`, `.footer-*`, `.modal-*`
- Prefix `chub-` (catering hub) sengaja dipilih agar tidak bentrok dengan `.hub-*` milik hero lama
- Tidak ada CSS Modules, tidak ada Tailwind, tidak ada preprocessor — **satu file `App.css` global**

### Kelas utilitas yang tersedia

```
.container            .text-center          .gold-divider
.center-div           .eyebrow-text         .gold-text
.light-heading        .section-heading      .section-heading-sm
.section-desc         .gold-gradient-text   .songket-separator-line
.btn  .btn-gold  .btn-outline-light  .btn-outline-dark  .btn-compact
```

### Kelas yang DIPERTAHANKAN tapi tidak dirender (jangan dihapus)

Sengaja dibiarkan supaya GoFood/GrabFood gampang dipasang lagi — lihat §12:

```
.platform-box  .gf-card  .gr-card  .wa-card  .platform-box-primary
.platform-header-badge  .gf-badge  .gr-badge  .wa-badge
.platform-icon-circle  .gf-bg  .gr-bg  .wa-bg
.platform-title  .platform-location  .platform-perks-list  .perk-check
.btn-platform  .btn-gofood-solid  .btn-grabfood-solid  .btn-gold-solid
.order-platforms-grid
.mobile-menu-actions  .mobile-action-label  .mobile-partner-link  .gf-link  .gr-link
.hero-secondary-channels  .secondary-channels-label  .secondary-channel-link  .channel-dinein
.sticky-nav-btn.btn-gf-sticky  .btn-gr-sticky
.modal-channel-btn.btn-gf  .btn-gr
```

### CSS mati bawaan lama (sudah ada sebelum revamp, belum dibersihkan)

```
.channel-hub-card  .hub-header-label  .hub-card  .hub-grid
.hero-main-title   .hero-metrics      .metric-divider
```

Ini sisa iterasi desain sebelumnya, bukan akibat revamp catering-first. Aman dihapus kalau mau.

Sudah dibersihkan di commit `0ef7631`: **94 rule** mati bekas `RendangSpotlight`, grid `.food-card` lama, `.menu-filter-bar`, dan partner-card hero lama.

---

## 10. SEO

Di `index.html`:

```html
<title>Catering Padang & Nasi Kotak Cawang - Warung Umi Andrew Jakarta Timur</title>
<meta name="description" content="Catering masakan Padang dan lauk rumahan di Cawang...">
<meta name="theme-color" content="#64130e">

<meta property="og:type"        content="website">
<meta property="og:locale"      content="id_ID">
<meta property="og:site_name"   content="Warung Makan Padang Umi Andrew">
<meta property="og:url"         content="https://warung-padang-umi-andrew.vercel.app/">
<meta property="og:title"       content="Catering Padang & Nasi Kotak Cawang - Warung Umi Andrew">
<meta property="og:description" content="Lauk dan harga menyesuaikan permintaan...">
<meta property="og:image"       content="https://warung-padang-umi-andrew.vercel.app/og-image.jpg">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt"   content="Hidangan masakan Padang untuk catering...">
<meta name="twitter:card"       content="summary_large_image">
```

`og:url` dan `og:image` **hardcode ke domain production**. Kalau domain berubah, dua baris ini wajib ikut diubah.

Belum ada: `sitemap.xml`, `robots.txt`, structured data (`LocalBusiness` / `Restaurant` JSON-LD), dan canonical. Untuk bisnis lokal, JSON-LD `LocalBusiness` adalah peningkatan paling berdampak yang belum dipasang.

---

## 11. Aset & Bobot

### Yang benar-benar dipakai

| File | Ukuran | Dimensi | Dipakai di |
|---|---|---|---|
| `src/assets/padang-feast-hero.jpg` | 343 KB | 1280×853 | Hero, About, CateringHub |
| `public/og-image.jpg` | 282 KB | 1200×630 | `og:image` saja |

### Yang tidak dipakai (kandidat hapus)

| File | Ukuran | Keterangan |
|---|---|---|
| `src/assets/padang-feast-hero.png` | **2,7 MB** | Sumber asli sebelum dikompres. **Untracked di git** — satu-satunya salinan, hapus = hilang permanen |
| `src/assets/hero.png` | 13 KB | Tidak direferensikan |
| `src/assets/react.svg` | 4 KB | Sisa template Vite |
| `src/assets/vite.svg` | 9 KB | Sisa template Vite |
| `public/favicon.svg` | 9,5 KB | Tidak direferensikan — `index.html` pakai favicon data-URI inline. **Tetap ikut ter-deploy** karena isi `public/` disalin apa adanya |
| `public/icons.svg` | 5 KB | Sama, tidak direferensikan tapi ikut ter-deploy |

### Bobot build produksi

```
dist/index.html                            2,37 kB │ gzip:  1,06 kB
dist/assets/padang-feast-hero-*.jpg      351,65 kB
dist/assets/index-*.css                   43,75 kB │ gzip:  9,22 kB
dist/assets/index-*.js                   247,67 kB │ gzip: 76,12 kB
```

Foto hero sempat 2,72 MB PNG, dikompres ke JPEG 343 KB di commit `0ef7631` (turun 88%). Perintah yang dipakai:

```bash
sips -s format jpeg -s formatOptions 78 -Z 1280 \
     src/assets/padang-feast-hero.png --out src/assets/padang-feast-hero.jpg
```

`og-image.jpg` dibuat dengan crop terpusat 1200×630:
```bash
sips -Z 1200 src/assets/padang-feast-hero.png --out /tmp/og-step.jpg
sips -c 630 1200 -s format jpeg -s formatOptions 80 /tmp/og-step.jpg --out public/og-image.jpg
```

> Catatan: `sips` bawaan macOS **tidak bisa** ekspor WebP. Kalau mau WebP/AVIF, perlu tool lain.

---

## 12. ⚠️ Data Fiktif & Placeholder — WAJIB DIGANTI SEBELUM DIPAKAI SERIUS

Ini bagian paling berisiko. Semua item di bawah ini **tidak berasal dari pemilik bisnis** — mereka karangan atau tebakan yang dipasang supaya halaman terlihat lengkap.

| # | Item | Lokasi | Status |
|---|---|---|---|
| 1 | **Link GoFood & GrabFood** | `data.js` → `gofoodUrl`, `grabfoodUrl` | **Diduga placeholder.** Pola URL tidak seperti link merchant asli. Sudah **dinonaktifkan dari UI** di commit `0524500` karena mengarahkan pelanggan ke link mati. Ambil URL asli dari dashboard merchant, lalu lihat cara re-aktivasi di bawah. |
| 2 | **Testimoni** (Bambang Rahardian, Siti Nurhaliza, Hendro Wibowo) | `Testimonials.jsx` — **hardcoded di komponen**, bukan di `data.js` | **Fiktif seluruhnya.** Ganti dengan ulasan asli. |
| 3 | **"Cocok untuk tamu 30 orang ke atas"** | `data.js` → `CATERING_TYPES[2].points[2]` | **Angka karangan.** Konfirmasi ke pemilik. |
| 4 | **Minimal porsi catering** | `data.js` → `CATERING_FAQ[1].a` | Sengaja dibuat ambigu ("dibicarakan langsung lewat WhatsApp") karena angka aslinya tidak diketahui. |
| 5 | **Foto lauk dari Wikimedia Commons** | `data.js` → 7 pemanggilan `commonsImage()` | Foto **bukan milik sendiri**, hotlink dari server pihak ketiga. Bisa lambat atau rusak. Ganti dengan foto asli kalau ada. |
| 6 | **Foto hero** | `src/assets/padang-feast-hero.jpg` | Aset buatan, bukan foto hidangan asli warung. |
| 7 | **Alamat "Jl. Dewi Sartika No. 128"** | `data.js` → `RESTAURANT_INFO.address` | Nomor jalan belum diverifikasi. |
| 8 | **`mapsEmbedUrl`** | `data.js` | URL embed Google Maps menunjuk area **Cawang secara umum**, bukan titik pasti warung. `mapsUrl` juga hanya `?q=Cawang+Jakarta+Timur`. |
| 9 | **Jam buka "09.00 – 22.00"** | `data.js:17`, `Navbar.jsx:16`, `Hero.jsx:43` | Belum dikonfirmasi, dan **tidak konsisten**: `LocationMap.jsx:34` menyebut "tersedia mulai **09.30** WIB" sementara tiga tempat lain menyebut 09.00. |
| 10 | **Nomor WhatsApp** | `data.js` → `phoneRaw` | `6285720337580`. Perlu dipastikan ini nomor admin yang aktif. |

### Cara mengaktifkan kembali GoFood / GrabFood

Semua yang dibutuhkan sudah dipertahankan. Langkahnya:

1. Isi `gofoodUrl` dan `grabfoodUrl` di `src/data.js` dengan URL merchant asli.
2. Pasang kembali tombolnya di 6 tempat (lihat riwayat commit `0524500` untuk diff lengkap yang tinggal di-revert sebagian):
   - `Hero.jsx` — baris `.hero-secondary-channels`
   - `Navbar.jsx` — blok `.mobile-menu-actions` di drawer
   - `OrderChannels.jsx` — grid `.order-platforms-grid` (CSS-nya masih ada)
   - `OrderModal.jsx` — dua `.modal-channel-btn` tambahan
   - `Footer.jsx` — dua `<li>` "Order via ..."
   - `App.jsx` — tombol `.btn-gf-sticky` di sticky bar mobile
3. `BrandLogos.jsx` sudah mengekspor `GoFoodLogo`, `GrabFoodLogo`, plus varian `GoFoodLogoWhite` / `GrabFoodLogoWhite` untuk kartu gelap. Tinggal import.
4. Hapus komentar penjelas di atas `gofoodUrl` dalam `data.js`.

Cara tercepat melihat bentuk kodenya sebelum dihapus:
```bash
git show 0524500 -- src/components/OrderChannels.jsx
```

---

## 13. Riwayat Git

```
0524500  2026-09-09  refactor: nonaktifkan tombol GoFood & GrabFood, pesanan jadi satu jalur WhatsApp
2f5d668  2026-09-08  feat: pasang og:image supaya link yang dibagikan muncul preview gambar
0ef7631  2026-09-08  refactor: pivot landing page jadi catering-first sesuai realita operasional
18f862c  2026-09-07  feat: landing page warung makan padang umi andrew cawang react
```

`18f862c` adalah versi rumah-makan-Padang-klasik. Untuk melihat apa yang diubah revamp:
```bash
git diff 18f862c 0ef7631 --stat
```

Komponen `RendangSpotlight.jsx` **dihapus** di `0ef7631`. Masih bisa dipulihkan:
```bash
git show 18f862c:src/components/RendangSpotlight.jsx
```

---

## 14. Peta untuk Revamp

### Kalau mau merombak total dari nol

Yang **layak dipertahankan** apa adanya:
- `src/data.js` — kontrak datanya sudah rapi dan terpusat. Bawa isinya, perbaiki yang fiktif (§12).
- Posisi bisnis di §1 — ini pengetahuan yang tidak ada di kode mana pun.
- Token warna lapisan final (`App.css:1188`) — paletnya sudah konsisten.
- `public/og-image.jpg` dan konfigurasi SEO.

Yang **sebaiknya dibuang**:
- Struktur 3-lapisan `App.css`. Tulis ulang satu lapis bersih; jangan menumpuk di atas yang lama.
- `src/index.css` — isinya tumpang tindih dengan `App.css`.
- Semua aset tak terpakai di §11.
- `README.md` template Vite.

### Kalau mau memperbaiki bertahap, urut dari dampak terbesar

1. **Ganti data fiktif** (§12) — terutama link order dan testimoni. Ini yang langsung menyentuh pendapatan.
2. **Perbaiki titik Google Maps** — `mapsEmbedUrl` masih menunjuk area umum, bukan warung.
3. **Foto asli** — ganti Wikimedia Commons dan foto hero buatan dengan foto hidangan & warung sendiri.
4. **Tambah JSON-LD `LocalBusiness`** — berdampak ke pencarian lokal.
5. **Rapikan `App.css`** jadi satu lapisan.
6. **Sinkronkan jam buka** (09.00 vs 09.30).
7. **Pertimbangkan auto-deploy** — `vercel git connect`.

### Yang belum pernah diverifikasi

**Tampilan visual di browser tidak pernah dicek** selama pengerjaan — tidak ada tooling browser di lingkungan kerja. Semua verifikasi bersifat: lint, build, inspeksi isi bundle produksi, dan HTTP status. Jadi:

- Buka situsnya langsung di browser sebelum menyebar link.
- Cek khususnya di **HP**: `.wa-primary-card` (flex wrap), `.daily-card-badge` (berubah dari absolut ke static di ≤720px), sticky bar mobile yang sekarang tinggal 2 tombol, dan katalog 52 lauk yang panjang.

### Cara verifikasi cepat setelah mengubah apa pun

```bash
npm run lint && npm run build

# pastikan tidak ada harga bocor ke halaman
grep -o "Rp [0-9.]*" dist/assets/index-*.js | sort -u   # harus kosong

# pastikan konten yang diharapkan masuk bundle
grep -c "Konsultasi Catering" dist/assets/index-*.js     # harus > 0
```

---

## 15. Ringkasan Satu Paragraf

Landing page statis React 19 + Vite 8 tanpa backend, tanpa routing, tanpa test. Semua konten terpusat di `src/data.js` dan semua styling di satu file `App.css` 3.026 baris yang bertumpuk tiga lapisan (lapisan terakhir menang). Halaman menjual **catering sebagai layanan utama** — nasi kotak kantor, acara keluarga, prasmanan, dan catering harian — didukung katalog 52 lauk sebagai bahan referensi, sementara warung harian hanya menawarkan 6 menu. **Tidak ada harga yang ditampilkan di mana pun**; semua jalur konversi menuju WhatsApp di `6285720337580`. GoFood/GrabFood dinonaktifkan sementara karena link merchant-nya belum terverifikasi, tapi seluruh komponen dan CSS-nya dipertahankan supaya mudah dipasang kembali. Situs live di `warung-padang-umi-andrew.vercel.app`, deploy manual via `npx vercel`, repo public di `fauzan171/lauk-padang-umi-andre`. Bagian yang paling perlu perhatian sebelum dipakai serius adalah **§12: sepuluh butir data fiktif dan placeholder**.
