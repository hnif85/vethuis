# 🐾 Pet Huis — Vibe Coding Master Plan v2
**Project:** Website Profesional + File-Based Markdown CMS + SEO  
**Client:** Pet Huis Veterinary Practice, Fatmawati Jakarta Selatan  
**Stack:** Next.js 14 (App Router) · Markdown + gray-matter · Tailwind CSS · Vercel  
**Target:** Paket Pro (5 halaman) dengan SEO Content Retainer siap jalan

> **Mengapa File-Based CMS?**  
> Tidak perlu akun Sanity, tidak perlu API token, tidak perlu webhook, tidak perlu internet untuk edit konten.  
> Semua konten adalah file `.md` di folder `/content` — edit pakai teks biasa, commit ke Git, otomatis deploy.

---

## 🎨 Colour System & Mood

> Diambil langsung dari Instagram Pet Huis — **teal/hijau gelap sebagai dominant**, amber sebagai accent hangat, putih bersih sebagai canvas. Hero section = full teal gelap.

### Palette Utama

| Token | Hex | Nama | Digunakan di |
|-------|-----|------|--------------|
| `--teal` | `#1B6B5A` | Pet Huis Teal | Hero bg, Navbar, Footer, dark sections |
| `--teal-mid` | `#2D8C72` | Teal Medium | Hover states, card accents |
| `--teal-light` | `#4AAF8C` | Teal Light | Icon backgrounds, badges |
| `--teal-pale` | `#D4EDE7` | Teal Pale | Testimoni section, highlights |
| `--teal-ghost` | `#EEF7F4` | Teal Ghost | Subtle section tints |
| `--teal-dark` | `#0F3D30` | Teal Dark | Footer background |
| `--amber` | `#F5A623` | Pet Huis Amber | CTA utama, accent, highlight text |
| `--amber-light` | `#FDD99A` | Amber Light | Decorative blobs, hover fills |
| `--amber-pale` | `#FEF3DC` | Amber Pale | Badge backgrounds |
| `--amber-dark` | `#C4821A` | Amber Dark | Hover state CTA button |
| `--white` | `#FFFFFF` | Pure White | Card backgrounds, body content |
| `--off-white` | `#FAFAF7` | Off White | Default page background |
| `--charcoal` | `#1E2D2A` | Deep Charcoal | Kontak section, body text |
| `--body` | `#3D4F4B` | Body Text | Paragraf, deskripsi |
| `--muted` | `#7A9490` | Muted | Caption, label kecil |

### CSS Variables

```css
:root {
  /* Teal — dominant, brand primary */
  --teal:         #1B6B5A;
  --teal-mid:     #2D8C72;
  --teal-light:   #4AAF8C;
  --teal-pale:    #D4EDE7;
  --teal-ghost:   #EEF7F4;
  --teal-dark:    #0F3D30;

  /* Amber — accent, second voice */
  --amber:        #F5A623;
  --amber-light:  #FDD99A;
  --amber-pale:   #FEF3DC;
  --amber-dark:   #C4821A;

  /* Neutrals */
  --white:        #FFFFFF;
  --off-white:    #FAFAF7;
  --cream-warm:   #F4EFE6;
  --charcoal:     #1E2D2A;
  --body:         #3D4F4B;
  --muted:        #7A9490;

  /* Shadows — teal tinted */
  --shadow-sm:    0 2px 12px rgba(27,107,90,0.08);
  --shadow-md:    0 8px 32px rgba(27,107,90,0.12);
  --shadow-lg:    0 20px 60px rgba(27,107,90,0.16);
}
```

### Tailwind Custom Colors

```typescript
// tailwind.config.ts — dalam extend.colors
colors: {
  teal: {
    DEFAULT: "#1B6B5A",
    mid:     "#2D8C72",
    light:   "#4AAF8C",
    pale:    "#D4EDE7",
    ghost:   "#EEF7F4",
    dark:    "#0F3D30",
  },
  amber: {
    DEFAULT: "#F5A623",
    light:   "#FDD99A",
    pale:    "#FEF3DC",
    dark:    "#C4821A",
  },
  cream: {
    DEFAULT: "#FAFAF7",
    warm:    "#F4EFE6",
  },
  charcoal: {
    DEFAULT: "#1E2D2A",
    body:    "#3D4F4B",
    muted:   "#7A9490",
  },
}
```

### Mood Reference dari Instagram Pet Huis

```
✓ Background konten post serba putih bersih — kesan klinik yang higienis
✓ Teal/hijau gelap dominant pada heading bold dan elemen branding utama
✓ Amber/gold sebagai accent kedua yang warm dan eye-catching (CTA, highlight)
✓ Foto dokter dengan scrub putih/mint — profesional sekaligus approachable
✓ Tipografi tebal, jelas, tidak berlebihan ornamen
✓ Tone keseluruhan: trustworthy + warm + professional
```

### Section-by-Section Colour Map

```
┌────────────────────────────────────────────────────┐
│  NAVBAR       bg: teal transparan → solid scroll   │  teal
├────────────────────────────────────────────────────┤
│  HERO         bg: #1B6B5A (teal gelap)             │  ← HIJAU DOMINANT
│               h1: putih · italic accent: amber     │
│               CTA primary: amber pill              │
│               CTA secondary: white outline pill    │
│               Stats row: teal-light text           │
│               Blob dekorasi: teal-mid transparan   │
├────────────────────────────────────────────────────┤
│  TICKER       bg: amber  ·  text: white            │  amber pop
├────────────────────────────────────────────────────┤
│  LAYANAN      bg: off-white (#FAFAF7)              │  clean canvas
│               featured card: teal (konsisten hero) │
│               section-tag: teal-pale bg            │
├────────────────────────────────────────────────────┤
│  TIM DOKTER   bg: white  ·  blob: teal-ghost       │  clean clinic
│               badge jadwal: teal-pale bg           │
│               badge text: teal                     │
├────────────────────────────────────────────────────┤
│  GALERI       bg: off-white                        │  clean
├────────────────────────────────────────────────────┤
│  TESTIMONI    bg: teal-pale (#D4EDE7)              │  soft teal wash
│               featured card: amber                 │
├────────────────────────────────────────────────────┤
│  KONTAK/CTA   bg: charcoal (#1E2D2A)               │  dark, confident
│               accent text: amber                   │
│               WA button: #25D366 (WhatsApp green)  │
├────────────────────────────────────────────────────┤
│  FOOTER       bg: teal-dark (#0F3D30)              │  deep teal closing
│               text: white + muted                  │
│               accent: amber                        │
└────────────────────────────────────────────────────┘
```


## 🗺️ Overview Arsitektur

