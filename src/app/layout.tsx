import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vacances Bons Plans — Comparateur de sejours et voyages pas cher",
  description:
    "Comparez les meilleurs sejours et voyages pas cher : Cdiscount Voyage, Havas, Auchan Voyages, Leclerc Voyages. Destinations, bons plans et guides.",
  metadataBase: new URL("https://vacances-bons-plans.fr"),
  icons: {
    icon: "/favicon.svg",
  },
  verification: {
    google: "lddqio4JEuuejlpB3Za7dcDfC6Od8Z1fVuvasRMXSJw",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113"
          crossOrigin="anonymous"
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        {/* Header */}
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
          <nav className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl">✈️</span>
              <span className="font-bold text-xl text-ocean-800">
                Vacances <span className="text-sun-500">Bons Plans</span>
              </span>
            </Link>
            <div className="flex items-center gap-4 sm:gap-6 text-sm font-medium text-slate-600">
              <Link
                href="/"
                className="sm:hidden hover:text-ocean-600 transition-colors"
              >
                Accueil
              </Link>
              <Link
                href="/destinations"
                className="hover:text-ocean-600 transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/bons-plans"
                className="hidden sm:inline hover:text-ocean-600 transition-colors"
              >
                Bons Plans
              </Link>
              <Link
                href="/guides"
                className="hidden sm:inline hover:text-ocean-600 transition-colors"
              >
                Guides
              </Link>
              <Link
                href="/comparatifs"
                className="hidden sm:inline hover:text-ocean-600 transition-colors"
              >
                Comparatifs
              </Link>
              <Link
                href="/recherche"
                className="hover:text-ocean-600 transition-colors"
                title="Rechercher"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
              </Link>
            </div>
          </nav>
        </header>

        {/* Main */}
        <main className="min-h-screen">{children}</main>

        {/* Footer */}
        <footer className="bg-ocean-950 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">✈️</span>
                  <span className="font-bold text-lg">
                    Vacances Bons Plans
                  </span>
                </div>
                <p className="text-ocean-300 text-sm leading-relaxed">
                  Comparateur independant de sejours et voyages. Nous comparons
                  les offres Cdiscount Voyage, Havas, Auchan et Leclerc Voyages
                  pour vous trouver le meilleur prix.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-sun-400">Categories</h3>
                <ul className="space-y-2 text-sm text-ocean-300">
                  <li>
                    <Link
                      href="/destinations"
                      className="hover:text-white transition-colors"
                    >
                      Destinations
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/bons-plans"
                      className="hover:text-white transition-colors"
                    >
                      Bons Plans
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/guides"
                      className="hover:text-white transition-colors"
                    >
                      Guides Voyage
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/comparatifs"
                      className="hover:text-white transition-colors"
                    >
                      Comparatifs
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4 text-sun-400">
                  Informations
                </h3>
                <ul className="space-y-2 text-sm text-ocean-300">
                  <li>
                    <Link
                      href="/mentions-legales"
                      className="hover:text-white transition-colors"
                    >
                      Mentions legales
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/confidentialite"
                      className="hover:text-white transition-colors"
                    >
                      Politique de confidentialite
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:bonsplansmania@gmail.com"
                      className="hover:text-white transition-colors"
                    >
                      contact@vacances-bons-plans.fr
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border-t border-ocean-800 mt-8 pt-8 text-center text-xs text-ocean-400">
              © 2026 vacances-bons-plans.fr — Tous droits
              reserves. Ce site participe a des programmes d&apos;affiliation.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
