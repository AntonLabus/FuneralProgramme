'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const CallToAction = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-ivory to-white">
      <div className="container mx-auto px-6 max-w-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Your Loved One&apos;s Story, <br />
            <span className="text-lavender">Beautifully Told</span>
          </h2>

          <p className="text-lg md:text-xl text-navy-light mb-12 max-w-2xl mx-auto leading-relaxed">
            Let us help you create a meaningful tribute that celebrates a life well-lived.
            Our compassionate team is here to guide you through every step.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link
              href="/contact"
              className="bg-navy text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-navy-light transition-colors duration-300 shadow-lg hover:shadow-xl"
              aria-label="Contact us for funeral programme design services"
            >
              Contact Us Today
            </Link>

            <Link
              href="/gallery"
              className="text-lavender font-semibold text-lg hover:text-lavender-light transition-colors duration-300 flex items-center gap-2"
              aria-label="View our gallery of funeral programme designs"
            >
              Visit Our Gallery
              <span className="text-2xl">→</span>
            </Link>
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-navy mb-2">Call Us</h3>
              {/* TODO: Replace with actual phone number */}
              <p className="text-navy-light">(555) 123-4567</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">✉️</div>
              <h3 className="font-semibold text-navy mb-2">Email Us</h3>
              {/* TODO: Replace with actual email */}
              <p className="text-navy-light">info@funeralprogrammes.com</p>
            </div>

            <div className="text-center">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="font-semibold text-navy mb-2">Response Time</h3>
              <p className="text-navy-light">Within 24 hours</p>
            </div>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 pt-12 border-t border-gray-200"
          >
            <p className="text-navy-light mb-6 text-lg">
              ✨ Compassionate service • 🎨 Professional design • ⚡ Fast turnaround • 💙 Unlimited revisions
            </p>
            <p className="text-navy font-medium italic">
              &quot;Beautifully Crafted Programs for a Lasting Tribute.&quot;
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default CallToAction
