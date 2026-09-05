export type DepartmentGuide = {
  slug: string;
  name: string;
  number: string;
  region: string;
  intro: string;
  metaDescription: string;
  sectors: { name: string; profile: string; strength: string; watch: string }[];
  advice: string[];
  faqs: { question: string; answer: string }[];
};

export const departmentGuides: Record<string, DepartmentGuide> = {
  finistere: {
    slug: "finistere", name: "Finistère", number: "29", region: "Bretagne",
    intro: "Du Pays Bigouden à Bénodet et Névez, comparez la distance à la plage, l’abri du vent et les excursions possibles.",
    metaDescription: "Comparez 5 campings avec mobil-homes dans le Finistère : Penmarch, Quimper, Fouesnant, Bénodet et Névez via Suncamp.",
    sectors: [
      { name: "Penmarch et Pays Bigouden", profile: "Pour les plages, les ports de pêche et une Bretagne tournée vers l’océan.", strength: "Ambiance maritime", watch: "Vent et météo changeante" },
      { name: "Bénodet et Fouesnant", profile: "Un secteur familial avec plages, sentiers côtiers et départs vers l’archipel des Glénan.", strength: "Plages et excursions", watch: "Très demandé en été" },
      { name: "Névez et Concarneau", profile: "Des criques, des villages de pierre et de beaux itinéraires sur le GR34.", strength: "Paysages côtiers", watch: "Voiture utile pour rayonner" },
      { name: "Quimper", profile: "Une base culturelle dans les terres, pratique pour explorer le sud Finistère.", strength: "Patrimoine et services", watch: "Pas d’accès direct à la mer" },
    ],
    advice: ["Regardez la distance à pied jusqu’à la plage, pas seulement la distance en kilomètres.", "Une piscine couverte est précieuse lorsque la météo bretonne change.", "Vérifiez les horaires des clubs et services hors juillet-août."],
    faqs: [
      { question: "Quel secteur choisir avec des enfants ?", answer: "Bénodet et Fouesnant offrent un bon équilibre entre plages, stations familiales et excursions. Penmarch convient aux familles qui aiment une ambiance plus maritime." },
      { question: "Faut-il choisir un camping avec piscine couverte ?", answer: "C’est un vrai avantage dans le Finistère, notamment pour conserver une activité baignade les jours frais ou venteux." },
      { question: "Peut-on visiter sans voiture ?", answer: "Le vélo et les sentiers sont agréables autour du camping, mais une voiture facilite nettement la découverte de plusieurs portions de côte." },
    ],
  },
  ardeche: {
    slug: "ardeche", name: "Ardèche", number: "07", region: "Auvergne-Rhône-Alpes",
    intro: "Entre Vallon-Pont-d’Arc, Sampzon et Privas, choisissez entre les gorges animées et une Ardèche plus tranquille.",
    metaDescription: "Comparez 4 campings avec mobil-homes en Ardèche : Vallon-Pont-d’Arc, Sampzon, Privas et Saint-Sauveur-de-Montagut.",
    sectors: [
      { name: "Vallon-Pont-d’Arc", profile: "Le secteur emblématique pour les gorges, le canoë et la grotte Chauvet 2.", strength: "Activités et sites majeurs", watch: "Affluence estivale" },
      { name: "Sampzon", profile: "Une base proche de la rivière et des villages du sud Ardèche.", strength: "Accès aux gorges", watch: "Routes parfois chargées" },
      { name: "Privas", profile: "Une Ardèche centrale, plus calme, adaptée aux balades et aux marchés.", strength: "Position centrale", watch: "Plus loin des gorges" },
      { name: "Vallée de l’Eyrieux", profile: "Pour la nature, les baignades en rivière et la Dolce Via à vélo.", strength: "Calme et vélo", watch: "Relief et routes sinueuses" },
    ],
    advice: ["Vérifiez si l’accès à la rivière est direct et si la baignade est surveillée.", "Réservez les descentes en canoë à l’avance en haute saison.", "La climatisation et l’ombre de la parcelle comptent beaucoup en été."],
    faqs: [
      { question: "Où loger pour faire du canoë ?", answer: "Vallon-Pont-d’Arc et Sampzon sont les bases les plus pratiques pour accéder aux gorges et aux loueurs de canoës." },
      { question: "L’Ardèche convient-elle aux jeunes enfants ?", answer: "Oui, à condition de vérifier les accès à l’eau, l’ombre et les équipements du camping. Certaines berges et activités conviennent mieux aux enfants sachant nager." },
      { question: "Peut-on éviter la foule ?", answer: "Privas et la vallée de l’Eyrieux sont généralement plus tranquilles que le secteur de Vallon-Pont-d’Arc en plein été." },
    ],
  },
  dordogne: {
    slug: "dordogne", name: "Dordogne", number: "24", region: "Nouvelle-Aquitaine",
    intro: "Sarlat, Périgueux ou vallée de la Dordogne : choisissez votre base selon les châteaux, grottes et villages que vous voulez visiter.",
    metaDescription: "Comparez 4 campings avec mobil-homes en Dordogne près de Périgueux, Sarlat et dans le Périgord Noir via Suncamp.",
    sectors: [
      { name: "Sarlat et Périgord Noir", profile: "Le secteur le plus connu pour les villages, châteaux et sites préhistoriques.", strength: "Patrimoine exceptionnel", watch: "Routes fréquentées en été" },
      { name: "Vallée de la Dordogne", profile: "Pour alterner canoë, baignade et visites de villages perchés.", strength: "Rivière et châteaux", watch: "Accès à l’eau variable" },
      { name: "Périgueux", profile: "Une base centrale avec commerces, patrimoine et excursions dans le département.", strength: "Services et position", watch: "Trajets nécessaires" },
      { name: "Campagne du Périgord", profile: "Des vacances plus paisibles dans un environnement boisé.", strength: "Calme et espace", watch: "Voiture indispensable" },
    ],
    advice: ["Regroupez les visites par vallée pour limiter les kilomètres sur les petites routes.", "Vérifiez si le camping propose un accès baignade ou seulement une piscine.", "En été, l’ombre et la terrasse couverte améliorent nettement le confort."],
    faqs: [
      { question: "Où loger pour visiter Sarlat ?", answer: "Saint-Crépin-et-Carlucet et Saint-André-d’Allas permettent de rejoindre facilement Sarlat et plusieurs sites du Périgord Noir." },
      { question: "La Dordogne est-elle adaptée à une semaine ?", answer: "Oui, mais mieux vaut choisir un seul secteur et rayonner autour plutôt que de vouloir traverser tout le département chaque jour." },
      { question: "Quels frais prévoir ?", answer: "Ajoutez les visites, le stationnement, les locations de canoë, le linge et le ménage au tarif de l’hébergement." },
    ],
  },
  jura: {
    slug: "jura", name: "Jura", number: "39", region: "Bourgogne-Franche-Comté",
    intro: "Autour de Clairvaux-les-Lacs et de la rivière d’Ain, privilégiez la proximité d’un lac ou un point de départ pour les randonnées.",
    metaDescription: "Comparez 4 campings avec mobil-homes dans le Jura : Clairvaux-les-Lacs, Patornay, Châtillon et Pont-de-Poitte.",
    sectors: [
      { name: "Clairvaux-les-Lacs", profile: "Une base familiale pour la baignade, les activités nautiques et les cascades du Hérisson.", strength: "Lacs et baignade", watch: "Forte demande estivale" },
      { name: "Patornay et Pont-de-Poitte", profile: "Au bord de l’Ain, près du lac de Vouglans et des itinéraires nature.", strength: "Rivière et excursions", watch: "Voiture pratique" },
      { name: "Châtillon", profile: "Un cadre boisé et calme près des lacs, adapté aux vacances en famille.", strength: "Nature et tranquillité", watch: "Peu de commerces à pied" },
      { name: "Haut-Jura", profile: "Pour davantage de relief, de randonnées et de fraîcheur en été.", strength: "Montagne", watch: "Plus éloigné des campings sélectionnés" },
    ],
    advice: ["Vérifiez quel lac est réellement accessible depuis le camping.", "Prévoyez des vêtements pour des soirées plus fraîches qu’au bord de la Méditerranée.", "Regardez les équipements couverts en cas de pluie."],
    faqs: [
      { question: "Quel lac choisir dans le Jura ?", answer: "Clairvaux est pratique avec des enfants. Vouglans est immense et se découvre depuis plusieurs plages et belvédères." },
      { question: "Le Jura convient-il sans voiture ?", answer: "Une voiture est fortement recommandée pour rejoindre les lacs, cascades, belvédères et villages répartis dans le département." },
      { question: "Quand partir ?", answer: "Juillet et août offrent le plus de services. Juin et septembre sont plus calmes, mais vérifiez l’ouverture des équipements et la température de l’eau." },
    ],
  },
  manche: {
    slug: "manche", name: "Manche", number: "50", region: "Normandie",
    intro: "Choisissez entre la baie du Mont-Saint-Michel et la côte sauvage du Cotentin pour un séjour très différent.",
    metaDescription: "Comparez 3 campings avec mobil-homes dans la Manche : près du Mont-Saint-Michel et sur la côte du Cotentin via Suncamp.",
    sectors: [
      { name: "Baie du Mont-Saint-Michel", profile: "Pour visiter le Mont tôt le matin et découvrir les paysages de la baie.", strength: "Site incontournable", watch: "Marées et fréquentation" },
      { name: "Cherbourg et Cotentin", profile: "Une côte plus sauvage avec ports, falaises et plages tranquilles.", strength: "Paysages maritimes", watch: "Météo changeante" },
      { name: "Côte ouest", profile: "Des dunes et de longues plages face aux îles anglo-normandes.", strength: "Grands espaces", watch: "Distances entre les sites" },
      { name: "Marais du Cotentin", profile: "Un environnement paisible pour les balades et l’observation de la nature.", strength: "Calme", watch: "Moins proche des plages" },
    ],
    advice: ["Consultez les horaires de marée avant les sorties dans la baie.", "Une piscine couverte apporte du confort les jours frais.", "Mesurez les temps de trajet : la Manche est plus étendue qu’elle n’en a l’air."],
    faqs: [
      { question: "Où dormir pour visiter le Mont-Saint-Michel ?", answer: "Genêts et Beauvoir permettent de séjourner tout près de la baie et de rejoindre rapidement le site." },
      { question: "Le Cotentin mérite-t-il plusieurs jours ?", answer: "Oui. Cherbourg, Barfleur, le cap de la Hague et les plages demandent plusieurs journées si vous souhaitez les découvrir sans courir." },
      { question: "Quelle météo prévoir ?", answer: "Le temps peut changer rapidement. Une terrasse couverte, des vêtements imperméables et quelques activités intérieures sont utiles." },
    ],
  },
  vendee: {
    slug: "vendee",
    name: "Vendée",
    number: "85",
    region: "Pays de la Loire",
    intro: "Des Sables-d’Olonne à Noirmoutier, comparez les ambiances de la côte avant de choisir votre mobil-home.",
    metaDescription: "Comparez 4 campings avec mobil-homes en Vendée : littoral, lac, plages, notes et distances à la mer issues du flux Suncamp.",
    sectors: [
      { name: "Talmont et Les Sables", profile: "Pour conjuguer plages, port des Sables-d’Olonne et sorties familiales.", strength: "Beaucoup d’activités à proximité", watch: "Circulation autour des stations en été" },
      { name: "Longeville et côte sud", profile: "De longues plages bordées de forêt, appréciées pour le surf et le vélo.", strength: "Océan et pinède", watch: "Baignade océanique parfois sportive" },
      { name: "Fromentine et Noirmoutier", profile: "Un bon point de départ pour les îles, les marais et les plages du nord Vendée.", strength: "Paysages variés", watch: "Accès aux îles très fréquentés" },
      { name: "Lac du Jaunay", profile: "Une solution plus calme dans les terres, avec la côte accessible en voiture.", strength: "Nature et espace", watch: "Voiture nécessaire pour la plage" },
    ],
    advice: ["Vérifiez si l’accès à la plage se fait à pied ou en voiture.", "Pour le vélo, regardez la distance entre le camping et les pistes sécurisées.", "Comparez le coût des traversées et du stationnement si vous prévoyez les îles."],
    faqs: [
      { question: "Où séjourner avec de jeunes enfants ?", answer: "Les campings avec parc aquatique et plage proche autour de Talmont ou La Barre-de-Monts simplifient le séjour. Vérifiez la profondeur des bassins et les dates des clubs enfants." },
      { question: "Peut-on se passer de voiture ?", answer: "C’est envisageable dans un camping proche d’une plage et relié aux pistes cyclables. Pour visiter plusieurs stations ou rejoindre les îles, une voiture reste pratique." },
      { question: "Quelle période choisir ?", answer: "Juin et septembre sont généralement plus calmes. Pour les vacances scolaires, comparez tôt les hébergements et surtout leur prix total." },
    ],
  },
  herault: {
    slug: "herault",
    name: "Hérault",
    number: "34",
    region: "Occitanie",
    intro: "De Montpellier à Vias et Valras, choisissez entre accès direct à la Méditerranée et grand domaine aquatique.",
    metaDescription: "Découvrez 4 campings avec mobil-homes dans l’Hérault : Vias, Sérignan, Valras et Aresquiers, avec liens Suncamp affiliés.",
    sectors: [
      { name: "Vias et Portiragnes", profile: "Un secteur très orienté vacances, avec plages, Canal du Midi et grands campings.", strength: "Choix et équipements", watch: "Ambiance très animée en plein été" },
      { name: "Sérignan et Valras", profile: "Pour rejoindre facilement la plage et profiter d’une station familiale.", strength: "Plages de sable", watch: "Forte demande en juillet-août" },
      { name: "Montpellier et étangs", profile: "Une base intéressante pour mêler plage, ville et découverte des lagunes.", strength: "Culture et littoral", watch: "Temps de trajet selon la circulation" },
      { name: "Arrière-pays", profile: "À privilégier pour les villages, les balades et davantage de calme.", strength: "Nature et patrimoine", watch: "Plus éloigné de la mer" },
    ],
    advice: ["Ne confondez pas accès direct à la mer et plage située à plusieurs kilomètres.", "Regardez si les piscines et clubs sont ouverts pendant vos dates.", "Un camping dans les terres peut être avantageux si la plage n’est pas votre priorité quotidienne."],
    faqs: [
      { question: "Vias ou Valras pour un séjour familial ?", answer: "Vias offre de grands domaines et beaucoup d’animations. Valras et Sérignan conviennent bien si la proximité de la plage est votre premier critère." },
      { question: "Fait-il trop chaud en été ?", answer: "Les journées peuvent être très chaudes. La climatisation du mobil-home, l’ombre de la parcelle et la distance jusqu’à la plage sont donc à vérifier." },
      { question: "Quels frais comparer ?", answer: "Ajoutez au tarif le ménage, le linge, la taxe de séjour, les éventuels frais de dossier et les options liées à la climatisation ou aux animaux." },
    ],
  },
  landes: {
    slug: "landes",
    name: "Landes",
    number: "40",
    region: "Nouvelle-Aquitaine",
    intro: "Océan, grands lacs et forêt de pins : sélectionnez d’abord votre terrain de jeu avant le camping.",
    metaDescription: "Comparez 4 campings avec mobil-homes dans les Landes : Messanges, Soustons, Sanguinet et lac de Léon via Suncamp.",
    sectors: [
      { name: "Messanges et côte sud", profile: "Pour la plage, le surf et les pistes cyclables au cœur de la forêt.", strength: "Accès à l’océan", watch: "Vagues et courants à respecter" },
      { name: "Soustons", profile: "Un compromis entre lacs, océan et forêt, adapté aux vacances actives.", strength: "Vélo et nature", watch: "Distances variables jusqu’à la plage" },
      { name: "Sanguinet et Biscarrosse", profile: "Les plages de lac sont appréciées des familles avec de jeunes enfants.", strength: "Baignade en lac", watch: "Océan plus éloigné" },
      { name: "Lac de Léon", profile: "Un cadre forestier pour le kayak, le paddle et des journées plus tranquilles.", strength: "Sports nautiques", watch: "Prévoir les trajets vers l’Atlantique" },
    ],
    advice: ["Choisissez clairement entre plage océanique et plage de lac.", "Vérifiez la présence d’une piste cyclable dès la sortie du camping.", "Pour l’océan, consultez toujours les zones et horaires de baignade surveillée."],
    faqs: [
      { question: "Lac ou océan avec des enfants ?", answer: "Les lacs offrent souvent une eau plus calme et peu profonde. L’océan reste spectaculaire, mais la baignade doit se faire dans les zones surveillées." },
      { question: "La voiture est-elle indispensable ?", answer: "Certains campings permettent beaucoup de déplacements à vélo. Une voiture reste utile lorsque le camping est au bord d’un lac mais que vous souhaitez rejoindre régulièrement l’océan." },
      { question: "Que faut-il vérifier dans un mobil-home ?", answer: "Regardez la climatisation, l’ombre, la terrasse couverte, le linge fourni et la distance réelle entre votre hébergement et les équipements." },
    ],
  },
  "charente-maritime": {
    slug: "charente-maritime",
    name: "Charente-Maritime",
    number: "17",
    region: "Nouvelle-Aquitaine",
    intro: "La Palmyre, Royan, Oléron ou Ré : chaque secteur offre un séjour très différent sur la côte Atlantique.",
    metaDescription: "Comparez 4 campings avec mobil-homes en Charente-Maritime : La Palmyre, île de Ré et proche Oléron via Suncamp.",
    sectors: [
      { name: "La Palmyre et Les Mathes", profile: "Une destination familiale entre pinède, longues plages et zoo de La Palmyre.", strength: "Activités pour les familles", watch: "Plage parfois à plusieurs kilomètres" },
      { name: "Royan et côte de Beauté", profile: "Pour combiner plages, marchés et sorties en ville.", strength: "Services et animations", watch: "Stationnement en haute saison" },
      { name: "Île d’Oléron", profile: "Une ambiance insulaire accessible par un pont gratuit, avec beaucoup de pistes cyclables.", strength: "Villages et vélo", watch: "Circulation aux heures de pointe" },
      { name: "Île de Ré", profile: "Des villages soignés et des déplacements faciles à vélo, avec un budget souvent supérieur.", strength: "Plages et pistes cyclables", watch: "Pont payant à l’entrée" },
    ],
    advice: ["Sur les îles, intégrez le pont, le stationnement et la location de vélos au budget.", "Vérifiez si le camping possède une piscine : les établissements en accès plage n’en ont pas toujours.", "Autour de La Palmyre, contrôlez la distance réelle jusqu’à l’océan."],
    faqs: [
      { question: "Ré ou Oléron : quelle île choisir ?", answer: "Ré est très agréable à vélo et possède une ambiance plus chic. Oléron est plus grande et propose généralement un choix plus large d’environnements et de budgets." },
      { question: "Où aller pour un premier séjour ?", answer: "La Palmyre et Les Mathes constituent une base simple pour les familles grâce aux plages, à la forêt et aux nombreuses activités alentour." },
      { question: "Un camping sans piscine est-il intéressant ?", answer: "Oui si l’accès à une plage adaptée est immédiat et que la mer suffit à votre programme. En revanche, une piscine devient utile lors des journées venteuses ou avec de jeunes enfants." },
    ],
  },
};
