'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header role="banner">
      <nav role="navigation" aria-label="Main navigation" className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-lg'
      }`}>
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-10" />
            <span className="text-xl font-bold text-primary dark:text-secondary">Binary Capital</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors">Home</Link>
            <Link href="/about" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors">About</Link>
            <Link href="/finance-advisory" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors">Services</Link>
            <Link href="/#contact" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors">Contact</Link>
            <Link href="https://binarybonds.com" className="text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-secondary transition-colors">Binary Bonds</Link>
            <ThemeToggle />
          </div>
          <button 
            className="md:hidden p-2 rounded-lg text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-t border-gray-200 dark:border-gray-700 animate-fade-in shadow-lg">
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/about" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4" onClick={() => setMobileMenuOpen(false)}>About</Link>
              <Link href="/finance-advisory" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4" onClick={() => setMobileMenuOpen(false)}>Services</Link>
              <Link href="/#contact" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              <Link href="https://binarybonds.com" className="text-gray-700 dark:text-gray-200 hover:text-primary dark:hover:text-teal-400 transition-colors py-2 border-l-4 border-transparent hover:border-secondary pl-4" onClick={() => setMobileMenuOpen(false)}>Binary Bonds</Link>
              <div className="pl-4 py-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
