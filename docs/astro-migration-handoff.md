# Astro 移行ハンドオフ

anty.jp を Next.js (App Router) から Astro に書き換える作業の引き継ぎ資料です。調査は済んでいます。実装はこれからです。

## 一言で

見た目とURLと出力HTMLを変えずに、フレームワークだけ差し替えます。ホスティングは Vercel のままです。

## 背景

このサイトには動的な処理が1つもありません。調べた結果は次のとおりです。

- `next.config.mjs` が `output: "export"` で、ビルド結果は `out/` に出る静的ファイルだけ
- `yarn build` の出力は全9ルートが `○ (Static)`。SSR も ISR も無し
- API ルート無し、`"use client"` 無し、フォーム送信無し
- お問い合わせは `mailto:` リンク1本 (`app/contact/page.js:53`)

にもかかわらず、ビルド結果には JavaScript が非圧縮合計 612KB 入っています。React のハイドレーション一式です。クリックで動く要素が1つも無いページに、これを配る理由がありません。これを消すのが今回の目的です。

Cloudflare へのホスティング移行も検討しましたが、今回はやりません。フレームワーク差し替えとホスティング移設を1つのPRに混ぜると、本番で問題が出たときにどちらが原因か切り分けられなくなるためです。Astro の静的出力はただの `dist/` なので、移設したくなったらいつでもできます。

## スコープ

### やること

- Next.js から Astro への書き換え
- ビルド出力から JavaScript を無くす
- Vercel でのビルドとデプロイが通る状態にする
- README の更新

### やらないこと

書き換え以外は手を出さないでください。差分レビューが成立しなくなります。

- デザイン変更、レイアウト変更、配色変更
- 本文の文言変更
- URL の変更、ページの追加や削除
- Cloudflare への移設
- 画像の差し替えや最適化

例外は「既知の不具合」に挙げた OGP の1件だけです。

## 現状のファイル構成

全部で2,202行。うち CSS が1,196行を占めます。

| 現在 | 行数 | 移行後 |
| --- | --- | --- |
| `app/layout.js` | 89 | `src/layouts/Base.astro` |
| `app/page.js` | 165 | `src/pages/index.astro` |
| `app/about/page.js` | 90 | `src/pages/about.astro` |
| `app/business/handmade/page.js` | 137 | `src/pages/business/handmade.astro` |
| `app/business/technology/page.js` | 182 | `src/pages/business/technology.astro` |
| `app/contact/page.js` | 101 | `src/pages/contact.astro` |
| `app/not-found.js` | 25 | `src/pages/404.astro` |
| `app/components/*.js` (4件) | 127 | `src/components/*.astro` |
| `app/*.module.css` (9件) | 980 | **そのまま移動。中身は触らない** |
| `app/globals.css` | 216 | `src/styles/globals.css`。中身は触らない |
| `app/site-config.js` | 61 | `src/site-config.js`。中身は触らない |
| `app/sitemap.js` | 19 | `src/pages/sitemap.xml.js` (後述) |
| `app/robots.js` | 10 | `public/robots.txt` (静的ファイル) |

CSS Modules は Astro でもそのまま動きます。Astro は Vite の上に乗っていて、Vite が `*.module.css` を標準で解釈するためです。`import styles from "./Header.module.css"` と書いて `class={styles.header}` で参照します。**CSS は1行も書き直さないでください。**

## 移行の勘所

### JSX から .astro へ

ほぼ機械的に移せます。注意点は次のとおり。

- `className` を `class` に戻す
- `next/link` の `<Link href>` は素の `<a href>` に。ナビゲーションのリンク先は `site-config.js` の `nav` に末尾スラッシュ付きで入っているので、そのまま使えます
- `<img>` は既に素のHTMLタグです (`app/page.js:26`, `app/business/handmade/page.js:55`)。`next/image` は使っていません。属性ごとコピーで済みます。JSX の `fetchPriority` は HTML では `fetchpriority` になります
- コンポーネントの props は `Astro.props` から受けます

