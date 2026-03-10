import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, AlertCircle, Calendar, Bell, TrendingDown, FileText, MessageSquare } from "lucide-react"

export function ClientAiAssistant() {
  const suggestions = [
    {
      icon: AlertCircle,
      text: "Ce client a 2 paiements en retard",
      type: "warning",
      color: "text-red-600 bg-red-50",
    },
    {
      icon: Calendar,
      text: "Un renouvellement annuel arrive dans 7 jours",
      type: "info",
      color: "text-sky-600 bg-sky-50",
    },
    {
      icon: Bell,
      text: "Une relance personnalisée est recommandée",
      type: "action",
      color: "text-amber-600 bg-amber-50",
    },
    {
      icon: TrendingDown,
      text: "Risque moyen de non-renouvellement",
      type: "risk",
      color: "text-amber-600 bg-amber-50",
    },
  ]

  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-foreground to-foreground/80">
          <Sparkles className="h-5 w-5 text-background" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Assistant IA</h3>
          <p className="text-xs text-muted-foreground">Suggestions intelligentes</p>
        </div>
        <Badge variant="outline" className="ml-auto bg-emerald-50 text-emerald-700 border-emerald-200 text-xs">
          Actif
        </Badge>
      </div>

      <div className="divide-y divide-border/60">
        {suggestions.map((suggestion, index) => (
          <div key={index} className="flex items-start gap-3 px-5 py-3.5">
            <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${suggestion.color}`}>
              <suggestion.icon className="h-4 w-4" />
            </div>
            <p className="text-sm text-foreground pt-1">{suggestion.text}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-2 border-t border-border/60 p-4">
        <Button size="sm" className="w-full gap-2">
          <Bell className="h-4 w-4" />
          Générer une relance
        </Button>
        <Button size="sm" variant="outline" className="w-full gap-2">
          <FileText className="h-4 w-4" />
          Résumer le compte
        </Button>
        <Button size="sm" variant="ghost" className="w-full gap-2 text-muted-foreground">
          <MessageSquare className="h-4 w-4" />
          Poser une question à l'IA
        </Button>
      </div>
    </div>
  )
}
