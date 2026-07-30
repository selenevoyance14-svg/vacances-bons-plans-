import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/app/components/ArticleCard";
import { getArticles, getArticleBySlug } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Article non trouve" };

  return {
    title: article.seoTitle || article.title,
    description: article.seoDescription || article.description,
    alternates: { canonical: `/article/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
    },
  };
}

export function generateStaticParams() {
  return getArticles().map((a) => ({ slug: a.slug }));
}

export default function ArticlePage({ params }: Props) {
  const maybeArticle = getArticleBySlug(params.slug);

  if (!maybeArticle) {
    return (
      <div className="py-20 text-center">
        <p className="text-slate-500 text-lg">Article non trouvé.</p>
        <Link href="/" className="text-ocean-600 hover:text-ocean-800 font-medium mt-4 inline-block">
          ← Retour à l&apos;accueil
        </Link>
      </div>
    );
  }

  const article = maybeArticle;
  const categoryLabels: Record<string, string> = {
    destination: "Destination",
    "bon-plan": "Bon plan",
    guide: "Guide pratique",
    comparatif: "Comparatif",
    concours: "Concours",
  };
  const categoryLabel = categoryLabels[article.category] ?? "Conseil voyage";
  const containsAmazonLinks = article.content.includes("amazon.fr");
  const readingTime = Math.max(
    3,
    Math.ceil(article.content.replace(/[#*_[\]()`>-]/g, " ").split(/\s+/).length / 220),
  );
  const articleTags = new Set(article.tags.map((tag) => tag.toLowerCase()));
  const relatedArticles = getArticles()
    .filter((candidate) => candidate.slug !== article.slug)
    .map((candidate) => ({
      article: candidate,
      score: candidate.tags.reduce(
        (total, tag) => total + (articleTags.has(tag.toLowerCase()) ? 1 : 0),
        candidate.category === article.category ? 0.5 : 0,
      ),
    }))
    .filter(({ score }) => score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(({ article: relatedArticle }) => relatedArticle);
  const formattedDate = new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  }).format(new Date(`${article.date}T12:00:00`));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: `https://vacances-bons-plans.fr/article/${article.slug}`,
    author: {
      "@type": "Person",
      name: "Nathalie",
      url: "https://vacances-bons-plans.fr/a-propos",
    },
    publisher: {
      "@type": "Organization",
      name: "Vacances Bons Plans",
      url: "https://vacances-bons-plans.fr",
    },
  };

  return (
    <div className="article-shell">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article>
        <header className="article-header">
          <nav className="article-breadcrumb" aria-label="Fil d'Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>/</span>
            <span>{categoryLabel}</span>
          </nav>
          <p className="eyebrow">{categoryLabel}</p>
          <h1>{article.title}</h1>
          <p className="article-description">{article.description}</p>
          <div className="article-byline">
            <span>Par <strong>Nathalie</strong></span>
            <span aria-hidden>•</span>
            <time dateTime={article.date}>Publié le {formattedDate}</time>
            <span aria-hidden>•</span>
            <span>{readingTime} min de lecture</span>
          </div>
        </header>

        <div className="article-body prose">
          {containsAmazonLinks ? (
            <aside className="affiliate-notice">
              <strong>Transparence</strong>
              <p>
                Cet article contient des liens affiliés Amazon. Si vous achetez
                après avoir cliqué, nous pouvons recevoir une petite commission,
                sans surcoût pour vous. Nos conseils restent indépendants.
              </p>
            </aside>
          ) : null}
          <MDXRemote source={article.content} />
        </div>

        <div className="article-bottom">
          <Link href="/guides">← Découvrir les autres guides</Link>
        </div>
      </article>

      {relatedArticles.length > 0 ? (
        <aside className="related-section" aria-labelledby="related-title">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Continuer à préparer</p>
                <h2 id="related-title">Ces guides peuvent aussi vous aider</h2>
              </div>
            </div>
            <div className="article-grid">
              {relatedArticles.map((relatedArticle) => (
                <ArticleCard key={relatedArticle.slug} article={relatedArticle} />
              ))}
            </div>
          </div>
        </aside>
      ) : null}
    </div>
  );
}
