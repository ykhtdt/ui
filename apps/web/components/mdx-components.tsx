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
  h1: ({ children, ...props }: React.ComponentProps<"h1">) => (
    <h1
      className="scroll-m-20 text-3xl font-bold"
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2
      className="scroll-m-10 mt-12 text-2xl font-semibold tracking-tight"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentProps<"h3">) => (
    <h3
      className="scroll-m-10 mt-8 text-xl font-medium tracking-tight"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.ComponentProps<"p">) => (
    <p
      className="[h1+&]:text-muted-foreground [h1+&]:text-base [h1+&]:text-balance leading-relaxed text-sm [&:not(:first-child)]:mt-2"
      {...props}
    >
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.ComponentProps<"ul">) => (
    <ul
      className="list-disc my-4 ml-6 [&>li]:mt-3"
      {...props}
    >
      {children}
    </ul>
  ),
  li: ({ children, ...props }: React.ComponentProps<"li">) => (
    <li
      className="mt-3 text-sm [&>ul]:ml-6 [&>ul>li]:mt-3"
      {...props}
    >
      {children}
    </li>
  ),
  code: ({ children, ...props }: React.ComponentProps<"code"> & { "data-live"?: string }) => (
    <code
      className="rounded-md bg-muted font-mono text-xs [p_&]:text-xs py-0.75 px-1.25"
      {...props}
    >
      {children}
    </code>
  ),
  pre: ({ children, ...props }: React.ComponentProps<"pre">) => (
    <pre
      className="rounded-md bg-muted p-4 mt-6 overflow-x-auto font-mono text-sm [&>code]:text-sm [&>code]:font-mono"
      {...props}
    >
      {children}
    </pre>
  ),
}
