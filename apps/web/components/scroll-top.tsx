"use client"

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
} from "react"

import { cn } from "@workspace/ui/lib/utils"
import { Button } from "@workspace/ui/components/button"

const SHOW_AFTER_SCROLL_POSITION = 300

interface ScrollToTopButtonProps extends React.ComponentProps<typeof Button> {
  container?: string
}

export const ScrollToTopButton = ({
  children,
  className,
  container,
  ...rest
}: ScrollToTopButtonProps) => {
  const [isVisible, setIsVisible] = useState(false)
  const scrollContainerRef = useRef<HTMLElement | Window | null>(null)

  const toggleVisibility = useCallback(() => {
    if (!scrollContainerRef.current) {
      return
    }

    let scrollTop = 0

    if (scrollContainerRef.current === window) {
      scrollTop = window.scrollY
    } else {
      scrollTop = (scrollContainerRef.current as HTMLElement).scrollTop
    }

    setIsVisible(scrollTop > SHOW_AFTER_SCROLL_POSITION)
  }, [])

  const scrollToTop = () => {
    if (!scrollContainerRef.current) {
      return
    }

    if (scrollContainerRef.current === window) {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      })
    } else {
      (scrollContainerRef.current as HTMLElement).scrollTo({
        top: 0,
        behavior: "smooth"
      })
    }
  }

  useEffect(() => {
    if (container) {
      const element = document.querySelector(container) as HTMLElement
      scrollContainerRef.current = element || window
    } else {
      scrollContainerRef.current = window
    }

    toggleVisibility()

    const currentContainer = scrollContainerRef.current
    currentContainer.addEventListener("scroll", toggleVisibility)

    return () => {
      currentContainer.removeEventListener("scroll", toggleVisibility)
    }
  }, [container, toggleVisibility])

  return (
    <Button
      onClick={scrollToTop}
      className={cn("cursor-pointer", className, {
        "flex": isVisible,
        "hidden": !isVisible,
      })}
      {...rest}
    >
      {children}
    </Button>
  )
}
