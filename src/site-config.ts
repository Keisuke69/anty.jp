// サイト全体で使う会社情報。文言や連絡先の変更はこのファイルだけで済むようにしています。
export const site = {
  name: "株式会社Anty",
  nameEn: "Anty, Inc.",
  shortName: "Anty",
  url: "https://anty.jp",
  description:
    "株式会社Antyは、アンティーク調ハンドメイドアクセサリーの製作・販売と、ITシステム・ソフトウェアプロダクトの技術支援を行っています。パールやクリスタルを使った右左で違うアシンメトリーな耳飾りを、横浜から。",
  email: "corporate@anty.jp",
  founded: "2021-02-24",
  foundedLabel: "2021年2月24日",
  ceo: "西谷 愛",
  capital: "1,000,000円",
  // 値を入れると会社概要ページに自動で表示されます。空のままなら行ごと非表示。
  fiscalYearEnd: "",
  phone: "",
  address: {
    region: "神奈川県",
    locality: "横浜市中区",
    street: "桜木町1-101-1 クロスゲート7階",
    full: "神奈川県横浜市中区桜木町1-101-1 クロスゲート7階",
  },
  // 公式オンラインストア（BASE。自社サイトとは別ドメインなので sameAs で関連付ける）
  store: {
    name: "Anty オンラインストア",
    url: "https://store.anty.jp/",
    domainLabel: "store.anty.jp",
  },
  shops: [
    {
      name: "minne",
      url: "https://minne.com/@anty-000",
      description: "ハンドメイドマーケット",
    },
    {
      name: "Creema",
      url: "https://www.creema.jp/c/anty",
      description: "クリエイター作品のマーケット",
    },
  ],
  // ハンドメイド事業のアカウント。会社全体ではなくアクセサリーの発信用。
  instagram: {
    name: "Instagram",
    handle: "@anty.accessory",
    url: "https://www.instagram.com/anty.accessory/",
    description: "出展予定・新作",
  },
  // アクセス解析。GA4の測定IDは本番ビルドのときだけ埋め込みます（yarn dev では計測しない）。
  // Search Consoleの所有権をmetaタグで確認するときは、発行された確認コードをここに入れます。
  // DNSのTXTレコードで確認済みなら空のままで構いません。どちらも空ならタグごと出力しません。
  gaId: "G-2TJ2SZEJ77",
  googleSiteVerification: "",
  // 定款上の事業目的
  purposes: [
    "衣料品、衣料雑貨品、装身具、鞄、時計及び文房具の企画、製作並びにそれらの販売",
    "アクセサリーパーツ、チェーン、金具等の卸及び販売",
    "ECサイト、ウェブサイト等のITシステムの企画、開発、運用及びコンサルティング",
    "前各号に附帯関連する一切の事業",
  ],
};

// ヘッダー・フッター共通のナビ。「事業内容」はトップの事業セクションへ送る。
export const nav = [
  { href: "/", label: "TOP" },
  { href: "/#business", label: "事業内容" },
  { href: "/about/", label: "会社概要" },
  { href: "/contact/", label: "お問い合わせ" },
];
