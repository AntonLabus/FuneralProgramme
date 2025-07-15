'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const values = [
  {
    title: 'Empathy',
    description: 'We understand the importance of compassionate service during difficult times.',
    icon: '💙',
  },
  {
    title: 'Craftsmanship',
    description: 'Every design is carefully crafted with attention to detail and artistic excellence.',
    icon: '🎨',
  },
  {
    title: 'Reliability',
    description: 'You can count on us for timely delivery and consistent quality service.',
    icon: '⭐',
  },
]

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-ivory">
      <div className="container mx-auto px-6 max-w-site">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6">
            About Our Mission
          </h1>
          <p className="text-lg md:text-xl text-navy-light max-w-3xl mx-auto leading-relaxed">
            We believe every life deserves to be honored with beauty, dignity, and care.
            Our passion is creating meaningful tributes that celebrate the unique story of your loved one.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
              Our Story
            </h2>
            <div className="space-y-6 text-navy-light leading-relaxed">
              <p>
                Founded with a deep understanding of the importance of memorializing loved ones,
                our company began when our founder experienced firsthand the challenge of creating
                a meaningful tribute during a time of grief.
              </p>
              <p>
                We realized that families needed more than just a standard template – they needed
                a compassionate partner who could translate their memories into beautiful, lasting keepsakes.
                This insight became the foundation of our mission.
              </p>
              <p>
                Today, we&apos;ve had the honor of serving hundreds of families, each with their own
                unique story to tell. Every funeral programme we create is a testament to a life
                well-lived and a family&apos;s enduring love.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-xl p-8">
              <div className="aspect-[4/3] relative rounded-lg overflow-hidden bg-gradient-to-br from-ivory to-lavender-light">
                <Image
                  src="/about-image.jpg"
                  alt="Compassionate design process showing attention to detail"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="mt-6 text-center">
                <p className="text-navy-light font-medium italic">
                  &quot;Every design tells a story, every story deserves beauty.&quot;
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
            Our Core Values
          </h2>
          <p className="text-lg text-navy-light max-w-2xl mx-auto">
            These principles guide everything we do, from our first conversation
            to the final delivery of your beautiful tribute.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
              className="text-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-6">{value.icon}</div>
              <h3 className="font-playfair text-2xl font-semibold text-navy mb-4">
                {value.title}
              </h3>
              <p className="text-navy-light leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="bg-gradient-to-r from-lavender to-lavender-light rounded-2xl p-8 md:p-12 text-white text-center"
        >
          <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
            Our Compassionate Process
          </h2>
          <p className="text-lg mb-8 opacity-95 max-w-3xl mx-auto">
            We understand that this is a difficult time. Our streamlined process is designed
            to be as gentle and supportive as possible while ensuring beautiful results.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-lavender rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">1</div>
              <h4 className="font-semibold mb-2">Initial Consultation</h4>
              <p className="text-sm opacity-90">We listen to your needs and gather information about your loved one</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-lavender rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">2</div>
              <h4 className="font-semibold mb-2">Design Creation</h4>
              <p className="text-sm opacity-90">Our team creates a personalized design draft for your review</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-lavender rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">3</div>
              <h4 className="font-semibold mb-2">Review & Refine</h4>
              <p className="text-sm opacity-90">We work with you to perfect every detail until you&apos;re completely satisfied</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-lavender rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">4</div>
              <h4 className="font-semibold mb-2">Final Delivery</h4>
              <p className="text-sm opacity-90">Receive your print-ready files and physical copies if requested</p>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center mt-20"
        >
          <h2 className="font-playfair text-3xl font-bold text-navy mb-6">
            Let Us Help You Honor Their Memory
          </h2>
          <p className="text-lg text-navy-light mb-8 max-w-2xl mx-auto">
            Every family&apos;s needs are unique. We&apos;re here to listen, understand,
            and create something truly special that celebrates your loved one&apos;s life.
          </p>
          <a
            href="/contact"
            className="inline-block bg-navy text-white px-10 py-5 rounded-lg font-semibold text-lg hover:bg-navy-light transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            Start Your Journey With Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About
