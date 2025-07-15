import { Metadata } from 'next'
import About from '@/components/About'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about our mission to create beautiful funeral programmes with empathy, craftsmanship, and reliability.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}
