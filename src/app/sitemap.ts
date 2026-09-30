import type { MetadataRoute } from "next";
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vikasmaurya.dev";
  return [
    { url: base, lastModified: new Date(), priority: 1 },
    { url: `${base}/credits`, lastModified: new Date(), priority: 0.3 },
  ];
}
