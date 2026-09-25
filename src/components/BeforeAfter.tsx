import { Reveal } from "@/components/Reveal";
import { getContent, type Locale } from "@/lib/i18n";

// Source rows sit on a 5-row grid, so their centres fall at 10/30/50/70/90% of the column —
// the connector paths below start at those same heights in a 0–200 viewBox.
const ROW_Y = [20, 60, 100, 140, 180];

// Before: each pull wanders and crosses the others on its way to the person doing the copying.
const TANGLED = [
  "M0 20 C 55 20, 20 170, 120 100",
  "M0 60 C 70 60, 10 10, 120 100",
  "M0 100 C 40 100, 80 190, 120 100",
  "M0 140 C 60 140, 15 30, 120 100",
  "M0 180 C 75 180, 35 70, 120 100",
];

// After: every source fans straight into the platform.
const CLEAN = ROW_Y.map((y) => `M0 ${y} C 70 ${y}, 50 100, 120 100`);

type Side = "before" | "after";

export function BeforeAfter({ locale = "en" }: { locale?: Locale }) {
  const { beforeAfter } = getContent(locale);

  return (
    <div className="mt-16 sm:mt-20">
      <Reveal>
        <div className="grid gap-4 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-12">
          <div>
            <span className="section-label font-mono-ui text-[0.68rem] tracking-[0.14em] text-wire uppercase">
              {beforeAfter.label}
            </span>
            <h3 className="mt-3 font-display text-display-2 font-semibold text-paper">{beforeAfter.heading}</h3>
          </div>
          <p className="measure text-[0.95rem] leading-relaxed text-paper/65 sm:text-base">{beforeAfter.intro}</p>
        </div>
      </Reveal>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {(["before", "after"] as const).map((side, i) => (
          <Reveal key={side} delay={i * 0.1} className="h-full">
            <Panel side={side} sources={beforeAfter.sources} copy={beforeAfter[side]} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

function Panel({
  side,
  sources,
  copy,
}: {
  side: Side;
  sources: string[];
  copy: { tag: string; title: string; text: string; hub: string; output: string; meta: string };
}) {
  const after = side === "after";

  return (
    <article
      className={`flex h-full flex-col overflow-hidden rounded-2xl border ${
        after ? "border-signal/35 bg-gradient-to-b from-signal/[0.07] to-console-2/30" : "border-paper/10 bg-console-2/30"
      }`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-paper/10 px-4 py-3 sm:px-5">
        <span
          className={`rounded-full px-2.5 py-1 font-mono-ui text-[0.6rem] tracking-[0.14em] uppercase ${
            after ? "bg-signal text-console" : "border border-paper/20 text-paper/60"
          }`}
        >
          {copy.tag}
        </span>
        <span className="font-mono-ui text-[0.6rem] tracking-[0.08em] text-paper/45 uppercase">{copy.meta}</span>
      </div>

      <div className="grid grid-cols-[minmax(0,1fr)_2.75rem_minmax(0,0.85fr)] items-stretch px-4 pt-6 sm:grid-cols-[minmax(0,1fr)_4rem_minmax(0,0.8fr)] sm:px-5">
        <ol className="grid h-52 grid-rows-5 sm:h-56">
          {sources.map((source, index) => (
            <li key={source} className="flex items-center">
              <span
                className={`flex w-full items-center gap-2 rounded-md border px-2 py-1.5 font-mono-ui text-[0.6rem] leading-tight sm:text-[0.66rem] ${
                  after ? "border-paper/15 bg-console/70 text-paper/80" : "border-dashed border-paper/15 text-paper/55"
                }`}
              >
                {/* Before, the pulls happen one at a time — the number is the order they're done in. */}
                {!after && <span className="shrink-0 text-paper/35">{index + 1}</span>}
                <span className="min-w-0">{source}</span>
              </span>
            </li>
          ))}
        </ol>

        <svg
          viewBox="0 0 120 200"
          preserveAspectRatio="none"
          className="h-52 w-full rtl:-scale-x-100 sm:h-56"
          aria-hidden="true"
        >
          {(after ? CLEAN : TANGLED).map((d) => (
            <path
              key={d}
              d={d}
              fill="none"
              vectorEffect="non-scaling-stroke"
              stroke={after ? "#c9a227" : "#edebe6"}
              strokeOpacity={after ? 0.75 : 0.28}
              strokeWidth={after ? 1.4 : 1}
              strokeDasharray={after ? "5 7" : "2 4"}
              className={after ? "route-dash" : undefined}
            />
          ))}
        </svg>

        <div className="flex h-52 flex-col items-stretch justify-center gap-2 sm:h-56">
          <span
            className={`relative rounded-lg px-2 py-3 text-center font-mono-ui text-[0.62rem] leading-tight tracking-[0.04em] sm:text-[0.7rem] ${
              after
                ? "border border-signal bg-signal/15 font-medium text-signal shadow-[0_0_28px_rgba(201,162,39,0.18)]"
                : "border border-dashed border-paper/25 text-paper/60"
            }`}
          >
            {after && (
              <span aria-hidden="true" className="core-pulse absolute -top-1 end-2 h-2 w-2 rounded-full bg-signal" />
            )}
            {copy.hub}
          </span>
          <span aria-hidden="true" className={`text-center text-xs ${after ? "text-signal" : "text-paper/30"}`}>↓</span>
          <span
            className={`rounded-lg px-2 py-3 text-center font-display text-[0.8rem] font-semibold leading-tight sm:text-sm ${
              after ? "bg-report text-ink" : "border border-paper/15 text-paper/70"
            }`}
          >
            {copy.output}
          </span>
        </div>
      </div>

      <div className="mt-auto px-4 pb-5 pt-5 sm:px-5 sm:pb-6">
        <h4 className={`font-display text-lg font-semibold ${after ? "text-paper" : "text-paper/80"}`}>{copy.title}</h4>
        <p className="mt-1.5 text-sm leading-relaxed text-paper/60">{copy.text}</p>
      </div>
    </article>
  );
}
