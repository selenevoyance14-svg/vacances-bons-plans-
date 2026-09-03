import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Découvrez l’histoire de Vacances Bons Plans, né à Fréjus d’un rêve de mobil-home et d’une volonté de rendre les vrais prix plus faciles à comprendre.",
  alternates: { canonical: "/a-propos" },
};

export default function AProposPage() {
  return (
    <>
      <section className="about-hero">
        <div className="site-container">
          <nav className="article-breadcrumb" aria-label="Fil d’Ariane">
            <Link href="/">Accueil</Link><span aria-hidden>/</span><span>À propos</span>
          </nav>
          <p className="eyebrow">L’histoire du site</p>
          <h1>Un rêve de mobil-home, né à Fréjus.</h1>
          <p>
            Vacances Bons Plans est parti d’une envie très personnelle : mieux
            comprendre les prix, les campings et les règles du mobil-home pour,
            un jour, pouvoir en acquérir un dans ma ville.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="site-container about-story-grid">
          <aside>
            <span className="about-signature">N</span>
            <strong>Nathalie</strong>
            <small>Fondatrice de Vacances Bons Plans</small>
          </aside>
          <div className="about-prose">
            <p className="about-lead">
              J’habite à Fréjus, au cœur d’une région où le camping et le
              mobil-home font partie du paysage. Mon rêve serait de pouvoir
              acheter un mobil-home dans ma ville.
            </p>
            <p>
              En commençant mes recherches, j’ai découvert un univers beaucoup
              moins simple qu’il n’y paraît : prix de la parcelle, règlements du
              camping, sous-location, frais annexes, différences considérables
              entre juin et août… Il faut souvent consulter de nombreuses pages
              avant de comprendre ce qu’un séjour ou un achat coûtera réellement.
            </p>
            <p>
              C’est ainsi qu’est né Vacances Bons Plans. D’abord comme un guide
              pour rassembler mes recherches, puis comme un site destiné à aider
              d’autres familles à comparer plus facilement et à éviter les
              mauvaises surprises.
            </p>
            <blockquote>
              Mon objectif n’est pas d’afficher le prix le plus spectaculaire,
              mais le prix le plus utile : celui que l’on peut réellement obtenir,
              avec les conditions et les frais qui l’accompagnent.
            </blockquote>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="site-container">
          <div className="section-heading">
            <div><p className="eyebrow">La méthode</p><h2>Ce que je veux apporter</h2></div>
          </div>
          <div className="about-values-grid">
            <article><span>01</span><h3>Des prix expliqués</h3><p>La période, la capacité, les options et les frais comptent autant que le prix d’appel.</p></article>
            <article><span>02</span><h3>Une sélection resserrée</h3><p>Moins de listes interminables, davantage d’informations pour prendre une décision.</p></article>
            <article><span>03</span><h3>Une vraie transparence</h3><p>Les liens affiliés sont signalés et n’augmentent pas le prix payé par le lecteur.</p></article>
          </div>
        </div>
      </section>

      <section className="about-next">
        <div className="site-container about-next-grid">
          <div><p className="eyebrow eyebrow-light">Le premier terrain de recherche</p><h2>Naturellement, on commence par le Var.</h2></div>
          <div>
            <p>Fréjus, Saint-Aygulf, Hyères, le golfe de Saint-Tropez et l’arrière-pays : la première sélection locale du site est en ligne.</p>
            <Link href="/mobil-home/var" className="button button-light">Découvrir le guide du Var <span aria-hidden>→</span></Link>
          </div>
        </div>
      </section>
    </>
  );
}
