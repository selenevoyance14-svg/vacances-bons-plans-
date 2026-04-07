import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_DIR = path.join(process.cwd(), "content");
const OUTPUT_PATH = path.join(process.cwd(), "public", "sitemap.xml");
const BASE_URL = "https://vacances-bons-plans.fr";

const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { url: "", priority: "1.0", changefreq: "daily" },
  { url: "/destinations", priority: "0.8", changefreq: "weekly" },
  { url: "/bons-plans", priority: "0.8", changefreq: "weekly" },
  { url: "/guides", priority: "0.8", changefreq: "weekly" },
  { url: "/comparatifs", priority: "0.8", changefreq: "weekly" },
  { url: "/mentions-legales", priority: "0.3", changefreq: "monthly" },
  { url: "/confidentialite", priority: "0.3", changefreq: "monthly" },
];

const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".mdx"));
const articleEntries: string[] = [];

for (const file of files) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR, file), "utf-8");
  const { data } = matter(raw);
  if (!data.published) continue;
  const slug = file.replace(/\.mdx$/, "");
  const date = data.date || today;
  articleEntries.push(`  <url>
    <loc>${BASE_URL}/article/${slug}</loc>
    <lastmod>${date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${data.featured ? "0.9" : "0.7"}</priority>
  </url>`);
}

const staticEntries = staticPages.map(
  (p) => `  <url>
    <loc>${BASE_URL}${p.url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
);

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries.join("\n")}
${articleEntries.join("\n")}
</urlset>`;

fs.writeFileSync(OUTPUT_PATH, sitemap);
console.log(
  `Generated sitemap.xml with ${staticPages.length + articleEntries.length} URLs`
);
