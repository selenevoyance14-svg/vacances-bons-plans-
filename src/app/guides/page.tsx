import Link from "next/link";
import { getArticlesByCategory } from "@/lib/articles";

export const metadata = {
  title: "Guides Voyage — Conseils et astuces | Vacances Bons Plans",
  description:
    "Guides pratiques pour voyager malin : preparer son voyage, bagages, assurances, budget, accessoires indispensables.",
};

export default function GuidesPage() {
  const articles = getArticlesByCategory("guide");

  return (
    <div className="py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-4">
          Guides Voyage
        </h1>
        <p className="text-lg text-slate-500 mb-10">
          Conseils pratiques, astuces budget et guides pour voyager sereinement.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
            >
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
