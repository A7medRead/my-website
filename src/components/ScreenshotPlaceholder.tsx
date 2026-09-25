"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

export function ScreenshotPlaceholder({
  caption,
  ratio,
  index,
  src,
  labels = { enlarge: "Enlarge screenshot", openFull: "Open full-size screenshot", badge: "Open screenshot", close: "Close screenshot" },
}: {
  caption: string;
  ratio: string;
  index: number;
  src?: string;
  labels?: { enlarge: string; openFull: string; badge: string; close: string };
}) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const trigger = triggerRef.current;
    const previousOverflow = document.body.style.overflow;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
      if (event.key === "Tab") {
        event.preventDefault();
        closeRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, [open]);

  return (
    <figure className="group relative">
      <div
        className="relative overflow-hidden rounded-2xl border hairline-light bg-[#121514] shadow-[0_18px_50px_rgba(16,20,17,0.18)]"
        style={{ aspectRatio: ratio, borderStyle: src ? "solid" : "dashed" }}
      >
        {src ? (
          <>
            <button
              ref={triggerRef}
              type="button"
              onClick={() => setOpen(true)}
              aria-label={`${labels.enlarge}: ${caption}`}
              aria-haspopup="dialog"
              className="absolute inset-0 z-10 min-h-11 w-full cursor-zoom-in rounded-[inherit] focus-visible:outline-2 focus-visible:outline-offset-[-5px] focus-visible:outline-signal"
            >
              <span className="sr-only">{labels.openFull}</span>
            </button>
            <Image
              src={src}
              alt=""
              fill
              className="object-contain object-center transition-transform duration-500 group-hover:scale-[1.015]"
              sizes="(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
            />
            <span className="pointer-events-none absolute bottom-3 end-3 z-[2] rounded-full border border-paper/20 bg-console/85 px-3 py-1.5 font-mono-ui text-[0.62rem] tracking-[0.08em] text-paper/80 uppercase opacity-0 backdrop-blur transition-opacity group-hover:opacity-100 group-focus-within:opacity-100">
              {labels.badge} <span aria-hidden="true" className="flip-rtl">↗</span>
            </span>
          </>
        ) : (
          <>
            <span className="absolute start-0 top-0 h-3 w-3 border-s border-t border-ink/40" />
            <span className="absolute end-0 top-0 h-3 w-3 border-e border-t border-ink/40" />
            <span className="absolute bottom-0 start-0 h-3 w-3 border-b border-s border-ink/40" />
            <span className="absolute bottom-0 end-0 h-3 w-3 border-b border-e border-ink/40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 px-6 text-center">
              <span className="font-mono-ui text-[0.7rem] tracking-[0.14em] text-ink/50 uppercase">
                Fig. 0{index} — image pending
              </span>
              <span className="font-mono-ui text-[0.65rem] text-ink/35">
                screenshot to be added
              </span>
            </div>
          </>
        )}
      </div>
      <figcaption className="mt-3 flex items-center justify-between gap-4 font-mono-ui text-[0.68rem] tracking-[0.06em] text-ink/65">
        <span>{caption}</span>
        {src && <span aria-hidden="true" className="shrink-0 text-ink/45">FIG. 0{index}</span>}
      </figcaption>

      {open && src && createPortal(
        <AnimatePresence>
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${labels.openFull}: ${caption}`}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-console/95 p-4 backdrop-blur-md sm:p-8"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setOpen(false);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              className="flex max-h-full w-full max-w-[1400px] flex-col overflow-hidden rounded-2xl border hairline-dark bg-console-2 shadow-2xl"
              initial={{ opacity: 0, y: 12, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.985 }}
              transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex shrink-0 items-center justify-between gap-4 border-b hairline-dark px-4 py-3 sm:px-6">
                <div className="min-w-0">
                  <p className="font-mono-ui text-[0.58rem] tracking-[0.14em] text-wire uppercase">MailPilot AI / project capture</p>
                  <p className="mt-1 truncate font-display text-base text-paper">{caption}</p>
                </div>
                <button
                  ref={closeRef}
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-lg border hairline-dark font-mono-ui text-sm text-paper/75 transition-colors hover:border-signal/50 hover:text-signal focus-visible:outline-signal"
                  aria-label={labels.close}
                >
                  ×
                </button>
              </div>
              <div className="min-h-0 flex-1 overflow-auto bg-[#101210] p-2 sm:p-5">
                <div className="relative mx-auto w-full max-w-[1250px]" style={{ aspectRatio: ratio }}>
                  <Image
                    src={src}
                    alt={caption}
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="(min-width: 1400px) 1250px, 100vw"
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </figure>
  );
}
