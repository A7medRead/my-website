import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { getAllLogPosts } from "@/lib/log";
import { identity } from "@/lib/content";

export const metadata: Metadata = {
  title: "Log",
  description:
    "Notes on email deliverability, operations, AI automation, and what it actually takes to build systems that run a real business.",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function LogIndexPage() {
  const posts = getAllLogPosts();

  return (
    <>
      <Header />
      <main className="bg-console px-6 pt-32 pb-24 sm:pb-32 lg:pl-24 lg:pr-10">
        <div className="mx-auto w-full max-w-[900px]">
          <Reveal>
            <span className="eyebrow text-wire">Log</span>
            <h1 className="mt-4 font-display text-display-1 font-semibold text-paper">
              Notes from the operation.
            </h1>
            <p className="measure mt-5 text-base leading-relaxed text-paper/70 sm:text-lg">
              Deliverability breakdowns, stories from building {identity.shortName.split(" ")[0]}
              &apos;s tools, and ideas on AI and operations — written as it happens, not
              polished after the fact.
            </p>
          </Reveal>

          <div className="mt-16 flex flex-col">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 0.05}>
                <Link
                  href={`/log/${post.slug}`}
                  className="group grid gap-3 border-t hairline-dark py-8 last:border-b sm:grid-cols-[9rem_minmax(0,1fr)]"
                >
                  <div className="flex flex-col gap-2">
                    <span className="font-mono-ui text-[0.7rem] tracking-[0.1em] text-signal uppercase">
                      {post.category}
                    </span>
                    <span className="font-mono-ui text-[0.72rem] text-paper/45">
                      {formatDate(post.date)}
                    </span>
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-paper transition-colors group-hover:text-signal sm:text-2xl">
                      {post.title}
                    </h2>
                    <p className="measure mt-3 text-[0.95rem] leading-relaxed text-paper/70">
                      {post.excerpt}
                    </p>
                    {post.tags.length > 0 && (
                      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1">
                        {post.tags.map((tag) => (
                          <li
                            key={tag}
                            className="font-mono-ui text-[0.68rem] tracking-[0.06em] text-wire"
                          >
                            #{tag.replace(/\s+/g, "-")}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
