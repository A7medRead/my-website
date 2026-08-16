import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllLogPosts, getLogPost } from "@/lib/log";

export function generateStaticParams() {
  return getAllLogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getLogPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      title: post.title,
      description: post.excerpt,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default async function LogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getLogPost(slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="bg-report px-6 pt-32 pb-24 text-ink sm:pb-32 lg:pl-24 lg:pr-10">
        <div className="mx-auto w-full max-w-[760px]">
          <Link
            href="/log"
            className="font-mono-ui text-[0.72rem] tracking-[0.1em] text-ink/55 uppercase transition-colors hover:text-signal"
          >
            ← Log
          </Link>

          <div className="mt-8 flex items-center gap-4">
            <span className="font-mono-ui text-[0.72rem] tracking-[0.16em] text-signal uppercase">
              {post.category}
            </span>
            <span className="font-mono-ui text-[0.72rem] text-ink/45">
              {formatDate(post.date)}
            </span>
          </div>

          <h1 className="mt-4 font-display text-display-1 font-semibold text-ink">
            {post.title}
          </h1>

          {post.tags.length > 0 && (
            <ul className="mt-6 flex flex-wrap gap-x-4 gap-y-1 border-t hairline-light pt-6">
              {post.tags.map((tag) => (
                <li
                  key={tag}
                  className="font-mono-ui text-[0.7rem] tracking-[0.06em] text-ink/45"
                >
                  #{tag.replace(/\s+/g, "-")}
                </li>
              ))}
            </ul>
          )}

          <article className="prose-log mt-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{post.content}</ReactMarkdown>
          </article>
        </div>
      </main>
      <Footer />
    </>
  );
}
