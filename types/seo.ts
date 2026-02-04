export interface SeoMeta {
  title: string
  description: string
  keywords?: string[]
  canonical?: string
  noIndex?: boolean
  ogImage?: string
  schema?: Record<string, any>
}
export interface SeoMeta {