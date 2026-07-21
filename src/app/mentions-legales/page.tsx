import Link from "next/link";

export const metadata = {
  title: "Mentions légales | Vacances Bons Plans",
  description:
    "Mentions légales du site Vacances Bons Plans : éditeur, hébergeur, propriété intellectuelle et responsabilité.",
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-slate">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-6">
          Mentions légales
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Dernière mise à jour : 19 mai 2026
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Éditeur du site
        </h2>
        <p>
          Le site <strong>vacances-bons-plans.fr</strong> est édité par Nathalie L.,
          en qualité d&apos;éditrice indépendante.
        </p>
        <p>
          <strong>Contact :</strong>{" "}
          <a
            href="mailto:contact@vacances-bons-plans.fr"
            className="text-ocean-600 hover:underline"
          >
            contact@vacances-bons-plans.fr
          </a>
        </p>
        <p>
          <strong>Directrice de la publication :</strong> Nathalie L.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Hébergement
        </h2>
        <p>
          Le site est hébergé par <strong>Cloudflare Pages</strong>
          <br />
          Cloudflare, Inc. — 101 Townsend Street, San Francisco, CA 94107,
          États-Unis
          <br />
          Site :{" "}
          <a
            href="https://www.cloudflare.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-600 hover:underline"
          >
            cloudflare.com
          </a>
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Propriété intellectuelle
        </h2>
        <p>
          L&apos;ensemble du contenu présent sur ce site (textes, images,
          logos, comparatifs, guides) est protégé par les lois en vigueur sur la
          propriété intellectuelle. Toute reproduction, totale ou partielle,
          sans autorisation écrite préalable est interdite.
        </p>
        <p>
          Les marques citées (Cdiscount Voyage, Havas, Auchan Voyages, Leclerc
          Voyages, Amazon et autres) restent la propriété exclusive de leurs
          détenteurs respectifs et ne sont mentionnées qu&apos;à titre
          informatif.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Liens d&apos;affiliation
        </h2>
        <p>
          Ce site participe au programme Partenaires Amazon EU, un programme
          d&apos;affiliation conçu pour permettre à des sites de percevoir une
          rémunération grâce à la création de liens vers Amazon.fr. Certains
          liens présents sur ce site sont des liens affiliés : si vous effectuez
          un achat après avoir cliqué sur l&apos;un de ces liens, nous pouvons
          percevoir une commission, sans surcoût pour vous.
        </p>
        <p>
          Cette rémunération ne modifie en aucun cas notre ligne éditoriale ni
          le contenu de nos recommandations. Nous nous efforçons de proposer une
          sélection honnête et utile à nos lecteurs.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Responsabilité
        </h2>
        <p>
          Les informations publiées sur vacances-bons-plans.fr sont fournies à
          titre indicatif. Les prix, disponibilités et conditions des offres
          présentées peuvent évoluer à tout moment sans préavis. Nous invitons
          les lecteurs à vérifier les informations sur les sites des marchands
          avant tout achat ou réservation.
        </p>
        <p>
          L&apos;éditeur ne saurait être tenu responsable des erreurs ou
          omissions, ni des conséquences directes ou indirectes liées à
          l&apos;utilisation des informations diffusées sur le site.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Données personnelles
        </h2>
        <p>
          Le traitement des données personnelles est détaillé dans notre{" "}
          <Link
            href="/confidentialite"
            className="text-ocean-600 hover:underline"
          >
            politique de confidentialité
          </Link>
          .
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">Contact</h2>
        <p>
          Pour toute question, suggestion ou demande, vous pouvez nous écrire à{" "}
          <a
            href="mailto:contact@vacances-bons-plans.fr"
            className="text-ocean-600 hover:underline"
          >
            contact@vacances-bons-plans.fr
          </a>
          .
        </p>
      </div>
    </div>
  );
}
