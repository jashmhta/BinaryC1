import { Metadata } from 'next';

interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noindex?: boolean;
}

export function generateMetadata(config: SEOConfig): Metadata {
  const {
    title,
    description,
    keywords,
    canonical,
    ogImage = '/hero_finance_investment-oDlAhxWb.png',
    ogType = 'website',
    noindex = false,
  } = config;

  const fullTitle = title.includes('Binary Capital') 
    ? title 
    : `${title} | Binary Capital`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: canonical || undefined,
    },
    robots: {
      index: !noindex,
      follow: !noindex,
      googleBot: {
        index: !noindex,
        follow: !noindex,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: ogType,
      title: fullTitle,
      description,
      url: canonical ? `https://binarycapital.in${canonical}` : undefined,
      siteName: 'Binary Capital',
      locale: 'en_IN',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
  };
}

export function generateServiceMetadata(serviceName: string, description: string, keywords: string): Metadata {
  return generateMetadata({
    title: `${serviceName} Services Mumbai | Binary Capital`,
    description: `${description} Expert ${serviceName.toLowerCase()} services in Mumbai by Binary Capital. Contact us for professional financial advisory.`,
    keywords: `${keywords}, ${serviceName} Mumbai, ${serviceName} India, Binary Capital ${serviceName}`,
    canonical: `/${serviceName.toLowerCase().replace(/\s+/g, '-')}`,
  });
}

export function generateProductMetadata(productName: string, description: string, keywords: string): Metadata {
  return generateMetadata({
    title: `${productName} | Binary Capital Financial Products`,
    description: `${description} Learn more about our ${productName.toLowerCase()} solutions.`,
    keywords: `${keywords}, ${productName} Mumbai, ${productName} India`,
    canonical: `/products/${productName.toLowerCase().replace(/\s+/g, '')}`,
  });
}

// Structured data generators
export function generateServiceSchema(service: {
  name: string;
  description: string;
  url: string;
  image?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name,
    'description': service.description,
    'provider': {
      '@type': 'FinancialService',
      'name': 'Binary Capital Advisors LLP',
      'url': 'https://binarycapital.in',
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'India',
    },
    'url': service.url,
    'image': service.image || '/hero_finance_investment-oDlAhxWb.png',
  };
}

export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map((faq) => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer,
      },
    })),
  };
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.name,
      'item': item.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': article.title,
    'description': article.description,
    'image': article.image,
    'datePublished': article.datePublished,
    'dateModified': article.dateModified || article.datePublished,
    'author': {
      '@type': 'Organization',
      'name': article.author || 'Binary Capital Advisors LLP',
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Binary Capital Advisors LLP',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://binarycapital.in/logo-4zsp2eCD.png',
      },
    },
  };
}
