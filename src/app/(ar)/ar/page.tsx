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

export default function ArabicHome() {
  const testimonials = getAllTestimonials();

  return (
    <>
      <Header locale="ar" />
      <SectionIndex locale="ar" />
      <main>
        <Hero locale="ar" />
        <NowBar locale="ar" />
        <About locale="ar" />
        <Skills locale="ar" />
        <SelectedWork locale="ar" />
        <Experience locale="ar" />
        <Services locale="ar" />
        <Testimonials items={testimonials} locale="ar" />
        <Contact locale="ar" />
      </main>
      <Footer locale="ar" />
    </>
  );
}
