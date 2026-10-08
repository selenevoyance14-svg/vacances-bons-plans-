import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { campingThemes, campingThemeSlugs, getOffersForTheme } from "@/lib/campingThemes";

export const metadata: Metadata = {
  title: "Campings en France : sélections de mobil-homes par envie",
  description: "Bord de mer, parc aquatique, lac, montagne, Bretagne ou Sud : trouvez une sélection de campings avec mobil-homes en France.",
  alternates: { canonical: "/campings-france" },
};

export default function CampingsFrancePage() {
  return <>
    <section className="listing-hero"><div className="site-container"><nav className="article-breadcrumb"><Link href="/">Accueil</Link><span>/</span><span>Campings en France</span></nav><p className="eyebrow">Choisir selon ses envies</p><h1>Les campings en France, classés autrement.</h1><p className="listing-intro">Partez de ce qui compte vraiment pour vos vacances : plage accessible, parc aquatique, lac, montagne ou région. Chaque sélection utilise les offres françaises actuellement référencées.</p></div></section>
    <section className="section"><div className="site-container"><div className="destination-grid">
      {campingThemeSlugs.map((slug) => { const theme = campingThemes[slug]; const offers = getOffersForTheme(slug); return <Link className="destination-card destination-card-active" href={`/campings-france/${slug}`} key={slug}><div className="destination-card-image"><Image src={offers[0].image} alt={theme.title} fill sizes="(max-width:720px) 100vw, 33vw"/><strong>{offers.length} campings</strong></div><div className="destination-card-body"><div className="destination-card-topline"><span>France</span><small>{theme.name}</small></div><h2>{theme.name}</h2><p>{theme.intro}</p><strong className="destination-card-action">Voir la sélection →</strong></div></Link>; })}
    </div></div></section>
  </>;
}
