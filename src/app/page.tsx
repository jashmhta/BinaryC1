'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CountUp } from "@/components/CountUp";
import { ThemeToggle } from "@/components/ThemeToggle";


export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formMessage, setFormMessage] = useState('');

  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 600,
        easing: 'ease-out-cubic',
        once: true,
        offset: 50,
        delay: 0,
        disable: 'mobile',
      });
    }
  }, []);

  // Handle form submission
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');
    setFormMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus('success');
        setFormMessage(data.message || 'Thank you for your message. We will get back to you soon!');
        setFormData({ name: '', email: '', company: '', message: '' });
        // Reset form status after 5 seconds
        setTimeout(() => {
          setFormStatus('idle');
          setFormMessage('');
        }, 5000);
      } else {
        setFormStatus('error');
        setFormMessage(data.error || 'An error occurred. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setFormMessage('Network error. Please check your connection and try again.');
    }
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle scroll for header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Set scrolled state for background
      setIsScrolled(currentScrollY > 50);
      
      // Show/hide header based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down
        setShowHeader(false);
      } else {
        // Scrolling up
        setShowHeader(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Enhanced structured data for AEO (Answer Engine Optimization)
  const structuredData = [
    // Organization Schema
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://binarycapital.manus.space/#organization",
      "name": "Binary Capital",
      "legalName": "Binary Capital",
      "url": "https://binarycapital.manus.space",
      "logo": "https://binarycapital.manus.space/logo-4zsp2eCD.png",
      "foundingDate": "2014",
      "description": "Bespoke financial strategies including structured finance, project financing, M&A advisory, and capital markets services.",
      "slogan": "Shaping Success with Bespoke Financial Strategies",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2045, 2nd Floor, Spaces Adani Height, Andheri West",
        "addressLocality": "Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "400053",
        "addressCountry": "IN"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7738056127",
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.linkedin.com/company/binary-capital",
        "https://twitter.com/binarycapital"
      ]
    },
    // LocalBusiness Schema
    {
      "@context": "https://schema.org",
      "@type": "FinancialService",
      "@id": "https://binarycapital.manus.space/#business",
      "name": "Binary Capital",
      "image": "https://binarycapital.manus.space/hero_background.png",
      "url": "https://binarycapital.manus.space",
      "telephone": "+91-7738056127",
      "priceRange": "$$$",
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
        "latitude": 19.129361,
        "longitude": 72.827933
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "areaServed": [
        {"@type": "City", "name": "Mumbai"},
        {"@type": "City", "name": "Delhi"},
        {"@type": "City", "name": "Bangalore"},
        {"@type": "City", "name": "Hyderabad"},
        {"@type": "City", "name": "Chennai"}
      ]
    },
    // FAQ Schema for AEO
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does Binary Capital offer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital offers Finance Advisory (structured finance, securitization), Project Advisory (infrastructure financing), and Capital Markets (equity and debt raising) across India. We also provide M&A advisory services."
          }
        },
        {
          "@type": "Question",
          "name": "Where is Binary Capital located?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital is headquartered at 2045, 2nd Floor, Spaces Adani Height, Andheri West, Mumbai, Maharashtra, India. We serve clients across Mumbai, Delhi, Bangalore, Hyderabad, and Chennai."
          }
        },
        {
          "@type": "Question",
          "name": "What is structured finance?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Structured finance transforms complex assets into investable securities through asset-backed securities (ABS), securitization, and credit enhancement mechanisms to optimize capital efficiency."
          }
        },
        {
          "@type": "Question",
          "name": "How does Binary Capital help with M&A transactions?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital provides strategic M&A advisory including business valuation, deal structuring, due diligence, and financing solutions to unlock synergies and create shareholder value."
          }
        },
        {
          "@type": "Question",
          "name": "What industries does Binary Capital serve?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Binary Capital serves infrastructure, power and renewable energy, transportation, industrial manufacturing, real estate, and financial services sectors across India."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact Binary Capital?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can contact Binary Capital at our Mumbai office at 2045, 2nd Floor, Spaces Adani Height, Andheri West by phone at +91-7738056127 or through our website contact form."
          }
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Skip to main content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      {/* Navigation */}
      <header role="banner">
      <nav role="navigation" aria-label="Main navigation" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        showHeader ? 'translate-y-0' : '-translate-y-full'
      } ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2 cursor-pointer">
            <Image src="/logo-4zsp2eCD.png" alt="Binary Capital" width={120} height={40} className="h-10 w-auto" priority />
            <span className={`text-xl font-bold transition-colors ${
              isScrolled ? 'text-primary dark:text-secondary' : 'text-white'
            }`}>Binary Capital</span>
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className={`transition-colors ${
              isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary' : 'text-white hover:text-secondary'
            }`}>Home</a>
            <Link href="/about" className={`transition-colors ${
              isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary' : 'text-white hover:text-secondary'
            }`}>About</Link>
            <a href="/finance-advisory" className={`transition-colors ${
              isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary' : 'text-white hover:text-secondary'
            }`}>Services</a>
            <a href="#contact" className={`transition-colors ${
              isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary' : 'text-white hover:text-secondary'
            }`}>Contact</a>
            <a href="#binary-bonds" className={`transition-colors ${
              isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary' : 'text-white hover:text-secondary'
            }`}>Binary Bonds</a>
            <ThemeToggle />
          </div>
          <button 
            className={`p-2 rounded-lg transition-colors ${
              isScrolled 
                ? 'text-primary hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Navigation Menu */}
        {mobileMenuOpen && (
          <div className="bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 animate-fade-in shadow-lg dark:shadow-gray-900/50">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 dark:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <Link 
                href="/about" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 dark:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <a 
                href="/finance-advisory" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 dark:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </a>
              <a 
                href="#contact" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 dark:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              <a 
                href="#binary-bonds" 
                className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 dark:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Binary Bonds
              </a>
              <div className="flex items-center justify-between py-2 pl-4">
                <span className="text-gray-700 dark:text-gray-200">Theme</span>
                <ThemeToggle />
              </div>
              <a href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="btn-primary w-full">Get Started</Button>
              </a>
            </div>
          </div>
        )}
      </nav>
      </header>

      <main id="main-content" role="main">
      {/* Hero Section */}
      <section id="home" className="pt-20 md:pt-24 pb-12 md:pb-20 text-white relative overflow-hidden premium-gradient-bg" data-aos="fade-up" style={{backgroundImage: 'url(/hero_background_new.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-emerald-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/50 via-emerald-800/45 to-teal-900/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto text-center py-20">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight" style={{fontFamily: 'Inter, Poppins, sans-serif', textShadow: '0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)'}}>
              Shaping Success with <span className="text-yellow-400 dark:text-yellow-300" style={{color: '#FFD700', textShadow: '0 0 30px rgba(255, 215, 0, 0.8), 0 4px 12px rgba(0, 0, 0, 0.8), 0 2px 4px rgba(0, 0, 0, 0.6)'}}>Bespoke</span> Financial Strategies
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-bold" style={{textShadow: '0 3px 8px rgba(0, 0, 0, 0.8), 0 1px 3px rgba(0, 0, 0, 0.6)'}}>
              Finance Advisory • Project Advisory • Capital Markets
            </p>
            <p className="text-lg md:text-xl mb-8 font-bold" style={{textShadow: '0 2px 6px rgba(0, 0, 0, 0.7), 0 1px 3px rgba(0, 0, 0, 0.5)'}}>
              Designing financial pathways for sustainable success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center" data-aos="fade-up" data-aos-delay="300">
              <Link href="/finance-advisory">
                <Button 
                  className="bg-white/10 backdrop-blur-sm dark:bg-white/10 border-2 border-white dark:border-white text-white dark:text-white hover:bg-white dark:hover:bg-white hover:text-emerald-900 dark:hover:text-emerald-900 transition-all duration-300 btn-magnetic px-10 py-4 text-lg font-bold min-w-[220px] shadow-2xl hover:shadow-white/50"
                  style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.3)'}}
                  aria-label="Discover our investment banking solutions"
                >
                  Discover Our Solutions
                </Button>
              </Link>
              <Link href="/#contact">
                <Button 
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500 dark:from-yellow-400 dark:to-yellow-500 border-2 border-yellow-300 dark:border-yellow-300 text-black dark:text-black hover:from-yellow-300 hover:to-yellow-400 dark:hover:from-yellow-300 dark:hover:to-yellow-400 transition-all duration-300 btn-magnetic px-10 py-4 text-lg font-bold min-w-[220px] shadow-2xl hover:shadow-yellow-400/50"
                  style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.4), 0 0 20px rgba(255, 215, 0, 0.3)'}}
                  aria-label="Contact us for financial advisory services"
                >
                  Contact Us Today
                </Button>
              </Link>
            </div>
          </div>

          {/* Value Props */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-16 px-4">
            <div className="text-center" data-aos="fade-up" data-aos-delay="100">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-2xl" style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 215, 0, 0.4)'}}>
                <svg className="w-10 h-10 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white" style={{textShadow: '0 3px 8px rgba(0, 0, 0, 0.8)'}}>Growth Focused</h3>
              <p className="text-white text-lg font-medium" style={{textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)'}}>Strategic solutions designed to accelerate your business growth</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="200">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-2xl" style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 215, 0, 0.4)'}}>
                <svg className="w-10 h-10 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white" style={{textShadow: '0 3px 8px rgba(0, 0, 0, 0.8)'}}>Risk Management</h3>
              <p className="text-white text-lg font-medium" style={{textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)'}}>Comprehensive risk assessment and mitigation strategies</p>
            </div>
            <div className="text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-yellow-400 to-yellow-500 shadow-2xl" style={{boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 215, 0, 0.4)'}}>
                <svg className="w-10 h-10 text-emerald-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-white" style={{textShadow: '0 3px 8px rgba(0, 0, 0, 0.8)'}}>Expert Team</h3>
              <p className="text-white text-lg font-medium" style={{textShadow: '0 2px 6px rgba(0, 0, 0, 0.7)'}}>Seasoned professionals with decades of industry experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-animated golden-divider-thick my-16"></div>

      {/* About Section - Condensed */}
      <section id="about" className="py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-zinc-900/20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-center golden-underline" data-aos="fade-up">About Binary Capital</h2>
            <p className="section-subtitle max-w-7xl mx-auto">
              A Mumbai-based investment banking and financial advisory firm, redefining finance through lasting partnerships and world-class strategies tailored to India's evolving markets.
            </p>
            <Link href="/about">
              <Button className="mt-6 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3 rounded-lg">Learn More About Us</Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div data-aos="zoom-in" data-aos-delay="100">
              <CountUp end={10} suffix="+" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600 dark:text-gray-300">Years in Business</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="200">
              <CountUp end={100} suffix="+" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600 dark:text-gray-300">Clients Served</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="300">
              <CountUp end={5000} suffix=" Cr+" prefix="₹" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600 dark:text-gray-300">Transaction Value</div>
            </div>
            <div data-aos="zoom-in" data-aos-delay="400">
              <CountUp end={300} suffix="+" className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary mb-2 golden-border-bottom inline-block pb-2" />
              <div className="text-gray-600 dark:text-gray-300">Investors</div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-animated golden-divider-thick my-16"></div>

      {/* Services Section */}
      <section id="our-services" className="py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-zinc-900/20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4 golden-underline" data-aos="fade-up">Our Core Services</h2>
          <p className="section-subtitle text-center mb-16">
            From bespoke structured finance solutions to facilitating capital market transactions, our comprehensive service suite unlocks growth for your organization.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto items-stretch">
            {/* Finance Advisory */}
            <div className="service-card card-elevated gpu-accelerated flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
              <Image src="/structured_finance_hero.png" alt="Finance Advisory" width={400} height={192} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 golden-icon">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white">Finance Advisory</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Comprehensive financial advisory services covering strategic planning, capital structuring, and financial optimization.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Asset-backed securities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Risk transfer mechanisms</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Tailored structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Regulatory compliance</span>
                  </li>
                </ul>
                <a href="/finance-advisory" className="mt-auto">
                  <Button className="btn-primary w-full" aria-label="Learn more about Finance Advisory services">Learn More</Button>
                </a>
              </div>
            </div>

            {/* Project Advisory */}
            <div className="service-card card-elevated gpu-accelerated flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <Image src="/project_finance_card.png" alt="Project Advisory" width={400} height={192} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 golden-icon">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white">Project Advisory</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">End-to-end project advisory services from conceptualization to execution for infrastructure and industrial projects.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Infrastructure funding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">SPV structures</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Risk allocation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Long-term contracts</span>
                  </li>
                </ul>
                <a href="/project-advisory" className="mt-auto">
                  <Button className="btn-primary w-full" aria-label="Learn more about Project Advisory services">Learn More</Button>
                </a>
              </div>
            </div>

            {/* Capital Markets */}
            <div className="service-card card-elevated gpu-accelerated flex flex-col h-full" data-aos="fade-up" data-aos-delay="400">
              <Image src="/capital_markets_card.png" alt="Capital Markets" width={400} height={192} className="w-full h-48 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mr-4 golden-icon">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary dark:text-white">Capital Markets</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">Advisory and execution services for equity and debt capital market transactions connecting issuers with investors.</p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">IPO advisory</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Secondary offerings</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Debt issuance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-600 dark:text-gray-300">Investor targeting</span>
                  </li>
                </ul>
                <a href="/capital-markets" className="mt-auto">
                  <Button className="btn-primary w-full" aria-label="Learn more about Capital Markets services">Learn More</Button>
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-animated golden-divider-thick my-16"></div>



      {/* Testimonials Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-zinc-900/20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-center golden-underline" data-aos="fade-up">Client Testimonials</h2>
            <p className="section-subtitle">
              Hear what our clients say about their experience working with Binary Capital
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {/* Testimonial 1 - Infrastructure Sector */}
            <div className="bg-white dark:bg-black p-8 rounded-lg shadow-lg dark:shadow-gray-900/50 border-l-4 border-secondary card-hover flex flex-col h-full" data-aos="fade-up" data-aos-delay="100">
              <div className="text-secondary text-5xl mb-4">&ldquo;</div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed italic flex-grow">
                Binary Capital's expertise in structured finance helped us secure optimal funding for our infrastructure project. Their team's professionalism and attention to detail exceeded our expectations.
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary dark:text-teal-400">Infrastructure Sector</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Large-scale Infrastructure Development</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 - Technology Sector */}
            <div className="bg-white dark:bg-black p-8 rounded-lg shadow-lg dark:shadow-gray-900/50 border-l-4 border-secondary card-hover flex flex-col h-full" data-aos="fade-up" data-aos-delay="200">
              <div className="text-secondary text-5xl mb-4">&ldquo;</div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed italic flex-grow">
                Working with Binary Capital on our M&A transaction was seamless. They provided strategic guidance throughout the process and helped us achieve exceptional value for our stakeholders.
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary dark:text-teal-400">Technology Sector</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Technology & Software Companies</p>
                </div>
              </div>
            </div>

            {/* Testimonial 3 - Healthcare Sector */}
            <div className="bg-white dark:bg-black p-8 rounded-lg shadow-lg dark:shadow-gray-900/50 border-l-4 border-secondary card-hover flex flex-col h-full" data-aos="fade-up" data-aos-delay="300">
              <div className="text-secondary text-5xl mb-4">&ldquo;</div>
              <p className="text-gray-700 dark:text-gray-200 mb-6 leading-relaxed italic flex-grow">
                Binary Capital's capital markets expertise helped us successfully raise growth capital through debt instruments. Their network and market knowledge are truly impressive.
              </p>
              <div className="flex items-center mt-auto">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-primary dark:text-teal-400">Healthcare Sector</p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Healthcare & Life Sciences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-animated golden-divider-thick my-16"></div>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gray-50 dark:bg-gray-900" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-title text-center golden-underline" data-aos="fade-up">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Find answers to common questions about our services and how we can help your business
            </p>
          </div>
          <div className="max-w-7xl mx-auto space-y-6">
            {/* FAQ 1 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-3">What services does Binary Capital offer?</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                We offer a comprehensive suite of financial services covering Finance Advisory, Project Funding, and Capital Markets solutions, delivering a full-spectrum, integrated basket of financial products under one umbrella. Our capabilities span structured finance, M&A advisory, project finance, and capital raising through both debt and equity instruments, enabling us to provide tailored, end-to-end solutions that support clients across every stage of their financial journey.
              </p>
            </div>

            {/* FAQ 2 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="150">
              <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-3">Which industries do you serve?</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                We serve clients across a broad spectrum of industries, including technology, healthcare, real estate, clean tech, infrastructure, manufacturing, and financial services. Our experience spans traditional, emerging, and niche sectors, from infrastructure developers and clean energy companies to advanced technology firms and diverse manufacturing businesses. With deep expertise in sector-specific dynamics, regulatory frameworks, and industry trends, our team is equipped to deliver informed, strategic, and highly tailored financial solutions to meet the unique needs of each client.
              </p>
            </div>

            {/* FAQ 3 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="250">
              <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-3">What is your fee structure?</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Our fee structure is tailored to each engagement and can include retainer fees, success fees, or a combination based on project requirements. We believe in transparent pricing and will provide a detailed fee proposal during our initial discussions.
              </p>
            </div>

            {/* FAQ 5 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-3">Do you work with startups and early-stage companies?</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                We typically partner with companies that have a minimum operating history of three years and are now looking to raise growth capital to scale their business. Our focus is on supporting established enterprises with strong fundamentals and compelling expansion plans. In addition to growth funding, our Capital Markets team also assists eligible companies in preparing for and navigating the process of getting listed on the stock market, enabling them to unlock wider access to capital and long-term value creation.
              </p>
            </div>

            {/* FAQ 6 */}
            <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary card-hover" data-aos="fade-up" data-aos-delay="350">
              <h3 className="text-xl font-semibold text-primary dark:text-teal-400 mb-3">How can I get started with Binary Capital?</h3>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
                Getting started with us is seamless. Simply reach out via our website, email, or phone to schedule an initial consultation. During this discussion, we take the time to understand your requirements, objectives, and the challenges you aim to address, while outlining how our solutions can support your financial goals. We offer this first consultation at no cost, ensuring you have complete clarity before moving forward.
              </p>
            </div>
          </div>

          {/* FAQ CTA */}
          <div className="mt-12 bg-gradient-to-r from-primary to-blue-700 rounded-lg p-8 text-center text-white max-w-7xl mx-auto">
            <h3 className="text-2xl font-bold mb-3">Still have questions?</h3>
            <p className="mb-6">Our team is here to help. Reach out for personalized answers to your specific questions.</p>
            <Link href="/#contact">
              <Button className="bg-secondary hover:bg-yellow-500 text-primary dark:text-teal-400 font-semibold px-8 py-3 rounded-lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-animated golden-divider-thick my-16"></div>

      {/* Binary Bonds Section */}
      <section id="binary-bonds" className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 dark:from-zinc-900/30 dark:via-teal-900/20 dark:to-emerald-900/20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-6 golden-underline" data-aos="fade-up">Our Subsidiary: Binary Bonds</h2>
            <p className="section-subtitle text-center mb-12">
              Expanding our financial services ecosystem through specialized bond market solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div data-aos="fade-right">
                <div className="bg-white dark:bg-black p-8 rounded-lg shadow-xl dark:shadow-gray-900/50 border-l-4 border-secondary">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center mr-4 relative">
                      <Image 
                        src="/binary-bonds-logo.png" 
                        alt="Binary Bonds Logo" 
                        width={64}
                        height={64}
                        className="object-contain"
                        priority
                      />
                    </div>
                    <h3 className="text-3xl font-bold text-primary dark:text-teal-400">Binary Bonds</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-200 leading-relaxed mb-6">
                    Binary Bonds is our specialized subsidiary focused on fixed income securities and bond market operations. We provide comprehensive bond issuance, structuring, and advisory services to corporations, financial institutions, and government entities.
                  </p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-3">✓</span>
                      <span className="text-gray-700 dark:text-gray-200">Corporate bond issuance and structuring</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-3">✓</span>
                      <span className="text-gray-700 dark:text-gray-200">Government and municipal bonds advisory</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-3">✓</span>
                      <span className="text-gray-700 dark:text-gray-200">Fixed income portfolio management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-secondary text-xl mr-3">✓</span>
                      <span className="text-gray-700 dark:text-gray-200">Bond market research and analysis</span>
                    </li>
                  </ul>
                  <a href="https://binarybonds.com" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-gradient-primary w-full md:w-auto">
                      Visit Binary Bonds
                      <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>
              
              <div data-aos="fade-left">
                <div className="bg-gradient-to-br from-primary to-blue-700 dark:from-teal-600 dark:to-emerald-700 p-8 rounded-lg shadow-xl text-white">
                  <h4 className="text-2xl font-bold mb-6">Why Binary Bonds?</h4>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary dark:text-teal-400 font-bold text-xl">1</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2">Specialized Expertise</h5>
                        <p className="text-blue-100 dark:text-teal-100">Dedicated team with deep knowledge of bond markets and fixed income instruments</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary dark:text-teal-400 font-bold text-xl">2</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2">Market Access</h5>
                        <p className="text-blue-100 dark:text-teal-100">Strong relationships with institutional investors and market makers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
                        <span className="text-primary dark:text-teal-400 font-bold text-xl">3</span>
                      </div>
                      <div>
                        <h5 className="font-bold text-lg mb-2">Integrated Solutions</h5>
                        <p className="text-blue-100 dark:text-teal-100">Seamless integration with Binary Capital's broader financial services</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Golden Divider */}
      <div className="golden-divider-animated golden-divider-thick my-16"></div>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-16 lg:py-20 bg-blue-50 dark:bg-zinc-900/20" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16 golden-underline" data-aos="fade-up">Get in Touch</h2>
          <div className="max-w-7xl mx-auto mb-12">
            <div className="rounded-lg overflow-hidden shadow-lg dark:shadow-gray-900/50" style={{height: '400px'}}>
              <iframe 
                src="https://www.google.com/maps?q=19.129361,72.827933&hl=en&z=17&output=embed"
                width="100%"
                height="100%"
                style={{border: 0}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-teal-400 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary dark:text-teal-400">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">+91 7738056127</p>
                    <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM IST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary dark:text-teal-400">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">sales@binarycapital.in</p>
                    <p className="text-sm text-gray-500">We respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-secondary mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-primary dark:text-teal-400">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">2045, 2nd Floor, Spaces Adani Height</p>
                    <p className="text-gray-600 dark:text-gray-300">Andheri West, Mumbai - 400053, India</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-primary dark:text-teal-400 mb-6">Send Us a Message</h3>
              <form className="space-y-4" aria-label="Contact form" onSubmit={handleFormSubmit}>
                <div>
                  <label htmlFor="contact-name" className="sr-only">Your Name (required)</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name *"
                    className="enhanced-input w-full px-4 py-3 md:px-4 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent min-h-[48px]"
                    required
                    aria-required="true"
                    autoComplete="name"
                    inputMode="text"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="sr-only">Email Address (required)</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email Address *"
                    className="enhanced-input w-full px-4 py-3 md:px-4 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent min-h-[48px]"
                    required
                    aria-required="true"
                    autoComplete="email"
                    inputMode="email"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-company" className="sr-only">Company Name (optional)</label>
                  <input
                    id="contact-company"
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Company Name"
                    className="enhanced-input w-full px-4 py-3 md:px-4 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent min-h-[48px]"
                    autoComplete="organization"
                    inputMode="text"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="sr-only">Message (required)</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Message *"
                    rows={4}
                    className="enhanced-input w-full px-4 py-3 md:px-4 md:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary dark:focus:ring-teal-400 focus:border-transparent min-h-[120px]"
                    required
                    aria-required="true"
                    disabled={formStatus === 'submitting'}
                  />
                </div>
                {formMessage && (
                  <div className={`p-4 rounded-lg ${
                    formStatus === 'success' 
                      ? 'bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-800' 
                      : 'bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-800'
                  }`}>
                    {formMessage}
                  </div>
                )}
                <Button 
                  type="submit" 
                  className="btn-primary w-full" 
                  aria-label="Send message"
                  disabled={formStatus === 'submitting'}
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer role="contentinfo" className="relative text-white py-16 overflow-hidden" style={{backgroundImage: 'url(/footer_background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-teal-900/85 to-emerald-900/90"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Image src="/logo-4zsp2eCD.png" alt="Binary Capital" width={120} height={48} className="h-12 w-auto brightness-0 invert" />
                <span className="text-2xl font-bold">Binary Capital</span>
              </div>
              <p className="text-gray-200 font-medium mb-6 leading-relaxed" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>Shaping success with bespoke financial strategies. Your trusted partner in financial excellence.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">›</span>Home</a></li>
                <li><a href="/about" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">›</span>About Us</a></li>
                <li><a href="/finance-advisory" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">›</span>Our Services</a></li>
                <li><a href="/about#team" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">›</span>Our Team</a></li>
                <li><a href="/#contact" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">›</span>Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>Our Services</h3>
              <ul className="space-y-3">
                <li><a href="/finance-advisory" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">•</span>Finance Advisory</a></li>
                <li><a href="/project-advisory" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">•</span>Project Advisory</a></li>
                <li><a href="/capital-markets" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">•</span>Capital Markets</a></li>
                <li><a href="/products/structuredfinance" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">•</span>Structured Finance</a></li>
                <li><a href="/products/mergersacquisitions" className="text-gray-300 dark:text-gray-200 font-semibold hover:text-secondary transition-colors flex items-center"><span className="mr-2">•</span>M&A Advisory</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-yellow-400" style={{textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)'}}>Get in Touch</h3>
              <ul className="space-y-4">
                <li>
                  <div>
                    <p className="text-gray-300 dark:text-gray-200 font-semibold">📞 +91 7738056127</p>
                    <p className="text-sm text-gray-400 dark:text-gray-300">Mon-Fri: 9AM-6PM IST</p>
                  </div>
                </li>
                <li>
                  <p className="text-gray-300 dark:text-gray-200 font-semibold">📧 sales@binarycapital.in</p>
                </li>
                <li>
                  <p className="text-gray-300 dark:text-gray-200 font-semibold">📍 Andheri West<br/>Mumbai, India</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-yellow-400/30 pt-8 mt-4">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>© 2025 Binary Capital. All rights reserved.</p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-secondary transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-secondary transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-secondary transition-colors">Disclaimer</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      </main>
      
      {/* Structured Data for SEO/AEO */}
      {structuredData.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </div>
  );
}
