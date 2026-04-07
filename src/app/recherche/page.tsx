"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
}

function SearchContent() {
  const searchParams = useSearchParams();
  const query = (searchParams.get("q") || "").trim().toLowerCase();
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("/articles.json")
      .then((r) => r.json())
      .then((data: Article[]) => setArticles(data))
      .catch(() => {});
  }, []);

  const results = query
    ? articles.filter(
        (a) =>
          a.title.toLowerCase().includes(query) ||
          a.description.toLowerCase().includes(query) ||
          a.tags?.some((t) => t.toLowerCase().includes(query)) ||
          a.category.toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <form action="/recherche" method="GET" className="mb-10">
        <div className="flex gap-3">
          <input
            type="text"
            name="q"
            defaultValue={searchParams.get("q") || ""}
            placeholder="Ex : Grèce, tout inclus, pas cher..."
            className="flex-1 px-5 py-3 rounded-xl border border-slate-200 bg-white text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-ocean-500 focus:border-transparent text-lg"
            autoFocus
          />
          <button
            type="submit"
            className="btn-ocean px-6 py-3 rounded-xl text-lg"
          >
            Rechercher
          </button>
        </div>
      </form>

      {query && (
        <p className="text-slate-500 mb-6">
          {results.length} résultat{results.length !== 1 ? "s" : ""} pour «{" "}
          <span className="font-semibold text-ocean-700">
            {searchParams.get("q")}
          </span>{" "}
          »
        </p>
      )}

      {results.length > 0 ? (
        <div className="space-y-4">
          {results.map((article) => (
            <Link
              key={article.slug}
              href={`/article/${article.slug}`}
              className="group block bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
            >
              <span className="text-xs font-semibold text-sun-600 uppercase tracking-wide">
                {article.category}
              </span>
              <h2 className="font-bold text-slate-900 mt-1 mb-2 group-hover:text-ocean-600 transition-colors">
                {article.title}
              </h2>
              <p className="text-sm text-slate-500 line-clamp-2">
                {article.description}
              </p>
            </Link>
          ))}
        </div>
      ) : query ? (
        <div className="text-center py-12">
          <span className="text-5xl block mb-4">🔍</span>
          <p className="text-slate-500 text-lg">
            Aucun article trouvé. Essayez avec d&apos;autres mots-clés.
          </p>
        </div>
      ) : null}
    </>
  );
}

export default function RecherchePage() {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl font-bold text-ocean-900 mb-8">Rechercher</h1>
        <Suspense fallback={<p className="text-slate-400">Chargement...</p>}>
          <SearchContent />
        </Suspense>
      </div>
    </section>
  );
}
