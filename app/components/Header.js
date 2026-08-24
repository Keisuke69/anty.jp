import Link from "next/link";
import styles from "./Header.module.css";
import { nav, site } from "../site-config";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.logo}>
          Anty
          <span>{site.nameEn}</span>
        </Link>
        <nav className={styles.nav} aria-label="メインナビゲーション">
          <ul>
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
