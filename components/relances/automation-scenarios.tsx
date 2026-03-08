"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import {
  Zap,
  Clock,
  AlertTriangle,
  RotateCcw,
  Settings,
} from "lucide-react"

interface Automation {
  id: string
  title: string
  description: string
  icon: React.ElementType
  iconColor: string
  iconBg: string
  isActive: boolean
  lastExecution: string
  executions: number
}

const automations: Automation[] = [
  {
    id: "1",
    title: "Relance 3 jours avant échéance",
    description: "Rappel automatique avant la date limite de paiement",
    icon: Clock,
    iconColor: "text-sky-600",
    iconBg: "bg-sky-50 ring-sky-100",
    isActive: true,
    lastExecution: "Il y a 2 heures",
    executions: 156,
  },
  {
    id: "2",
    title: "Relance 2 jours après retard",
    description: "Premier rappel suite à un paiement non reçu",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
    iconBg: "bg-amber-50 ring-amber-100",
    isActive: true,
    lastExecution: "Hier",
    executions: 89,
  },
  {
    id: "3",
    title: "Relance renouvellement annuel",
    description: "Notification 30 jours avant l'expiration du contrat",
    icon: RotateCcw,
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-50 ring-emerald-100",
    isActive: false,
    lastExecution: "Il y a 5 jours",
    executions: 42,
  },
]

export function AutomationScenarios() {
  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
            <Zap className="h-4 w-4 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Scénarios automatiques</h3>
            <p className="text-xs text-muted-foreground">Automatisez vos relances</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
          2 actifs
        </Badge>
      </div>

      {/* Automations List */}
      <div className="divide-y divide-border/60">
        {automations.map((automation) => {
          const IconComponent = automation.icon
          return (
            <div key={automation.id} className="p-4 transition-colors hover:bg-muted/30">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${automation.iconBg} ring-1`}>
                    <IconComponent className={`h-4 w-4 ${automation.iconColor}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{automation.title}</span>
                    <span className="text-xs text-muted-foreground mt-0.5">{automation.description}</span>
                  </div>
                </div>
                <Switch checked={automation.isActive} />
              </div>
              
              <div className="mt-3 flex items-center justify-between pl-12">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span>Dernière : {automation.lastExecution}</span>
                  <span className="hidden sm:inline">|</span>
                  <span className="hidden sm:inline">{automation.executions} exécutions</span>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-border/60 px-5 py-4">
        <Button variant="outline" className="w-full gap-2">
          <Settings className="h-4 w-4" />
          Gérer les automatisations
        </Button>
      </div>
    </div>
  )
}
