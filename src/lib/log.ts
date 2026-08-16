import fs from "fs";
import path from "path";
import matter from "gray-matter";

const LOG_DIR = path.join(process.cwd(), "content/log");

export type LogCategory = "Technical" | "Field Notes" | "Ideas";

export type LogPostMeta = {
  slug: string;
  title: string;
  date: string;
  category: LogCategory;
  excerpt: string;
  tags: string[];
};

export type LogPost = LogPostMeta & { content: string };

function readSlugs(): string[] {
  if (!fs.existsSync(LOG_DIR)) return [];
  return fs
    .readdirSync(LOG_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllLogPosts(): LogPostMeta[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(LOG_DIR, `${slug}.md`), "utf8");
      const { data } = matter(raw);
      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        category: data.category as LogCategory,
        excerpt: data.excerpt as string,
        tags: (data.tags as string[]) ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getLogPost(slug: string): LogPost | null {
  const file = path.join(LOG_DIR, `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, "utf8");
  const { data, content } = matter(raw);
  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    category: data.category as LogCategory,
    excerpt: data.excerpt as string,
    tags: (data.tags as string[]) ?? [],
    content,
  };
}
