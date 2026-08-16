"use client";

import { useEffect, useState } from "react";
import { sectionIndex } from "@/lib/content";

export function SectionIndex() {
  const [active, setActive] = useState<string>(sectionIndex[0].id);

  useEffect(() => {
    const elements = sectionIndex
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -55% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="Section index"
      className="fixed left-0 top-0 z-30 hidden h-full w-16 flex-col items-center justify-center gap-6 lg:flex"
    >
      {sectionIndex.map((s) => {
        const isActive = active === s.id;
        return (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group flex flex-col items-center gap-1"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-mono-ui text-[0.7rem] tracking-[0.1em] transition-colors ${
                isActive ? "text-signal" : "text-paper/35 group-hover:text-paper/70"
              }`}
            >
              {s.number}
            </span>
            <span
              className={`h-4 w-px transition-colors ${
                isActive ? "bg-signal" : "bg-paper/20 group-hover:bg-paper/50"
              }`}
            />
          </a>
        );
      })}
    </nav>
  );
}
