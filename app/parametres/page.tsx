import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { SettingsTabs } from "@/components/parametres/settings-tabs"
import { Settings } from "lucide-react"

export const metadata = {
  title: "Paramètres | RenewFlow",
  description: "Configurez votre espace de travail, vos relances et vos préférences.",
}

export default function ParametresPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground shadow-sm">
                <Settings className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  Paramètres
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Configurez votre espace de travail, vos relances et vos préférences
                </p>
              </div>
            </div>
          </div>

          {/* Settings Content */}
          <SettingsTabs />
        </main>
      </div>
    </div>
  )
}
