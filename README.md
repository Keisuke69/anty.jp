# anty.jp

株式会社Anty のコーポレートサイト。Astro で作り、静的ファイルとして書き出しています。ホスティングは Vercel です。ビルド出力に JavaScript は含まれません（GA4 の計測タグを除く）。

## 開発

Node.js 22.12 以上が必要です。

```sh
pnpm install
pnpm dev     # http://localhost:4321
pnpm build   # dist/ に静的ファイルを書き出す
pnpm preview # dist/ をローカルで配信して確認する
```

## デプロイ

`master` に入ると Vercel が本番へデプロイします。プルリクエストを作るとプレビュー用のURLが発行されるので、公開前の確認はそこでできます。

## ページ構成

| パス | 内容 | ファイル |
| --- | --- | --- |
| `/` | トップ | `src/pages/index.astro` |
| `/business/accessory/` | ハンドメイドアクセサリー事業 | `src/pages/business/accessory.astro` |
| `/business/technology/` | テクノロジー事業 | `src/pages/business/technology.astro` |
| `/about/` | 会社概要 | `src/pages/about.astro` |
| `/contact/` | お問い合わせ | `src/pages/contact.astro` |

`src/pages/404.astro` が404ページです。旧URL `/business/handmade/` は `astro.config.ts` の `redirects` で `/business/accessory/` に転送しています。全ページ共通の枠組み（head、ヘッダー、フッター）は `src/layouts/Base.astro` にあり、ヘッダーとフッター、パンくず、問い合わせへの導線は `src/components/` にあります。

## 内容を変更するとき

**`src/site-config.ts` を直すと、複数のページにまとめて反映されます。**

| 変えたいもの | 項目 |
| --- | --- |
| 会社名、設立、代表者、所在地、メールアドレス | `site` の各項目 |
| お問い合わせフォームの送信先 | `contactFormAction`（下の「お問い合わせフォーム」を参照） |
| 資本金、決算期、電話番号 | `capital`、`fiscalYearEnd`、`phone`（空にすると会社概要から行ごと消えます） |
| 公式オンラインストアのリンク | `store` |
| minne と Creema のリンク | `shops` |
| Instagram のリンク | `instagram` |
| 定款上の事業内容 | `purposes` |
| グローバルナビの項目と順番 | `nav` |
| GA4 の測定ID、Search Console の確認コード | `gaId`、`googleSiteVerification` |

### お問い合わせフォーム

お問い合わせは、メールアドレスを掲載する代わりにフォームで受け付けられます。HTMLフォームの POST を受けてメール通知してくれるサービス（[SSGform](https://ssgform.com/)、[Formspree](https://formspree.io/) など）でエンドポイントを発行し、そのURLを `src/site-config.ts` の `contactFormAction` に入れてください。

- `contactFormAction` にURLを入れると: お問い合わせページにフォームが表示され、メールアドレスの掲載（お問い合わせページ、会社概要、各ページ末尾の問い合わせ帯、構造化データ）がすべてフォームへの案内に切り替わります。
- 空のままなら: これまでどおり `email` のメールアドレスを表示します。

フォームは素の HTML `<form>` の POST だけで動くので、JavaScript を含めない方針はそのままです。スパム対策として `_gotcha` のハニーポット欄を入れていますが（Formspree はこれで自動で弾きます）、必要ならサービス側の設定（reCAPTCHA など）も併用してください。

送信後のサンキューページは `/contact/thanks/`（`src/pages/contact/thanks.astro`、noindex）です。SSGform 管理画面の「送信後転送URL」に `https://anty.jp/contact/thanks/` を設定すると、送信完了後にこのページへ転送されます。未設定の間は SSGform 標準の完了画面が表示されます。

そのほか。

- 各ページの本文は上の表のファイルに直接書いています。文章を直すならそこです。
- 色、余白、フォントは `src/styles/globals.css` の `:root` にまとめてあります。ページごとのスタイルは `src/styles/*.module.css`、コンポーネントのスタイルは `src/components/*.module.css` です（CSS Modules）。
- 画像は `public/images/` に置き、`/images/ファイル名` で参照します。
- ページを増やすときは `src/pages/<パス>.astro` を作り、`src/pages/sitemap.xml.ts` の一覧と、必要なら `src/site-config.ts` の `nav` にも追加してください。

## SEO

- `src/components/BaseHead.astro` でタイトル、ディスクリプション、canonical、OGP を出力しています。各ページは `Base.astro` に `title` `description` `path` を渡すだけです。
- `Organization` の構造化データは `src/layouts/Base.astro` にあります。
- `sitemap.xml` は `src/pages/sitemap.xml.ts` から生成しています。`robots.txt` は `public/robots.txt` の静的ファイルです。

## アクセス解析（Google Analytics）

- GA4 のタグ（gtag スニペット）は `src/layouts/Base.astro` に直接書いています。測定 ID は `src/site-config.ts` の `gaId` にまとめてあります。
- タグが入るのは本番ビルド（`pnpm build`）だけです。`pnpm dev` では出力しないので、開発中のアクセスは計測されません。
- `gaId` を空にすると、タグごと出力されなくなります。
- ページ間の移動は毎回フルリロードなので、どのページでも通常の page_view が送信されます。GA4 の拡張計測機能（履歴の変更に基づくページの変更）には依存していません。

## Search Console

- 所有権の確認は2通りあります。ドメインごとまとめて確認できる DNS の TXT レコード（Vercel で使っているドメインの DNS に追加）のほうが堅く、コードの変更も要りません。
- meta タグで確認する場合は、Search Console が発行した確認コードを `src/site-config.ts` の `googleSiteVerification` に入れて再デプロイします。空のままなら meta タグは出力されません。確認が済んだあとも、外すと所有権が失われるので入れたままにしてください。
- 登録するサイトマップは `https://anty.jp/sitemap.xml` です。
