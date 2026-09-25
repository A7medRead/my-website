import type { Metadata } from "next";
import "../globals.css";
import { fontVariables } from "../fonts";
import { identity } from "@/lib/content";
import { ChatWidget } from "@/components/ChatWidget";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CommandPalette } from "@/components/CommandPalette";
import { getAllLogPosts } from "@/lib/log";

const title = `${identity.shortName} — Email Operations & AI Automation`;
const description = `${identity.name} is an email operations manager and AI automation builder based in Dubai, UAE. Creator of MailPilot AI, a platform for campaign, server, deliverability, and team operations.`;

export const metadata: Metadata = {
  metadataBase: new URL(identity.siteUrl),
  title: {
    default: title,
    template: `%s — ${identity.shortName}`,
  },
  description,
  keywords: identity.keywords,
  authors: [{ name: identity.name, url: identity.siteUrl }],
  creator: identity.name,
  alternates: {
    canonical: "/",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  verification: {
    google: "I3GkdCBbcXEeNB74yfHhj7WalHrDI_nbNYH1ZWenqFY",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  openGraph: {
    type: "profile",
    url: identity.siteUrl,
    siteName: identity.shortName,
    title,
    description,
    locale: "en_US",
    images: [{
      url: "/opengraph-image.png",
      width: 1200,
      height: 630,
      alt: `${identity.name} — ${identity.title}`,
    }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fontVariables} h-full`}
    >
      <body className="min-h-full flex flex-col bg-console text-paper">
        <ScrollProgress />
        {children}
        <ChatWidget />
        <CommandPalette posts={getAllLogPosts().map(({ slug, title, excerpt }) => ({ slug, title, excerpt }))} />
      </body>
    </html>
  );
}
