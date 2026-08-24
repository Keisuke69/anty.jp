import Link from "next/link";
import PageHeader from "./components/PageHeader";

export const metadata = {
  title: "ページが見つかりません",
};

export default function NotFound() {
  return (
    <>
      <PageHeader
        eyebrow="404"
        title="ページが見つかりません"
        lead="お探しのページは移動または削除された可能性があります。"
      />
      <section className="section">
        <div className="container">
          <Link className="button" href="/">
            トップページへ戻る
          </Link>
        </div>
      </section>
    </>
  );
}
