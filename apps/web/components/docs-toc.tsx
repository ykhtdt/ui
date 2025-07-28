"use client"

import { ScrollArea } from "@workspace/ui/components/scroll-area"

import { useToc } from "@/hooks/use-toc"
import {
  TableOfContents,
  TableOfContentsList,
  TableOfContentsTitle,
  TableOfContentsItem,
  TableOfContentsLink,
} from "@/ui/toc"

export const DocsToc = () => {
  const { toc, activeId } = useToc({
    contentId: "content",
    levels: {
      topLevel: 2,
      subLevel: 3,
    },
  })

  return (
    <ScrollArea className="w-full h-96 [&>[data-slot=scroll-area-scrollbar]]:hidden">
      <TableOfContents aria-labelledby="on-this-page-heading">
        <TableOfContentsTitle id="on-this-page-heading" className="sticky top-0 bg-background h-6 text-sm">
          On This Page
        </TableOfContentsTitle>
        <TableOfContentsList className="w-full text-sm text-muted-foreground">
          {toc.map((item) => (
            <TableOfContentsItem key={item.slug} indent>
              <TableOfContentsLink href={`#${item.slug}`} isActive={activeId === item.slug}>
                {item.text}
              </TableOfContentsLink>
              <TableOfContentsList>
                {item.children.map((child) => (
                  <TableOfContentsItem key={child.slug} indent>
                    <TableOfContentsLink href={`#${child.slug}`} isActive={activeId === child.slug}>
                      {child.text}
                    </TableOfContentsLink>
                  </TableOfContentsItem>
                ))}
              </TableOfContentsList>
            </TableOfContentsItem>
          ))}
        </TableOfContentsList>
      </TableOfContents>
    </ScrollArea>
  )
}
