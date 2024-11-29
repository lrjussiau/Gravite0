import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const sections = [
    'welcome',
    'tandem',
    'formation',
    'about',
    'contact'
  ];

  return [
    {
      url: 'https://gravite0.com',
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    ...sections.map(section => ({
      url: `https://gravite0.com/#${section}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    }))
  ]
}