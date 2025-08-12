import Link from "next/link"

import { ScrollArea } from "@workspace/ui/components/scroll-area"

import {
  NavigationDrawer,
  NavigationDrawerTrigger,
  NavigationDrawerContent,
  NavigationDrawerHeader,
  NavigationDrawerTitle,
  NavigationDrawerDescription,
  NavigationDrawerGroup,
  NavigationDrawerGroupLabel,
  NavigationDrawerGroupContent,
  NavigationDrawerMenu,
  NavigationDrawerMenuItem,
  NavigationDrawerMenuButton,
  NavigationDrawerFooter,
} from "@/ui/navigation-drawer"

import { navigationItems } from "@/lib/navigation"

export const MobileMenu = () => {
  return (
    <NavigationDrawer>
      <NavigationDrawerTrigger />
      <NavigationDrawerContent>
        <NavigationDrawerHeader className="border-b">
          <NavigationDrawerTitle>eXpandable UI</NavigationDrawerTitle>
          <NavigationDrawerDescription />
        </NavigationDrawerHeader>
        <ScrollArea className="flex-1 min-h-0">
          {navigationItems.map((item) => (
            <NavigationDrawerGroup key={item.title}>
              <NavigationDrawerGroupLabel>
                {item.title}
              </NavigationDrawerGroupLabel>
              {item.children && (
                <NavigationDrawerGroupContent>
                  <NavigationDrawerMenu>
                    {item.children.map((child) => (
                      <NavigationDrawerMenuItem key={child.title}>
                        <NavigationDrawerMenuButton asChild>
                          <Link href={child.url}>
                            <span>
                              {child.title}
                            </span>
                          </Link>
                        </NavigationDrawerMenuButton>
                      </NavigationDrawerMenuItem>
                    ))}
                  </NavigationDrawerMenu>
                </NavigationDrawerGroupContent>
              )}
            </NavigationDrawerGroup>
          ))}
        </ScrollArea>
        <NavigationDrawerFooter className="border-t">
          {/* <ModeToggle /> */}
        </NavigationDrawerFooter>
      </NavigationDrawerContent>
    </NavigationDrawer>
  )
}
