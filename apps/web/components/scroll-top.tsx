"use client"

import {
  useState,
  useEffect,
} from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

type ScrollToTopButtonProps = React.ComponentProps<typeof Button>

export const ScrollToTopButton = ({
  children,
  className,
  ...rest
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  useEffect(() => {
    toggleVisibility()

    window.addEventListener("scroll", toggleVisibility)

    return () => {
      window.removeEventListener("scroll", toggleVisibility)
    }
  }, [])

  return (
    <Button
      onClick={scrollToTop}
      className={cn("hidden", className, {
        "flex": isVisible,
      })}
      {...rest}
    >
      {children}
    </Button>
  )
}