```
pethuis/
├── app/                          # Next.js App Router
│   ├── (site)/
│   │   ├── page.tsx              # Home / Landing Page
│   │   ├── layanan/page.tsx      # Halaman Layanan
│   │   ├── dokter/page.tsx       # Halaman Tim Dokter
│   │   ├── galeri/page.tsx       # Galeri & Testimoni
│   │   ├── kontak/page.tsx       # Kontak & Lokasi
│   │   └── blog/
│   │       ├── page.tsx          # Blog index
│   │       └── [slug]/page.tsx   # Blog detail
│   └── api/
│       └── og/route.tsx          # Dynamic OG image
│
├── content/                      # ⭐ FILE-BASED CMS — semua edit di sini
│   ├── settings.md               # Global settings klinik
│   ├── dokter/                   # Satu file per dokter
│   │   ├── drh-isti-handayani.md
│   │   ├── drh-icha.md
│   │   └── drh-dokter-3.md
│   ├── layanan/                  # Satu file per layanan
│   │   ├── pemeriksaan-umum.md
│   │   ├── vaksinasi.md
│   │   ├── grooming.md
│   │   ├── rawat-inap.md
│   │   ├── laboratorium.md
│   │   └── sterilisasi.md
│   ├── galeri/
│   │   └── galeri.md             # Daftar foto + caption (path ke /public)
│   ├── testimoni/
│   │   └── testimoni.md          # Semua testimoni dalam satu file
│   └── artikel/                  # SEO blog — satu file per artikel
│       ├── vaksin-kucing-jakarta.md
│       ├── grooming-anjing-rutin.md
│       └── tanda-kucing-sakit.md
│
├── lib/
│   ├── cms/
│   │   ├── getDokter.ts          # Parser markdown → data dokter
│   │   ├── getLayanan.ts         # Parser markdown → data layanan
│   │   ├── getArtikel.ts         # Parser markdown → data artikel
│   │   ├── getGaleri.ts          # Parser galeri
│   │   ├── getTestimoni.ts       # Parser testimoni
│   │   └── getSettings.ts        # Parser settings global
│   └── analytics.ts              # GA4 + GTM helpers
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Ticker.tsx
│   │   ├── Layanan.tsx
│   │   ├── TimDokter.tsx
│   │   ├── Galeri.tsx
│   │   ├── Testimoni.tsx
│   │   └── KontakCTA.tsx
│   └── ui/
│       ├── AnimatedBlob.tsx
│       ├── FadeUp.tsx
│       └── WhatsAppButton.tsx
│
└── public/
    └── images/
        ├── dokter/               # Foto dokter (upload ke sini)
        ├── galeri/               # Foto galeri klinik
        └── artikel/              # Thumbnail artikel blog
```

---

## 📄 FORMAT FILE MARKDOWN

> Semua file content menggunakan **frontmatter YAML** di atas + **body markdown** di bawah.  
> Frontmatter = metadata terstruktur. Body = konten panjang bebas format.

### `content/settings.md` — Pengaturan Global

```markdown
---
klinikName: Pet Huis Veterinary Practice
tagline: Tempat Terpercaya untuk Anabul Kesayangan Anda
whatsapp: "6287789788818"
telepon: "087789788818"
alamat: Jl. RS. Fatmawati Raya No.26, Pondok Labu, Cilandak, Jakarta Selatan
googleMapsUrl: https://maps.google.com/?q=Pet+Huis+Veterinary+Fatmawati
instagram: pethuis
rating: "4.9"
totalDokter: "5+"
totalPasien: "1000+"
heroImage: /images/hero-main.jpg
ogImage: /images/og-default.jpg
jamBuka:
  - hari: Senin – Sabtu
    jam: 09.00 – 18.00
  - hari: Minggu
    jam: 09.00 – 16.00
---

Pet Huis hadir dengan tim dokter hewan berpengalaman, fasilitas modern,
dan pelayanan penuh kasih untuk menjaga kesehatan hewan peliharaan Anda.
```

---

### `content/dokter/drh-isti-handayani.md`

```markdown
---
nama: Isti Handayani
gelar: Drh.
spesialisasi: General Practitioner
foto: /images/dokter/drh-isti.jpg
jadwal: Senin – Sabtu
urutan: 1
aktif: true
---

Drh. Isti Handayani merupakan dokter hewan berpengalaman dengan spesialisasi
pemeriksaan umum dan pencegahan penyakit. Beliau telah menangani lebih dari
500 pasien kucing dan anjing dengan penuh dedikasi.
```

> **Aturan penamaan file:** `slug-nama-dokter.md`  
> **Foto:** Letakkan di `/public/images/dokter/` dengan nama yang sama

---

### `content/layanan/vaksinasi.md`

```markdown
---
nama: Vaksinasi
ikon: "💉"
tag: Rabies & Core Vaccines
featured: false
urutan: 2
---

Program vaksinasi lengkap untuk kucing, anjing, dan hewan peliharaan lainnya
sesuai jadwal yang tepat. Tersedia vaksin core (FVRCP, DA2PP) maupun non-core
sesuai kebutuhan dan risiko lingkungan anabul Anda.

Konsultasikan jadwal vaksinasi yang tepat dengan dokter kami.
```

> **Catatan `featured: true`:** Hanya satu layanan yang boleh featured — card ini tampil dengan background amber.

---

### `content/galeri/galeri.md`

```markdown
---
items:
  - foto: /images/galeri/klinik-ruang-periksa.jpg
    caption: Ruang pemeriksaan bersih dan nyaman
    kategori: klinik
    urutan: 1
  - foto: /images/galeri/pasien-kucing.jpg
    caption: Salah satu pasien setia Pet Huis
    kategori: pasien
    urutan: 2
  - foto: /images/galeri/grooming-session.jpg
    caption: Sesi grooming profesional
    kategori: grooming
    urutan: 3
  - foto: /images/galeri/tim-dokter.jpg
    caption: Tim dokter Pet Huis yang berdedikasi
    kategori: dokter
    urutan: 4
  - foto: /images/galeri/vaksinasi.jpg
    caption: Proses vaksinasi aman dan terstandar
    kategori: klinik
    urutan: 5
---
```

---

### `content/testimoni/testimoni.md`

```markdown
---
items:
  - nama: Sarah M.
    hewan: Pemilik Kucing Persia
    teks: >
      Dokternya sangat sabar dan teliti. Kucing saya yang biasanya takut ke
      klinik jadi lebih tenang di sini. Tempatnya bersih dan nyaman banget!
    bintang: 5
    featured: false
    urutan: 1
  - nama: Budi R.
    hewan: Pemilik 2 Anjing Golden
    teks: >
      Pet Huis sudah jadi klinik langganan saya selama 2 tahun. Pelayanannya
      konsisten, harganya transparan, dan dokternya selalu update ilmunya.
    bintang: 5
    featured: true
    urutan: 2
  - nama: Dita A.
    hewan: Pemilik Kelinci & Hamster
    teks: >
      Lokasi strategis di Fatmawati, mudah dijangkau. Stafnya ramah dan
      responsif di WhatsApp. Highly recommended untuk Jakarta Selatan!
    bintang: 5
    featured: false
    urutan: 3
---
```

