import Link from "next/link";
import { getArticles } from "@/lib/articles";

const CATEGORIES = [
  {
    slug: "destinations",
    label: "Destinations",
    icon: "🌍",
    description: "Guides complets par destination",
  },
  {
    slug: "bons-plans",
    label: "Bons Plans",
    icon: "🏷️",
    description: "Sejours et voyages a prix reduits",
  },
  {
    slug: "guides",
    label: "Guides",
    icon: "📖",
    description: "Conseils et astuces voyage",
  },
  {
    slug: "comparatifs",
    label: "Comparatifs",
    icon: "⚖️",
    description: "Comparatifs agences et offres",
  },
];

export default function Home() {
  const articles = getArticles();
  const featured = articles.filter((a) => a.featured).slice(0, 3);
  const latest = articles.slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-ocean-600 via-ocean-700 to-ocean-900 text-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-6 leading-tight">
            Trouvez votre{" "}
            <span className="text-sun-400">voyage pas cher</span>
          </h1>
          <p className="text-lg sm:text-xl text-ocean-200 max-w-2xl mx-auto mb-10">
            Nous comparons les offres Cdiscount Voyage, Havas, Auchan et Leclerc
            Voyages pour vous trouver le meilleur sejour au meilleur prix.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/destinations" className="btn-sun text-lg px-8 py-4">
              Explorer les destinations
            </Link>
            <Link
              href="/bons-plans"
              className="btn-ocean bg-white/10 hover:bg-white/20 text-lg px-8 py-4"
            >
              Voir les bons plans
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat.slug}
                href={`/${cat.slug}`}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow border border-slate-100"
              >
                <span className="text-3xl block mb-3">{cat.icon}</span>
                <h3 className="font-bold text-ocean-800 mb-1">{cat.label}</h3>
                <p className="text-xs text-slate-500">{cat.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured */}
      {featured.length > 0 && (
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-3xl font-bold text-ocean-900 mb-8">
              A la une
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {featured.map((article) => (
                <Link
                  key={article.slug}
                  href={`/article/${article.slug}`}
                  className="group bg-white rounded-xl overflow-hidden border border-slate-100 hover:shadow-lg transition-shadow"
                >
                  <div className="h-48 bg-gradient-to-br from-ocean-400 to-ocean-600 flex items-center justify-center">
                    <span className="text-5xl opacity-80">
                      {article.category === "destination"
                        ? "🌍"
                        : article.category === "bon-plan"
                          ? "🏷️"
                          : article.category === "comparatif"
                            ? "⚖️"
                            : "📖"}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-ocean-600 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <h3 className="font-bold text-slate-900 mt-2 mb-2 group-hover:text-ocean-600 transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-slate-500 line-clamp-2">
                      {article.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Latest */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-3xl font-bold text-ocean-900 mb-8">
            Derniers articles
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latest.map((article) => (
              <Link
                key={article.slug}
                href={`/article/${article.slug}`}
                className="group bg-white rounded-xl p-6 border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <span className="text-xs font-semibold text-sun-600 uppercase tracking-wide">
                  {article.category}
                </span>
                <h3 className="font-bold text-slate-900 mt-2 mb-2 group-hover:text-ocean-600 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2 mb-3">
                  {article.description}
                </p>
                <span className="text-xs text-slate-400">{article.date}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl font-bold text-ocean-900 mb-6">
            Nous comparons les meilleurs voyagistes
          </h2>
          <div className="flex flex-wrap justify-center gap-8 text-slate-500 font-semibold">
            <span>Cdiscount Voyage</span>
            <span>Havas Voyages</span>
            <span>Auchan Voyages</span>
            <span>Leclerc Voyages</span>
          </div>
        </div>
      </section>
    </>
  );
}
