import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { cityGuides } from "../src/lib/cityGuides";
import { getSeoDestinationArticles } from "../src/lib/seoDestinationGuides";

const CONTENT_DIR = path.join(process.cwd(), "content");
const OUTPUT_PATH = path.join(process.cwd(), "public", "sitemap.xml");
const BASE_URL = "https://vacances-bons-plans.fr";

const today = new Date().toISOString().split("T")[0];

const staticPages = [
  { url: "", priority: "1.0", changefreq: "daily" },
  { url: "/destinations", priority: "0.8", changefreq: "weekly" },
  { url: "/mobil-home", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/var", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/vendee", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/herault", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/landes", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/charente-maritime", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/finistere", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/ardeche", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/dordogne", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/jura", priority: "0.9", changefreq: "weekly" },
  { url: "/mobil-home/manche", priority: "0.9", changefreq: "weekly" },
  ...Object.values(cityGuides).map((city) => ({
    url: `/mobil-home/${city.departmentSlug}/${city.slug}`,
    priority: "0.8",
    changefreq: "weekly",
  })),
  { url: "/bons-plans", priority: "0.8", changefreq: "weekly" },
  { url: "/guides", priority: "0.8", changefreq: "weekly" },
  { url: "/comparatifs", priority: "0.8", changefreq: "weekly" },
  { url: "/mentions-legales", priority: "0.3", changefreq: "monthly" },
  { url: "/affiliation-amazon", priority: "0.3", changefreq: "monthly" },
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

for (const article of getSeoDestinationArticles()) {
  articleEntries.push(`  <url>
    <loc>${BASE_URL}/article/${article.slug}</loc>
    <lastmod>${article.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.7</priority>
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
