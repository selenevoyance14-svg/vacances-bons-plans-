import type { CityGuide } from "@/lib/cityGuides";
import type { DepartmentGuide } from "@/lib/departmentGuides";
import type { MobilHomeDestination } from "@/lib/mobilHomeDestinations";
import type { SuncampOffer } from "@/lib/suncampOffers";

type DepartmentProfile = {
  slug: string;
  name: string;
  number: string;
  region: string;
  summary: string;
  highlights: [string, string, string];
  nearby: [string, string, string];
  seoTheme: string;
};

const departmentProfiles: DepartmentProfile[] = [
  { slug: "hautes-alpes", name: "Hautes-Alpes", number: "05", region: "Provence-Alpes-Côte d’Azur", summary: "Lac de Serre-Ponçon, sommets et vacances en mobil-home au grand air.", highlights: ["Montagne", "Lac", "Randonnée"], nearby: ["Lac de Serre-Ponçon", "Parc des Écrins", "Gap"], seoTheme: "vacances à la montagne entre lac, randonnée et panoramas alpins" },
  { slug: "cotes-darmor", name: "Côtes-d’Armor", number: "22", region: "Bretagne", summary: "Côte de Granit Rose, caps sauvages et stations familiales bretonnes.", highlights: ["Bretagne", "Mer", "GR34"], nearby: ["Côte de Granit Rose", "Cap Fréhel", "Saint-Brieuc"], seoTheme: "camping en Bretagne entre plages, falaises et sentier côtier" },
  { slug: "haute-corse", name: "Haute-Corse", number: "2B", region: "Corse", summary: "Plages, maquis et villages corses pour un séjour méditerranéen en famille.", highlights: ["Corse", "Plage", "Maquis"], nearby: ["Bastia", "Cap Corse", "Castagniccia"], seoTheme: "mobil-home en Corse entre plage, montagne et villages" },
  { slug: "haute-savoie", name: "Haute-Savoie", number: "74", region: "Auvergne-Rhône-Alpes", summary: "Lac d’Annecy et massifs alpins pour conjuguer baignade et montagne.", highlights: ["Alpes", "Lac d’Annecy", "Vélo"], nearby: ["Lac d’Annecy", "Massif des Bauges", "Annecy"], seoTheme: "camping au lac d’Annecy avec montagne, vélo et baignade" },
  { slug: "puy-de-dome", name: "Puy-de-Dôme", number: "63", region: "Auvergne-Rhône-Alpes", summary: "Volcans d’Auvergne, lacs et grands espaces au cœur du Massif central.", highlights: ["Volcans", "Montagne", "Lacs"], nearby: ["Puy de Sancy", "Lac Chambon", "Chaîne des Puys"], seoTheme: "mobil-home en Auvergne près des volcans et des lacs" },
  { slug: "morbihan", name: "Morbihan", number: "56", region: "Bretagne", summary: "Carnac, golfe du Morbihan et plages familiales de Bretagne sud.", highlights: ["Golfe", "Plages", "Mégalithes"], nearby: ["Carnac", "Golfe du Morbihan", "Lorient"], seoTheme: "camping dans le Morbihan entre golfe, îles et plages" },
  { slug: "bouches-du-rhone", name: "Bouches-du-Rhône", number: "13", region: "Provence-Alpes-Côte d’Azur", summary: "Côte Bleue, calanques et Provence entre Martigues et Marseille.", highlights: ["Méditerranée", "Provence", "Calanques"], nearby: ["Côte Bleue", "Martigues", "Marseille"], seoTheme: "camping en Provence au bord de la Méditerranée" },
  { slug: "alpes-de-haute-provence", name: "Alpes-de-Haute-Provence", number: "04", region: "Provence-Alpes-Côte d’Azur", summary: "Gorges du Verdon, lacs turquoise et villages de Haute-Provence.", highlights: ["Verdon", "Montagne", "Lacs"], nearby: ["Gorges du Verdon", "Lac de Castillon", "Moustiers-Sainte-Marie"], seoTheme: "mobil-home dans le Verdon entre montagne, lac et canoë" },
  { slug: "isere", name: "Isère", number: "38", region: "Auvergne-Rhône-Alpes", summary: "Lacs, campagne et portes des Alpes pour des vacances nature en famille.", highlights: ["Lacs", "Alpes", "Nature"], nearby: ["Massif de la Chartreuse", "Lacs du Dauphiné", "Grenoble"], seoTheme: "camping en Isère entre lacs, campagne et montagnes" },
  { slug: "ille-et-vilaine", name: "Ille-et-Vilaine", number: "35", region: "Bretagne", summary: "Saint-Malo, vallée de la Rance et Côte d’Émeraude côté Bretagne nord.", highlights: ["Saint-Malo", "Rance", "Patrimoine"], nearby: ["Saint-Malo", "Dinan", "Baie du Mont-Saint-Michel"], seoTheme: "camping près de Saint-Malo et de la Côte d’Émeraude" },
  { slug: "aveyron", name: "Aveyron", number: "12", region: "Occitanie", summary: "Gorges du Tarn, viaduc de Millau et causses pour un séjour sportif.", highlights: ["Gorges", "Montagne", "Rivière"], nearby: ["Viaduc de Millau", "Gorges du Tarn", "Parc des Grands Causses"], seoTheme: "mobil-home près de Millau entre gorges, rivière et randonnée" },
  { slug: "pyrenees-orientales", name: "Pyrénées-Orientales", number: "66", region: "Occitanie", summary: "Méditerranée et Pyrénées réunies autour des grandes plages catalanes.", highlights: ["Plage", "Pyrénées", "Catalogne"], nearby: ["Canet-en-Roussillon", "Collioure", "Perpignan"], seoTheme: "camping entre plage méditerranéenne et montagne catalane" },
  { slug: "loire-atlantique", name: "Loire-Atlantique", number: "44", region: "Pays de la Loire", summary: "Presqu’île guérandaise, marais salants et plages de la côte d’Amour.", highlights: ["Océan", "Guérande", "Vélo"], nearby: ["Guérande", "La Baule", "Parc naturel de Brière"], seoTheme: "mobil-home près de Guérande et des plages atlantiques" },
  { slug: "doubs", name: "Doubs", number: "25", region: "Bourgogne-Franche-Comté", summary: "Vallée de la Loue, reliefs du Jura et vacances nature à la montagne.", highlights: ["Jura", "Rivière", "Randonnée"], nearby: ["Vallée de la Loue", "Besançon", "Source de la Loue"], seoTheme: "camping dans le Jura près des rivières et montagnes du Doubs" },
  { slug: "allier", name: "Allier", number: "03", region: "Auvergne-Rhône-Alpes", summary: "Montagne bourbonnaise, villages et campagne au calme en Auvergne.", highlights: ["Montagne", "Campagne", "Calme"], nearby: ["Montagne bourbonnaise", "Vichy", "Forêt des Bois Noirs"], seoTheme: "mobil-home en Auvergne dans la montagne bourbonnaise" },
  { slug: "aude", name: "Aude", number: "11", region: "Occitanie", summary: "Plages sauvages, étangs et Corbières entre Méditerranée et arrière-pays.", highlights: ["Méditerranée", "Nature", "Vent"], nearby: ["La Franqui", "Leucate", "Corbières"], seoTheme: "camping dans l’Aude entre plage, étangs et Corbières" },
];

