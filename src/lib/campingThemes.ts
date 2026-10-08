import { suncampOffersByDepartment, suncampVarOffers, type SuncampOffer } from "@/lib/suncampOffers";

export type CampingThemeSlug = "bord-de-mer" | "parc-aquatique" | "lac-riviere" | "montagne" | "bretagne" | "sud-france";
export type ThemedOffer = SuncampOffer & { departmentSlug: string };

export const campingThemes: Record<CampingThemeSlug, {
  name: string; title: string; description: string; intro: string; advice: string[];
}> = {
  "bord-de-mer": {
    name: "Bord de mer", title: "Campings avec mobil-home en bord de mer en France",
    description: "Comparez des campings français proches de la plage : Méditerranée, Atlantique et Bretagne, distances réelles et conseils de réservation.",
    intro: "Cette sélection retient les campings du catalogue situés à moins d’un kilomètre de la mer. Une faible distance ne garantit toutefois ni un chemin plat, ni une baignade surveillée : vérifiez toujours le trajet exact avant de réserver.",
    advice: ["Contrôler l’accès réel à pied, pas seulement la distance", "Repérer les zones de baignade surveillées", "Comparer climatisation, ombre et stationnement"],
  },
  "parc-aquatique": {
    name: "Parc aquatique", title: "Campings avec parc aquatique et mobil-home",
    description: "Sélection de campings en France avec parc aquatique, piscines ou espace de baignade pour des vacances familiales en mobil-home.",
    intro: "Toboggans, lagon et piscine couverte ne répondent pas aux mêmes besoins. Nous avons regroupé les campings dont la fiche mentionne un équipement aquatique important afin de faciliter une première comparaison.",
    advice: ["Vérifier les dates d’ouverture des bassins", "Comparer piscine couverte et bassins extérieurs", "Contrôler l’âge minimum pour les toboggans"],
  },
  "lac-riviere": {
    name: "Lac et rivière", title: "Campings en mobil-home près d’un lac ou d’une rivière",
    description: "Campings nature près des lacs et rivières de France : Landes, Ardèche, Jura et autres destinations familiales.",
    intro: "Un séjour près d’un lac ou d’une rivière offre souvent davantage de calme que le littoral. La baignade, le canoë et la pêche restent soumis aux conditions locales : les équipements du camping sont donc aussi importants que le décor.",
    advice: ["Identifier les zones de baignade autorisées", "Prévoir des chaussures d’eau", "Vérifier l’accès direct ou le trajet en voiture"],
  },
  montagne: {
    name: "Montagne", title: "Mobil-homes à la montagne pour les vacances d’été",
    description: "Sélection de campings et mobil-homes à la montagne : Jura, Alpes, Auvergne et lacs, avec conseils pour l’été.",
    intro: "La montagne en mobil-home permet d’alterner randonnée, lacs et soirées plus fraîches. Les distances semblent courtes sur la carte, mais les routes et le relief peuvent allonger les trajets.",
    advice: ["Prévoir des vêtements pour les soirées fraîches", "Comparer l’altitude et le temps de trajet", "Réserver les activités très demandées en été"],
  },
  bretagne: {
    name: "Bretagne", title: "Campings et mobil-homes en Bretagne",
    description: "Campings en Bretagne avec mobil-homes : Finistère, Morbihan, Côtes-d’Armor et Ille-et-Vilaine, plages et conseils pratiques.",
    intro: "La Bretagne combine plages, sentiers côtiers, ports et patrimoine. Une piscine couverte peut apporter un vrai confort, tandis qu’un emplacement central réduit les kilomètres pour les excursions.",
    advice: ["Regarder les horaires de marée", "Prévoir une solution pour les journées changeantes", "Choisir un secteur plutôt que vouloir parcourir toute la Bretagne"],
  },
  "sud-france": {
    name: "Sud de la France", title: "Campings avec mobil-home dans le Sud de la France",
    description: "Mobil-homes dans le Sud de la France : Var, Hérault, Gard, Aude et Pyrénées-Orientales, plages, piscines et conseils.",
    intro: "Du Var au Languedoc, les campings du Sud offrent un grand choix de plages et d’espaces aquatiques. En plein été, la climatisation, l’ombre et la circulation locale comptent autant que le nombre d’étoiles.",
    advice: ["Vérifier si la climatisation est comprise", "Anticiper les bouchons vers les plages", "Comparer juin et septembre avec la haute saison"],
  },
};

export const campingThemeSlugs = Object.keys(campingThemes) as CampingThemeSlug[];

const allOffers: ThemedOffer[] = [
  ...suncampVarOffers.map((offer) => ({ ...offer, departmentSlug: "var" })),
  ...Object.entries(suncampOffersByDepartment).flatMap(([departmentSlug, offers]) =>
    offers.map((offer) => ({ ...offer, departmentSlug }))),
];

const uniqueOffers = Array.from(new Map(allOffers.map((offer) => [offer.id, offer])).values());
const mentions = (offer: ThemedOffer, words: RegExp) => words.test(`${offer.name} ${offer.summary} ${offer.highlights.join(" ")}`.toLowerCase());

export function getOffersForTheme(theme: CampingThemeSlug): ThemedOffer[] {
  const filters: Record<CampingThemeSlug, (offer: ThemedOffer) => boolean> = {
    "bord-de-mer": (offer) => typeof offer.distanceToSeaKm === "number" && offer.distanceToSeaKm <= 1,
    "parc-aquatique": (offer) => mentions(offer, /aquatique|piscine|lagon|toboggan/),
    "lac-riviere": (offer) => mentions(offer, /lac|rivière|canoë|nautique|gorges/),
    montagne: (offer) => ["jura", "haute-savoie", "puy-de-dome", "hautes-alpes", "isere", "alpes-de-haute-provence"].includes(offer.departmentSlug),
    bretagne: (offer) => ["finistere", "morbihan", "cotes-d-armor", "ille-et-vilaine"].includes(offer.departmentSlug),
    "sud-france": (offer) => ["var", "herault", "gard", "aude", "pyrenees-orientales", "bouches-du-rhone"].includes(offer.departmentSlug),
  };
  return uniqueOffers.filter(filters[theme]).slice(0, 24);
}

export function isCampingTheme(value: string): value is CampingThemeSlug {
  return campingThemeSlugs.includes(value as CampingThemeSlug);
}
