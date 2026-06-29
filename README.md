# 🕌 Pondok Pesantren THOLABIE CIBS — Website Resmi (Astro Version)

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)
[![Repository](https://img.shields.io/badge/GitHub-Public-brightgreen?style=for-the-badge&logo=github)](https://github.com/ongkipro/tholabie)

Repositori ini berisi kode sumber resmi untuk website company profile **Pondok Pesantren THOLABIE Classic International Boarding School (CIBS) Malang** yang dibangun menggunakan framework modern **Astro** terintegrasi dengan **Tailwind CSS v4**.

Situs ini dirancang khusus untuk menyajikan program beasiswa penuh kuliah 3 tahun D3 Politeknik Kota Malang dan inkubasi keahlian digital bagi santri berprestasi dari seluruh Indonesia.

---

## 🚀 Fitur Website Utama

1. **Arsitektur Multi-Page Terpadu:** Terbagi secara modular menjadi 6 halaman inti:
   * **Beranda (`/`):** Ringkasan nilai, keunggulan, snapshot asrama, dan testimoni alumni.
   * **Profil (`/tentang`):** Sejarah pondok, visi & misi, dewan pembina, serta 5 nilai dasar santri.
   * **Beasiswa (`/beasiswa`):** Rincian beasiswa D3 penuh, kriteria kelayakan, dan alur pendaftaran seleksi.
   * **Asrama (`/asrama`):** Rutinitas ritme harian santri (dari Qiyamul Lail hingga inkubasi), fasilitas asrama, dan galeri dokumentasi.
   * **Kurikulum (`/kurikulum`):** Pembahasan 4 pilar keahlian digital (AI, Pemasaran Digital, Toko Online, Desain) dan *soft skills*.
   * **Hubungi Kami (`/kontak`):** Alamat resmi, peta interaktif, jam operasional, saluran WhatsApp, dan tanya jawab lengkap (FAQ).
2. **Kanal Blog Interaktif (`/blog`):** Dilengkapi dengan halaman index blog dan detail artikel dinamis berdaya jangkau luas untuk menyajikan berita, tips pendidikan, dan literasi teknologi digital bagi santri.
3. **Navigasi Mobile Floating Glass Card:** Tombol menu burger melingkar kaca (*glass circle*) dengan animasi morphing 3-garis murni, serta menu dropdown melayang (*floating rounded-2xl glass card*) dengan chevrons dinamis.
4. **Navigasi Rekam Jejak (Breadcrumbs):** Elemen navigasi kapsul transparan visual (Beranda • Nama Sub-halaman) di atas header sub-halaman untuk mempermudah navigasi balik.
5. **Optimasi SEO & Kecepatan Akses:**
   * **Tag Meta Dinamis:** Canonical URL, properti sosial Open Graph (Facebook), dan Twitter Card ter-generate dinamis berbasis jalur URL sub-halaman saat ini.
   * **Unique Meta Descriptions:** Menghilangkan warning duplikasi deskripsi di mata robot pencari Google.
   * **JSON-LD Structured Data:** Skema terstruktur untuk `School` (profil sekolah) dan `BreadcrumbList` (rekam jejak penelusuran) guna menaikkan *rich snippets* di hasil pencarian.
   * **Sitemap Dinamis (`sitemap.xml`):** Pendaftaran otomatis ke-6 sub-halaman utama dan indeks blog secara tertib.
   * **Preloading Aset:** Prioritas muat untuk gambar Visual Hero untuk memangkas metrik LCP (Largest Contentful Paint).

---

## 🛠️ Tech Stack & Konfigurasi

| Teknologi | Versi / Paket | Deskripsi / Peran |
| :--- | :--- | :--- |
| **Framework** | [Astro](https://astro.build/) (v7.x) | Static-first, Zero JS default, HTML-first templating |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) | `@tailwindcss/vite` plugin, custom theme variables |
| **Icons** | [@lucide/astro](https://lucide.dev/) | SVG native icon set, sangat ringan tanpa beban DOM |
| **Adapter** | [@astrojs/vercel](https://vercel.com/) | Integrasi Vercel deployment serverless & static asset hosting |
| **Tipografi** | Plus Jakarta Sans | Google Fonts ter-preconnect untuk rendering super mulus |

---

## 📁 Struktur Direktori Utama

```text
/
├── public/                      # Aset statis global
│   ├── img/                     # Folder logo dan aset visual testimonial terkompresi
│   ├── favicon.ico / .svg       # Favicon supersampling resolusi tinggi
│   ├── robots.txt               # Aturan akses robot crawler
│   ├── sitemap.xml              # Peta situs terindeks Google
│   └── site.webmanifest         # Manifest metadata PWA
├── src/
│   ├── components/              # Komponen terbagi
│   │   ├── sections/            # 14 Blok section homepage modular (Hero, About, dll.)
│   │   ├── Ornament.astro       # Garis ornamen Islami pemisah section
│   │   ├── Navbar.astro         # Navigasi atas dengan pendeteksi tautan aktif & burger menu
│   │   ├── Footer.astro         # Kaki halaman terintegrasi dengan peta situs & hak cipta
│   │   └── StickyCTA.astro      # Tombol melayang cepat pendaftaran via WhatsApp
│   ├── layouts/
│   │   └── Layout.astro         # Template dasar HTML, dynamic SEO meta, dan JSON-LD
│   ├── pages/
│   │   ├── blog/                # Fitur blog terintegrasi
│   │   │   ├── index.astro      # Indeks daftar artikel blog
│   │   │   └── [slug].astro     # Detail bacaan postingan blog dinamis
│   │   ├── index.astro          # Halaman beranda
│   │   ├── tentang.astro        # Halaman Profil
│   │   ├── beasiswa.astro       # Halaman Program Beasiswa
│   │   ├── asrama.astro         # Halaman Kehidupan Asrama
│   │   ├── kurikulum.astro      # Halaman Kurikulum Digital
│   │   └── kontak.astro         # Halaman Hubungi Kami & FAQ
│   └── styles/
│       └── global.css           # Styling global, skema warna Kiswah & variabel custom
├── astro.config.mjs             # Konfigurasi Vercel adapter & plugin Vite
└── package.json                 # Dependensi Node.js
```

---

## 🧞 Perintah Dasar Pengembangan

Jalankan perintah ini di dalam direktori root proyek melalui terminal:

```bash
# Menginstal seluruh dependensi lokal proyek
npm install

# Menjalankan server pengembangan lokal (akses di http://localhost:4321)
npm run dev

# Melakukan kompilasi produksi ke folder static ./dist/
npm run build

# Meninjau hasil kompilasi produksi secara lokal
npm run preview
```

---

## 🤝 Lisensi & Pengembang

Website ini dikembangkan secara profesional dan dipublikasikan ke publik oleh:

### 👤 Pengembang Utama (Developer Credentials)
* **Lead Engineer:** **Paduka Ongki — [ongki.pro](https://ongki.pro)**
* **Kontak Kerja:** `get@ongki.pro`
* **Jasa:** Solusi Web Premium, Konsultan TI, & Transformasi Digital.

### 🤖 AI Co-Developer Partner
* **Antigravity (Google DeepMind Team):** Agen kecerdasan buatan kelas premium yang bertugas mengarsiteki dinamika multi-page, merancang optimasi performa LCP, integrasi metadata SEO, dan visualisasi layout kaca (*glassmorphic CSS*).

*Hak Cipta dilindungi undang-undang. Dimiliki secara resmi oleh **Pondok Pesantren THOLABIE Classic International Boarding School (CIBS) Malang**.*
