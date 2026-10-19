export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { publicUrl } from "@/data/siteConfig";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = publicUrl();
  if (!url) return [];
  return [
    { url, changeFrequency: "monthly", priority: 1 },
    { url: `${url}/projects/gain`, changeFrequency: "monthly", priority: 0.9 },
    {
      url: `${url}/research/sentiment-modulation`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${url}/projects/ragbase`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
