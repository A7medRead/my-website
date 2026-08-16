import { identity } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-console px-6 py-10 lg:pl-24 lg:pr-10">
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-start justify-between gap-4 border-t hairline-dark pt-8 sm:flex-row sm:items-center">
        <span className="font-mono-ui text-[0.72rem] tracking-[0.08em] text-paper/40">
          © {year} {identity.name} — {identity.location}
        </span>
        <a
          href="#top"
          className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-paper/40 uppercase transition-colors hover:text-signal"
        >
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