---

### `content/artikel/vaksin-kucing-jakarta.md` — Format Artikel Blog

```markdown
---
judul: Panduan Lengkap Vaksinasi Kucing di Jakarta — Jadwal, Jenis & Biaya
slug: vaksin-kucing-jakarta
excerpt: Vaksinasi kucing adalah langkah pencegahan penyakit yang wajib dilakukan. Pelajari jenis vaksin, jadwal, dan estimasi biaya vaksinasi kucing di Jakarta.
thumbnail: /images/artikel/vaksin-kucing.jpg
thumbnailAlt: Kucing sedang divaksinasi oleh dokter hewan di Pet Huis Jakarta
kategori: Kesehatan
tags:
  - vaksinasi kucing
  - klinik hewan jakarta
  - kesehatan kucing
penulis: Tim Pet Huis
tanggalPublish: 2025-01-15
featured: false
seoTitle: Vaksinasi Kucing Jakarta — Jadwal, Jenis & Biaya | Pet Huis
seoDescription: Panduan vaksinasi kucing lengkap untuk pemilik di Jakarta. Jenis vaksin, jadwal yang tepat, biaya, dan di mana vaksinasi yang aman. Hubungi Pet Huis Fatmawati.
---

## Mengapa Vaksinasi Kucing Itu Penting?

Vaksinasi adalah cara paling efektif untuk melindungi kucing kesayangan Anda
dari berbagai penyakit berbahaya. Di Jakarta dengan kepadatan populasi kucing
yang tinggi, risiko penularan penyakit seperti panleukopenia dan herpesvirus
cukup signifikan...

## Jenis Vaksin Kucing yang Tersedia

### Vaksin Core (Wajib)
Vaksin core diberikan kepada semua kucing tanpa terkecuali...

### Vaksin Non-Core (Opsional)
Diberikan berdasarkan gaya hidup dan risiko paparan...

## Jadwal Vaksinasi Kucing

| Usia | Vaksin |
|------|--------|
| 8 minggu | FVRCP pertama |
| 12 minggu | FVRCP kedua |
| 16 minggu | FVRCP ketiga + Rabies |
| Tahunan | Booster FVRCP + Rabies |

## Vaksinasi di Pet Huis, Fatmawati

Tim dokter Pet Huis siap membantu menjadwalkan vaksinasi yang tepat
sesuai kondisi dan usia kucing Anda. Hubungi kami via WhatsApp untuk
membuat janji...
```

---

## 📋 FASE 1 — Project Setup (Hari 1)

### 1.1 Init Project

```bash
# Buat Next.js project
npx create-next-app@latest pethuis --typescript --tailwind --app --eslint

cd pethuis

# Install dependencies CMS & parsing
npm install gray-matter           # parse YAML frontmatter
npm install remark remark-html    # render markdown body ke HTML
npm install remark-gfm            # GitHub Flavored Markdown (table, dll)

# Install dependencies UI & utilitas
npm install framer-motion
npm install @vercel/analytics
npm install sharp
```

> **Tidak ada Sanity, tidak ada Prisma, tidak ada database.**  
> Total dependencies jauh lebih sedikit = build lebih cepat, debugging lebih mudah.

### 1.2 Environment Variables

Buat file `.env.local`:

```env
# Site
NEXT_PUBLIC_SITE_URL=https://pethuis.co.id
NEXT_PUBLIC_WA_NUMBER=6287789788818

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
```

> **Hanya 4 variabel.** Tidak ada API key, tidak ada token Sanity.

### 1.3 Buat Struktur Folder Content

```bash
# Prompt Cursor:
# "Buat folder structure berikut di root project:
# content/dokter, content/layanan, content/galeri,
# content/testimoni, content/artikel
# dan buat file placeholder .md di masing-masing"

mkdir -p content/dokter content/layanan content/galeri content/testimoni content/artikel
mkdir -p public/images/dokter public/images/galeri public/images/artikel
```

---

## 📋 FASE 2 — Library CMS Parser (Hari 1-2)

> Ini adalah pengganti semua Sanity schema + GROQ queries.  
> Setiap file parser membaca markdown → return typed data → dipakai di Server Components.

### 2.1 `lib/cms/getSettings.ts`

```typescript
// Prompt Cursor:
// "Buat fungsi getSettings() yang:
// 1. Baca file content/settings.md menggunakan fs.readFileSync
// 2. Parse dengan gray-matter → dapat frontmatter + content
// 3. Return typed object SiteSettings dengan semua field:
//    klinikName, tagline, whatsapp, telepon, alamat,
//    googleMapsUrl, instagram, rating, totalDokter, totalPasien,
//    heroImage, ogImage, jamBuka (array), bodyText
// 4. Gunakan path.join(process.cwd(), 'content/settings.md')
// TypeScript interface SiteSettings harus diexport"

// Contoh return type:
export interface SiteSettings {
  klinikName: string
  tagline: string
  whatsapp: string
  telepon: string
  alamat: string
  googleMapsUrl: string
  instagram: string
  rating: string
  totalDokter: string
  totalPasien: string
  heroImage: string
  ogImage: string
  jamBuka: { hari: string; jam: string }[]
  bodyText: string   // rendered HTML dari body markdown
}
```

### 2.2 `lib/cms/getDokter.ts`

```typescript
// Prompt Cursor:
// "Buat dua fungsi:
//
// getAllDokter(): Baca semua file .md di folder content/dokter/,
//   parse masing-masing dengan gray-matter,
//   return array DokterData[] diurutkan berdasarkan frontmatter.urutan asc,
//   filter hanya yang aktif == true
//
// getDokterBySlug(slug: string): Baca satu file content/dokter/[slug].md,
//   parse frontmatter + render body markdown ke HTML dengan remark,
//   return DokterData lengkap dengan bioHtml
//
// TypeScript interface DokterData:
//   slug, nama, gelar, spesialisasi, foto, jadwal, urutan, aktif, bioHtml"

export interface DokterData {
  slug: string
  nama: string
  gelar: string
  spesialisasi: string
  foto: string
  jadwal: string
  urutan: number
  aktif: boolean
  bioHtml: string
}
```

### 2.3 `lib/cms/getLayanan.ts`

