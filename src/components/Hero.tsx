'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-ivory to-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-lavender rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-navy rounded-full blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 py-20 max-w-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6 leading-tight"
            >
              Honoring a Life,{' '}
              <span className="text-lavender">Cherishing a Memory</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-navy-light mb-8 leading-relaxed"
            >
              We create beautifully crafted funeral programmes that serve as lasting keepsakes.
              Our compassionate design team helps ease your burden during difficult times with
              personalized tributes that honor your loved one&apos;s unique story.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors duration-300 text-center"
                aria-label="Get started with your funeral programme design"
              >
                Get Started Today
              </Link>
              <Link
                href="/gallery"
                className="border-2 border-lavender text-lavender px-8 py-4 rounded-lg font-semibold hover:bg-lavender hover:text-white transition-colors duration-300 text-center"
                aria-label="View our gallery of funeral programme designs"
              >
                View Our Gallery
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
              <div className="aspect-[3/4] relative bg-gradient-to-b from-ivory to-lavender-light rounded-lg overflow-hidden">
                <Image
                  src="/sample-programme.jpg"
                  alt="Sample funeral programme design showing elegant layout"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <p className="text-center mt-4 text-navy-light font-medium">
                Beautifully Crafted Programs for a Lasting Tribute
              </p>
            </div>
          </motion.div>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-navy-light mb-6">Trusted by families across the community</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-sm font-medium">⭐ 24-Hour Response</div>
            <div className="text-sm font-medium">📞 Compassionate Support</div>
            <div className="text-sm font-medium">🎨 Custom Designs</div>
            <div className="text-sm font-medium">📱 Easy Process</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
