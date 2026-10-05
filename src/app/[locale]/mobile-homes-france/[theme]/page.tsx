import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternationalCampingPage from "@/app/components/InternationalCampingPage";
import { internationalCopy, internationalLocales, internationalThemes, isInternationalLocale, isInternationalTheme } from "@/lib/internationalCampingData";

export function generateStaticParams() { return internationalLocales.flatMap((locale) => internationalThemes.map((theme) => ({ locale, theme }))); }
export function generateMetadata({ params }: { params: { locale: string; theme: string } }): Metadata {
  if (!isInternationalLocale(params.locale) || !isInternationalTheme(params.theme)) return {};
  const page = internationalCopy[params.locale].themes[params.theme]; const suffix = `/mobile-homes-france/${params.theme}`;
  return { title: page.title, description: page.intro, alternates: { canonical: `/${params.locale}${suffix}`, languages: { "en-GB": `/en${suffix}`, "de-DE": `/de${suffix}`, "nl-NL": `/nl${suffix}`, "nl-BE": `/nl${suffix}`, "x-default": "/mobil-home" } }, openGraph: { title: page.title, description: page.intro, locale: params.locale, url: `/${params.locale}${suffix}` } };
}
export default function InternationalThemePage({ params }: { params: { locale: string; theme: string } }) { if (!isInternationalLocale(params.locale) || !isInternationalTheme(params.theme)) notFound(); return <InternationalCampingPage locale={params.locale} theme={params.theme} />; }