```typescript
// Prompt Cursor:
// "Buat getAllLayanan() yang membaca semua file .md di content/layanan/,
// parse dengan gray-matter, render body markdown ke HTML,
// return array LayananData[] diurutkan by urutan asc.
//
// Interface LayananData:
//   slug, nama, ikon, tag, featured (boolean), urutan, deskripsiHtml"
```

### 2.4 `lib/cms/getArtikel.ts`

```typescript
// Prompt Cursor:
// "Buat tiga fungsi untuk artikel:
//
// getAllArtikel(): Return semua artikel diurutkan by tanggalPublish desc.
//   Hanya return frontmatter (tanpa body) untuk listing page.
//
// getArtikelBySlug(slug: string): Return satu artikel lengkap
//   dengan kontenHtml (body markdown → HTML via remark + remark-gfm).
//
// generateStaticSlugs(): Return array semua slug untuk generateStaticParams.
//
// Interface ArtikelData:
//   slug, judul, excerpt, thumbnail, thumbnailAlt, kategori,
//   tags (string[]), penulis, tanggalPublish, featured,
//   seoTitle, seoDescription, kontenHtml?"

export interface ArtikelData {
  slug: string
  judul: string
  excerpt: string
  thumbnail: string
  thumbnailAlt: string
  kategori: string
  tags: string[]
  penulis: string
  tanggalPublish: string   // ISO string, format tampil di UI
  featured: boolean
  seoTitle: string
  seoDescription: string
  kontenHtml?: string      // only when fetched by slug
}
```

### 2.5 `lib/cms/getGaleri.ts`

```typescript
// Prompt Cursor:
// "Buat getGaleri() yang membaca content/galeri/galeri.md,
// parse dengan gray-matter, ambil frontmatter.items,
// return array GaleriItem[] diurutkan by urutan asc.
//
// Interface GaleriItem: foto, caption, kategori, urutan"
```

### 2.6 `lib/cms/getTestimoni.ts`

```typescript
// Prompt Cursor:
// "Buat getTestimoni() yang membaca content/testimoni/testimoni.md,
// parse frontmatter.items, return array TestimoniItem[].
// Sort: featured item selalu di index tengah (index 1 dari 3).
//
// Interface TestimoniItem: nama, hewan, teks, bintang, featured, urutan"
```

---

## 📋 FASE 3 — Design System & Komponen UI (Hari 2)

### 3.1 Tailwind Config — Pet Huis Color System

```typescript
// tailwind.config.ts
// Prompt Cursor:
// "Extend Tailwind config dengan custom colors Pet Huis (teal-dominant):
// teal: { DEFAULT: #1B6B5A, mid: #2D8C72, light: #4AAF8C,
//          pale: #D4EDE7, ghost: #EEF7F4, dark: #0F3D30 }
// amber: { DEFAULT: #F5A623, light: #FDD99A, pale: #FEF3DC, dark: #C4821A }
// cream: { DEFAULT: #FAFAF7, warm: #F4EFE6 }
// charcoal: { DEFAULT: #1E2D2A, body: #3D4F4B, muted: #7A9490 }
//
// Tambahkan fontFamily:
// display: ['Playfair Display', 'serif']
// body: ['Plus Jakarta Sans', 'sans-serif']"
```

### 3.2 Global Font & CSS Variables

```css
/* app/globals.css */
/* Prompt Cursor:
   "Tambahkan Google Fonts import untuk Playfair Display (600,700)
   dan Plus Jakarta Sans (400,500,600).
   Tambahkan CSS variables sesuai colour system Pet Huis (teal-dominant):
   --teal, --teal-mid, --teal-light, --teal-pale, --teal-ghost, --teal-dark,
   --amber, --amber-light, --amber-pale, --amber-dark,
   --white, --off-white, --cream-warm, --charcoal, --body, --muted,
   --shadow-sm, --shadow-md, --shadow-lg (semua shadow tinted teal)
   Tambahkan base styles: box-sizing border-box, scroll-behavior smooth" */
```

### 3.3 Komponen `FadeUp.tsx`

```typescript
// components/ui/FadeUp.tsx
// Prompt Cursor:
// "Buat Client Component FadeUp menggunakan Framer Motion.
// Gunakan useInView hook dari framer-motion untuk trigger animasi
// saat elemen masuk viewport (threshold 0.15).
// Props: children, delay (default 0), className.
// Animasi: opacity 0→1, y 28→0, duration 0.65s ease"
```

### 3.4 Komponen `WhatsAppButton.tsx`

```typescript
// components/ui/WhatsAppButton.tsx
// Prompt Cursor:
// "Buat floating WhatsApp button (Client Component) yang:
// - Muncul setelah user scroll lebih dari 300px (useEffect + scroll event)
// - Posisi fixed bottom-right dengan z-index tinggi
// - Link ke wa.me/{waNumber}?text=Halo+Pet+Huis...
// - Animasi pulse pada icon WA
// - Props: waNumber (string)"
```

### 3.5 Komponen `AnimatedBlob.tsx`

```typescript
// components/ui/AnimatedBlob.tsx
// Prompt Cursor:
// "Buat komponen SVG blob shape dengan CSS keyframe animation
// yang morphing border-radius secara infinite.
// Props: color (string hex), size (string), className.
// Gunakan div dengan border-radius animasi, bukan SVG path"
```

---

## 📋 FASE 4 — Implementasi Sections Landing Page (Hari 3-4)

> Setiap section adalah **Server Component** yang memanggil fungsi CMS parser.  
> Data mengalir: File MD → Parser → Server Component → UI

### 4.1 Navbar

```typescript
// components/layout/Navbar.tsx
// Prompt Cursor:
// "Buat Navbar (Client Component karena butuh scroll event) dengan:
// - Logo: icon rumah amber + 'Pet' + 'Huis' (amber) dalam Playfair Display
// - Nav links: Layanan, Tim Dokter, Galeri, Kontak
// - CTA pill button: Hubungi Kami → href #kontak
// - Scroll effect: tambah backdrop-blur dan shadow saat scrollY > 20
// - Background: transparan di atas hero (hero sudah teal) → rgba(27,107,90,0.95) saat scroll
//   atau gunakan: bg-teal/90 backdrop-blur saat scrolled
// - Mobile: nav links hidden, tampilkan hamburger toggle
// Data: terima klinikName sebagai prop dari parent Server Component"
```

### 4.2 Hero Section

