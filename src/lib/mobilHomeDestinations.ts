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
    available: true,
  },
  {
    slug: "herault",
    name: "Hérault",
    departmentNumber: "34",
    region: "Occitanie",
    summary:
      "Des stations méditerranéennes animées et des séjours accessibles hors juillet-août.",
    highlights: ["Méditerranée", "Arrière-pays", "Hors saison"],
    available: true,
  },
  {
    slug: "landes",
    name: "Landes",
    departmentNumber: "40",
    region: "Nouvelle-Aquitaine",
    summary:
      "Océan, grands lacs et campings sous les pins pour alterner baignade, vélo et nature.",
    highlights: ["Océan", "Lacs", "Forêt"],
    available: true,
  },
  {
    slug: "charente-maritime",
    name: "Charente-Maritime",
    departmentNumber: "17",
    region: "Nouvelle-Aquitaine",
    summary:
      "Îles, plages familiales et nombreuses possibilités de séjour sur la côte Atlantique.",
    highlights: ["Îles", "Plages familiales", "Atlantique"],
    available: true,
  },
  {
    slug: "finistere",
    name: "Finistère",
    departmentNumber: "29",
    region: "Bretagne",
    summary: "Côtes sauvages, ports bretons et plages du Pays Bigouden à Bénodet et Névez.",
    highlights: ["Bord de mer", "Bretagne", "Randonnées"],
    available: true,
  },
  {
    slug: "ardeche",
    name: "Ardèche",
    departmentNumber: "07",
    region: "Auvergne-Rhône-Alpes",
    summary: "Rivières, gorges et campings nature autour de Vallon-Pont-d’Arc, Sampzon et Privas.",
    highlights: ["Rivière", "Canoë", "Nature"],
    available: true,
  },
  {
    slug: "dordogne",
    name: "Dordogne",
    departmentNumber: "24",
    region: "Nouvelle-Aquitaine",
    summary: "Châteaux, villages du Périgord et vacances familiales dans une campagne généreuse.",
    highlights: ["Patrimoine", "Gastronomie", "Familles"],
    available: true,
  },
  {
    slug: "jura",
    name: "Jura",
    departmentNumber: "39",
    region: "Bourgogne-Franche-Comté",
    summary: "Lacs, cascades et grands espaces pour un séjour actif loin des plages bondées.",
    highlights: ["Lacs", "Randonnée", "Calme"],
    available: true,
  },
  {
    slug: "manche",
    name: "Manche",
    departmentNumber: "50",
    region: "Normandie",
    summary: "Du Mont-Saint-Michel au Cotentin, une côte normande idéale pour les découvertes.",
    highlights: ["Mont-Saint-Michel", "Mer", "Patrimoine"],
    available: true,
  },
  {
    slug: "gironde",
    name: "Gironde",
    departmentNumber: "33",
    region: "Nouvelle-Aquitaine",
    summary: "Bassin d’Arcachon, Médoc et longues plages océanes entre Cap-Ferret, Soulac et Montalivet.",
    highlights: ["Océan", "Bassin d’Arcachon", "Vélo"],
    available: true,
  },
  {
    slug: "gard",
    name: "Gard",
    departmentNumber: "30",
    region: "Occitanie",
    summary: "Rivières, villages de caractère et patrimoine autour de la Cèze et d’Avignon.",
    highlights: ["Rivière", "Villages", "Patrimoine"],
    available: true,
  },
  {
    slug: "calvados",
    name: "Calvados",
    departmentNumber: "14",
    region: "Normandie",
    summary: "Côte Fleurie, plages du Débarquement et campagne normande entre Deauville et la Côte de Nacre.",
    highlights: ["Mer", "Histoire", "Normandie"],
    available: true,
  },
  {
    slug: "loir-et-cher",
    name: "Loir-et-Cher",
    departmentNumber: "41",
    region: "Centre-Val de Loire",
    summary: "Châteaux de la Loire, forêts et domaines aquatiques pour des vacances culture et nature.",
    highlights: ["Châteaux", "Nature", "Familles"],
    available: true,
  },
  {
    slug: "seine-et-marne",
    name: "Seine-et-Marne",
    departmentNumber: "77",
    region: "Île-de-France",
    summary: "Campagne francilienne et bases familiales proches de Paris et des grands parcs de loisirs.",
    highlights: ["Familles", "Campagne", "Excursions"],
    available: true,
  },
];
