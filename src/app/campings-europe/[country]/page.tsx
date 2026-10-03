import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { europeCountryGuides, europeOffers, type EuropeCountrySlug } from "@/lib/europeCampingData";

type Props = { params: { country: string } };

export function generateStaticParams() {
  return Object.keys(europeCountryGuides).map((country) => ({ country }));
}

export function generateMetadata({ params }: Props): Metadata {
  const guide = europeCountryGuides[params.country as EuropeCountrySlug];
  if (!guide) return {};
  const offers = europeOffers[params.country as EuropeCountrySlug] ?? [];
  return {
    title: `Camping en ${guide.name} : mobil-homes et campings à comparer`,
    description: offers.length ? `Comparez ${offers.length} campings en ${guide.name} avec photos, villes, notes et disponibilités Suncamp.` : `${guide.name} : guide camping et suivi des prochaines offres disponibles.`,
    alternates: { canonical: `/campings-europe/${params.country}` },
    robots: offers.length ? undefined : { index: false, follow: true },
  };
}

export default function EuropeCountryPage({ params }: Props) {
  const slug = params.country as EuropeCountrySlug;
  const guide = europeCountryGuides[slug];
  if (!guide) notFound();
  const offers = europeOffers[slug] ?? [];
  const otherCountries = (Object.keys(europeCountryGuides) as EuropeCountrySlug[]).filter((country) => country !== slug);
  const jsonLd = offers.length ? {
    "@context": "https://schema.org", "@type": "CollectionPage",
    name: `Campings en ${guide.name}`, description: guide.intro,
    url: `https://vacances-bons-plans.fr/campings-europe/${slug}`,
    mainEntity: { "@type": "ItemList", itemListElement: offers.map((offer, index) => ({ "@type": "ListItem", position: index + 1, name: offer.name, url: offer.href })) },
  } : null;

  return (
    <>
      {jsonLd ? <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /> : null}
      <section className="department-hero">
        <div className="site-container">
          <nav className="article-breadcrumb department-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span aria-hidden>/</span><Link href="/campings-europe">Europe</Link><span aria-hidden>/</span><span>{guide.name}</span></nav>
          <div className="department-hero-grid">
            <div><p className="eyebrow eyebrow-light">Camping en Europe · {guide.name}</p><h1>Campings et mobil-homes en {guide.name}</h1><p>{guide.intro}</p></div>
            {offers[0] ? <aside className="department-summary"><div className="department-summary-image"><Image src={offers[0].image} alt={`Camping en ${guide.name}`} fill priority sizes="(max-width: 900px) 100vw, 420px" /></div><div className="department-summary-content"><span>Sélection Suncamp</span><strong>{offers.length} campings à comparer</strong><small>Flux vérifié le 3 octobre 2026</small></div></aside> : null}
          </div>
        </div>
      </section>

      <section className="budget-section"><div className="site-container budget-grid"><div><p className="eyebrow">Avant de réserver</p><h2>Trois vérifications utiles</h2><p>Comparez le trajet, le prix total du séjour et les équipements réellement ouverts pendant vos dates.</p></div><div className="budget-table" role="list">{guide.advice.map((advice, index) => <div key={advice} className="budget-row" role="listitem"><strong>0{index + 1}</strong><span>{advice}</span></div>)}</div></div></section>

      {offers.length ? (
        <section className="section offers-preview"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Offres réelles du partenaire</p><h2>{offers.length} campings en {guide.name}</h2></div></div><div className="partner-offer-grid">{offers.map((offer) => <article key={offer.id} className="partner-offer-card"><div className="partner-offer-image"><Image src={offer.image} alt={`${offer.name} à ${offer.city}`} fill sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 33vw" />{offer.stars ? <span>{offer.stars} étoiles</span> : null}</div><div className="partner-offer-content"><div className="partner-offer-meta"><span>{offer.city} · {offer.region}</span>{offer.rating ? <small>Note {offer.rating}/10</small> : null}</div><h3>{offer.name}</h3><p>Un camping à {offer.city} pour découvrir {offer.region} et comparer les hébergements disponibles selon vos dates.</p><ul><li>{guide.highlights[0]}</li><li>{guide.highlights[1]}</li><li>{offer.distanceToSeaKm === 0 ? "Accès direct à la mer" : offer.distanceToSeaKm ? `Mer à environ ${offer.distanceToSeaKm.toLocaleString("fr-FR")} km` : "Situation à vérifier"}</li></ul><div className="partner-offer-footer"><div><strong>Tarif sur Suncamp</strong><small>Prix et dates chez le partenaire</small></div><a href={offer.href} target="_blank" rel="sponsored nofollow noopener noreferrer">Voir les disponibilités <span aria-hidden>↗</span></a></div></div></article>)}</div><p className="partner-disclosure">Les notes et informations proviennent du flux Suncamp contrôlé le 3 octobre 2026. Vérifiez toujours le prix total, les dates et les options sur le site partenaire.</p></div></section>
      ) : (
        <section className="section"><div className="site-container"><div className="offers-empty"><div><p className="eyebrow">Catalogue surveillé</p><h2>Pas encore d’offre Suncamp au Portugal</h2><p>Le Portugal ne figure pas dans le flux partenaire actuel. Nous préférons l’indiquer clairement plutôt que d’afficher des campings impossibles à réserver. La page sera enrichie dès que de vraies offres seront disponibles.</p></div><Link href="/campings-europe/espagne" className="button button-primary">Voir les campings en Espagne <span aria-hidden>→</span></Link></div></div></section>
      )}

      <section className="section"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Continuer en Europe</p><h2>Comparer les autres pays</h2></div></div><div className="city-link-grid">{otherCountries.map((country) => <Link key={country} href={`/campings-europe/${country}`}><span>Camping en Europe</span><strong>{europeCountryGuides[country].name}</strong><small>Découvrir →</small></Link>)}</div></div></section>
    </>
  );
}
