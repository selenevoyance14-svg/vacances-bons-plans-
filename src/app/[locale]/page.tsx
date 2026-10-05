import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InternationalCampingPage from "@/app/components/InternationalCampingPage";
import { internationalCopy, internationalLocales, isInternationalLocale } from "@/lib/internationalCampingData";

export function generateStaticParams() { return internationalLocales.map((locale) => ({ locale })); }
export function generateMetadata({ params }: { params: { locale: string } }): Metadata {
  if (!isInternationalLocale(params.locale)) return {};
  const copy = internationalCopy[params.locale];
  return { title: copy.title, description: copy.intro, alternates: { canonical: `/${params.locale}`, languages: { "fr-FR": "/mobil-home", "en-GB": "/en", "de-DE": "/de", "nl-NL": "/nl", "nl-BE": "/nl", "x-default": "/mobil-home" } }, openGraph: { title: copy.title, description: copy.intro, locale: params.locale, url: `/${params.locale}`, images: ["/images/hero-vacances-famille-mobil-home.webp"] } };
}
export default function InternationalHome({ params }: { params: { locale: string } }) { if (!isInternationalLocale(params.locale)) notFound(); return <InternationalCampingPage locale={params.locale} />; }
