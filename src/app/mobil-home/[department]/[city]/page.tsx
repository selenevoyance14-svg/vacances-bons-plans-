import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cityGuides, getCityGuidesForDepartment } from "@/lib/cityGuides";
import { suncampOffersByDepartment, suncampVarOffers } from "@/lib/suncampOffers";

type PageProps = { params: { department: string; city: string } };

export function generateStaticParams() {
  return Object.values(cityGuides).map((guide) => ({
    department: guide.departmentSlug,
    city: guide.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const guide = cityGuides[`${params.department}/${params.city}`];
  if (!guide) return {};

  return {
    title: `Location mobil-home à ${guide.name} : camping et conseils`,
    description: `${guide.intro} Découvrez les campings disponibles, les lieux à voir et nos conseils avant de réserver.`,
    alternates: { canonical: `/mobil-home/${guide.departmentSlug}/${guide.slug}` },
  };
}

export default function CityMobilHomePage({ params }: PageProps) {
  const guide = cityGuides[`${params.department}/${params.city}`];
  if (!guide) notFound();

  const departmentOffers = guide.departmentSlug === "var"
    ? suncampVarOffers
    : (suncampOffersByDepartment[guide.departmentSlug] ?? []);
  const offers = departmentOffers.filter(
    (offer) => offer.city === guide.name,
  );
  if (offers.length === 0) notFound();

  const relatedCities = getCityGuidesForDepartment(guide.departmentSlug)
    .filter((city) => city.slug !== guide.slug)
    .slice(0, 4);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Location de mobil-home à ${guide.name}`,
    description: guide.intro,
    url: `https://vacances-bons-plans.fr/mobil-home/${guide.departmentSlug}/${guide.slug}`,
    dateModified: "2026-09-06",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vacances-bons-plans.fr" },
        { "@type": "ListItem", position: 2, name: "Mobil-homes", item: "https://vacances-bons-plans.fr/mobil-home" },
        { "@type": "ListItem", position: 3, name: guide.departmentName, item: `https://vacances-bons-plans.fr/mobil-home/${guide.departmentSlug}` },
        { "@type": "ListItem", position: 4, name: guide.name },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: offers.map((offer, index) => ({
        "@type": "ListItem", position: index + 1, name: offer.name, url: offer.href,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="city-hero">
        <div className="city-hero-image">
          <Image src={offers[0].image} alt={`Camping et mobil-home à ${guide.name}`} fill priority sizes="100vw" />
        </div>
        <div className="city-hero-shade" />
        <div className="site-container city-hero-content">
          <nav className="article-breadcrumb department-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link><span aria-hidden>/</span>
            <Link href="/mobil-home">Mobil-homes</Link><span aria-hidden>/</span>
            <Link href={`/mobil-home/${guide.departmentSlug}`}>{guide.departmentName}</Link><span aria-hidden>/</span>
            <span>{guide.name}</span>
          </nav>
          <p className="eyebrow eyebrow-light">{guide.departmentName} · Guide local</p>
          <h1>Louer un mobil-home à {guide.name}</h1>
          <p>{guide.intro}</p>
        </div>
      </section>

      <section className="section city-intro-section">
        <div className="site-container city-intro-grid">
          <div>
            <p className="eyebrow">À qui convient la destination ?</p>
            <h2>{guide.idealFor}</h2>
          </div>
          <div className="city-checklist">
            <h3>À voir autour de {guide.name}</h3>
            <ul>{guide.nearby.map((place) => <li key={place}>{place}</li>)}</ul>
          </div>
        </div>
      </section>

      <section className="section offers-preview">
        <div className="site-container">
          <div className="section-heading"><div>
            <p className="eyebrow">Disponible chez notre partenaire</p>
            <h2>{offers.length > 1 ? `${offers.length} campings à comparer` : "Le camping à découvrir"}</h2>
          </div></div>
          <div className={`partner-offer-grid ${offers.length === 1 ? "partner-offer-grid-single" : ""}`}>
            {offers.map((offer) => (
              <article key={offer.id} className="partner-offer-card">
                <div className="partner-offer-image">
                  <Image src={offer.image} alt={`${offer.name} à ${guide.name}`} fill sizes="(max-width: 800px) 100vw, 50vw" />
                  {offer.stars ? <span>{offer.stars} étoiles</span> : null}
                </div>
                <div className="partner-offer-content">
                  <div className="partner-offer-meta"><span>{offer.city}</span>{offer.rating ? <small>Note {offer.rating}/10</small> : <small>{guide.departmentName}</small>}</div>
                  <h3>{offer.name}</h3>
                  <p>{offer.summary}</p>
                  <ul>{offer.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  <div className="partner-offer-footer">
                    <div><strong>Tarif sur Suncamp</strong><small>Prix et dates sur le site partenaire</small></div>
                    <a href={offer.href} target="_blank" rel="sponsored nofollow noopener noreferrer">Voir les disponibilités <span aria-hidden>↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="partner-disclosure">Offres issues du flux Suncamp. Les prix et disponibilités dépendent de vos dates. Une réservation via ces liens peut rémunérer Vacances Bons Plans, sans surcoût pour vous.</p>
        </div>
      </section>

      <section className="budget-section">
        <div className="site-container budget-grid">
          <div><p className="eyebrow">Conseils locaux</p><h2>Avant de réserver</h2><p>Ces points pratiques peuvent changer le confort et le budget total de votre séjour.</p></div>
          <div className="budget-table" role="list">
            {guide.practical.map((tip, index) => <div key={tip} className="budget-row" role="listitem"><strong>0{index + 1}</strong><span>{tip}</span></div>)}
          </div>
        </div>
      </section>

      {relatedCities.length > 0 ? (
        <section className="section city-related">
          <div className="site-container">
            <div className="section-heading"><div><p className="eyebrow">Dans le même département</p><h2>Comparer avec une autre ville</h2></div><Link className="text-link" href={`/mobil-home/${guide.departmentSlug}`}>Tout le {guide.departmentName} →</Link></div>
            <div className="city-link-grid">
              {relatedCities.map((city) => <Link key={city.slug} href={`/mobil-home/${city.departmentSlug}/${city.slug}`}><span>{city.departmentName}</span><strong>{city.name}</strong><small>Voir les campings →</small></Link>)}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
