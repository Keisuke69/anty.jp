import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Anty</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/temp.css"></link>
      </Head>

      <main className={styles.main}>
        {/* <h1 className={styles.title}>Anty</h1> */}

        <div className={styles.grid}>
          <a href="https://minne.com/@anty-000" target="_blank">
            <h2>minne</h2>
          </a>
        </div>
        <div>
          <a href="https://www.creema.jp/c/anty" target="_blank">
            <h2>Creema</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <Link href="/about">
          <a>©Anty, Inc. 2021</a>
        </Link>
      </footer>
    </div>
  );
}
