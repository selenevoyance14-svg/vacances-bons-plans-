import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Guides mobil-home, camping et réservation",
  description:
    "Guides indépendants pour acheter ou louer un mobil-home, choisir un camping et maîtriser le budget total de ses vacances.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <ArticleListingPage
      category="guide"
      eyebrow="Comprendre avant de réserver"
      title="Les guides qui évitent les mauvaises surprises"
      description="Coûts réels, contrats, réservation et organisation : nous expliquons les détails qui changent vraiment le budget d'un séjour en camping ou en mobil-home."
    />
  );
}
