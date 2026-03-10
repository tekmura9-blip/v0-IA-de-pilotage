"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
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
  Download,
  Users,
  CalendarClock,
  Bell,
  TrendingUp,
  FileSpreadsheet,
  FileText,
} from "lucide-react"

const exportOptions = [
  {
    id: "clients",
    icon: Users,
    title: "Clients",
    description: "Exportez la liste complète de vos clients avec leurs informations",
    count: "247 clients",
    color: "sky",
  },
  {
    id: "echeances",
    icon: CalendarClock,
    title: "Échéances",
    description: "Exportez toutes les échéances avec leur statut de paiement",
    count: "1 284 échéances",
    color: "emerald",
  },
  {
    id: "relances",
    icon: Bell,
    title: "Relances",
    description: "Exportez l'historique des relances envoyées",
    count: "856 relances",
    color: "amber",
  },
  {
    id: "revenus",
    icon: TrendingUp,
    title: "Revenus",
    description: "Exportez les données de revenus pour vos analyses",
    count: "124 500 EUR",
    color: "violet",
  },
]

const colorClasses = {
  sky: {
    bg: "bg-sky-50",
    ring: "ring-sky-100",
    text: "text-sky-600",
    badge: "bg-sky-50 text-sky-700 border-sky-200",
  },
  emerald: {
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    text: "text-emerald-600",
    badge: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  amber: {
    bg: "bg-amber-50",
    ring: "ring-amber-100",
    text: "text-amber-600",
    badge: "bg-amber-50 text-amber-700 border-amber-200",
  },
  violet: {
    bg: "bg-violet-50",
    ring: "ring-violet-100",
    text: "text-violet-600",
    badge: "bg-violet-50 text-violet-700 border-violet-200",
  },
}

export function ExportSection() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
            <Download className="h-5 w-5 text-sky-600" />
          </div>
          <div>
            <CardTitle className="text-lg">Exporter les données</CardTitle>
            <CardDescription>
              Exportez vos données au format CSV ou Excel pour vos analyses
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {exportOptions.map((option) => {
          const colors = colorClasses[option.color as keyof typeof colorClasses]
          return (
            <div
              key={option.id}
              className="rounded-xl border border-border/60 bg-card p-4 transition-all hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.bg} ring-1 ${colors.ring}`}
                >
                  <option.icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{option.title}</h3>
                    <Badge variant="outline" className={`shrink-0 ${colors.badge}`}>
                      {option.count}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    <Select defaultValue="csv">
                      <SelectTrigger className="h-8 w-[100px] text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="csv">
                          <span className="flex items-center gap-1.5">
                            <FileText className="h-3.5 w-3.5 text-sky-600" />
                            CSV
                          </span>
                        </SelectItem>
                        <SelectItem value="xlsx">
                          <span className="flex items-center gap-1.5">
                            <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
                            XLSX
                          </span>
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <Select defaultValue="month">
                      <SelectTrigger className="h-8 w-[130px] text-xs">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="week">Cette semaine</SelectItem>
                        <SelectItem value="month">Ce mois</SelectItem>
                        <SelectItem value="quarter">Ce trimestre</SelectItem>
                        <SelectItem value="year">Cette année</SelectItem>
                        <SelectItem value="all">Toutes les données</SelectItem>
                      </SelectContent>
                    </Select>
                    <Button size="sm" variant="outline" className="ml-auto h-8 gap-1.5 text-xs">
                      <Download className="h-3.5 w-3.5" />
                      Exporter
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </CardContent>
    </Card>
  )
}
