"use client"

import { useTheme } from "next-themes"

import {
  MoonIcon,
  SunIcon,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"

export const ModeToggle = () => {
  const { theme, systemTheme, setTheme } = useTheme()

  const handleClick = () => {
    if (systemTheme === "light" || theme === "light") {
      setTheme("dark")
    } else if (systemTheme === "dark" || theme === "dark") {
      setTheme("light")
    }
  }

  return (
    <Button variant="outline" size="icon" onClick={handleClick} className="cursor-pointer size-5 border-none bg-inherit p-0 text-foreground shadow-none hover:bg-inherit focus:outline-none focus-visible:ring-0">
      <SunIcon className="size-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <MoonIcon className="absolute size-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">
        Toggle theme
      </span>
    </Button>
  )
}
