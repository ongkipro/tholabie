export async function GET() {
  const staticPages = [
    { path: '', changefreq: 'weekly', priority: '1.0' },
    { path: '/tentang', changefreq: 'monthly', priority: '0.8' },
    { path: '/beasiswa', changefreq: 'weekly', priority: '0.9' },
    { path: '/asrama', changefreq: 'monthly', priority: '0.8' },
    { path: '/kurikulum', changefreq: 'monthly', priority: '0.8' },
    { path: '/kontak', changefreq: 'monthly', priority: '0.7' },
  ];

  const currentDate = new Date().toISOString().split('T')[0];

  const xmlEntries = staticPages.map(page => `
  <url>
    <loc>https://pesantrentholabie.com${page.path}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`);

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
