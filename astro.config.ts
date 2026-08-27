import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://anty.jp",
  integrations: [
    // ページ追加時の手動メンテを不要にするため sitemap は自動生成する。
    // noindex のページ（送信完了）は載せない。404 は Astro 側で除外される。
    sitemap({
      filter: (page) => !page.includes("/contact/thanks/"),
    }),
  ],
  // 旧 next.config.mjs の trailingSlash: true に合わせる
  trailingSlash: "always",
  // /about/index.html の形で書き出す
  build: { format: "directory" },
  // 旧URL。リニューアルで /business/accessory/ に改名した
  redirects: {
    "/business/handmade/": "/business/accessory/",
  },
});
