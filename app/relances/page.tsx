import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { RelancesTable } from "@/components/relances/relances-table"
import { PriorityQueue } from "@/components/relances/priority-queue"
import { AIAssistant } from "@/components/relances/ai-assistant"
import { MessagePreview } from "@/components/relances/message-preview"
import { AutomationScenarios } from "@/components/relances/automation-scenarios"
import { AddRelanceSheet } from "@/components/relances/add-relance-sheet"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Search,
  Bell,
  Send,
  Clock,
  MessageSquare,
  Banknote,
  TrendingUp,
  Filter,
  RotateCcw,
  Zap,
} from "lucide-react"

export const metadata = {
  title: "Relances | RenewFlow",
  description: "Gérez vos relances clients et automatisez le suivi des paiements et renouvellements.",
}

export default function RelancesPage() {
  return (
    <div className="flex min-h-screen bg-muted/30">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="flex-1 lg:pl-[260px]">
        <TopNavbar />

        <main className="px-4 py-6 pb-24 lg:px-8 lg:pb-8">
          {/* Page Header */}
          <div className="mb-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground shadow-sm">
                  <Bell className="h-6 w-6 text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Relances
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Gérez vos relances clients et automatisez le suivi des paiements et renouvellements
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="h-10 gap-2 border-border/60 bg-card shadow-sm">
                  <Zap className="h-4 w-4" />
                  <span className="hidden sm:inline">Générer les relances</span>
                </Button>
                <AddRelanceSheet />
              </div>
            </div>
          </div>

          {/* KPI Summary Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-100">
                  <Send className="h-5 w-5 text-amber-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-amber-50 text-amber-700 border-amber-200 text-xs font-medium">
                  En attente
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-foreground">8</p>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">Relances à envoyer</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
                  <Zap className="h-5 w-5 text-sky-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-sky-50 text-sky-700 border-sky-200 text-xs font-medium">
                  Auto
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-foreground">12</p>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">Relances automatiques actives</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-emerald-200/60 bg-emerald-50/30 p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 ring-1 ring-emerald-200">
                  <MessageSquare className="h-5 w-5 text-emerald-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-emerald-100 text-emerald-700 border-emerald-300 text-xs font-medium gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +15%
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-emerald-700">23</p>
                <p className="mt-1.5 text-sm font-medium text-emerald-600/80">Réponses reçues ce mois</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-rose-50 ring-1 ring-rose-100">
                  <Banknote className="h-5 w-5 text-rose-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-rose-50 text-rose-700 border-rose-200 text-xs font-medium">
                  À récupérer
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-foreground">18 420 EUR</p>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">Montant en attente</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 to-rose-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          </div>

          {/* Filters Section */}
          <div className="mb-6 rounded-xl border border-border/60 bg-card p-4 shadow-sm">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
                {/* Search */}
                <div className="relative w-full sm:max-w-sm">
                  <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Rechercher un client, une entreprise..."
                    className="h-10 w-full border-border/60 bg-background pl-10"
                  />
                </div>

                {/* Filter Dropdowns */}
                <div className="flex flex-wrap items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="h-10 w-full border-border/60 bg-background sm:w-[150px]">
                      <SelectValue placeholder="Type de relance" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous types</SelectItem>
                      <SelectItem value="paiement_retard">Paiement en retard</SelectItem>
                      <SelectItem value="echeance">Échéance à venir</SelectItem>
                      <SelectItem value="renouvellement">Renouvellement</SelectItem>
                      <SelectItem value="commerciale">Relance commerciale</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="h-10 w-full border-border/60 bg-background sm:w-[130px]">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous statuts</SelectItem>
                      <SelectItem value="a_envoyer">À envoyer</SelectItem>
                      <SelectItem value="envoyee">Envoyée</SelectItem>
                      <SelectItem value="reponse">Réponse reçue</SelectItem>
                      <SelectItem value="en_attente">En attente</SelectItem>
                      <SelectItem value="automatique">Automatique</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="h-10 w-full border-border/60 bg-background sm:w-[130px]">
                      <SelectValue placeholder="Priorité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      <SelectItem value="haute">Haute</SelectItem>
                      <SelectItem value="moyenne">Moyenne</SelectItem>
                      <SelectItem value="faible">Faible</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Filter Actions */}
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm" className="h-9 gap-2 text-muted-foreground hover:text-foreground">
                  <RotateCcw className="h-4 w-4" />
                  Réinitialiser
                </Button>
                <Button variant="outline" size="sm" className="h-9 gap-2">
                  <Filter className="h-4 w-4" />
                  Filtres avancés
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid gap-6 xl:grid-cols-3">
            {/* Left Column - Table */}
            <div className="space-y-6 xl:col-span-2">
              {/* Main Table */}
              <RelancesTable />

              {/* Priority Queue */}
              <PriorityQueue />
            </div>

            {/* Right Column - AI, Preview, Automation */}
            <div className="space-y-6">
              {/* AI Assistant */}
              <AIAssistant />

              {/* Message Preview */}
              <MessagePreview />

              {/* Automation Scenarios */}
              <AutomationScenarios />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
