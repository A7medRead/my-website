"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/Reveal";
import { ScreenshotPlaceholder } from "@/components/ScreenshotPlaceholder";
import { Counter } from "@/components/Counter";
import { BeforeAfter } from "@/components/BeforeAfter";
import { getContent, type Locale } from "@/lib/i18n";

export function SelectedWork({ locale = "en" }: { locale?: Locale }) {
  const reduce = useReducedMotion();
  const { flagship, secondaryProjects, ui } = getContent(locale);
  const t = ui.work;

  return (
    <section id="work" className="bg-console px-6 py-24 sm:py-32 lg:ps-24 lg:pe-10">
      <div className="mx-auto w-full max-w-[1200px]">
        <Reveal>
          <span className="section-label eyebrow text-wire">{ui.sections.work}</span>
          <h2 className="mt-4 font-display text-display-1 font-semibold text-paper">
            {t.heading}
          </h2>
        </Reveal>

        {/* Flagship */}
        <Reveal delay={0.08}>
          <article className="editorial-card mt-14 overflow-hidden rounded-[1.75rem] border border-ink/10 bg-report text-ink shadow-[0_28px_90px_rgba(0,0,0,0.22)]">
            <div className="flex items-center justify-between border-b border-ink/10 bg-report-2/60 px-6 py-3 sm:px-10 lg:px-14">
              <span className="font-mono-ui text-[0.62rem] tracking-[0.14em] text-ink/55 uppercase">{t.brief}</span>
              <span className="inline-flex items-center gap-2 font-mono-ui text-[0.58rem] tracking-[0.12em] text-[#4c7560] uppercase"><span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#70a982]" />{t.operational}</span>
            </div>
            <div className="p-6 sm:p-10 lg:p-14">
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

            <div className="mt-8 grid gap-3 md:grid-cols-3">
              {t.steps.map((step) => (
                <div key={step.label} className="editorial-card border-t-2 border-signal/70 bg-report-2/45 px-4 py-4 transition-colors hover:bg-report-2/80 sm:px-5">
                  <span className="font-mono-ui text-[0.62rem] tracking-[0.12em] text-wire uppercase">{step.label}</span>
                  <p className="mt-3 text-sm leading-relaxed text-ink/75">{step.text}</p>
                </div>
              ))}
            </div>

            <dl className="mt-10 grid grid-cols-2 gap-x-4 gap-y-4 border-y hairline-light py-5 sm:grid-cols-4 sm:gap-x-6 sm:py-6">
              {flagship.metrics.map((m, i) => (
                <div key={m.label} className={`relative min-h-20 px-3 py-2 sm:px-4 ${i === 1 || i === 3 ? "border-s border-ink/10 ps-4" : i === 2 ? "sm:border-s sm:border-ink/10 sm:ps-4" : "ps-0"}`}>
                  <dt className="sr-only">{m.label}</dt>
                  <dd className="font-display text-3xl font-semibold leading-none tracking-[-0.04em] text-ink sm:text-4xl">
                    <Counter value={m.value} delay={i * 0.1} />
                  </dd>
                  <dd className="mt-1 font-mono-ui text-[0.7rem] tracking-[0.04em] text-ink/55">
                    {m.label}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-10 grid items-start gap-7 lg:grid-cols-2">
              {flagship.figures.map((fig, i) => (
                <ScreenshotPlaceholder
                  key={fig.caption}
                  caption={fig.caption}
                  ratio={fig.ratio}
                  index={i + 1}
                  src={fig.src}
                  labels={ui.screenshot}
                />
              ))}
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {flagship.clusters.map((cluster) => (
                <div key={cluster.label} className="border-t border-ink/15 pt-4">
                  <h4 className="section-label font-mono-ui text-[0.68rem] tracking-[0.1em] text-wire uppercase">
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

            <p className="measure mt-10 border-s-2 border-signal ps-5 font-display text-lg leading-snug text-ink">
              {flagship.impact}
            </p>
            <div className="mt-8 flex flex-wrap gap-3 border-t border-ink/15 pt-6">
              <a href="/gallery" className="inline-flex min-h-11 items-center gap-3 rounded-lg border border-ink/20 px-4 font-mono-ui text-[0.7rem] tracking-[0.08em] text-ink transition-colors hover:border-ink/50 hover:bg-ink/[0.04] focus-visible:outline-signal">
                {t.galleryCta} <span aria-hidden="true" className="flip-rtl">↗</span>
              </a>
              <a href="#contact" className="inline-flex min-h-11 items-center gap-3 rounded-lg bg-ink px-4 font-mono-ui text-[0.7rem] tracking-[0.08em] text-report transition-colors hover:bg-ink/80 focus-visible:outline-signal">
                {t.discussCta} <span aria-hidden="true" className="flip-rtl">→</span>
              </a>
            </div>
            </div>
          </article>
        </Reveal>

        <BeforeAfter locale={locale} />

        {/* Secondary projects */}
        <div className="mt-4 flex flex-col">
          {secondaryProjects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.05}>
              <motion.div
                whileHover={reduce ? undefined : { x: locale === "ar" ? -6 : 6 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="editorial-card grid gap-4 rounded-2xl border-t hairline-dark px-2 py-6 hover:border-paper/25 hover:bg-console-2/30 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6 sm:px-4 sm:py-8"
              >
                <span className="font-mono-ui text-[0.75rem] tracking-[0.1em] text-wire">
                  {t.projectPrefix} — {project.index}
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-paper sm:text-xl">
                    {project.name}
                  </h3>
                  <p className="measure mt-3 text-[0.95rem] leading-relaxed text-paper/70">
                    {project.description}
                  </p>
                  <p className="mt-3 font-mono-ui text-[0.68rem] leading-relaxed text-paper/55 sm:text-[0.72rem]">
                    {project.spec}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
