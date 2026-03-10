"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  LayoutGrid,
  CalendarClock,
  Bell,
  History,
  StickyNote,
  MoreHorizontal,
  Eye,
  Pencil,
  CheckCircle,
  Send,
  Mail,
  Phone,
  MessageSquare,
  Plus,
  User,
  CreditCard,
  FileText,
  AlertCircle,
  RefreshCw,
} from "lucide-react"

const tabs = [
  { id: "overview", label: "Vue d'ensemble", icon: LayoutGrid },
  { id: "echeances", label: "Échéances", icon: CalendarClock },
  { id: "relances", label: "Relances", icon: Bell },
  { id: "historique", label: "Historique", icon: History },
  { id: "notes", label: "Notes", icon: StickyNote },
]

const echeances = [
  { date: "15 mars 2026", amount: "800 EUR", frequency: "Mensuel", status: "a_venir", paymentDate: "-" },
  { date: "15 fév. 2026", amount: "800 EUR", frequency: "Mensuel", status: "paye", paymentDate: "14 fév. 2026" },
  { date: "15 janv. 2026", amount: "800 EUR", frequency: "Mensuel", status: "paye", paymentDate: "15 janv. 2026" },
  { date: "15 déc. 2025", amount: "800 EUR", frequency: "Mensuel", status: "en_retard", paymentDate: "-" },
  { date: "15 nov. 2025", amount: "800 EUR", frequency: "Mensuel", status: "en_retard", paymentDate: "-" },
  { date: "15 oct. 2025", amount: "800 EUR", frequency: "Mensuel", status: "paye", paymentDate: "16 oct. 2025" },
]

const relances = [
  { date: "28 fév. 2026", type: "Paiement en retard", channel: "email", subject: "Rappel de paiement - Échéance dépassée", status: "envoyee", response: true },
  { date: "20 fév. 2026", type: "Paiement en retard", channel: "telephone", subject: "Appel de suivi paiement", status: "reponse", response: true },
  { date: "10 janv. 2026", type: "Renouvellement", channel: "email", subject: "Votre renouvellement annuel approche", status: "automatique", response: false },
  { date: "01 déc. 2025", type: "Rappel avant échéance", channel: "sms", subject: "Échéance dans 14 jours", status: "envoyee", response: false },
]

const historique = [
  { date: "28 fév. 2026", event: "Relance envoyée", description: "Email de rappel pour paiement en retard", icon: Mail, color: "text-amber-600 bg-amber-50" },
  { date: "14 fév. 2026", event: "Paiement reçu", description: "Échéance de février - 800 EUR", icon: CreditCard, color: "text-emerald-600 bg-emerald-50" },
  { date: "10 janv. 2026", event: "Relance automatique", description: "Email de renouvellement annuel", icon: RefreshCw, color: "text-sky-600 bg-sky-50" },
  { date: "15 mars 2023", event: "Abonnement souscrit", description: "Suite Enterprise - Annuel", icon: FileText, color: "text-foreground bg-muted" },
  { date: "10 mars 2023", event: "Client créé", description: "Compte client créé dans RenewFlow", icon: User, color: "text-foreground bg-muted" },
]

const notes = [
  { id: 1, author: "Marie Dupont", date: "25 fév. 2026", content: "Client très réactif par téléphone. Préfère être contacté le matin avant 10h." },
  { id: 2, author: "Thomas Martin", date: "15 janv. 2026", content: "Discussion sur un possible upgrade vers le plan Enterprise Plus. À recontacter en mars." },
  { id: 3, author: "Marie Dupont", date: "20 déc. 2025", content: "Congés annuels du 23 décembre au 3 janvier. Ne pas relancer pendant cette période." },
]

