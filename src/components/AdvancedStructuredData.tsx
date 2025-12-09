"use client";

import { JsonLd } from 'react-schemaorg';
import {
  Organization,
  FinancialService,
  ProfessionalService,
  WebSite,
  BreadcrumbList,
  FAQPage,
  LocalBusiness,
  Service,
  AggregateRating,
  PostalAddress,
  GeoCoordinates,
  OpeningHoursSpecification,
} from 'schema-dts';

export function AdvancedStructuredData() {
  return (
    <>
      {/* Organization Schema */}
      <JsonLd<Organization>
        item={{
          '@context': 'https://schema.org',
          '@type': 'Organization',
          '@id': 'https://binarycapital.in/#organization',
          name: 'Binary Capital Advisors LLP',
          alternateName: 'Binary Capital',
          legalName: 'Binary Capital Advisors LLP',
          url: 'https://binarycapital.in',
          logo: 'https://binarycapital.in/logo-4zsp2eCD.png',
          image: 'https://binarycapital.in/hero_finance_investment-oDlAhxWb.png',
          description: 'Leading investment banking and financial advisory firm in Mumbai offering M&A advisory, capital markets, project finance, and structured finance solutions.',
          foundingDate: '2014',
          slogan: 'Shaping Success with Bespoke Financial Strategies',
          telephone: '+91-7738056127',
          email: 'sales@binarycapital.in',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2045, 2nd Floor, Spaces Adani Height, Andheri West',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400053',
            addressCountry: 'IN',
          },
          areaServed: [
            {
              '@type': 'Country',
              name: 'India',
            },
            {
              '@type': 'State',
              name: 'Maharashtra',
            },
            {
              '@type': 'City',
              name: 'Mumbai',
            },
          ],
          sameAs: [
            'https://www.linkedin.com/company/binary-capital',
            'https://twitter.com/binarycapital',
            'https://www.facebook.com/binarycapital',
          ],
          numberOfEmployees: {
            '@type': 'QuantitativeValue',
            value: 25,
          },
          knowsAbout: [
            'Investment Banking',
            'Financial Advisory',
            'Mergers and Acquisitions',
            'Capital Markets',
            'Project Finance',
            'Structured Finance',
            'Corporate Finance',
            'Transaction Advisory',
            'Debt Capital Markets',
            'Equity Capital Markets',
            'IPO Advisory',
            'M&A Advisory',
            'Infrastructure Financing',
            'Asset-Backed Securities',
            'Corporate Restructuring',
            'Business Valuation',
          ],
        }}
      />

      {/* Financial Service Schema */}
      <JsonLd<FinancialService>
        item={{
          '@context': 'https://schema.org',
          '@type': 'FinancialService',
          '@id': 'https://binarycapital.in/#financialservice',
          name: 'Binary Capital Advisors LLP',
          url: 'https://binarycapital.in',
          telephone: '+91-7738056127',
          email: 'sales@binarycapital.in',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2045, 2nd Floor, Spaces Adani Height, Andheri West',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400053',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.117817,
            longitude: 72.826299,
          },
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 4.9,
            reviewCount: 64,
            bestRating: 5,
            worstRating: 1,
          },
          hasOfferCatalog: {
            '@type': 'OfferCatalog',
            name: 'Financial Services',
            itemListElement: [
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Finance Advisory',
                  description: 'Comprehensive financial advisory services covering strategic planning, capital structuring, and financial optimization',
                  provider: {
                    '@type': 'Organization',
                    name: 'Binary Capital Advisors LLP',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Project Advisory',
                  description: 'End-to-end project advisory services from conceptualization to execution for infrastructure and industrial projects',
                  provider: {
                    '@type': 'Organization',
                    name: 'Binary Capital Advisors LLP',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Capital Markets',
                  description: 'Advisory and execution services for equity and debt capital market transactions',
                  provider: {
                    '@type': 'Organization',
                    name: 'Binary Capital Advisors LLP',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'M&A Advisory',
                  description: 'Strategic mergers and acquisitions advisory services for businesses across India',
                  provider: {
                    '@type': 'Organization',
                    name: 'Binary Capital Advisors LLP',
                  },
                },
              },
              {
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: 'Structured Finance',
                  description: 'Complex financial structures including asset-backed securities and risk transfer mechanisms',
                  provider: {
                    '@type': 'Organization',
                    name: 'Binary Capital Advisors LLP',
                  },
                },
              },
            ],
          },
        }}
      />

      {/* Professional Service Schema */}
      <JsonLd<ProfessionalService>
        item={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          '@id': 'https://binarycapital.in/#professionalservice',
          name: 'Binary Capital Advisors LLP',
          image: 'https://binarycapital.in/hero_finance_investment-oDlAhxWb.png',
          priceRange: '₹₹₹',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2045, 2nd Floor, Spaces Adani Height, Andheri West',
            addressLocality: 'Mumbai',
            addressRegion: 'MH',
            postalCode: '400053',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.117817,
            longitude: 72.826299,
          },
          url: 'https://binarycapital.in',
          telephone: '+91-7738056127',
          email: 'sales@binarycapital.in',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 4.9,
            reviewCount: 64,
            bestRating: 5,
            worstRating: 1,
          },
        }}
      />

      {/* Website Schema */}
      <JsonLd<WebSite>
        item={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          '@id': 'https://binarycapital.in/#website',
          url: 'https://binarycapital.in',
          name: 'Binary Capital',
          description: 'Investment Banking & Financial Advisory Mumbai',
          publisher: {
            '@id': 'https://binarycapital.in/#organization',
          },
          potentialAction: {
            '@type': 'SearchAction',
            target: {
              '@type': 'EntryPoint',
              urlTemplate: 'https://binarycapital.in/?s={search_term_string}',
            },
          },
          inLanguage: 'en-IN',
        }}
      />

      {/* Breadcrumb Schema */}
      <JsonLd<BreadcrumbList>
        item={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://binarycapital.in/',
            },
          ],
        }}
      />

      {/* Local Business Schema */}
      <JsonLd<LocalBusiness>
        item={{
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          '@id': 'https://binarycapital.in/#localbusiness',
          name: 'Binary Capital Advisors LLP',
          image: 'https://binarycapital.in/hero_finance_investment-oDlAhxWb.png',
          address: {
            '@type': 'PostalAddress',
            streetAddress: '2045, 2nd Floor, Spaces Adani Height, Andheri West',
            addressLocality: 'Mumbai',
            addressRegion: 'Maharashtra',
            postalCode: '400053',
            addressCountry: 'IN',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 19.117817,
            longitude: 72.826299,
          },
          url: 'https://binarycapital.in',
          telephone: '+91-7738056127',
          email: 'sales@binarycapital.in',
          priceRange: '₹₹₹',
          openingHoursSpecification: [
            {
              '@type': 'OpeningHoursSpecification',
              dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
              opens: '09:00',
              closes: '18:00',
            },
          ],
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: 4.9,
            reviewCount: 64,
            bestRating: 5,
            worstRating: 1,
          },
        }}
      />
    </>
  );
}
