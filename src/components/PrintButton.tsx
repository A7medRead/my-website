"use client";

export function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="print:hidden border border-signal bg-signal px-6 py-3 font-mono-ui text-[0.75rem] tracking-[0.1em] text-console uppercase transition-colors hover:bg-transparent hover:text-signal"
    >
      Print / Save as PDF
    </button>
  );
}
