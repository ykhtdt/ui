import Link from "next/link"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@workspace/ui/components/sidebar"

const items = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "Inbox",
    url: "#",
  },
  {
    title: "Calendar",
    url: "#",
  },
  {
    title: "Search",
    url: "#",
  },
  {
    title: "Settings",
    url: "#",
  },
  {
    title: "Settings1",
    url: "#",
  },
  {
    title: "Settings2",
    url: "#",
  },
  {
    title: "Settings3",
    url: "#",
  },
  {
    title: "Settings4",
    url: "#",
  },
  {
    title: "Settings5",
    url: "#",
  },
  {
    title: "Settings6",
    url: "#",
  },
  {
    title: "Settings7",
    url: "#",
  },
  {
    title: "Settings8",
    url: "#",
  },
  {
    title: "Settings9",
    url: "#",
  },
  {
    title: "Settings99",
    url: "#",
  },
  {
    title: "Settings98",
    url: "#",
  },
  {
    title: "Settings97",
    url: "#",
  },
  {
    title: "Settings96",
    url: "#",
  },
  {
    title: "Settings95",
    url: "#",
  },
  {
    title: "Settings94",
    url: "#",
  },
]

export function DocsSidebar() {
  return (
    <Sidebar className="sticky top-[calc(var(--header-height))] h-[calc(100svh-var(--header-height)-var(--footer-height))] border-none">
      <SidebarContent className="no-scrollbar bg-background">
        <SidebarGroup>
          <SidebarGroupLabel>
            Application
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <Link href={item.url}>
                      <span>
                        {item.title}
                      </span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
