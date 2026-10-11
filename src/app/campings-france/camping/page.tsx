import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { featuredCampings } from "@/lib/featuredCampings";

export const metadata: Metadata = {
  title: "20 campings en France à découvrir en mobil-home",
  description: "Découvrez 20 campings en France sélectionnés entre mer, montagne, lac et campagne, avec photos, villes, départements et liens Suncamp.",
  alternates: { canonical: "/campings-france/camping" },
};

export default function FeaturedCampingsPage() {
  return <>
    <section className="listing-hero"><div className="site-container">
      <nav className="article-breadcrumb" aria-label="Fil d’Ariane"><Link href="/">Accueil</Link><span>/</span><Link href="/campings-france">Campings en France</Link><span>/</span><span>20 campings</span></nav>
      <p className="eyebrow">Mer · montagne · lacs · campagne</p><h1>20 campings en France à découvrir.</h1>
      <p className="listing-intro">Une sélection variée de campings avec mobil-homes, répartis dans 20 villes et plusieurs départements. Consultez chaque fiche pour comparer l’environnement, les activités et les points à vérifier avant de réserver.</p>
    </div></section>
    <section className="section offers-preview"><div className="site-container"><div className="partner-offer-grid">{featuredCampings.map((camping) => <article className="partner-offer-card" key={camping.id}>
      <div className="partner-offer-image"><Image src={camping.image} alt={`${camping.name} à ${camping.city}`} fill sizes="(max-width:800px) 100vw, 33vw" />{camping.stars ? <span>{camping.stars} étoiles</span> : null}</div>
      <div className="partner-offer-content"><div className="partner-offer-meta"><Link href={`/mobil-home/${camping.departmentSlug}`}>{camping.departmentName}</Link><small>{camping.city}</small></div><h2>{camping.name}</h2><p>{camping.editorialAngle}</p><div className="partner-offer-footer"><div><strong>{camping.region}</strong><small>Fiche détaillée et réservation</small></div><Link href={`/campings-france/camping/${camping.slug}`}>Découvrir le camping →</Link></div></div>
    </article>)}</div><p className="partner-disclosure">Sélection éditoriale issue du flux Suncamp. Les prix et disponibilités sont à vérifier selon vos dates sur le site partenaire.</p></div></section>
  </>;
}
