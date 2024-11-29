import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://gravite0.com'),
  title: 'Gravité0 - Parapente Tandem & Formation à Verbier',
  description: 'Découvrez le parapente en tandem et formations à Verbier. Vols panoramiques, cours débutants et avancés dans les Alpes Suisses.',
  keywords: 'parapente verbier, tandem parapente, formation parapente',
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
  verification: {
    google: 'votre-code-verification',
  }
}