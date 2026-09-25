import type { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PrintButton } from "@/components/PrintButton";
import { identity, about, skillGroups, experience, flagship } from "@/lib/content";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${identity.name} — ${identity.title}.`,
  alternates: { canonical: "/resume" },
  openGraph: {
    title: `${identity.name} — Resume`,
    description: `Experience and skills of ${identity.name}, ${identity.title}, based in Dubai, UAE.`,
    url: "/resume",
    type: "profile",
    images: ["/opengraph-image.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: `${identity.name} — Resume`,
    description: `Experience and skills of ${identity.name}, ${identity.title}, based in Dubai, UAE.`,
    images: ["/opengraph-image.png"],
  },
};

export default function ResumePage() {
  return (
    <>
      <div className="print:hidden">
        <Header />
      </div>
      <main className="bg-console px-6 pt-32 pb-24 lg:pl-24 lg:pr-10 print:bg-white print:px-0 print:pt-0 print:pb-0">
        <div className="mx-auto flex w-full max-w-[820px] items-center justify-between gap-4 print:hidden">
          <p className="font-mono-ui text-[0.75rem] text-paper/60">
            A one-page summary of {identity.shortName} — print or save as PDF.
          </p>
          <PrintButton />
        </div>

        <div className="mx-auto mt-10 w-full max-w-[820px] rounded-2xl bg-report p-8 text-ink sm:p-12 print:m-0 print:max-w-none print:rounded-none print:bg-white print:p-10 print:shadow-none">
          <header className="flex flex-wrap items-baseline justify-between gap-4 border-b hairline-light pb-6">
            <div>
              <h1 className="font-display text-3xl font-semibold text-ink sm:text-4xl">
                {identity.name}
              </h1>
              <p className="mt-1 font-display text-lg text-ink/70">{identity.title}</p>
            </div>
            <div className="font-mono-ui text-[0.78rem] leading-relaxed text-ink/70">
              <p>{identity.location}</p>
              <p>{identity.email}</p>
              <p>{identity.linkedin.replace("https://www.", "")}</p>
            </div>
          </header>

          <section className="mt-8">
            <h2 className="font-mono-ui text-[0.75rem] tracking-[0.14em] text-signal uppercase">
              Summary
            </h2>
            <p className="mt-3 max-w-[65ch] text-[0.95rem] leading-relaxed text-ink/80">
              {about.pullQuote}
            </p>
          </section>

          <section className="mt-8">
            <h2 className="font-mono-ui text-[0.75rem] tracking-[0.14em] text-signal uppercase">
              Experience
            </h2>
            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">{experience.role}</h3>
                <span className="font-mono-ui text-[0.75rem] text-ink/55">{experience.range}</span>
              </div>
              <p className="font-mono-ui text-[0.8rem] text-ink/60">{experience.company}</p>
              <ul className="mt-3 grid gap-x-6 gap-y-1.5 text-[0.9rem] leading-relaxed text-ink/80 sm:grid-cols-2">
                {experience.responsibilities.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-signal">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-mono-ui text-[0.75rem] tracking-[0.14em] text-signal uppercase">
              Flagship project
            </h2>
            <div className="mt-3">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold text-ink">{flagship.name}</h3>
                <span className="font-mono-ui text-[0.75rem] text-ink/55">{flagship.role}</span>
              </div>
              <p className="mt-2 max-w-[65ch] text-[0.9rem] leading-relaxed text-ink/80">
                {flagship.description}
              </p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="font-mono-ui text-[0.75rem] tracking-[0.14em] text-signal uppercase">
              Skills
            </h2>
            <div className="mt-3 grid gap-5 sm:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label}>
                  <h3 className="font-mono-ui text-[0.72rem] tracking-[0.08em] text-ink/55 uppercase">
                    {group.label}
                  </h3>
                  <p className="mt-1.5 text-[0.85rem] leading-relaxed text-ink/80">
                    {group.items.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
