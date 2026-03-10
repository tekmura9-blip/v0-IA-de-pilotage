"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Mail, BookOpen, Clock, Headphones } from "lucide-react"

const supportOptions = [
  {
    icon: MessageCircle,
    title: "Chat en direct",
    description: "Discutez avec notre équipe en temps réel",
    responseTime: "< 5 min",
    action: "Démarrer une conversation",
    color: "emerald",
    available: true,
  },
  {
    icon: Mail,
    title: "Email",
    description: "Envoyez-nous un email détaillé",
    responseTime: "< 2h",
    action: "Envoyer un email",
    color: "sky",
    available: true,
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Explorez notre base de connaissances",
    responseTime: "Accès immédiat",
    action: "Explorer la documentation",
    color: "violet",
    available: true,
  },
]

const colorClasses = {
  emerald: { bg: "bg-emerald-50", ring: "ring-emerald-100", text: "text-emerald-600", badge: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  sky: { bg: "bg-sky-50", ring: "ring-sky-100", text: "text-sky-600", badge: "bg-sky-50 text-sky-700 border-sky-200" },
  violet: { bg: "bg-violet-50", ring: "ring-violet-100", text: "text-violet-600", badge: "bg-violet-50 text-violet-700 border-violet-200" },
}

export function SupportContact() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
            <Headphones className="h-5 w-5 text-background" />
          </div>
          <div>
            <CardTitle className="text-lg">Contacter le support</CardTitle>
            <p className="text-sm text-muted-foreground">Notre équipe est là pour vous aider</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        {supportOptions.map((option, index) => {
          const colors = colorClasses[option.color as keyof typeof colorClasses]
          return (
            <div
              key={index}
              className="rounded-xl border border-border/60 p-4 transition-all hover:shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${colors.bg} ring-1 ${colors.ring}`}
                >
                  <option.icon className={`h-5 w-5 ${colors.text}`} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-semibold text-foreground">{option.title}</h3>
                    <Badge variant="outline" className={`gap-1.5 ${colors.badge}`}>
                      <Clock className="h-3 w-3" />
                      {option.responseTime}
                    </Badge>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{option.description}</p>
                  <Button variant="outline" size="sm" className="mt-3 h-8 text-xs">
                    {option.action}
                  </Button>
                </div>
              </div>
            </div>
          )
        })}

        {/* Quick Stats */}
        <div className="rounded-xl border border-border/60 bg-muted/30 p-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Temps moyen de réponse</span>
            <span className="font-medium text-foreground">2h</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Disponibilité</span>
            <span className="font-medium text-foreground">Lun - Ven, 9h - 18h</span>
          </div>
          <div className="mt-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Documentation</span>
            <span className="font-medium text-emerald-600">Mise à jour récemment</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
