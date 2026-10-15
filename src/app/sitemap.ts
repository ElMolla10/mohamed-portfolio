export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { publicUrl } from "@/data/siteConfig";
export default function sitemap(): MetadataRoute.Sitemap {
  const url = publicUrl();
  return url ? [{ url, changeFrequency: "monthly", priority: 1 }] : [];
}
