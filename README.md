# Pondok Pesantren THOLABIE CIBS Landing Page (Astro Version)

Repositori ini berisi kode sumber untuk landing page resmi **Pondok Pesantren THOLABIE Classic International Boarding School (CIBS) Malang** yang telah di-porting sepenuhnya dari React/Vite ke **Astro**.

Situs ini berfungsi untuk menginformasikan program penerimaan santri beasiswa kuliah berasrama D3 kerja sama resmi dengan **Politeknik Kota Malang**.

---

## 🛠️ Tech Stack & Konfigurasi
Proyek ini dibangun menggunakan teknologi modern yang sangat optimal untuk website berbasis performa tinggi (static-first):
* **Framework:** [Astro](https://astro.build/) (v7.x)
* **Styling (CSS):** [Tailwind CSS v4](https://tailwindcss.com/) (menggunakan `@tailwindcss/vite` plugin lokal)
* **Icon Library:** [@lucide/astro](https://lucide.dev/) (menggunakan SVG native yang sangat ringan)
* **Deployment Adapter:** [@astrojs/vercel](https://docs.astro.build/en/guides/deploy/vercel/) (siap dideploy ke Vercel Serverless/Static)

---

## 🚀 Fitur Website
1. **Performa LCP Teroptimasi:** Preloading gambar visual utama (`pondok-pesantren-tholabie-malang-cibs.webp`) untuk waktu pemuatan awal yang instan.
2. **Lazy Loading Aset:** Pemuatan gambar di bawah lipatan halaman menggunakan `loading="lazy"` dan `decoding="async"` guna meminimalkan bandwidth.
3. **Glassmorphic Navigation:** Navbar transparan dengan efek blur latar belakang yang menyusut dan solid saat digulirkan.
4. **Accordion FAQ:** Tanya jawab interaktif yang dikendalikan dengan vanilla Javascript berkinerja tinggi.
5. **Scroll Animation:** Efek kemunculan elemen secara halus saat halaman digulirkan menggunakan browser `IntersectionObserver`.
6. **Mobile Friendly:** Responsivitas total dari mobile terkecil hingga desktop lebar dengan sticky WhatsApp CTA.

---

## 🧞 Perintah Dasar (Development)

Semua perintah dijalankan di dalam direktori root proyek menggunakan terminal:

| Perintah | Deskripsi |
| :--- | :--- |
| `npm install` | Menginstal seluruh dependensi lokal proyek |
| `npm run dev` | Menjalankan server lokal di `http://localhost:4321` |
| `npm run build` | Melakukan kompilasi produksi ke folder `./dist/` |
| `npm run preview` | Meninjau hasil kompilasi produksi secara lokal |

---

## 📁 Struktur Direktori
```text
/
├── public/                  # Aset statis (Favicons, Robots.txt, Sitemap, Manifest)
│   ├── img/                 # Folder gambar logo dan dokumentasi asli
│   └── site.webmanifest     # Manifest aplikasi web untuk PWA
├── src/
│   ├── components/          # 17 Komponen mandiri Astro (Navbar, Hero, FAQ, dll.)
│   ├── pages/
│   │   └── index.astro      # Halaman utama landing page & script client-side
│   └── styles/
│       └── global.css       # File style global, deklarasi @theme Tailwind v4
├── astro.config.mjs         # Konfigurasi Astro (Vite, Tailwind, Vercel Adapter)
└── package.json             # Dependensi proyek
```

---

## 🤝 Lisensi & Kontributor
Situs web ini dikembangkan secara profesional oleh **[ongki.pro](https://ongki.pro)**. Hak cipta dilindungi oleh **Pondok Pesantren THOLABIE CIBS**.
