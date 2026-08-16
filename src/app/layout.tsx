import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { identity, hero } from "@/lib/content";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-plex-condensed",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const title = `${identity.name} — ${identity.title}`;

export const metadata: Metadata = {
  metadataBase: new URL(identity.siteUrl),
  title: {
    default: title,
    template: `%s — ${identity.shortName}`,
  },
  description: hero.subhead,
  keywords: identity.keywords,
  authors: [{ name: identity.name, url: identity.siteUrl }],
  creator: identity.name,
  alternates: {
    canonical: "/",
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
    description: hero.subhead,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: hero.subhead,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: identity.name,
  alternateName: identity.shortName,
  jobTitle: identity.title,
  url: identity.siteUrl,
  email: `mailto:${identity.email}`,
  sameAs: [identity.linkedin],
  knowsAbout: identity.keywords,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${plexSans.variable} ${plexCondensed.variable} ${plexMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-console text-paper">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
