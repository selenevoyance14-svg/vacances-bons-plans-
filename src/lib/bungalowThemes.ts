import { affiliateLinks } from "@/lib/affiliateLinks";

export type BungalowThemeSlug = "france" | "bord-de-mer" | "montagne" | "avec-chien" | "villa-piscine" | "grande-famille";

export type BungalowTheme = {
  slug: BungalowThemeSlug;
  name: string;
  title: string;
  description: string;
  intro: string;
  image: string;
  targetUrl: string;
  idealFor: string;
  strengths: string[];
  checks: string[];
  destinations: { name: string; detail: string }[];
  faqs: { question: string; answer: string }[];
};

export function bungalowAffiliateUrl(targetUrl?: string) {
  return `${affiliateLinks.bungalow.homepage}${targetUrl ? encodeURIComponent(targetUrl) : ""}`;
}

export const bungalowThemes: Record<BungalowThemeSlug, BungalowTheme> = {
  france: {
    slug: "france", name: "En France", title: "Maison de vacances en France : régions et critères à comparer",
    description: "Trouvez une maison, un bungalow ou une résidence de vacances en France et comparez emplacement, capacité, frais et équipements.",
    intro: "Une maison de vacances offre davantage d’intimité qu’un mobil-home et convient particulièrement aux séjours en famille, entre amis ou hors saison.",
    image: "/images/editorial/voyage-famille.webp", targetUrl: "https://www.bungalow.net/fr/france/maisonsdesvacances/",
    idealFor: "Les familles qui veulent une cuisine, plusieurs chambres et davantage d’espace sans dépendre des animations d’un camping.",
    strengths: ["Choix dans de nombreuses régions françaises", "Maisons, appartements et résidences", "Séjours possibles à différentes saisons"],
    checks: ["Comparer le prix total avec ménage et linge", "Vérifier l’adresse et la distance aux commerces", "Contrôler caution, arrivée et conditions d’annulation"],
    destinations: [{ name: "Côte Atlantique", detail: "Pour les plages, le vélo et les séjours familiaux." }, { name: "Provence et Côte d’Azur", detail: "Pour la Méditerranée, les villages et les vacances au soleil." }, { name: "Dordogne et Ardèche", detail: "Pour la campagne, les rivières et les grandes maisons." }],
    faqs: [{ question: "Maison ou mobil-home ?", answer: "La maison privilégie l’espace et l’intimité. Le mobil-home donne accès aux services et équipements d’un camping." }, { question: "Quels frais faut-il comparer ?", answer: "Regardez le ménage, le linge, la taxe de séjour, la caution, le chauffage et les éventuels frais de réservation." }],
  },
  "bord-de-mer": {
    slug: "bord-de-mer", name: "Bord de mer", title: "Maison de vacances au bord de la mer : bien choisir son emplacement",
    description: "Comparez les locations de vacances près de la mer : distance réelle à la plage, stationnement, vue, piscine et frais annexes.",
    intro: "Une annonce peut indiquer « près de la plage » tout en nécessitant une voiture. Le trajet réel, le relief et le stationnement comptent autant que la distance affichée.",
    image: "/images/editorial/cote-atlantique.webp", targetUrl: "https://www.bungalow.net/fr/vacances-a-la-plage/",
    idealFor: "Les voyageurs qui veulent une location indépendante près de la Méditerranée, de l’Atlantique ou des côtes européennes.",
    strengths: ["Choix sur plusieurs littoraux européens", "Logements pour couples et familles", "Possibilité de cuisine et d’espace extérieur"],
    checks: ["Mesurer le trajet à pied jusqu’à la plage", "Vérifier l’accès avec enfants et poussette", "Anticiper stationnement et circulation estivale"],
    destinations: [{ name: "Méditerranée", detail: "Mer plus calme, chaleur et stations très animées en été." }, { name: "Atlantique", detail: "Grandes plages, surf, pinèdes et marées." }, { name: "Bretagne et Normandie", detail: "Côtes variées, patrimoine et météo changeante." }],
    faqs: [{ question: "Que signifie vraiment bord de mer ?", answer: "Il n’existe pas une distance unique. Consultez l’adresse, la carte et le chemin exact avant de réserver." }, { question: "Une piscine est-elle indispensable ?", answer: "Elle peut être utile avec de jeunes enfants ou lorsque la baignade en mer est difficile, mais vérifiez ses dates d’ouverture." }],
  },
  montagne: {
    slug: "montagne", name: "Montagne", title: "Chalet et appartement à la montagne : été comme hiver",
    description: "Choisissez une location à la montagne selon la station, l’altitude, les remontées, les randonnées et les services ouverts.",
    intro: "À la montagne, deux logements proches sur la carte peuvent être séparés par une forte pente ou une route sinueuse. L’emplacement précis est déterminant.",
    image: "/images/editorial/camping-plein-air.webp", targetUrl: "https://www.bungalow.net/fr/france/alpes-francaises/maisonsdesvacances/",
    idealFor: "Les familles, randonneurs et groupes qui recherchent un chalet ou un appartement dans les Alpes françaises.",
    strengths: ["Stations des Alpes françaises", "Séjours hiver et été", "Chalets et appartements de plusieurs capacités"],
    checks: ["Vérifier altitude et accès en hiver", "Contrôler la distance aux remontées ou sentiers", "Regarder les commerces ouverts hors saison"],
    destinations: [{ name: "Haute-Savoie", detail: "Lacs, Mont-Blanc et stations vivantes en été." }, { name: "Savoie", detail: "Grands domaines skiables et nombreuses résidences." }, { name: "Alpes du Sud", detail: "Davantage de soleil et activités autour des lacs." }],
    faqs: [{ question: "Faut-il réserver près des pistes ?", answer: "C’est pratique en hiver, mais parfois plus cher. Une navette fiable peut offrir un meilleur compromis." }, { question: "La montagne convient-elle en été ?", answer: "Oui, pour la randonnée, le vélo, les lacs et des températures souvent plus douces qu’au bord de la Méditerranée." }],
  },
  "avec-chien": {
    slug: "avec-chien", name: "Avec un chien", title: "Maison de vacances avec un chien : les règles à vérifier",
    description: "Préparez une location de vacances avec votre chien : supplément, jardin, clôture, plages autorisées et règlement du logement.",
    intro: "Un logement indiqué comme accueillant les animaux peut imposer un nombre maximal, un supplément ou des restrictions. La confirmation doit concerner la location précise.",
    image: "/images/editorial/camping-plein-air.webp", targetUrl: "https://www.bungalow.net/fr/",
    idealFor: "Les voyageurs qui cherchent plus d’intimité, un espace extérieur et des promenades accessibles avec leur animal.",
    strengths: ["Maisons indépendantes possibles", "Séjours à la mer ou dans la nature", "Choix de capacités variées"],
    checks: ["Confirmer race, poids et nombre d’animaux", "Vérifier si le jardin est réellement clôturé", "Calculer supplément et ménage éventuel"],
    destinations: [{ name: "Campagne", detail: "Plus d’espace et des promenades souvent accessibles." }, { name: "Montagne", detail: "Températures plus fraîches mais règles dans les espaces protégés." }, { name: "Littoral", detail: "Contrôler les plages et horaires autorisés aux chiens." }],
    faqs: [{ question: "Animaux acceptés signifie-t-il jardin clôturé ?", answer: "Non. Ces deux critères sont indépendants et doivent être vérifiés dans le descriptif ou auprès du propriétaire." }, { question: "Un supplément est-il fréquent ?", answer: "Il peut être demandé par nuit ou par séjour. Vérifiez aussi si le ménage final devient obligatoire." }],
  },
  "villa-piscine": {
    slug: "villa-piscine", name: "Villa et piscine", title: "Villa de vacances avec piscine : privée ou partagée ?",
    description: "Comparez les villas avec piscine selon la sécurité, l’usage privé ou partagé, le chauffage, les dates d’ouverture et le prix total.",
    intro: "La présence d’une piscine ne suffit pas : elle peut être commune à la résidence, non chauffée, saisonnière ou éloignée de la maison.",
    image: "/images/editorial/destination-mediterranee.webp", targetUrl: "https://www.bungalow.net/fr/villas/",
    idealFor: "Les familles et groupes qui veulent de l’espace, davantage d’intimité et des journées de détente sur place.",
    strengths: ["Villas de plusieurs capacités", "Piscine ou équipements bien-être selon l’offre", "Locations en France et en Europe"],
    checks: ["Distinguer piscine privée et collective", "Vérifier sécurité et profondeur avec des enfants", "Contrôler chauffage et période d’ouverture"],
    destinations: [{ name: "Provence", detail: "Maisons, soleil et villages, avec forte demande estivale." }, { name: "Espagne", detail: "Large choix de villas sur plusieurs côtes." }, { name: "Italie", detail: "Campagne, littoral et maisons adaptées aux groupes." }],
    faqs: [{ question: "La piscine est-elle toujours chauffée ?", answer: "Non. Le chauffage peut être absent, limité à certaines dates ou facturé en option." }, { question: "Que vérifier avec des enfants ?", answer: "Regardez la barrière, l’alarme, la couverture, la profondeur et la distance entre la maison et le bassin." }],
  },
  "grande-famille": {
    slug: "grande-famille", name: "Grande famille", title: "Grande maison de vacances : louer à 8, 10 ou 12 personnes",
    description: "Choisissez une grande location de vacances selon les vraies chambres, sanitaires, cuisine, stationnement et répartition du prix.",
    intro: "Pour un groupe, la capacité annoncée ne dit rien du confort. Il faut compter les chambres, les vrais lits, les salles d’eau et les places autour de la table.",
    image: "/images/editorial/voyage-famille.webp", targetUrl: "https://www.bungalow.net/fr/villas/",
    idealFor: "Les familles nombreuses, réunions de proches et groupes d’amis qui souhaitent partager une maison sans sacrifier l’intimité.",
    strengths: ["Répartition du coût entre voyageurs", "Espaces communs pour se retrouver", "Cuisine et plusieurs chambres possibles"],
    checks: ["Compter les lits hors canapé convertible", "Vérifier sanitaires et capacité de la cuisine", "Lire les règles sur bruit, caution et visiteurs"],
    destinations: [{ name: "Dordogne", detail: "Grandes maisons, patrimoine et activités familiales." }, { name: "Vallée de la Loire", detail: "Position centrale et visites adaptées à plusieurs générations." }, { name: "Ardennes", detail: "Nature, maisons de groupe et week-ends accessibles." }],
    faqs: [{ question: "Combien de salles d’eau pour dix personnes ?", answer: "Deux salles d’eau constituent généralement un minimum confortable, surtout avec plusieurs familles." }, { question: "Comment partager le prix ?", answer: "Décidez avant la réservation si la répartition se fait par personne, par famille ou selon les chambres occupées." }],
  },
};

export const bungalowThemeSlugs = Object.keys(bungalowThemes) as BungalowThemeSlug[];
