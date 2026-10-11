import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { departmentGuides } from "@/lib/departmentGuides";
import { featuredCampings, featuredCampingsBySlug } from "@/lib/featuredCampings";

type Props = { params: { slug: string } };

export function generateStaticParams() { return featuredCampings.map(({ slug }) => ({ slug })); }

export function generateMetadata({ params }: Props): Metadata {
  const camping = featuredCampingsBySlug[params.slug];
  if (!camping) return {};
  return { title: `${camping.name} à ${camping.city} : mobil-home et guide`, description: `${camping.editorialAngle} Consultez les conseils locaux et les disponibilités Suncamp.`, alternates: { canonical: `/campings-france/camping/${camping.slug}` } };
}

export default function CampingPage({ params }: Props) {
  const camping = featuredCampingsBySlug[params.slug];
  if (!camping) notFound();
  const department = departmentGuides[camping.departmentSlug];
  const cityHref = camping.citySlug ? `/mobil-home/${camping.departmentSlug}/${camping.citySlug}` : `/mobil-home/${camping.departmentSlug}`;
  const jsonLd = { "@context": "https://schema.org", "@type": "Campground", name: camping.name, image: camping.image, description: camping.editorialAngle, address: { "@type": "PostalAddress", addressLocality: camping.city, addressRegion: camping.departmentName, addressCountry: "FR" }, url: `https://vacances-bons-plans.fr/campings-france/camping/${camping.slug}` };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="city-hero"><div className="city-hero-image"><Image src={camping.image} alt={`${camping.name}, camping à ${camping.city}`} fill priority sizes="100vw" /></div><div className="city-hero-shade" /><div className="site-container city-hero-content"><nav className="article-breadcrumb department-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/campings-france/camping">Campings</Link><span>/</span><span>{camping.name}</span></nav><p className="eyebrow eyebrow-light">{camping.city} · {camping.departmentName}{camping.stars ? ` · ${camping.stars} étoiles` : ""}</p><h1>{camping.name}</h1><p>{camping.editorialAngle}</p></div></section>
    <section className="section city-intro-section"><div className="site-container city-intro-grid"><div><p className="eyebrow">Pourquoi regarder ce camping ?</p><h2>{camping.summary}</h2><p>{camping.editorialAngle}</p></div><div className="city-checklist"><h3>Points forts annoncés</h3><ul>{camping.highlights.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="budget-section"><div className="site-container budget-grid"><div><p className="eyebrow">Avant de réserver</p><h2>Les vérifications qui évitent les surprises</h2><p>Le tarif final dépend des dates, du nombre de voyageurs et des options choisies.</p></div><div className="budget-table" role="list">{department.advice.map((item, index) => <div className="budget-row" role="listitem" key={item}><strong>0{index + 1}</strong><span>{item}</span></div>)}</div></div></section>
    <section className="section"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Autour de {camping.city}</p><h2>Découvrir le secteur</h2></div></div><div className="sector-grid">{department.sectors.slice(0, 3).map((sector, index) => <article className="sector-card" key={sector.name}><span>0{index + 1}</span><h3>{sector.name}</h3><p>{sector.profile}</p><dl><div><dt>Point fort</dt><dd>{sector.strength}</dd></div><div><dt>À surveiller</dt><dd>{sector.watch}</dd></div></dl></article>)}</div></div></section>
    <section className="section city-related"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Comparer et réserver</p><h2>Vérifier les dates et le prix total</h2></div></div><div className="city-link-grid"><Link href={cityHref}><span>{camping.departmentName}</span><strong>Guide de {camping.city}</strong><small>Conseils locaux →</small></Link><Link href={`/mobil-home/${camping.departmentSlug}`}><span>{camping.region}</span><strong>Autres campings en {camping.departmentName}</strong><small>Comparer →</small></Link><a href={camping.href} target="_blank" rel="sponsored nofollow noopener noreferrer"><span>Partenaire Suncamp</span><strong>Voir les disponibilités</strong><small>Prix selon vos dates ↗</small></a></div><p className="partner-disclosure">Si vous réservez via le lien partenaire, Vacances Bons Plans peut recevoir une commission, sans surcoût pour vous.</p></div></section>
  </>;
}
