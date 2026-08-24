// サイト全体で使う会社情報。文言や連絡先の変更はこのファイルだけで済むようにしています。
export const site = {
  name: "株式会社Anty",
  nameEn: "Anty, Inc.",
  shortName: "Anty",
  url: "https://anty.jp",
  description:
    "株式会社Antyは、ITシステム・ソフトウェアプロダクトのコンサルティング・開発・開発支援と、ハンドメイドアクセサリーの企画・製造・販売を行う、神奈川県横浜市の会社です。",
  email: "corporate@anty.jp",
  founded: "2021-02-24",
  foundedLabel: "2021年2月24日",
  ceo: "西谷 愛",
  // 以下は値を入れると会社概要ページに自動で表示されます。空のままなら行ごと非表示。
  // 取引審査や与信のときに見られる項目です。
  capital: "",
  corporateNumber: "",
  fiscalYearEnd: "",
  phone: "",
  address: {
    region: "神奈川県",
    locality: "横浜市中区",
    street: "桜木町1-101-1 クロスゲート7階",
    full: "神奈川県横浜市中区桜木町1-101-1 クロスゲート7階",
  },
  shops: [
    {
      name: "minne",
      url: "https://minne.com/@anty-000",
      description: "GMOペパボが運営するハンドメイドマーケット",
    },
    {
      name: "Creema",
      url: "https://www.creema.jp/c/anty",
      description: "クリエイター作品のオンラインマーケット",
    },
  ],
  // 定款上の事業目的
  purposes: [
    "衣料品、衣料雑貨品、装身具、鞄、時計及び文房具の企画、製作並びにそれらの販売",
    "アクセサリーパーツ、チェーン、金具等の卸及び販売",
    "ECサイト、ウェブサイト等のITシステムの企画、開発、運用及びコンサルティング",
    "前各号に附帯関連する一切の事業",
  ],
};

export const nav = [
  { href: "/business/technology/", label: "テクノロジー事業" },
  { href: "/business/handmade/", label: "ハンドメイド事業" },
  { href: "/about/", label: "会社概要" },
  { href: "/contact/", label: "お問い合わせ" },
];
