import { GoogleAnalytics } from "@next/third-parties/google";

import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { site } from "./site-config";

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | ハンドメイドアクセサリーとソフトウェア開発`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: site.name,
    title: `${site.name} | ハンドメイドアクセサリーとソフトウェア開発`,
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
    title: `${site.name} | ハンドメイドアクセサリーとソフトウェア開発`,
    description: site.description,
    images: ["/images/handmade-accessories.jpg"],
  },
  icons: { icon: "/favicon.ico" },
  // 確認コードが空のときは meta タグを出力しない
  verification: site.googleSiteVerification
    ? { google: site.googleSiteVerification }
    : undefined,
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
  sameAs: [...site.shops.map((shop) => shop.url), site.instagram.url],
};

// 開発中のアクセスをGA4に混ぜたくないので、本番ビルドのときだけタグを出す。
const enableAnalytics =
  process.env.NODE_ENV === "production" && Boolean(site.gaId);

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
      {enableAnalytics && <GoogleAnalytics gaId={site.gaId} />}
    </html>
  );
}
