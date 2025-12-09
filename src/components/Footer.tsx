export function Footer() {
  return (
    <footer role="contentinfo" className="relative text-white py-16 overflow-hidden" style={{backgroundImage: 'url(/footer_background.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-teal-900/85 to-emerald-900/90"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/logo-4zsp2eCD.png" alt="Binary Capital" loading="lazy" className="h-12 brightness-0 invert" />
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
  );
}
