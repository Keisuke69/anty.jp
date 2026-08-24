import Link from "next/link";
import styles from "./Footer.module.css";
import { nav, site } from "../site-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.grid}>
          <div>
            <p className={styles.brand}>Anty</p>
            <address className={styles.address}>
              {site.name}
              <br />
              {site.address.full}
              <br />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </address>
          </div>

          <div>
            <p className={styles.heading}>Site</p>
            <ul className={styles.list}>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.heading}>Online shop</p>
            <ul className={styles.list}>
              {site.shops.map((shop) => (
                <li key={shop.url}>
                  <a
                    className={styles.external}
                    href={shop.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {shop.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.bottom}>
          © 2021–{year} {site.nameEn}
        </p>
      </div>
    </footer>
  );
}
