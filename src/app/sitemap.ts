import type { MetadataRoute } from "next";
import { identity } from "@/lib/content";
import { getAllLogPosts } from "@/lib/log";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllLogPosts();

  return [
    {
      url: identity.siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${identity.siteUrl}/log`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...posts.map((post) => ({
      url: `${identity.siteUrl}/log/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
