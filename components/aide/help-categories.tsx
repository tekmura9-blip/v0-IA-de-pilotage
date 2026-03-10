"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Rocket,
  Users,
  CalendarClock,
  Bell,
  FileUp,
  Settings,
  ArrowRight,
} from "lucide-react"

const categories = [
  {
    icon: Rocket,
    title: "Premiers pas",
    description: "Démarrez rapidement avec RenewFlow et configurez votre espace de travail",
    articles: 8,
    color: "emerald",
  },
  {
    icon: Users,
    title: "Clients",
    description: "Gérez vos clients, leurs abonnements et leurs informations de contact",
    articles: 12,
    color: "sky",
  },
  {
    icon: CalendarClock,
    title: "Échéances",
    description: "Suivez les paiements, gérez les retards et optimisez vos recouvrements",
    articles: 15,
    color: "amber",
  },
  {
    icon: Bell,
    title: "Relances",
    description: "Automatisez vos relances et personnalisez vos messages avec l'IA",
    articles: 10,
    color: "violet",
  },
  {
    icon: FileUp,
    title: "Import / Export",
    description: "Importez vos données et exportez vos rapports en quelques clics",
    articles: 6,
    color: "rose",
  },
  {
    icon: Settings,
    title: "Paramètres et sécurité",
    description: "Configurez votre équipe, vos intégrations et vos préférences",
    articles: 9,
    color: "slate",
  },
]

const colorClasses = {
  emerald: { bg: "bg-emerald-50", ring: "ring-emerald-100", text: "text-emerald-600" },
  sky: { bg: "bg-sky-50", ring: "ring-sky-100", text: "text-sky-600" },
  amber: { bg: "bg-amber-50", ring: "ring-amber-100", text: "text-amber-600" },
  violet: { bg: "bg-violet-50", ring: "ring-violet-100", text: "text-violet-600" },
  rose: { bg: "bg-rose-50", ring: "ring-rose-100", text: "text-rose-600" },
  slate: { bg: "bg-slate-100", ring: "ring-slate-200", text: "text-slate-600" },
}

export function HelpCategories() {
  return (
    <div>
      <h2 className="text-lg font-semibold text-foreground">Catégories</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Explorez nos guides par thématique
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const colors = colorClasses[category.color as keyof typeof colorClasses]
          return (
            <Card
              key={index}
              className="group border-border/60 shadow-sm transition-all hover:shadow-md cursor-pointer"
            >
              <CardContent className="p-5">
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${colors.bg} ring-1 ${colors.ring}`}
                  >
                    <category.icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-foreground group-hover:text-foreground/80">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                      {category.description}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {category.articles} articles
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-8 gap-1.5 text-xs opacity-0 transition-opacity group-hover:opacity-100"
                      >
                        Voir les articles
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}
