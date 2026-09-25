import fs from "fs";
import path from "path";
import matter from "gray-matter";

const GALLERY_DIR = path.join(process.cwd(), "content/gallery");

export type GalleryItem = {
  slug: string;
  title: string;
  image: string;
  project: string;
  order: number;
  summary: string;
  ratio: string;
  description: string;
};

function readSlugs(): string[] {
  if (!fs.existsSync(GALLERY_DIR)) return [];
  return fs
    .readdirSync(GALLERY_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getAllGalleryItems(): GalleryItem[] {
  return readSlugs()
    .map((slug) => {
      const raw = fs.readFileSync(path.join(GALLERY_DIR, `${slug}.md`), "utf8");
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title as string,
        image: data.image as string,
        project: (data.project as string) ?? "",
        order: (data.order as number) ?? 0,
        summary: (data.summary as string) ?? "",
        ratio: (data.ratio as string) ?? "16 / 10",
        description: content.trim(),
      };
    })
    .sort((a, b) => a.order - b.order);
}
