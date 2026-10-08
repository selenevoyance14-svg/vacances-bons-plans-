import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { campingThemes, campingThemeSlugs, getOffersForTheme, isCampingTheme } from "@/lib/campingThemes";

type Props = { params: { theme: string } };
export function generateStaticParams() { return campingThemeSlugs.map((theme) => ({ theme })); }
export function generateMetadata({ params }: Props): Metadata { if (!isCampingTheme(params.theme)) return {}; const theme = campingThemes[params.theme]; return { title: theme.title, description: theme.description, alternates: { canonical: `/campings-france/${params.theme}` } }; }

export default function CampingThemePage({ params }: Props) {
  if (!isCampingTheme(params.theme)) notFound();
  const theme = campingThemes[params.theme]; const offers = getOffersForTheme(params.theme);
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: theme.title, description: theme.description, url: `https://vacances-bons-plans.fr/campings-france/${params.theme}`, mainEntity: { "@type": "ItemList", itemListElement: offers.map((offer, index) => ({ "@type": "ListItem", position: index + 1, name: offer.name, url: offer.href })) } };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}/>
    <section className="listing-hero"><div className="site-container"><nav className="article-breadcrumb"><Link href="/">Accueil</Link><span>/</span><Link href="/campings-france">Campings en France</Link><span>/</span><span>{theme.name}</span></nav><p className="eyebrow">Sélection vérifiée · {offers.length} adresses</p><h1>{theme.title}</h1><p className="listing-intro">{theme.intro}</p><div className="method-pills">{theme.advice.map((item) => <span key={item}>{item}</span>)}</div></div></section>
    <section className="section offers-preview"><div className="site-container"><div className="partner-offer-grid">{offers.map((offer) => <article key={offer.id} className="partner-offer-card"><div className="partner-offer-image"><Image src={offer.image} alt={`${offer.name} à ${offer.city}`} fill sizes="(max-width:800px) 100vw, 33vw"/>{offer.stars ? <span>{offer.stars} étoiles</span> : null}</div><div className="partner-offer-content"><div className="partner-offer-meta"><Link href={`/mobil-home/${offer.departmentSlug}`}>{offer.city}</Link>{offer.rating ? <small>Note {offer.rating}/10</small> : null}</div><h2>{offer.name}</h2><p>{offer.summary}</p><ul>{offer.highlights.map((item) => <li key={item}>{item}</li>)}</ul><div className="partner-offer-footer"><div><strong>Suncamp</strong><small>Prix selon vos dates</small></div><a href={offer.href} target="_blank" rel="sponsored nofollow noopener noreferrer">Voir les disponibilités ↗</a></div></div></article>)}</div><p className="partner-disclosure">Sélection éditoriale issue du flux Suncamp. Les prix et disponibilités sont à vérifier sur le site partenaire.</p></div></section>
    <section className="section city-related"><div className="site-container"><div className="section-heading"><div><p className="eyebrow">Poursuivre la comparaison</p><h2>D’autres façons de choisir</h2></div></div><div className="city-link-grid">{campingThemeSlugs.filter((slug) => slug !== params.theme).slice(0,4).map((slug) => <Link href={`/campings-france/${slug}`} key={slug}><span>Campings en France</span><strong>{campingThemes[slug].name}</strong><small>Voir la sélection →</small></Link>)}</div></div></section>
  </>;
}
