import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata = {
  title: "Bons Plans Voyage — Sejours pas cher | Vacances Bons Plans",
  description:
    "Les meilleurs bons plans voyage du moment. Sejours tout compris, vols pas cher, promotions Cdiscount, Havas, Auchan et Leclerc Voyages.",
};

export default function BonsPlansPage() {
  const articles = getArticlesByCategory("bon-plan");

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-4">
          Bons Plans Voyage
        </h1>
        <p className="text-lg text-slate-500 mb-10">
          Les meilleures offres du moment : sejours tout compris, promotions et
          ventes flash.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <span className="inline-block text-xs font-bold text-sun-600 bg-sun-50 px-2 py-0.5 rounded mb-2">
                BON PLAN
              </span>
              <h2 className="font-bold text-slate-900 mb-2 group-hover:text-ocean-600 transition-colors line-clamp-2">
                {article.title}
              </h2>
              <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                {article.description}
              </p>
              <span className="text-xs text-slate-400">{article.date}</span>
            </Link>
          ))}
          {articles.length === 0 && (
            <p className="text-slate-400 col-span-full">
              Articles a venir...
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
