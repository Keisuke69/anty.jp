import Link from "next/link";
import PageHeader from "../components/PageHeader";
import ContactCta from "../components/ContactCta";
import styles from "./page.module.css";
import { site } from "../site-config";

export const metadata = {
  title: "会社概要",
  description:
    "株式会社Anty（Anty, Inc.）の会社概要。2021年2月設立。ハンドメイドアクセサリー事業とITシステム・ソフトウェア開発事業を営んでいます。",
  alternates: { canonical: "/about/" },
};

export default function About() {
  // 値が入っている項目だけを表示する（資本金などは site-config.js に追記すると出ます）
  const rows = [
    { term: "名称", value: `${site.name}（英語表記: ${site.nameEn}）` },
    { term: "所在地", value: site.address.full },
    { term: "設立", value: site.foundedLabel },
    { term: "資本金", value: site.capital },
    { term: "代表取締役", value: site.ceo },
    { term: "法人番号", value: site.corporateNumber },
    { term: "決算期", value: site.fiscalYearEnd },
    { term: "電話番号", value: site.phone },
  ].filter((row) => row.value);

  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="会社概要"
        lead="2021年2月に設立しました。ハンドメイドアクセサリーの製造・販売と、ITシステム・ソフトウェアの開発を行っています。"
      />

      <section className="section">
        <div className="container">
          <dl className={styles.profile}>
            {rows.map((row) => (
              <div key={row.term} className={styles.row}>
                <dt>{row.term}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
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
                アンティーク風のアクセサリーを、企画から製作、販売まで。
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
        text="事業に関するご相談、お取引の確認などはこちらから。"
      />
    </>
  );
}
