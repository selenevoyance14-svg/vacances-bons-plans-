import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { mobilHomeDestinations } from "@/lib/mobilHomeDestinations";
import { suncampOffersByDepartment, suncampVarOffers } from "@/lib/suncampOffers";
import { getCityGuidesForDepartment } from "@/lib/cityGuides";
import MobilHomeDestinationSelector from "@/app/components/MobilHomeDestinationSelector";

export const metadata: Metadata = {
  title: "Location de mobil-home pas cher : destinations et vrais prix",
  description:
    "Comparez les destinations pour louer un mobil-home : budgets indicatifs, frais à prévoir, meilleurs secteurs et offres vérifiées.",
  alternates: { canonical: "/mobil-home" },
};

export default function MobilHomePage() {
  const selectorDestinations = mobilHomeDestinations.map((destination) => ({
    slug: destination.slug,
    name: `${destination.departmentNumber} · ${destination.name}`,
    cities: getCityGuidesForDepartment(destination.slug).map((city) => ({
      slug: city.slug,
      name: city.name,
    })),
  }));
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Locations de mobil-homes par destination",
    description:
      "Guides locaux pour comparer les locations de mobil-homes et leur prix total.",
    url: "https://vacances-bons-plans.fr/mobil-home",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: mobilHomeDestinations.map((destination, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: destination.name,
        url: destination.available
          ? `https://vacances-bons-plans.fr/mobil-home/${destination.slug}`
          : undefined,
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section className="listing-hero mobil-home-hero">
        <div className="site-container">
          <nav className="article-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link>
            <span aria-hidden>/</span>
            <span>Mobil-homes</span>
          </nav>
          <p className="eyebrow">Comparer avant de réserver</p>
          <h1>Un mobil-home au bon prix, sans frais oubliés.</h1>
          <p className="listing-intro">
            Choisissez une destination, repérez les secteurs qui vous correspondent
            et vérifiez le budget complet du séjour avant de rejoindre le partenaire.
          </p>
          <div className="method-pills" aria-label="Notre méthode">
            <span>Prix total expliqué</span>
            <span>Informations datées</span>
            <span>Redirection vers le partenaire</span>
          </div>
          <MobilHomeDestinationSelector destinations={selectorDestinations} />
        </div>
      </section>

      <section className="section destination-directory">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">10 destinations à comparer</p>
              <h2>De la Méditerranée aux côtes de la Manche.</h2>
            </div>
          </div>
          <div className="destination-grid">
            {mobilHomeDestinations.map((destination) => {
              const offers = destination.slug === "var"
                ? suncampVarOffers
                : (suncampOffersByDepartment[destination.slug] ?? []);
              const preview = offers[0];
              const content = (
                <>
                  {preview ? (
                    <div className="destination-card-image">
                      <Image
                        src={preview.image}
                        alt={`Camping avec mobil-home en ${destination.name}`}
                        fill
                        sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"
                      />
                      <strong>{offers.length} locations</strong>
                    </div>
                  ) : null}
                  <div className="destination-card-body">
                    <div className="destination-card-topline">
                      <span>{destination.departmentNumber}</span>
                      <small>{destination.region}</small>
                    </div>
                    <h3>{destination.name}</h3>
                    <p>{destination.summary}</p>
                    <ul>
                      {destination.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                    {preview ? (
                      <small className="destination-card-example">
                        À découvrir : {preview.name}
                      </small>
                    ) : null}
                    <strong className="destination-card-action">
                      {destination.available ? "Voir toutes les locations →" : "Guide en préparation"}
                    </strong>
                  </div>
                </>
              );

              return destination.available ? (
                <Link
                  key={destination.slug}
                  href={`/mobil-home/${destination.slug}`}
                  className="destination-card destination-card-active"
                >
                  {content}
                </Link>
              ) : (
                <article key={destination.slug} className="destination-card destination-card-upcoming">
                  {content}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="editorial-promise">
        <div className="site-container editorial-promise-grid">
          <div>
            <p className="eyebrow eyebrow-light">Ce que nous comparerons</p>
            <h2>Le prix affiché n’est que le début de l’histoire.</h2>
          </div>
          <ul>
            <li>Le prix pour les bonnes dates et le bon nombre de voyageurs</li>
            <li>Le ménage, les draps, la taxe de séjour et les frais obligatoires</li>
            <li>La distance réelle de la plage et les équipements compris</li>
            <li>Les conditions d’annulation et la date de vérification de l’offre</li>
          </ul>
        </div>
      </section>
    </>
  );
}