type CampingRow = [
  id: string, name: string, city: string, departmentSlug: string, stars: number | undefined,
  rating: number | undefined, distanceToSeaKm: number | undefined, image: string, path: string, angle: string,
];

const rows: CampingRow[] = [
  ["113266", "Vakantiepark L’Écrin du Lac", "Chorges", "hautes-alpes", undefined, undefined, undefined, "https://cdn.acsi.eu/6/9/1/2/69120317ad884.jpg", "/france/provence-alpes-cote-dazur/hautes-alpes/chorges/vakantiepark-lecrin-du-lac-113266/", "au bord du lac de Serre-Ponçon, face aux montagnes"],
  ["116148", "Camping Sandaya Val André", "Pléneuf-Val-André", "cotes-darmor", 4, 6.5, 0.3, "https://cdn.acsi.eu/6/a/5/7/6a578780d43c4.jpg", "/france/bretagne/cotes-darmor/pleneuf-val-andre/camping-sandaya-val-andre-116148/", "près de la plage et des caps de Bretagne nord"],
  ["118215", "Camping Sandaya Le Kérou", "Le Pouldu", "finistere", 4, 8.3, 0.2, "https://cdn.acsi.eu/6/7/f/6/67f664a24cd0e.jpg", "/france/bretagne/finistere/le-pouldu/camping-sandaya-le-kerou-118215/", "près des plages et du sentier côtier du Pouldu"],
  ["125476", "Village Vacances Sandaya Cap Sud", "Camp du Cap Sud", "haute-corse", 5, 8, 0.5, "https://cdn.acsi.eu/6/8/1/c/681c62689199d.jpg", "/france/corse/haute-corse/camp-du-cap-sud/village-vacances-sandaya-cap-sud-125476/", "entre plage corse, pinède et excursions vers Bastia"],
  ["125738", "Domaine Le Clos des Oliviers", "Vidauban", "var", 5, undefined, undefined, "https://cdn.acsi.eu/6/7/5/1/6751aa8b643c6.jpg", "/france/provence-alpes-cote-dazur/var/vidauban/domaine-le-clos-des-oliviers-125738/", "dans l’arrière-pays varois entre vignes et villages"],
  ["107530", "Camping Sandaya La Nublière", "Doussard", "haute-savoie", 4, 7.3, undefined, "https://cdn.acsi.eu/6/8/1/c/681c6698efbdf.jpg", "/france/rhone-alpes/haute-savoie/doussard/camping-sandaya-la-nubliere-107530/", "au bout du lac d’Annecy, entre baignade et randonnée"],
  ["108411", "Camping Sandaya Les Deux Fontaines", "Névez", "finistere", 4, 8, 0.9, "https://cdn.acsi.eu/6/a/5/7/6a576a636a2b6.jpg", "/france/bretagne/finistere/nevez/camping-sandaya-les-deux-fontaines-108411/", "près des criques et villages de pierre du Finistère sud"],
  ["109362", "Yelloh! Village Le Pin Parasol", "La Chapelle-Hermier", "vendee", 5, undefined, 10, "https://cdn.acsi.eu/6/9/f/1/69f1d8d72dcee.jpg", "/france/pays-de-la-loire/vendee/la-chapelle-hermier/yelloh-village-le-pin-parasol-109362/", "près du lac du Jaunay dans une Vendée plus verte"],
  ["111087", "Camping Sandaya La Ribeyre", "Saint-Victor-la-Rivière", "puy-de-dome", 5, 6.7, undefined, "https://cdn.acsi.eu/6/8/0/1/6801027b98d8b.jpg", "/france/auvergne/puy-de-dome/saint-victor-la-riviere/camping-sandaya-la-ribeyre-111087/", "au cœur des volcans d’Auvergne, près du lac Chambon"],
  ["100252", "Camping Sandaya Le Ranolien", "Perros-Guirec", "cotes-darmor", 5, 8.2, 0.2, "https://cdn.acsi.eu/6/a/5/4/6a54e23ee7b41.jpg", "/france/bretagne/cotes-darmor/perros-guirec/camping-sandaya-le-ranolien-100252/", "sur la Côte de Granit Rose, près du GR34"],
  ["100300", "Camping Sandaya Carnac", "Carnac", "morbihan", 4, undefined, 3, "https://cdn.acsi.eu/6/9/d/e/69de38a7d5fcb.jpg", "/france/bretagne/morbihan/carnac/camping-sandaya-carnac-100300/", "près des alignements de Carnac et des plages du Morbihan"],
  ["100551", "Camping Le Mas", "Martigues", "bouches-du-rhone", 4, undefined, 0, "https://cdn.acsi.eu/6/a/0/1/6a01c8db4ddcb.jpg", "/france/provence-alpes-cote-dazur/bouches-du-rhone/martigues/camping-le-mas-100551/", "en bord de Méditerranée sur la Côte Bleue"],
  ["101061", "Camping Sandaya Domaine du Verdon", "Castellane", "alpes-de-haute-provence", 5, 7, undefined, "https://cdn.acsi.eu/6/a/5/4/6a54f3473cb59.jpg", "/france/provence-alpes-cote-dazur/alpes-de-haute-provence/castellane/camping-sandaya-domaine-du-verdon-101061/", "à l’entrée des gorges du Verdon pour le canoë et la randonnée"],
  ["101216", "Camping Les 3 Lacs du Soleil", "Trept", "isere", 4, 7.8, undefined, "https://cdn.acsi.eu/6/9/0/c/690c77d7156df.jpg", "/france/rhone-alpes/isere/trept/camping-les-3-lacs-du-soleil-101216/", "autour de trois lacs, entre campagne dauphinoise et Alpes"],
  ["103240", "Camping Sandaya Port Manec’h", "Névez", "finistere", 4, undefined, 0.2, "https://cdn.acsi.eu/6/a/5/4/6a54dc12c817e.jpg", "/france/bretagne/finistere/nevez/camping-sandaya-port-manech-103240/", "près de Port-Manec’h et des plages bretonnes"],
  ["100261", "Camping Sandaya Le P’tit Bois", "Saint-Jouan-des-Guérets", "ille-et-vilaine", 5, undefined, 1.7, "https://cdn.acsi.eu/6/a/6/9/6a69a5151496f.jpg", "/france/bretagne/ille-et-vilaine/saint-jouan-des-guerets/camping-sandaya-le-ptit-bois-100261/", "près de Saint-Malo et de la vallée de la Rance"],
  ["100496", "Camping Sandaya Les Rivages", "Millau", "aveyron", 4, 7.9, undefined, "https://cdn.acsi.eu/6/a/5/5/6a5505813931e.jpg", "/france/midi-pyrenees/aveyron/millau/camping-sandaya-les-rivages-100496/", "au bord de la Dourbie, près du viaduc et des gorges"],
  ["100560", "Camping Yelloh! Village Le Brasilia", "Canet-en-Roussillon", "pyrenees-orientales", 5, 9.4, 0, "https://cdn.acsi.eu/6/7/c/a/67cadb2f8e8f0.jpg", "/france/languedoc-roussillon/pyrenees-orientales/canet-en-roussillon/camping-yelloh-village-le-brasilia-100560/", "directement sur la plage, entre Méditerranée et Pyrénées"],
  ["103221", "Camping Yelloh! Village L’Océan Breton", "Plobannalec", "finistere", 5, 7.6, 2, "https://cdn.acsi.eu/6/9/3/f/693fef3665678.jpg", "/france/bretagne/finistere/plobannalec/camping-yelloh-village-locean-breton-103221/", "dans le Pays Bigouden, entre rivière et littoral"],
  ["111513", "Flower Camping Les Paludiers", "Batz-sur-Mer", "loire-atlantique", 4, undefined, 0.1, "https://cdn.acsi.eu/6/a/8/d/6a8d5c6fad7d0.jpg", "/france/pays-de-la-loire/loire-atlantique/batz-sur-mer/flower-camping-les-paludiers-111513/", "près de la plage et des marais salants de Guérande"],
  ["113313", "Camping Les Muriers", "Vendres", "herault", 3, undefined, 0.8, "https://cdn.acsi.eu/6/6/7/4/66744f938744b.jpg", "/france/languedoc-roussillon/herault/vendres/camping-les-muriers-113313/", "près de la plage de Vendres et des étangs de l’Hérault"],
  ["114301", "Camping Sandaya Le Lac de Sanguinet", "Sanguinet", "landes", 5, 6.9, undefined, "https://cdn.acsi.eu/6/7/f/9/67f9187b77b80.jpg", "/france/aquitaine/landes/sanguinet/camping-sandaya-le-lac-de-sanguinet-114301/", "au bord du lac de Sanguinet pour une baignade familiale"],
  ["115010", "Camping Sandaya Domaine Le Midi", "Barbâtre", "vendee", 5, 7.1, 0, "https://cdn.acsi.eu/6/a/5/7/6a575d8ac402f.jpg", "/france/pays-de-la-loire/vendee/barbatre/camping-sandaya-domaine-le-midi-115010/", "sur l’île de Noirmoutier avec accès direct à l’océan"],
  ["116755", "Camping Sandaya Le Moulin de l’Éclis", "Assérac", "loire-atlantique", 4, 8, 0, "https://cdn.acsi.eu/6/9/c/4/69c407e0c57d8.jpg", "/france/pays-de-la-loire/loire-atlantique/asserac/camping-sandaya-le-moulin-de-leclis-116755/", "au bord de l’océan près de la baie de Pont-Mahé"],
  ["118174", "Camping La Roche d’Ully", "Ornans", "doubs", 4, undefined, undefined, "https://cdn.acsi.eu/6/a/0/e/6a0ef6acce816.jpg", "/france/franche-comte/doubs/ornans/camping-la-roche-dully-118174/", "dans la vallée de la Loue, au pied des montagnes du Jura"],
  ["119905", "Domaine La Chabanne", "Châtel-Montagne", "allier", 3, undefined, undefined, "https://cdn.acsi.eu/6/5/b/1/65b11b846431c.jpg", "/france/auvergne/allier/chatel-montagne/domaine-la-chabanne-119905/", "dans la montagne bourbonnaise pour un séjour au calme"],
  ["121416", "Camping Sandaya Domaine La Franqui", "La Franqui-Plage", "aude", 4, undefined, 0.3, "https://cdn.acsi.eu/6/a/8/c/6a8c067486077.jpg", "/france/languedoc-roussillon/aude/la-franqui-plage/camping-sandaya-domaine-la-franqui-121416/", "près d’une plage sauvage entre étang et Corbières"],
  ["121626", "Camping Sandaya Belle Plage", "Lomener", "morbihan", 4, 7.2, 0, "https://cdn.acsi.eu/6/9/c/6/69c6727ea1889.jpg", "/france/bretagne/morbihan/lomener/camping-sandaya-belle-plage-121626/", "directement sur le littoral près de Lorient"],
  ["122824", "Camping Sandaya Maguide", "Biscarrosse", "landes", 2, undefined, undefined, "https://cdn.acsi.eu/6/9/4/9/6949ae438367b.jpg", "/france/aquitaine/landes/biscarrosse/camping-sandaya-maguide-122824/", "au bord du lac de Biscarrosse, sous les pins landais"],
  ["125739", "Les Tamaris & Les Portes du Soleil", "Portiragnes", "herault", undefined, undefined, undefined, "https://cdn.acsi.eu/6/6/9/4/6694d841f19ac.jpg", "/france/languedoc-roussillon/herault/portiragnes/les-tamaris-les-portes-du-soleil-125739/", "près de la Méditerranée et du Canal du Midi"],
];

