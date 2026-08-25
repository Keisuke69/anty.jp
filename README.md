# anty.jp

株式会社Anty のコーポレートサイト。Next.js (App Router) で作り、静的ファイルとして書き出しています。ホスティングは Vercel です。

## 開発

Node.js 20.9 以上が必要です。

```sh
yarn install
yarn dev     # http://localhost:3000
yarn build   # out/ に静的ファイルを書き出す
```

`yarn build` は `next.config.mjs` の `output: "export"` により `out/` を生成します。

## デプロイ

`master` に入ると Vercel が本番へデプロイします。プルリクエストを作るとプレビュー用のURLが発行されるので、公開前の確認はそこでできます。

## ページ構成

| パス | 内容 | ファイル |
| --- | --- | --- |
| `/` | トップ | `app/page.js` |
| `/business/handmade/` | ハンドメイドアクセサリー事業 | `app/business/handmade/page.js` |
| `/business/technology/` | ITシステム・ソフトウェア開発事業 | `app/business/technology/page.js` |
| `/about/` | 会社概要 | `app/about/page.js` |
| `/contact/` | お問い合わせ | `app/contact/page.js` |

`app/not-found.js` が404ページです。ヘッダーとフッター、問い合わせへの導線は `app/components/` にあります。

## 内容を変更するとき

**`app/site-config.js` を直すと、複数のページにまとめて反映されます。**

| 変えたいもの | 項目 |
| --- | --- |
| 会社名、設立、代表者、所在地、メールアドレス | `site` の各項目 |
| 資本金、決算期、電話番号 | `capital`、`fiscalYearEnd`、`phone`（空にすると会社概要から行ごと消えます） |
| minne と Creema のリンク | `shops` |
| Instagram のリンク | `instagram` |
| 定款上の事業内容 | `purposes` |
| グローバルナビの項目と順番 | `nav` |

そのほか。

- 各ページの本文は上の表のファイルに直接書いています。文章を直すならそこです。
- 色、余白、フォントは `app/globals.css` の `:root` にまとめてあります。
- 画像は `public/images/` に置き、`/images/ファイル名` で参照します。
- ページを増やすときは `app/<パス>/page.js` を作り、`app/sitemap.js` の一覧と、必要なら `app/site-config.js` の `nav` にも追加してください。

## SEO

- `app/layout.js` でタイトル、ディスクリプション、OGP、`Organization` の構造化データを設定しています。
- `app/sitemap.js` と `app/robots.js` から `sitemap.xml` と `robots.txt` を生成しています。
