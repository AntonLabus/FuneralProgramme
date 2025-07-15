import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-6 max-w-site">
        <div className="py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-lavender to-white rounded-lg flex items-center justify-center text-navy font-bold text-lg">
                  FP
                </div>
                <div>
                  <span className="font-playfair text-xl font-bold text-white">Funeral Programmes</span>
                  <p className="text-xs text-gray-300">Honoring Life, Cherishing Memory</p>
                </div>
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                We create beautifully crafted funeral programmes that serve as lasting keepsakes,
                helping families honor their loved ones with compassionate design and personalized tributes.
              </p>
              <div className="flex space-x-4">
                {/* TODO: Add actual social media links */}
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.621 5.367 11.988 11.988 11.988s11.988-5.367 11.988-11.988C24.005 5.367 18.638.001 12.017.001zM8.449 16.988c-1.297 0-2.349-1.051-2.349-2.348 0-1.297 1.052-2.349 2.349-2.349 1.296 0 2.348 1.052 2.348 2.349 0 1.297-1.052 2.348-2.348 2.348zm7.718 0c-1.297 0-2.349-1.051-2.349-2.348 0-1.297 1.052-2.349 2.349-2.349 1.297 0 2.349 1.052 2.349 2.349 0 1.297-1.052 2.348-2.349 2.348z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-6">Quick Links</h3>
              <ul className="space-y-3">
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
                <li><Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="font-playfair text-lg font-semibold mb-6">Contact Info</h3>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-300">
                    📞 {/* TODO: Replace with actual phone */}
                    <a href="tel:+15551234567" className="hover:text-white transition-colors">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-300">
                    ✉️ {/* TODO: Replace with actual email */}
                    <a href="mailto:info@funeralprogrammes.com" className="hover:text-white transition-colors">
                      info@funeralprogrammes.com
                    </a>
                  </p>
                </div>
                <div>
                  <p className="text-gray-300">⏰ Response within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2024 Funeral Programmes. All rights reserved. {/* TODO: Update year dynamically */}
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm italic">
              &quot;Beautifully Crafted Programs for a Lasting Tribute.&quot;
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
