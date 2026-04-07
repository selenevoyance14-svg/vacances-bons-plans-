import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDir = path.join(process.cwd(), "content");

export interface Article {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt: string;
  published: boolean;
  featured: boolean;
  seoTitle?: string;
  seoDescription?: string;
  content: string;
}

export function getArticles(): Article[] {
  if (!fs.existsSync(contentDir)) return [];

  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));

  const articles = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const { data, content } = matter(raw);

      if (!data.published) return null;

      return {
        slug: file.replace(".mdx", ""),
        title: data.title || "",
        description: data.description || "",
        date: data.date || "",
        category: data.category || "guide",
        tags: data.tags || [],
        image: data.image || "",
        imageAlt: data.imageAlt || "",
        published: data.published ?? true,
        featured: data.featured ?? false,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        content,
      } as Article;
    })
    .filter(Boolean) as Article[];

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(category: string): Article[] {
  return getArticles().filter((a) => a.category === category);
}
