import Head from "next/head";
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
        <p>
          <font color="white">以下のサイトで購入できます</font>
        </p>
        <div className={styles.grid}>
          <a href="https://minne.com/@anty-000" target="_blank">
            <h2>minne</h2>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="https://www.creema.jp/c/anty" target="_blank">
            <h2>Creema</h2>
          </a>
        </div>

        <div style={{ marginTop: "100px" }}>
          <Link href="/about">
            <a>会社概要</a>
          </Link>
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
