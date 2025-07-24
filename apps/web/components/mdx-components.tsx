"use client"

import { useMemo } from "react"

import {
  getMDXComponent,
  type MDXContentProps,
} from "mdx-bundler/client"

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

const components: MDXContentProps["components"] = {
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2 className="scroll-m-10" {...props}>
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
    <h3 className="scroll-m-10" {...props}>
      {children}
    </h3>
  ),
}
