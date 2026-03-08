import { DashboardSidebar } from "@/components/dashboard/sidebar"
import { TopNavbar } from "@/components/dashboard/top-navbar"
import { EcheancesTable } from "@/components/echeances/echeances-table"
import { OverduePanel } from "@/components/echeances/overdue-panel"
import { CalendarView } from "@/components/echeances/calendar-view"
import { AIInsights } from "@/components/echeances/ai-insights"
import { AddEcheanceSheet } from "@/components/echeances/add-echeance-sheet"
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
  Download,
  CalendarClock,
  Clock,
  AlertTriangle,
  Banknote,
  TrendingUp,
  Filter,
  RotateCcw,
} from "lucide-react"

export const metadata = {
  title: "Échéances | RenewFlow",
  description: "Suivez toutes les échéances de paiement, les renouvellements et les retards.",
}

export default function EcheancesPage() {
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
                  <CalendarClock className="h-6 w-6 text-background" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold tracking-tight text-foreground lg:text-3xl">
                    Échéances
                  </h1>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Suivez vos échéances de paiement et optimisez vos recouvrements
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" size="sm" className="h-10 gap-2 border-border/60 bg-card shadow-sm">
                  <Download className="h-4 w-4" />
                  <span className="hidden sm:inline">Exporter CSV</span>
                </Button>
                <AddEcheanceSheet />
              </div>
            </div>
          </div>

          {/* KPI Summary Cards */}
          <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
                  <Clock className="h-5 w-5 text-sky-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-sky-50 text-sky-700 border-sky-200 text-xs font-medium">
                  7 jours
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-foreground">12</p>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">Échéances cette semaine</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-400 to-sky-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
                  <CalendarClock className="h-5 w-5 text-emerald-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-emerald-50 text-emerald-700 border-emerald-200 text-xs font-medium">
                  Mars 2026
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-foreground">34</p>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">Échéances ce mois-ci</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 to-emerald-600 opacity-0 transition-opacity group-hover:opacity-100" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-red-200/60 bg-red-50/30 p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 ring-1 ring-red-200">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-red-100 text-red-700 border-red-300 text-xs font-semibold">
                  Urgent
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-red-700">4</p>
                <p className="mt-1.5 text-sm font-medium text-red-600/80">Paiements en retard</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-400 to-red-600" />
            </div>

            <div className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-100">
                  <Banknote className="h-5 w-5 text-amber-600" />
                </div>
                <Badge variant="outline" className="h-6 bg-emerald-50 text-emerald-700 border-emerald-200 text-xs font-medium gap-1">
                  <TrendingUp className="h-3 w-3" />
                  +8,2%
                </Badge>
              </div>
              <div className="mt-4">
                <p className="text-3xl font-bold tabular-nums tracking-tight text-foreground">42 850 EUR</p>
                <p className="mt-1.5 text-sm font-medium text-muted-foreground">Montant total à encaisser</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-amber-600 opacity-0 transition-opacity group-hover:opacity-100" />
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
                    placeholder="Rechercher par client, entreprise ou produit..."
                    className="h-10 w-full border-border/60 bg-background pl-10"
                  />
                </div>

                {/* Filter Dropdowns */}
                <div className="flex flex-wrap items-center gap-2">
                  <Select defaultValue="all">
                    <SelectTrigger className="h-10 w-full border-border/60 bg-background sm:w-[130px]">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous statuts</SelectItem>
                      <SelectItem value="paye">Payé</SelectItem>
                      <SelectItem value="a_venir">À venir</SelectItem>
                      <SelectItem value="en_retard">En retard</SelectItem>
                      <SelectItem value="a_risque">À risque</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="h-10 w-full border-border/60 bg-background sm:w-[130px]">
                      <SelectValue placeholder="Fréquence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      <SelectItem value="mensuel">Mensuel</SelectItem>
                      <SelectItem value="trimestriel">Trimestriel</SelectItem>
                      <SelectItem value="annuel">Annuel</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="month">
                    <SelectTrigger className="h-10 w-full border-border/60 bg-background sm:w-[140px]">
                      <SelectValue placeholder="Période" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="week">Cette semaine</SelectItem>
                      <SelectItem value="month">Ce mois</SelectItem>
                      <SelectItem value="quarter">Ce trimestre</SelectItem>
                      <SelectItem value="year">Cette année</SelectItem>
                      <SelectItem value="all">Toutes périodes</SelectItem>
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
            {/* Left Column - Table & Overdue */}
            <div className="space-y-6 xl:col-span-2">
              {/* Main Table */}
              <EcheancesTable />

              {/* Overdue Section */}
              <OverduePanel />
            </div>

            {/* Right Column - Calendar & AI */}
            <div className="space-y-6">
              {/* Calendar View */}
              <CalendarView />

              {/* AI Insights */}
              <AIInsights />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
