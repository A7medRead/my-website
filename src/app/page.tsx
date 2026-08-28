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

export default function Home() {
  const testimonials = getAllTestimonials();

  return (
    <>
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
