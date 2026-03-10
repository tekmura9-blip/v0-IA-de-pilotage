import { Badge } from "@/components/ui/badge"
import { Building2, User, Mail, Phone, MapPin, CreditCard, Package, Calendar, CalendarClock, Shield } from "lucide-react"

export function ClientSummary() {
  const clientInfo = [
    { icon: Building2, label: "Entreprise", value: "Atelier Dubois & Fils" },
    { icon: User, label: "Contact principal", value: "Jean-Pierre Dubois" },
    { icon: Mail, label: "Email", value: "contact@dubois-fils.fr" },
    { icon: Phone, label: "Téléphone", value: "01 42 36 58 74" },
    { icon: MapPin, label: "Adresse", value: "45 Rue de la République, 69002 Lyon" },
    { icon: CreditCard, label: "Type d'abonnement", value: "Annuel" },
    { icon: Package, label: "Produit / offre", value: "Suite Enterprise" },
    { icon: CreditCard, label: "Montant", value: "800 EUR / mois" },
    { icon: Calendar, label: "Date de début", value: "15 mars 2023" },
    { icon: CalendarClock, label: "Prochaine échéance", value: "15 mars 2026" },
  ]

  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
            <Building2 className="h-5 w-5 text-background" />
          </div>
          <div>
            <h2 className="font-semibold text-foreground">Informations client</h2>
            <p className="text-sm text-muted-foreground">Détails du compte et de l'abonnement</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 gap-1.5">
            <Shield className="h-3 w-3" />
            Client vérifié
          </Badge>
        </div>
      </div>
      
      <div className="grid gap-0 divide-y divide-border/60 sm:grid-cols-2 sm:divide-y-0">
        {clientInfo.map((item, index) => (
          <div 
            key={index} 
            className={`flex items-center gap-4 px-5 py-4 ${
              index % 2 === 0 ? 'sm:border-r sm:border-border/60' : ''
            } ${index >= clientInfo.length - 2 ? '' : 'sm:border-b sm:border-border/60'}`}
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/50">
              <item.icon className="h-4 w-4 text-muted-foreground" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="mt-0.5 truncate font-medium text-foreground">
                {item.value}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Status Section */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border/60 bg-muted/20 px-5 py-4">
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-sm font-medium text-muted-foreground">Statut client :</span>
          <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
            Actif
          </Badge>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <span>SIRET: 842 561 293 00014</span>
          <span className="hidden sm:inline">|</span>
          <span>TVA: FR32842561293</span>
        </div>
      </div>
    </div>
  )
}
