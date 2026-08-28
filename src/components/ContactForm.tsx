"use client";

import { useState, type FormEvent } from "react";
import { identity } from "@/lib/content";

const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID;

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    if (!FORM_ID) {
      const name = data.get("name");
      const message = data.get("message");
      window.location.href = `mailto:${identity.email}?subject=${encodeURIComponent(
        `Portfolio contact — ${name}`
      )}&body=${encodeURIComponent(String(message ?? ""))}`;
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
      <p className="mt-12 max-w-md border hairline-dark bg-console-2 p-6 font-mono-ui text-sm leading-relaxed text-signal">
        Message sent — thanks. I'll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-12 flex max-w-md flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="name" className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border hairline-dark bg-console-2 px-4 py-3 font-mono-ui text-sm text-paper outline-none transition-colors focus:border-signal"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border hairline-dark bg-console-2 px-4 py-3 font-mono-ui text-sm text-paper outline-none transition-colors focus:border-signal"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-wire uppercase">
          Message
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
        className="self-start border border-signal bg-signal px-6 py-3 font-mono-ui text-[0.75rem] tracking-[0.1em] text-console uppercase transition-colors hover:bg-transparent hover:text-signal disabled:opacity-50"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>

      {status === "error" && (
        <p className="font-mono-ui text-[0.75rem] text-red-400">
          Something went wrong — email me directly at {identity.email}.
        </p>
      )}
    </form>
  );
}
