import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CreditCard, Calendar, RefreshCw, ArrowUpRight } from "lucide-react"

export function ClientSubscription() {
  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      <div className="flex items-center gap-3 border-b border-border/60 px-5 py-4">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
          <CreditCard className="h-5 w-5 text-foreground" />
        </div>
        <div>
          <h3 className="font-semibold text-foreground">Abonnement actuel</h3>
          <p className="text-xs text-muted-foreground">Suite Enterprise</p>
        </div>
      </div>

      <div className="space-y-4 p-5">
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Plan</span>
          <span className="font-medium text-foreground">Suite Enterprise</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Montant</span>
          <span className="font-semibold tabular-nums text-foreground">800 EUR/mois</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Cycle</span>
          <Badge variant="outline" className="font-normal">Annuel</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Début</span>
          <span className="text-foreground">15 mars 2023</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Renouvellement</span>
          <div className="flex items-center gap-2">
            <Calendar className="h-3.5 w-3.5 text-muted-foreground" />
            <span className="text-foreground">15 mars 2026</span>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">Statut</span>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            Actif
          </Badge>
        </div>
      </div>

      <div className="flex gap-2 border-t border-border/60 p-4">
        <Button size="sm" variant="outline" className="flex-1 gap-2">
          <RefreshCw className="h-4 w-4" />
          Modifier
        </Button>
        <Button size="sm" variant="outline" className="flex-1 gap-2">
          <ArrowUpRight className="h-4 w-4" />
          Upgrade
        </Button>
      </div>
    </div>
  )
}