```typescript
// components/sections/Hero.tsx
// Prompt Cursor:
// "Buat Hero section (Server Component) dengan layout 2 kolom:
//
// KIRI:
// - Badge pill: 'Klinik Hewan Fatmawati, Jakarta Selatan'
//   (dot amber beranimasi pulse, background teal-mid transparan, teks putih)
// - h1 Playfair Display putih: 'Tempat Terpercaya untuk [Anabul] Kesayangan Anda'
//   kata 'Anabul' dalam italic amber (#F5A623)
// - Paragraph deskripsi putih/70% opacity dari settings.bodyText
// - Dua CTA:
//   Primary: amber pill 'Konsultasi via WhatsApp' + shadow amber
//   Secondary: white outline pill 'Lihat Layanan' + hover white fill
// - Stats row: totalDokter | '7 Hari' | totalPasien
//   angka: teal-light, label: white/60%
//
// KANAN:
// - next/image heroImage dengan border-radius blob (rounded-[3rem])
//   overlay teal-mid transparan tipis di atas foto
// - Floating card putih: rating Google + shadow
// - Floating badge teal-light: 'Buka Hari Ini'
// - Animasi float (CSS keyframe translateY) pada kedua card
//
// BACKGROUND: solid teal (#1B6B5A)
// Blob dekorasi: teal-mid transparan 30% di pojok kanan atas
//               teal-dark di pojok kiri bawah
//
// Props: data dari getSettings() — fetch di page.tsx, pass ke sini"
```

### 4.3 Ticker

```typescript
// components/sections/Ticker.tsx
// Prompt Cursor:
// "Buat marquee ticker dengan:
// - Background amber, padding vertikal
// - Items berjalan kiri (CSS animation ticker infinite)
// - Duplikasi items array × 2 untuk seamless loop
// - Format tiap item: [ikon] [nama layanan] [dot separator]
// - Props: layanan (LayananData[]) — ambil field nama + ikon"
```

### 4.4 Section Layanan

```typescript
// components/sections/Layanan.tsx
// Prompt Cursor:
// "Buat section Layanan (Server Component):
// - Header 2 kolom: judul kiri + link 'Tanya Lebih Lanjut' kanan
// - Grid 3 kolom, 2 baris (total 6 card)
// - ServiceCard component:
//   * Icon dalam kotak rounded amber-pale
//   * Nama (semibold), deskripsiHtml (render dengan dangerouslySetInnerHTML)
//   * Tag pill bawah
//   * featured=true: background amber, semua teks putih
//   * Hover: translateY(-6px) + shadow transition
// - FadeUp wrapper per card dengan delay bertahap (i * 0.1s)
// Props: layanan LayananData[] dari getAllLayanan()"
```

### 4.5 Section Tim Dokter

```typescript
// components/sections/TimDokter.tsx
// Prompt Cursor:
// "Buat section Tim Dokter (Server Component):
// - Background cream dengan blob mint-pale di kanan (absolute)
// - Header: section-tag + h2 + deskripsi (max-w-lg)
// - Grid 4 kolom
// - DoctorCard:
//   * next/image foto dengan aspect-ratio 3/4, object-cover, rounded-2xl
//   * Jika foto tidak ada → placeholder div dengan background gradient + emoji
//   * Nama (bold), spesialisasi (muted), jadwal badge hijau
//   * Hover translateY + shadow
// Props: dokter DokterData[] dari getAllDokter()"
```

### 4.6 Section Galeri

```typescript
// components/sections/Galeri.tsx
// Prompt Cursor:
// "Buat section Galeri (Server Component + Client untuk lightbox):
// - Header: section-tag + h2
// - CSS Grid: grid-cols-[2fr_1fr_1fr] dengan grid-rows-[240px_240px]
// - Item pertama span 2 rows
// - Setiap item: next/image object-cover, overlay gelap on hover
// - onClick item → buka lightbox modal sederhana (Client Component)
//   Lightbox: fixed overlay, gambar besar di tengah, klik luar untuk tutup
// - Link Instagram di bawah grid
// Props: galeri GaleriItem[] dari getGaleri()"
```

### 4.7 Section Testimoni

```typescript
// components/sections/Testimoni.tsx
// Prompt Cursor:
// "Buat section Testimoni (Server Component):
// - Background cream-2
// - Header centered: section-tag + h2 + deskripsi
// - Grid 3 kolom responsive (md:grid-cols-3)
// - TestiCard:
//   * Bintang rating (★ × bintang)
//   * Teks italic
//   * Avatar + nama + hewan
//   * featured=true: background teal (#1B6B5A), teks putih
//     (konsisten dengan hero — kesan brand yang kohesif)
// - Sort: pastikan featured card di posisi tengah (index 1)
// Props: testimoni TestimoniItem[] dari getTestimoni()"
```

### 4.8 Section Kontak CTA

```typescript
// components/sections/KontakCTA.tsx
// Prompt Cursor:
// "Buat section Kontak (Server Component):
// - Background charcoal #1E1E1E + dua blob transparan absolut
// - Grid 2 kolom
//
// KIRI:
// - section-tag (amber on dark)
// - h2 Playfair: 'Anabul Anda [Layak] yang Terbaik' — italic amber
// - Deskripsi muted
// - Tombol WhatsApp hijau besar (wa.me link)
// - Link telepon + Instagram kecil di bawah
//
// KANAN: 3 InfoCard (Alamat, Jam Operasional, Google Maps)
//   Setiap card: icon amber, label muted kecil, value putih
//   Card Maps: link 'Buka di Google Maps →'
//   Jam Operasional: loop jamBuka array
//
// Props: settings SiteSettings dari getSettings()"
```

---

## 📋 FASE 5 — Halaman-Halaman (5 Pages Pro) (Hari 5-6)

### 5.1 Home Page — `app/(site)/page.tsx`

```typescript
// Prompt Cursor:
// "Buat Home page sebagai Server Component yang:
// 1. Fetch semua data secara parallel dengan Promise.all:
//    const [settings, layanan, dokter, galeri, testimoni] = await Promise.all([
//      getSettings(), getAllLayanan(), getAllDokter(), getGaleri(), getTestimoni()
//    ])
// 2. Render sections berurutan:
//    <Navbar klinikName={settings.klinikName} />
//    <Hero data={settings} />
//    <Ticker layanan={layanan} />
//    <Layanan layanan={layanan} />
//    <TimDokter dokter={dokter} />
//    <Galeri galeri={galeri} />
//    <Testimoni testimoni={testimoni} />
//    <KontakCTA settings={settings} />
//    <Footer settings={settings} />
//    <WhatsAppButton waNumber={settings.whatsapp} />
// 3. generateMetadata: ambil dari settings"
```

### 5.2 Halaman Layanan — `app/(site)/layanan/page.tsx`

```typescript
// Prompt Cursor:
// "Buat halaman Layanan dengan:
// - Page hero: h1 + tagline tentang layanan Pet Huis
// - Grid layanan versi extended (lebih detail dari homepage)
// - Setiap card punya tombol 'Tanya via WhatsApp' dengan pesan pre-fill
//   contoh: 'Halo Pet Huis, saya ingin tanya tentang [nama layanan]...'
// - Section FAQ bawah: 5 pertanyaan umum tentang layanan
// - WhatsApp CTA section di paling bawah
// Data: const layanan = await getAllLayanan()
// Metadata SEO:
//   title: 'Layanan Klinik Hewan Pet Huis Fatmawati Jakarta Selatan'
//   description: 'Layanan lengkap klinik hewan...' (150-160 karakter)"
```

