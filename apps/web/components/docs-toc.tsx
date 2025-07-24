"use client"

import { useToc } from "@/hooks/use-toc"
import {
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
    <TableOfContentsList className="w-full text-sm text-muted-foreground">
      <TableOfContentsTitle>
        On This Page
      </TableOfContentsTitle>
      {toc.map((item) => (
        <TableOfContentsItem key={item.slug} indent>
          <TableOfContentsList>
            <TableOfContentsLink href={`#${item.slug}`} isActive={activeId === item.slug}>
              {item.text}
            </TableOfContentsLink>
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
  )
}
