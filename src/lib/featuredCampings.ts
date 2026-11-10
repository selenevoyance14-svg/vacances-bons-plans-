import { cityGuides } from "@/lib/cityGuides";
import { departmentGuides } from "@/lib/departmentGuides";
import { suncampOffersByDepartment, suncampVarOffers, type SuncampOffer } from "@/lib/suncampOffers";

export type FeaturedCamping = SuncampOffer & {
  slug: string;
  departmentSlug: string;
  departmentName: string;
  region: string;
  citySlug?: string;
  editorialAngle: string;
};

const selections: Record<string, string> = {
  "113266": "Un point de chute au bord du lac de Serre-Ponçon pour alterner baignade, randonnée et panoramas alpins.",
  "116148": "Une adresse de Bretagne nord adaptée aux familles qui veulent combiner plage, sentier côtier et petites stations balnéaires.",
  "125476": "Un séjour méditerranéen en Haute-Corse, entre plage, pinède et excursions vers Bastia ou la Castagniccia.",
  "107530": "Une base au sud du lac d’Annecy pour profiter de l’eau, de la voie verte et des randonnées des Alpes.",
  "111087": "Un grand domaine au cœur des volcans d’Auvergne, pratique pour découvrir le Sancy et le lac Chambon.",
  "100252": "Un camping face aux rochers de la Côte de Granit Rose, idéal pour les balades sur le GR34.",
  "100300": "Une adresse entre les mégalithes de Carnac, les plages du Morbihan et les excursions dans le golfe.",
  "100551": "Un camping sur la Côte Bleue pour conjuguer baignade en Méditerranée, calanques et découverte de Martigues.",
  "101061": "Une base nature à Castellane pour explorer les gorges du Verdon, pratiquer le canoë et randonner.",
  "101216": "Trois lacs et un environnement de campagne aux portes des Alpes pour des vacances familiales au grand air.",
  "100261": "Un domaine proche de Saint-Malo qui facilite les sorties vers la vallée de la Rance et la Côte d’Émeraude.",
  "100496": "Une adresse au bord de la Dourbie pour découvrir Millau, son viaduc et les paysages des Grands Causses.",
  "100560": "Un cinq étoiles en accès direct à la Méditerranée, entre plage catalane, Perpignan et premières montagnes.",
  "111513": "Un camping près des marais salants de Guérande et des plages, bien placé pour parcourir la presqu’île à vélo.",
  "118174": "Une étape dans la vallée de la Loue pour découvrir Ornans, les rivières et les reliefs du Jura.",
  "119905": "Une option paisible dans la montagne bourbonnaise, entre forêts, villages et escapades vers Vichy.",
  "121416": "Une adresse proche de la plage de La Franqui, des étangs de Leucate et des paysages des Corbières.",
  "109669": "Un camping de la côte médocaine pour profiter de l’Atlantique, des pistes cyclables et de Soulac-sur-Mer.",
  "103499": "Une base sur la Côte de Nacre pour réunir plage, Caen et découverte des sites du Débarquement.",
  "103717": "Un domaine familial près de Chambord, idéal pour associer châteaux de la Loire, vélo et espace aquatique.",
  "103466": "Un camping dans la pinède du Cap-Ferret pour choisir entre les villages du bassin, les pistes cyclables et l’océan.",
  "121555": "Un grand domaine du Médoc proche de l’Atlantique, adapté aux familles qui recherchent plage, vélo et animations.",
  "108461": "Une base au bord du Rhône pour visiter Avignon, le pont du Gard et les villages du Gard provençal.",
  "109105": "Un séjour paisible dans la vallée de la Cèze, entre villages de pierre, rivière et paysages de garrigue.",
  "103605": "Une adresse dans l’arrière-pays immédiat de Deauville pour découvrir la Côte Fleurie sans séjourner au cœur de la station.",
  "103860": "Un vaste domaine de Sologne pour alterner activités sur place, nature et excursions vers les châteaux de la Loire.",
  "107477": "Un parc de vacances au vert en Seine-et-Marne, pratique pour des journées de repos et des excursions dans l’est francilien.",
  "100266": "Une adresse dans la vallée du Grand Morin pour combiner campagne, petites villes de caractère et sorties familiales.",
  "118265": "Un camping du Pays Bigouden pour profiter des phares, des ports et des grandes plages du sud Finistère.",
  "103213": "Un domaine historique aux portes de Quimper, bien placé pour mêler patrimoine, jardin et excursions vers la côte.",
  "103216": "Une base familiale près des plages de Fouesnant pour découvrir Beg-Meil, Cap-Coz et l’archipel des Glénan.",
  "103219": "Un camping à Bénodet pour combiner plage, promenade sur l’Odet et découvertes du pays fouesnantais.",
  "100474": "Une adresse dans la vallée de l’Eyrieux pour privilégier rivière, vélo sur la Dolce Via et vacances au calme.",
  "100498": "Un camping près de Vallon-Pont-d’Arc pour organiser canoë, baignade et découverte des gorges de l’Ardèche.",
  "101490": "Un domaine familial près de la rivière à Sampzon, au cœur des grands sites du sud Ardèche.",
  "100420": "Une base verte aux portes de Périgueux pour explorer le patrimoine et les paysages du Périgord central.",
  "103756": "Une adresse du Périgord Noir entre Sarlat, Lascaux et les villages de la vallée de la Dordogne.",
  "104213": "Un camping au bord de l’Ain pour rayonner vers les lacs du Jura, les cascades et les sentiers familiaux.",
  "100363": "Un domaine à Clairvaux-les-Lacs pour placer baignade, activités nautiques et découverte du Jura au centre du séjour.",
  "103308": "Un camping du Cotentin face à la mer pour associer plages, ports et excursions vers Cherbourg ou Barfleur.",
  "100366": "Une adresse entre océan, port de Bourgenay et pistes cyclables pour découvrir le littoral vendéen en famille.",
  "100388": "Un grand camping de La Palmyre entre pinède, parc aquatique et plages de la Côte Sauvage.",
  "100507": "Une base au bord du lac de Léon pour alterner baignade calme, vélo en forêt et journées sur l’océan.",
  "100543": "Un domaine méditerranéen adapté aux familles qui veulent plage, animations et excursions autour de Béziers.",
  "100547": "Une adresse du littoral héraultais pour profiter de la mer tout en gardant le Canal du Midi et Pézenas accessibles.",
  "100987": "Un séjour au bord du lac de Sanguinet, pratique avec de jeunes enfants et proche de Biscarrosse.",
  "101177": "Une base francilienne au vert pour combiner repos au camping et escapades vers Paris ou Saint-Germain-en-Laye.",
  "103360": "Un domaine vendéen près du lac du Jaunay, avec de nombreuses activités et l’océan accessible en excursion.",
  "103420": "Une adresse dans la forêt de La Coubre, entre pistes cyclables, La Palmyre et plages atlantiques.",
  "103479": "Un grand resort des Landes proche de l’océan, pensé pour les familles qui recherchent beaucoup d’équipements.",
  "103932": "Un vaste domaine près de l’Aisne pour associer nature, patrimoine et excursions familiales dans le nord de la France.",
  "103999": "Une base arborée près de Montpellier pour rayonner entre ville, garrigue et plages méditerranéennes.",
  "104006": "Un camping entre étangs et Méditerranée, intéressant pour découvrir les espaces naturels autour de Frontignan.",
  "104021": "Un grand domaine à Vias pour les familles qui privilégient parc aquatique, services et proximité du littoral.",
  "104036": "Une adresse animée près de Valras-Plage pour associer journées de baignade et sorties vers Béziers.",
  "104404": "Un cinq étoiles à Fréjus pour profiter d’un grand espace aquatique et explorer l’Estérel.",
  "104405": "Un domaine familial sur les hauteurs de Fréjus, entre animations, bien-être et plages de la Côte d’Azur.",
  "104409": "Une base calme près de Saint-Raphaël pour rejoindre les criques, la Corniche d’Or et les sentiers de l’Estérel.",
  "104410": "Un camping près des étangs de Villepey pour combiner plage, nature et découverte de Fréjus.",
  "108484": "Une adresse à Agay au pied des roches rouges de l’Estérel, adaptée aux amateurs de criques et de randonnée.",
  "108496": "Une option plus paisible à Roquebrune-sur-Argens pour profiter de la Provence, de la piscine et des plages en excursion.",
  "108789": "Un vaste domaine près de l’île d’Oléron, intéressant pour alterner espace aquatique, marais et sorties sur le littoral.",
  "109870": "Une adresse dans la pinède vendéenne, à proximité de la plage des Conches et des pistes cyclables.",
  "111515": "Un camping boisé face à Noirmoutier pour combiner plage, forêt de pins et découverte du marais breton.",
  "116528": "Une option sur l’île de Ré pour privilégier la plage, le vélo et les villages, sans rechercher un grand parc aquatique.",
  "117882": "Un camping familial dans la pinède de La Palmyre, entre pistes cyclables, zoo et plages de la Côte Sauvage.",
  "121352": "Une adresse près de Valras pour les familles qui veulent piscine, animations et accès rapide à la Méditerranée.",
  "121355": "Un village sous les pins dans les Landes, adapté aux séjours entre lacs, forêt, vélo et océan.",
  "122897": "Une étape originale dans la Vienne pour dormir au bord de l’eau et privilégier un séjour nature loin du littoral.",
};

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const allOffers = [
  ...Object.entries(suncampOffersByDepartment).flatMap(([departmentSlug, offers]) =>
    offers.map((offer) => ({ departmentSlug, offer })),
  ),
  ...suncampVarOffers.map((offer) => ({ departmentSlug: "var", offer })),
];

export const featuredCampings: FeaturedCamping[] = Object.entries(selections).flatMap(([id, editorialAngle]) => {
  const match = allOffers.find(({ offer }) => offer.id === id);
  if (!match) return [];
  const department = departmentGuides[match.departmentSlug] ?? (match.departmentSlug === "var" ? { name: "Var", region: "Provence-Alpes-Côte d’Azur" } : undefined);
  if (!department) return [];
  const citySlug = slugify(match.offer.city);
  return [{
    ...match.offer,
    slug: `${slugify(match.offer.name)}-${citySlug}`,
    departmentSlug: match.departmentSlug,
    departmentName: department.name,
    region: department.region,
    citySlug: cityGuides[`${match.departmentSlug}/${citySlug}`] ? citySlug : undefined,
    editorialAngle,
  }];
});

export const featuredCampingsBySlug = Object.fromEntries(
  featuredCampings.map((camping) => [camping.slug, camping]),
) as Record<string, FeaturedCamping>;

export const featuredCampingsById = Object.fromEntries(
  featuredCampings.map((camping) => [camping.id, camping]),
) as Record<string, FeaturedCamping>;
