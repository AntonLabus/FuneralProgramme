'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceType: '',
    urgency: 'standard'
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Netlify form submission
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          ...formData
        }).toString()
      })

      if (response.ok) {
        setSubmitMessage('Thank you for your message. We will respond within 24 hours.')
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          serviceType: '',
          urgency: 'standard'
        })
      } else {
        setSubmitMessage('There was an error sending your message. Please try again or call us directly.')
      }
    } catch {
      setSubmitMessage('There was an error sending your message. Please try again or call us directly.')
    }

    setIsSubmitting(false)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-ivory min-h-screen">
      <div className="container mx-auto px-6 max-w-site">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            Contact Us
          </h1>
          <p className="text-lg md:text-xl text-navy-light max-w-3xl mx-auto leading-relaxed">
            We&apos;re here to help you create a beautiful tribute to your loved one.
            Reach out for a compassionate consultation – we promise to respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h2 className="font-playfair text-2xl font-bold text-navy mb-6">
              Send Us a Message
            </h2>

            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />

              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>
                  Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                </label>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-navy mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="serviceType" className="block text-sm font-semibold text-navy mb-2">
                    Service Type
                  </label>
                  <select
                    id="serviceType"
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-design">Custom Design</option>
                    <option value="template-customization">Template Customization</option>
                    <option value="photo-editing">Photo Editing</option>
                    <option value="rush-service">Rush Service</option>
                    <option value="consultation">Consultation Only</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="urgency" className="block text-sm font-semibold text-navy mb-2">
                  Timeline
                </label>
                <select
                  id="urgency"
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300"
                >
                  <option value="standard">Standard (3-5 days)</option>
                  <option value="priority">Priority (1-2 days)</option>
                  <option value="rush">Rush (24 hours)</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lavender focus:border-transparent transition-all duration-300 resize-vertical"
                  placeholder="Please share any details about your loved one, design preferences, or specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-navy text-white py-4 px-6 rounded-lg font-semibold hover:bg-navy-light transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>

              {submitMessage && (
                <div className={`p-4 rounded-lg ${
                  submitMessage.includes('Thank you')
                    ? 'bg-green-50 text-green-800 border border-green-200'
                    : 'bg-red-50 text-red-800 border border-red-200'
                }`}>
                  {submitMessage}
                </div>
              )}
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="font-playfair text-2xl font-bold text-navy mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lavender rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    📞
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Phone</h4>
                    <p className="text-navy-light">
                      {/* TODO: Replace with actual phone number */}
                      <a href="tel:+15551234567" className="hover:text-lavender transition-colors">
                        (555) 123-4567
                      </a>
                    </p>
                    <p className="text-sm text-navy-light">Available 24/7 for urgent needs</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lavender rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    ✉️
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Email</h4>
                    <p className="text-navy-light">
                      {/* TODO: Replace with actual email */}
                      <a href="mailto:info@funeralprogrammes.com" className="hover:text-lavender transition-colors">
                        info@funeralprogrammes.com
                      </a>
                    </p>
                    <p className="text-sm text-navy-light">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-lavender rounded-lg flex items-center justify-center text-white text-xl flex-shrink-0">
                    ⏰
                  </div>
                  <div>
                    <h4 className="font-semibold text-navy mb-1">Response Time</h4>
                    <p className="text-navy-light">Within 24 hours</p>
                    <p className="text-sm text-navy-light">Often much sooner during business hours</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-lavender to-lavender-light rounded-2xl p-8 text-white">
              <h3 className="font-playfair text-2xl font-bold mb-4">
                Why Families Choose Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Compassionate, understanding service</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Professional design expertise</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Fast turnaround when needed</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Unlimited revisions included</span>
                </li>
                <li className="flex items-center space-x-3">
                  <span className="w-2 h-2 bg-white rounded-full flex-shrink-0"></span>
                  <span>Affordable, transparent pricing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border-l-4 border-lavender">
              <h3 className="font-playfair text-xl font-bold text-navy mb-3">
                Emergency Services Available
              </h3>
              <p className="text-navy-light leading-relaxed">
                We understand that sometimes you need our services urgently.
                We offer 24-hour rush service for those immediate needs.
                Call us any time – we&apos;re here to help.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
