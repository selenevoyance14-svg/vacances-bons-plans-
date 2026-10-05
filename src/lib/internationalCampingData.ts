import { suncampOffersByDepartment, suncampVarOffers, type SuncampOffer } from "@/lib/suncampOffers";

export const internationalLocales = ["en", "de", "nl"] as const;
export type InternationalLocale = (typeof internationalLocales)[number];
export type InternationalTheme = "mediterranean" | "atlantic" | "nature";
export const internationalThemes: InternationalTheme[] = ["mediterranean", "atlantic", "nature"];

const themeDepartments: Record<InternationalTheme, string[]> = {
  mediterranean: ["var", "herault", "gard"],
  atlantic: ["vendee", "landes", "charente-maritime", "gironde", "finistere"],
  nature: ["ardeche", "dordogne", "jura", "loir-et-cher"],
};

export function getInternationalOffers(theme?: InternationalTheme): SuncampOffer[] {
  const departments = theme ? themeDepartments[theme] : Array.from(new Set(Object.values(themeDepartments).flat()));
  return departments.flatMap((department) => department === "var" ? suncampVarOffers : (suncampOffersByDepartment[department] ?? []));
}

type ThemeCopy = { label: string; title: string; intro: string };
type Copy = {
  breadcrumb: string; eyebrow: string; title: string; intro: string; trust: string[];
  chooseTitle: string; chooseIntro: string; themes: Record<InternationalTheme, ThemeCopy>;
  offersTitle: string; offersIntro: string; from: string; sea: string; stars: string;
  rating: string; cta: string; partnerNotice: string; practicalTitle: string;
  practical: string[]; disclosure: string; styleLabel: string; selectedLabel: string; guideLabel: string;
};

