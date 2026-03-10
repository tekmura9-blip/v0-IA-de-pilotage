import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { ImportSection } from "@/components/import-export/import-section"
import { ExportSection } from "@/components/import-export/export-section"
import { RecentImports } from "@/components/import-export/recent-imports"
import { ScheduledExports } from "@/components/import-export/scheduled-exports"
import { ImportExportAI } from "@/components/import-export/import-export-ai"
import { FileUp, FileDown, ArrowLeftRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "Import / Export | RenewFlow",
  description: "Importez vos données clients et exportez vos échéances en quelques clics.",
}

export default function ImportExportPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />

      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground shadow-sm">
                  <ArrowLeftRight className="h-6 w-6 text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Import / Export
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Importez vos données clients et exportez vos échéances en quelques clics
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="h-7 gap-1.5 bg-emerald-50 text-emerald-700 border-emerald-200">
                  <FileUp className="h-3.5 w-3.5" />
                  3 imports ce mois
                </Badge>
                <Badge variant="outline" className="h-7 gap-1.5 bg-sky-50 text-sky-700 border-sky-200">
                  <FileDown className="h-3.5 w-3.5" />
                  12 exports ce mois
                </Badge>
              </div>
            </div>
          </div>

          {/* Main 2-Column Layout */}
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Import Section */}
            <div className="space-y-6">
              <ImportSection />
              <RecentImports />
            </div>

            {/* Export Section */}
            <div className="space-y-6">
              <ExportSection />
              <ScheduledExports />
            </div>
          </div>

          {/* AI Assistant */}
          <div className="mt-6">
            <ImportExportAI />
          </div>
        </main>
      </div>
    </div>
  )
}
