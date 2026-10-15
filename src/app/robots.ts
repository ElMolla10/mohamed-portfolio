export const dynamic = "force-static";
import type { MetadataRoute } from "next";
import { publicUrl } from "@/data/siteConfig";
export default function robots(): MetadataRoute.Robots {
  const url = publicUrl();
  return {
    rules: { userAgent: "*", ...(url ? { allow: "/" } : { disallow: "/" }) },
    ...(url ? { sitemap: `${url}/sitemap.xml` } : {}),
  };
}
