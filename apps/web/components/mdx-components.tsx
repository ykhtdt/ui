"use client"

import React from "react"

import {
  getMDXComponent,
  type MDXContentProps,
} from "mdx-bundler/client"

import { LiveCode } from "./live-code"

interface MDXComponentsProps {
  code: string
}

export const MDXComponents = ({
  code,
}: MDXComponentsProps) => {
  const Components = React.useMemo(() => getMDXComponent(code), [code])

  return (
    <Components components={components} />
  )
}

const components: MDXContentProps["components"] = {
  h1: (props: React.ComponentProps<"h1">) => (
    <h1
      className="scroll-m-20 text-3xl font-bold"
      {...props}
    />
  ),
  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      className="scroll-m-10 mt-12 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="scroll-m-10 mt-8 text-xl font-medium tracking-tight"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p
      className="[h1+&]:text-muted-foreground [h1+&]:text-base [h1+&]:text-balance leading-relaxed text-sm [&:not(:first-child)]:mt-2"
      {...props}
    />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="list-disc my-4 ml-6 [&>li]:mt-3"
      {...props}
    />
  ),
  li: (props: React.ComponentProps<"li">) => (
    <li
      className="mt-3 text-sm [&>ul]:ml-6 [&>ul>li]:mt-3"
      {...props}
    />
  ),
  code: (props: React.ComponentProps<"code"> & { "data-live"?: string }) => {
    if (props["data-live"] === "true") {
      return <LiveCode {...props} />
    }

    return (
      <code
        className="rounded-md bg-muted font-mono text-xs [p_&]:text-xs py-0.75 px-1.25"
        {...props}
      />
    )
  },
  pre: (props: React.ComponentProps<"pre">) => {
    const children = props.children as React.ReactElement<{ "data-live"?: string }> | undefined

    const isLiveCode = React.isValidElement(children) && children.props?.["data-live"] === "true"

    if (isLiveCode) {
      return children
    }

    return (
      <pre
        className="rounded-md bg-muted p-4 mt-6 overflow-x-auto font-mono text-sm [&>code]:text-sm [&>code]:font-mono"
        {...props}
      />
    )
  },
}
