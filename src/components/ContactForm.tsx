"use client";

import { useState, type FormEvent } from "react";
import { getContent, type Locale } from "@/lib/i18n";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ locale = "en" }: { locale?: Locale }) {
  const { identity, ui } = getContent(locale);
  const t = ui.form;
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORM_ID) {
      const name = data.get("name");
      const email = data.get("email");
      const message = data.get("message");
      window.location.href = `mailto:${identity.email}?subject=${encodeURIComponent(
        `${t.subject} — ${name}`
      )}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${String(message ?? "")}`)}`;
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`https://formspree.io/f/${FORM_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p role="status" aria-live="polite" className="mt-6 max-w-md rounded-xl border hairline-dark bg-console-2 p-6 font-mono-ui text-sm leading-relaxed text-signal">
        {t.sent}
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-6 flex max-w-md flex-col gap-5" aria-busy={status === "sending"}>
      {!FORM_ID && (
        <p className="border-s-2 border-wire ps-4 font-mono-ui text-xs leading-relaxed text-paper/55">
        {t.mailtoNote}
        </p>
      )}
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
          {t.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          required
          className="border hairline-dark bg-console-2 px-4 py-3 font-mono-ui text-sm text-paper outline-none transition-colors focus:border-signal"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
          {t.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          dir="ltr"
          autoComplete="email"
          required
          className="border hairline-dark bg-console-2 px-4 py-3 font-mono-ui text-sm text-paper outline-none transition-colors focus:border-signal"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="border hairline-dark bg-console-2 px-4 py-3 font-mono-ui text-sm text-paper outline-none transition-colors focus:border-signal"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="self-start inline-flex min-h-12 items-center gap-4 rounded-xl border border-signal bg-signal px-6 py-3 font-mono-ui text-[0.75rem] tracking-[0.1em] text-console uppercase shadow-[0_8px_24px_rgba(201,162,39,0.1)] transition-colors hover:bg-transparent hover:text-signal disabled:opacity-50"
      >
        {status === "sending" ? t.sending : t.send}<span aria-hidden="true" className="flip-rtl">↗</span>
      </button>

      {status === "error" && (
        <p role="alert" className="font-mono-ui text-[0.75rem] text-red-400">
          {t.error} <span dir="ltr">{identity.email}</span>.
        </p>
      )}
    </form>
  );
}
