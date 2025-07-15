import { Metadata } from 'next'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import CallToAction from '@/components/CallToAction'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Home',
  description: 'Beautifully crafted funeral programmes that honor your loved one\'s memory. Personalized design services with compassionate care and fast turnaround.',
}

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Services />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
