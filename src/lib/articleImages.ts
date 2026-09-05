import type { Article } from "@/lib/articles";

type ArticleLike = Pick<Article, "slug" | "category" | "tags" | "imageAlt" | "title">;

const VISUALS = {
  mobilHome: "/images/editorial/mobil-home-mediterranee.webp",
  mediterranean: "/images/editorial/destination-mediterranee.webp",
  atlantic: "/images/editorial/cote-atlantique.webp",
  luggage: "/images/editorial/bagages-voyage.webp",
  outdoors: "/images/editorial/camping-plein-air.webp",
  family: "/images/editorial/voyage-famille.webp",
} as const;

export function getArticleImage(article: ArticleLike) {
  const searchable = `${article.slug} ${article.category} ${article.tags.join(" ")}`.toLowerCase();

  if (/(mobil-home|mobil home|camping-car|campings-frejus|auvent|climatisation-mobil)/.test(searchable)) {
    return VISUALS.mobilHome;
  }
  if (/(bretagne|vendee|atlantique|finistere|charente|normandie)/.test(searchable)) {
    return VISUALS.atlantic;
  }
  if (/(corse|crete|croatie|albanie|italie|soleil|mediterranee|plage)/.test(searchable)) {
    return VISUALS.mediterranean;
  }
  if (/(valise|bagage|trousse|adaptateur|chargeur|batterie|cadenas|pochette|organisateur)/.test(searchable)) {
    return VISUALS.luggage;
  }
  if (/(randonnee|bivouac|tente|couchage|hamac|frontale|gourde|jumelles|k-way)/.test(searchable)) {
    return VISUALS.outdoors;
  }
  return VISUALS.family;
}

export function getArticleImageAlt(article: ArticleLike) {
  return article.imageAlt || `Illustration du guide : ${article.title}`;
}
