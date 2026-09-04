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