### `<ClientRouter />` は入れない

Astro の View Transitions を入れるとクライアント側ルーティングが復活して、JavaScript がゼロにならなくなります。今回の目的に反するので入れないでください。ページ遷移は素のフルリロードで構いません。

### astro.config.mjs

```js
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://anty.jp",
  trailingSlash: "always",   // 現行の next.config.mjs の trailingSlash: true に合わせる
  build: { format: "directory" },  // /about/index.html を出す (デフォルト)
});
```

`site` を設定すると `Astro.site` から絶対URLを組み立てられます。現行の `metadataBase` に相当します。

### head まわりは1コンポーネントにまとめる

現行は Next の Metadata API が生成しています。Astro には無いので `src/components/BaseHead.astro` を作って、`title` `description` `canonical` を props で受け取り、OGP と Twitter Card と JSON-LD をまとめて出力させます。40行程度です。各ページはこれを呼ぶだけにしてください。ページごとに meta タグを手書きすると必ずズレます。

### sitemap.xml は手書きする

`@astrojs/sitemap` を使いたくなりますが、**使わないでください**。あの integration が出すファイル名は `sitemap-index.xml` で、`sitemap.xml` ではありません。Search Console には `https://anty.jp/sitemap.xml` で登録済みなので、URLが変わると404になります。

現行の `app/sitemap.js` は5件のURLを手で並べているだけです。同じものを Astro の静的エンドポイントで出せば、URLも中身も完全に維持できます。

```js
// src/pages/sitemap.xml.js
import { site } from "../site-config.js";

const paths = ["/", "/business/handmade/", "/business/technology/", "/about/", "/contact/"];

export function GET() {
  const urls = paths
    .map((path) => `<url>\n<loc>${site.url}${path}</loc>\n<changefreq>monthly</changefreq>\n<priority>${path === "/" ? 1 : 0.7}</priority>\n</url>`)
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`,
    { headers: { "Content-Type": "application/xml" } }
  );
}
```

`trailingSlash: "always"` の設定下で拡張子付きのエンドポイントが `/sitemap.xml` として出るかは、ビルド後に `dist/sitemap.xml` の存在を目で確認してください。

### robots.txt は静的ファイルで

3行しかないので `public/robots.txt` に直接置きます。

```
User-Agent: *
Allow: /

Sitemap: https://anty.jp/sitemap.xml
```

### GA4

現行は `@next/third-parties` の `GoogleAnalytics` を、本番ビルドのときだけ読み込んでいます (`app/layout.js:64`)。Astro では gtag のスニペットを `Base.astro` に直接書いて、`import.meta.env.PROD && site.gaId` で出し分けてください。測定IDの置き場所 (`site-config.js` の `gaId`) と、空なら出力しない挙動は維持します。

計測の挙動が1つ変わります。今はクライアント側遷移なので、2ページ目以降の計測を GA4 の拡張計測機能 (履歴の変更に基づくページの変更) に頼っています。Astro ではページ遷移が毎回フルリロードになるので、各ページで普通に page_view が飛びます。設定への依存が消えるぶん、むしろ堅くなります。README のこの記述は書き換えが必要です。

### 404

`src/pages/404.astro` を置けば `dist/404.html` が出ます。Vercel は静的デプロイでこれを未マッチのパスに返します。

## 既知の不具合: サブページの OGP

移行前から壊れています。**移行のついでに直してください。**

現行の `app/layout.js` は `openGraph` に `title` `description` `url` を書いていますが、各ページの `metadata` は素の `title` と `description` と `alternates.canonical` しか上書きしていません。結果、トップ以外の4ページが全部こうなっています。

| ページ | canonical | og:url | og:title |
| --- | --- | --- | --- |
| `/` | `https://anty.jp/` | `https://anty.jp/` | トップのタイトル |
| `/about/` | `https://anty.jp/about/` | `https://anty.jp/` ← 誤 | トップのタイトル ← 誤 |
| `/business/handmade/` | `https://anty.jp/business/handmade/` | `https://anty.jp/` ← 誤 | トップのタイトル ← 誤 |
| `/business/technology/` | `https://anty.jp/business/technology/` | `https://anty.jp/` ← 誤 | トップのタイトル ← 誤 |
| `/contact/` | `https://anty.jp/contact/` | `https://anty.jp/` ← 誤 | トップのタイトル ← 誤 |

