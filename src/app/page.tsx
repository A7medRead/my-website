import { Header } from "@/components/Header";
import { SectionIndex } from "@/components/SectionIndex";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { SelectedWork } from "@/components/SelectedWork";
import { Experience } from "@/components/Experience";
import { Services } from "@/components/Services";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <SectionIndex />
      <main>
        <Hero />
        <About />
        <Skills />
        <SelectedWork />
        <Experience />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
