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
      <TableOfContentsList>
        <TableOfContentsItem indent>
          <TableOfContentsLink href="#introduction">
            Introduction
          </TableOfContentsLink>
        </TableOfContentsItem>
        <TableOfContentsItem indent>
          <TableOfContentsLink href="#features">
            Features
          </TableOfContentsLink>
          <TableOfContentsList>
            <TableOfContentsItem indent>
              <TableOfContentsLink href="#customization">
                Customization
              </TableOfContentsLink>
            </TableOfContentsItem>
          </TableOfContentsList>
        </TableOfContentsItem>
        <TableOfContentsItem indent>
          <TableOfContentsLink href="#installation">
            Installation
          </TableOfContentsLink>
        </TableOfContentsItem>
      </TableOfContentsList>
    </TableOfContents>
  )
}
