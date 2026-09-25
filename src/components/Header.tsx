"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { nav } from "@/lib/content";

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
      <div className="mx-auto flex min-h-16 max-w-[1600px] items-center justify-between gap-4 border-x border-paper/10 px-5 sm:px-8 lg:px-10">
        <Link
          href="/#top"
          aria-label="Ahmed Massoud — home"
          onClick={(event) => {
            if (pathname !== "/") return;
            event.preventDefault();
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
            });
          }}
          className="flex shrink-0 items-center"
        >
          <Image
            src="/ahmed-massoud-logo.svg"
            alt=""
            width={680}
            height={144}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </Link>

        <div className="hidden min-w-[190px] border-l border-paper/15 pl-6 xl:block">
          <p className="font-mono-ui text-xs tracking-[0.18em] text-paper/85 uppercase">Email Operations</p>
          <p className="mt-1 font-mono-ui text-[0.58rem] tracking-[0.12em] text-paper/45 uppercase">Automation × Impact</p>
        </div>

        <nav aria-label="Primary" className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="min-h-11 whitespace-nowrap font-mono-ui text-[0.67rem] tracking-[0.1em] text-paper/70 uppercase transition-colors hover:text-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 border-l border-paper/15 pl-5 xl:flex">
          <span className="h-2.5 w-2.5 rounded-full bg-[#9bd4a5]" aria-hidden="true" />
          <span className="font-mono-ui text-[0.58rem] leading-relaxed text-[#b8d4ba] uppercase">Systems operational<br /><span className="text-paper/40">All channels nominal</span></span>
        </div>
        <div className="hidden border-l border-paper/15 pl-5 font-mono-ui text-[0.58rem] leading-relaxed tracking-[0.08em] text-paper/55 uppercase 2xl:block">Dubai, UAE<br />Operations / live</div>

        <button
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
          className="flex min-h-11 items-center gap-2 font-mono-ui text-[0.7rem] tracking-[0.12em] text-paper/70 uppercase xl:hidden"
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
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t hairline-dark bg-console px-6 py-4 xl:hidden"
        >
          <ul className="flex flex-col divide-y hairline-dark">
            {nav.map((item, i) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex min-h-12 items-center gap-3 py-3 font-mono-ui text-sm tracking-[0.08em] text-paper/80 uppercase transition-colors hover:text-signal focus-visible:text-signal"
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
