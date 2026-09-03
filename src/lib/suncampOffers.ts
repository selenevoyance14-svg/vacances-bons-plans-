export type SuncampOffer = {
  id: string;
  name: string;
  city: string;
  stars: number;
  rating?: number;
  image: string;
  href: string;
  summary: string;
  highlights: string[];
  distanceToSeaKm?: number;
};

// Sélection éditoriale issue du flux produit Suncamp #1529348,
// mis à jour quotidiennement par TradeTracker. Contrôle : 3 septembre 2026.
export const suncampVarOffers: SuncampOffer[] = [
  {
    id: "104404",
    name: "Camping Yelloh! Village Holiday Green",
    city: "Fréjus",
    stars: 5,
    image: "https://cdn.acsi.eu/6/9/4/4/6944539334310.jpg",
    href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fprovence-alpes-cote-dazur%2Fvar%2Ffrejus%2Fcamping-yelloh-village-holiday-green-104404%2F",
    summary: "Un grand camping familial connu pour son parc aquatique et ses nombreuses animations.",
    highlights: ["Parc aquatique", "Animations", "Bien-être"],
    distanceToSeaKm: 7,
  },
  {
    id: "104405",
    name: "Camping Sandaya Domaine du Colombier",
    city: "Fréjus",
    stars: 5,
    rating: 7,
    image: "https://cdn.acsi.eu/6/9/6/1/69612a18162d6.jpg",
    href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fprovence-alpes-cote-dazur%2Fvar%2Ffrejus%2Fcamping-sandaya-domaine-du-colombier-104405%2F",
    summary: "Un domaine haut de gamme avec vaste espace aquatique, clubs enfants et centre de bien-être.",
    highlights: ["Lagon", "Clubs enfants", "Spa"],
    distanceToSeaKm: 4.5,
  },
  {
    id: "104410",
    name: "Camping Sandaya Étoile d’Argens",
    city: "Saint-Aygulf",
    stars: 5,
    image: "https://cdn.acsi.eu/6/7/e/f/67efafd8d64b6.jpg",
    href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fprovence-alpes-cote-dazur%2Fvar%2Fsaint-aygulf%2Fcamping-sandaya-etoile-dargens-104410%2F",
    summary: "Une adresse familiale entre vignobles, parc aquatique et plages de Saint-Aygulf.",
    highlights: ["Piscines", "Mini-clubs", "Navette plage"],
    distanceToSeaKm: 3.5,
  },
  {
    id: "104409",
    name: "Camping Sandaya Douce Quiétude",
    city: "Saint-Raphaël",
    stars: 5,
    rating: 7.9,
    image: "https://cdn.acsi.eu/6/8/7/f/687fa5070d586.jpg",
    href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fprovence-alpes-cote-dazur%2Fvar%2Fsaint-raphael%2Fcamping-sandaya-douce-quietude-104409%2F",
    summary: "Au pied de l’Estérel, avec parc aquatique surveillé et navette vers les plages.",
    highlights: ["Parc aquatique", "Estérel", "Navette plage"],
    distanceToSeaKm: 5,
  },
  {
    id: "108484",
    name: "Esterel Caravaning",
    city: "Agay",
    stars: 5,
    image: "https://cdn.acsi.eu/6/a/8/c/6a8c04dca2b29.jpg",
    href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fprovence-alpes-cote-dazur%2Fvar%2Fagay%2Festerel-caravaning-108484%2F",
    summary: "Un camping spacieux entre le massif rouge de l’Estérel et la baie d’Agay.",
    highlights: ["Cinq piscines", "Randonnée", "Espace bien-être"],
    distanceToSeaKm: 3.5,
  },
  {
    id: "108496",
    name: "Camping Leï Suves",
    city: "Roquebrune-sur-Argens",
    stars: 4,
    rating: 7.7,
    image: "https://cdn.acsi.eu/6/9/d/9/69d91adbc9d02.jpg",
    href: "https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=https%3A%2F%2Fwww.suncamp.fr%2Ffrance%2Fprovence-alpes-cote-dazur%2Fvar%2Froquebrune-sur-argens%2Fcamping-lei-suves-108496%2F",
    summary: "Une option plus calme dans un décor provençal, avec piscine et hébergements glamping.",
    highlights: ["Cadre calme", "Piscine", "Glamping"],
  },
];
