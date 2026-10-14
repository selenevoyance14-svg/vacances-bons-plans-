import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://vacances-bons-plans.fr/sitemap.xml",
    host: "https://vacances-bons-plans.fr",
  };
}
