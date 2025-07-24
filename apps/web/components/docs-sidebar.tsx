import {
  Calendar,
  Home,
  Inbox,
  Search,
  Settings,
} from "lucide-react"

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
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings1",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings2",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings3",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings4",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings5",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings6",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings7",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings8",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings9",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings99",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings98",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings97",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings96",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings95",
    url: "#",
    icon: Settings,
  },
  {
    title: "Settings94",
    url: "#",
    icon: Settings,
  },
]

export function DocsSidebar() {
  return (
    <Sidebar className="sticky top-[calc(var(--header-height))] h-[calc(100svh-var(--header-height)-var(--footer-height))]">
      <SidebarContent className="no-scrollbar">
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
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
