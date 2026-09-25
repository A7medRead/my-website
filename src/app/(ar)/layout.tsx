import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../globals.css";
import { fontVariables } from "../fonts";
import { identity } from "@/lib/content";
import { ar } from "@/lib/content.ar";
import { ChatWidget } from "@/components/ChatWidget";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { getAllLogPosts } from "@/lib/log";

const title = `${ar.identity.shortName} — عمليات البريد الإلكتروني والأتمتة بالذكاء الاصطناعي`;
const description = `${ar.identity.name}، مدير عمليات بريد إلكتروني ومطوّر أنظمة أتمتة بالذكاء الاصطناعي في دبي، الإمارات. مؤسس MailPilot AI، منصة لإدارة الحملات والخوادم وقابلية الوصول والفريق.`;

export const metadata: Metadata = {
  metadataBase: new URL(identity.siteUrl),
  title: {
    default: title,
    template: `%s — ${ar.identity.shortName}`,
  },
  description,
  keywords: [...identity.keywords, "أحمد مسعود", "عمليات البريد الإلكتروني", "أتمتة بالذكاء الاصطناعي"],
  authors: [{ name: identity.name, url: identity.siteUrl }],
  creator: identity.name,
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "profile",
    url: `${identity.siteUrl}/ar`,
    siteName: ar.identity.shortName,
    title,
    description,
    locale: "ar_AE",
    alternateLocale: ["en_US"],
    images: [{ url: "/opengraph-image.png", width: 1200, height: 630, alt: `${identity.name} — ${identity.title}` }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function ArabicRootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={`${fontVariables} h-full`}>
      <body className="min-h-full flex flex-col bg-console text-paper">
        <ScrollProgress />
        {children}
        <ChatWidget locale="ar" />
        <CommandPalette locale="ar" posts={getAllLogPosts().map(({ slug, title, excerpt }) => ({ slug, title, excerpt }))} />
      </body>
    </html>
  );
}
