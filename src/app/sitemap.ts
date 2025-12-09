import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://binarycapital.in';
  const currentDate = new Date().toISOString();

  // Main pages
  const mainPages = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
  ];

  // Service pages
  const services = [
    'finance-advisory',
    'project-advisory',
    'capital-markets',
  ];

  const servicePages = services.map((service) => ({
    url: `${baseUrl}/${service}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.95,
  }));

  // Product pages
  const products = [
    'structuredfinance',
    'structuredbonds',
    'supplychainfinancing',
    'projectfinancing',
    'mergersacquisitions',
    'capitalmarkets',
  ];

  const productPages = products.map((product) => ({
    url: `${baseUrl}/products/${product}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  return [...mainPages, ...servicePages, ...productPages];
}
