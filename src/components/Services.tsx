'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const services = [
  {
    title: 'Custom Design',
    description: 'Personalized funeral programmes tailored to honor your loved one\'s unique story and personality.',
    icon: '🎨',
    features: ['Unique layouts', 'Personal photos', 'Custom colors', 'Family input']
  },
  {
    title: 'Photo Editing',
    description: 'Professional photo restoration and enhancement to ensure beautiful, lasting memories.',
    icon: '📸',
    features: ['Photo restoration', 'Color correction', 'Background removal', 'Multiple formats']
  },
  {
    title: 'Obituary Integration',
    description: 'Seamlessly incorporate obituaries and life stories into beautifully designed layouts.',
    icon: '📝',
    features: ['Life story layout', 'Quote integration', 'Timeline design', 'Memory sections']
  },
  {
    title: 'Multiple Themes',
    description: 'Choose from our collection of respectful themes or create something completely custom.',
    icon: '🌸',
    features: ['Floral designs', 'Classic layouts', 'Religious themes', 'Modern styles']
  },
  {
    title: 'Fast Turnaround',
    description: 'Quick, compassionate service with 24-48 hour delivery when you need it most.',
    icon: '⚡',
    features: ['24-48 hour delivery', 'Rush service available', 'Digital previews', 'Print-ready files']
  },
  {
    title: 'Ongoing Support',
    description: 'Dedicated support throughout the process with unlimited revisions until satisfied.',
    icon: '💙',
    features: ['Unlimited revisions', 'Phone support', 'Design consultation', 'Print guidance']
  }
]

const Services = () => {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container mx-auto px-6 max-w-site">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6">
            Our Compassionate Services
          </h2>
          <p className="text-lg text-navy-light max-w-3xl mx-auto">
            We understand that every life is unique, and every memorial should reflect that uniqueness.
            Our comprehensive services are designed to ease your burden while creating a beautiful tribute.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-ivory rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300 group"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-playfair text-xl font-semibold text-navy mb-4">
                {service.title}
              </h3>
              <p className="text-navy-light mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-navy-light">
                    <span className="w-2 h-2 bg-lavender rounded-full mr-3 flex-shrink-0"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-lavender to-lavender-light rounded-2xl p-8 md:p-12 text-white">
            <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-4">
              Ready to Begin Your Tribute?
            </h3>
            <p className="text-lg mb-6 opacity-95">
              Contact us today for a compassionate consultation. We&apos;re here to help you create
              a beautiful, lasting keepsake that honors your loved one&apos;s memory.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-lavender px-8 py-4 rounded-lg font-semibold hover:bg-ivory transition-colors duration-300"
              aria-label="Contact us for funeral programme design consultation"
            >
              Start Your Design Today
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
