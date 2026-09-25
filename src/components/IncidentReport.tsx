"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const dubaiTime = new Intl.DateTimeFormat("en-GB", {
  timeZone: "Asia/Dubai",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false,
});

/** 404 page, written up the way an ops team logs an incident. */
export function IncidentReport() {
  const path = usePathname();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const tick = () => setTime(dubaiTime.format(new Date()));
    const first = requestAnimationFrame(tick);
    const id = setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(first);
      clearInterval(id);
    };
  }, []);

  const rows = [
    { label: "Status", value: "Route not found", tone: "text-signal" },
    { label: "Requested", value: path ?? "—", tone: "text-paper/85 break-all" },
    { label: "Impact", value: "One visitor, briefly. Nothing else is down.", tone: "text-paper/75" },
    { label: "Likely cause", value: "An old link, or a typo in the address.", tone: "text-paper/75" },
  ];

  return (
    <main className="flex min-h-svh items-center px-6 py-24 lg:px-24">
      <div className="mx-auto w-full max-w-[760px]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-paper/15 pb-4 font-mono-ui text-[0.65rem] tracking-[0.14em] uppercase">
          <span className="flex items-center gap-2.5 text-paper/75">
            <span className="h-2 w-2 rounded-full bg-signal" aria-hidden="true" />
            Incident #404 <span className="text-wire">/</span> Severity: low
          </span>
          <span className="text-paper/45" suppressHydrationWarning>
            Logged {time ?? "--:--:--"} GST
          </span>
        </div>

        <h1 className="mt-10 font-display text-[clamp(2.6rem,7vw,5rem)] font-semibold leading-[0.92] tracking-[-0.04em] text-paper">
          This route isn&apos;t in the system.
        </h1>

        <dl className="mt-10 overflow-hidden rounded-2xl border border-paper/10 bg-console-2/50 font-mono-ui text-[0.8rem]">
          {rows.map((row) => (
            <div
              key={row.label}
              className="grid gap-1 border-b border-paper/10 px-5 py-3.5 last:border-b-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4"
            >
              <dt className="text-[0.65rem] tracking-[0.12em] text-wire uppercase sm:pt-0.5">{row.label}</dt>
              <dd className={row.tone}>{row.value}</dd>
            </div>
          ))}
        </dl>

        <p className="mt-10 font-mono-ui text-[0.65rem] tracking-[0.14em] text-wire uppercase">Resolution</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center gap-4 rounded-xl border border-signal bg-signal px-5 font-mono-ui text-xs tracking-[0.08em] text-console uppercase transition-colors hover:bg-transparent hover:text-signal"
          >
            Return to homepage <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/log"
            className="inline-flex min-h-12 items-center gap-3 rounded-xl border border-paper/20 px-5 font-mono-ui text-xs tracking-[0.08em] text-paper/80 uppercase transition-colors hover:border-signal/60 hover:text-signal"
          >
            Read the operations log
          </Link>
          <Link
            href="/#contact"
            className="inline-flex min-h-12 items-center gap-3 px-2 font-mono-ui text-xs tracking-[0.08em] text-paper/60 uppercase underline decoration-paper/25 underline-offset-4 transition-colors hover:text-paper hover:decoration-signal"
          >
            Report a broken link
          </Link>
        </div>

        <p lang="ar" dir="rtl" className="mt-12 border-t border-paper/10 pt-6 text-sm text-paper/55">
          الصفحة غير موجودة.{" "}
          <Link href="/ar" className="text-paper/80 underline decoration-signal underline-offset-4 hover:text-signal">
            العودة إلى الصفحة الرئيسية بالعربية
          </Link>
        </p>
      </div>
    </main>
  );
}
