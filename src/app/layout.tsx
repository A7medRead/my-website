import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { identity } from "@/lib/content";
import { ChatWidget } from "@/components/ChatWidget";
import { ScrollProgress } from "@/components/ScrollProgress";

const plexSans = localFont({
  src: "./fonts/ibm-plex-sans-latin.woff2",
  variable: "--font-plex-sans",
  weight: "400 600",
  style: "normal",
  display: "swap",
});

const plexCondensed = localFont({
  src: [
    { path: "./fonts/ibm-plex-sans-condensed-500-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/ibm-plex-sans-condensed-600-latin.woff2", weight: "600", style: "normal" },
    { path: "./fonts/ibm-plex-sans-condensed-700-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-plex-condensed",
  display: "swap",
});

const plexMono = localFont({
  src: [
    { path: "./fonts/ibm-plex-mono-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/ibm-plex-mono-500-latin.woff2", weight: "500", style: "normal" },
  ],
  variable: "--font-plex-mono",
  display: "swap",
});

const title = `${identity.name} — ${identity.title}`;
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
      className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-console text-paper">
        <ScrollProgress />
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}
