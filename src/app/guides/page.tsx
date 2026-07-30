import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Guides mobil-home, camping et voyage",
  description:
    "Guides indépendants pour acheter ou louer un mobil-home, préparer un séjour en camping et organiser ses vacances.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <ArticleListingPage
      category="guide"
      eyebrow="Comprendre avant de réserver"
      title="Les guides qui évitent les mauvaises surprises"
      description="Coûts réels, contrats, équipement, bagages et organisation : nous expliquons les détails qui changent vraiment votre budget vacances."
    />
  );
}
