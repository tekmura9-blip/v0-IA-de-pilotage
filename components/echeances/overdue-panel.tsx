"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Send, Clock, Phone, Mail, Building2, TrendingDown, ArrowRight } from "lucide-react"

interface OverduePayment {
  id: string
  clientName: string
  company: string
  email: string
  phone: string
  amount: number
  daysLate: number
  lastReminder: string
  reminderCount: number
  urgency: "critique" | "urgent" | "modere"
}

const overduePayments: OverduePayment[] = [
  {
    id: "1",
    clientName: "Thomas Garnier",
    company: "Tech Solutions SAS",
    email: "t.garnier@techsolutions.fr",
    phone: "+33 6 98 76 54 32",
    amount: 1499,
    daysLate: 15,
    lastReminder: "Il y a 3 jours",
    reminderCount: 2,
    urgency: "critique",
  },
  {
    id: "2",
    clientName: "Pierre Dubois",
    company: "GreenLogistics SARL",
    email: "p.dubois@greenlogistics.fr",
    phone: "+33 6 23 45 67 89",
    amount: 299,
    daysLate: 8,
    lastReminder: "Il y a 5 jours",
    reminderCount: 1,
    urgency: "urgent",
  },
  {
    id: "3",
    clientName: "Émilie Rousseau",
    company: "Média France SA",
    email: "e.rousseau@mediafrance.fr",
    phone: "+33 6 12 34 56 78",
    amount: 299,
    daysLate: 6,
    lastReminder: "Il y a 2 jours",
    reminderCount: 1,
    urgency: "urgent",
  },
  {
    id: "4",
    clientName: "Isabelle Moreau",
    company: "Cuisine Plus SA",
    email: "i.moreau@cuisineplus.fr",
    phone: "+33 6 56 78 90 12",
    amount: 799,
    daysLate: 3,
    lastReminder: "Jamais",
    reminderCount: 0,
    urgency: "modere",
  },
]

const urgencyConfig = {
  critique: { 
    label: "Critique", 
    className: "bg-red-600 text-white border-red-600",
    progressColor: "bg-red-500"
  },
  urgent: { 
    label: "Urgent", 
    className: "bg-amber-100 text-amber-700 border-amber-200",
    progressColor: "bg-amber-500"
  },
  modere: { 
    label: "Modéré", 
    className: "bg-slate-100 text-slate-600 border-slate-200",
    progressColor: "bg-slate-400"
  },
}

export function OverduePanel() {
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

  const totalOverdue = overduePayments.reduce((acc, p) => acc + p.amount, 0)
  const criticalCount = overduePayments.filter(p => p.urgency === "critique").length
  const avgDaysLate = Math.round(overduePayments.reduce((acc, p) => acc + p.daysLate, 0) / overduePayments.length)

  return (
    <div className="rounded-xl border-2 border-red-200 bg-gradient-to-br from-red-50/80 to-red-50/30 shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-red-200 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 ring-2 ring-red-200">
            <AlertTriangle className="h-6 w-6 text-red-600" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-base font-semibold text-foreground">Retards à traiter</h3>
              {criticalCount > 0 && (
                <Badge className="bg-red-600 text-white border-0 text-xs">
                  {criticalCount} critique{criticalCount > 1 ? "s" : ""}
                </Badge>
              )}
            </div>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {overduePayments.length} paiements en attente - {formatAmount(totalOverdue)} à recouvrer
            </p>
          </div>
        </div>
        <Button className="h-10 gap-2 bg-red-600 hover:bg-red-700 text-white shadow-sm">
          <Send className="h-4 w-4" />
          Tout relancer
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 border-b border-red-200 px-6 py-4">
        <div className="text-center">
          <p className="text-2xl font-bold tabular-nums text-red-700">{overduePayments.length}</p>
          <p className="text-xs text-muted-foreground">Impayés</p>
        </div>
        <div className="text-center border-x border-red-200">
          <p className="text-2xl font-bold tabular-nums text-red-700">{avgDaysLate}j</p>
          <p className="text-xs text-muted-foreground">Retard moyen</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold tabular-nums text-red-700">{formatAmount(totalOverdue)}</p>
          <p className="text-xs text-muted-foreground">Total dû</p>
        </div>
      </div>

      {/* List */}
      <div className="divide-y divide-red-100">
        {overduePayments.map((payment) => {
          const urgency = urgencyConfig[payment.urgency]
          const riskLevel = Math.min((payment.daysLate / 30) * 100, 100)
          
          return (
            <div key={payment.id} className="px-6 py-4 transition-colors hover:bg-red-50/50">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3">
                  <Avatar className="h-11 w-11 border-2 border-white shadow-sm">
                    <AvatarFallback className="bg-red-100 text-xs font-semibold text-red-700">
                      {getInitials(payment.clientName)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-sm font-semibold text-foreground">{payment.clientName}</span>
                      <Badge variant="outline" className={urgency.className}>
                        {urgency.label}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-1.5 mt-0.5">
                      <Building2 className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{payment.company}</span>
                    </div>
                    
                    {/* Risk Progress */}
                    <div className="mt-2 flex items-center gap-2">
                      <div className="flex-1 h-1.5 bg-red-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${urgency.progressColor} transition-all`}
                          style={{ width: `${riskLevel}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-medium text-red-600 whitespace-nowrap">
                        Risque {payment.urgency === "critique" ? "élevé" : payment.urgency === "urgent" ? "moyen" : "faible"}
                      </span>
                    </div>

                    {/* Meta info */}
                    <div className="mt-2 flex items-center gap-3 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span className="font-medium text-red-600">{payment.daysLate}j de retard</span>
                      </div>
                      <span>-</span>
                      <span>{payment.reminderCount} relance{payment.reminderCount !== 1 ? "s" : ""} envoyée{payment.reminderCount !== 1 ? "s" : ""}</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col items-end gap-2">
                  <p className="text-base font-bold tabular-nums text-red-700">
                    {formatAmount(payment.amount)}
                  </p>
                  <div className="flex items-center gap-1.5">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-red-100">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground hover:bg-red-100">
                      <Mail className="h-4 w-4" />
                    </Button>
                    <Button size="sm" className="h-8 gap-1.5 bg-red-600 hover:bg-red-700 text-white text-xs">
                      <Send className="h-3.5 w-3.5" />
                      Relancer
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer CTA */}
      <div className="border-t border-red-200 px-6 py-4">
        <Button variant="ghost" className="w-full h-10 gap-2 text-red-700 hover:bg-red-100 hover:text-red-800">
          <TrendingDown className="h-4 w-4" />
          Voir le rapport de recouvrement complet
          <ArrowRight className="h-4 w-4 ml-auto" />
        </Button>
      </div>
    </div>
  )
}
