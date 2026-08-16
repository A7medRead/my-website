import { Reveal } from "@/components/Reveal";
import { about } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-report px-6 py-24 text-ink sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)]">
        <Reveal>
          <span className="eyebrow text-wire">01 — About</span>
        </Reveal>

        <div>
          <Reveal>
            <h2 className="font-display text-display-1 font-semibold text-ink">
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
            <blockquote className="measure mt-10 border-l-2 border-signal pl-5 font-display text-lg leading-snug text-ink sm:text-xl">
              {about.pullQuote}
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
