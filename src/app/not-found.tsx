import Link from 'next/link'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for could not be found.',
}

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-ivory to-white flex items-center justify-center px-6">
      <div className="text-center max-w-md mx-auto">
        {/* Gentle illustration placeholder */}
        <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-lavender to-lavender-light rounded-full flex items-center justify-center text-white text-6xl">
          🌸
        </div>

        <h1 className="font-playfair text-4xl md:text-5xl font-bold text-navy mb-6">
          Page Not Found
        </h1>

        <p className="text-lg text-navy-light mb-8 leading-relaxed">
          We&apos;re sorry, but the page you&apos;re looking for doesn&apos;t seem to exist.
          Perhaps it was moved or you entered the URL incorrectly.
        </p>

        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Return Home
          </Link>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="text-lavender font-semibold hover:text-lavender-light transition-colors duration-300"
            >
              View Our Services
            </Link>
            <Link
              href="/gallery"
              className="text-lavender font-semibold hover:text-lavender-light transition-colors duration-300"
            >
              Browse Gallery
            </Link>
            <Link
              href="/contact"
              className="text-lavender font-semibold hover:text-lavender-light transition-colors duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-navy-light text-sm">
            Need immediate assistance? Call us at{' '}
            <a href="tel:+15551234567" className="text-lavender hover:text-lavender-light transition-colors">
              (555) 123-4567
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
