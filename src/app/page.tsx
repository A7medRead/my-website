import { Header } from "@/components/Header";
import { SectionIndex } from "@/components/SectionIndex";
import { Hero } from "@/components/Hero";
import { NowBar } from "@/components/NowBar";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { SelectedWork } from "@/components/SelectedWork";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { getAllTestimonials } from "@/lib/testimonials";
import { identity } from "@/lib/content";

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${identity.siteUrl}/#website`,
      name: `${identity.shortName} — ${identity.title}`,
      url: identity.siteUrl,
      inLanguage: "en",
      publisher: { "@id": `${identity.siteUrl}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${identity.siteUrl}/#person`,
      name: identity.name,
      alternateName: identity.shortName,
      jobTitle: identity.title,
      description: `${identity.title} based in ${identity.location}. Creator of MailPilot AI for email campaign, sending infrastructure, deliverability, and team operations.`,
      url: identity.siteUrl,
      image: `${identity.siteUrl}/opengraph-image.png`,
      email: `mailto:${identity.email}`,
      sameAs: [identity.linkedin],
      knowsAbout: identity.keywords,
    },
  ],
};

export default function Home() {
  const testimonials = getAllTestimonials();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header />
      <SectionIndex />
      <main>
        <Hero />
        <NowBar />
        <About />
        <Skills />
        <SelectedWork />
        <Experience />
        <Services />
        <Testimonials items={testimonials} />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
