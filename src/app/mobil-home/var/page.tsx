import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/app/components/ArticleCard";
import { getArticles } from "@/lib/articles";
import { suncampVarOffers } from "@/lib/suncampOffers";

export const metadata: Metadata = {
  title: "Location mobil-home dans le Var : secteurs, prix et bons plans 2026",
  description:
    "Où louer un mobil-home dans le Var ? Comparez Fréjus, Saint-Aygulf, Hyères et le golfe de Saint-Tropez, avec budgets et frais à vérifier.",
  alternates: { canonical: "/mobil-home/var" },
};

const sectors = [
  {
    name: "Fréjus et Saint-Aygulf",
    profile: "Le meilleur choix pour les familles qui veulent animations et parcs aquatiques.",
    strength: "Très grand choix de campings",
    watch: "Tarifs élevés au cœur de l’été",
  },
  {
    name: "Hyères et la presqu’île de Giens",
    profile: "Pour profiter de la mer, des îles d’Or et des activités nautiques.",
    strength: "Cadre naturel et plages",
    watch: "Circulation dense en haute saison",
  },
  {
    name: "Golfe de Saint-Tropez",
    profile: "Une destination recherchée, à privilégier en juin ou en septembre pour le budget.",
    strength: "Villages et littoral emblématiques",
    watch: "Prix et stationnement",
  },
  {
    name: "Arrière-pays varois",
    profile: "Pour davantage de calme et des tarifs souvent plus doux loin du bord de mer.",
    strength: "Nature et tranquillité",
    watch: "Voiture presque indispensable",
  },
];

const budgetRows = [
  ["Juin", "550 à 1 500 €", "Bon compromis météo/prix"],
  ["Juillet-août", "1 200 à 3 800 €", "Réserver tôt et vérifier tous les frais"],
  ["Septembre", "500 à 1 300 €", "Mer encore agréable et ambiance plus calme"],
];

export default function VarMobilHomePage() {
  const varArticles = getArticles()
    .filter((article) => article.tags.some((tag) => ["var", "frejus"].includes(tag.toLowerCase())))
    .slice(0, 3);
  const lastUpdated = "2 septembre 2026";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Location de mobil-home dans le Var",
    description:
      "Guide des secteurs, budgets et frais pour louer un mobil-home dans le Var.",
    url: "https://vacances-bons-plans.fr/mobil-home/var",
    dateModified: "2026-09-02",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vacances-bons-plans.fr" },
        { "@type": "ListItem", position: 2, name: "Mobil-homes", item: "https://vacances-bons-plans.fr/mobil-home" },
        { "@type": "ListItem", position: 3, name: "Var" },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="department-hero department-hero-var">
        <div className="site-container">
          <nav className="article-breadcrumb department-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>/</span>
            <Link href="/mobil-home">Mobil-homes</Link>
            <span aria-hidden>/</span>
            <span>Var</span>
          </nav>
          <div className="department-hero-grid">
            <div>
              <p className="eyebrow eyebrow-light">Var · 83 · Côte d’Azur</p>
              <h1>Louer un mobil-home dans le Var</h1>
              <p>
                Fréjus, Hyères ou golfe de Saint-Tropez : choisissez d’abord le bon
                secteur, puis comparez le prix complet du séjour.
              </p>
            </div>
            <aside className="department-summary">
              <span>Guide local</span>
              <strong>4 secteurs comparés</strong>
              <small>Informations mises à jour le {lastUpdated}</small>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Choisir son point de chute</p>
              <h2>Quel secteur du Var vous correspond ?</h2>
            </div>
          </div>
          <div className="sector-grid">
            {sectors.map((sector, index) => (
              <article key={sector.name} className="sector-card">
                <span>0{index + 1}</span>
                <h3>{sector.name}</h3>
                <p>{sector.profile}</p>
                <dl>
                  <div><dt>Point fort</dt><dd>{sector.strength}</dd></div>
                  <div><dt>À surveiller</dt><dd>{sector.watch}</dd></div>
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="budget-section">
        <div className="site-container budget-grid">
          <div>
            <p className="eyebrow">Budget repère</p>
            <h2>Combien prévoir pour une semaine ?</h2>
            <p>
              Fourchettes éditoriales relevées dans nos guides pour un mobil-home de
              4 à 6 personnes autour de Fréjus. Elles ne constituent pas des prix en
              temps réel : dates, gamme et camping peuvent fortement changer le total.
            </p>
          </div>
          <div className="budget-table" role="table" aria-label="Budget indicatif par période">
            {budgetRows.map(([period, price, advice]) => (
              <div key={period} className="budget-row" role="row">
                <strong role="cell">{period}</strong>
                <span role="cell">{price}</span>
                <small role="cell">{advice}</small>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section offers-preview">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Sélection partenaire</p>
              <h2>6 campings à comparer autour de Fréjus.</h2>
            </div>
          </div>
          <div className="partner-offer-grid">
            {suncampVarOffers.map((offer) => (
              <article key={offer.id} className="partner-offer-card">
                <div className="partner-offer-image">
                  <Image
                    src={offer.image}
                    alt={`${offer.name} dans le Var`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw"
                  />
                  <span>{offer.stars} étoiles</span>
                </div>
                <div className="partner-offer-content">
                  <div className="partner-offer-meta">
                    <span>{offer.city}</span>
                    {offer.rating ? <small>Note {offer.rating}/10</small> : <small>Var</small>}
                  </div>
                  <h3>{offer.name}</h3>
                  <p>{offer.summary}</p>
                  <ul>
                    {offer.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                  <div className="partner-offer-footer">
                    <div>
                      <strong>Tarif sur Suncamp</strong>
                      <small>{offer.distanceToSeaKm ? `Mer à environ ${offer.distanceToSeaKm.toLocaleString("fr-FR")} km` : "Disponibilités selon les dates"}</small>
                    </div>
                    <a href={offer.href} target="_blank" rel="sponsored nofollow noopener noreferrer">
                      Voir les disponibilités <span aria-hidden>↗</span>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="partner-disclosure">
            Sélection issue du flux Suncamp, contrôlé le 3 septembre 2026. Le flux
            ne communique pas de prix ni de dates pour ces campings : vérifiez-les
            sur le site partenaire. Si vous réservez après avoir utilisé un lien,
            Vacances Bons Plans peut recevoir une commission, sans surcoût pour vous.
          </p>
        </div>
      </section>

      {varArticles.length > 0 ? (
        <section className="section var-guides">
          <div className="site-container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Pour aller plus loin</p>
                <h2>Nos guides consacrés au Var</h2>
              </div>
            </div>
            <div className="article-grid">
              {varArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="department-faq">
        <div className="site-container department-faq-grid">
          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Avant de réserver dans le Var</h2>
          </div>
          <div>
            <details>
              <summary>Quelle est la période la moins chère ?</summary>
              <p>Juin et septembre offrent généralement le meilleur équilibre entre météo, fréquentation et prix. Vérifiez néanmoins les dates d’ouverture des équipements du camping.</p>
            </details>
            <details>
              <summary>Quels frais vérifier en plus de la location ?</summary>
              <p>Regardez le ménage, les draps, la taxe de séjour, les frais de dossier, les animaux, le stationnement et les éventuels bracelets donnant accès aux équipements.</p>
            </details>
            <details>
              <summary>Faut-il choisir Fréjus ou Hyères ?</summary>
              <p>Fréjus convient particulièrement aux familles recherchant de grands campings animés. Hyères est intéressante pour la mer, les activités nautiques et les excursions vers les îles d’Or.</p>
            </details>
          </div>
        </div>
      </section>
    </>
  );
}
