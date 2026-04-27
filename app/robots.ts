import { MetadataRoute } from 'next';
import { siteConfig } from '@/lib/config';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/about', '/blog'],
    },
    host: siteConfig.url,
    sitemap: `${siteConfig.url}/sitemap.xml`,
  };
}
