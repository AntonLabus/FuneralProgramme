import { Metadata } from 'next'
import Gallery from '@/components/Gallery'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse our collection of beautiful funeral programme designs including Floral, Classic, Religious, and Modern styles.',
}

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <Gallery />
      </main>
      <Footer />
    </>
  )
}
