import { Metadata } from 'next'
import Services from '@/components/Services'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Our comprehensive funeral programme design services including custom design, photo editing, obituary integration, and fast turnaround.',
}

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main>
        <Services />
      </main>
      <Footer />
    </>
  )
}
