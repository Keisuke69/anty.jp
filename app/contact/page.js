import PageHeader from "../components/PageHeader";
import styles from "./page.module.css";
import { site } from "../site-config";

export const metadata = {
  title: "お問い合わせ",
  description:
    "株式会社Antyへのお問い合わせ。商品・卸のご相談、システム開発や技術支援のご相談は corporate@anty.jp までご連絡ください。",
  alternates: { canonical: "/contact/" },
};

const topics = [
  {
    title: "商品について",
    text: "アクセサリーの仕様やお届けについてのご質問。ご注文済みの商品については、ご購入いただいたショップからのご連絡が確実です。",
  },
  {
    title: "卸・お取り扱いのご相談",
    text: "店舗での取り扱い、イベント出店、アクセサリーパーツの卸についてのご相談。",
  },
  {
    title: "開発・技術支援のご相談",
    text: "システム開発、プロダクト開発の相談、開発チームへの参画や技術顧問のご依頼。",
  },
  {
    title: "取材・その他",
    text: "取材、協業のご提案、採用に関するお問い合わせなど。",
  },
];

const checklist = [
  "貴社名・お名前（個人のお客さまはお名前のみで結構です）",
  "ご返信先のメールアドレス",
  "お問い合わせの内容（お困りごとやご要望）",
  "ご希望の時期や予算感（開発のご相談の場合、決まっていれば）",
];

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="お問い合わせ"
        lead="どちらの事業についても、メールで承っています。数日以内にご返信します。"
      />

      <section className="section">
        <div className="container">
          <div className={styles.mailCard}>
            <p className={styles.mailLabel}>Email</p>
            <a className={styles.mailAddress} href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <p className={styles.mailNote}>
              クリックするとメールソフトが開きます。
            </p>
          </div>
        </div>
      </section>

      <section className="section section--tight section--alt">
        <div className="container">
          <span className="eyebrow">Topics</span>
          <h2 className="sectionTitle">お問い合わせの例</h2>
          <div className={styles.topicGrid}>
            {topics.map((topic) => (
              <div key={topic.title} className={styles.topic}>
                <h3>{topic.title}</h3>
                <p>{topic.text}</p>
              </div>
            ))}
          </div>
          <p className={styles.shopNote}>
            商品に関するご質問は、
            {site.shops.map((shop, index) => (
              <span key={shop.url}>
                {index > 0 ? "・" : ""}
                <a href={shop.url} target="_blank" rel="noopener noreferrer">
                  {shop.name}
                </a>
              </span>
            ))}
            の各ショップページからもお送りいただけます。
          </p>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <span className="eyebrow">Before you write</span>
          <h2 className="sectionTitle">お書き添えいただきたいこと</h2>
          <ul className={styles.checkList}>
            {checklist.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
