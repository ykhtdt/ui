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

import { navigationItems } from "@/lib/navigation"

export const DocsSidebar = () => {
  const pathname = usePathname()

  return (
    <Sidebar className="sticky top-[calc(var(--header-height)+var(--top-spacing))] h-[calc(100svh-var(--header-height)-var(--footer-height)-var(--top-spacing))] border-none">
      <SidebarContent className="no-scrollbar bg-background">
        {navigationItems.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupLabel>
              {item.title}
            </SidebarGroupLabel>
            {item.children && (
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
            )}
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  )
}
