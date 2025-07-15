'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const categories = ['All', 'Floral', 'Classic', 'Religious', 'Modern']

const galleryItems = [
  {
    id: 1,
    title: 'Elegant Rose Design',
    category: 'Floral',
    image: '/gallery/floral-1.jpg',
    description: 'Soft pink roses with elegant typography'
  },
  {
    id: 2,
    title: 'Classic Memorial',
    category: 'Classic',
    image: '/gallery/classic-1.jpg',
    description: 'Traditional layout with timeless design'
  },
  {
    id: 3,
    title: 'Peaceful Lilies',
    category: 'Floral',
    image: '/gallery/floral-2.jpg',
    description: 'White lilies symbolizing peace and remembrance'
  },
  {
    id: 4,
    title: 'Sacred Cross',
    category: 'Religious',
    image: '/gallery/religious-1.jpg',
    description: 'Beautiful cross design with scripture'
  },
  {
    id: 5,
    title: 'Modern Minimalist',
    category: 'Modern',
    image: '/gallery/modern-1.jpg',
    description: 'Clean lines and contemporary typography'
  },
  {
    id: 6,
    title: 'Garden Memories',
    category: 'Floral',
    image: '/gallery/floral-3.jpg',
    description: 'Mixed garden flowers with warm colors'
  },
  {
    id: 7,
    title: 'Traditional Gold',
    category: 'Classic',
    image: '/gallery/classic-2.jpg',
    description: 'Gold accents with classic border design'
  },
  {
    id: 8,
    title: 'Praying Hands',
    category: 'Religious',
    image: '/gallery/religious-2.jpg',
    description: 'Serene design with praying hands motif'
  },
  {
    id: 9,
    title: 'Contemporary Portrait',
    category: 'Modern',
    image: '/gallery/modern-2.jpg',
    description: 'Modern photo layout with clean typography'
  }
]

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory)

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
            Our Design Gallery
          </h1>
          <p className="text-lg md:text-xl text-navy-light max-w-3xl mx-auto leading-relaxed">
            Explore our collection of thoughtfully designed funeral programmes.
            Each design is crafted with care to honor and celebrate a unique life story.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-lavender text-white shadow-lg'
                  : 'bg-white text-navy-light hover:bg-lavender-light hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              onClick={() => setSelectedImage(item.id)}
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-lavender text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-playfair text-white text-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-navy mb-2 group-hover:text-lavender transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-navy-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-20 bg-white rounded-2xl p-12 shadow-lg"
        >
          <h2 className="font-playfair text-3xl font-bold text-navy mb-6">
            Ready to Create Your Custom Design?
          </h2>
          <p className="text-lg text-navy-light mb-8 max-w-2xl mx-auto">
            These are just examples of our work. We create completely custom designs
            tailored to honor your loved one&apos;s unique story and personality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-navy-light transition-colors duration-300"
            >
              Start Your Custom Design
            </a>
            <a
              href="/services"
              className="border-2 border-lavender text-lavender px-8 py-4 rounded-lg font-semibold hover:bg-lavender hover:text-white transition-colors duration-300"
            >
              Learn About Our Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-black/70 transition-colors"
              aria-label="Close lightbox"
            >
              ✕
            </button>
            {galleryItems.find(item => item.id === selectedImage) && (
              <div className="aspect-[3/4] relative">
                <Image
                  src={galleryItems.find(item => item.id === selectedImage)!.image}
                  alt={galleryItems.find(item => item.id === selectedImage)!.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}

export default Gallery
