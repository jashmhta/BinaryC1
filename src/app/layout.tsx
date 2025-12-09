import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AdvancedStructuredData } from "@/components/AdvancedStructuredData";
import { AEOStructuredData } from "@/components/AEOStructuredData";
import Script from "next/script";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  preload: true
});

const poppins = Poppins({ 
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true
});

export const metadata: Metadata = {
  title: {
    default: "Binary Capital - Investment Banking & Financial Advisory Mumbai | M&A, Capital Markets, Project Finance",
    template: "%s | Binary Capital"
  },
  description: "Leading investment banking and financial advisory firm in Mumbai. Expert M&A advisory, capital markets, project finance, and structured finance solutions for Indian businesses. 10+ years of excellence serving clients across India.",
  metadataBase: new URL('https://binarycapital.in'),
  applicationName: 'Binary Capital',
  alternates: {
    canonical: '/',
  },
  keywords: "investment banking Mumbai, investment banking services India, financial advisory Mumbai, M&A advisory services, mergers and acquisitions advisory, capital markets advisory, debt capital markets, equity capital markets, IPO advisory services, project finance advisory, infrastructure financing, structured finance solutions, corporate finance advisory, financial structuring services, transaction advisory, asset-backed securities, corporate bonds advisory, supply chain financing, Mumbai investment bank, financial advisory Andheri, investment banking firm India, Binary Capital, project finance Mumbai, infrastructure advisory, SPV structuring, financial due diligence, valuation services, strategic financial planning, capital raising services, securities underwriting, bond issuance services, secondary offerings, investor targeting, debt restructuring services, corporate restructuring advisory",
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
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "Binary Capital",
    title: "Binary Capital - Bespoke Financial Strategies | Investment Banking & Advisory",
    description: "Mumbai-based investment banking firm offering Finance Advisory, Project Advisory, Transaction Advisory, and Capital Markets solutions. 10+ years of excellence in structured finance and M&A advisory.",
    locale: "en_IN",
    url: "https://binarycapital.in",
    images: [
      {
        url: "/hero_finance_investment-oDlAhxWb.png",
        width: 1200,
        height: 630,
        alt: "Binary Capital - Investment Banking Mumbai",
      },
      {
        url: "/logo-4zsp2eCD.png",
        width: 512,
        height: 512,
        alt: "Binary Capital Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Binary Capital - Bespoke Financial Strategies",
    description: "Investment banking and financial advisory services across India. Headquartered in Mumbai.",
    images: ["/hero_finance_investment-oDlAhxWb.png"],
  },
  verification: {
    google: "google-site-verification-code",
  },
  category: "Financial Services",
  classification: "Investment Banking",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai",
    "geo.position": "19.117817;72.826299",
    "ICBM": "19.117817, 72.826299",
    "rating": "general",
    "distribution": "global",
    "revisit-after": "7 days",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        {/* Theme Script - Prevents Flash of Light Mode */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const savedTheme = localStorage.getItem('theme');
                  if (savedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                  } else if (savedTheme === 'light') {
                    document.documentElement.classList.remove('dark');
                  } else {
                    const hour = new Date().getHours();
                    const isDarkTime = hour >= 18 || hour < 6;
                    if (isDarkTime) {
                      document.documentElement.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                    } else {
                      localStorage.setItem('theme', 'light');
                    }
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* Favicons and App Icons */}
        <link rel="icon" type="image/png" sizes="32x32" href="/logo-4zsp2eCD.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/logo-4zsp2eCD.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logo-4zsp2eCD.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme and Viewport */}
        <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#000000" media="(prefers-color-scheme: dark)" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        
        {/* Preload Critical Assets */}
        <link rel="preload" href="/logo-4zsp2eCD.png" as="image" type="image/png" />
        <link rel="preload" href="/hero_background_new.png" as="image" type="image/png" />
        <link rel="preload" href="/hero_finance_investment-oDlAhxWb.png" as="image" type="image/png" />
        <link rel="preload" href="/structured_finance_hero.png" as="image" type="image/png" />
        <link rel="preload" href="/project_finance_card.png" as="image" type="image/png" />
        <link rel="preload" href="/capital_markets_card.png" as="image" type="image/png" />
        
        {/* DNS Prefetch for Performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Preconnect for Faster Loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        {/* Google Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        <AdvancedStructuredData />
        <AEOStructuredData />
        <ThemeProvider defaultTheme="light">
          <TooltipProvider>
            <Toaster />
            {children}
          </TooltipProvider>
        </ThemeProvider>
        
        {/* Remove Card Backgrounds Script */}
        <Script id="remove-card-bg" strategy="afterInteractive">
          {`
            window.addEventListener('load', function() {
              setTimeout(function() {
                const cards = document.querySelectorAll('.hero-value-prop, #home .grid > div');
                cards.forEach(function(card) {
                  card.style.setProperty('background', 'transparent', 'important');
                  card.style.setProperty('background-color', 'transparent', 'important');
                  card.style.setProperty('background-image', 'none', 'important');
                  card.style.setProperty('backdrop-filter', 'none', 'important');
                  card.style.setProperty('-webkit-backdrop-filter', 'none', 'important');
                  card.style.setProperty('border', 'none', 'important');
                  card.style.setProperty('box-shadow', 'none', 'important');
                });
              }, 500);
            });
          `}
        </Script>
        
        {/* Analytics Script */}
        <Script
          src={process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT ? `${process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT}/umami` : ''}
          data-website-id={process.env.NEXT_PUBLIC_ANALYTICS_WEBSITE_ID}
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
