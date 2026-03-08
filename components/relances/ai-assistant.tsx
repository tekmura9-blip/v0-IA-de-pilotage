"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Sparkles,
  Bell,
  Calendar,
  Eye,
  Zap,
  MessageSquare,
  Send,
} from "lucide-react"

interface AIInsight {
  id: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
  message: string
  count?: number
  action?: string
}

const insights: AIInsight[] = [
  {
    id: "1",
    icon: Bell,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 ring-amber-100",
    message: "clients doivent être relancés aujourd'hui",
    count: 3,
    action: "Voir",
  },
  {
    id: "2",
    icon: Calendar,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50 ring-sky-100",
    message: "renouvellements premium arrivent à échéance dans 5 jours",
    count: 2,
    action: "Planifier",
  },
  {
    id: "3",
    icon: Eye,
    iconColor: "text-violet-600",
    iconBg: "bg-violet-50 ring-violet-100",
    message: "client a ouvert vos deux dernières relances sans répondre",
    count: 1,
    action: "Appeler",
  },
  {
    id: "4",
    icon: Zap,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 ring-emerald-100",
    message: "relances peuvent être automatisées",
    count: 4,
    action: "Configurer",
  },
]

export function AIAssistant() {
  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 shadow-sm">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Assistant IA</h3>
            <p className="text-xs text-muted-foreground">Suggestions intelligentes</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
          4 suggestions
        </Badge>
      </div>

      {/* Insights List */}
      <div className="divide-y divide-border/60">
        {insights.map((insight) => {
          const IconComponent = insight.icon
          return (
            <div key={insight.id} className="flex items-start gap-3 px-5 py-4 transition-colors hover:bg-muted/30">
              <div className={`flex h-8 w-8 items-center justify-center rounded-lg ${insight.iconBg} ring-1`}>
                <IconComponent className={`h-4 w-4 ${insight.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-foreground">
                  <span className="font-semibold">{insight.count}</span>{" "}
                  {insight.message}
                </p>
              </div>
              {insight.action && (
                <Button variant="ghost" size="sm" className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground">
                  {insight.action}
                </Button>
              )}
            </div>
          )
        })}
      </div>

      {/* Action Buttons */}
      <div className="border-t border-border/60 p-4">
        <div className="flex flex-col gap-2">
          <Button className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90">
            <MessageSquare className="h-4 w-4" />
            Générer les messages
          </Button>
          <Button variant="outline" className="w-full gap-2">
            <Send className="h-4 w-4" />
            Activer l'envoi automatique
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-px border-t border-border/60 bg-border/60">
        <div className="bg-card px-3 py-3 text-center">
          <p className="text-lg font-bold tabular-nums text-foreground">78%</p>
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Taux ouverture</p>
        </div>
        <div className="bg-card px-3 py-3 text-center">
          <p className="text-lg font-bold tabular-nums text-foreground">42%</p>
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Taux réponse</p>
        </div>
        <div className="bg-card px-3 py-3 text-center">
          <p className="text-lg font-bold tabular-nums text-foreground">2,3j</p>
          <p className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">Délai moyen</p>
        </div>
      </div>
    </div>
  )
}
