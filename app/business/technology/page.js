import PageHeader from "../../components/PageHeader";
import ContactCta from "../../components/ContactCta";
import styles from "./page.module.css";

export const metadata = {
  title: "テクノロジー事業",
  description:
    "株式会社AntyのITシステム・ソフトウェアプロダクト事業について。コンサルティング、開発、開発支援を行っています。",
  alternates: { canonical: "/business/technology/" },
};

const services = [
  {
    title: "コンサルティング",
    text: "つくる前の判断を一緒に整理します。",
    items: [
      "技術選定とアーキテクチャの検討",
      "プロダクトの企画・要件の整理",
      "既存システムの見直し",
    ],
  },
  {
    title: "開発",
    text: "設計から実装、運用までを担当します。",
    items: [
      "Webサービス・業務システムの開発",
      "ECサイト、ウェブサイトの構築",
      "リリース後の運用と改善",
    ],
  },
  {
    title: "開発支援",
    text: "お客さまのチームに入って開発を進めます。",
    items: [
      "開発チームへの参画",
      "設計・コードレビュー",
      "開発の進め方や体制づくりの相談",
    ],
  },
];

const flow = [
  {
    title: "お問い合わせ",
    text: "メールで概要をお知らせください。現時点で決まっていないことがあっても構いません。",
  },
  {
    title: "打ち合わせ",
    text: "オンラインまたは対面で、課題とご要望をうかがいます。",
  },
  {
    title: "ご提案・お見積り",
    text: "進め方、期間、費用をまとめてご提案します。",
  },
  {
    title: "着手",
    text: "内容にご納得いただいたうえで契約し、作業を始めます。",
  },
];

const areas = [
  "Webアプリケーション",
  "ECサイト",
  "業務システム",
  "クラウド上のシステム構築",
  "既存システムの改善",
  "技術顧問・アドバイザリー",
];

export default function Technology() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="ITシステム・ソフトウェア開発事業"
        lead="ITシステムやソフトウェアプロダクトのコンサルティング、開発、開発支援を行っています。"
      />

      <section className="section">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h2 className="sectionTitle">できること</h2>
          <p className="lead">
            企画段階のご相談から、開発チームに入っての支援まで、必要な工程に必要なかたちで関わります。
          </p>
          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <div key={service.title} className={styles.service}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <ul>
                  {service.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">Areas</span>
          <h2 className="sectionTitle">対応領域</h2>
          <ul className={styles.areaList}>
            {areas.map((area) => (
              <li key={area}>{area}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Flow</span>
          <h2 className="sectionTitle">ご相談の流れ</h2>
          <ol className={styles.flow}>
            {flow.map((step) => (
              <li key={step.title}>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <ContactCta
        title="開発・技術支援のご相談"
        text="要件が固まっていない段階でも、まずはご状況をお聞かせください。"
      />
    </>
  );
}
