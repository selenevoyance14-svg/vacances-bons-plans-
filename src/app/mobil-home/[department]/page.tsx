import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { departmentGuides } from "@/lib/departmentGuides";
import { suncampOffersByDepartment } from "@/lib/suncampOffers";

type PageProps = { params: { department: string } };

export function generateStaticParams() {
  return Object.keys(departmentGuides).map((department) => ({ department }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const guide = departmentGuides[params.department];
  if (!guide) return {};

  return {
    title: `Location mobil-home en ${guide.name} : campings à comparer`,
    description: guide.metaDescription,
    alternates: { canonical: `/mobil-home/${guide.slug}` },
  };
}

export default function DepartmentMobilHomePage({ params }: PageProps) {
  const guide = departmentGuides[params.department];
  const offers = suncampOffersByDepartment[params.department];
  if (!guide || !offers) notFound();

  const lastUpdated = "5 septembre 2026";
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Campings avec mobil-homes en ${guide.name}`,
    description: guide.metaDescription,
    url: `https://vacances-bons-plans.fr/mobil-home/${guide.slug}`,
    dateModified: "2026-09-05",
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Accueil", item: "https://vacances-bons-plans.fr" },
        { "@type": "ListItem", position: 2, name: "Mobil-homes", item: "https://vacances-bons-plans.fr/mobil-home" },
        { "@type": "ListItem", position: 3, name: guide.name },
      ],
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: offers.map((offer, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: offer.name,
        url: offer.href,
      })),
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="department-hero">
        <div className="site-container">
          <nav className="article-breadcrumb department-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link><span aria-hidden>/</span>
            <Link href="/mobil-home">Mobil-homes</Link><span aria-hidden>/</span>
            <span>{guide.name}</span>
          </nav>
          <div className="department-hero-grid">
            <div>
              <p className="eyebrow eyebrow-light">{guide.name} · {guide.number} · {guide.region}</p>
              <h1>Louer un mobil-home en {guide.name}</h1>
              <p>{guide.intro}</p>
            </div>
            <aside className="department-summary">
              <span>Sélection partenaire</span>
              <strong>{offers.length} campings à comparer</strong>
              <small>Flux Suncamp vérifié le {lastUpdated}</small>
            </aside>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading"><div>
            <p className="eyebrow">Choisir son point de chute</p>
            <h2>Quel secteur de {guide.name} vous correspond ?</h2>
          </div></div>
          <div className="sector-grid">
            {guide.sectors.map((sector, index) => (
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
            <p className="eyebrow">Avant de réserver</p>
            <h2>Trois vérifications utiles</h2>
            <p>Le meilleur camping dépend moins de son nombre d’étoiles que de vos dates, de vos déplacements et des équipements réellement ouverts pendant le séjour.</p>
          </div>
          <div className="budget-table" role="list" aria-label="Conseils avant réservation">
            {guide.advice.map((advice, index) => (
              <div key={advice} className="budget-row" role="listitem">
                <strong>0{index + 1}</strong><span>{advice}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section offers-preview">
        <div className="site-container">
          <div className="section-heading"><div>
            <p className="eyebrow">Sélection partenaire</p>
            <h2>{offers.length} campings en {guide.name} à découvrir</h2>
          </div></div>
          <div className="partner-offer-grid">
            {offers.map((offer) => (
              <article key={offer.id} className="partner-offer-card">
                <div className="partner-offer-image">
                  <Image src={offer.image} alt={`${offer.name} en ${guide.name}`} fill sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw" />
                  <span>{offer.stars} étoiles</span>
                </div>
                <div className="partner-offer-content">
                  <div className="partner-offer-meta">
                    <span>{offer.city}</span>
                    {offer.rating ? <small>Note {offer.rating}/10</small> : <small>{guide.name}</small>}
                  </div>
                  <h3>{offer.name}</h3>
                  <p>{offer.summary}</p>
                  <ul>{offer.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                  <div className="partner-offer-footer">
                    <div>
                      <strong>Tarif sur Suncamp</strong>
                      <small>{offer.distanceToSeaKm !== undefined ? (offer.distanceToSeaKm === 0 ? "Accès direct à la mer" : `Mer à environ ${offer.distanceToSeaKm.toLocaleString("fr-FR")} km`) : "Disponibilités selon les dates"}</small>
                    </div>
                    <a href={offer.href} target="_blank" rel="sponsored nofollow noopener noreferrer">Voir les disponibilités <span aria-hidden>↗</span></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="partner-disclosure">
            Sélection issue du flux Suncamp, contrôlé le 5 septembre 2026. Les prix et disponibilités changent selon les dates : vérifiez le total sur le site partenaire. Si vous réservez après avoir utilisé un lien, Vacances Bons Plans peut recevoir une commission, sans surcoût pour vous.
          </p>
        </div>
      </section>

      <section className="department-faq">
        <div className="site-container department-faq-grid">
          <div><p className="eyebrow">Questions fréquentes</p><h2>Préparer son séjour</h2></div>
          <div>{guide.faqs.map((faq) => (
            <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>
          ))}</div>
        </div>
      </section>
    </>
  );
}
