import { AppSidebar } from "@/components/app-sidebar"
import { SidebarInset } from "@/components/ui/sidebar"

export function DashboardShell({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen overflow-hidden">
      <AppSidebar />
      <SidebarInset className="flex-1 overflow-y-auto">
        <main className="flex-1 p-6 lg:px-8">
          {children}
        </main>
      </SidebarInset>
    </div>
  )
}

