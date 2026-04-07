import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");
const OUTPUT_PATH = path.join(process.cwd(), "public", "articles.json");

interface ArticleInfo {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
}

function getAllArticles(): ArticleInfo[] {
  if (!fs.existsSync(CONTENT_DIR)) return [];
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
  const articles: ArticleInfo[] = [];

  for (const file of files) {
    const content = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
    const { data } = matter(content);
    if (!data.published) continue;

    const slug = file.replace(/\.mdx$/, "");
    articles.push({
      slug,
      title: data.title || "",
      description: data.description || "",
      category: data.category || "guide",
      date: data.date || "",
      tags: data.tags || [],
    });
  }

  articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  return articles;
}

const articles = getAllArticles();
fs.writeFileSync(OUTPUT_PATH, JSON.stringify(articles, null, 0));
console.log(`Generated articles.json with ${articles.length} articles`);
