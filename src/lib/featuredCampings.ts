import { cityGuides } from "@/lib/cityGuides";
import { departmentGuides } from "@/lib/departmentGuides";
import { suncampOffersByDepartment, type SuncampOffer } from "@/lib/suncampOffers";

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
};

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const allOffers = Object.entries(suncampOffersByDepartment).flatMap(([departmentSlug, offers]) =>
  offers.map((offer) => ({ departmentSlug, offer })),
);

export const featuredCampings: FeaturedCamping[] = Object.entries(selections).flatMap(([id, editorialAngle]) => {
  const match = allOffers.find(({ offer }) => offer.id === id);
  if (!match) return [];
  const department = departmentGuides[match.departmentSlug];
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
