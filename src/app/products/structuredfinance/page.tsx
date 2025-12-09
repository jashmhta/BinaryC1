'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StructuredFinance() {
  return (
    <div className="min-h-screen bg-blue-50 dark:bg-zinc-900/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white dark:bg-black shadow-sm z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
              <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-10" />
              <span className="text-xl font-bold text-primary dark:text-teal-400">Binary Capital</span>
            </Link>
          <Link href="/finance-advisory" className="text-primary dark:text-teal-400 hover:text-secondary transition-colors">← Back to Finance Advisory</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/structured_finance_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold mb-6">Structured Finance</h1>
          <p className="text-xl max-w-7xl mx-auto">
            Transform complex assets into investable securities with optimized risk-return profiles
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-teal-400 mb-6">Innovative Asset Transformation</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Structured finance represents the pinnacle of financial engineering, enabling organizations to unlock value from complex asset pools through securitization and innovative financial instruments. Our team specializes in designing bespoke structures that optimize capital efficiency while managing risk through sophisticated tranching and credit enhancement mechanisms.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl dark:shadow-gray-900/50">
              <img src="/structured_finance_hero.png" alt="Structured Finance Solutions" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Features */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Asset-Backed Securities (ABS)</h4>
                <p className="text-gray-600 dark:text-gray-300">Transform receivables, loans, and other assets into tradable securities with enhanced liquidity and optimized pricing.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Securitization Structures</h4>
                <p className="text-gray-600 dark:text-gray-300">Design multi-tranche structures that cater to different investor risk appetites while maximizing overall value.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Credit Enhancement</h4>
                <p className="text-gray-600 dark:text-gray-300">Implement sophisticated credit enhancement techniques including overcollateralization, reserve accounts, and guarantees.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Risk Transfer Mechanisms</h4>
                <p className="text-gray-600 dark:text-gray-300">Advanced risk allocation strategies that protect stakeholders while optimizing capital requirements.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-6">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Enhanced liquidity through asset securitization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Optimized capital structure and reduced funding costs</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Risk transfer to capital markets</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Regulatory capital relief for financial institutions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Access to diverse investor base</span>
                </li>
              </ul>
            </div>

            {/* Use Cases */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-6">Typical Use Cases</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Mortgage-Backed Securities</h4>
                <p className="text-gray-600 dark:text-gray-300">Securitization of residential and commercial mortgage portfolios to enhance liquidity and transfer credit risk.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Trade Receivables Securitization</h4>
                <p className="text-gray-600 dark:text-gray-300">Converting trade receivables into securities to optimize working capital and improve cash flow management.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Infrastructure Asset Monetization</h4>
                <p className="text-gray-600 dark:text-gray-300">Unlocking value from operational infrastructure assets through structured finance techniques.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Interested in Structured Finance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our structured finance solutions can transform your asset portfolio
          </p>
          <Link href="/#contact">
              <Button className="bg-secondary hover:bg-yellow-500 text-primary dark:text-teal-400 font-semibold px-8 py-3 rounded-lg">
                Contact Us Today
              </Button>
            </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>© 2025 Binary Capital Advisors LLP. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
