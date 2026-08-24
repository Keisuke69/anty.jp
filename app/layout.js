import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./site-config";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ソフトウェア開発とハンドメイドアクセサリー`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: site.name,
    title: `${site.name} | ソフトウェア開発とハンドメイドアクセサリー`,
    description: site.description,
    url: "/",
    images: [
      {
        url: "/images/handmade-accessories.jpg",
        width: 1616,
        height: 1080,
        alt: "Antyのハンドメイドアクセサリー",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | ソフトウェア開発とハンドメイドアクセサリー`,
    description: site.description,
    images: ["/images/handmade-accessories.jpg"],
  },
  icons: { icon: "/favicon.ico" },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  alternateName: site.nameEn,
  url: site.url,
  logo: `${site.url}/favicon.ico`,
  email: site.email,
  foundingDate: site.founded,
  founder: { "@type": "Person", name: site.ceo },
  address: {
    "@type": "PostalAddress",
    addressCountry: "JP",
    addressRegion: site.address.region,
    addressLocality: site.address.locality,
    streetAddress: site.address.street,
  },
  sameAs: site.shops.map((shop) => shop.url),
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <a className="skipLink" href="#main">
          本文へスキップ
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </body>
    </html>
  );
}
