import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  file: string;
  title: string;
  date?: string;
  category: string;
  excerpt: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content/posts");

function cleanTitle(file: string) {
  return file
    .replace(/\.md$/i, "")
    .replace(/^\d{4}-\d{2}-\d{1,2}-/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function categoryFromText(file: string, cats?: unknown) {
  const name = `${file} ${Array.isArray(cats) ? cats.join(" ") : cats || ""}`.toLowerCase();

  if (name.includes("ielts") || name.includes("english") || name.includes("grammar") || name.includes("essay") || name.includes("reading") || name.includes("vocab")) return "English & IELTS";
  if (name.includes("music") || name.includes("therapy") || name.includes("brain") || name.includes("sleep") || name.includes("trauma")) return "Music & Psychology";
  if (name.includes("electrical") || name.includes("power") || name.includes("voltage") || name.includes("transformer") || name.includes("hvdc") || name.includes("scada") || name.includes("harmonic")) return "Electrical Engineering";
  if (name.includes("hvac") || name.includes("acmv") || name.includes("refrigeration") || name.includes("thermodynamics") || name.includes("chiller")) return "HVAC / ACMV";
  if (name.includes("plumbing") || name.includes("sanitary") || name.includes("fire")) return "Building Services";
  return "Technical Notes";
}

export function getPosts(): Post[] {
  if (!fs.existsSync(postsDir)) return [];

  return fs
    .readdirSync(postsDir)
    .filter((file) => file.endsWith(".md") || file.endsWith(".MD"))
    .map((file) => {
      const slug = file.replace(/\.md$/i, "");
      const raw = fs.readFileSync(path.join(postsDir, file), "utf8");
      const parsed = matter(raw);
      const content = parsed.content.trim();
      const title = String(parsed.data.title || cleanTitle(file)).replace(/^["']|["']$/g, "");
      const category = categoryFromText(file, parsed.data.categories);
      const excerpt = content.replace(/[#>*_`-]/g, "").slice(0, 170);

      return {
        slug,
        file,
        title,
        date: parsed.data.date ? String(parsed.data.date) : undefined,
        category,
        excerpt,
        content,
      };
    })
    .sort((a, b) => b.file.localeCompare(a.file));
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export function getCategories() {
  return Array.from(new Set(getPosts().map((post) => post.category)));
}
