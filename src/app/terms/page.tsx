'use client';

import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <Link href="/" className="text-primary dark:text-teal-400 hover:underline">
            ← Back to Home
          </Link>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-4xl font-bold text-primary dark:text-teal-400 mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Last Updated: December 9, 2025
        </p>

        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              1. Agreement to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms of Service ("Terms") govern your access to and use of the Binary Capital Advisors LLP website located at <a href="https://binarycapital.in" className="text-secondary hover:underline">binarycapital.in</a> (the "Website") and any services provided by Binary Capital Advisors LLP ("Binary Capital," "we," "us," or "our"). By accessing or using our Website, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use our Website.
            </p>
          </section>

          {/* Services Description */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              2. Description of Services
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Binary Capital provides investment banking and financial advisory services, including but not limited to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Finance Advisory (Structured Finance, Supply Chain Financing, Project Financing)</li>
              <li>Transaction Advisory (Mergers & Acquisitions, Corporate Restructuring)</li>
              <li>Capital Markets (Debt and Equity Capital Markets, IPO Advisory)</li>
              <li>Project Advisory (Infrastructure Financing, SPV Structuring)</li>
            </ul>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4">
              The information provided on this Website is for general informational purposes only and does not constitute financial, legal, or investment advice. Specific services are provided under separate engagement agreements.
            </p>
          </section>

          {/* User Responsibilities */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              3. User Responsibilities
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              By using our Website, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Provide accurate, current, and complete information when submitting forms</li>
              <li>Use the Website only for lawful purposes</li>
              <li>Not attempt to gain unauthorized access to any part of the Website</li>
              <li>Not transmit any viruses, malware, or harmful code</li>
              <li>Not engage in any activity that disrupts or interferes with the Website</li>
              <li>Not use automated systems (bots, scrapers) to access the Website</li>
              <li>Respect all intellectual property rights</li>
            </ul>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              4. Intellectual Property Rights
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              All content on this Website, including but not limited to text, graphics, logos, images, software, and design, is the property of Binary Capital Advisors LLP or its content suppliers and is protected by Indian and international copyright, trademark, and other intellectual property laws.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You may not reproduce, distribute, modify, create derivative works, publicly display, or exploit any content from this Website without our prior written permission.
            </p>
          </section>

          {/* Disclaimer of Warranties */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              5. Disclaimer of Warranties
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              THE WEBSITE AND ALL INFORMATION, CONTENT, AND SERVICES PROVIDED ON OR THROUGH THE WEBSITE ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We do not warrant that:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>The Website will be uninterrupted, secure, or error-free</li>
              <li>The information provided is accurate, complete, or current</li>
              <li>Any defects or errors will be corrected</li>
              <li>The Website is free from viruses or harmful components</li>
            </ul>
          </section>

          {/* Not Financial Advice */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              6. Not Financial or Investment Advice
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The information provided on this Website is for general informational purposes only and should not be construed as financial, investment, legal, or tax advice. You should consult with qualified professionals before making any financial or investment decisions. Binary Capital does not provide personalized investment recommendations through this Website. Formal advisory services are provided only through executed engagement agreements.
            </p>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, BINARY CAPITAL SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM:
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2 ml-4">
              <li>Your access to or use of (or inability to access or use) the Website</li>
              <li>Any conduct or content of any third party on the Website</li>
              <li>Any content obtained from the Website</li>
              <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            </ul>
          </section>

          {/* Indemnification */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              8. Indemnification
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Binary Capital Advisors LLP, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, and expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the Website, your violation of these Terms, or your violation of any rights of another party.
            </p>
          </section>

          {/* Third-Party Links */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              9. Third-Party Links and Content
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Our Website may contain links to third-party websites or services that are not owned or controlled by Binary Capital. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services. You acknowledge and agree that Binary Capital shall not be responsible or liable for any damage or loss caused by your use of any third-party content, goods, or services.
            </p>
          </section>

          {/* Confidentiality */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              10. Confidentiality and Non-Disclosure
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Any information you submit through our contact forms or communications may be treated as confidential. However, formal confidentiality obligations are established only through executed Non-Disclosure Agreements (NDAs) or engagement agreements. We recommend not sharing sensitive business information through unsecured channels such as contact forms or email without a formal agreement in place.
            </p>
          </section>

          {/* Regulatory Compliance */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              11. Regulatory Compliance
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Binary Capital operates in compliance with applicable Indian laws and regulations, including those set forth by the Securities and Exchange Board of India (SEBI), Reserve Bank of India (RBI), and other regulatory authorities. Our services are subject to regulatory oversight, and we maintain appropriate licenses and registrations as required by law.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              12. Termination
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to terminate or suspend your access to the Website immediately, without prior notice or liability, for any reason, including but not limited to a breach of these Terms. Upon termination, your right to use the Website will immediately cease.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              13. Changes to Terms
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time at our sole discretion. We will provide notice of any material changes by posting the new Terms on this page and updating the "Last Updated" date. Your continued use of the Website after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              14. Governing Law and Jurisdiction
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law provisions. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra, India.
            </p>
          </section>

          {/* Dispute Resolution */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              15. Dispute Resolution
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In the event of any dispute arising out of or relating to these Terms or the Website, the parties agree to first attempt to resolve the dispute through good faith negotiations. If the dispute cannot be resolved through negotiation within 30 days, either party may pursue resolution through the courts of Mumbai, Maharashtra, India.
            </p>
          </section>

          {/* Severability */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              16. Severability
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              If any provision of these Terms is found to be invalid or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid or unenforceable provision shall be replaced with a valid provision that most closely matches the intent of the original provision.
            </p>
          </section>

          {/* Entire Agreement */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              17. Entire Agreement
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Binary Capital regarding your use of the Website and supersede all prior agreements and understandings, whether written or oral, regarding the subject matter herein.
            </p>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              18. Contact Information
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <p className="text-gray-800 dark:text-gray-200 font-semibold mb-2">Binary Capital Advisors LLP</p>
              <p className="text-gray-700 dark:text-gray-300">2045, 2nd Floor, Spaces Adani Height</p>
              <p className="text-gray-700 dark:text-gray-300">Andheri West, Mumbai - 400053, India</p>
              <p className="text-gray-700 dark:text-gray-300 mt-3">
                <strong>Email:</strong> <a href="mailto:sales@binarycapital.in" className="text-secondary hover:underline">sales@binarycapital.in</a>
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Phone:</strong> <a href="tel:+917738056127" className="text-secondary hover:underline">+91 7738056127</a>
              </p>
            </div>
          </section>

          {/* Acknowledgment */}
          <section className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-200 dark:border-blue-800">
            <h2 className="text-2xl font-bold text-primary dark:text-teal-400 mb-4">
              19. Acknowledgment
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              BY USING THIS WEBSITE, YOU ACKNOWLEDGE THAT YOU HAVE READ, UNDERSTOOD, AND AGREE TO BE BOUND BY THESE TERMS OF SERVICE AND OUR PRIVACY POLICY.
            </p>
          </section>
        </div>

        {/* Back to Top */}
        <div className="mt-8 text-center">
          <Link href="/" className="inline-block bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            Return to Home
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Binary Capital Advisors LLP. All rights reserved.
          </p>
          <div className="mt-4 space-x-6">
            <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