canonical だけは正しく出ています。壊れているのは OGP と Twitter Card です。今サブページをSNSで共有すると、トップページのタイトルと説明文が出て、リンク先もトップを指します。

`BaseHead.astro` を作るときに、`og:title` は各ページの title、`og:url` は canonical と同じ値、`og:description` は各ページの description を入れてください。これで直ります。og:image は全ページ共通のままで構いません。

この修正のぶんだけ、次の検証手順で meta タグに意図的な差分が出ます。差分を見る人が混乱しないよう、PR説明にも書いてください。

## 検証

移行前後で出力HTMLを突き合わせます。これをやらないとSEOのデグレに気付けません。

### 基準の作り方

```sh
git switch master
yarn install && yarn build
mv out /tmp/baseline-next
```

`out/` は `.gitignore` 済みなので、リポジトリの外に退避させておきます。

### 突き合わせ項目

Astro 側をビルドして `dist/` を作ったら、次を確認します。

1. **ファイルの並び**。`dist/` に `index.html` `about/index.html` `business/handmade/index.html` `business/technology/index.html` `contact/index.html` `404.html` `sitemap.xml` `robots.txt` `favicon.ico` `images/handmade-accessories.jpg` が揃っているか
2. **sitemap.xml が完全一致するか**。`diff /tmp/baseline-next/sitemap.xml dist/sitemap.xml` が無差分になるはず
3. **robots.txt が完全一致するか**
4. **`<title>` が全5ページで一致するか**
5. **`<link rel="canonical">` が全5ページで一致するか**
6. **og:image, og:site_name, og:locale, og:type, twitter:card が一致するか**
7. **本文テキストが一致するか**。タグを剥がして比較すると空白の差だけが出るはずです
8. **JavaScript が出ていないこと**。`find dist -name '*.js' | wc -l` が 0 になるのが理想です

og:title と og:url と og:description は、前述の不具合修正のぶん**意図的に差分が出ます**。差分の中身が「トップの値 → そのページの値」になっていることを確認してください。それ以外の差分が出たら直します。

### 目視

`yarn dev` で5ページとも開いて、スマホ幅とPC幅の両方で崩れがないか見てください。CSS を触らない前提なので崩れないはずですが、`class` への書き換え漏れがあると一部だけスタイルが外れます。

## 完了条件

- [ ] 5ページと404が Astro で表示される
- [ ] `dist/` に JavaScript が無い
- [ ] 上の突き合わせ項目8つが、OGP修正ぶんを除いて無差分
- [ ] URL が全部末尾スラッシュ付きで、現行と一致
- [ ] `site-config.js` の内容が現行のまま (会社情報を書き換えていない)
- [ ] CSS を1行も書き換えていない
- [ ] GA4 が本番ビルドでのみ出力され、`gaId` を空にすると消える
- [ ] Vercel のプレビューデプロイが通る
- [ ] README の更新。ビルド出力が `out/` から `dist/` に変わった点、ディレクトリ構成、GA4の拡張計測機能の記述
- [ ] `next.config.mjs` `jsconfig.json` と Next 関連の依存を削除

## 参考

現行の依存は4つだけです。

```json
"@next/third-parties": "16.3.2",
"next": "16.3.2",
"react": "19.2.8",
"react-dom": "19.2.8"
```

Astro 移行後、React と `@next/third-parties` は不要になります。Node は `.nvmrc` が 22、`package.json` の engines が `>=20.9.0` です。

`app/site-config.js` を直せば複数ページに反映される、という現行の作りは維持してください。README で会社情報の変更手順として案内している箇所です。
