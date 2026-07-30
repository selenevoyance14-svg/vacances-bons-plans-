import Link from "next/link";
import type { Article } from "@/lib/articles";

const CATEGORY_LABELS: Record<string, string> = {
  destination: "Destination",
  "bon-plan": "Bon plan",
  guide: "Guide pratique",
  comparatif: "Comparatif",
  concours: "Concours",
};

const CATEGORY_ICONS: Record<string, string> = {
  destination: "⌖",
  "bon-plan": "€",
  guide: "↗",
  comparatif: "≋",
  concours: "✦",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Europe/Paris",
  }).format(new Date(`${date}T12:00:00`));
}

export default function ArticleCard({
  article,
  featured = false,
}: {
  article: Article;
  featured?: boolean;
}) {
  const label = CATEGORY_LABELS[article.category] ?? "Conseil";
  const icon = CATEGORY_ICONS[article.category] ?? "↗";

  return (
    <article className={`travel-card ${featured ? "travel-card-featured" : ""}`}>
      <Link href={`/article/${article.slug}`} className="travel-card-link">
        <div className={`travel-card-visual travel-card-${article.category}`}>
          <span aria-hidden>{icon}</span>
          <p>{label}</p>
        </div>
        <div className="travel-card-content">
          <div className="travel-card-meta">
            <span>{label}</span>
            <time dateTime={article.date}>{formatDate(article.date)}</time>
          </div>
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <span className="travel-card-cta">
            Lire le guide <span aria-hidden>→</span>
          </span>
        </div>
      </Link>
    </article>
  );
}
