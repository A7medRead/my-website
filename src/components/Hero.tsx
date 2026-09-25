"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero, identity } from "@/lib/content";

const points = [
  { x: 18, y: 36, r: 2.1 },
  { x: 30, y: 20, r: 1.5 },
  { x: 38, y: 67, r: 1.8 },
  { x: 52, y: 13, r: 1.6 },
  { x: 73, y: 26, r: 2 },
  { x: 83, y: 51, r: 1.5 },
  { x: 67, y: 78, r: 1.8 },
  { x: 27, y: 80, r: 1.3 },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative isolate overflow-hidden px-6 pb-12 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:min-h-[calc(100svh-4rem)] lg:px-12 lg:pb-12 lg:pl-24 lg:pt-32">
      <div className="hero-grid pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-12 -z-10 h-[34rem] w-[34rem] rounded-full bg-wire/10 blur-[100px]" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[1320px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-paper/15 pb-4 sm:mb-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5" aria-hidden="true">
              <span className="absolute inset-0 animate-ping rounded-full bg-[#9bd4a5]/60 motion-reduce:animate-none" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-[#9bd4a5]" />
            </span>
            <span className="font-mono-ui text-[0.65rem] tracking-[0.16em] text-paper/75 uppercase">{hero.status}</span>
          </div>
          <span className="font-mono-ui text-[0.62rem] tracking-[0.12em] text-paper/40 uppercase">Dubai, UAE <span className="mx-2 text-wire">/</span> Systems in motion</span>
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.8fr)] lg:gap-8 xl:gap-16">
          <div className="relative z-10">
            <motion.p initial={reduce ? undefined : { opacity: 0, y: 10 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.45 }} className="section-label eyebrow text-wire">Operations × Automation × Impact</motion.p>

            <motion.h1 initial="hidden" animate="show" className="mt-5 font-display text-[clamp(2.8rem,12vw,4.5rem)] font-semibold uppercase leading-[0.84] tracking-[-0.05em] text-paper lg:text-[clamp(4rem,7vw,7.2rem)] lg:leading-[0.8]">
              <motion.span variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } }} className="block">Ahmed</motion.span>
              <motion.span variants={{ hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0, transition: { duration: 0.65, delay: reduce ? 0 : 0.1, ease: [0.16, 1, 0.3, 1] } } }} className="block text-signal">Massoud<span className="text-wire">.</span></motion.span>
            </motion.h1>

            <motion.p initial={reduce ? undefined : { opacity: 0, y: 12 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: reduce ? 0 : 0.24 }} className="mt-6 max-w-[34ch] font-display text-xl leading-tight text-paper/90 sm:text-2xl lg:mt-8 lg:text-[1.7rem]">
              {identity.title}
            </motion.p>
            <motion.p initial={reduce ? undefined : { opacity: 0, y: 12 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: reduce ? 0 : 0.32 }} className="measure mt-4 text-base leading-relaxed text-paper/65 sm:text-lg">
              {hero.subhead}
            </motion.p>

            <motion.div initial={reduce ? undefined : { opacity: 0, y: 12 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: reduce ? 0 : 0.4 }} className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-3">
              <motion.a whileHover={reduce ? undefined : { y: -2 }} whileTap={{ scale: 0.98 }} href={hero.ctaPrimary.href} className="inline-flex min-h-12 items-center gap-5 rounded-xl border border-signal bg-signal px-5 font-mono-ui text-xs tracking-[0.08em] text-console shadow-[0_8px_24px_rgba(201,162,39,0.12)] transition-colors duration-200 hover:bg-transparent hover:text-signal">
                {hero.ctaPrimary.label}<span aria-hidden="true">↗</span>
              </motion.a>
              <motion.a whileHover={reduce ? undefined : { x: 4 }} href={hero.ctaSecondary.href} className="inline-flex min-h-12 items-center gap-3 font-mono-ui text-xs tracking-[0.08em] text-paper/75 uppercase transition-colors hover:text-paper">
                {hero.ctaSecondary.label}<span className="text-signal" aria-hidden="true">→</span>
              </motion.a>
            </motion.div>
          </div>

          <motion.figure initial={reduce ? undefined : { opacity: 0, scale: 0.96, y: 14 }} animate={reduce ? undefined : { opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: reduce ? 0 : 0.2, ease: [0.16, 1, 0.3, 1] }} className="relative mx-auto w-full max-w-[600px] lg:max-w-none" aria-labelledby="network-caption">
            <div className="relative overflow-visible py-2 sm:py-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="eyebrow text-paper/65">The operation, in orbit</p>
                  <p className="mt-1 font-mono-ui text-[0.62rem] tracking-[0.08em] text-paper/35 uppercase">MailPilot AI <span className="mx-1 text-wire">/</span> Network view 01</p>
                </div>
                <span className="inline-flex items-center gap-2 font-mono-ui text-[0.6rem] tracking-[0.08em] text-[#a4d3a7] uppercase"><span className="h-1.5 w-1.5 rounded-full bg-[#a4d3a7]" aria-hidden="true" /> Live</span>
              </div>

              <div className="network-stage relative mx-auto mt-3 aspect-[1.18] w-full max-w-[560px]" role="img" aria-label="Animated orbital diagram showing global email operations connected to the UAE hub">
                <div className="network-glow absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(201,162,39,0.14),rgba(201,162,39,0.05)_55%,transparent)]" aria-hidden="true" />
                <svg viewBox="0 0 500 420" className="absolute inset-0 h-full w-full" aria-hidden="true">
                  <defs>
                    <radialGradient id="core-fill"><stop offset="0" stopColor="#c9a227" stopOpacity=".22" /><stop offset="1" stopColor="#5c7b75" stopOpacity=".03" /></radialGradient>
                    <linearGradient id="route-line" x1="0" x2="1"><stop stopColor="#5c7b75" stopOpacity=".18" /><stop offset=".52" stopColor="#c9a227" stopOpacity=".8" /><stop offset="1" stopColor="#5c7b75" stopOpacity=".18" /></linearGradient>
                    <pattern id="orbital-dots" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#edebe6" fillOpacity=".13" /></pattern>
                    <clipPath id="globe-clip"><circle cx="250" cy="207" r="119" /></clipPath>
                  </defs>
                  <circle cx="250" cy="207" r="153" fill="none" stroke="#edebe6" strokeOpacity=".08" strokeWidth="1" />
                  <circle cx="250" cy="207" r="135" fill="url(#core-fill)" stroke="#edebe6" strokeOpacity=".12" strokeWidth="1" />
                  <g clipPath="url(#globe-clip)">
                    <rect x="130" y="87" width="240" height="240" fill="url(#orbital-dots)" />
                    <ellipse cx="250" cy="207" rx="53" ry="119" fill="none" stroke="#789187" strokeOpacity=".3" />
                    <ellipse cx="250" cy="207" rx="96" ry="119" fill="none" stroke="#789187" strokeOpacity=".2" />
                    <path d="M130 207h240M145 160q105 45 210 0M145 254q105-45 210 0M166 119q84 56 168 0M166 295q84-56 168 0" fill="none" stroke="#789187" strokeOpacity=".28" />
                    <path d="M137 199 Q191 107 249 207 T361 203M151 270 Q214 297 249 207 T355 149M179 119 Q218 158 249 207 T328 292" fill="none" stroke="url(#route-line)" strokeWidth="1.2" strokeDasharray="5 7" className="route-dash" />
                  </g>
                  <circle cx="250" cy="207" r="128" fill="none" stroke="#c9a227" strokeOpacity=".55" strokeWidth=".8" strokeDasharray="1 8" className="orbit-spin" />
                  <ellipse cx="250" cy="207" rx="182" ry="60" fill="none" stroke="#c9a227" strokeOpacity=".36" strokeWidth="1" transform="rotate(-24 250 207)" />
                  <ellipse cx="250" cy="207" rx="182" ry="60" fill="none" stroke="#5c7b75" strokeOpacity=".38" strokeWidth="1" transform="rotate(24 250 207)" />
                  {points.map((point, index) => <g key={`${point.x}-${point.y}`}><circle cx={point.x * 5} cy={point.y * 4.2} r={point.r * 2.6} fill={index % 3 === 0 ? "#c9a227" : "#789187"} fillOpacity=".1" /><circle cx={point.x * 5} cy={point.y * 4.2} r={point.r} fill={index % 3 === 0 ? "#e1c65c" : "#9fc5ae"} /></g>)}
                  <circle cx="250" cy="207" r="18" fill="#c9a227" fillOpacity=".09" className="core-pulse" />
                  <circle cx="250" cy="207" r="6" fill="#e0c45a" />
                  <circle cx="250" cy="207" r="2.2" fill="#fff4c2" />
                  <path d="M265 202h48" stroke="#c9a227" strokeOpacity=".6" strokeWidth=".8" />
                  <text x="318" y="199" fill="#edebe6" fontSize="10" fontFamily="monospace" letterSpacing="1">UAE HUB</text>
                  <text x="206" y="216" fill="#edebe6" fillOpacity=".62" fontSize="8" fontFamily="monospace" textAnchor="end" letterSpacing="1">MAILPILOT AI</text>
                </svg>
                <span className="absolute bottom-2 left-2 font-mono-ui text-[0.55rem] tracking-[0.12em] text-paper/35">30+ NODES <span className="mx-1 text-wire">/</span> GLOBAL ROUTES</span>
              </div>

              <div className="grid grid-cols-3 divide-x divide-paper/15 border-t border-paper/15 pt-4">
                <div className="pr-3 sm:pr-5"><p className="font-display text-3xl font-semibold leading-none text-paper sm:text-4xl">30<span className="text-signal">+</span></p><p className="mt-2 font-mono-ui text-[0.58rem] tracking-[0.1em] text-paper/55 uppercase sm:text-[0.65rem]">Sending servers</p></div>
                <div className="px-3 sm:px-5"><p className="font-display text-3xl font-semibold leading-none text-paper sm:text-4xl">150<span className="text-wire">+</span></p><p className="mt-2 font-mono-ui text-[0.58rem] tracking-[0.1em] text-paper/55 uppercase sm:text-[0.65rem]">Campaigns tracked</p></div>
                <div className="pl-3 sm:pl-5"><p className="font-display text-3xl font-semibold leading-none text-paper sm:text-4xl">UAE</p><p className="mt-2 font-mono-ui text-[0.58rem] tracking-[0.1em] text-paper/55 uppercase sm:text-[0.65rem]">Based in Dubai</p></div>
              </div>
              <figcaption id="network-caption" className="sr-only">MailPilot AI coordinates more than 30 sending servers and tracks over 150 campaigns from the UAE.</figcaption>
            </div>
          </motion.figure>
        </div>

        <div className="hero-activity mt-10 grid overflow-hidden rounded-2xl border border-paper/10 bg-console-2/45 sm:grid-cols-3">
          {hero.log.map((entry, index) => (
            <motion.div key={entry.text} initial={reduce ? undefined : { opacity: 0, y: 10 }} animate={reduce ? undefined : { opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: reduce ? 0 : 0.48 + index * 0.07 }} className={`grid grid-cols-[3.5rem_minmax(0,1fr)] gap-3 px-4 py-3 font-mono-ui text-[0.68rem] leading-relaxed sm:py-4 ${index > 0 ? "border-t border-paper/10 sm:border-l sm:border-t-0 sm:border-paper/10 sm:pl-5 lg:pl-8" : "sm:pr-5 lg:pr-8"}`}>
              <span className="text-wire">{entry.time}</span><span className="text-paper/75">{entry.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
