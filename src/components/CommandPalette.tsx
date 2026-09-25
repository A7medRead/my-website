"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { OPEN_CHAT_EVENT } from "@/components/ChatWidget";
import { getContent, homePath, type Locale } from "@/lib/i18n";

const OPEN_EVENT = "command-palette:open";

/** Opens the palette from anywhere (the header button uses this). */
export function openCommandPalette() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

type Item = {
  id: string;
  group: "sections" | "pages" | "posts" | "actions";
  label: string;
  hint?: string;
  /** Extra text that matches a search but isn't shown. */
  keywords?: string;
  run: () => void;
};

export function CommandPalette({
  locale = "en",
  posts,
}: {
  locale?: Locale;
  posts: { slug: string; title: string; excerpt: string }[];
}) {
  const { sectionIndex, identity, ui } = getContent(locale);
  const t = ui.palette;
  const home = homePath(locale);
  const router = useRouter();
  const pathname = usePathname();
  const reduce = useReducedMotion();

  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const [notice, setNotice] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const show = () => {
      returnFocusRef.current = document.activeElement as HTMLElement | null;
      setQuery("");
      setActive(0);
      setNotice(null);
      setOpen(true);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (open) setOpen(false);
        else show();
      }
    };
    window.addEventListener(OPEN_EVENT, show);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener(OPEN_EVENT, show);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => inputRef.current?.focus());
    const returnTo = returnFocusRef.current;
    return () => {
      document.body.style.overflow = previousOverflow;
      returnTo?.focus?.();
    };
  }, [open]);

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      setOpen(false);
      const [path, hash] = href.split("#");
      if (hash && (path || "/") === pathname) {
        document.getElementById(hash)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth" });
        history.replaceState(null, "", `#${hash}`);
      } else {
        router.push(href);
      }
    };

    return [
      ...sectionIndex.map((s) => ({
        id: `section-${s.id}`,
        group: "sections" as const,
        label: s.label,
        hint: s.number,
        run: go(`${home}#${s.id}`),
      })),
      ...t.pages.map((p) => ({ id: `page-${p.href}`, group: "pages" as const, label: p.label, run: go(p.href) })),
      ...posts.map((p) => ({
        id: `post-${p.slug}`,
        group: "posts" as const,
        label: p.title,
        keywords: p.excerpt,
        run: go(`/log/${p.slug}`),
      })),
      {
        id: "action-email",
        group: "actions" as const,
        label: t.actions.copyEmail,
        hint: identity.email,
        run: () => {
          navigator.clipboard
            ?.writeText(identity.email)
            .then(() => {
              setNotice(t.actions.copied);
              setTimeout(() => setOpen(false), 900);
            })
            .catch(() => {
              window.location.href = `mailto:${identity.email}`;
            });
        },
      },
      {
        id: "action-linkedin",
        group: "actions" as const,
        label: t.actions.linkedin,
        run: () => {
          setOpen(false);
          window.open(identity.linkedin, "_blank", "noopener,noreferrer");
        },
      },
      {
        id: "action-chat",
        group: "actions" as const,
        label: t.actions.chat,
        run: () => {
          setOpen(false);
          window.dispatchEvent(new Event(OPEN_CHAT_EVENT));
        },
      },
      {
        id: "action-language",
        group: "actions" as const,
        label: t.actions.language,
        hint: ui.header.languageSwitch.label,
        run: () => {
          setOpen(false);
          window.location.href = ui.header.languageSwitch.href;
        },
      },
    ];
  }, [sectionIndex, t, posts, identity, ui.header.languageSwitch, home, pathname, router, reduce]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((item) => `${item.label} ${item.hint ?? ""} ${item.keywords ?? ""}`.toLowerCase().includes(q));
  }, [items, query]);

  const activeIndex = Math.min(active, Math.max(filtered.length - 1, 0));

  useEffect(() => {
    listRef.current
      ?.querySelector(`[data-index="${activeIndex}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [activeIndex]);

  const onInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((i) => (filtered.length ? (Math.min(i, filtered.length - 1) + 1) % filtered.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((i) =>
        filtered.length ? (Math.min(i, filtered.length - 1) - 1 + filtered.length) % filtered.length : 0,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[activeIndex]?.run();
    } else if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "Tab") {
      // Single-field dialog: keep focus on the search box.
      e.preventDefault();
    }
  };

  let lastGroup: Item["group"] | null = null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-start justify-center bg-console/80 px-4 pt-[12vh] backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15 }}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={t.dialogLabel}
            className="flex max-h-[70vh] w-full max-w-[36rem] flex-col overflow-hidden rounded-2xl border border-paper/15 bg-console-2 shadow-[0_30px_90px_rgba(0,0,0,0.5)]"
            initial={reduce ? undefined : { opacity: 0, y: -8, scale: 0.985 }}
            animate={reduce ? undefined : { opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -8, scale: 0.985 }}
            transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center gap-3 border-b border-paper/10 px-4">
              <span aria-hidden="true" className="font-mono-ui text-sm text-signal">›</span>
              <input
                ref={inputRef}
                type="text"
                role="combobox"
                aria-expanded="true"
                aria-controls="command-palette-list"
                aria-activedescendant={filtered[activeIndex] ? `cmd-${filtered[activeIndex].id}` : undefined}
                aria-label={t.placeholder}
                placeholder={t.placeholder}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onInputKeyDown}
                className="min-h-14 flex-1 bg-transparent text-base text-paper placeholder:text-paper/35 outline-none focus-visible:outline-none"
                style={{ borderRadius: 0, outline: "none" }}
              />
              <kbd className="hidden rounded border border-paper/20 px-1.5 py-0.5 font-mono-ui text-[0.6rem] text-paper/45 sm:inline">Esc</kbd>
            </div>

            <ul id="command-palette-list" ref={listRef} role="listbox" aria-label={t.dialogLabel} className="flex-1 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-8 text-center text-sm text-paper/50" role="presentation">
                  {t.empty}
                </li>
              )}
              {filtered.map((item, index) => {
                const heading = item.group !== lastGroup ? t.groups[item.group] : null;
                lastGroup = item.group;
                const selected = index === activeIndex;
                return (
                  <li key={item.id} role="presentation">
                    {heading && (
                      <p
                        role="presentation"
                        className="px-3 pb-1.5 pt-3 font-mono-ui text-[0.6rem] tracking-[0.14em] text-wire uppercase"
                      >
                        {heading}
                      </p>
                    )}
                    <div
                      id={`cmd-${item.id}`}
                      role="option"
                      aria-selected={selected}
                      data-index={index}
                      onMouseMove={() => setActive(index)}
                      onClick={() => item.run()}
                      className={`flex min-h-11 cursor-pointer items-center justify-between gap-4 rounded-lg px-3 py-2 text-sm transition-colors ${
                        selected ? "bg-signal/15 text-paper" : "text-paper/75"
                      }`}
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <span
                          aria-hidden="true"
                          className={`h-4 w-0.5 shrink-0 rounded-full ${selected ? "bg-signal" : "bg-transparent"}`}
                        />
                        <span className="truncate" dir="auto">{item.label}</span>
                      </span>
                      {item.hint && (
                        <span className="shrink-0 font-mono-ui text-[0.65rem] text-paper/40" dir="ltr">
                          {item.hint}
                        </span>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center justify-between gap-3 border-t border-paper/10 px-4 py-2.5 font-mono-ui text-[0.6rem] text-paper/40">
              <span>{t.hint}</span>
              <span role="status" aria-live="polite" className="text-signal">
                {notice}
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
