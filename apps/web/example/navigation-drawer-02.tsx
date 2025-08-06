import { ScrollArea } from "@workspace/ui/components/scroll-area"

import {
  NavigationDrawer,
  NavigationDrawerTrigger,
  NavigationDrawerContent,
  NavigationDrawerHeader,
  NavigationDrawerTitle,
  NavigationDrawerDescription,
  NavigationDrawerGroup,
  NavigationDrawerGroupContent,
  NavigationDrawerMenu,
  NavigationDrawerMenuItem,
  NavigationDrawerMenuButton,
  NavigationDrawerFooter,
} from "@/ui/navigation-drawer"

const navigationItems = [
  { title: "Dashboard", url: "#" },
  { title: "Components", url: "#" },
  { title: "Documentation", url: "#" },
  { title: "Settings", url: "#" },
  { title: "Analytics", url: "#" },
  { title: "Reports", url: "#" },
  { title: "Profile", url: "#" },
  { title: "Help", url: "#" },
]

export const ExampleNavigationDrawer02 = () => {
  return (
    <NavigationDrawer>
      <NavigationDrawerTrigger />
      <NavigationDrawerContent>
        <NavigationDrawerHeader>
          <NavigationDrawerTitle>NavigationDrawerTitle</NavigationDrawerTitle>
          <NavigationDrawerDescription />
        </NavigationDrawerHeader>
        <ScrollArea className="flex-1 min-h-0">
          <NavigationDrawerGroup>
            <NavigationDrawerGroupContent>
              <NavigationDrawerMenu>
                {navigationItems.map((item) => (
                  <NavigationDrawerMenuItem key={item.title}>
                    <NavigationDrawerMenuButton asChild>
                      <a href={item.url}>
                        <span>
                          {item.title}
                        </span>
                      </a>
                    </NavigationDrawerMenuButton>
                  </NavigationDrawerMenuItem>
                ))}
              </NavigationDrawerMenu>
            </NavigationDrawerGroupContent>
          </NavigationDrawerGroup>
        </ScrollArea>
        <NavigationDrawerFooter>
          NavigationDrawerFooter
        </NavigationDrawerFooter>
      </NavigationDrawerContent>
    </NavigationDrawer>
  )
}
