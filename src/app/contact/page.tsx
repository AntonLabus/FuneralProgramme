import { Metadata } from 'next'
import Contact from '@/components/Contact'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch for a compassionate consultation. We promise a 24-hour response and are here to help you create a beautiful tribute.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
