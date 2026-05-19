import Link from "next/link";

export const metadata = {
  title: "Contact | Vacances Bons Plans",
  description:
    "Une question, une suggestion, une correction ? Contactez l'équipe de Vacances Bons Plans, votre guide indépendant pour voyager malin.",
};

export default function ContactPage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-6">
          Contact
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Une question sur un guide, une suggestion de destination à couvrir,
          une correction à signaler ? Nous lisons et répondons à tous les
          messages.
        </p>

        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 mb-8">
          <h2 className="text-2xl font-bold text-ocean-800 mb-4">
            Nous écrire
          </h2>
          <p className="text-slate-600 mb-4">
            Pour toute demande, écrivez-nous directement par email :
          </p>
          <a
            href="mailto:contact@vacances-bons-plans.fr"
            className="inline-block bg-ocean-600 hover:bg-ocean-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            contact@vacances-bons-plans.fr
          </a>
          <p className="text-sm text-slate-500 mt-4">
            Nous répondons sous 48 à 72 heures ouvrées.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-8">
          <div className="bg-ocean-50 border border-ocean-100 rounded-xl p-6">
            <h3 className="font-bold text-ocean-800 mb-2">
              Une erreur dans un article ?
            </h3>
            <p className="text-sm text-slate-600">
              Prix obsolète, lien cassé, information à corriger : indiquez-nous
              l&apos;URL concernée et la correction, nous la traiterons
              rapidement.
            </p>
          </div>
          <div className="bg-sun-50 border border-sun-100 rounded-xl p-6">
            <h3 className="font-bold text-ocean-800 mb-2">
              Suggestion de sujet
            </h3>
            <p className="text-sm text-slate-600">
              Une destination, un équipement, un type de séjour que vous
              aimeriez voir traité ? Dites-nous tout, nous prenons toutes les
              suggestions en compte.
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-ocean-800 mb-2">
              Partenariats et presse
            </h3>
            <p className="text-sm text-slate-600">
              Marque, voyagiste, agence : pour toute proposition de partenariat
              éditorial, utilisez l&apos;email ci-dessus avec l&apos;objet «
              Partenariat ».
            </p>
          </div>
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
            <h3 className="font-bold text-ocean-800 mb-2">
              Données personnelles
            </h3>
            <p className="text-sm text-slate-600">
              Pour exercer vos droits RGPD (accès, suppression, opposition),
              consultez notre{" "}
              <Link
                href="/confidentialite"
                className="text-ocean-600 hover:underline"
              >
                politique de confidentialité
              </Link>
              .
            </p>
          </div>
        </div>

        <div className="text-sm text-slate-500 border-t border-slate-200 pt-6">
          <p>
            Avant de nous écrire, vous trouverez peut-être votre réponse dans
            nos pages{" "}
            <Link
              href="/a-propos"
              className="text-ocean-600 hover:underline"
            >
              À propos
            </Link>{" "}
            ou{" "}
            <Link
              href="/mentions-legales"
              className="text-ocean-600 hover:underline"
            >
              Mentions légales
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
