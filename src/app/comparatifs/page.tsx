import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Essentiels pour préparer ses vacances",
  description:
    "Valises, sacs et accessoires réellement utiles pour préparer des vacances familiales sans achats superflus.",
  alternates: { canonical: "/comparatifs" },
};

export default function ComparatifsPage() {
  return (
    <ArticleListingPage
      category="comparatif"
      eyebrow="Préparer sans surconsommer"
      title="Les essentiels qui simplifient vraiment le départ"
      description="Une rubrique secondaire et volontairement resserrée : bagages, organisation et matériel de camping familial, choisis pour répondre à un besoin concret."
    />
  );
}
