import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/content";

const phases = [
  { title: "Operate", text: "Manage branch operations and high-volume campaign activity." },
  { title: "Monitor", text: "Follow team performance, infrastructure, and deliverability." },
  { title: "Improve", text: "Find process gaps and remove recurring operational bottlenecks." },
  { title: "Build", text: "Create internal tools, reporting, and AI automation for the team." },
];

export function Experience() {
  return (
    <section id="experience" className="bg-report px-6 py-24 text-ink sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto grid w-full max-w-[1200px] gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.4fr)] lg:gap-16">
        <Reveal>
          <span className="section-label eyebrow text-wire">LOG 04 — Experience</span>
          <p className="mt-8 font-display text-[clamp(2rem,4vw,3.7rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-ink">
            Operator first.<br /><span className="text-wire">Builder by practice.</span>
          </p>
          <p className="mt-5 max-w-[38ch] text-base leading-relaxed text-ink/65">
            One role, four parts of the work: run the operation, spot friction, build the fix, and help the team scale it.
          </p>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="relative border-l border-ink/15 pl-6 sm:pl-9">
            <div className="absolute bottom-0 left-[-1px] top-0 w-px origin-top bg-signal" aria-hidden="true" />
            <div className="relative border-b hairline-light pb-6">
              <span className="absolute left-[-1.95rem] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-report bg-signal ring-1 ring-signal sm:left-[-2.45rem]" aria-hidden="true" />
              <span className="font-mono-ui text-[0.7rem] tracking-[0.12em] text-wire uppercase">{experience.range}</span>
              <h3 className="mt-2 font-display text-display-2 font-semibold text-ink">{experience.role}</h3>
              <p className="mt-1 text-base text-ink/60 sm:text-lg">{experience.company}</p>
            </div>
            <ol className="grid gap-0 sm:grid-cols-2 sm:gap-x-8">
              {phases.map((phase, index) => (
                <li key={phase.title} className={`relative border-b hairline-light py-5 ${index > 1 ? "sm:border-0" : ""}`}>
                  <span className="font-mono-ui text-[0.62rem] tracking-[0.12em] text-signal">0{index + 1}</span>
                  <h4 className="mt-1 font-display text-xl font-semibold text-ink">{phase.title}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink/65">{phase.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