const profileBySlug = new Map(departmentProfiles.map((profile) => [profile.slug, profile]));

function partnerUrl(path: string) {
  return `https://www.suncamp.fr/tradetracker/?tt=11662_1529348_515442_&r=${encodeURIComponent(`https://www.suncamp.fr${path}`)}`;
}

export const expandedSuncampOffers = rows.reduce<Record<string, SuncampOffer[]>>((result, row) => {
  const [id, name, city, departmentSlug, stars, rating, distanceToSeaKm, image, path, angle] = row;
  const profile = profileBySlug.get(departmentSlug);
  const offer: SuncampOffer = {
    id, name, city, stars, rating, distanceToSeaKm, image, href: partnerUrl(path),
    summary: `Une location de mobil-home ${angle}.`,
    highlights: profile?.highlights ?? ["Mobil-home", "Familles", "Vacances"],
  };
  (result[departmentSlug] ??= []).push(offer);
  return result;
}, {});

export const expandedMobilHomeDestinations: MobilHomeDestination[] = departmentProfiles.map((profile) => ({
  slug: profile.slug,
  name: profile.name,
  departmentNumber: profile.number,
  region: profile.region,
  summary: profile.summary,
  highlights: profile.highlights,
  available: true,
}));

export const expandedDepartmentGuides: Record<string, DepartmentGuide> = Object.fromEntries(
  departmentProfiles.map((profile) => {
    const offers = expandedSuncampOffers[profile.slug] ?? [];
    const cities = Array.from(new Set(offers.map((offer) => offer.city)));
    return [profile.slug, {
      slug: profile.slug,
      name: profile.name,
      number: profile.number,
      region: profile.region,
      intro: `${profile.summary} Comparez les locations disponibles selon l’accès, les activités et le budget total.`,
      metaDescription: `Location de mobil-home en ${profile.name} : campings à ${cities.join(" et ")}, photos, conseils et disponibilités Suncamp.`,
      sectors: cities.map((city) => ({
        name: city,
        profile: `Un point de chute pour profiter de ${profile.seoTheme}.`,
        strength: profile.highlights.join(" · "),
        watch: "Distance réelle aux activités et services ouverts selon la saison",
      })),
      advice: [
        `Comparez le prix total des locations en ${profile.name}, avec ménage, linge et taxe de séjour.`,
        `Pour un séjour ${profile.highlights[0].toLowerCase()}, vérifiez les distances et l’équipement réellement inclus.`,
        "Contrôlez les dates d’ouverture de la piscine, des clubs et des services avant de réserver.",
      ],
      faqs: [
        { question: `Pourquoi louer un mobil-home en ${profile.name} ?`, answer: `${profile.summary} Le mobil-home permet de garder une cuisine et un espace familial tout en profitant des équipements du camping.` },
        { question: `Où séjourner en ${profile.name} ?`, answer: `Les offres actuellement référencées se trouvent à ${cities.join(" et ")}. Le meilleur choix dépend de vos activités prioritaires et de vos déplacements.` },
        { question: "Comment obtenir le prix exact ?", answer: "Indiquez vos dates et le nombre de voyageurs chez Suncamp, puis vérifiez les options, la caution et les frais avant de valider." },
      ],
    } satisfies DepartmentGuide];
  }),
);

