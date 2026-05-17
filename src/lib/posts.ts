import fs from "fs";
import path from "path";

export type Post = {
  slug: string;
  file: string;
  title: string;
  category: string;
  content: string;
};

const postsDir = path.join(process.cwd(), "content/posts");

function titleFromFile(file: string) {
  return file
    .replace(/\.md$/i, "")
    .replace(/^\d{4}-\d{2}-\d{1,2}-/i, "")
    .replace(/-/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function categoryFromFile(file: string) {
  const name = file.toLowerCase();

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
      const content = fs.readFileSync(path.join(postsDir, file), "utf8");

      return {
        slug,
        file,
        title: titleFromFile(file),
        category: categoryFromFile(file),
        content,
      };
    });
}

export function getPost(slug: string) {
  return getPosts().find((post) => post.slug === slug);
}

export function getCategories() {
  const posts = getPosts();
  return Array.from(new Set(posts.map((post) => post.category)));
}
