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

const navigationItems = [
  {
    title: "Dashboard",
    url: "#",
    children: [
      { title: "Overview", url: "#" },
      { title: "Analytics", url: "#" },
      { title: "Reports", url: "#" },
    ],
  },
  {
    title: "Components",
    url: "#",
    children: [
      { title: "Navigation Drawer", url: "#" },
      { title: "Table of Contents", url: "#" },
      { title: "Buttons", url: "#" },
      { title: "Forms", url: "#" },
    ],
  },
  {
    title: "Documentation",
    url: "#",
    children: [
      { title: "Getting Started", url: "#" },
      { title: "API Reference", url: "#" },
      { title: "Examples", url: "#" },
      { title: "FAQ", url: "#" },
    ],
  },
  {
    title: "Settings",
    url: "#",
    children: [
      { title: "General", url: "#" },
      { title: "Account", url: "#" },
      { title: "Security", url: "#" },
      { title: "Notifications", url: "#" },
    ],
  },
]

export const ExampleNavigationDrawer01 = () => {
  return (
    <NavigationDrawer>
      <NavigationDrawerTrigger />
      <NavigationDrawerContent>
        <NavigationDrawerHeader>
          <NavigationDrawerTitle>NavigationDrawerTitle</NavigationDrawerTitle>
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
                          <a href={child.url}>
                            <span>
                              {child.title}
                            </span>
                          </a>
                        </NavigationDrawerMenuButton>
                      </NavigationDrawerMenuItem>
                    ))}
                  </NavigationDrawerMenu>
                </NavigationDrawerGroupContent>
              )}
            </NavigationDrawerGroup>
          ))}
        </ScrollArea>
        <NavigationDrawerFooter>
          NavigationDrawerFooter
        </NavigationDrawerFooter>
      </NavigationDrawerContent>
    </NavigationDrawer>
  )
}
