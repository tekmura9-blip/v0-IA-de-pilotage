"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, AlertTriangle, Link2, Zap, Search } from "lucide-react"

const suggestions = [
  {
    icon: AlertTriangle,
    text: "Le dernier import contient 12 doublons potentiels",
    type: "warning",
  },
  {
    icon: Link2,
    text: "3 colonnes semblent mal associées dans le mapping",
    type: "info",
  },
  {
    icon: Zap,
    text: "Vous pouvez générer automatiquement les échéances après import",
    type: "tip",
  },
]

const typeStyles = {
  warning: "bg-amber-50 text-amber-600 border-amber-200",
  info: "bg-sky-50 text-sky-600 border-sky-200",
  tip: "bg-emerald-50 text-emerald-600 border-emerald-200",
}

export function ImportExportAI() {
  return (
    <Card className="border-border/60 bg-gradient-to-br from-card to-muted/30 shadow-sm">
      <CardContent className="p-6">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-foreground shadow-sm">
              <Sparkles className="h-6 w-6 text-background" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground">Assistant IA</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Suggestions intelligentes pour optimiser vos imports et exports
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Badge
                key={index}
                variant="outline"
                className={`gap-2 py-2 px-3 ${typeStyles[suggestion.type as keyof typeof typeStyles]}`}
              >
                <suggestion.icon className="h-3.5 w-3.5" />
                <span className="text-xs font-medium">{suggestion.text}</span>
              </Badge>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between border-t border-border/60 pt-6">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
              Analyse automatique activée
            </span>
            <span className="hidden sm:inline">|</span>
            <span>Dernière analyse : il y a 2 heures</span>
          </div>
          <Button variant="outline" size="sm" className="gap-2">
            <Search className="h-4 w-4" />
            Analyser le fichier
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
