import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://anty.jp",
  // 旧 next.config.mjs の trailingSlash: true に合わせる
  trailingSlash: "always",
  // /about/index.html の形で書き出す
  build: { format: "directory" },
  // 旧URL。リニューアルで /business/accessory/ に改名した
  redirects: {
    "/business/handmade/": "/business/accessory/",
  },
});
