import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <section id="skills" className="bg-console px-6 py-24 sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="eyebrow text-wire">02 — Stack</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            What I actually run.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {skillGroups.map((group, i) => (
            <Reveal key={group.label} delay={i * 0.06}>
              <div className="border-t hairline-dark pt-5">
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
