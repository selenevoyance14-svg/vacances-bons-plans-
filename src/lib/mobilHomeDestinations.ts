export type MobilHomeDestination = {
  slug: string;
  name: string;
  departmentNumber: string;
  region: string;
  summary: string;
  highlights: string[];
  available: boolean;
};

export const mobilHomeDestinations: MobilHomeDestination[] = [
  {
    slug: "var",
    name: "Var",
    departmentNumber: "83",
    region: "Provence-Alpes-Côte d’Azur",
    summary:
      "Méditerranée, campings familiaux et grands parcs aquatiques autour de Fréjus, Saint-Aygulf et Hyères.",
    highlights: ["Bord de mer", "Parcs aquatiques", "Climat méditerranéen"],
    available: true,
  },
  {
    slug: "vendee",
    name: "Vendée",
    departmentNumber: "85",
    region: "Pays de la Loire",
    summary:
      "De longues plages, de nombreuses pistes cyclables et une offre très large pour les familles.",
    highlights: ["Plages", "Familles", "Vélo"],
    available: false,
  },
  {
    slug: "herault",
    name: "Hérault",
    departmentNumber: "34",
    region: "Occitanie",
    summary:
      "Des stations méditerranéennes animées et des séjours accessibles hors juillet-août.",
    highlights: ["Méditerranée", "Arrière-pays", "Hors saison"],
    available: false,
  },
  {
    slug: "landes",
    name: "Landes",
    departmentNumber: "40",
    region: "Nouvelle-Aquitaine",
    summary:
      "Océan, grands lacs et campings sous les pins pour alterner baignade, vélo et nature.",
    highlights: ["Océan", "Lacs", "Forêt"],
    available: false,
  },
  {
    slug: "charente-maritime",
    name: "Charente-Maritime",
    departmentNumber: "17",
    region: "Nouvelle-Aquitaine",
    summary:
      "Îles, plages familiales et nombreuses possibilités de séjour sur la côte Atlantique.",
    highlights: ["Îles", "Plages familiales", "Atlantique"],
    available: false,
  },
];
