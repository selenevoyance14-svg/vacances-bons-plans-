import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/app/components/ArticleCard";
import { getArticles } from "@/lib/articles";

const UNIVERSES = [
  {
    href: "/guides",
    number: "01",
    title: "Mobil-home & camping",
    description: "Acheter, louer, choisir son camping et comprendre les vrais coûts.",
  },
  {
    href: "/destinations",
    number: "02",
    title: "Destinations en famille",
    description: "Des régions accessibles, des budgets réalistes et les bonnes périodes.",
  },
  {
    href: "/bons-plans",
    number: "03",
    title: "Vacances au bon prix",
    description: "Des offres datées et des pistes concrètes pour partir sans se ruiner.",
  },
  {
    href: "/comparatifs",
    number: "04",
    title: "Équipement utile",
    description: "Valises, accessoires et matériel comparés sans listes interminables.",
  },
];

export default function Home() {
  const articles = getArticles().filter((article) => article.category !== "concours");
  const mobilHomeGuides = articles
    .filter((article) =>
      article.tags.some((tag) => ["mobil-home", "camping"].includes(tag.toLowerCase())),
    )
    .slice(0, 3);
  const amazonGuides = articles
    .filter((article) =>
      article.tags.some((tag) => tag.toLowerCase() === "amazon"),
    )
    .slice(0, 3);
  const latest = articles.slice(0, 6);
  const destinationCount = articles.filter(
    (article) => article.category === "destination",
  ).length;

  return (
    <>
      <section className="home-hero">
        <div className="home-hero-media">
          <Image
            src="/images/hero-vacances-famille-mobil-home.webp"
            alt="Vacances en famille dans un mobil-home au bord de la Méditerranée"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="home-hero-shade" />
        <div className="site-container home-hero-content">
          <p className="eyebrow eyebrow-light">Vacances familiales · camping · plein air</p>
          <h1>Partir mieux.<br />Dépenser juste.</h1>
          <p className="home-hero-lead">
            Des guides honnêtes pour choisir un mobil-home, trouver une destination
            familiale et éviter les mauvaises surprises avant de réserver.
          </p>
          <div className="hero-actions">
            <Link href="/guides" className="button button-primary">
              Découvrir nos guides <span aria-hidden>→</span>
            </Link>
            <Link href="/destinations" className="button button-ghost">
              Trouver une destination
            </Link>
          </div>
        </div>
        <div className="hero-note">
          <span>Conseils indépendants</span>
          <span>Budgets expliqués</span>
          <span>Informations datées</span>
        </div>
      </section>

      <section className="intro-band">
        <div className="site-container intro-band-grid">
          <p className="eyebrow">Notre ligne éditoriale</p>
          <div>
            <h2>Les vacances ne devraient pas commencer par une mauvaise surprise.</h2>
            <p>
              Nous transformons les prix, les conditions et les options compliquées
              en conseils simples. Ici, pas de faux comparateur : chaque article
              vous aide à prendre une décision précise.
            </p>
          </div>
        </div>
        <div className="site-container proof-strip" aria-label="Nos engagements">
          <div><strong>{articles.length}</strong><span>guides disponibles</span></div>
          <div><strong>{destinationCount}</strong><span>destinations étudiées</span></div>
          <div><strong>100 %</strong><span>accès gratuit</span></div>
          <div><strong>0</strong><span>faux prix barrés</span></div>
        </div>
      </section>

      <section className="section universes-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Explorer</p>
              <h2>Préparez vos vacances à votre façon</h2>
            </div>
            <Link href="/recherche" className="text-link">Rechercher sur le site →</Link>
          </div>
          <div className="universe-grid">
            {UNIVERSES.map((universe) => (
              <Link key={universe.number} href={universe.href} className="universe-card">
                <span className="universe-number">{universe.number}</span>
                <h3>{universe.title}</h3>
                <p>{universe.description}</p>
                <span className="universe-arrow" aria-hidden>↗</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {mobilHomeGuides.length > 0 ? (
        <section className="section focus-section">
          <div className="site-container">
            <div className="section-heading section-heading-light">
              <div>
                <p className="eyebrow eyebrow-light">Dossier du moment</p>
                <h2>Le mobil-home, sans les frais cachés</h2>
              </div>
              <Link href="/guides" className="text-link text-link-light">
                Tous les guides →
              </Link>
            </div>
            <div className="focus-grid">
              {mobilHomeGuides.map((article, index) => (
                <ArticleCard key={article.slug} article={article} featured={index === 0} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {amazonGuides.length > 0 ? (
        <section className="section shopping-section">
          <div className="site-container">
            <div className="shopping-intro">
              <div>
                <p className="eyebrow">La sélection utile</p>
                <h2>Bien équipé, sans remplir le coffre</h2>
              </div>
              <div>
                <p>
                  Nos comparatifs d&apos;accessoires pour le camping et le voyage :
                  des critères concrets, plusieurs budgets et seulement du matériel
                  qui répond à un vrai besoin.
                </p>
                <small>
                  Certains liens sont affiliés Amazon : le prix reste identique pour
                  vous et une commission peut soutenir le site.
                </small>
              </div>
            </div>
            <div className="article-grid">
              {amazonGuides.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
            <div className="shopping-footer">
              <Link href="/comparatifs" className="button button-primary">
                Voir les comparatifs équipement <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section latest-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">À lire maintenant</p>
              <h2>Nos derniers guides</h2>
            </div>
            <Link href="/guides" className="text-link">Tout consulter →</Link>
          </div>
          <div className="article-grid">
            {latest.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        </div>
      </section>

      <section className="manifesto">
        <div className="site-container manifesto-grid">
          <div>
            <p className="eyebrow eyebrow-light">La promesse</p>
            <h2>Moins de listes. Plus de réponses.</h2>
          </div>
          <div>
            <p>
              Vacances Bons Plans est un guide indépendant. Nous indiquons ce qui
              coûte réellement de l’argent, ce qui mérite votre attention et ce
              qui peut attendre.
            </p>
            <Link href="/a-propos" className="button button-light">
              Découvrir notre méthode <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
