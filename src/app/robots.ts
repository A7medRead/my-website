import type { MetadataRoute } from "next";
import { identity } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${identity.siteUrl}/sitemap.xml`,
  };
}
