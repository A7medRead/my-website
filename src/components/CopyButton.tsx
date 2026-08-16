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
      className="font-mono-ui text-[0.7rem] tracking-[0.1em] text-paper/45 uppercase underline decoration-paper/25 underline-offset-4 transition-colors hover:text-signal hover:decoration-signal"
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
