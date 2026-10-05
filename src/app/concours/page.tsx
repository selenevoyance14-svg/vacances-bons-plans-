import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Jeux concours vacances et séjours",
  description: "Jeux concours gratuits pour gagner des voyages, séjours et activités en famille, avec les dates et conditions expliquées.",
  alternates: { canonical: "/concours" },
};

export default function ConcoursPage() {
  return (
    <ArticleListingPage
      category="concours"
      eyebrow="Tenter sa chance"
      title="Jeux concours voyages et famille"
      description="Des concours gratuits vérifiés à partir de leur règlement officiel : lots, dates, conditions et exclusions importantes."
    />
  );
}
