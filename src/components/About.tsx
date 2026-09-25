import { Reveal } from "@/components/Reveal";
import { getContent, type Locale } from "@/lib/i18n";

export function About({ locale = "en" }: { locale?: Locale }) {
  const { about, ui } = getContent(locale);
  return (
    <section id="about" className="relative bg-report px-6 py-24 text-ink sm:py-32 lg:ps-24 lg:pe-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)]">
        <Reveal>
          <span className="section-label eyebrow text-wire">{ui.sections.about}</span>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="max-w-[18ch] font-display text-[clamp(2.5rem,5vw,4.5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-ink">
              {about.heading}
            </h2>
          </Reveal>

          <div className="measure mt-8 flex flex-col gap-5 text-base leading-relaxed text-ink/75 sm:text-lg">
            {about.paragraphs.map((p, i) => (
              <Reveal key={p} delay={i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <blockquote className="measure mt-10 border-s-2 border-signal ps-5 font-display text-lg leading-snug text-ink sm:text-xl">
              {about.pullQuote}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
