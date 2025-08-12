import React from "react"
import Link from "next/link"

import * as Toc from "@/ui/toc"
import * as NavigationDrawer from "@/ui/navigation-drawer"

type LiveScope = Record<string, unknown>

export const liveCodeScope: LiveScope = {
  React,
  Link,
  ...Toc,
  ...NavigationDrawer,
}
