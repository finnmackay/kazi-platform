import { MotionConfig } from 'framer-motion'
import { SmoothScroll } from '../components/SmoothScroll/SmoothScroll'
import { CartProvider } from '../lib/cart-context'
import '@fontsource/jetbrains-mono/400.css'
import '@fontsource/jetbrains-mono/600.css'
import './globals.css'

export const metadata = {
  title: 'Kazi Manufacturing',
  description:
    'Kazi Manufacturing — custom apparel manufacturing for UK clothing brands, crafted in Kathmandu, Nepal.',
}

export default function RootLayout({ children }) {
  const schemaOrgScript = {
    __html: JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Kazi Manufacturing',
      url: 'https://kazimanufacturing.com',
      logo: 'https://kazimanufacturing.com/kazi-logo.png',
      description: 'Custom apparel manufacturing for UK clothing brands, crafted in Kathmandu, Nepal.',
      sameAs: [],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Sales',
        email: 'hello@kazimanufacturing.com',
        areaServed: 'GB',
        availableLanguage: 'en'
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Kathmandu',
        addressCountry: 'NP'
      },
      areaServed: 'GB',
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Custom Apparel Manufacturing',
        itemListElement: [
          {
            '@type': 'Offer',
            name: 'T-Shirt Manufacturing',
            description: 'Custom printed and embroidered t-shirts, MOQ 50 units',
            priceCurrency: 'GBP',
            priceRange: '3.20 - 8.50'
          },
          {
            '@type': 'Offer',
            name: 'Hoodie Manufacturing',
            description: 'Custom printed and embroidered hoodies, MOQ 50 units',
            priceCurrency: 'GBP',
            priceRange: '8.50 - 18.00'
          }
        ]
      }
    })
  }

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          rel="stylesheet"
          href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={schemaOrgScript}
        />
      </head>
      <body>
        <MotionConfig reducedMotion="user">
          <CartProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </CartProvider>
        </MotionConfig>
      </body>
    </html>
  )
}
