# anty.jp

株式会社Anty のコーポレートサイト。Next.js (App Router) で作り、静的ファイルとして書き出して AWS Amplify Console でホスティングしています。

## 開発

Node.js 20.9 以上が必要です。

```sh
yarn install
yarn dev     # http://localhost:3000
yarn build   # out/ に静的ファイルを書き出す
```

`yarn build` は `next.config.mjs` の `output: "export"` により `out/` を生成します。Amplify Console のビルド設定は `amplify.yml` に記述しています。

## ページ構成

| パス | 内容 | ファイル |
| --- | --- | --- |
| `/` | トップ | `app/page.js` |
| `/business/handmade/` | ハンドメイドアクセサリー事業 | `app/business/handmade/page.js` |
| `/business/technology/` | ITシステム・ソフトウェア開発事業 | `app/business/technology/page.js` |
| `/about/` | 会社概要 | `app/about/page.js` |
| `/contact/` | お問い合わせ | `app/contact/page.js` |

## 内容を変更するとき

- 会社名、住所、メールアドレス、販売サイトのリンク、定款上の事業内容、グローバルナビの項目は `app/site-config.js` にまとめてあります。ここを直せばヘッダー・フッター・会社概要・構造化データにまとめて反映されます。
- 色・余白・フォントの設定は `app/globals.css` の `:root` にあります。
- 各ページの本文は上表のファイルに直接書いています。
- 画像は `public/images/` に置き、`/images/...` で参照します。

## SEO

- `app/layout.js` でタイトル、ディスクリプション、OGP、`Organization` の構造化データを設定しています。
- `app/sitemap.js` と `app/robots.js` から `sitemap.xml` と `robots.txt` を生成しています。ページを追加したら `app/sitemap.js` の一覧にも追加してください。

## アクセス解析（Google Analytics）

- GA4 のタグは `app/layout.js` で `@next/third-parties` の `GoogleAnalytics` から読み込んでいます。測定 ID は `app/site-config.js` の `gaId` にまとめてあります。
- タグが入るのは本番ビルド（`yarn build`）だけです。`yarn dev` では出力しないので、開発中のアクセスは計測されません。
- `gaId` を空にすると、タグごと出力されなくなります。
- ページ間の移動はクライアント側の遷移なので、2ページ目以降を計測するには GA4 の「拡張計測機能 > 履歴の変更に基づくページの変更」が有効になっている必要があります（GA4 の初期状態で有効）。

## Search Console

- 所有権の確認は2通りあります。ドメインごとまとめて確認できる DNS の TXT レコード（Amplify で使っているドメインの DNS に追加）のほうが堅く、コードの変更も要りません。
- meta タグで確認する場合は、Search Console が発行した確認コードを `app/site-config.js` の `googleSiteVerification` に入れて再デプロイします。空のままなら meta タグは出力されません。確認が済んだあとも、外すと所有権が失われるので入れたままにしてください。
- 登録するサイトマップは `https://anty.jp/sitemap.xml` です。
