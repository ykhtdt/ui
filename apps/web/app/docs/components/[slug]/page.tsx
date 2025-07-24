import { notFound } from "next/navigation"

import {
  getAllFrontmatter,
  getBundleMDX,
} from "@/lib/mdx"

import { MDXComponents } from "@/components/mdx-components"

const PATH = "content\\components\\"
export default async function Page({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const bundledMDX = await getBundleMDX("components", slug)

  if (!bundledMDX) {
    return notFound()
  }

  return (
    <MDXComponents code={bundledMDX.code} />
  )
}

export const generateStaticParams = async () => {
  const frontmatters = getAllFrontmatter("components")

  return frontmatters.map((frontmatter) => ({
    slug: frontmatter.slug.replace(PATH, ""),
  }))
}
