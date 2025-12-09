'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StructuredBonds() {
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
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/structured_bonds_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold mb-6">Structured Bonds</h1>
          <p className="text-xl max-w-7xl mx-auto">
            Customized debt instruments designed to meet specific investor requirements and risk appetites
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-teal-400 mb-6">Innovative Debt Solutions</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Structured bonds represent a sophisticated evolution of traditional debt instruments, offering customized cash flow patterns, embedded options, and tailored risk-return profiles. Our expertise spans the design and issuance of complex bond structures that cater to diverse investor needs while optimizing funding costs for issuers.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl dark:shadow-gray-900/50">
              <img src="/structured_bonds_hero.png" alt="Structured Bonds" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Features */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-8">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Customized Cash Flows</h4>
                <p className="text-gray-600 dark:text-gray-300">Design bespoke coupon structures including step-up, step-down, floating, and zero-coupon formats.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Embedded Options</h4>
                <p className="text-gray-600 dark:text-gray-300">Incorporate call, put, and conversion features to optimize value for both issuers and investors.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Credit Enhancement</h4>
                <p className="text-gray-600 dark:text-gray-300">Utilize guarantees, collateral, and other mechanisms to improve credit ratings and reduce borrowing costs.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Regulatory Compliance</h4>
                <p className="text-gray-600 dark:text-gray-300">Full compliance with SEBI regulations and listing requirements for public and private placements.</p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-6">Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Lower funding costs through optimized structures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Access to diverse investor segments</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Flexibility in repayment terms and conditions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Enhanced credit ratings through structuring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary text-2xl mr-3">✓</span>
                  <span className="text-gray-700 dark:text-gray-200">Tailored to specific business requirements</span>
                </li>
              </ul>
            </div>

            {/* Types */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-6">Types of Structured Bonds</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Convertible Bonds</h4>
                <p className="text-gray-600 dark:text-gray-300">Debt instruments with embedded equity conversion options, offering downside protection with upside participation.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Callable/Putable Bonds</h4>
                <p className="text-gray-600 dark:text-gray-300">Bonds with embedded call or put options providing flexibility to issuers or investors based on market conditions.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Index-Linked Bonds</h4>
                <p className="text-gray-600 dark:text-gray-300">Bonds with returns linked to specific indices, commodities, or economic indicators for inflation protection.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Binary Bonds Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-emerald-50 dark:from-zinc-900/30 dark:via-teal-900/20 dark:to-emerald-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="section-title text-center mb-6 golden-underline">Our Subsidiary: Binary Bonds</h2>
            <p className="section-subtitle text-center mb-12">
              Expanding our financial services ecosystem through specialized bond market solutions
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-white dark:bg-black p-8 rounded-lg shadow-xl dark:shadow-gray-900/50 border-l-4 border-secondary">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 flex items-center justify-center mr-4 relative">
                      <img 
                        src="/binary-bonds-logo.png" 
                        alt="Binary Bonds Logo" 
                        width="64"
                        height="64"
                        className="object-contain"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400">Binary Bonds</h3>
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
                  <a href="https://3000-iyngtotuangng6cymagw9-18c4ffd0.manus-asia.computer" target="_blank" rel="noopener noreferrer">
                    <Button className="btn-gradient-primary w-full md:w-auto">
                      Visit Binary Bonds
                      <svg className="w-5 h-5 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </Button>
                  </a>
                </div>
              </div>
              
              <div>
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

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Explore Structured Bonds?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how structured bonds can optimize your capital structure
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
