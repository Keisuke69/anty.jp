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
