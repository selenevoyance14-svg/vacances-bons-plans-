import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Destinations familiales et campings",
  description:
    "Guides de destinations pour partir en famille : budgets, régions, campings, bonnes périodes et conseils pratiques.",
  alternates: { canonical: "/destinations" },
};

export default function DestinationsPage() {
  return (
    <ArticleListingPage
      category="destination"
      eyebrow="Choisir où partir"
      title="Des destinations qui tiennent dans le budget"
      description="Bretagne, Vendée, Corse, Méditerranée ou Europe : des guides concrets pour savoir quand partir, où dormir et combien prévoir."
    />
  );
}
