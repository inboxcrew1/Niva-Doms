import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nivadoms.com';
  const currentDate = new Date().toISOString().split('T')[0];

  const routes = [
    { url: `${baseUrl}/`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/d1`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${baseUrl}/d2`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.95 },
    { url: `${baseUrl}/why-niva`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/applications`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.85 },
    { url: `${baseUrl}/design`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.80 },
    { url: `${baseUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.80 },
    { url: `${baseUrl}/projects`, lastModified: currentDate, changeFrequency: 'weekly' as const, priority: 0.80 },
    { url: `${baseUrl}/faq`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.75 },
    { url: `${baseUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly' as const, priority: 0.90 },
    { url: `${baseUrl}/privacy`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.30 },
    { url: `${baseUrl}/terms`, lastModified: currentDate, changeFrequency: 'yearly' as const, priority: 0.30 },
  ];

  return routes;
}
