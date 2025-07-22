"use client"

import { useMemo } from "react"

import { getMDXComponent } from "mdx-bundler/client"

interface MDXComponentsProps {
  code: string
}

export const MDXComponents = ({
  code,
}: MDXComponentsProps) => {
  const Components = useMemo(() => getMDXComponent(code), [code])
  return (
    <Components components={components} />
  )
}

const components = {
  // { ... }
}
