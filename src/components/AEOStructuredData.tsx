"use client";

import { JsonLd } from 'react-schemaorg';
import {
  FAQPage,
  HowTo,
  Article,
  DefinedTerm,
  QAPage,
} from 'schema-dts';

/**
 * AEO (Answer Engine Optimization) Structured Data
 * Optimized for AI-powered search engines like ChatGPT, Perplexity, Google SGE, Bing Chat
 */
export function AEOStructuredData() {
  return (
    <>
      {/* FAQ Schema - Optimized for Answer Engines */}
      <JsonLd<FAQPage>
        item={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          '@id': 'https://binarycapital.in/#faq',
          mainEntity: [
            {
              '@type': 'Question',
              name: 'What services does Binary Capital offer?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Binary Capital offers comprehensive investment banking and financial advisory services including: Finance Advisory (structured finance, supply chain financing, project financing), Transaction Advisory (mergers and acquisitions, corporate restructuring), Capital Markets (debt and equity capital markets, IPO advisory), and Project Advisory (infrastructure financing, SPV structuring). We serve clients across Mumbai, Delhi, Bangalore, and throughout India.',
              },
            },
            {
              '@type': 'Question',
              name: 'Where is Binary Capital located?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Binary Capital is headquartered in Mumbai at 2045, 2nd Floor, Spaces Adani Height, Andheri West, Mumbai, Maharashtra 400053, India. We serve clients across India including Mumbai, Delhi, Bangalore, Hyderabad, Chennai, and other major cities.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is the difference between Finance Advisory and Transaction Advisory?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Finance Advisory focuses on capital structuring, financial optimization, and funding solutions including structured finance, project financing, and supply chain financing. Transaction Advisory specializes in mergers and acquisitions (M&A), corporate restructuring, business valuation, and strategic transaction support. Both services complement each other to provide comprehensive financial solutions.',
              },
            },
            {
              '@type': 'Question',
              name: 'How does Binary Capital help with M&A transactions?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Binary Capital provides end-to-end M&A advisory services including: target identification and screening, business valuation and financial modeling, due diligence coordination, deal structuring and negotiation, regulatory compliance support, and post-merger integration planning. Our experienced team has successfully closed numerous M&A transactions across various sectors in India.',
              },
            },
            {
              '@type': 'Question',
              name: 'What industries does Binary Capital serve?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Binary Capital serves diverse industries including infrastructure, manufacturing, real estate, technology, healthcare, energy, retail, and financial services. Our sector-agnostic approach combined with deep industry expertise allows us to deliver tailored financial solutions for businesses of all sizes across India.',
              },
            },
            {
              '@type': 'Question',
              name: 'How long does a typical M&A transaction take?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'A typical M&A transaction takes 6-12 months from initial engagement to closing. The timeline varies based on deal complexity, due diligence requirements, regulatory approvals, and negotiation dynamics. Binary Capital manages the entire process efficiently to ensure timely completion while maximizing value for our clients.',
              },
            },
            {
              '@type': 'Question',
              name: 'What is structured finance and how can it benefit my business?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Structured finance involves creating complex financial instruments like asset-backed securities, securitization, and special purpose vehicles (SPVs) to optimize capital structure and manage risk. Benefits include: improved liquidity, lower cost of capital, off-balance-sheet financing, risk transfer mechanisms, and access to diverse funding sources. Binary Capital designs customized structured finance solutions aligned with your business objectives.',
              },
            },
            {
              '@type': 'Question',
              name: 'Does Binary Capital assist with IPO advisory?',
              acceptedAnswer: {
                '@type': 'Answer',
                text: 'Yes, Binary Capital provides comprehensive IPO advisory services including: IPO readiness assessment, regulatory compliance guidance, valuation and pricing strategy, investor targeting and roadshows, documentation support, and post-IPO compliance. Our capital markets team has extensive experience in successfully executing IPOs for Indian companies.',
              },
            },
          ],
        }}
      />

      {/* HowTo Schema - M&A Process */}
      <JsonLd<HowTo>
        item={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Execute a Successful M&A Transaction in India',
          description: 'A comprehensive guide to mergers and acquisitions advisory process by Binary Capital',
          totalTime: 'P6M',
          estimatedCost: {
            '@type': 'MonetaryAmount',
            currency: 'INR',
            value: 'Variable based on deal size',
          },
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Strategic Planning & Target Identification',
              text: 'Define acquisition criteria, identify potential targets, and conduct preliminary screening based on strategic fit, financial performance, and growth potential.',
              url: 'https://binarycapital.in/products/mergersacquisitions',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Valuation & Financial Modeling',
              text: 'Perform comprehensive business valuation using DCF, comparable company analysis, and precedent transactions. Develop detailed financial models to assess deal economics.',
              url: 'https://binarycapital.in/products/mergersacquisitions',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'Due Diligence',
              text: 'Conduct thorough financial, legal, operational, and commercial due diligence to identify risks, synergies, and value creation opportunities.',
              url: 'https://binarycapital.in/products/mergersacquisitions',
            },
            {
              '@type': 'HowToStep',
              position: 4,
              name: 'Deal Structuring & Negotiation',
              text: 'Structure the transaction optimally considering tax implications, regulatory requirements, and stakeholder interests. Negotiate terms to maximize value.',
              url: 'https://binarycapital.in/products/mergersacquisitions',
            },
            {
              '@type': 'HowToStep',
              position: 5,
              name: 'Regulatory Approvals & Documentation',
              text: 'Obtain necessary approvals from regulatory bodies (SEBI, CCI, RBI) and prepare comprehensive transaction documentation including share purchase agreements.',
              url: 'https://binarycapital.in/products/mergersacquisitions',
            },
            {
              '@type': 'HowToStep',
              position: 6,
              name: 'Transaction Closing & Integration',
              text: 'Execute the transaction, complete fund transfers, and support post-merger integration to realize synergies and achieve strategic objectives.',
              url: 'https://binarycapital.in/products/mergersacquisitions',
            },
          ],
        }}
      />

      {/* HowTo Schema - Project Finance Process */}
      <JsonLd<HowTo>
        item={{
          '@context': 'https://schema.org',
          '@type': 'HowTo',
          name: 'How to Structure Project Finance for Infrastructure Projects',
          description: 'Step-by-step guide to project financing and infrastructure advisory by Binary Capital',
          totalTime: 'P9M',
          step: [
            {
              '@type': 'HowToStep',
              position: 1,
              name: 'Project Assessment & Feasibility',
              text: 'Evaluate project viability through detailed feasibility studies, technical assessment, market analysis, and financial projections.',
              url: 'https://binarycapital.in/products/projectfinancing',
            },
            {
              '@type': 'HowToStep',
              position: 2,
              name: 'Financial Structuring',
              text: 'Design optimal capital structure balancing debt and equity, considering project cash flows, risk profile, and lender requirements.',
              url: 'https://binarycapital.in/products/projectfinancing',
            },
            {
              '@type': 'HowToStep',
              position: 3,
              name: 'SPV Formation',
              text: 'Establish Special Purpose Vehicle (SPV) with appropriate legal structure, governance framework, and shareholder agreements.',
              url: 'https://binarycapital.in/products/projectfinancing',
            },
            {
              '@type': 'HowToStep',
              position: 4,
              name: 'Lender Engagement',
              text: 'Identify and engage with banks, financial institutions, and investors. Prepare information memorandum and conduct lender presentations.',
              url: 'https://binarycapital.in/products/projectfinancing',
            },
            {
              '@type': 'HowToStep',
              position: 5,
              name: 'Documentation & Closing',
              text: 'Negotiate and finalize loan agreements, security documents, and project contracts. Complete financial closing and fund disbursement.',
              url: 'https://binarycapital.in/products/projectfinancing',
            },
          ],
        }}
      />

      {/* Defined Term - Investment Banking */}
      <JsonLd<DefinedTerm>
        item={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          '@id': 'https://binarycapital.in/#investment-banking',
          name: 'Investment Banking',
          description: 'Investment banking is a specialized financial service that assists corporations, governments, and institutions with capital raising, mergers and acquisitions, financial restructuring, and strategic advisory. Investment banks act as intermediaries between issuers of securities and investors, providing expertise in complex financial transactions.',
          inDefinedTermSet: 'https://binarycapital.in/#financial-terms',
        }}
      />

      {/* Defined Term - M&A Advisory */}
      <JsonLd<DefinedTerm>
        item={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          '@id': 'https://binarycapital.in/#ma-advisory',
          name: 'M&A Advisory',
          description: 'Mergers and Acquisitions (M&A) advisory is a professional service that guides companies through the process of buying, selling, or merging with other businesses. M&A advisors provide strategic guidance, valuation analysis, deal structuring, negotiation support, and transaction execution to maximize value and minimize risks.',
          inDefinedTermSet: 'https://binarycapital.in/#financial-terms',
        }}
      />

      {/* Defined Term - Structured Finance */}
      <JsonLd<DefinedTerm>
        item={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          '@id': 'https://binarycapital.in/#structured-finance',
          name: 'Structured Finance',
          description: 'Structured finance refers to complex financial instruments and techniques used to transfer risk, improve liquidity, and optimize capital structure. It includes asset-backed securities (ABS), securitization, collateralized debt obligations (CDOs), and special purpose vehicles (SPVs). These structures allow companies to access capital markets efficiently while managing financial risks.',
          inDefinedTermSet: 'https://binarycapital.in/#financial-terms',
        }}
      />

      {/* Defined Term - Capital Markets */}
      <JsonLd<DefinedTerm>
        item={{
          '@context': 'https://schema.org',
          '@type': 'DefinedTerm',
          '@id': 'https://binarycapital.in/#capital-markets',
          name: 'Capital Markets',
          description: 'Capital markets are financial markets where long-term debt and equity securities are bought and sold. They include primary markets (for new issuances like IPOs) and secondary markets (for trading existing securities). Capital markets advisory involves helping companies raise capital through equity offerings, debt issuances, and hybrid instruments.',
          inDefinedTermSet: 'https://binarycapital.in/#financial-terms',
        }}
      />
    </>
  );
}
