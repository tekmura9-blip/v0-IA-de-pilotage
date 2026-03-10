import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { ClientHeader } from "@/components/clients/detail/client-header"
import { ClientSummary } from "@/components/clients/detail/client-summary"
import { ClientKpis } from "@/components/clients/detail/client-kpis"
import { ClientTabs } from "@/components/clients/detail/client-tabs"
import { ClientAiAssistant } from "@/components/clients/detail/client-ai-assistant"
import { ClientDocuments } from "@/components/clients/detail/client-documents"
import { ClientSubscription } from "@/components/clients/detail/client-subscription"

export const metadata = {
  title: "Fiche client | RenewFlow",
  description: "Consultez les informations du client, ses échéances, ses relances et son historique.",
}

export default function ClientDetailPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      <DashboardSidebar />
      
      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />
        
        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Client Header */}
          <ClientHeader />
          
          {/* KPI Cards */}
          <ClientKpis />
          
          {/* Main Content Grid */}
          <div className="grid gap-6 xl:grid-cols-3">
            {/* Left Column - Summary & Tabs */}
            <div className="space-y-6 xl:col-span-2">
              {/* Client Summary Card */}
              <ClientSummary />
              
              {/* Tabs Content */}
              <ClientTabs />
            </div>
            
            {/* Right Column - AI & Info Cards */}
            <div className="space-y-6">
              {/* AI Assistant */}
              <ClientAiAssistant />
              
              {/* Current Subscription */}
              <ClientSubscription />
              
              {/* Documents */}
              <ClientDocuments />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
