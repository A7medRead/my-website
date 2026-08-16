import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { GalleryLightbox } from "@/components/GalleryLightbox";
import { getAllGalleryItems } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Screenshots from the operations systems and products built to run the business.",
};

export default function GalleryPage() {
  const items = getAllGalleryItems();

  return (
    <>
      <Header />
      <main className="bg-console px-6 pt-32 pb-24 sm:pb-32 lg:pl-24 lg:pr-10">
        <div className="mx-auto w-full max-w-[1000px]">
          <Reveal>
            <span className="eyebrow text-wire">Gallery</span>
            <h1 className="mt-4 font-display text-display-1 font-semibold text-paper">
              Inside the systems.
            </h1>
            <p className="measure mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
              Screenshots from the tools and dashboards built to run the operation, with the
              context behind each one. Click any image to see it larger.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="mt-16">
            <GalleryLightbox items={items} />
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  );
}
