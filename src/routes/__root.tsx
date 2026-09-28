import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import type { ReactNode } from 'react'
import '../styles.css'
import {
  business,
  contact,
  hours,
  mapsQuery,
  social,
} from '@/data/config'

const siteTitle = 'The Pizza Hub Dunyapur | Best Pizza & Fast Food in Dunyapur, Punjab'
const siteDescription =
  'The Pizza Hub Dunyapur — Food For Life! Order fresh pizza, burgers, broast, fried chicken and pasta in Dunyapur, Punjab. Family Hall, Birthday Hall & Meeting Hall available. Order now on WhatsApp.'
const siteUrl = 'https://www.thepizzahubdunyapur.com'

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Restaurant',
  name: business.name,
  alternateName: business.shortName,
  slogan: business.slogan,
  description: business.description,
  image: `${siteUrl}/img/hero-bg.png`,
  logo: `${siteUrl}/img/logo.png`,
  telephone: contact.phoneDisplay,
  email: contact.email,
  servesCuisine: ['Pizza', 'Fast Food', 'Pakistani', 'Burgers', 'Pasta'],
  priceRange: 'Rs. 80 - Rs. 3500',
  address: {
    '@type': 'PostalAddress',
    streetAddress: business.address,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: 'PK',
  },
  openingHoursSpecification: hours.map((h) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: h.day,
    opens: h.time.split('–')[0]?.trim(),
    closes: h.time.split('–')[1]?.trim(),
  })),
  sameAs: [social.facebook, social.instagram, social.tiktok].filter(Boolean),
  hasMap: `https://www.google.com/maps?q=${encodeURIComponent(mapsQuery)}`,
  amenityFeature: [
    { '@type': 'LocationFeatureSpecification', name: 'Family Hall', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Birthday Hall', value: true },
    { '@type': 'LocationFeatureSpecification', name: 'Meeting Hall', value: true },
  ],
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: siteTitle },
      { name: 'description', content: siteDescription },
      {
        name: 'keywords',
        content:
          'The Pizza Hub Dunyapur, Pizza in Dunyapur, Fast Food in Dunyapur, Best Pizza Dunyapur, Restaurants in Dunyapur, burgers Dunyapur, broast Dunyapur, family hall Dunyapur',
      },
      { name: 'theme-color', content: '#17140f' },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: business.name },

      { property: 'og:type', content: 'restaurant.restaurant' },
      { property: 'og:title', content: siteTitle },
      { property: 'og:description', content: siteDescription },
      { property: 'og:site_name', content: business.name },
      { property: 'og:locale', content: 'en_PK' },
      { property: 'og:image', content: `${siteUrl}/img/hero-bg.png` },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:url', content: siteUrl },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: siteTitle },
      { name: 'twitter:description', content: siteDescription },
      { name: 'twitter:image', content: `${siteUrl}/img/hero-bg.png` },
    ],
    links: [
      { rel: 'icon', href: '/img/logo.png', type: 'image/png' },
      { rel: 'apple-touch-icon', href: '/img/logo.png' },
      { rel: 'canonical', href: siteUrl },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Anton&family=Caveat:wght@600;700&family=Poppins:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,500&display=swap',
      },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        {/* eslint-disable-next-line react/no-danger */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