const knownCityKeys = new Set(["landes/sanguinet"]);

export const expandedCityGuides: CityGuide[] = Array.from(
  new Map(rows.map((row) => [`${row[3]}/${row[2]}`, row])).values(),
)
  .filter((row) => !knownCityKeys.has(`${row[3]}/${slugify(row[2])}`))
  .map((row) => {
    const [, , city, departmentSlug, , , , , , angle] = row;
    const profile = profileBySlug.get(departmentSlug);
    const departmentName = profile?.name ?? departmentNameForExisting(departmentSlug);
    return {
      slug: slugify(city),
      name: city,
      departmentSlug,
      departmentName,
      intro: `${city} constitue une base de vacances ${angle}.`,
      idealFor: `Les familles qui recherchent ${profile?.seoTheme ?? "un camping bien situé et des activités variées"}.`,
      nearby: profile?.nearby ?? nearbyForExisting(departmentSlug),
      practical: ["Comparer la distance réelle aux activités", "Vérifier les équipements ouverts pendant le séjour", "Contrôler tous les frais avant de réserver"],
    };
  });

function slugify(value: string) {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/[’']/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function departmentNameForExisting(slug: string) {
  return ({ finistere: "Finistère", var: "Var", vendee: "Vendée", herault: "Hérault", landes: "Landes" } as Record<string, string>)[slug] ?? slug;
}

function nearbyForExisting(slug: string): [string, string, string] {
  return ({
    finistere: ["GR34", "Pays Bigouden", "Concarneau"],
    var: ["Massif des Maures", "Fréjus", "Golfe de Saint-Tropez"],
    vendee: ["Océan Atlantique", "Lac du Jaunay", "Les Sables-d’Olonne"],
    herault: ["Méditerranée", "Canal du Midi", "Béziers"],
    landes: ["Lacs landais", "Océan Atlantique", "Forêt des Landes"],
  } as Record<string, [string, string, string]>)[slug] ?? ["Centre-ville", "Nature", "Excursions"];
}