const statusConfig = {
  paye: { label: "Payé", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  a_venir: { label: "À venir", className: "bg-sky-50 text-sky-700 border-sky-200" },
  en_retard: { label: "En retard", className: "bg-red-50 text-red-700 border-red-200" },
  annule: { label: "Annulé", className: "bg-muted text-muted-foreground border-border" },
}

const relanceStatusConfig = {
  envoyee: { label: "Envoyée", className: "bg-sky-50 text-sky-700 border-sky-200" },
  a_envoyer: { label: "À envoyer", className: "bg-amber-50 text-amber-700 border-amber-200" },
  reponse: { label: "Réponse reçue", className: "bg-emerald-50 text-emerald-700 border-emerald-200" },
  automatique: { label: "Automatique", className: "bg-muted text-muted-foreground border-border" },
}

const channelIcons = {
  email: Mail,
  telephone: Phone,
  sms: MessageSquare,
}

export function ClientTabs() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      {/* Tab Navigation */}
      <div className="flex overflow-x-auto border-b border-border/60">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex shrink-0 items-center gap-2 border-b-2 px-4 py-3.5 text-sm font-medium transition-colors ${
              activeTab === tab.id
                ? "border-foreground text-foreground"
                : "border-transparent text-muted-foreground hover:border-border hover:text-foreground"
            }`}
          >
            <tab.icon className="h-4 w-4" />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-5">
        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Résumé du compte</p>
                <p className="mt-2 text-sm text-foreground">Client fidèle depuis 3 ans avec un historique de paiement généralement régulier. 2 retards de paiement en cours.</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Dernière interaction</p>
                <p className="mt-2 text-sm text-foreground">Appel téléphonique le 20 février 2026 concernant les paiements en retard.</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Niveau de risque</p>
                <div className="mt-2 flex items-center gap-2">
                  <Badge variant="outline" className="bg-amber-50 text-amber-700 border-amber-200">
                    <AlertCircle className="mr-1.5 h-3 w-3" />
                    Moyen
                  </Badge>
                  <span className="text-xs text-muted-foreground">2 paiements en retard</span>
                </div>
              </div>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Fréquence de facturation</p>
                <p className="mt-2 text-sm font-medium text-foreground">Mensuel - 800 EUR/mois</p>
                <p className="mt-1 text-xs text-muted-foreground">Prochain prélèvement : 15 mars 2026</p>
              </div>
              <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Revenu généré (12 mois)</p>
                <p className="mt-2 text-sm font-medium text-foreground">8 800 EUR</p>
                <p className="mt-1 text-xs text-muted-foreground">92% du montant prévu (1 600 EUR impayés)</p>
              </div>
            </div>

            <div className="rounded-lg border border-border/60 bg-muted/20 p-4">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Commentaire interne</p>
              <p className="mt-2 text-sm text-foreground">Entreprise familiale de menuiserie, très attachée à la qualité du service. Le contact principal est réactif mais parfois débordé en fin de mois. Privilégier les relances en début de mois.</p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Envoyer un email
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                Appeler
              </Button>
              <Button size="sm" variant="outline" className="gap-2">
                <Bell className="h-4 w-4" />
                Programmer une relance
              </Button>
            </div>
          </div>
        )}

        {/* Echeances Tab */}
        {activeTab === "echeances" && (
          <div className="overflow-x-auto -mx-5">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="pl-5">Date d'échéance</TableHead>
                  <TableHead>Montant</TableHead>
                  <TableHead>Fréquence</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Date de paiement</TableHead>
                  <TableHead className="pr-5 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {echeances.map((echeance, index) => {
                  const status = statusConfig[echeance.status as keyof typeof statusConfig]
                  return (
                    <TableRow key={index}>
                      <TableCell className="pl-5 font-medium">{echeance.date}</TableCell>
                      <TableCell className="tabular-nums">{echeance.amount}</TableCell>
                      <TableCell>{echeance.frequency}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={status.className}>
                          {status.label}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-muted-foreground">{echeance.paymentDate}</TableCell>
                      <TableCell className="pr-5 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                              <Eye className="h-4 w-4" /> Voir
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Pencil className="h-4 w-4" /> Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <CheckCircle className="h-4 w-4" /> Marquer comme payé
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Bell className="h-4 w-4" /> Relancer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Relances Tab */}
        {activeTab === "relances" && (
          <div className="overflow-x-auto -mx-5">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="pl-5">Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Canal</TableHead>
                  <TableHead className="min-w-[200px]">Objet</TableHead>
                  <TableHead>Statut</TableHead>
                  <TableHead>Réponse</TableHead>
                  <TableHead className="pr-5 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {relances.map((relance, index) => {
                  const status = relanceStatusConfig[relance.status as keyof typeof relanceStatusConfig]
                  const ChannelIcon = channelIcons[relance.channel as keyof typeof channelIcons]
                  return (
                    <TableRow key={index}>
                      <TableCell className="pl-5 font-medium">{relance.date}</TableCell>
                      <TableCell>{relance.type}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1.5">
                          <ChannelIcon className="h-3.5 w-3.5 text-muted-foreground" />
                          <span className="capitalize">{relance.channel}</span>
                        </div>
                      </TableCell>
                      <TableCell className="max-w-[200px] truncate text-muted-foreground">{relance.subject}</TableCell>
                      <TableCell>
                        <Badge variant="outline" className={status.className}>
                          {status.label}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        {relance.response ? (
                          <CheckCircle className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <span className="text-muted-foreground">-</span>
                        )}
                      </TableCell>
                      <TableCell className="pr-5 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem className="gap-2">
                              <Eye className="h-4 w-4" /> Voir le message
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Send className="h-4 w-4" /> Renvoyer
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2">
                              <Pencil className="h-4 w-4" /> Modifier
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
        )}

        {/* Historique Tab */}
        {activeTab === "historique" && (
          <div className="relative space-y-0">
            {historique.map((item, index) => (
              <div key={index} className="relative flex gap-4 pb-6 last:pb-0">
                {index < historique.length - 1 && (
                  <div className="absolute left-[19px] top-10 bottom-0 w-px bg-border" />
                )}
                <div className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.color}`}>
                  <item.icon className="h-4 w-4" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-medium text-foreground">{item.event}</span>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Notes Tab */}
        {activeTab === "notes" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm text-muted-foreground">{notes.length} notes</p>
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Ajouter une note
              </Button>
            </div>
            
            <div className="space-y-4">
              {notes.map((note) => (
                <div key={note.id} className="rounded-lg border border-border/60 bg-muted/20 p-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback className="bg-foreground text-xs text-background">
                          {note.author.split(" ").map(n => n[0]).join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium text-foreground">{note.author}</p>
                        <p className="text-xs text-muted-foreground">{note.date}</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 shrink-0">
                      <MoreHorizontal className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="mt-3 text-sm text-foreground">{note.content}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <Textarea 
                placeholder="Ajouter une note..." 
                className="min-h-[80px] resize-none border-border/60 bg-background"
              />
              <div className="mt-2 flex justify-end">
                <Button size="sm">Enregistrer la note</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