### 5.3 Halaman Tim Dokter — `app/(site)/dokter/page.tsx`

```typescript
// Prompt Cursor:
// "Buat halaman Tim Dokter dengan:
// - Hero singkat: judul + deskripsi tim
// - Grid 2-3 kolom (lebih besar dari homepage), foto lebih prominent
// - Setiap card expanded: foto, nama + gelar, spesialisasi,
//   bioHtml (render dari markdown), jadwal badge
// - CTA per dokter: 'Buat Janji dengan [nama]' → WA link dengan pesan:
//   'Halo Pet Huis, saya ingin buat janji dengan [nama dokter]...'
// - generateMetadata SEO
// Data: const dokter = await getAllDokter()"
```

### 5.4 Halaman Galeri & Testimoni — `app/(site)/galeri/page.tsx`

```typescript
// Prompt Cursor:
// "Buat halaman Galeri + Testimoni:
// SECTION 1 - GALERI:
// - Filter tab: Semua | Klinik | Pasien | Grooming | Dokter (Client Component)
// - Masonry atau grid layout, lebih banyak foto
// - Lightbox saat klik foto
//
// SECTION 2 - TESTIMONI:
// - Semua testimoni dalam grid
// - Badge bintang rating
// - Link ke Google Maps review di bagian bawah
//
// Data: parallel fetch getGaleri() + getTestimoni()"
```

### 5.5 Halaman Kontak — `app/(site)/kontak/page.tsx`

```typescript
// Prompt Cursor:
// "Buat halaman Kontak lengkap dengan:
// - Info kontak: alamat, telepon, WA, Instagram
// - Jam operasional: tabel visual per hari dari settings.jamBuka
// - Google Maps embed: iframe src dari googleMapsUrl settings
//   (gunakan embed URL format: maps.google.com/maps?q=...&output=embed)
// - Contact form sederhana: Nama, Nomor HP, Pesan
//   Form submit → redirect ke WA dengan pesan dari form (tidak perlu backend)
// - FAQ: parkir, kisaran harga, apakah ada emergency contact
// Data: const settings = await getSettings()"
```

---

## 📋 FASE 6 — Blog / SEO Artikel (Hari 6-7)

### 6.1 Blog Index — `app/(site)/blog/page.tsx`

```typescript
// Prompt Cursor:
// "Buat halaman Blog index:
// - Hero: 'Tips & Info Kesehatan Hewan' + deskripsi
// - Featured artikel (featured=true) tampil lebih besar di atas
// - Grid artikel: thumbnail, kategori badge, judul, excerpt, tanggal
// - Filter by kategori (Semua | Kesehatan | Grooming | Nutrisi | dll)
//   Simpan filter di URL search params: ?kategori=kesehatan
// - Pagination sederhana atau 'Load More'
// Data: const artikel = await getAllArtikel()
// Metadata: 'Blog Pet Huis — Tips Kesehatan & Perawatan Hewan Peliharaan'"
```

### 6.2 Blog Detail — `app/(site)/blog/[slug]/page.tsx`

```typescript
// Prompt Cursor:
// "Buat halaman artikel detail:
// - generateStaticParams: return semua slug dari generateStaticSlugs()
// - generateMetadata: gunakan artikel.seoTitle + artikel.seoDescription
// - Layout: max-w-3xl centered
// - Hero: thumbnail (next/image full width), kategori badge, h1 judul,
//   tanggal publish, penulis
// - Body: render artikel.kontenHtml dengan dangerouslySetInnerHTML
//   Tambahkan prose styling (Tailwind Typography atau custom CSS)
// - In-article CTA: setelah paragraf ke-3, sisipkan banner WhatsApp
// - Sidebar atau bawah: 3 artikel terkait (by kategori)
// - JSON-LD Article schema
// Data: const artikel = await getArtikelBySlug(params.slug)"
```

### 6.3 Prose Styling untuk Artikel

```css
/* app/globals.css — tambahkan */
/* Prompt Cursor:
   "Buat CSS class .prose untuk styling konten HTML artikel:
   - h2: Playfair Display, font-size 1.5rem, margin top 2rem
   - h3: Plus Jakarta Sans semibold, font-size 1.2rem
   - p: line-height 1.8, margin bottom 1rem, color var(--body)
   - ul/ol: padding-left 1.5rem, margin bottom 1rem
   - li: margin bottom 0.25rem
   - table: border-collapse, width 100%, border 1px solid
   - th: background amber-pale, padding 0.5rem
   - td: padding 0.5rem, border 1px solid #e0e0e0
   - a: color amber, hover underline
   - blockquote: border-left 4px amber, padding-left 1rem, italic, muted" */
```

---

## 📋 FASE 7 — SEO Setup (Hari 7)

### 7.1 Metadata Layout Root

```typescript
// app/layout.tsx
// Prompt Cursor:
// "Buat root layout dengan:
// - Metadata default: title template '%s | Pet Huis Veterinary Practice'
// - Default description dari settings
// - OpenGraph default: image dari settings.ogImage
// - Twitter card: summary_large_image
// - Viewport: width=device-width, initial-scale=1
// - Robots: index, follow"
```

### 7.2 JSON-LD LocalBusiness

```typescript
// components/ui/JsonLd.tsx
// Prompt Cursor:
// "Buat komponen JsonLd yang render <script type='application/ld+json'>
// dengan LocalBusiness schema untuk Pet Huis:
// - @type: VeterinaryCare
// - name dari settings.klinikName
// - telephone dari settings.telepon
// - address: streetAddress, addressLocality Jakarta Selatan,
//   addressRegion DKI Jakarta, addressCountry ID
// - openingHoursSpecification: dari settings.jamBuka
// - geo: latitude -6.2946, longitude 106.7947 (Fatmawati)
// - url: NEXT_PUBLIC_SITE_URL
// Pasang di app/layout.tsx"
```

### 7.3 Sitemap Dinamis

```typescript
// app/sitemap.ts
// Prompt Cursor:
// "Buat sitemap.ts Next.js yang:
// 1. Baca semua slug artikel dari generateStaticSlugs()
// 2. Baca semua slug dokter dari getAllDokter()
// 3. Return MetadataRoute.Sitemap dengan:
//    - Halaman statis: /, /layanan, /dokter, /galeri, /kontak, /blog
//    - Dynamic artikel: /blog/[slug] dengan lastModified dari tanggalPublish
//    Priority: home 1.0, layanan/dokter 0.9, artikel 0.8, galeri/kontak 0.7"
```

