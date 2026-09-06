import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Destinations camping et mobil-home en famille",
  description:
    "Guides de destinations pour partir en famille : budgets, régions, campings, bonnes périodes et conseils pratiques.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <ArticleListingPage
      category="destination"
      eyebrow="Choisir où partir"
      title="30 destinations camping à comparer en famille"
      description="Méditerranée, Atlantique, lacs, campagne ou Europe : des guides concrets pour choisir le bon secteur, estimer le budget et vérifier les disponibilités chez Suncamp."
    />
  );
}
