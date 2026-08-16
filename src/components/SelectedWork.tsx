import { Reveal } from "@/components/Reveal";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import { flagship, secondaryProjects } from "@/lib/content";

export function SelectedWork() {
  return (
    <section id="work" className="bg-console px-6 py-24 sm:py-32 lg:pl-24 lg:pr-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="eyebrow text-wire">03 — Selected Work</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            Built to run the operation.
          </h2>
        </Reveal>

        {/* Flagship */}
        <Reveal delay={0.08}>
          <div className="mt-14 bg-report p-6 text-ink sm:p-10 lg:p-14">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <span className="font-mono-ui text-[0.72rem] tracking-[0.16em] text-signal uppercase">
                  {flagship.tag}
                </span>
                <h3 className="mt-2 font-display text-display-2 font-semibold text-ink">
                  {flagship.name}
                </h3>
                <p className="mt-1 font-display text-base text-ink/60 sm:text-lg">
                  {flagship.subtitle}
                </p>
              </div>
              <span className="font-mono-ui text-[0.75rem] tracking-[0.04em] text-ink/55">
                {flagship.role}
              </span>
            </div>

            <p className="measure mt-8 text-base leading-relaxed text-ink/75 sm:text-lg">
              {flagship.description}
            </p>

            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-y hairline-light py-6 sm:grid-cols-4">
              {flagship.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-display text-2xl font-semibold text-ink sm:text-3xl">
                    {m.value}
                  </dd>
                  <dd className="mt-1 font-mono-ui text-[0.7rem] tracking-[0.04em] text-ink/55">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {flagship.figures.map((fig, i) => (
                <ScreenshotPlaceholder
                  key={fig.caption}
                  caption={fig.caption}
                  ratio={fig.ratio}
                  index={i + 1}
                  src={fig.src}
                />
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {flagship.clusters.map((cluster) => (
                <div key={cluster.label}>
                  <h4 className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
                    {cluster.label}
                  </h4>
                  <ul className="mt-4 flex flex-col gap-2">
                    {cluster.items.map((item) => (
                      <li key={item} className="text-sm leading-snug text-ink/75">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <p className="measure mt-10 border-l-2 border-signal pl-5 font-display text-lg leading-snug text-ink">
              {flagship.impact}
            </p>
          </div>
        </Reveal>

        {/* Secondary projects */}
        <div className="mt-4 flex flex-col">
          {secondaryProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <div className="grid gap-4 border-t hairline-dark py-8 last:border-b sm:grid-cols-[5rem_minmax(0,1fr)]">
                <span className="font-mono-ui text-[0.75rem] tracking-[0.1em] text-wire">
                  LOG — {project.index}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="measure mt-3 text-[0.95rem] leading-relaxed text-paper/70">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono-ui text-[0.72rem] leading-relaxed text-paper/45">
                    {project.spec}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
