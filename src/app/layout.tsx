import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Funeral Programmes | Honoring a Life, Cherishing a Memory',
    template: '%s | Funeral Programmes'
  },
  description: 'Beautifully crafted funeral programmes that honor your loved one\'s memory. Personalized design services with compassionate care and fast turnaround.',
  keywords: ['funeral programmes', 'memorial services', 'obituary design', 'custom funeral programs', 'memorial keepsakes'],
  authors: [{ name: 'Funeral Programmes Design Studio' }],
  creator: 'Funeral Programmes Design Studio',
  publisher: 'Funeral Programmes Design Studio',
  metadataBase: new URL('https://funeral-programmes.netlify.app'), // TODO: Replace with actual domain
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://funeral-programmes.netlify.app', // TODO: Replace with actual domain
    siteName: 'Funeral Programmes',
    title: 'Funeral Programmes | Honoring a Life, Cherishing a Memory',
    description: 'Beautifully crafted funeral programmes that honor your loved one\'s memory.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Funeral Programmes - Compassionate Design Services',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Funeral Programmes | Honoring a Life, Cherishing a Memory',
    description: 'Beautifully crafted funeral programmes that honor your loved one\'s memory.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        {children}
        
        {/* Hidden form for Netlify form detection */}
        <form 
          name="contact" 
          data-netlify="true" 
          data-netlify-honeypot="bot-field" 
          hidden
        >
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="tel" name="phone" />
          <textarea name="message"></textarea>
          <select name="serviceType">
            <option value="">Select a service</option>
            <option value="simple">Simple Programme</option>
            <option value="standard">Standard Programme</option>
            <option value="premium">Premium Programme</option>
            <option value="custom">Custom Design</option>
          </select>
          <select name="urgency">
            <option value="standard">Standard (3-5 days)</option>
            <option value="urgent">Urgent (24-48 hours)</option>
            <option value="rush">Rush (Same day)</option>
          </select>
        </form>
        
        <script
          defer
          data-domain="funeral-programmes.netlify.app"
          src="https://plausible.io/js/script.js"
        ></script>
      </body>
    </html>
  )
}
