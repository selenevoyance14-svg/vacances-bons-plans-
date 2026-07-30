import ArticleListingPage from "@/app/components/ArticleListingPage";

export const metadata = {
  title: "Comparatifs d'équipement pour voyager",
  description:
    "Comparatifs de valises, sacs, accessoires de camping et matériel de voyage pour acheter seulement ce qui est utile.",
  alternates: { canonical: "/comparatifs" },
};

export default function ComparatifsPage() {
  return (
    <ArticleListingPage
      category="comparatif"
      eyebrow="Choisir sans se perdre"
      title="L'équipement utile, vraiment comparé"
      description="Des comparatifs lisibles pour choisir une valise, un sac, un accessoire de camping ou un équipement familial adapté à votre usage."
    />
  );
}
