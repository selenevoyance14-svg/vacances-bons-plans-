import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Affiliation Amazon",
  description: "Informations sur les liens affiliés Amazon présents sur Vacances Bons Plans.",
  alternates: { canonical: "/affiliation-amazon" },
};

export default function AffiliationAmazonPage() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose prose-slate">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-ocean-900 mb-6">
          Affiliation Amazon
        </h1>
        <p className="font-semibold text-ocean-900">
          En tant que Partenaire Amazon, je réalise un bénéfice sur les achats
          remplissant les conditions requises.
        </p>
        <p>
          Certains liens présents dans nos guides et comparatifs redirigent vers
          Amazon.fr et sont affiliés. Un achat réalisé après avoir suivi l&apos;un
          de ces liens peut générer une commission pour Vacances Bons Plans,
          sans surcoût pour vous.
        </p>
        <h2>Prix et disponibilité</h2>
        <p>
          Le site ne récupère pas de prix Amazon en temps réel. Les montants et
          fourchettes éventuellement cités servent uniquement de repères de budget
          à la date de publication de l&apos;article. Le prix applicable, la
          disponibilité, la livraison et les conditions de vente sont ceux
          affichés sur Amazon au moment de votre visite.
        </p>
        <h2>Indépendance éditoriale</h2>
        <p>
          Nos comparatifs sont organisés selon l&apos;usage, l&apos;encombrement,
          les caractéristiques annoncées et le budget. L&apos;affiliation ne garantit
          ni un produit ni un vendeur et ne remplace pas vos propres vérifications.
        </p>
      </div>
    </div>
  );
}
