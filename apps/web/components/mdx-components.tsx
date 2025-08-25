"use client"

import * as React from "react"

import {
  getMDXComponent,
  type MDXContentProps,
} from "mdx-bundler/client"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

import { liveCodeScope } from "@/lib/live-scope"

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
      className="scroll-m-14 mt-12 text-2xl font-semibold tracking-tight"
      {...props}
    />
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="scroll-m-14 mt-8 text-xl font-medium tracking-tight"
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
      return (
        <Tabs defaultValue="preview" className="flex flex-1">
          <TabsList className="rounded-md bg-transparent p-0">
            <TabsTrigger
              value="preview"
              className="border-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-transparent data-[state=active]:text-foreground text-muted-foreground dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:text-foreground dark:text-muted-foreground"
            >
              Preview
            </TabsTrigger>
            <TabsTrigger
              value="code"
              className="border-0 data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-transparent data-[state=active]:text-foreground text-muted-foreground dark:data-[state=active]:bg-transparent dark:data-[state=active]:shadow-none dark:data-[state=active]:border-transparent dark:data-[state=active]:text-foreground dark:text-muted-foreground"
            >
              Code
            </TabsTrigger>
          </TabsList>
          <TabsContent value="preview" className="flex flex-1">
            <div className="flex flex-col w-full items-center justify-center rounded-md border">
              <LiveCode
                scope={liveCodeScope}
                code={childrenText(props.children) ?? ""}
              />
            </div>
          </TabsContent>
          <TabsContent value="code" className="flex flex-1 overflow-y-auto rounded-md bg-muted">
            <div className="flex flex-1 min-w-0 overflow-hidden">
              <pre className="w-0 flex-1 p-4 overflow-x-auto font-mono text-sm [&>code]:text-sm [&>code]:font-mono">
                <code {...props} />
              </pre>
            </div>
          </TabsContent>
        </Tabs>
      )
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
      return (
        <div className="flex mt-6 h-96">
          {children}
        </div>
      )
    }

    return (
      <div className="flex mt-6 h-96">
        <div className="flex flex-1 rounded-md min-w-0 overflow-hidden">
          <pre
            className="w-0 flex-1 bg-muted p-4 overflow-x-auto font-mono text-sm [&>code]:text-sm [&>code]:font-mono"
            {...props}
          />
        </div>
      </div>
    )
  },
}

const childrenText = (children?: unknown): string | null => {
  if (isReactElementWithChildren(children)) {
    return childrenText(children.props?.children)
  }

  if (Array.isArray(children)) {
    return children.map(childrenText).flat().filter(Boolean).join("")
  }

  if (typeof children === "string") {
    return children
  }

  return null
}

const isReactElementWithChildren = (
  element?: unknown,
): element is React.ReactElement<{ children: React.ReactNode }> => {
  return React.isValidElement(element) && !!(element.props as any).children
}
