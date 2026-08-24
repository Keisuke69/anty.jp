import Link from "next/link";
import styles from "./ContactCta.module.css";

export default function ContactCta({ title, text }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.cta}>
          <div className={styles.text}>
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
          <Link className="button" href="/contact/">
            お問い合わせ
          </Link>
        </div>
      </div>
    </section>
  );
}
