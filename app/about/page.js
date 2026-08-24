import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ContactCta from "../components/ContactCta";
import styles from "./page.module.css";
import { site } from "../site-config";

export const metadata = {
  title: "会社概要",
  description:
    "株式会社Anty（Anty, Inc.）の会社概要。2021年2月設立、神奈川県横浜市。ハンドメイドアクセサリー事業とITシステム・ソフトウェア開発事業を営んでいます。",
  alternates: { canonical: "/about/" },
};

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="会社概要"
        lead="2021年、横浜で設立しました。ものづくりとソフトウェア開発の両方を手がけています。"
      />

      <section className="section">
        <div className="container">
          <dl className={styles.profile}>
            <div className={styles.row}>
              <dt>名称</dt>
              <dd>
                {site.name}（英語表記: {site.nameEn}）
              </dd>
            </div>
            <div className={styles.row}>
              <dt>設立</dt>
              <dd>{site.foundedLabel}</dd>
            </div>
            <div className={styles.row}>
              <dt>代表取締役</dt>
              <dd>{site.ceo}</dd>
            </div>
            <div className={styles.row}>
              <dt>所在地</dt>
              <dd>{site.address.full}</dd>
            </div>
            <div className={styles.row}>
              <dt>お問い合わせ</dt>
              <dd>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </dd>
            </div>
            <div className={styles.row}>
              <dt>事業内容</dt>
              <dd>
                <ul className={styles.purposeList}>
                  {site.purposes.map((purpose) => (
                    <li key={purpose}>{purpose}</li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">Business</span>
          <h2 className="sectionTitle">事業紹介</h2>
          <div className={styles.businessLinks}>
            <Link href="/business/handmade/">
              <strong>ハンドメイドアクセサリー事業 →</strong>
              <span>
                アクセサリーの企画・デザインから製造、オンラインでの販売まで。
              </span>
            </Link>
            <Link href="/business/technology/">
              <strong>ITシステム・ソフトウェア開発事業 →</strong>
              <span>
                コンサルティング、開発、開発支援。企画段階からのご相談も承ります。
              </span>
            </Link>
          </div>
        </div>
      </section>

      <ContactCta
        title="お問い合わせ"
        text="事業に関するご相談、取材のご依頼などはこちらから。"
      />
    </>
  );
}
