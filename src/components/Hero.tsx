"use client";

import { motion, useReducedMotion } from "framer-motion";
import { hero } from "@/lib/content";

export function Hero() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.35, delayChildren: reduce ? 0 : 0.2 },
    },
  };

  const line = {
    hidden: { opacity: 0, y: 6 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center px-6 pt-24 pb-16 lg:pl-24 lg:pr-10"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <motion.div
          initial={reduce ? undefined : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2.5"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal/60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
          </span>
          <span className="eyebrow text-paper/60">{hero.status}</span>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-10 flex flex-col gap-1.5 border-l hairline-dark pl-4"
        >
          {hero.log.map((entry) => (
            <motion.div
              key={entry.text}
              variants={line}
              className="font-mono-ui text-[0.8rem] sm:text-sm"
            >
              <span className="text-wire">{entry.time}</span>{" "}
              <span className="text-paper/75">{entry.text}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.h1
          initial={reduce ? undefined : { opacity: 0, y: 14 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-display-hero font-semibold text-paper"
        >
          {hero.name}
        </motion.h1>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 1.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 font-display text-xl text-signal sm:text-2xl"
        >
          {hero.title}
        </motion.p>

        <motion.p
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 1.45, ease: [0.16, 1, 0.3, 1] }}
          className="measure mt-6 text-base leading-relaxed text-paper/70 sm:text-lg"
        >
          {hero.subhead}
        </motion.p>

        <motion.div
          initial={reduce ? undefined : { opacity: 0, y: 10 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: reduce ? 0 : 1.6, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-wrap items-center gap-6"
        >
          <a
            href={hero.ctaPrimary.href}
            className="border border-signal bg-signal px-6 py-3 font-mono-ui text-[0.75rem] tracking-[0.1em] text-console uppercase transition-colors hover:bg-transparent hover:text-signal"
          >
            {hero.ctaPrimary.label} →
          </a>
          <a
            href={hero.ctaSecondary.href}
            className="font-mono-ui text-[0.75rem] tracking-[0.1em] text-paper/70 uppercase underline decoration-paper/30 underline-offset-4 transition-colors hover:text-paper hover:decoration-signal"
          >
            {hero.ctaSecondary.label} ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
