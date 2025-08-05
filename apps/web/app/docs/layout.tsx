import Link from "next/link"

import { ArrowUpIcon } from "lucide-react"

import { SidebarProvider } from "@workspace/ui/components/sidebar"

import { ModeToggle } from "@/components/mode-toggle"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsToc } from "@/components/docs-toc"
import { ScrollToTopButton } from "@/components/scroll-top"

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

const items = [
  {
    title: "Components",
    url: "/docs/components",
    children: [
      {
        title: "Table of Contents",
        url: "/docs/components/toc",
      },
      {
        title: "Navigation Drawer",
        url: "/docs/components/navigation-drawer",
      },
    ],
  },
  {
    title: "Layouts",
    url: "/docs/layouts",
    children: [],
  },
  {
    title: "Layouts1",
    url: "/docs/layouts1",
    children: [],
  },
  {
    title: "Layouts2",
    url: "/docs/layouts2",
    children: [],
  },
  {
    title: "Layouts3",
    url: "/docs/layouts3",
    children: [],
  },
  {
    title: "Layouts4",
    url: "/docs/layouts4",
    children: [],
  },
  {
    title: "Layouts5",
    url: "/docs/layouts5",
    children: [],
  },
  {
    title: "Layouts6",
    url: "/docs/layouts6",
    children: [],
  },
  {
    title: "Layouts7",
    url: "/docs/layouts7",
    children: [],
  },
  {
    title: "Layouts8",
    url: "/docs/layouts8",
    children: [],
  },
  {
    title: "Layouts9",
    url: "/docs/layouts9",
    children: [],
  },
  {
    title: "Layouts10",
    url: "/docs/layouts10",
    children: [],
  },
  {
    title: "Layouts11",
    url: "/docs/layouts11",
    children: [],
  },
  {
    title: "Layouts12",
    url: "/docs/layouts12",
    children: [],
  },
]

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="fixed inset-0 p-1">
      <div
        id="container"
        className="relative flex h-svh flex-col overflow-y-auto md:rounded-md"
        style={
          {
            "--header-height": "calc(var(--spacing)*14)",
            "--footer-height": "calc(var(--spacing)*20)",
            "--top-spacing": "calc(var(--spacing)*4)",
          } as React.CSSProperties
        }
      >
        <header className="sticky top-0 z-50 w-full bg-background">
          <div className="w-full max-w-9xl mx-auto px-4 sm:px-2">
            <div className="h-(--header-height) flex items-center gap-2">
              <NavigationDrawer>
                <NavigationDrawerTrigger />
                <NavigationDrawerContent>
                  <NavigationDrawerHeader>
                    <NavigationDrawerTitle>eXpandable UI</NavigationDrawerTitle>
                    <NavigationDrawerDescription />
                  </NavigationDrawerHeader>
                  {items.map((item) => (
                    <NavigationDrawerGroup key={item.title}>
                      <NavigationDrawerGroupLabel>
                        {item.title}
                      </NavigationDrawerGroupLabel>
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
                    </NavigationDrawerGroup>
                  ))}
                  <NavigationDrawerFooter className="border-t">
                    {/* <ModeToggle /> */}
                  </NavigationDrawerFooter>
                </NavigationDrawerContent>
              </NavigationDrawer>
              <ModeToggle />
            </div>
          </div>
        </header>
        <main className="flex flex-col flex-1 bg-background">
          <div className="h-[var(--top-spacing)] shrink-0" />
          <div className="flex flex-col flex-1 w-full max-w-9xl mx-auto px-4 sm:px-2 md:px-0">
            <SidebarProvider className="min-h-0 bg-background">
              <DocsSidebar />
              <div className="bg-background w-full h-full flex-1 md:px-2 lg:px-0">
                <div className="flex items-stretch text-sm sm:text-base xl:w-full">
                  <div className="flex flex-col flex-1">
                    <div id="content" className="mx-auto flex flex-col flex-1 w-full sm:max-w-2xl min-w-0">
                      {children}
                    </div>
                  </div>
                  <div className="sticky top-[calc(var(--header-height)+var(--top-spacing))] z-30 ml-auto hidden h-[calc(100svh-var(--header-height)-var(--footer-height)-var(--top-spacing))] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
                    <DocsToc />
                    <div className="self-start">
                      <ScrollToTopButton
                        container="#container"
                        variant="ghost"
                        size="sm"
                        className="items-center gap-2 text-muted-foreground hover:text-foreground hover:bg-transparent dark:hover:bg-transparent"
                      >
                        <span>Scroll to top</span>
                        <ArrowUpIcon />
                      </ScrollToTopButton>
                    </div>
                  </div>
                </div>
              </div>
            </SidebarProvider>
          </div>
        </main>
        <footer className="bg-background">
          <div className="w-full max-w-9xl mx-auto px-2">
            <div className="h-(--footer-height) flex items-center justify-center gap-2 px-2">
              {/* Footer */}
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}
