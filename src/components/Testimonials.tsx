import { Reveal } from "@/components/Reveal";
import type { Testimonial } from "@/lib/testimonials";
import { getContent, type Locale } from "@/lib/i18n";

export function Testimonials({ items, locale = "en" }: { items: Testimonial[]; locale?: Locale }) {
  const { ui } = getContent(locale);
  return (
    <section id="testimonials" className="bg-console px-6 py-24 sm:py-32 lg:ps-24 lg:pe-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="section-label eyebrow text-wire">{ui.sections.testimonials}</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            {ui.testimonials.heading}
          </h2>
        </Reveal>

        {items.length === 0 ? (
          <Reveal delay={0.08}>
              <div className="relative mt-14 overflow-hidden rounded-[1.5rem] border hairline-dark bg-console-2/35 px-6 py-10 sm:px-10 sm:py-12">
                <span aria-hidden="true" className="absolute -end-4 -top-10 font-display text-[12rem] leading-none text-paper/[0.035]">“</span>
                <p className="font-mono-ui text-[0.8rem] leading-relaxed text-paper/45">
                {ui.testimonials.empty}
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {items.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.06}>
                <figure className="flex h-full flex-col justify-between rounded-xl border hairline-dark bg-console-2/30 p-6 sm:p-8">
                  <blockquote dir="auto" className="measure font-display text-lg leading-snug text-paper">
                  &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 font-mono-ui text-[0.72rem] tracking-[0.08em] text-wire uppercase">
                    {t.name}
                    {t.role && <span className="text-paper/40"> — {t.role}</span>}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
