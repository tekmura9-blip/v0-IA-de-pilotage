"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  AlertTriangle,
  Send,
  Mail,
  Phone,
  MessageSquare,
  Clock,
  ArrowRight,
} from "lucide-react"

interface PriorityRelance {
  id: string
  clientName: string
  company: string
  amount: number
  daysOverdue: number
  urgency: "critique" | "elevee" | "moderee"
  recommendedChannel: "email" | "telephone" | "sms"
  lastContact: string
}

const priorityRelances: PriorityRelance[] = [
  {
    id: "1",
    clientName: "Isabelle Moreau",
    company: "Cuisine Plus SA",
    amount: 799,
    daysOverdue: 5,
    urgency: "critique",
    recommendedChannel: "telephone",
    lastContact: "Il y a 3 jours",
  },
  {
    id: "2",
    clientName: "Pierre Dubois",
    company: "GreenLogistics SARL",
    amount: 299,
    daysOverdue: 2,
    urgency: "elevee",
    recommendedChannel: "email",
    lastContact: "Il y a 1 jour",
  },
  {
    id: "3",
    clientName: "Émilie Rousseau",
    company: "Média France SA",
    amount: 299,
    daysOverdue: 4,
    urgency: "elevee",
    recommendedChannel: "sms",
    lastContact: "Il y a 2 jours",
  },
  {
    id: "4",
    clientName: "Antoine Richard",
    company: "Sport Club Premium SA",
    amount: 990,
    daysOverdue: 1,
    urgency: "moderee",
    recommendedChannel: "email",
    lastContact: "Aujourd'hui",
  },
]

const urgencyConfig = {
  critique: {
    label: "Critique",
    className: "bg-red-100 text-red-700 border-red-200",
    barColor: "bg-red-500",
  },
  elevee: {
    label: "Élevée",
    className: "bg-amber-100 text-amber-700 border-amber-200",
    barColor: "bg-amber-500",
  },
  moderee: {
    label: "Modérée",
    className: "bg-sky-100 text-sky-700 border-sky-200",
    barColor: "bg-sky-500",
  },
}

const channelIcons = {
  email: Mail,
  telephone: Phone,
  sms: MessageSquare,
}

const channelLabels = {
  email: "Email recommandé",
  telephone: "Appel recommandé",
  sms: "SMS recommandé",
}

export function PriorityQueue() {
  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("fr-FR", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
    }).format(amount)
  }

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2)
  }

  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-100 ring-1 ring-red-200">
            <AlertTriangle className="h-4 w-4 text-red-600" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Relances prioritaires</h3>
            <p className="text-sm text-muted-foreground">Actions urgentes recommandées par l'IA</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
          {priorityRelances.length} en attente
        </Badge>
      </div>

      {/* Priority List */}
      <div className="divide-y divide-border/60">
        {priorityRelances.map((relance) => {
          const urgency = urgencyConfig[relance.urgency]
          const ChannelIcon = channelIcons[relance.recommendedChannel]
          
          return (
            <div key={relance.id} className="group p-4 transition-colors hover:bg-muted/30">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="relative">
                    <Avatar className="h-11 w-11 border-2 border-background shadow-sm">
                      <AvatarFallback className="bg-muted text-xs font-semibold text-muted-foreground">
                        {getInitials(relance.clientName)}
                      </AvatarFallback>
                    </Avatar>
                    <div className={`absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-card ${urgency.barColor}`} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-foreground">{relance.clientName}</span>
                    <span className="text-xs text-muted-foreground">{relance.company}</span>
                    <div className="mt-2 flex flex-wrap items-center gap-2">
                      <Badge variant="outline" className={`text-xs font-medium ${urgency.className}`}>
                        {urgency.label}
                      </Badge>
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {relance.daysOverdue}j de retard
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="text-lg font-bold tabular-nums text-foreground">
                    {formatAmount(relance.amount)}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <ChannelIcon className="h-3.5 w-3.5" />
                    <span>{channelLabels[relance.recommendedChannel]}</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-3 flex items-center justify-between">
                <span className="text-xs text-muted-foreground">
                  Dernier contact : {relance.lastContact}
                </span>
                <Button size="sm" className="h-8 gap-2 bg-foreground text-background hover:bg-foreground/90">
                  <Send className="h-3.5 w-3.5" />
                  Envoyer
                </Button>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer */}
      <div className="border-t border-border/60 px-6 py-4">
        <Button variant="outline" className="w-full gap-2">
          Voir toutes les relances prioritaires
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
