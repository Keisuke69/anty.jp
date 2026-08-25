import Link from "next/link";
import styles from "./page.module.css";
import { site } from "./site-config";

export default function Home() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div>
            <span className={styles.heroEyebrow}>{site.nameEn}</span>
            <h1 className={styles.heroTitle}>{site.name}</h1>
            <p className={styles.heroText}>
              ハンドメイドアクセサリーの企画・製造・販売と、ITシステム・ソフトウェアプロダクトの開発という、2つの事業を営んでいます。
            </p>
            <div className={styles.heroActions}>
              <Link className="button" href="/contact/">
                お問い合わせ
              </Link>
              <Link className="button button--ghost" href="/about/">
                会社概要を見る
              </Link>
            </div>
          </div>
          <figure className={styles.heroFigure}>
            <img
              src="/images/handmade-accessories.jpg"
              alt="Antyのハンドメイドアクセサリー（パールとゴールドのピアス）"
              width="1616"
              height="1080"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="eyebrow">Business</span>
          <h2 className="sectionTitle">2つの事業</h2>
          <p className="lead">
            それぞれ独立した事業として運営しています。
          </p>

          <div className={styles.businessGrid}>
            <Link className={styles.businessCard} href="/business/handmade/">
              <span className={`${styles.cardTag} ${styles.cardTagHandmade}`}>
                Handmade
              </span>
              <h3>ハンドメイドアクセサリー</h3>
              <p>
                アンティーク風のアクセサリーを、企画から製作、販売まで自社で手がけています。イベント出展やポップアップストアでの対面販売が中心です。
              </p>
              <ul className={styles.cardServices}>
                <li>左右で形の違うアシンメトリーな耳飾り</li>
                <li>ネックレス、ヘアアクセサリー、バッグチャーム</li>
                <li>イベントやオンラインでの販売、卸のご相談</li>
              </ul>
              <span className={styles.cardMore}>事業について →</span>
            </Link>

            <Link className={styles.businessCard} href="/business/technology/">
              <span className={`${styles.cardTag} ${styles.cardTagTech}`}>
                Technology
              </span>
              <h3>ITシステム・ソフトウェア開発</h3>
              <p>
                技術顧問・アドバイザリーを中心に、ITシステムやソフトウェアプロダクトのコンサルティング、開発、開発支援を行っています。
              </p>
              <ul className={styles.cardServices}>
                <li>技術顧問・アドバイザリー</li>
                <li>Webサービス、ECサイトなどの設計・開発</li>
                <li>開発体制づくりの支援</li>
              </ul>
              <span className={`${styles.cardMore} ${styles.cardMoreTech}`}>
                事業について →
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <span className="eyebrow">Where to buy</span>
          <h2 className="sectionTitle">アクセサリーの購入</h2>
          <p className="lead">
            イベントへの出展やポップアップストアでの対面販売が中心です。出展の予定はInstagramでお知らせしています。オンラインマーケットでも販売しています。
          </p>
          <div className={styles.shopGrid}>
            <a
              className={`${styles.shopCard} ${styles.shopCardPrimary}`}
              href={site.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className={styles.shopName}>Instagram ↗</span>
              <span className={styles.shopNote}>{site.instagram.description}</span>
            </a>
            {site.shops.map((shop) => (
              <a
                key={shop.url}
                className={styles.shopCard}
                href={shop.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.shopName}>{shop.name} ↗</span>
                <span className={styles.shopNote}>{shop.description}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className={`container ${styles.aboutRow}`}>
          <div>
            <span className="eyebrow">About</span>
            <h2 className="sectionTitle">会社概要</h2>
            <p style={{ marginTop: "24px" }}>
              <Link className="button button--ghost" href="/about/">
                詳しい会社概要
              </Link>
            </p>
          </div>
          <dl className={styles.factList}>
            <div className={styles.factRow}>
              <dt>名称</dt>
              <dd>
                {site.name}（{site.nameEn}）
              </dd>
            </div>
            <div className={styles.factRow}>
              <dt>設立</dt>
              <dd>{site.foundedLabel}</dd>
            </div>
            <div className={styles.factRow}>
              <dt>代表取締役</dt>
              <dd>{site.ceo}</dd>
            </div>
            <div className={styles.factRow}>
              <dt>所在地</dt>
              <dd>{site.address.full}</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.cta}>
            <h2>ご相談・お問い合わせ</h2>
            <p>
              商品や卸のこと、システム開発や技術支援のこと。どちらの事業についても、メールでお問い合わせいただけます。
            </p>
            <Link className="button" href="/contact/">
              お問い合わせページへ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
