"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

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
    title: "Components",
    url: "/docs/components",
    children: [
      {
        title: "Table of Contents",
        url: "/docs/components/toc",
      },
    ],
  }
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="sticky top-[calc(var(--header-height))] h-[calc(100svh-var(--header-height)-var(--footer-height)-var(--spacing)*2)] border-none">
      <SidebarContent className="no-scrollbar bg-background">
        {items.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>
              {item.title}
            </SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.children.map((child) => (
                  <SidebarMenuItem key={child.title}>
                    <SidebarMenuButton asChild isActive={child.url === pathname}>
                      <Link href={child.url}>
                        <span>
                          {child.title}
                        </span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
