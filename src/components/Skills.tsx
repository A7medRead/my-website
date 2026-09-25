import { Reveal } from "@/components/Reveal";
import { getContent, type Locale } from "@/lib/i18n";

export function Skills({ locale = "en" }: { locale?: Locale }) {
  const { skillGroups, ui } = getContent(locale);
  return (
    <section id="skills" className="bg-console px-6 py-24 sm:py-32 lg:ps-24 lg:pe-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="section-label eyebrow text-wire">{ui.sections.skills}</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            {ui.skills.heading}
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="editorial-card relative overflow-hidden rounded-2xl border border-paper/10 bg-gradient-to-br from-console-2/80 to-console-2/25 px-5 pb-6 pt-5 sm:px-6">
                <span aria-hidden="true" className="absolute end-5 top-5 font-mono-ui text-[0.6rem] tracking-[0.12em] text-paper/25">0{i + 1}</span>
                <h3 className="font-mono-ui text-[0.75rem] tracking-[0.14em] text-signal uppercase">
                  {group.label}
                </h3>
                <ul className="mt-5 flex flex-col gap-2.5">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-baseline gap-2 text-[0.95rem] text-paper/75 sm:text-base"
                    >
                      <span className="font-mono-ui text-wire">—</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
