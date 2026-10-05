import Image from "next/image";
import Link from "next/link";
import { getInternationalOffers, internationalCopy, internationalThemes, type InternationalLocale, type InternationalTheme } from "@/lib/internationalCampingData";

export default function InternationalCampingPage({ locale, theme }: { locale: InternationalLocale; theme?: InternationalTheme }) {
  const copy = internationalCopy[locale];
  const offers = getInternationalOffers(theme).slice(0, theme ? 12 : 15);
  const title = theme ? copy.themes[theme].title : copy.title;
  const intro = theme ? copy.themes[theme].intro : copy.intro;
  const canonicalPath = theme ? `/${locale}/mobile-homes-france/${theme}` : `/${locale}`;
  const jsonLd = { "@context": "https://schema.org", "@type": "CollectionPage", name: title, inLanguage: locale, url: `https://vacances-bons-plans.fr${canonicalPath}`, mainEntity: { "@type": "ItemList", itemListElement: offers.map((offer, index) => ({ "@type": "ListItem", position: index + 1, name: offer.name, url: offer.href })) } };

  return <div lang={locale} className="international-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <section className="international-hero"><div className="site-container">
      <nav className="article-breadcrumb" aria-label="Breadcrumb"><Link href={`/${locale}`}>{copy.breadcrumb}</Link>{theme ? <><span aria-hidden>/</span><span>{copy.themes[theme].label}</span></> : null}</nav>
      <p className="eyebrow eyebrow-light">{copy.eyebrow}</p><h1>{title}</h1><p>{intro}</p>
      <div className="method-pills international-pills">{copy.trust.map((item) => <span key={item}>{item}</span>)}</div>
    </div></section>

    <section className="section international-themes"><div className="site-container">
      <div className="section-heading"><div><p className="eyebrow">{copy.styleLabel}</p><h2>{copy.chooseTitle}</h2><p>{copy.chooseIntro}</p></div></div>
      <div className="international-theme-grid">{internationalThemes.map((item) => { const itemCopy = copy.themes[item]; return <Link key={item} href={`/${locale}/mobile-homes-france/${item}`} className={theme === item ? "international-theme-card is-active" : "international-theme-card"}><small>{itemCopy.label}</small><h3>{itemCopy.title}</h3><p>{itemCopy.intro}</p><strong>→</strong></Link>; })}</div>
    </div></section>

    <section className="section international-offers"><div className="site-container">
      <div className="section-heading"><div><p className="eyebrow">{offers.length} {copy.selectedLabel}</p><h2>{copy.offersTitle}</h2><p>{copy.offersIntro}</p></div></div>
      <div className="partner-offer-grid">{offers.map((offer) => <article className="partner-offer-card" key={offer.id}>
        <div className="partner-offer-image"><Image src={offer.image} alt={`${offer.name}, ${offer.city}, France`} fill sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span>{offer.city}</span></div>
        <div className="partner-offer-content"><div className="partner-offer-meta"><span>{offer.stars ? `${offer.stars} ${copy.stars}` : "France"}</span>{offer.rating ? <small>{copy.rating}: {offer.rating}/10</small> : null}</div><h3>{offer.name}</h3><p>{copy.from}: {offer.city}{typeof offer.distanceToSeaKm === "number" ? ` · ${offer.distanceToSeaKm} km ${copy.sea}` : ""}.</p><div className="partner-offer-footer"><div><strong>Suncamp</strong><small>{copy.partnerNotice}</small></div><a href={offer.href} target="_blank" rel="sponsored noopener">{copy.cta} →</a></div></div>
      </article>)}</div><p className="international-disclosure">{copy.disclosure}</p>
    </div></section>

    <section className="editorial-promise"><div className="site-container editorial-promise-grid"><div><p className="eyebrow eyebrow-light">{copy.guideLabel}</p><h2>{copy.practicalTitle}</h2></div><ul>{copy.practical.map((item) => <li key={item}>{item}</li>)}</ul></div></section>
  </div>;
}
