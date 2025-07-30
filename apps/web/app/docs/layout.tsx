import { SidebarProvider } from "@workspace/ui/components/sidebar"

import { ModeToggle } from "@/components/mode-toggle"
import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsToc } from "@/components/docs-toc"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div
      className="relative z-10 flex min-h-svh flex-col"
      style={
        {
          "--header-height": "calc(var(--spacing)*14)",
          "--footer-height": "calc(var(--spacing)*20)",
        } as React.CSSProperties
      }
    >
      <header className="sticky top-0 z-50 w-full">
        <div className="w-full max-w-9xl mx-auto px-2">
          <div className="h-(--header-height) flex items-center gap-2 px-2">
            <ModeToggle />
          </div>
        </div>
      </header>
      <main className="flex flex-col flex-1">
        <div className="flex flex-col flex-1 w-full max-w-9xl mx-auto px-2">
          <SidebarProvider className="min-h-0">
            <DocsSidebar />
            <div className="bg-background w-full h-full flex-1">
              <div className="flex items-stretch text-sm sm:text-base xl:w-full">
                <div className="flex flex-col flex-1">
                  <div id="content" className="mx-auto flex flex-col flex-1 w-full max-w-2xl min-w-0">
                    {children}
                  </div>
                </div>
                <div className="sticky top-[calc(var(--header-height))] z-30 ml-auto hidden h-[calc(100svh-var(--header-height)-var(--footer-height))] w-72 flex-col gap-4 overflow-hidden overscroll-none pb-8 xl:flex">
                  <DocsToc />
                </div>
              </div>
            </div>
          </SidebarProvider>
        </div>
      </main>
      <footer>
        <div className="w-full max-w-9xl mx-auto px-2">
          <div className="h-(--footer-height) flex items-center gap-2 px-2">
            Footer Area
          </div>
        </div>
      </footer>
    </div>
  )
}
