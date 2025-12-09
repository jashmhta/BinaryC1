/**
 * SEO Configuration for Binary Capital
 * Centralized SEO metadata for consistency across pages
 */

export const siteConfig = {
  name: "Binary Capital",
  title: "Binary Capital - Investment Banking & Financial Advisory Mumbai",
  description: "Leading investment banking and financial advisory firm in Mumbai. Expert M&A advisory, capital markets, project finance, and structured finance solutions for Indian businesses.",
  url: "https://binarycapital.in",
  ogImage: "/hero_finance_investment-oDlAhxWb.png",
  logo: "/logo-4zsp2eCD.png",
  links: {
    twitter: "https://twitter.com/binarycapital",
    linkedin: "https://www.linkedin.com/company/binary-capital",
  },
  contact: {
    email: "info@binarycapital.in",
    phone: "+91-7738056127",
    address: "2045, 2nd Floor, Spaces Adani Height, Andheri West, Mumbai, Maharashtra 400053",
  },
  geo: {
    region: "IN-MH",
    placename: "Mumbai",
    position: "19.117817;72.826299",
  },
};

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    // Primary Keywords
    "investment banking Mumbai",
    "financial advisory Mumbai",
    "M&A advisory India",
    "capital markets advisory",
    "project finance Mumbai",
    
    // Service Keywords
    "mergers and acquisitions advisory",
    "debt capital markets",
    "equity capital markets",
    "IPO advisory services",
    "infrastructure financing",
    "structured finance solutions",
    
    // Location Keywords
    "investment banking firm India",
    "financial advisory Andheri",
    "Mumbai investment bank",
    
    // Specific Services
    "corporate finance advisory",
    "transaction advisory",
    "asset-backed securities",
    "corporate bonds advisory",
    "supply chain financing",
    "SPV structuring",
    "financial due diligence",
    "valuation services",
    "capital raising services",
    "debt restructuring services",
  ],
  authors: [{ name: "Binary Capital Advisors LLP" }],
  creator: "Binary Capital Advisors LLP",
  publisher: "Binary Capital Advisors LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Investment Banking Mumbai`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@binarycapital",
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
  alternates: {
    canonical: siteConfig.url,
  },
  category: "Financial Services",
};

// Page-specific metadata generators
export function generatePageMetadata({
  title,
  description,
  path = "/",
  keywords = [],
  image,
}: {
  title: string;
  description: string;
  path?: string;
  keywords?: string[];
  image?: string;
}) {
  const url = `${siteConfig.url}${path}`;
  const ogImage = image || siteConfig.ogImage;

  return {
    title,
    description,
    keywords: [...defaultMetadata.keywords, ...keywords],
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}
