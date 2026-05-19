import Link from "next/link";

export const metadata = {
  title: "Politique de confidentialité | Vacances Bons Plans",
  description:
    "Politique de confidentialité du site Vacances Bons Plans : cookies, données collectées, AdSense, affiliation et droits RGPD.",
};

export default function ConfidentialitePage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-slate">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-6">
          Politique de confidentialité
        </h1>
        <p className="text-sm text-slate-500 mb-8">
          Dernière mise à jour : 19 mai 2026
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Préambule
        </h2>
        <p>
          La présente politique de confidentialité a pour objet de vous informer
          sur la manière dont vos données personnelles sont collectées,
          utilisées et protégées lorsque vous consultez le site
          vacances-bons-plans.fr. Nous nous engageons à respecter le Règlement
          général sur la protection des données (RGPD) et la loi française
          Informatique et Libertés.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Responsable du traitement
        </h2>
        <p>
          Yann L., éditrice du site vacances-bons-plans.fr
          <br />
          Contact :{" "}
          <a
            href="mailto:contact@vacances-bons-plans.fr"
            className="text-ocean-600 hover:underline"
          >
            contact@vacances-bons-plans.fr
          </a>
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Données collectées
        </h2>
        <p>
          La simple consultation du site ne nécessite aucune inscription. Nous
          ne collectons aucune donnée personnelle directement via un formulaire
          de contact ou d&apos;inscription.
        </p>
        <p>
          En revanche, certaines données techniques peuvent être collectées
          automatiquement par les services tiers que nous utilisons (voir
          ci-dessous) : adresse IP, type de navigateur, pages consultées, durée
          de visite, source de trafic.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Cookies et services tiers
        </h2>
        <p>
          Ce site utilise des cookies et services tiers pour fonctionner et pour
          financer son activité éditoriale :
        </p>

        <h3 className="text-xl font-semibold text-ocean-700 mt-6 mb-2">
          Google AdSense
        </h3>
        <p>
          Nous utilisons Google AdSense pour afficher des publicités. Google
          utilise des cookies pour diffuser des annonces en fonction de vos
          visites précédentes sur notre site ou sur d&apos;autres sites.
          L&apos;utilisation des cookies publicitaires par Google permet à ses
          partenaires et à lui-même de diffuser des annonces auprès des
          utilisateurs en fonction de leurs visites sur les différents sites
          internet.
        </p>
        <p>
          Vous pouvez désactiver l&apos;utilisation des cookies publicitaires en
          consultant la page{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-600 hover:underline"
          >
            Règles relatives à la publicité de Google
          </a>{" "}
          ou via{" "}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-600 hover:underline"
          >
            les paramètres des annonces Google
          </a>
          .
        </p>

        <h3 className="text-xl font-semibold text-ocean-700 mt-6 mb-2">
          Programme Partenaires Amazon
        </h3>
        <p>
          Nous participons au Programme Partenaires Amazon EU. Lorsque vous
          cliquez sur un lien Amazon depuis notre site, des cookies peuvent être
          déposés par Amazon afin de tracer une éventuelle commande.
        </p>

        <h3 className="text-xl font-semibold text-ocean-700 mt-6 mb-2">
          Hébergement Cloudflare
        </h3>
        <p>
          Notre hébergeur, Cloudflare, peut collecter certaines données
          techniques (adresse IP, en-têtes HTTP) à des fins de sécurité et de
          performance.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Durée de conservation
        </h2>
        <p>
          Les cookies tiers ont une durée de vie déterminée par les services
          eux-mêmes (généralement de quelques jours à 13 mois maximum,
          conformément aux recommandations de la CNIL).
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Vos droits
        </h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, d&apos;effacement, de limitation, d&apos;opposition et
          de portabilité concernant vos données personnelles.
        </p>
        <p>
          Pour exercer ces droits, vous pouvez nous contacter à{" "}
          <a
            href="mailto:contact@vacances-bons-plans.fr"
            className="text-ocean-600 hover:underline"
          >
            contact@vacances-bons-plans.fr
          </a>
          .
        </p>
        <p>
          Vous disposez également du droit d&apos;introduire une réclamation
          auprès de la CNIL (
          <a
            href="https://www.cnil.fr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ocean-600 hover:underline"
          >
            cnil.fr
          </a>
          ).
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Comment refuser les cookies
        </h2>
        <p>
          Vous pouvez configurer votre navigateur pour refuser tous les cookies
          ou être averti lorsqu&apos;un cookie est envoyé. Veuillez consulter la
          rubrique d&apos;aide de votre navigateur (Chrome, Firefox, Safari,
          Edge) pour savoir comment procéder.
        </p>

        <h2 className="text-2xl font-bold text-ocean-800 mt-8 mb-3">
          Modifications
        </h2>
        <p>
          La présente politique de confidentialité peut être modifiée à tout
          moment. Nous vous invitons à la consulter régulièrement. La date de
          dernière mise à jour figure en haut de cette page.
        </p>

        <p className="mt-8">
          <Link
            href="/mentions-legales"
            className="text-ocean-600 hover:underline"
          >
            Consulter les mentions légales →
          </Link>
        </p>
      </div>
    </div>
  );
}
