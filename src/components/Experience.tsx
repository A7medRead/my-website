import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="bg-report px-6 py-24 text-ink sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.5fr)]">
        <Reveal>
          <span className="eyebrow text-wire">04 — Experience</span>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="border-t hairline-light pt-6">
            <span className="font-mono-ui text-[0.75rem] tracking-[0.1em] text-signal">
              {experience.range}
            </span>
            <h3 className="mt-3 font-display text-display-2 font-semibold text-ink">
              {experience.role}
            </h3>
            <p className="mt-1 text-base text-ink/60 sm:text-lg">{experience.company}</p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {experience.responsibilities.map((item) => (
                <li key={item} className="flex items-baseline gap-2 text-sm leading-relaxed text-ink/75 sm:text-[0.95rem]">
                  <span className="font-mono-ui text-wire">—</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
