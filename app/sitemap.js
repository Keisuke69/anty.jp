import { site } from "./site-config";

export const dynamic = "force-static";

const paths = [
  "/",
  "/business/technology/",
  "/business/handmade/",
  "/about/",
  "/contact/",
];

export default function sitemap() {
  return paths.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.7,
  }));
}
