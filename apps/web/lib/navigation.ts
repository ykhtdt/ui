interface NavigationItem {
  title: string
  url: string
  children?: NavigationItem[]
}

export const navigationItems: NavigationItem[] = [
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
  },
]
