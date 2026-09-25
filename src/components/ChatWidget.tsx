"use client";

import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getContent, type Locale } from "@/lib/i18n";

type ChatMessage = { role: "user" | "assistant"; content: string };

const MAX_MESSAGE_LENGTH = 500;

export const OPEN_CHAT_EVENT = "chat-widget:open";

/** Floating visitor chat widget — answers questions from the site's own public content via
 * /api/chat. No persistence across reloads, no connection to any other system (see
 * docs decision recorded in the Madar repo: this bot must stay fully standalone). */
export function ChatWidget({ locale = "en" }: { locale?: Locale }) {
  const t = getContent(locale).ui.chat;
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight });
  }, [messages, sending]);

  // The command palette opens the chat through this event rather than a shared store.
  useEffect(() => {
    const onOpen = () => {
      setOpen(true);
      requestAnimationFrame(() => document.getElementById("chat-widget-input")?.focus());
    };
    window.addEventListener(OPEN_CHAT_EVENT, onOpen);
    return () => window.removeEventListener(OPEN_CHAT_EVENT, onOpen);
  }, []);

  function close() {
    setOpen(false);
    toggleRef.current?.focus();
  }

  async function send() {
    const trimmed = input.trim();
    if (!trimmed || sending) return;
    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: trimmed }];
    setMessages(nextMessages);
    setInput("");
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed, history: messages }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.message ?? t.genericError);
        return;
      }
      setMessages([...nextMessages, { role: "assistant", content: data.reply }]);
    } catch {
      setError(t.offline);
    } finally {
      setSending(false);
    }
  }

  return (
    <div className="fixed end-5 bottom-5 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          role="dialog"
          aria-label={t.dialogLabel}
          className="flex h-[28rem] w-[min(22rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-xl border hairline-dark bg-console-2 shadow-2xl"
          onKeyDown={(e) => {
            if (e.key === "Escape") close();
          }}
        >
          <div className="flex items-center justify-between border-b hairline-dark px-4 py-3">
            <span className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-paper/70 uppercase">
              {t.title}
            </span>
            <button
              type="button"
              onClick={close}
              aria-label={t.close}
              className="font-mono-ui text-paper/50 hover:text-signal"
            >
              ✕
            </button>
          </div>

          <div ref={listRef} aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-4 py-3">
            {messages.length === 0 && (
              <p className="text-sm text-paper/50">
                {t.empty}
              </p>
            )}
            {messages.map((m, i) => (
              <div
                key={i}
                dir="auto"
                className={
                  m.role === "user"
                    ? "ms-auto max-w-[85%] bg-signal px-3 py-2 text-sm text-console"
                    : "me-auto max-w-[85%] bg-console px-3 py-2 text-sm text-paper"
                }
              >
                {m.role === "assistant" ? (
                  <div className="prose-chat">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>{m.content}</ReactMarkdown>
                  </div>
                ) : (
                  m.content
                )}
              </div>
            ))}
            {sending && <div className="me-auto text-sm text-paper/50">{t.typing}</div>}
          </div>

          {error && (
            <p role="alert" className="px-4 pb-1 text-xs text-red-400">
              {error}
            </p>
          )}

          <div className="flex items-center gap-2 border-t hairline-dark p-3">
            <label htmlFor="chat-widget-input" className="sr-only">
              {t.inputLabel}
            </label>
            <input
              id="chat-widget-input"
              type="text"
              value={input}
              maxLength={MAX_MESSAGE_LENGTH}
              disabled={sending}
              placeholder={t.placeholder}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") void send();
              }}
              className="flex-1 border hairline-dark bg-console px-3 py-2 text-sm text-paper outline-none focus-visible:border-signal disabled:opacity-60"
            />
            <button
              type="button"
              onClick={() => void send()}
              disabled={sending || !input.trim()}
              className="bg-signal px-3 py-2 text-sm font-medium text-console disabled:opacity-50"
            >
              {t.send}
            </button>
          </div>
        </div>
      )}

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? t.close : t.open}
        className="border hairline-dark bg-signal px-4 py-3 font-mono-ui text-[0.72rem] tracking-[0.1em] text-console uppercase"
      >
        {open ? t.toggleClose : t.toggleOpen}
      </button>
    </div>
  );
}
