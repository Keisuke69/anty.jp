import type { APIRoute } from "astro";
import { site } from "../site-config";

const paths = [
  "/",
  "/business/accessory/",
  "/business/technology/",
  "/about/",
  "/contact/",
];

export const GET: APIRoute = () => {
  const urls = paths
    .map(
      (path) =>
        `<url>\n<loc>${site.url}${path}</loc>\n<changefreq>monthly</changefreq>\n<priority>${path === "/" ? 1 : 0.7}</priority>\n</url>`
    )
    .join("\n");
  return new Response(
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
    { headers: { "Content-Type": "application/xml" } }
  );
}
