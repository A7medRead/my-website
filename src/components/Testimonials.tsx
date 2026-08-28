import { Reveal } from "@/components/Reveal";
import type { Testimonial } from "@/lib/testimonials";

export function Testimonials({ items }: { items: Testimonial[] }) {
  return (
    <section id="testimonials" className="bg-console px-6 py-24 sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="eyebrow text-wire">06 — Testimonials</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            What it's like to work together.
          </h2>
        </Reveal>

        {items.length === 0 ? (
          <Reveal delay={0.08}>
            <div className="mt-14 border hairline-dark px-6 py-10 sm:px-10">
              <p className="font-mono-ui text-[0.8rem] leading-relaxed text-paper/45">
                Testimonials are added through the CMS as they come in — nothing here yet.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {items.map((t, i) => (
              <Reveal key={t.slug} delay={i * 0.06}>
                <figure className="flex h-full flex-col justify-between border hairline-dark p-6 sm:p-8">
                  <blockquote className="measure font-display text-lg leading-snug text-paper">
                    "{t.quote}"
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
