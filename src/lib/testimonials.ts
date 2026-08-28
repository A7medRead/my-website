import fs from "fs";
import path from "path";
import matter from "gray-matter";

const TESTIMONIALS_DIR = path.join(process.cwd(), "content/testimonials");

export type Testimonial = {
  slug: string;
  name: string;
  role: string;
  quote: string;
  order: number;
};

function readSlugs(): string[] {
  if (!fs.existsSync(TESTIMONIALS_DIR)) return [];
  return fs
    .readdirSync(TESTIMONIALS_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllTestimonials(): Testimonial[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(TESTIMONIALS_DIR, `${slug}.md`), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        name: data.name as string,
        role: (data.role as string) ?? "",
        quote: content.trim(),
        order: (data.order as number) ?? 0,
      };
    })
    .sort((a, b) => a.order - b.order);
}
