import PageHeader from "../../components/PageHeader";
import ContactCta from "../../components/ContactCta";
import styles from "./page.module.css";
import { site } from "../../site-config";

export const metadata = {
  title: "ハンドメイド事業",
  description:
    "株式会社Antyのハンドメイドアクセサリー事業について。企画・デザインから製造、オンラインでの販売までを自社で行っています。",
  alternates: { canonical: "/business/handmade/" },
};

const steps = [
  {
    number: "01",
    title: "企画・デザイン",
    text: "身につける場面を思い浮かべながら、素材と組み合わせを決めていきます。",
  },
  {
    number: "02",
    title: "製造",
    text: "パーツの選定から組み立てまで、手作業で仕上げます。",
  },
  {
    number: "03",
    title: "販売",
    text: "オンラインマーケットで販売し、お客さまからのご質問にも直接お答えしています。",
  },
];

export default function Handmade() {
  return (
    <>
      <PageHeader
        eyebrow="Handmade accessory"
        title="ハンドメイドアクセサリー事業"
        lead="手仕事でつくるアクセサリーを、企画から製造、販売まで自社で手がけています。"
      />

      <section className="section">
        <div className={`container ${styles.intro}`}>
          <div className={styles.introText}>
            <h2 className="sectionTitle">つくって、届けるまで</h2>
            <p style={{ marginTop: "20px", color: "var(--text-muted)" }}>
              パールやゴールドのパーツを組み合わせたピアス・イヤリングを中心に、日常で使えるアクセサリーをつくっています。デザインを考えるところから、パーツを選び、組み立て、お届けするところまでを自社で行っています。
            </p>
            <p style={{ color: "var(--text-muted)" }}>
              アクセサリーのほか、衣料品や衣料雑貨品、鞄、時計、文房具の企画・製作・販売、アクセサリーパーツやチェーン、金具などの卸・販売も事業として行っています。
            </p>
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
          <span className="eyebrow">Process</span>
          <h2 className="sectionTitle">ものづくりの流れ</h2>
          <div className={styles.itemGrid}>
            {steps.map((step) => (
              <div key={step.number} className={styles.item}>
                <span className={styles.itemNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Where to buy</span>
          <h2 className="sectionTitle">お求めいただけるお店</h2>
          <p className="lead">
            オンラインマーケットで販売しています。在庫状況や新作の入荷は各ショップページでご確認ください。
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
        text="店舗での取り扱いやイベント出店、パーツの卸についてのご相談を承っています。"
      />
    </>
  );
}
