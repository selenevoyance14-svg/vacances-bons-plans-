import ArticleCard from "@/app/components/ArticleCard";
import { getArticlesByCategory } from "@/lib/articles";

export default function ArticleListingPage({
  category,
  eyebrow,
  title,
  description,
}: {
  category: string;
  eyebrow: string;
  title: string;
  description: string;
}) {
  const articles = getArticlesByCategory(category);

  return (
    <>
      <section className="listing-hero">
        <div className="site-container">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="listing-intro">{description}</p>
          <div className="listing-count">{articles.length} guides disponibles</div>
        </div>
      </section>
      <section className="section">
        <div className="site-container">
          {articles.length > 0 ? (
            <div className="article-grid">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <p>De nouveaux guides arrivent bientôt.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
