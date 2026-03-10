"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { CalendarClock, TrendingUp, Users, Clock, Send } from "lucide-react"

const scheduledExports = [
  {
    id: 1,
    title: "Rapport hebdomadaire des échéances",
    icon: CalendarClock,
    frequency: "Chaque lundi à 9h00",
    destination: "equipe-finance@techflow.fr",
    lastExport: "04 mars 2026",
    active: true,
    color: "emerald",
  },
  {
    id: 2,
    title: "Export mensuel des revenus",
    icon: TrendingUp,
    frequency: "Le 1er de chaque mois",
    destination: "direction@techflow.fr",
    lastExport: "01 mars 2026",
    active: true,
    color: "sky",
  },
  {
    id: 3,
    title: "Export CRM des clients actifs",
    icon: Users,
    frequency: "Tous les 15 jours",
    destination: "Intégration HubSpot",
    lastExport: "28 fév 2026",
    active: false,
    color: "violet",
  },
]

const colorClasses = {
  emerald: {
    bg: "bg-emerald-50",
    ring: "ring-emerald-100",
    text: "text-emerald-600",
  },
  sky: {
    bg: "bg-sky-50",
    ring: "ring-sky-100",
    text: "text-sky-600",
  },
  violet: {
    bg: "bg-violet-50",
    ring: "ring-violet-100",
    text: "text-violet-600",
  },
}

export function ScheduledExports() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-100">
            <Clock className="h-5 w-5 text-amber-600" />
          </div>
          <div>
            <CardTitle className="text-lg">Exports planifiés</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {scheduledExports.map((exportItem) => {
          const colors = colorClasses[exportItem.color as keyof typeof colorClasses]
          return (
            <div
              key={exportItem.id}
              className={`rounded-xl border p-4 transition-all ${
                exportItem.active
                  ? "border-border/60 bg-card"
                  : "border-border/40 bg-muted/30 opacity-70"
              }`}
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${colors.bg} ring-1 ${colors.ring}`}
                >
                  <exportItem.icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{exportItem.title}</h3>
                    <Switch defaultChecked={exportItem.active} />
                  </div>
                  <div className="mt-2 space-y-1.5">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="h-3.5 w-3.5" />
                      {exportItem.frequency}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Send className="h-3.5 w-3.5" />
                      {exportItem.destination}
                    </div>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <Badge variant="outline" className="bg-muted/50 text-muted-foreground">
                      Dernier export : {exportItem.lastExport}
                    </Badge>
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
