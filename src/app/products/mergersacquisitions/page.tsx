'use client';

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MergersAcquisitions() {
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
      <section className="pt-20 md:pt-32 pb-12 md:pb-20 text-white relative overflow-hidden" style={{backgroundImage: 'url(/mergers_acquisitions_hero.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-blue-900 opacity-80"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-xl md:text-2xl lg:text-3xl md:text-4xl lg:text-5xl md:text-6xl font-bold mb-6">Mergers & Acquisitions</h1>
          <p className="text-xl max-w-7xl mx-auto">
            Strategic advisory and financing for transformative M&A transactions
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary dark:text-teal-400 mb-6">Strategic Growth Through M&A</h2>
            <p className="text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-8">
              Mergers and acquisitions represent powerful tools for strategic growth, market consolidation, and value creation. Our comprehensive M&A advisory services combine strategic insight with execution excellence to help clients navigate complex transactions from initial strategy through post-merger integration.
            </p>
            
            <div className="mb-12 rounded-lg overflow-hidden shadow-xl dark:shadow-gray-900/50">
              <img src="/mergers_acquisitions_card.png" alt="Mergers & Acquisitions" loading="lazy" className="w-full h-auto" />
            </div>

            {/* Key Services */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-8">Our M&A Services</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Buy-Side Advisory</h4>
                <p className="text-gray-600 dark:text-gray-300">Target identification, valuation, due diligence, and negotiation support for strategic and financial buyers.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Sell-Side Advisory</h4>
                <p className="text-gray-600 dark:text-gray-300">Business positioning, buyer identification, marketing, and deal execution to maximize shareholder value.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Valuation Services</h4>
                <p className="text-gray-600 dark:text-gray-300">Comprehensive valuation using DCF, comparable companies, and precedent transactions methodologies.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50 border-l-4 border-secondary">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-3">Due Diligence</h4>
                <p className="text-gray-600 dark:text-gray-300">Financial, operational, and commercial due diligence to identify risks and opportunities.</p>
              </div>
            </div>

            {/* Process */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-12">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-6">Our M&A Process</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary dark:text-teal-400 font-bold mt-1">1</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary dark:text-teal-400 mb-1">Strategy Development</h4>
                    <p className="text-gray-700 dark:text-gray-200">Define M&A objectives, target criteria, and strategic rationale</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary dark:text-teal-400 font-bold mt-1">2</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary dark:text-teal-400 mb-1">Target Identification</h4>
                    <p className="text-gray-700 dark:text-gray-200">Screen and identify potential acquisition targets or buyers</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary dark:text-teal-400 font-bold mt-1">3</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary dark:text-teal-400 mb-1">Valuation & Structuring</h4>
                    <p className="text-gray-700 dark:text-gray-200">Comprehensive valuation and optimal deal structure design</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary dark:text-teal-400 font-bold mt-1">4</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary dark:text-teal-400 mb-1">Due Diligence</h4>
                    <p className="text-gray-700 dark:text-gray-200">Thorough examination of financial, operational, and legal aspects</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary dark:text-teal-400 font-bold mt-1">5</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary dark:text-teal-400 mb-1">Negotiation & Execution</h4>
                    <p className="text-gray-700 dark:text-gray-200">Lead negotiations and coordinate transaction execution</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 text-primary dark:text-teal-400 font-bold mt-1">6</div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-primary dark:text-teal-400 mb-1">Post-Merger Integration</h4>
                    <p className="text-gray-700 dark:text-gray-200">Support integration planning and value realization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Transaction Types */}
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary dark:text-teal-400 mb-6">Transaction Types</h3>
            <div className="space-y-4 mb-12">
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Strategic Acquisitions</h4>
                <p className="text-gray-600 dark:text-gray-300">Acquisitions to expand market presence, capabilities, or product portfolios for long-term strategic advantage.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Divestitures</h4>
                <p className="text-gray-600 dark:text-gray-300">Strategic sale of non-core assets or business units to unlock value and focus on core operations.</p>
              </div>
              <div className="bg-white dark:bg-black p-6 rounded-lg shadow-md dark:shadow-gray-900/50">
                <h4 className="text-xl font-bold text-primary dark:text-teal-400 mb-2">Mergers & Consolidation</h4>
                <p className="text-gray-600 dark:text-gray-300">Combination of equals or industry consolidation to achieve scale, synergies, and market leadership.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-primary to-blue-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">Explore M&A Opportunities?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how M&A can accelerate your strategic growth objectives
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
