import type { Metadata } from "next";
import Link from "next/link";
import { getArticles, getArticleBySlug } from "@/lib/articles";
import { MDXRemote } from "next-mdx-remote/rsc";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getArticleBySlug(params.slug);
  if (!article) return { title: "Article non trouve" };

  return {
    title: article.seoTitle || `${article.title} | Vacances Bons Plans`,
    description: article.seoDescription || article.description,
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

  return (
    <div className="py-12">
      <article className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
          <Link href="/" className="hover:text-ocean-600">
            Accueil
          </Link>
          <span>/</span>
          <span className="text-slate-600 capitalize">{article.category}</span>
        </div>

        {/* Header */}
        <header className="mb-10">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-ocean-600 bg-ocean-50 px-3 py-1 rounded mb-4">
            {article.category}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-slate-500 mb-4">{article.description}</p>
          <time className="text-sm text-slate-400">
            Publié le {article.date}
          </time>
        </header>

        {/* Content */}
        <div className="prose max-w-none">
          <MDXRemote source={article.content} />
        </div>

        {/* Back */}
        <div className="mt-16 pt-8 border-t border-slate-200">
          <Link
            href="/"
            className="text-ocean-600 hover:text-ocean-800 font-medium"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </article>
    </div>
  );
}
