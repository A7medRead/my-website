"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import ReactMarkdown from "react-markdown";
import { AnimatePresence, motion } from "framer-motion";
import type { GalleryItem } from "@/lib/gallery";

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const triggerRefs = useRef<HTMLButtonElement[]>([]);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

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
    const activeTrigger = triggerRefs.current[activeIndex];
    const previousOverflow = document.body.style.overflow;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Tab") {
        const controls = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>("button:not([disabled])") ?? []);
        const first = controls[0];
        const last = controls[controls.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      activeTrigger?.focus();
    };
  }, [activeIndex, close, showPrev, showNext]);

  const active = activeIndex === null ? null : items[activeIndex];

  return (
    <>
      <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2">
        {items.map((item, i) => (
          <button
            key={item.slug}
            ref={(element) => {
              if (element) triggerRefs.current[i] = element;
            }}
            type="button"
            onClick={() => setActiveIndex(i)}
            aria-haspopup="dialog"
            aria-label={`Open screenshot: ${item.title}`}
            className={`group min-h-11 rounded-2xl text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal ${i === 0 ? "sm:col-span-2" : ""}`}
          >
            <div className="mb-4 flex min-h-[6.5rem] items-start justify-between gap-4 text-left">
              <div>
                <h2 className="font-display text-lg font-semibold text-paper transition-colors group-hover:text-signal">
                  {item.title}
                </h2>
                <p className="mt-1 line-clamp-2 max-w-prose text-sm leading-relaxed text-paper/65">
                  {item.summary}
                </p>
              </div>
              <span className="shrink-0 pt-1 font-mono-ui text-[0.7rem] tracking-[0.08em] text-wire uppercase">
                {item.project}
              </span>
            </div>
            <div className="relative overflow-hidden rounded-2xl border hairline-dark bg-report-2/60" style={{ aspectRatio: item.ratio }}>
              <Image
                src={item.image}
                alt={`${item.title}: ${item.summary}`}
                fill
                className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.015]"
                sizes={i === 0 ? "(min-width: 640px) 90vw, 100vw" : "(min-width: 640px) 45vw, 100vw"}
              />
              <span className="pointer-events-none absolute bottom-3 right-3 rounded-full border border-paper/20 bg-console/80 px-3 py-1.5 font-mono-ui text-[0.62rem] tracking-[0.08em] text-paper/80 uppercase opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                Open screenshot ↗
              </span>
            </div>
          </button>
        ))}
      </div>

      {active && createPortal(
        <AnimatePresence>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={active.title}
            ref={dialogRef}
            className="fixed inset-0 z-50 flex items-center justify-center bg-console/90 p-4 backdrop-blur-sm sm:p-10"
            onClick={close}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
          <motion.div
            className="flex max-h-full w-full max-w-[1120px] flex-col overflow-hidden rounded-2xl border hairline-dark bg-console-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex shrink-0 items-center justify-between border-b hairline-dark px-5 py-4 sm:px-8">
              <span className="font-mono-ui text-[0.7rem] tracking-[0.06em] text-paper/40">
                {items.length > 1 ? `${activeIndex! + 1} / ${items.length}` : active.project}
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={close}
                aria-label="Close"
                className="flex min-h-11 min-w-11 items-center justify-center rounded-lg border hairline-dark px-3 font-mono-ui text-[0.72rem] tracking-[0.1em] text-paper/70 uppercase transition-colors hover:text-signal focus-visible:outline-signal"
              >
                Close ✕
              </button>
            </div>

            <div className="overflow-y-auto px-5 py-6 sm:px-8 sm:py-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.slug}
                  className="relative w-full rounded-lg border hairline-dark bg-console" style={{ aspectRatio: active.ratio }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    src={active.image}
                    alt={`${active.title}: ${active.summary}`}
                    fill
                    className="object-contain object-center"
                    sizes="860px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              <div className="mt-7">
                <div className="flex items-baseline justify-between gap-4">
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
              <div className="flex shrink-0 items-center justify-between border-t hairline-dark px-5 py-4 sm:px-8">
                <button
                  type="button"
                  onClick={showPrev}
                  aria-label="Previous"
                  className="min-h-11 min-w-16 rounded-lg font-mono-ui text-[0.75rem] tracking-[0.06em] text-paper/60 uppercase transition-colors hover:text-signal focus-visible:outline-signal"
                >
                  ← Prev
                </button>
                <button
                  type="button"
                  onClick={showNext}
                  aria-label="Next"
                  className="min-h-11 min-w-16 rounded-lg font-mono-ui text-[0.75rem] tracking-[0.06em] text-paper/60 uppercase transition-colors hover:text-signal focus-visible:outline-signal"
                >
                  Next →
                </button>
              </div>
            )}
          </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
