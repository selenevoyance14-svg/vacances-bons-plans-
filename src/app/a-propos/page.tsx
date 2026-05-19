import Link from "next/link";

export const metadata = {
  title: "À propos | Vacances Bons Plans",
  description:
    "Découvrez l'histoire et la mission de Vacances Bons Plans : un guide indépendant pour voyager malin, comparer les séjours et trouver les meilleurs bons plans voyage.",
};

export default function AProposPage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-6">
          À propos de Vacances Bons Plans
        </h1>

        <p className="text-lg text-slate-600 leading-relaxed mb-8">
          Vacances Bons Plans est un guide indépendant créé pour aider les
          familles, les couples et les voyageurs solos à partir en vacances sans
          se ruiner — et sans y passer des heures de recherche.
        </p>

        <div className="prose prose-slate max-w-none">
          <h2 className="text-2xl font-bold text-ocean-800 mt-10 mb-3">
            Pourquoi ce site
          </h2>
          <p>
            Tout est parti d&apos;un constat simple : trouver un séjour
            abordable, comparer les offres entre Cdiscount Voyage, Havas,
            Leclerc, Auchan et les voyagistes en ligne, choisir le bon
            équipement avant de partir… c&apos;est un travail à plein temps.
            Pendant des années, j&apos;ai passé des dizaines d&apos;heures à
            comparer, à éplucher les avis, à tester du matériel de voyage
            (parfois excellent, souvent décevant).
          </p>
          <p>
            J&apos;ai créé ce site pour partager ce que j&apos;ai retenu :
            quelles destinations partir hors saison, quel équipement vaut
            vraiment son prix, où trouver les meilleures offres de séjour
            tout-compris, et comment voyager en mobil-home ou camping sans
            sacrifier le confort.
          </p>

          <h2 className="text-2xl font-bold text-ocean-800 mt-10 mb-3">
            Notre approche
          </h2>
          <p>
            Vacances Bons Plans n&apos;est pas un site de comparateur
            automatisé. Chaque guide est rédigé par une vraie personne, à partir
            d&apos;une recherche éditoriale réelle et, quand c&apos;est
            possible, d&apos;une expérience personnelle.
          </p>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>
              <strong>Indépendance éditoriale</strong> : aucune marque ne paie
              pour figurer en bonne position dans nos guides. Notre seule
              source de financement est l&apos;affiliation (commissions
              versées par les marchands quand un lecteur achète, sans surcoût
              pour lui).
            </li>
            <li>
              <strong>Sélection rigoureuse</strong> : nous ne recommandons que
              des produits ou services que nous jugeons honnêtement utiles. Si
              un produit nous semble mauvais, il n&apos;apparaît pas dans nos
              comparatifs.
            </li>
            <li>
              <strong>Mise à jour régulière</strong> : les prix, disponibilités
              et offres voyage évoluent vite. Nous mettons à jour nos articles
              dès que nous détectons un changement majeur.
            </li>
            <li>
              <strong>Transparence</strong> : chaque lien d&apos;affiliation est
              signalé. Notre{" "}
              <Link
                href="/mentions-legales"
                className="text-ocean-600 hover:underline"
              >
                page de mentions légales
              </Link>{" "}
              détaille notre fonctionnement.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-ocean-800 mt-10 mb-3">
            Ce que vous trouverez ici
          </h2>
          <ul className="list-disc pl-6 my-4 space-y-2">
            <li>
              <Link
                href="/destinations"
                className="text-ocean-600 hover:underline"
              >
                Des guides de destinations
              </Link>{" "}
              (Corse, Crète, Croatie, Albanie, Italie du Sud…) avec budgets
              réalistes et bonnes périodes pour partir.
            </li>
            <li>
              <Link
                href="/bons-plans"
                className="text-ocean-600 hover:underline"
              >
                Des bons plans voyage
              </Link>{" "}
              actualisés : séjours tout-compris, offres camping, mobil-home en
              France.
            </li>
            <li>
              <Link
                href="/comparatifs"
                className="text-ocean-600 hover:underline"
              >
                Des comparatifs d&apos;équipement
              </Link>{" "}
              : valises, sacs à dos, batteries externes, chargeurs solaires,
              kits de premiers secours, accessoires de mobil-home…
            </li>
            <li>
              <Link
                href="/guides"
                className="text-ocean-600 hover:underline"
              >
                Des guides pratiques
              </Link>{" "}
              pour préparer son voyage : choisir sa valise cabine, son
              adaptateur universel, son oreiller de voyage, etc.
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-ocean-800 mt-10 mb-3">
            Notre engagement
          </h2>
          <p>
            Nous croyons qu&apos;un guide voyage utile doit avant tout être
            honnête. Pas de listes interminables de produits sans intérêt, pas
            de promesses irréalistes sur des destinations « à 200€ tout
            inclus » qui n&apos;existent qu&apos;une semaine par an. Nous
            préférons un seul bon conseil bien expliqué qu&apos;une avalanche
            de recommandations vagues.
          </p>
          <p>
            Si vous repérez une erreur, une information dépassée ou un produit
            qui ne mériterait pas d&apos;être recommandé, écrivez-nous :{" "}
            <a
              href="mailto:contact@vacances-bons-plans.fr"
              className="text-ocean-600 hover:underline"
            >
              contact@vacances-bons-plans.fr
            </a>
            . Vos retours nous aident à améliorer le site.
          </p>

          <h2 className="text-2xl font-bold text-ocean-800 mt-10 mb-3">
            Bonne route !
          </h2>
          <p>
            Que vous prépariez un week-end en Corse, deux semaines en Crète, un
            road-trip en Italie du Sud ou simplement votre première valise
            cabine, j&apos;espère que ce site vous fera gagner du temps — et
            quelques euros au passage.
          </p>

          <p className="mt-8 text-slate-500 italic">
            — Yann, fondatrice de Vacances Bons Plans
          </p>
        </div>
      </div>
    </div>
  );
}
