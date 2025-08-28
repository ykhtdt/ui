"use client"

import * as React from "react"
import { usePathname } from "next/navigation"

import {
  type Variants,
  motion,
  AnimatePresence,
} from "motion/react"

import { cn } from "@workspace/ui/lib/utils"

export interface NextJSAppRouterPageTransitionProps extends Omit<PageTransitionProps, "pageKey"> {
  /**
   * 애니메이션을 제외할 경로 - 이 경로들에서는 애니메이션이 실행되지 않음
   */
  excludePaths?: string[]
}

/**
 * Next.js App Router용 페이지 전환 애니메이션 컴포넌트
 * usePathname 훅을 사용하여 경로 변화를 자동으로 감지하고 페이지 전환 애니메이션을 실행
 */
export const NextJSAppRouterPageTransition = ({
  children,
  excludePaths = [],
  ...props
}: NextJSAppRouterPageTransitionProps) => {
  const pathname = usePathname()

  const isExcluded = excludePaths.some((path) => path.endsWith("*")
    ? pathname.startsWith(path.slice(0, -1))
    : pathname === path
  )

  if (isExcluded) {
    return (
      <>{children}</>
    )
  }

  return (
    <PageTransition pageKey={pathname} {...props}>
      {children}
    </PageTransition>
  )
}

/**
 * Next.js App Router용 Layout Wrapper
 * 
 * 이 컴포넌트를 루트 레이아웃에서 사용하여 전체 앱에 페이지 전환 애니메이션을 적용 가능
 */
export interface NextJSAppRouterPageTransitionLayoutProps {
  children: React.ReactNode
  /**
   * 애니메이션을 제외할 경로들
   */
  excludePaths?: string[]
  /**
   * 경로별 애니메이션 설정
   * key: 경로 패턴 (정확한 경로 또는 와일드카드 "*" 사용)
   * value: Variants
   * 
   * 예시:
   * {
   *   "/": homeVariants,
   *   "/docs/*": docsVariants,
   *   "/admin": adminVariants
   * }
   */
  pathAnimations?: Record<string, Variants>
}

export const NextJSAppRouterPageTransitionLayout = ({
  children,
  pathAnimations = {},
  excludePaths = [],
}: NextJSAppRouterPageTransitionLayoutProps) => {
  const pathname = usePathname()

  const getAnimationVariants = React.useMemo((): Variants | undefined => {
    if (pathAnimations[pathname]) {
      return pathAnimations[pathname]
    }

    for (const [path, variants] of Object.entries(pathAnimations)) {
      if (path.endsWith("*") && pathname.startsWith(path.slice(0, -1))) {
        return variants
      }
    }

    return undefined
  }, [pathname, pathAnimations])

  const transitionProps = React.useMemo(() => {
    return {
      ...(getAnimationVariants && { animationVariants: getAnimationVariants }),
      excludePaths,
    }
  }, [getAnimationVariants, excludePaths])

  return (
    <AnimatePresence mode="wait" initial={false}>
      <NextJSAppRouterPageTransition key={pathname} {...transitionProps}>
        {children}
      </NextJSAppRouterPageTransition>
    </AnimatePresence>
  )
}

export interface PageTransitionProps {
  children: React.ReactNode
  className?: string
  /**
   * 페이지를 구분하는 고유한 키 - 라우트 경로 문자열 등
   * 이 값이 변경될 때마다 애니메이션이 실행
   */
  pageKey: string
  /**
   * 사용자 정의 애니메이션 variants
   */
  animationVariants?: Variants
  /**
   * 초기 애니메이션 실행 여부
   */
  initial?: boolean
  /**
   * 애니메이션 완료 시 콜백
   */
  onAnimationComplete?: () => void
}

export const PageTransition = ({
  children,
  pageKey,
  animationVariants,
  initial = true,
  className,
  onAnimationComplete,
}: PageTransitionProps) => {

  return (
    <motion.div
      key={pageKey}
      variants={animationVariants}
      initial={initial ? "initial" : "enter"}
      animate="enter"
      exit="exit"
      onAnimationComplete={onAnimationComplete}
      className={cn(className)}
    >
      {children}
    </motion.div>
  )
}
