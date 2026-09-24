import type { DepartmentGuide } from "@/lib/departmentGuides";
import type { MobilHomeDestination } from "@/lib/mobilHomeDestinations";
import type { SuncampOffer } from "@/lib/suncampOffers";

// Nouvelles offres relevées dans le flux TradeTracker Suncamp le 24 septembre 2026.
export const currentFeedOffers: Record<string, SuncampOffer[]> = {
  "charente-maritime": [{ id: "117882", name: "Camping Sandaya Les Mathes", city: "Les Mathes", stars: 4, image: "https://cdn.acsi.eu/6/a/6/9/6a69d2a325d47.jpg", href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fpoitou-charentes%2Fcharente-maritime%2Fles-mathes%2Fcamping-sandaya-les-mathes-117882%2F", summary: "Un camping familial dans la pinède des Mathes, à proximité de La Palmyre et des plages atlantiques.", highlights: ["La Palmyre", "Pinède", "Familles"] }],
  herault: [
    { id: "100547", name: "Camping Sandaya Blue Bayou", city: "Valras-Plage", stars: 5, rating: 7.8, distanceToSeaKm: 0.3, image: "https://cdn.acsi.eu/6/a/a/b/6aabbea1a7f39.jpg", href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Flanguedoc-roussillon%2Fherault%2Fvalras-plage%2Fcamping-sandaya-blue-bayou-100547%2F", summary: "Un cinq étoiles proche de la plage de Valras avec espaces aquatiques et activités familiales.", highlights: ["Plage", "Espace aquatique", "Clubs enfants"] },
    { id: "103999", name: "Camping Sandaya Le Plein Air des Chênes", city: "Clapiers", stars: 4, rating: 7.7, image: "https://cdn.acsi.eu/6/a/5/6/6a560bc51fccc.jpg", href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Flanguedoc-roussillon%2Fherault%2Fclapiers%2Fcamping-sandaya-le-plein-air-des-chenes-103999%2F", summary: "Un domaine arboré aux portes de Montpellier pour combiner ville, piscine et excursions vers la Méditerranée.", highlights: ["Montpellier", "Chênes", "Piscines"] },
    { id: "100543", name: "Camping Sandaya Aloha", city: "Sérignan-Plage", stars: 5, rating: 5.7, distanceToSeaKm: 0, image: "https://cdn.acsi.eu/6/8/0/8/6808d83cc09d8.jpg", href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Flanguedoc-roussillon%2Fherault%2Fserignan-plage%2Fcamping-sandaya-aloha-100543%2F", summary: "Un camping en accès direct à la Méditerranée à Sérignan-Plage, avec une ambiance très familiale.", highlights: ["Accès direct mer", "Sérignan-Plage", "Familles"] },
  ],
  vienne: [{ id: "122897", name: "Village Flottant de Pressac", city: "Pressac", image: "https://cdn.acsi.eu/6/8/b/1/68b150a80f5ab.jpg", href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fpoitou-charentes%2Fvienne%2Fpressac%2Fvillage-flottant-de-pressac-122897%2F", summary: "Une adresse nature originale au bord de l’eau, dans la campagne de la Vienne.", highlights: ["Hébergements flottants", "Nature", "Étang"] }],
  yvelines: [{ id: "101177", name: "Camping Sandaya Paris Maisons Laffitte", city: "Maisons-Laffitte", stars: 4, rating: 7.1, image: "https://cdn.acsi.eu/6/8/9/9/6899d81c8802e.jpg", href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2File-de-france%2Fyvelines%2Fmaisons-laffitte%2Fcamping-sandaya-paris-maisons-laffitte-101177%2F", summary: "Un camping en bord de Seine pour séjourner au vert tout en rejoignant Paris en transport.", highlights: ["Paris", "Bord de Seine", "Transports"] }],
  aisne: [{ id: "103932", name: "Camping Homair La Croix du Vieux Pont", city: "Berny-Rivière", stars: 5, image: "https://cdn.acsi.eu/6/9/b/3/69b3dae94636a.jpg", href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fpicardie%2Faisne%2Fberny-riviere%2Fcamping-homair-la-croix-du-vieux-pont-103932%2F", summary: "Un grand domaine familial avec lacs et activités, entre Compiègne et Soissons.", highlights: ["Lacs", "Domaine familial", "Picardie"] }],
};

export const currentFeedDestinations: MobilHomeDestination[] = [
  { slug: "vienne", name: "Vienne", departmentNumber: "86", region: "Nouvelle-Aquitaine", summary: "Étangs, villages et patrimoine autour de Poitiers pour des vacances nature en famille.", highlights: ["Nature", "Patrimoine", "Familles"], available: true },
  { slug: "yvelines", name: "Yvelines", departmentNumber: "78", region: "Île-de-France", summary: "Forêts, Seine et grands sites aux portes de Paris.", highlights: ["Paris", "Forêts", "Patrimoine"], available: true },
  { slug: "aisne", name: "Aisne", departmentNumber: "02", region: "Hauts-de-France", summary: "Campagne, lacs et cités historiques entre Soissons et Laon.", highlights: ["Lacs", "Campagne", "Histoire"], available: true },
];

const guide = (slug: string, name: string, number: string, region: string, intro: string, cities: string[], theme: string): DepartmentGuide => ({
  slug, name, number, region, intro,
  metaDescription: `Location de mobil-home dans ${slug === "vienne" ? "la Vienne" : slug === "aisne" ? "l’Aisne" : "les Yvelines"} : campings, villes à découvrir et disponibilités Suncamp.`,
  sectors: cities.map((city) => ({ name: city, profile: `Une base pour découvrir ${theme}.`, strength: "Vacances en famille", watch: "Temps de trajet et services ouverts selon la saison" })),
  advice: ["Comparez le prix total avec le linge, le ménage et la taxe de séjour.", "Vérifiez les temps de trajet vers vos visites prioritaires.", "Contrôlez les dates d’ouverture des piscines et services."],
  faqs: [
    { question: `Pourquoi choisir ${slug === "vienne" ? "la Vienne" : slug === "aisne" ? "l’Aisne" : "les Yvelines"} ?`, answer: `${intro} Une location en camping permet de garder un hébergement autonome tout en profitant des équipements sur place.` },
    { question: "Comment connaître le prix exact ?", answer: "Renseignez vos dates et le nombre de voyageurs chez Suncamp, puis vérifiez les options et frais avant de réserver." },
    { question: "La voiture est-elle utile ?", answer: "Oui dans la plupart des secteurs ruraux. À Maisons-Laffitte, les transports facilitent toutefois les excursions vers Paris." },
  ],
});

export const currentFeedDepartmentGuides: Record<string, DepartmentGuide> = {
  vienne: guide("vienne", "Vienne", "86", "Nouvelle-Aquitaine", "Autour de Pressac et Poitiers, combinez étangs, villages et grandes sorties familiales.", ["Pressac", "Poitiers", "Chauvigny", "La Roche-Posay"], "la campagne poitevine et son patrimoine"),
  yvelines: guide("yvelines", "Yvelines", "78", "Île-de-France", "Depuis Maisons-Laffitte, alternez séjour au vert, Versailles et excursions vers Paris.", ["Maisons-Laffitte", "Versailles", "Rambouillet"], "les forêts et grands sites de l’ouest parisien"),
  aisne: guide("aisne", "Aisne", "02", "Hauts-de-France", "Entre Berny-Rivière, Soissons et Laon, profitez d’une destination nature et historique.", ["Berny-Rivière", "Soissons", "Laon"], "les paysages et cités historiques de Picardie"),
};
