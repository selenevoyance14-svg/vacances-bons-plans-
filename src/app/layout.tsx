import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geist = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://vacances-bons-plans.fr"),
  title: {
    default: "Vacances Bons Plans — Vacances familiales et mobil-homes",
    template: "%s | Vacances Bons Plans",
  },
  description:
    "Guides indépendants pour choisir un mobil-home, comparer les vrais coûts du camping et organiser des vacances familiales au bon prix.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg" },
  verification: {
    google: "lddqio4JEuuejlpB3Za7dcDfC6Od8Z1fVuvasRMXSJw",
  },
  openGraph: {
    title: "Vacances Bons Plans — Partir mieux, dépenser juste",
    description:
      "Mobil-homes, campings, destinations familiales et budgets expliqués sans mauvaises surprises.",
    url: "https://vacances-bons-plans.fr",
    siteName: "Vacances Bons Plans",
    locale: "fr_FR",
    type: "website",
    images: ["/images/hero-vacances-famille-mobil-home.webp"],
  },
};

const NAVIGATION = [
  { href: "/guides", label: "Mobil-home & guides" },
  { href: "/destinations", label: "Destinations" },
  { href: "/bons-plans", label: "Bons plans" },
  { href: "/comparatifs", label: "Comparatifs" },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        <meta name="google-adsense-account" content="ca-pub-5064203547863113" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5064203547863113"
          crossOrigin="anonymous"
        />
      </head>
      <body className={geist.variable}>
        <header className="site-header">
          <div className="site-container header-inner">
            <Link href="/" className="site-logo" aria-label="Vacances Bons Plans, accueil">
              <span className="site-logo-mark" aria-hidden>V</span>
              <span>
                Vacances
                <small>Bons Plans</small>
              </span>
            </Link>
            <nav className="desktop-nav" aria-label="Navigation principale">
              {NAVIGATION.map((item) => (
                <Link key={item.href} href={item.href}>{item.label}</Link>
              ))}
            </nav>
            <Link href="/recherche" className="search-link" aria-label="Rechercher sur le site">
              <span>Rechercher</span>
              <svg viewBox="0 0 24 24" aria-hidden>
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
            </Link>
          </div>
          <nav className="mobile-nav" aria-label="Navigation mobile">
            {NAVIGATION.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
        </header>

        <main>{children}</main>

        <footer className="site-footer">
          <div className="site-container footer-grid">
            <div className="footer-brand">
              <Link href="/" className="site-logo site-logo-footer">
                <span className="site-logo-mark" aria-hidden>V</span>
                <span>Vacances<small>Bons Plans</small></span>
              </Link>
              <p>
                Le guide indépendant des vacances familiales, des campings
                et des mobil-homes au juste prix.
              </p>
            </div>
            <div>
              <h2>Explorer</h2>
              <ul>
                {NAVIGATION.map((item) => (
                  <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h2>Le site</h2>
              <ul>
                <li><Link href="/a-propos">À propos</Link></li>
                <li><Link href="/contact">Contact</Link></li>
                <li><Link href="/mentions-legales">Mentions légales</Link></li>
                <li><Link href="/confidentialite">Confidentialité</Link></li>
              </ul>
            </div>
          </div>
          <div className="site-container footer-bottom">
            <p>© 2026 Vacances Bons Plans</p>
            <p>Certains liens peuvent être affiliés, sans surcoût pour vous.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
