import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { HelpSearch } from "@/components/aide/help-search"
import { HelpCategories } from "@/components/aide/help-categories"
import { PopularArticles } from "@/components/aide/popular-articles"
import { HelpFAQ } from "@/components/aide/help-faq"
import { SupportContact } from "@/components/aide/support-contact"
import { HelpAIAssistant } from "@/components/aide/help-ai-assistant"
import { HelpCircle } from "lucide-react"

export const metadata = {
  title: "Centre d'aide | RenewFlow",
  description: "Trouvez rapidement des réponses, des guides et de l'assistance.",
}

export default function AidePage() {
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
                <HelpCircle className="h-6 w-6 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                  Centre d{"'"}aide
                </h1>
                <p className="mt-1 text-sm text-muted-foreground">
                  Trouvez rapidement des réponses, des guides et de l{"'"}assistance
                </p>
              </div>
            </div>
          </div>

          {/* Search Section */}
          <HelpSearch />

          {/* Categories */}
          <section className="mt-10">
            <HelpCategories />
          </section>

          {/* Popular Articles */}
          <section className="mt-10">
            <PopularArticles />
          </section>

          {/* FAQ */}
          <section className="mt-10">
            <HelpFAQ />
          </section>

          {/* Support Contact & AI Assistant */}
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            <SupportContact />
            <HelpAIAssistant />
          </div>
        </main>
      </div>
    </div>
  )
}