export const internationalCopy: Record<InternationalLocale, Copy> = {
  en: {
    breadcrumb: "Mobile home holidays in France", eyebrow: "France camping guide",
    title: "Mobile home holidays in France, selected for a simpler family trip.",
    intro: "Explore French campsites by coast and landscape. Our selection highlights family-friendly mobile homes, pools, beaches and useful driving considerations before you book.",
    trust: ["Campsites located in France", "Family-focused selection", "Affiliate links clearly identified"],
    chooseTitle: "Where would you like to stay in France?", chooseIntro: "Start with the kind of holiday you want, then compare real campsites in the most suitable French regions.",
    themes: {
      mediterranean: { label: "Mediterranean", title: "French Riviera and Mediterranean", intro: "Sunny stays around Fréjus, the Var and the Languedoc coast, with beaches and large pool complexes." },
      atlantic: { label: "Atlantic coast", title: "Atlantic coast and Brittany", intro: "Long beaches, pine forests and cycling routes from Vendée to the Landes, Charente-Maritime and Brittany." },
      nature: { label: "Countryside", title: "Lakes, rivers and rural France", intro: "Mobile homes near the Ardèche, Dordogne, Jura lakes and Loire countryside, away from the busiest coast." },
    },
    offersTitle: "French campsites worth comparing", offersIntro: "Availability and the final price depend on your dates and party size. Check compulsory charges and accommodation details on the partner’s website.",
    from: "Located in", sea: "from the sea", stars: "stars", rating: "Guest rating", cta: "Check availability", partnerNotice: "Booking page currently in French",
    practicalTitle: "Before driving to a campsite in France", practical: ["Compare the full price including cleaning, bed linen and local tourist tax.", "Check arrival times: many campsite receptions have a midday closure.", "Review current French driving requirements before departure.", "Air conditioning is not included in every mobile home, even in southern France."],
    disclosure: "Some links are affiliate links. A booking may support this independent guide at no extra cost to you.", styleLabel: "France by holiday style", selectedLabel: "selected campsites", guideLabel: "Practical guide",
  },
  de: {
    breadcrumb: "Mobilheimurlaub in Frankreich", eyebrow: "Campingführer Frankreich",
    title: "Mobilheimurlaub in Frankreich – ausgewählt für entspannte Familienferien.",
    intro: "Entdecken Sie französische Campingplätze nach Küste und Landschaft. Unsere Auswahl zeigt Mobilheime für Familien, Schwimmbäder, Strände und wichtige Hinweise für die Anreise.",
    trust: ["Campingplätze in Frankreich", "Auswahl für Familien", "Affiliate-Links klar gekennzeichnet"],
    chooseTitle: "Welche Region Frankreichs passt zu Ihrem Urlaub?", chooseIntro: "Wählen Sie zuerst Meer, Atlantikküste oder Natur und vergleichen Sie echte Campingplätze in passenden französischen Regionen.",
    themes: {
      mediterranean: { label: "Mittelmeer", title: "Côte d’Azur und Mittelmeerküste", intro: "Sonnige Ferien bei Fréjus, im Var und im Languedoc – mit Stränden und großen Wasserparks." },
      atlantic: { label: "Atlantikküste", title: "Atlantikküste und Bretagne", intro: "Lange Strände, Pinienwälder und Radwege von der Vendée über die Landes bis zur Bretagne." },
      nature: { label: "Natururlaub", title: "Seen, Flüsse und ländliches Frankreich", intro: "Mobilheime an der Ardèche, in der Dordogne, im Jura und an der Loire, abseits der vollen Küsten." },
    },
    offersTitle: "Campingplätze in Frankreich zum Vergleichen", offersIntro: "Verfügbarkeit und Endpreis hängen von Reisedaten und Personenzahl ab. Prüfen Sie Pflichtkosten und Ausstattung beim Buchungspartner.",
    from: "Ort", sea: "vom Meer", stars: "Sterne", rating: "Bewertung", cta: "Verfügbarkeit prüfen", partnerNotice: "Buchungsseite derzeit auf Französisch",
    practicalTitle: "Vor der Fahrt zum Campingplatz in Frankreich", practical: ["Endpreis inklusive Reinigung, Bettwäsche und Kurtaxe vergleichen.", "Ankunftszeiten prüfen: Viele Rezeptionen schließen mittags.", "Maut, Umweltzonen und französische Verkehrsregeln vor Abfahrt prüfen.", "Eine Klimaanlage gehört auch in Südfrankreich nicht zu jedem Mobilheim."],
    disclosure: "Einige Links sind Affiliate-Links. Eine Buchung kann diesen unabhängigen Ratgeber unterstützen – ohne Mehrkosten für Sie.", styleLabel: "Frankreich nach Urlaubsart", selectedLabel: "ausgewählte Campingplätze", guideLabel: "Praktische Hinweise",
  },
  nl: {
    breadcrumb: "Stacaravanvakantie in Frankrijk", eyebrow: "Campinggids Frankrijk",
    title: "Een stacaravan in Frankrijk, zorgvuldig gekozen voor een fijne gezinsvakantie.",
    intro: "Ontdek Franse campings per kust en landschap. Onze selectie toont gezinsvriendelijke stacaravans, zwembaden, stranden en praktische informatie voor de autorit.",
    trust: ["Campings in Frankrijk", "Selectie voor gezinnen", "Affiliate-links duidelijk vermeld"],
    chooseTitle: "Waar wilt u verblijven in Frankrijk?", chooseIntro: "Kies eerst het soort vakantie en vergelijk daarna echte campings in de Franse regio’s die daarbij passen.",
    themes: {
      mediterranean: { label: "Middellandse Zee", title: "Côte d’Azur en Middellandse Zeekust", intro: "Zonnige vakanties rond Fréjus, de Var en de Languedoc, met stranden en grote zwemparadijzen." },
      atlantic: { label: "Atlantische kust", title: "Atlantische kust en Bretagne", intro: "Lange stranden, dennenbossen en fietsroutes van de Vendée en Landes tot Charente-Maritime en Bretagne." },
      nature: { label: "Natuur", title: "Meren, rivieren en landelijk Frankrijk", intro: "Stacaravans bij de Ardèche, Dordogne, Jura en Loire, buiten de drukste kustplaatsen." },
    },
    offersTitle: "Franse campings om te vergelijken", offersIntro: "Beschikbaarheid en totaalprijs hangen af van reisdata en het aantal personen. Controleer verplichte kosten en de accommodatie bij de boekingspartner.",
    from: "Plaats", sea: "van zee", stars: "sterren", rating: "Beoordeling", cta: "Beschikbaarheid bekijken", partnerNotice: "Boekingspagina momenteel in het Frans",
    practicalTitle: "Voor vertrek naar een camping in Frankrijk", practical: ["Vergelijk de totaalprijs inclusief schoonmaak, bedlinnen en toeristenbelasting.", "Controleer aankomsttijden: veel recepties zijn tussen de middag gesloten.", "Controleer tolwegen, milieuzones en Franse verkeersregels.", "Airconditioning is niet in iedere stacaravan inbegrepen, ook niet in Zuid-Frankrijk."],
    disclosure: "Sommige links zijn affiliate-links. Een boeking kan deze onafhankelijke gids steunen, zonder extra kosten voor u.", styleLabel: "Frankrijk per vakantietype", selectedLabel: "geselecteerde campings", guideLabel: "Praktische informatie",
  },
};

export function isInternationalLocale(value: string): value is InternationalLocale { return internationalLocales.includes(value as InternationalLocale); }
export function isInternationalTheme(value: string): value is InternationalTheme { return internationalThemes.includes(value as InternationalTheme); }
