import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { bungalowAffiliateUrl, bungalowThemes, bungalowThemeSlugs, type BungalowThemeSlug } from "@/lib/bungalowThemes";

type Props = { params: { theme: string } };
export function generateStaticParams() { return bungalowThemeSlugs.map((theme) => ({ theme })); }
export function generateMetadata({ params }: Props): Metadata {
  const theme = bungalowThemes[params.theme as BungalowThemeSlug];
  if (!theme) return {};
  return { title: theme.title, description: theme.description, alternates: { canonical: `/locations-vacances/${theme.slug}` } };
}

export default function LocationThemePage({ params }: Props) {
  const theme = bungalowThemes[params.theme as BungalowThemeSlug];
  if (!theme) notFound();
  const related = bungalowThemeSlugs.filter((slug) => slug !== theme.slug).slice(0, 4);
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: theme.title, description: theme.description, url: `https://vacances-bons-plans.fr/locations-vacances/${theme.slug}`, mainEntity: { "@type": "FAQPage", mainEntity: theme.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })) } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="city-hero"><div className="city-hero-image"><Image src={theme.image} alt={theme.title} fill priority sizes="100vw" /></div><div className="city-hero-shade" /><div className="site-container city-hero-content"><nav className="article-breadcrumb department-breadcrumb"><Link href="/">Accueil</Link><span>/</span><Link href="/locations-vacances">Locations de vacances</Link><span>/</span><span>{theme.name}</span></nav><p className="eyebrow eyebrow-light">Guide location · Bungalow.net</p><h1>{theme.title}</h1><p>{theme.intro}</p></div></section>
    <section className="section city-intro-section"><div className="site-container city-intro-grid"><div><p className="eyebrow">Pour quel séjour ?</p><h2>{theme.idealFor}</h2><p>{theme.description}</p></div><div className="city-checklist"><h3>Points forts</h3><ul>{theme.strengths.map((item) => <li key={item}>{item}</li>)}</ul></div></div></section>
    <section className="budget-section"><div className="site-container budget-grid"><div><p className="eyebrow">Avant de réserver</p><h2>Trois vérifications utiles</h2><p>Comparez toujours le prix total et le logement précis correspondant à vos dates.</p></div><div className="budget-table">{theme.checks.map((item, index) => <div className="budget-row" key={item}><strong>0{index + 1}</strong><span>{item}</span></div>)}</div></div></section>
    <section className="section"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Idées de destinations</p><h2>Où chercher ce type de séjour ?</h2></div></div><div className="sector-grid">{theme.destinations.map((destination, index) => <article className="sector-card" key={destination.name}><span>0{index + 1}</span><h3>{destination.name}</h3><p>{destination.detail}</p></article>)}</div><div className="shopping-footer"><a className="button button-primary" href={bungalowAffiliateUrl(theme.targetUrl)} target="_blank" rel="sponsored nofollow noopener noreferrer">Voir les locations sur Bungalow.net <span aria-hidden>↗</span></a></div><p className="partner-disclosure">Lien affilié : une réservation peut rémunérer Vacances Bons Plans, sans modifier votre prix. Vérifiez les disponibilités, frais et conditions chez le partenaire.</p></div></section>
    <section className="department-faq"><div className="site-container department-faq-grid"><div><p className="eyebrow">Questions fréquentes</p><h2>Bien comparer avant de choisir</h2></div><div>{theme.faqs.map((faq) => <details key={faq.question}><summary>{faq.question}</summary><p>{faq.answer}</p></details>)}</div></div></section>
    <section className="section city-related"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Autres idées</p><h2>Continuer la recherche</h2></div></div><div className="city-link-grid">{related.map((slug) => <Link href={`/locations-vacances/${slug}`} key={slug}><span>Locations de vacances</span><strong>{bungalowThemes[slug].name}</strong><small>Voir le guide →</small></Link>)}</div></div></section>
  </>;
}
