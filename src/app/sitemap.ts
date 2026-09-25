import type { MetadataRoute } from "next";
import { identity } from "@/lib/content";
import { getAllLogPosts } from "@/lib/log";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllLogPosts();

  return [
    {
      url: identity.siteUrl,
      changeFrequency: "yearly",
      priority: 1,
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
