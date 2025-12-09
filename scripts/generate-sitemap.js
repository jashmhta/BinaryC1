const fs = require('fs');
const path = require('path');

const baseUrl = 'https://binarycapital.in';
const currentDate = new Date().toISOString();

// Define all pages with their priorities and change frequencies
const pages = [
  // Main pages
  { url: '/', changefreq: 'weekly', priority: 1.0, lastmod: currentDate },
  { url: '/about', changefreq: 'monthly', priority: 0.9, lastmod: currentDate },
  
  // Service pages
  { url: '/finance-advisory', changefreq: 'monthly', priority: 0.9, lastmod: currentDate },
  { url: '/project-advisory', changefreq: 'monthly', priority: 0.9, lastmod: currentDate },
  { url: '/capital-markets', changefreq: 'monthly', priority: 0.9, lastmod: currentDate },
  
  // Product pages
  { url: '/products/structuredfinance', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
  { url: '/products/projectfinancing', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
  { url: '/products/mergersacquisitions', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
  { url: '/products/capitalmarkets', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
  { url: '/products/supplychainfinancing', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
  { url: '/products/structuredbonds', changefreq: 'monthly', priority: 0.8, lastmod: currentDate },
];

// Generate XML sitemap
function generateSitemap() {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${pages.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return xml;
}

// Write sitemap to public directory
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
fs.writeFileSync(sitemapPath, generateSitemap());
console.log('✓ Sitemap generated successfully at:', sitemapPath);

// Generate robots.txt
const robotsTxt = `# Binary Capital - Robots.txt
# https://binarycapital.in
# Investment Banking & Financial Advisory Mumbai

# Allow all major search engines
User-agent: *
Allow: /

# Sitemap location
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay for respectful crawling
Crawl-delay: 1

# Disallow API routes and internal paths
Disallow: /api/
Disallow: /_next/
Disallow: /admin/
Disallow: /private/

# Allow specific bots with no delay
User-agent: Googlebot
Allow: /
Crawl-delay: 0

User-agent: Bingbot
Allow: /
Crawl-delay: 0

User-agent: Slurp
Allow: /
Crawl-delay: 0
`;

const robotsPath = path.join(__dirname, '../public/robots.txt');
fs.writeFileSync(robotsPath, robotsTxt);
console.log('✓ Robots.txt generated successfully at:', robotsPath);
