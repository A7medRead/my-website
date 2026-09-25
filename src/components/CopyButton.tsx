"use client";

import { useState } from "react";

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // clipboard unavailable — the mailto link next to this button still works
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="min-h-11 shrink-0 border border-paper/15 px-3 font-mono-ui text-[0.65rem] tracking-[0.1em] text-paper/60 uppercase transition-colors hover:border-signal/50 hover:bg-signal/10 hover:text-signal"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
