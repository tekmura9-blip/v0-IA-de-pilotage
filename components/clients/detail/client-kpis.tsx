import { Badge } from "@/components/ui/badge"
import { Receipt, AlertTriangle, CalendarClock, TrendingUp } from "lucide-react"

export function ClientKpis() {
  const kpis = [
    {
      icon: Receipt,
      iconBg: "bg-sky-50 ring-sky-100",
      iconColor: "text-sky-600",
      label: "Total facturé",
      value: "24 600 EUR",
      badge: "Depuis 2023",
      badgeClass: "bg-sky-50 text-sky-700 border-sky-200",
    },
    {
      icon: AlertTriangle,
      iconBg: "bg-red-100 ring-red-200",
      iconColor: "text-red-600",
      label: "Paiements en retard",
      value: "2",
      badge: "1 850 EUR",
      badgeClass: "bg-red-100 text-red-700 border-red-300",
    },
    {
      icon: CalendarClock,
      iconBg: "bg-amber-50 ring-amber-100",
      iconColor: "text-amber-600",
      label: "Prochaine échéance",
      value: "15 mars 2026",
      badge: "Dans 5 jours",
      badgeClass: "bg-amber-50 text-amber-700 border-amber-200",
    },
    {
      icon: TrendingUp,
      iconBg: "bg-emerald-50 ring-emerald-100",
      iconColor: "text-emerald-600",
      label: "Revenus annuels estimés",
      value: "9 600 EUR",
      badge: "+12%",
      badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200",
    },
  ]

  return (
    <div className="mb-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {kpis.map((kpi, index) => (
        <div 
          key={index} 
          className="group relative overflow-hidden rounded-xl border border-border/60 bg-card p-5 shadow-sm transition-all hover:shadow-md"
        >
          <div className="flex items-start justify-between">
            <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${kpi.iconBg} ring-1 ${kpi.iconBg.replace('bg-', 'ring-').replace('-50', '-100').replace('-100', '-200')}`}>
              <kpi.icon className={`h-5 w-5 ${kpi.iconColor}`} />
            </div>
            <Badge variant="outline" className={`h-6 text-xs font-medium ${kpi.badgeClass}`}>
              {kpi.badge}
            </Badge>
          </div>
          <div className="mt-4">
            <p className="text-2xl font-bold tabular-nums tracking-tight text-foreground sm:text-3xl">
              {kpi.value}
            </p>
            <p className="mt-1.5 text-sm font-medium text-muted-foreground">
              {kpi.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
