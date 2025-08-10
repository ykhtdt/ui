"use client"

import * as React from "react"

import * as NavigationDrawerPrimitive from "@radix-ui/react-dialog"
import {
  MenuIcon,
  XIcon,
} from "lucide-react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

const NavigationDrawer = ({ ...props }: React.ComponentProps<typeof NavigationDrawerPrimitive.Root>) => {
  return (
    <NavigationDrawerPrimitive.Root data-slot="navigation-drawer" {...props} />
  )
}

const NavigationDrawerTrigger = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationDrawerPrimitive.Trigger>) => {
  return (
    <NavigationDrawerPrimitive.Trigger
      asChild
      data-slot="navigation-drawer-trigger"
      className={cn("md:hidden hover:bg-transparent dark:hover:bg-transparent", className)}
      {...props}
    >
      <Button variant="ghost" size="icon" className="size-5">
        <MenuIcon className="size-5" />
        <span className="sr-only">Toggle Navigation Drawer</span>
      </Button>
    </NavigationDrawerPrimitive.Trigger>
  )
}

const NavigationDrawerPortal = ({ ...props }: React.ComponentProps<typeof NavigationDrawerPrimitive.Portal>) => {
  return (
    <NavigationDrawerPrimitive.Portal data-slot="navigation-drawer-portal" {...props} />
  )
}

const NavigationDrawerOverlay = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationDrawerPrimitive.Overlay>) => {
  return (
    <NavigationDrawerPrimitive.Overlay
      data-slot="navigation-drawer-overlay"
      className={cn(
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50",
        className
      )}
      {...props}
    />
  )
}

const NavigationDrawerContent = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NavigationDrawerPrimitive.Content>) => {
  return (
    <NavigationDrawerPortal>
      <NavigationDrawerOverlay />
      <NavigationDrawerPrimitive.Content
        data-slot="navigation-drawer-content"
        className={cn(
          "bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500",
          "data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
          "bg-sidebar text-sidebar-foreground p-0 [&>button]:size-6 [&>button]:flex [&>button]:items-center [&>button]:justify-center",
          className
        )}
        {...props}
      >
        <div className="flex flex-col w-full h-full">
          {children}
        </div>
        <NavigationDrawerPrimitive.Close className="ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none">
          <XIcon className="size-4" />
          <span className="sr-only">Close</span>
        </NavigationDrawerPrimitive.Close>
      </NavigationDrawerPrimitive.Content>
    </NavigationDrawerPortal>
  )
}

const NavigationDrawerHeader = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="navigation-drawer-header"
      className={cn("flex flex-col gap-1.5 p-4", className)}
      {...props}
    />
  )
}

const NavigationDrawerTitle = ({
  className,
  ...props
}: React.ComponentProps<typeof NavigationDrawerPrimitive.Title>) => {
  return (
    <NavigationDrawerPrimitive.Title
      data-slot="navigation-drawer-title"
      className={cn("text-foreground font-semibold", className)}
      {...props}
    />
  )
}

const NavigationDrawerDescription = ({
  children,
  className,
  ...props
}: React.ComponentProps<typeof NavigationDrawerPrimitive.Description>) => {
  const content = children || "Displays the mobile navigation drawer."
  return (
    <NavigationDrawerPrimitive.Description
      data-slot="navigation-drawer-description"
      className={cn("text-muted-foreground text-sm sr-only", className)}
      {...props}>
      {content}
    </NavigationDrawerPrimitive.Description>
  )
}

const NavigationDrawerGroup = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="navigation-drawer-group"
      className={cn("relative flex w-full min-w-0 flex-col p-2", className)}
      {...props}
    />
  )
}

const NavigationDrawerGroupLabel = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="navigation-drawer-group-label"
      className={cn(
        "text-foreground/70 ring-ring flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium outline-hidden transition-[margin,opacity] duration-200 ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        className
      )}
      {...props}
    />
  )
}

const NavigationDrawerGroupContent = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="navigation-drawer-group-content"
      className={cn("w-full text-sm", className)}
      {...props}
    />
  )
}

const NavigationDrawerMenu = ({
  className,
  ...props
}: React.ComponentProps<"ul">) => {
  return (
    <ul
      data-slot="navigation-drawer-menu"
      className={cn("flex w-full min-w-0 flex-col gap-1", className)}
      {...props}
    />
  )
}

const NavigationDrawerMenuItem = ({
  className,
  ...props
}: React.ComponentProps<"li">) => {
  return (
    <li
      data-slot="navigation-drawer-menu-item"
      className={cn("group/menu-item relative", className)}
      {...props}
    />
  )
}

const NavigationDrawerMenuButton = ({
  className,
  ...props
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      variant="ghost"
      data-slot="navigation-drawer-menu-button"
      className={cn("w-full justify-start text-foreground", className)}
      {...props}
    />
  )
}

const NavigationDrawerFooter = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      data-slot="navigation-drawer-footer"
      className={cn("mt-auto flex flex-col gap-2 p-4", className)}
      {...props}
    />
  )
}

export {
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
}
