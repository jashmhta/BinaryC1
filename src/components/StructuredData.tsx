"use client";

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "@id": "https://binarycapital.in/#organization",
    "name": "Binary Capital Advisors LLP",
    "alternateName": "Binary Capital",
    "url": "https://binarycapital.in",
    "logo": "https://binarycapital.in/logo-4zsp2eCD.png",
    "image": "https://binarycapital.in/hero_finance_investment-oDlAhxWb.png",
    "description": "Leading investment banking and financial advisory firm in Mumbai offering M&A advisory, capital markets, project finance, and structured finance solutions.",
    "telephone": "+91-7738056127",
    "email": "sales@binarycapital.in",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2045, 2nd Floor, Spaces Adani Height, Andheri West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400053",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.117817,
      "longitude": 72.826299
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "sameAs": [
      "https://www.linkedin.com/company/binary-capital",
      "https://twitter.com/binarycapital"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "India"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Financial Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Finance Advisory",
            "description": "Comprehensive financial advisory services covering strategic planning, capital structuring, and financial optimization"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Project Advisory",
            "description": "End-to-end project advisory services from conceptualization to execution for infrastructure and industrial projects"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Capital Markets",
            "description": "Advisory and execution services for equity and debt capital market transactions"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mergers & Acquisitions",
            "description": "Strategic M&A advisory services for businesses across India"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structured Finance",
            "description": "Complex financial structures including asset-backed securities and risk transfer mechanisms"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "64",
      "bestRating": "5",
      "worstRating": "1"
    },
    "foundingDate": "2014",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "25"
    },
    "slogan": "Shaping Success with Bespoke Financial Strategies"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://binarycapital.in/#localbusiness",
    "name": "Binary Capital Advisors LLP",
    "image": "https://binarycapital.in/hero_finance_investment-oDlAhxWb.png",
    "priceRange": "₹₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2045, 2nd Floor, Spaces Adani Height, Andheri West",
      "addressLocality": "Mumbai",
      "addressRegion": "MH",
      "postalCode": "400053",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 19.117817,
      "longitude": 72.826299
    },
    "url": "https://binarycapital.in",
    "telephone": "+91-7738056127",
    "email": "sales@binarycapital.in",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "64"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://binarycapital.in/#website",
    "url": "https://binarycapital.in",
    "name": "Binary Capital",
    "description": "Investment Banking & Financial Advisory Mumbai",
    "publisher": {
      "@id": "https://binarycapital.in/#organization"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://binarycapital.in/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en-IN"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://binarycapital.in/"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}
