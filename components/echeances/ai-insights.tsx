"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Send, AlertCircle, Calendar, TrendingDown, ArrowRight, Zap, Users, Clock } from "lucide-react"

interface Insight {
  id: string
  icon: typeof AlertCircle
  title: string
  message: string
  action: string
  type: "warning" | "info" | "alert" | "success"
  impact?: string
}

const insights: Insight[] = [
  {
    id: "1",
    icon: Send,
    title: "Relances recommandées",
    message: "5 clients n'ont pas reçu de rappel depuis plus de 7 jours et présentent un risque de non-paiement.",
    action: "Planifier les relances",
    type: "warning",
    impact: "2 896 EUR à risque",
  },
  {
    id: "2",
    icon: Calendar,
    title: "Échéances importantes",
    message: "2 renouvellements annuels majeurs arrivent dans les 3 prochains jours.",
    action: "Voir les détails",
    type: "info",
    impact: "10 200 EUR",
  },
  {
    id: "3",
    icon: TrendingDown,
    title: "Client à risque détecté",
    message: "Digital Agency Paris montre des signes de désengagement. Score de risque : 78/100.",
    action: "Analyser le compte",
    type: "alert",
    impact: "5 400 EUR/an",
  },
  {
    id: "4",
    icon: Zap,
    title: "Optimisation possible",
    message: "Le taux de recouvrement peut être amélioré de 12% en automatisant les relances J+3.",
    action: "Configurer l'automatisation",
    type: "success",
    impact: "+4 850 EUR/mois",
  },
]

const typeStyles = {
  warning: {
    icon: "text-amber-600",
    bg: "bg-amber-50",
    border: "border-amber-200",
    badge: "bg-amber-100 text-amber-700 border-amber-200"
  },
  info: {
    icon: "text-sky-600",
    bg: "bg-sky-50",
    border: "border-sky-200",
    badge: "bg-sky-100 text-sky-700 border-sky-200"
  },
  alert: {
    icon: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
    badge: "bg-red-100 text-red-700 border-red-200"
  },
  success: {
    icon: "text-emerald-600",
    bg: "bg-emerald-50",
    border: "border-emerald-200",
    badge: "bg-emerald-100 text-emerald-700 border-emerald-200"
  },
}

export function AIInsights() {
  return (
    <div className="rounded-xl border border-border/60 bg-gradient-to-br from-card via-card to-muted/20 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-foreground shadow-sm">
              <Sparkles className="h-5 w-5 text-background" />
            </div>
            <span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white ring-2 ring-card">
              {insights.length}
            </span>
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Assistant IA</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Recommandations personnalisées
            </p>
          </div>
        </div>
      </div>

      {/* Insights List */}
      <div className="divide-y divide-border/60">
        {insights.map((insight) => {
          const Icon = insight.icon
          const styles = typeStyles[insight.type]
          
          return (
            <div key={insight.id} className="px-5 py-4 transition-colors hover:bg-muted/30">
              <div className="flex items-start gap-3">
                <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${styles.bg} ring-1 ${styles.border}`}>
                  <Icon className={`h-4 w-4 ${styles.icon}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="text-sm font-medium text-foreground">{insight.title}</h4>
                    {insight.impact && (
                      <Badge variant="outline" className={`text-[10px] ${styles.badge}`}>
                        {insight.impact}
                      </Badge>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {insight.message}
                  </p>
                  <Button variant="ghost" size="sm" className="mt-2 h-7 -ml-2 text-xs text-foreground hover:bg-muted gap-1.5">
                    {insight.action}
                    <ArrowRight className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* CTA Section */}
      <div className="border-t border-border/60 p-5">
        <Button className="w-full h-11 gap-2 shadow-sm">
          <Sparkles className="h-4 w-4" />
          Générer les relances automatiques
        </Button>
        <p className="mt-3 text-center text-xs text-muted-foreground">
          L'IA génère des emails personnalisés adaptés au profil de chaque client
        </p>
        
        {/* Quick Stats */}
        <div className="mt-4 grid grid-cols-3 gap-2 rounded-lg border border-border/60 bg-muted/30 p-3">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Users className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">94%</span>
            </div>
            <p className="text-[10px] text-muted-foreground">Taux d'ouverture</p>
          </div>
          <div className="text-center border-x border-border/60">
            <div className="flex items-center justify-center gap-1">
              <Zap className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">67%</span>
            </div>
            <p className="text-[10px] text-muted-foreground">Taux de réponse</p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1">
              <Clock className="h-3 w-3 text-muted-foreground" />
              <span className="text-sm font-semibold text-foreground">2.3j</span>
            </div>
            <p className="text-[10px] text-muted-foreground">Délai moyen</p>
          </div>
        </div>
      </div>
    </div>
  )
}
