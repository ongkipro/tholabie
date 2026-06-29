export async function GET() {
  const articles = [
    { slug: 'literasi-ai-santri-era-digital', date: '2026-06-25' },
    { slug: 'panduan-beasiswa-politeknik-sktm', date: '2026-06-20' },
    { slug: 'adab-menuntut-ilmu-era-digital', date: '2026-06-15' },
    { slug: 'peluang-bisnis-dropship-santri', date: '2026-06-10' },
  ];

  const staticPages = [
    { path: '', changefreq: 'weekly', priority: '1.0' },
    { path: '/tentang', changefreq: 'monthly', priority: '0.8' },
    { path: '/beasiswa', changefreq: 'weekly', priority: '0.9' },
    { path: '/asrama', changefreq: 'monthly', priority: '0.8' },
    { path: '/kurikulum', changefreq: 'monthly', priority: '0.8' },
    { path: '/kontak', changefreq: 'monthly', priority: '0.7' },
    { path: '/blog', changefreq: 'weekly', priority: '0.7' },
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  const xmlEntries = [
    ...staticPages.map(page => `
  <url>
    <loc>https://pesantrentholabie.com${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`),
    ...articles.map(article => `
  <url>
    <loc>https://pesantrentholabie.com/blog/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`)
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${xmlEntries.join('')}
</urlset>`;

  return new Response(sitemapXml.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'X-Robots-Tag': 'noindex'
    }
  });
}