### 7.4 Robots.txt

```typescript
// app/robots.ts
// Prompt Cursor:
// "Buat robots.ts yang allow semua bot, disallow nothing,
// sitemap: process.env.NEXT_PUBLIC_SITE_URL + '/sitemap.xml'"
```

### 7.5 Google Analytics 4 + GTM

```typescript
// app/layout.tsx — tambahkan setelah setup metadata
// Prompt Cursor:
// "Tambahkan GTM script ke layout:
// 1. GTM head snippet: <script> inject dataLayer, load GTM container
//    gunakan next/script strategy='afterInteractive'
// 2. GTM body noscript iframe setelah <body> opening
// 3. Buat lib/analytics.ts dengan helper:
//    trackEvent(eventName: string, params?: Record<string, unknown>)
//    yang push ke window.dataLayer jika ada
// 4. Gunakan trackEvent di:
//    - WhatsAppButton onClick
//    - Contact form submit
//    - Setiap klik nomor telepon"

// lib/analytics.ts — contoh:
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).dataLayer) {
    (window as any).dataLayer.push({ event: eventName, ...params })
  }
}
```

---

## 📋 FASE 8 — Deploy ke Vercel (Hari 8)

### 8.1 Next.js Config

```javascript
// next.config.js
// Prompt Cursor:
// "Buat next.config.js dengan:
// - images.localPatterns: allow /images/** (untuk static local images)
// - Tidak perlu remotePatterns (tidak ada CDN eksternal)
// - pageExtensions: ['ts', 'tsx', 'md'] kalau mau Next.js baca MD langsung
// - output: standalone untuk deploy yang optimal"

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Semua gambar dari /public/images — tidak perlu remote domain
  },
}
module.exports = nextConfig
```

### 8.2 Deploy ke Vercel

```bash
# Push ke GitHub
git init
git add .
git commit -m "feat: Pet Huis website initial commit"
git remote add origin https://github.com/username/pethuis
git push -u origin main

# Connect ke Vercel
# vercel.com → New Project → Import dari GitHub → pethuis
# Framework: Next.js (auto-detect)
# Build Command: npm run build (default)
# Output Directory: .next (default)
```

### 8.3 Environment Variables di Vercel

```
Vercel Dashboard → Project → Settings → Environment Variables

NEXT_PUBLIC_SITE_URL    = https://pethuis.co.id
NEXT_PUBLIC_WA_NUMBER   = 6287789788818
NEXT_PUBLIC_GA_ID       = G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID      = GTM-XXXXXXX
```

### 8.4 Custom Domain

```
Vercel Dashboard → Settings → Domains
Add: pethuis.co.id
Add: www.pethuis.co.id → redirect ke apex domain

DNS di domain provider:
A Record:     @    → 76.76.21.21
CNAME Record: www  → cname.vercel-dns.com
```

### 8.5 Google Search Console

```
1. Buka: search.google.com/search-console
2. Add property: pethuis.co.id
3. Verify: DNS TXT record (tempel di domain provider)
4. Submit sitemap: https://pethuis.co.id/sitemap.xml
5. Monitor weekly: Coverage, Performance, Core Web Vitals
```

---

## 📋 FASE 9 — Workflow SEO Content Retainer (Hari 9)

> Ini workflow bulanan Ainabler untuk deliver 4 artikel/bulan ke Pet Huis.  
> Semua tanpa login ke platform apapun — cukup edit file `.md` dan commit.

### 9.1 Workflow Bulanan (4 Artikel)

```
MINGGU 1 — KEYWORD RESEARCH
├── Tool: Ubersuggest Free / Google Search Console / AnswerThePublic
├── Target keyword: "klinik hewan [lokasi]", "cara [masalah hewan]", dll
├── Simpan di spreadsheet: Keyword | Volume | KD | Target URL
└── Pilih 4 keyword untuk bulan ini

MINGGU 1-4 — SATU ARTIKEL PER MINGGU:

STEP 1 — GENERATE (15 menit)
  Prompt Claude/ChatGPT:
  "Tulis artikel blog Bahasa Indonesia untuk klinik hewan Pet Huis Fatmawati.
  Judul: [JUDUL]. Target keyword utama: [KEYWORD].
  Panjang: 900-1200 kata.
  Format: intro (tanpa heading), 3-4 H2 subheading informatif,
  1 tabel data jika relevan, penutup + CTA Pet Huis.
  Gaya: profesional tapi hangat, tidak terlalu kaku.
  Mention 'Pet Huis' secara natural 2-3 kali.
  Sertakan fakta medis yang akurat."

STEP 2 — HUMANIZE & EDIT (20 menit)
  - Cek fakta medis (Google Scholar / PDHI)
  - Tambah konteks spesifik Jakarta Selatan jika relevan
  - Ganti kalimat yang terlalu "AI sounding"
  - Pastikan keyword ada di: judul, H2 pertama, paragraf 1, meta description

STEP 3 — BUAT FILE MD (10 menit)
  Buat file: content/artikel/[slug].md
  Isi frontmatter lengkap:
  - slug (lowercase, pakai dash, tanpa spasi)
  - seoTitle (max 60 karakter, include keyword)
  - seoDescription (max 160 karakter, include keyword + lokasi)
  - thumbnail: /images/artikel/[slug].jpg
  Paste konten artikel di bawah frontmatter

STEP 4 — CARI/BUAT THUMBNAIL (10 menit)
  - Gunakan Unsplash / Pexels (foto hewan gratis)
  - Atau Canva: 1200×630px, include logo Pet Huis
  - Simpan di: public/images/artikel/[slug].jpg

STEP 5 — COMMIT & DEPLOY (2 menit)
  git add content/artikel/[slug].md public/images/artikel/[slug].jpg
  git commit -m "content: artikel [judul singkat]"
  git push origin main
  → Vercel otomatis build & deploy dalam ~1 menit
  → Artikel live di pethuis.co.id/blog/[slug]
```

### 9.2 Contoh Topik Artikel — 6 Bulan Pertama

```
BULAN 1
├── Panduan vaksinasi kucing di Jakarta — jadwal, jenis, biaya
├── 5 tanda kucing Anda perlu segera ke dokter hewan
├── Grooming anjing di rumah vs klinik — mana yang lebih baik?
└── Makanan yang aman dan berbahaya untuk kucing peliharaan

BULAN 2
├── Cara sterilisasi kucing — manfaat, proses, dan perawatan pasca
├── Penyakit umum pada anjing di musim hujan Jakarta
├── Tips memilih klinik hewan terpercaya di Jakarta Selatan
└── Panduan lengkap merawat hamster untuk pemula

BULAN 3
├── Kenapa kucing tidak mau makan? Penyebab dan solusinya
├── Vaksinasi rabies — wajibkah untuk hewan peliharaan dalam kota?
├── Mengenal penyakit FIV dan FeLV pada kucing
└── Cara mempersiapkan hewan peliharaan sebelum mudik
```

