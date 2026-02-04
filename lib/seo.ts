import { Metadata } from "next"
import { SeoMeta } from "@/types/seo"

export function buildMetadata(
  seo: SeoMeta,
  baseUrl?: string
): Metadata {
  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    robots: seo.noIndex ? "noindex,nofollow" : "index,follow",
    alternates: seo.canonical
      ? { canonical: seo.canonical }
      : undefined,
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: baseUrl,
      images: seo.ogImage ? [seo.ogImage] : undefined,
    },
  }
}
