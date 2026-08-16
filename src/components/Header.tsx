"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { identity, nav } from "@/lib/content";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        scrolled || open || !isHome
          ? "bg-console/90 backdrop-blur-sm border-b hairline-dark"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 lg:pl-24 lg:pr-10">
        <a href="/#top" className="flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 64 64"
            aria-hidden="true"
            className="shrink-0"
          >
            <polyline
              points="15,13 32,25 15,37"
              fill="none"
              stroke="currentColor"
              strokeWidth="8"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-signal"
            />
            <rect x="15" y="45" width="17" height="6" className="fill-signal" />
          </svg>
          <span className="font-display text-lg font-semibold tracking-tight text-paper">
            {identity.mark}
            <span className="text-signal">.</span>
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap font-mono-ui text-[0.72rem] tracking-[0.12em] text-paper/60 uppercase transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2 font-mono-ui text-[0.7rem] tracking-[0.12em] text-paper/70 uppercase lg:hidden"
        >
          {open ? "Close" : "Menu"}
          <span className="flex h-4 w-5 flex-col justify-between">
            <span
              className={`h-px w-full bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`h-px w-full bg-current transition-opacity ${open ? "opacity-0" : ""}`}
            />
            <span
              className={`h-px w-full bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </span>
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary mobile"
          className="border-t hairline-dark bg-console px-6 py-4 lg:hidden"
        >
          <ul className="flex flex-col divide-y hairline-dark">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-3 py-3 font-mono-ui text-sm tracking-[0.08em] text-paper/80 uppercase transition-colors hover:text-signal"
                >
                  <span className="text-wire">0{i + 1}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