---

## 📋 FASE 10 — Maintenance & Handover (Hari 10)

### 10.1 Cara Klien Edit Konten

> Klien **tidak** perlu login ke platform apapun.  
> Edit konten = edit file teks di GitHub atau kirim ke Ainabler untuk diupdate.

```
YANG BISA DIEDIT KLIEN (via Ainabler):
✓ Jam operasional     → content/settings.md → field jamBuka
✓ Nomor WhatsApp      → content/settings.md → field whatsapp
✓ Deskripsi layanan   → content/layanan/[nama].md → body text
✓ Bio dokter baru     → buat file baru content/dokter/[nama].md
✓ Foto baru           → upload ke public/images/ lalu update path di .md

PROSES UPDATE:
1. Ainabler edit file .md sesuai request klien
2. git commit + push
3. Vercel auto-deploy dalam ~60 detik
4. Website live dengan konten baru
```

### 10.2 Checklist Pre-Launch

```
TECHNICAL
[ ] npm run build berhasil tanpa error
[ ] npm run build tidak ada TypeScript error
[ ] Semua halaman (/, /layanan, /dokter, /galeri, /kontak, /blog) load OK
[ ] Mobile responsive: cek di Chrome DevTools (iPhone SE + iPad)
[ ] Lighthouse score: Performance >85, SEO >95, Accessibility >90
[ ] WhatsApp button muncul setelah scroll 300px, link WA benar
[ ] Google Maps embed tampil di halaman Kontak
[ ] Sitemap accessible: pethuis.co.id/sitemap.xml
[ ] Robots.txt accessible: pethuis.co.id/robots.txt
[ ] OG image tampil saat link di-share ke WhatsApp (cek pakai opengraph.xyz)
[ ] GTM container ter-load (cek di Chrome DevTools → Network → gtm.js)
[ ] GA4 real-time menerima event kunjungan

KONTEN
[ ] Foto dokter real sudah diupload ke public/images/dokter/
[ ] Nama + spesialisasi dokter semua akurat
[ ] Nomor WhatsApp benar dan aktif (test kirim pesan)
[ ] Alamat persis: Jl. RS. Fatmawati Raya No.26
[ ] Jam operasional akurat (konfirmasi ke klien)
[ ] Minimal 5 foto galeri klinik real
[ ] Minimal 2 testimoni real (minta ijin klien untuk dipublish nama)
[ ] Semua foto punya alt text (cek di file .md)

SEO
[ ] Setiap halaman punya title unik (cek di browser tab)
[ ] Setiap halaman punya meta description
[ ] JSON-LD LocalBusiness tampil (cek di Chrome → Inspect → Elements → cari ld+json)
[ ] Sitemap sudah disubmit ke Google Search Console
[ ] Tidak ada broken link (cek dengan broken-link-checker npm)
[ ] Core Web Vitals: LCP <2.5s, FID <100ms, CLS <0.1
```

---

## 🗓️ Timeline Ringkas

| Hari | Fase | Output |
|------|------|--------|
| 1 | Setup project + folder content + parser lib | Project running localhost, data MD terbaca |
| 2 | Design system + komponen UI dasar | Tailwind config, FadeUp, WhatsApp button |
| 3–4 | Semua 8 sections landing page | Home page sempurna di localhost |
| 5–6 | 5 halaman Pro lengkap | Semua route berfungsi dengan konten |
| 7 | SEO: metadata, JSON-LD, sitemap, robots, GA4+GTM | Lighthouse SEO score >95 |
| 8 | Blog system + artikel pertama | /blog live dengan 1 artikel contoh |
| 9 | Deploy Vercel + domain + Search Console | 🚀 Website live! |
| 10 | Checklist + handover + training workflow | Klien bisa request update |

---

## 💡 Tips Vibe Coding

### Urutan Prompt yang Efektif

```
1. Mulai SELALU dengan context ini:
   "Project: Pet Huis website. Stack: Next.js 14 App Router + Tailwind.
    Colour system — teal-dominant:
    Primary teal: #1B6B5A | Teal pale: #D4EDE7 | Teal dark: #0F3D30
    Accent amber: #F5A623 | Off-white bg: #FAFAF7 | Charcoal: #1E2D2A
    Hero section background: teal gelap (#1B6B5A)
    Font: Playfair Display (heading) + Plus Jakarta Sans (body).
    CMS: file-based markdown di folder /content."

2. Satu komponen = satu prompt. Jangan minta semua sekaligus.

3. Setelah komponen UI jadi, prompt terpisah:
   "Sekarang integrasikan data dari fungsi CMS ini ke komponen [nama]:
    [paste interface TypeScript + contoh return data]"

4. Untuk SEO: prompt terpisah per halaman:
   "Tambahkan generateMetadata ke halaman [nama].
    Target keyword: [keyword]. Location: Fatmawati Jakarta Selatan."
```

### Kalau Stuck

```
Problem: gray-matter tidak bisa baca file
Fix: pastikan gunakan path.join(process.cwd(), 'content/...')
     bukan path relatif

Problem: next/image tidak tampil untuk /public/images
Fix: pastikan path dimulai dengan / (slash)
     contoh: /images/dokter/drh-isti.jpg ✓
             images/dokter/drh-isti.jpg ✗

Problem: Build error karena fs tidak ada di client
Fix: semua fungsi cms (getDokter, getLayanan, dll) hanya dipanggil
     di Server Components atau di generateStaticParams
     Jangan import di Client Component

Problem: Artikel tidak muncul di sitemap
Fix: pastikan slug di frontmatter match dengan nama file
     nama file: vaksin-kucing-jakarta.md
     slug di frontmatter: vaksin-kucing-jakarta ✓
```

### Keuntungan File-Based vs Sanity

| Aspek | File-Based MD | Sanity |
|-------|--------------|--------|
| Setup | 5 menit | 1-2 jam |
| Dependencies | 3 packages | 8+ packages |
| Edit konten | Teks biasa | Dashboard web |
| Deploy setelah edit | Otomatis via git push | Butuh webhook |
| Biaya bulanan | Rp 0 | Free tier / berbayar |
| Offline editing | ✓ bisa | ✗ perlu internet |
| Version history | Git native | Sanity revisions |
| Learning curve | Rendah | Sedang |

---

*Plan ini dibuat oleh Ainabler untuk project Pet Huis Veterinary Practice.*  
*Versi: 2.0 — Revisi dari Sanity CMS ke File-Based Markdown CMS.*