/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://binarycapital.in',
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  sitemapSize: 7000,
  changefreq: 'daily',
  priority: 0.7,
  exclude: ['/api/*', '/_next/*', '/admin/*', '/private/*'],
  
  // Advanced robots.txt configuration
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/admin/', '/private/'],
      },
      {
        userAgent: 'Googlebot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Bingbot',
        allow: '/',
        crawlDelay: 0,
      },
      {
        userAgent: 'Slurp', // Yahoo
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'DuckDuckBot',
        allow: '/',
        crawlDelay: 1,
      },
      {
        userAgent: 'Baiduspider', // Baidu (Chinese search engine)
        allow: '/',
        crawlDelay: 2,
      },
      {
        userAgent: 'Yandex', // Russian search engine
        allow: '/',
        crawlDelay: 2,
      },
    ],
    additionalSitemaps: [
      'https://binarycapital.in/sitemap-pages.xml',
      'https://binarycapital.in/sitemap-services.xml',
      'https://binarycapital.in/sitemap-products.xml',
    ],
  },
  
  // Custom transformation for URLs
  transform: async (config, path) => {
    // Custom priority based on path
    let priority = config.priority;
    let changefreq = config.changefreq;
    
    if (path === '/') {
      priority = 1.0;
      changefreq = 'weekly';
    } else if (path.startsWith('/finance-advisory') || 
               path.startsWith('/project-advisory') || 
               path.startsWith('/capital-markets')) {
      priority = 0.95;
      changefreq = 'monthly';
    } else if (path.startsWith('/products/')) {
      priority = 0.85;
      changefreq = 'monthly';
    } else if (path === '/about') {
      priority = 0.9;
      changefreq = 'monthly';
    }
    
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: [],
    };
  },
  
  // Additional paths to include
  additionalPaths: async (config) => {
    const result = [];
    
    // Add custom paths with specific configurations
    const customPaths = [
      { path: '/', priority: 1.0, changefreq: 'weekly' },
      { path: '/about', priority: 0.9, changefreq: 'monthly' },
      { path: '/finance-advisory', priority: 0.95, changefreq: 'monthly' },
      { path: '/project-advisory', priority: 0.95, changefreq: 'monthly' },
      { path: '/capital-markets', priority: 0.95, changefreq: 'monthly' },
    ];
    
    for (const customPath of customPaths) {
      result.push({
        loc: customPath.path,
        changefreq: customPath.changefreq,
        priority: customPath.priority,
        lastmod: new Date().toISOString(),
      });
    }
    
    return result;
  },
};
