import Image from "next/image";
import Link from "next/link";
import ArticleCard from "@/app/components/ArticleCard";
import { getArticles } from "@/lib/articles";
import { featuredCampings } from "@/lib/featuredCampings";
import { suncampOffersByDepartment, suncampVarOffers } from "@/lib/suncampOffers";

const UNIVERSES = [
  {
    href: "/mobil-home",
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
    title: "Séjours au bon prix",
    description: "Campings, clubs et séjours à comparer avec leurs vraies conditions.",
  },
  {
    href: "/guides",
    number: "04",
    title: "Préparer sans stress",
    description: "Budget, réservation, bagages et conseils utiles avant le départ.",
  },
  {
    href: "/campings-europe",
    number: "05",
    title: "Campings en Europe",
    description: "Italie, Espagne et Hongrie : des offres réelles à comparer chez Suncamp.",
  },
  {
    href: "/campings-france",
    number: "06",
    title: "Campings en France",
    description: "Mer, montagne, lac ou parc aquatique : comparez selon vos priorités.",
  },
];

export default function Home() {
  const articles = getArticles().filter((article) => article.category !== "concours");
  const mobilHomeGuides = articles
    .filter((article) =>
      article.tags.some((tag) => tag.toLowerCase() === "mobil-home"),
    )
    .slice(0, 3);
  const amazonGuides = articles
    .filter((article) =>
      article.tags.some((tag) => tag.toLowerCase() === "amazon") &&
      /(valise|sac-a-dos|organisateur-valise|trousse-toilette|serviette-microfibre|adaptateur-prise)/.test(article.slug),
    )
    .slice(0, 3);
  const latest = articles
    .filter((article) =>
      ["destination", "bon-plan"].includes(article.category) ||
      article.tags.some((tag) => tag.toLowerCase() === "mobil-home"),
    )
    .slice(0, 6);
  const bookingGuides = [
    "reserver-mobil-home-ete-2027-quand-commencer",
    "camping-mobil-home-avec-chien-guide",
    "mobil-home-6-personnes-vraies-chambres",
    "camping-sans-voiture-mobil-home",
  ].flatMap((slug) => articles.find((article) => article.slug === slug) ?? []);
  const destinationCount = articles.filter(
    (article) => article.category === "destination",
  ).length;
  const campingCount = new Set([
    ...Object.values(suncampOffersByDepartment).flat().map((offer) => offer.id),
    ...suncampVarOffers.map((offer) => offer.id),
  ]).size;
  const homepageCampings = featuredCampings.slice(0, 3);
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Vacances Bons Plans",
    url: "https://vacances-bons-plans.fr",
    description: "Guides et sélections de campings et mobil-homes pour comparer le prix total avant de réserver.",
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
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
            <Link href="/mobil-home" className="button button-ghost">
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

      <section className="compare-strip" id="comparer">
        <div className="site-container compare-strip-grid">
          <div className="compare-copy">
            <p className="eyebrow">{campingCount} campings français référencés</p>
            <h2>Comparez le séjour complet, pas seulement le prix d&apos;appel.</h2>
            <p>
              Explorez les campings par ville, département ou type de séjour. Vérifiez
              ensuite le prix total, les dates et les options disponibles chez le partenaire
              avant de réserver.
            </p>
            <Link href="/campings-france/camping" className="button button-primary">
              Voir les campings sélectionnés <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="compare-options" aria-label="Façons de choisir un camping">
            <Link href="/campings-france/bord-de-mer">
              <span>01</span><strong>Au bord de la mer</strong><small>Méditerranée, Atlantique et Bretagne</small>
            </Link>
            <Link href="/campings-france/parc-aquatique">
              <span>02</span><strong>Avec parc aquatique</strong><small>Piscines, toboggans et vacances en famille</small>
            </Link>
            <Link href="/campings-france/montagne">
              <span>03</span><strong>À la montagne</strong><small>Lacs, randonnées et fraîcheur en été</small>
            </Link>
          </div>
        </div>
      </section>

      <section className="section offers-preview">
        <div className="site-container">
          <div className="section-heading"><div><p className="eyebrow">Sélection du moment</p><h2>Trois campings pour commencer la comparaison</h2></div><Link href="/campings-france/camping" className="text-link">Voir les 20 fiches détaillées →</Link></div>
          <div className="partner-offer-grid">{homepageCampings.map((camping) => <article className="partner-offer-card" key={camping.id}>
            <div className="partner-offer-image"><Image src={camping.image} alt={`${camping.name} à ${camping.city}`} fill sizes="(max-width: 800px) 100vw, 33vw" />{camping.stars ? <span>{camping.stars} étoiles</span> : null}</div>
            <div className="partner-offer-content"><div className="partner-offer-meta"><Link href={`/mobil-home/${camping.departmentSlug}`}>{camping.departmentName}</Link><small>{camping.city}</small></div><h3>{camping.name}</h3><p>{camping.editorialAngle}</p><div className="partner-offer-footer"><div><strong>{camping.region}</strong><small>Conseils et réservation</small></div><Link href={`/campings-france/camping/${camping.slug}`}>Voir la fiche →</Link></div></div>
          </article>)}</div>
          <p className="partner-disclosure">Sélection issue du flux Suncamp. Les disponibilités et le prix total dépendent de vos dates.</p>
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

      <section className="section latest-section">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Préparer les prochaines vacances</p>
              <h2>Quatre décisions à prendre avant de réserver</h2>
            </div>
            <Link href="/campings-france/camping" className="text-link">Voir les campings →</Link>
          </div>
          <div className="article-grid">
            {bookingGuides.map((article) => <ArticleCard key={article.slug} article={article} />)}
          </div>
        </div>
      </section>

      {amazonGuides.length > 0 ? (
        <section className="section shopping-section">
          <div className="site-container">
            <div className="shopping-intro">
              <div>
                <p className="eyebrow">Les essentiels du départ</p>
                <h2>Le bagage utile, sans achats superflus</h2>
              </div>
              <div>
                <p>
                  Valise, sac, rangement et adaptateur : une sélection resserrée sur
                  les objets qui facilitent réellement un séjour en famille.
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
              <p className="eyebrow">Choisir et réserver</p>
              <h2>Nos derniers guides vacances</h2>
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
