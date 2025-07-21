import {
  TableOfContentsList,
  TableOfContentsTitle,
  TableOfContentsItem,
  TableOfContentsLink,
} from "@/ui/toc"

export const ExampleTOC01 = () => {
  return (
    <TableOfContentsList className="w-full text-sm text-muted-foreground">
      <TableOfContentsTitle>
        On This Page
      </TableOfContentsTitle>
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
  )
}
