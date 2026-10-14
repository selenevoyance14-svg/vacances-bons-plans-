import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { bungalowAffiliateUrl, bungalowThemes, bungalowThemeSlugs } from "@/lib/bungalowThemes";

export const metadata: Metadata = {
  title: "Locations de vacances : maisons, chalets et villas",
  description: "Comparez maisons de vacances, chalets, villas et résidences en France ou en Europe selon la mer, la montagne, les animaux et la capacité.",
  alternates: { canonical: "/locations-vacances" },
};

export default function LocationsVacancesPage() {
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: "Locations de vacances", url: "https://vacances-bons-plans.fr/locations-vacances", mainEntity: { "@type": "ItemList", itemListElement: bungalowThemeSlugs.map((slug, index) => ({ "@type": "ListItem", position: index + 1, name: bungalowThemes[slug].name, url: `https://vacances-bons-plans.fr/locations-vacances/${slug}` })) } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="listing-hero"><div className="site-container"><nav className="article-breadcrumb"><Link href="/">Accueil</Link><span>/</span><span>Locations de vacances</span></nav><p className="eyebrow">Maisons · chalets · villas · résidences</p><h1>Plus d’espace pour les vacances.</h1><p className="listing-intro">Une alternative au mobil-home pour les familles, les groupes et les séjours hors saison. Choisissez d’abord votre besoin, puis vérifiez le prix total et les conditions chez Bungalow.net.</p><a className="button button-primary" href={bungalowAffiliateUrl()} target="_blank" rel="sponsored nofollow noopener noreferrer">Rechercher chez Bungalow.net <span aria-hidden>↗</span></a></div></section>
    <section className="section"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Choisir autrement</p><h2>Quel type de location vous correspond ?</h2></div></div><div className="destination-grid">{bungalowThemeSlugs.map((slug) => { const theme = bungalowThemes[slug]; return <Link className="destination-card destination-card-active" href={`/locations-vacances/${slug}`} key={slug}><div className="destination-card-image"><Image src={theme.image} alt={theme.title} fill sizes="(max-width:720px) 100vw, 33vw" /><strong>Guide pratique</strong></div><div className="destination-card-body"><div className="destination-card-topline"><span>Locations</span><small>{theme.name}</small></div><h2>{theme.name}</h2><p>{theme.description}</p><strong className="destination-card-action">Voir le guide →</strong></div></Link>; })}</div><p className="partner-disclosure">Bungalow.net est un partenaire affilié. Une réservation effectuée après un clic peut soutenir Vacances Bons Plans, sans surcoût pour vous.</p></div></section>
    <section className="section city-related"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Deux façons de partir</p><h2>Maison de vacances ou mobil-home ?</h2></div></div><div className="city-link-grid"><Link href="/locations-vacances/france"><span>Indépendance</span><strong>Maison, chalet ou villa</strong><small>Plus d’espace et d’intimité →</small></Link><Link href="/mobil-home"><span>Services sur place</span><strong>Mobil-home en camping</strong><small>Piscine, clubs et animations →</small></Link></div></div></section>
  </>;
}
