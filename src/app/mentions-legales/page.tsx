export const metadata = {
  title: "Mentions legales | Vacances Bons Plans",
};

export default function MentionsLegales() {
  return (
    <div className="py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 prose">
        <h1>Mentions legales</h1>
        <h2>Editeur du site</h2>
        <p>
          Le site vacances-bons-plans.fr est un site de comparaison et
          d&apos;information sur les offres de voyage. Il participe a des
          programmes d&apos;affiliation qui permettent de percevoir une
          commission lorsqu&apos;un achat est realise via les liens presents sur
          le site.
        </p>
        <h2>Hebergement</h2>
        <p>Ce site est heberge par Vercel Inc., San Francisco, CA, USA.</p>
        <h2>Propriete intellectuelle</h2>
        <p>
          L&apos;ensemble du contenu de ce site (textes, images, logos) est
          protege par le droit d&apos;auteur. Toute reproduction est interdite
          sans autorisation prealable.
        </p>
        <h2>Responsabilite</h2>
        <p>
          Les informations et prix affiches sont donnes a titre indicatif et
          peuvent evoluer. Nous ne sommes pas responsables des offres proposees
          par les sites partenaires. Verifiez toujours les conditions sur le
          site du voyagiste avant de reserver.
        </p>
      </div>
    </div>
  );
}
