import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Bons plans pour les vacances",
  description:
    "Séjours, campings et vacances familiales au bon prix : offres datées, conditions expliquées et conseils pour réserver.",
  alternates: { canonical: "/bons-plans" },
};

export default function BonsPlansPage() {
  return (
    <ArticleListingPage
      category="bon-plan"
      eyebrow="Payer le juste prix"
      title="Les bons plans qui méritent le détour"
      description="Une sélection resserrée d'offres et d'idées pour partir moins cher, avec des prix et des conditions à revérifier avant la réservation."
    />
  );
}
