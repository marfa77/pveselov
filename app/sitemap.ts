import { MetadataRoute } from 'next';
import { projects } from '@/lib/projects';
import { siteConfig } from '@/lib/config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const lastModified = new Date('2026-04-27');

  // /about redirects to / — don't list it in sitemap
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ];

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.id}`,
    lastModified,
    changeFrequency: 'monthly' as const,
    priority: project.id === 'bench-energy' ? 0.8 : 0.6,
  }));

  return [...routes, ...projectRoutes];
}
