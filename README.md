# anty.jp

株式会社Anty のコーポレートサイト。Astro で作り、静的ファイルとして書き出しています。ホスティングは Vercel です。ビルド出力に JavaScript は含まれません（GA4 のタグを除く）。

## 開発

Node.js 20.9 以上が必要です。

```sh
yarn install
yarn dev       # http://localhost:4321
yarn build     # dist/ に静的ファイルを書き出す
yarn preview   # dist/ をローカルで確認する
```

`yarn build` は `dist/` を生成します。

## デプロイ

`master` に入ると Vercel が本番へデプロイします。プルリクエストを作るとプレビュー用のURLが発行されるので、公開前の確認はそこでできます。

## ページ構成

| パス | 内容 | ファイル |
| --- | --- | --- |
| `/` | トップ | `src/pages/index.astro` |
| `/business/handmade/` | ハンドメイドアクセサリー事業 | `src/pages/business/handmade/index.astro` |
| `/business/technology/` | ITシステム・ソフトウェア開発事業 | `src/pages/business/technology/index.astro` |
| `/about/` | 会社概要 | `src/pages/about/index.astro` |
| `/contact/` | お問い合わせ | `src/pages/contact/index.astro` |

`src/pages/404.astro` が404ページです。ヘッダーとフッター、問い合わせへの導線は `src/components/` にあります。全ページ共通の骨組み（head、ヘッダー、フッター、構造化データ、GA4）は `src/layouts/Base.astro` で、meta タグの出力は `src/components/BaseHead.astro` にまとめています。

## 内容を変更するとき

**`src/site-config.js` を直すと、複数のページにまとめて反映されます。**

| 変えたいもの | 項目 |
| --- | --- |
| 会社名、設立、代表者、所在地、メールアドレス | `site` の各項目 |
| 資本金、決算期、電話番号 | `capital`、`fiscalYearEnd`、`phone`（空にすると会社概要から行ごと消えます） |
| minne と Creema のリンク | `shops` |
| Instagram のリンク | `instagram` |
| 定款上の事業内容 | `purposes` |
| グローバルナビの項目と順番 | `nav` |
| GA4 の測定ID、Search Console の確認コード | `gaId`、`googleSiteVerification` |

そのほか。

- 各ページの本文は上の表のファイルに直接書いています。文章を直すならそこです。
- 色、余白、フォントは `src/styles/globals.css` の `:root` にまとめてあります。ページやコンポーネント固有のスタイルは、同じディレクトリの `*.module.css`（CSS Modules）にあります。
- 画像は `public/images/` に置き、`/images/ファイル名` で参照します。
- ページを増やすときは `src/pages/<パス>/index.astro` を作り、`src/pages/sitemap.xml.js` の一覧と、必要なら `src/site-config.js` の `nav` にも追加してください。

## SEO

- タイトル、ディスクリプション、OGP は `src/components/BaseHead.astro` が出力します。各ページは `Base.astro` に `title` `description` `canonical` を渡すだけです。
- `Organization` の構造化データは `src/layouts/Base.astro` にあります。
- `sitemap.xml` は `src/pages/sitemap.xml.js` から生成しています。Search Console に `https://anty.jp/sitemap.xml` で登録済みなので、ファイル名を変えないでください（`@astrojs/sitemap` は `sitemap-index.xml` を出すため使っていません）。
- `robots.txt` は `public/robots.txt` にある静的ファイルです。

## アクセス解析（Google Analytics）

- GA4 のタグは `src/layouts/Base.astro` に直接書いています。測定 ID は `src/site-config.js` の `gaId` にまとめてあります。
- タグが入るのは本番ビルド（`yarn build`）だけです。`yarn dev` では出力しないので、開発中のアクセスは計測されません。
- `gaId` を空にすると、タグごと出力されなくなります。
- ページ間の移動は毎回フルリロードなので、各ページで通常どおり page_view が送信されます。GA4 の拡張計測機能（履歴の変更に基づくページの変更）には依存していません。

## Search Console

- 所有権の確認は2通りあります。ドメインごとまとめて確認できる DNS の TXT レコード（Vercel で使っているドメインの DNS に追加）のほうが堅く、コードの変更も要りません。
- meta タグで確認する場合は、Search Console が発行した確認コードを `src/site-config.js` の `googleSiteVerification` に入れて再デプロイします。空のままなら meta タグは出力されません。確認が済んだあとも、外すと所有権が失われるので入れたままにしてください。
- 登録するサイトマップは `https://anty.jp/sitemap.xml` です。
