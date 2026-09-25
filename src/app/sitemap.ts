import type { MetadataRoute } from "next";
import { identity } from "@/lib/content";
import { getAllLogPosts } from "@/lib/log";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllLogPosts();
  const homeLanguages = { en: identity.siteUrl, ar: `${identity.siteUrl}/ar` };

  return [
    {
      url: identity.siteUrl,
      changeFrequency: "yearly",
      priority: 1,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${identity.siteUrl}/ar`,
      changeFrequency: "yearly",
      priority: 0.9,
      alternates: { languages: homeLanguages },
    },
    {
      url: `${identity.siteUrl}/log`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${identity.siteUrl}/gallery`,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${identity.siteUrl}/resume`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    ...posts.map((post) => ({
      url: `${identity.siteUrl}/log/${post.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
