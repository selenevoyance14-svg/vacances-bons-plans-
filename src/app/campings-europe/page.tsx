import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { europeCountryGuides, europeOffers, type EuropeCountrySlug } from "@/lib/europeCampingData";

export const metadata: Metadata = {
  title: "Campings en Europe : Italie, Espagne, Hongrie et Portugal",
  description: "Découvrez notre sélection de campings Suncamp en Italie, en Espagne et en Hongrie, ainsi que le suivi des offres au Portugal.",
  alternates: { canonical: "/campings-europe" },
};

const countries = Object.entries(europeCountryGuides) as [EuropeCountrySlug, (typeof europeCountryGuides)[EuropeCountrySlug]][];

export default function EuropeCampingsPage() {
  const totalOffers = Object.values(europeOffers).reduce((total, offers) => total + offers.length, 0);
  return (
    <>
      <section className="listing-hero europe-hero">
        <div className="site-container">
          <p className="eyebrow eyebrow-light">Italie · Espagne · Hongrie · Portugal</p>
          <h1>Les vacances en camping prennent la route de l’Europe.</h1>
          <p>{totalOffers} campings issus du flux Suncamp, avec leurs vraies villes, photos, notes et liens de réservation.</p>
        </div>
      </section>

      <section className="section">
        <div className="site-container">
          <div className="section-heading"><div><p className="eyebrow">Choisir un pays</p><h2>Où partir en camping en Europe ?</h2></div></div>
          <div className="europe-country-grid">
            {countries.map(([slug, country]) => {
              const offers = europeOffers[slug] ?? [];
              const image = offers[0]?.image;
              return (
                <Link href={`/campings-europe/${slug}`} key={slug} className="europe-country-card">
                  {image ? <Image src={image} alt={`Camping en ${country.name}`} fill sizes="(max-width: 760px) 100vw, 50vw" /> : <div className="europe-country-placeholder" />}
                  <span className="europe-country-shade" />
                  <span className="europe-country-copy">
                    <small>{offers.length ? `${offers.length} campings disponibles` : "Catalogue en attente"}</small>
                    <strong>{country.name}</strong>
                    <em>{country.highlights.join(" · ")}</em>
                  </span>
                </Link>
              );
            })}
          </div>
          <p className="partner-disclosure">Sélection issue du flux Suncamp contrôlé le 3 octobre 2026. Les prix et disponibilités dépendent des dates. Les liens sont affiliés et peuvent soutenir le site sans surcoût pour vous.</p>
        </div>
      </section>
    </>
  );
}
