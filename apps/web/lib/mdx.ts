import {
  readFileSync,
  promises,
} from "fs"
import path from "path"
import matter from "gray-matter"
import { globSync } from "glob"
import { bundleMDX } from "mdx-bundler"

import type { Frontmatter } from "@/types/frontmatter"

export const DATA_PATH = path.join(process.cwd(), "content")

export const getAllFrontmatter = (fromPath: string) => {
  const searchPath = path.join(DATA_PATH, fromPath)

  const mdxFilePaths = globSync(`${searchPath}/**/*.mdx`)

  const frontmatters = mdxFilePaths.map((filePath) => getFrontmatterWithSlug(filePath))

  return sortFrontmattersByDate(frontmatters)
}

export const getBundleMDX = async (category: string, slug: string) => {
  const source = await getMarkdownContent(category, slug)

  if (!source) {
    return undefined
  }

  const { code } = await bundleMDX({
    source: source.content,
    cwd: process.cwd()
  })

  return {
    frontmatter: source.frontmatter,
    code
  }
}

const getMarkdownContent = async (category: string, slug: string) => {
  const filePath = path.join(DATA_PATH, category, `${slug}.mdx`)

  const fileContents = await promises.readFile(filePath, "utf8").catch(() => undefined)

  if (!fileContents) {
    return undefined
  }

  const { data, content } = matter(fileContents)

  return {
    frontmatter: data,
    content,
  }
}

const getFrontmatterWithSlug = (filePath: string): Frontmatter => {
  const fileContent = readFileSync(path.join(filePath), "utf8")

  const { data } = matter(fileContent)

  const slug = filePath
    .replace(`${DATA_PATH}/`, "")
    .replace(".mdx", "")

  return {
    ...data,
    slug,
  } as Frontmatter
}

const sortFrontmattersByDate = (frontmatters: Frontmatter[]): Frontmatter[] => {
  return frontmatters.sort((a, b) => {
    const dateA = new Date(a.publishedAt || 0)
    const dateB = new Date(b.publishedAt || 0)
    return Number(dateB) - Number(dateA)
  })
}
