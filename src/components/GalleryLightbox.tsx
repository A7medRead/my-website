"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import type { GalleryItem } from "@/lib/gallery";

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);
  const showPrev = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length)),
    [items.length]
  );
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length]
  );

  useEffect(() => {
    if (activeIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-6 sm:grid-cols-2">
        {items.map((item, i) => (
          <button
            key={item.slug}
            type="button"
            onClick={() => setActiveIndex(i)}
            className="group text-left"
          >
            <div className="relative aspect-[16/10] overflow-hidden border hairline-dark bg-report-2/60">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                sizes="(min-width: 640px) 50vw, 100vw"
              />
            </div>
            <div className="mt-3 flex items-baseline justify-between gap-4">
              <h2 className="font-display text-lg font-semibold text-paper transition-colors group-hover:text-signal">
                {item.title}
              </h2>
              <span className="shrink-0 font-mono-ui text-[0.7rem] tracking-[0.08em] text-wire uppercase">
                {item.project}
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          className="fixed inset-0 z-50 flex flex-col bg-console/97 backdrop-blur-sm"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-6 top-6 z-10 font-mono-ui text-[0.75rem] tracking-[0.1em] text-paper/70 uppercase transition-colors hover:text-signal"
          >
            Close ✕
          </button>

          <div
            className="flex flex-1 flex-col items-center justify-center gap-6 overflow-y-auto px-6 py-20 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] w-full max-w-[900px] shrink-0 border hairline-dark">
              <Image
                src={active.image}
                alt={active.title}
                fill
                className="object-cover object-top"
                sizes="900px"
                priority
              />
            </div>

            <div className="w-full max-w-[700px]">
              <div className="flex items-baseline justify-between gap-4 border-t hairline-dark pt-4">
                <h2 className="font-display text-xl font-semibold text-paper">
                  {active.title}
                </h2>
                <span className="shrink-0 font-mono-ui text-[0.7rem] tracking-[0.08em] text-wire uppercase">
                  {active.project}
                </span>
              </div>
              <div className="prose-log prose-log-dark mt-4">
                <ReactMarkdown>{active.description}</ReactMarkdown>
              </div>
            </div>
          </div>

          {items.length > 1 && (
            <div className="absolute inset-x-0 bottom-8 flex items-center justify-center gap-8">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showPrev();
                }}
                aria-label="Previous"
                className="font-mono-ui text-sm text-paper/60 transition-colors hover:text-signal"
              >
                ← Prev
              </button>
              <span className="font-mono-ui text-[0.7rem] text-paper/40">
                {activeIndex! + 1} / {items.length}
              </span>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  showNext();
                }}
                aria-label="Next"
                className="font-mono-ui text-sm text-paper/60 transition-colors hover:text-signal"
              >
                Next →
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}
