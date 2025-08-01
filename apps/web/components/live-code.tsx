import React from "react"

import {
  LiveProvider,
  LivePreview,
  LiveError,
} from "react-live"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@workspace/ui/components/tabs"

import {
  TableOfContents,
  TableOfContentsList,
  TableOfContentsTitle,
  TableOfContentsItem,
  TableOfContentsLink,
} from "@/ui/toc"

interface LiveCodeProps extends React.ComponentProps<"code"> {
  "data-live"?: string
}

const scope = {
  React,
  TableOfContents,
  TableOfContentsList,
  TableOfContentsTitle,
  TableOfContentsItem,
  TableOfContentsLink,
}

export const LiveCode = ({
  children,
  ...rest
}: LiveCodeProps) => {
  const hasChildrenProp = React.useCallback((props: unknown): props is { children: React.ReactNode } => {
    return props !== null && typeof props === "object" && "children" in props
  }, [])

  const extractCode = React.useCallback((children: React.ReactNode): string => {
    if (typeof children === "string") {
      return children
    }

    if (Array.isArray(children)) {
      return children.map(child => {
        if (typeof child === "string") {
          return child
        }

        if (React.isValidElement(child) && hasChildrenProp(child.props)) {
          return extractCode(child.props.children)
        }

        return ""
      }).join("")
    }

    if (React.isValidElement(children) && hasChildrenProp(children.props)) {
      return extractCode(children.props.children)
    }

    return ""
  }, [hasChildrenProp])

  const code = extractCode(children)

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
          <LiveProvider code={code} scope={scope}>
            <LivePreview className="min-h-0" />
            <LiveError className="mt-2 text-red-500 text-sm font-mono bg-red-50 dark:bg-red-950 p-2 rounded border" />
          </LiveProvider>
        </div>
      </TabsContent>
      <TabsContent value="code" className="flex flex-1 overflow-y-auto rounded-md bg-muted">
        <div className="flex flex-1 min-w-0 overflow-hidden">
          <pre className="w-0 flex-1 p-4 overflow-x-auto font-mono text-sm [&>code]:text-sm [&>code]:font-mono">
            <code {...rest}>
              {children}
            </code>
          </pre>
        </div>
      </TabsContent>
    </Tabs>
  )
}
