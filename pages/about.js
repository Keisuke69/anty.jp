import styles from "../styles/About.module.css";
import Link from "next/link";

export default function About() {
  return (
    <div className={styles.container}>
      <h1>会社概要</h1>
      <p>名称: 株式会社Anty（英語表記: Anty, Inc.）</p>
      <p>設立: 2021年2月24日</p>
      <p>代表取締役: 西谷愛</p>
      <p>所在地: 神奈川県横浜市中区桜木町１−１０１−１ クロスゲート 7階</p>
      <p>問い合わせ先: corporate@anty.jp</p>
      <p>事業概要</p>
      <ul>
        <li>
          衣料品、衣料雑貨品、装身具、鞄、時計及び文房具の企画、製作並びにそれらの販売
        </li>
        <li>アクセサリーパーツ、チェーン、金具等の卸及び販売</li>
        <li>
          EC サイト、ウェブサイト等の IT
          システムの企画、開発、運用及びコンサルティング
        </li>
        <li>前各号に附帯関連する一切の事業</li>
      </ul>
      <Link href="/">
        <a color="black">戻る</a>
      </Link>
    </div>
  );
}
