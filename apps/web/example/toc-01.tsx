import {
  TableOfContents,
  TableOfContentsList,
  TableOfContentsTitle,
  TableOfContentsItem,
  TableOfContentsLink,
} from "@/ui/toc"

export const ExampleTOC01 = () => {
  return (
    <TableOfContents>
      <TableOfContentsTitle>
        On This Page
      </TableOfContentsTitle>
      <TableOfContentsList className="w-full text-sm text-muted-foreground">
        <TableOfContentsItem>
          <TableOfContentsLink href="#introduction">
            Introduction
          </TableOfContentsLink>
        </TableOfContentsItem>
        <TableOfContentsItem indent>
          <TableOfContentsList>
            <TableOfContentsLink href="#features">
              Features
            </TableOfContentsLink>
            <TableOfContentsItem indent>
              <TableOfContentsLink href="#customization">
                Customization
              </TableOfContentsLink>
            </TableOfContentsItem>
          </TableOfContentsList>
        </TableOfContentsItem>
        <TableOfContentsItem>
          <TableOfContentsLink href="#installation">
            Installation
          </TableOfContentsLink>
        </TableOfContentsItem>
      </TableOfContentsList>
    </TableOfContents>
  )
}
