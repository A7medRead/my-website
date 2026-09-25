"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { sectionIndex } from "@/lib/content";

export function SectionIndex() {
  const [active, setActive] = useState<string>(sectionIndex[0].id);

  useEffect(() => {
    let frame = 0;
    const updateActive = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.innerHeight * 0.35;
        let current: string = sectionIndex[0].id;
        for (const section of sectionIndex) {
          const element = document.getElementById(section.id);
          if (element && element.getBoundingClientRect().top <= marker) {
            current = section.id;
          } else if (element) {
            break;
          }
        }
        setActive(current);
      });
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="section-index-rail fixed left-0 top-0 z-30 hidden h-full w-16 flex-col items-center justify-center gap-6 lg:flex"
    >
      {sectionIndex.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative z-[1] flex min-h-11 min-w-11 flex-col items-center justify-center gap-1 bg-console"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-mono-ui text-[0.7rem] tracking-[0.1em] transition-colors ${
                isActive ? "text-signal" : "text-paper/35 group-hover:text-paper/70"
              }`}
            >
              {s.number}
            </span>
            <span className="relative h-4 w-px bg-paper/20 group-hover:bg-paper/50">
              {isActive && (
                <motion.span
                  layoutId="section-index-active"
                  className="absolute inset-0 bg-signal"
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                />
              )}
            </span>
          </a>
        );
      })}
    </nav>
  );
}
