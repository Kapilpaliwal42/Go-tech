import { buildMetadata } from "@/lib/seo"
import services from "@/constants/services"
import type { Metadata } from "next"

export async function generateMetadata(
  { params }: { params: { slug: string } }
): Promise<Metadata> {
  const page = services[params.slug]

  if (!page?.seo) {
    return {}
  }

  return buildMetadata(page.seo, `/services/${params.slug}`)
}
