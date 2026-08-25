import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://anty.jp",
  // 現行 (Next.js) の trailingSlash: true に合わせる
  trailingSlash: "always",
  // /about/index.html の形で書き出す
  build: { format: "directory" },
});
