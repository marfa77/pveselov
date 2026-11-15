import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";
import { libraryEntries, libraryMeta } from "@/lib/library";
import { podcastMeta } from "@/lib/podcast";
import { playbookMeta } from "@/lib/playbook";

export default function sitemap(): MetadataRoute.Sitemap {
  const libraryReviewed = new Date(libraryMeta.lastReviewed);
  return [
    {
      url: siteConfig.url,
      lastModified: new Date("2026-10-10"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteConfig.url}${playbookMeta.path}`,
      lastModified: new Date(playbookMeta.lastUpdated),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}${podcastMeta.path}`,
      lastModified: new Date("2026-11-15"),
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: `${siteConfig.url}${libraryMeta.path}`,
      lastModified: libraryReviewed,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...libraryEntries.map((entry) => ({
      url: `${siteConfig.url}${libraryMeta.path}/${entry.slug}`,
      lastModified: libraryReviewed,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
