import PageHeader from "../../components/PageHeader";
import ContactCta from "../../components/ContactCta";
import styles from "./page.module.css";
import { site } from "../../site-config";

export const metadata = {
  title: "ハンドメイド事業",
  description:
    "株式会社Antyのハンドメイドアクセサリー事業について。アンティーク風のアクセサリーを、企画から製作、販売まで自社で手がけています。",
  alternates: { canonical: "/business/handmade/" },
};

const items = [
  "耳飾り（ピアス・イヤリング）",
  "ネックレス",
  "ヘアアクセサリー",
  "バッグチャーム",
];

const materials = [
  "16kgp",
  "本ロジウムコーティング",
  "サージカルステンレスの金具",
  "コットンパール",
  "ストーン",
];

export default function Handmade() {
  return (
    <>
      <PageHeader
        eyebrow="Handmade accessory"
        title="ハンドメイドアクセサリー事業"
        lead="アンティーク風のアクセサリーを、企画から製作、販売まで自社で手がけています。"
      />

      <section className="section">
        <div className={`container ${styles.intro}`}>
          <div className={styles.introText}>
            <span className="eyebrow">Items</span>
            <h2 className="sectionTitle">つくっているもの</h2>
            <p>
              アンティーク風のデザインを軸に、左右で形の違うアシンメトリーな耳飾りをつくっています。ピアスとイヤリングのどちらもご用意しています。
            </p>
            <p>
              ほかに、ネックレスや、インド刺繍のリボンを使ったヘアアクセサリー、バッグチャームもあります。
            </p>
            <ul className={styles.tagList}>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <figure className={styles.figure}>
            <img
              src="/images/handmade-accessories.jpg"
              alt="台紙に並んだパールとゴールドのピアス"
              width="1616"
              height="1080"
            />
          </figure>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">Materials</span>
          <h2 className="sectionTitle">素材と金具</h2>
          <p className="lead">
            金具には16kgpや本ロジウムコーティングのもの、サージカルステンレスを使い、そこにコットンパールやストーン、金属のパーツを組み合わせています。普段使いにも、フォーマルな場面にも合わせられるようにつくっています。
          </p>
          <ul className={styles.tagList}>
            {materials.map((material) => (
              <li key={material}>{material}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Making</span>
          <h2 className="sectionTitle">つくるときに考えていること</h2>
          <div className={styles.note}>
            <p>
              アクセサリーを選ぶとき、届いた箱を開けるとき、身につけるとき。そのどこかで少し華やいだ気持ちになってもらえたら、と思いながらつくっています。
            </p>
            <p>一点ずつ手作業で仕上げています。</p>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">Where to buy</span>
          <h2 className="sectionTitle">お求めいただける場所</h2>
          <p className="lead">
            イベントへの出展やポップアップストアでの対面販売を中心にしています。出展の予定はInstagramでお知らせしていますので、お近くで開催の際はお立ち寄りください。
          </p>

          <a
            className={styles.instagramCard}
            href={site.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className={styles.instagramLabel}>出展情報</span>
            <strong>Instagram {site.instagram.handle} ↗</strong>
            <span className={styles.instagramNote}>
              {site.instagram.description}
            </span>
          </a>

          <h3 className={styles.subheading}>オンラインでの販売</h3>
          <p className={styles.subtext}>
            以下のマーケットでも販売しています。在庫状況や新作の入荷は各ショップページでご確認ください。
          </p>
          <ul className={styles.shopList}>
            {site.shops.map((shop) => (
              <li key={shop.url}>
                <a href={shop.url} target="_blank" rel="noopener noreferrer">
                  <strong>{shop.name} ↗</strong>
                  <span>{shop.description}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCta
        title="卸・お取り扱いのご相談"
        text="店舗での取り扱いや、イベントやポップアップストアへの出展のお誘い、パーツの卸についてのご相談を承っています。"
      />
    </>
  );
}
