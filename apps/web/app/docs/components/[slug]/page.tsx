import type { Metadata } from "next"
import { notFound } from "next/navigation"

import {
  getAllFrontmatter,
  getBundleMDX,
} from "@/lib/mdx"

import { MDXComponents } from "@/components/mdx-components"

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

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  const frontmatters = getAllFrontmatter("components")
  const frontmatter = frontmatters.find(
    (frontmatter) => (frontmatter.slug.split("/").pop() || "") === slug
  )

  return {
    title: frontmatter?.title,
    description: frontmatter?.description,
  }
}

export const generateStaticParams = async () => {
  const frontmatters = getAllFrontmatter("components")

  return frontmatters.map((frontmatter) => ({
    slug: frontmatter.slug.split("/").pop() || "",
  }))
}
