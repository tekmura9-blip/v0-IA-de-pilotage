"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Checkbox } from "@/components/ui/checkbox"
import {
  MoreHorizontal,
  Eye,
  Pencil,
  Send,
  X,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Building2,
  Mail,
  Phone,
  MessageSquare,
} from "lucide-react"

interface Relance {
  id: string
  clientName: string
  clientEmail: string
  company: string
  type: "paiement_retard" | "echeance" | "renouvellement" | "commerciale"
  subject: string
  scheduledDate: string
  channel: "email" | "telephone" | "sms"
  status: "a_envoyer" | "envoyee" | "reponse" | "en_attente" | "automatique"
  priority: "haute" | "moyenne" | "faible"
}

const relances: Relance[] = [
  {
    id: "1",
    clientName: "Sophie Martin",
    clientEmail: "sophie.martin@techvision.fr",
    company: "TechVision SAS",
    type: "paiement_retard",
    subject: "Rappel de paiement - Facture #INV-2026-0891",
    scheduledDate: "10 mars 2026",
    channel: "email",
    status: "a_envoyer",
    priority: "haute",
  },
  {
    id: "2",
    clientName: "Pierre Dubois",
    clientEmail: "p.dubois@greenlogistics.fr",
    company: "GreenLogistics SARL",
    type: "echeance",
    subject: "Échéance prochaine - Abonnement Pro",
    scheduledDate: "08 mars 2026",
    channel: "email",
    status: "envoyee",
    priority: "moyenne",
  },
  {
    id: "3",
    clientName: "Marie Lefèvre",
    clientEmail: "m.lefevre@digitalagency.fr",
    company: "Digital Agency Paris",
    type: "renouvellement",
    subject: "Renouvellement annuel - Suite Enterprise",
    scheduledDate: "12 mars 2026",
    channel: "telephone",
    status: "en_attente",
    priority: "haute",
  },
  {
    id: "4",
    clientName: "Jean-Claude Mercier",
    clientEmail: "jc.mercier@buildpro.fr",
    company: "BuildPro Construction SAS",
    type: "commerciale",
    subject: "Offre spéciale - Mise à niveau Enterprise",
    scheduledDate: "15 mars 2026",
    channel: "email",
    status: "automatique",
    priority: "faible",
  },
  {
    id: "5",
    clientName: "Isabelle Moreau",
    clientEmail: "i.moreau@cuisineplus.fr",
    company: "Cuisine Plus SA",
    type: "paiement_retard",
    subject: "Second rappel - Facture #INV-2026-0634",
    scheduledDate: "08 mars 2026",
    channel: "telephone",
    status: "a_envoyer",
    priority: "haute",
  },
  {
    id: "6",
    clientName: "François Bernard",
    clientEmail: "f.bernard@autoservice.fr",
    company: "AutoService Lyon SARL",
    type: "echeance",
    subject: "Rappel échéance - Abonnement Enterprise",
    scheduledDate: "18 mars 2026",
    channel: "email",
    status: "automatique",
    priority: "moyenne",
  },
  {
    id: "7",
    clientName: "Claire Petit",
    clientEmail: "c.petit@mediasante.fr",
    company: "MédiaSanté SAS",
    type: "renouvellement",
    subject: "Confirmation de renouvellement",
    scheduledDate: "09 mars 2026",
    channel: "email",
    status: "reponse",
    priority: "faible",
  },
  {
    id: "8",
    clientName: "Antoine Richard",
    clientEmail: "a.richard@sportclub.fr",
    company: "Sport Club Premium SA",
    type: "paiement_retard",
    subject: "Rappel urgent - Facture #INV-2026-0756",
    scheduledDate: "08 mars 2026",
    channel: "sms",
    status: "envoyee",
    priority: "haute",
  },
  {
    id: "9",
    clientName: "Nathalie Girard",
    clientEmail: "n.girard@beautylab.fr",
    company: "Beauty Lab Paris SARL",
    type: "commerciale",
    subject: "Découvrez nos nouvelles fonctionnalités",
    scheduledDate: "20 mars 2026",
    channel: "email",
    status: "automatique",
    priority: "faible",
  },
  {
    id: "10",
    clientName: "Philippe Laurent",
    clientEmail: "p.laurent@consultinggroup.fr",
    company: "Consulting Group SAS",
    type: "renouvellement",
    subject: "Renouvellement anticipé - Offre -15%",
    scheduledDate: "22 mars 2026",
    channel: "email",
    status: "a_envoyer",
    priority: "moyenne",
  },
]

const typeConfig = {
  paiement_retard: { 
    label: "Paiement en retard", 
    className: "bg-red-50 text-red-700 border-red-200"
  },
  echeance: { 
    label: "Échéance à venir", 
    className: "bg-amber-50 text-amber-700 border-amber-200"
  },
  renouvellement: { 
    label: "Renouvellement", 
    className: "bg-sky-50 text-sky-700 border-sky-200"
  },
  commerciale: { 
    label: "Relance commerciale", 
    className: "bg-violet-50 text-violet-700 border-violet-200"
  },
}

const statusConfig = {
  a_envoyer: { 
    label: "À envoyer", 
    className: "bg-amber-50 text-amber-700 border-amber-200",
    dot: "bg-amber-500"
  },
  envoyee: { 
    label: "Envoyée", 
    className: "bg-sky-50 text-sky-700 border-sky-200",
    dot: "bg-sky-500"
  },
  reponse: { 
    label: "Réponse reçue", 
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-500"
  },
  en_attente: { 
    label: "En attente", 
    className: "bg-slate-50 text-slate-700 border-slate-200",
    dot: "bg-slate-500"
  },
  automatique: { 
    label: "Automatique", 
    className: "bg-indigo-50 text-indigo-700 border-indigo-200",
    dot: "bg-indigo-500"
  },
}

const priorityConfig = {
  haute: { 
    label: "Haute", 
    className: "bg-red-50 text-red-700 border-red-200"
  },
  moyenne: { 
    label: "Moyenne", 
    className: "bg-amber-50 text-amber-700 border-amber-200"
  },
  faible: { 
    label: "Faible", 
    className: "bg-slate-50 text-slate-600 border-slate-200"
  },
}

const channelConfig = {
  email: { label: "Email", icon: Mail, className: "text-sky-600" },
  telephone: { label: "Téléphone", icon: Phone, className: "text-emerald-600" },
  sms: { label: "SMS", icon: MessageSquare, className: "text-violet-600" },
}

export function RelancesTable() {
  const [selectedRelances, setSelectedRelances] = useState<string[]>([])

  const toggleRelance = (id: string) => {
    setSelectedRelances((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedRelances((prev) =>
      prev.length === relances.length ? [] : relances.map((r) => r.id)
    )
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
    <div className="space-y-4">
      {/* Table Card */}
      <div className="rounded-xl border border-border/60 bg-card shadow-sm">
        {/* Table Header */}
        <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">Liste des relances</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {relances.length} relances au total
              {selectedRelances.length > 0 && (
                <span className="ml-2 text-foreground font-medium">
                  - {selectedRelances.length} sélectionnée(s)
                </span>
              )}
            </p>
          </div>
          {selectedRelances.length > 0 && (
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="h-9 gap-2 bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:text-sky-800">
                <Send className="h-4 w-4" />
                Envoyer
              </Button>
              <Button variant="outline" size="sm" className="h-9 gap-2">
                <X className="h-4 w-4" />
                Annuler
              </Button>
            </div>
          )}
        </div>
        
        {/* Table */}
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent border-b border-border/60">
                <TableHead className="w-12 pl-6">
                  <Checkbox
                    checked={selectedRelances.length === relances.length && relances.length > 0}
                    onCheckedChange={toggleAll}
                    aria-label="Sélectionner tout"
                  />
                </TableHead>
                <TableHead className="min-w-[200px]">
                  <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
                    Client / Entreprise
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </Button>
                </TableHead>
                <TableHead className="min-w-[130px]">
                  <span className="text-xs font-semibold text-muted-foreground">Type</span>
                </TableHead>
                <TableHead className="min-w-[200px]">
                  <span className="text-xs font-semibold text-muted-foreground">Objet</span>
                </TableHead>
                <TableHead className="min-w-[110px]">
                  <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
                    Date prévue
                    <ArrowUpDown className="h-3.5 w-3.5" />
                  </Button>
                </TableHead>
                <TableHead className="min-w-[90px]">
                  <span className="text-xs font-semibold text-muted-foreground">Canal</span>
                </TableHead>
                <TableHead className="min-w-[110px]">
                  <span className="text-xs font-semibold text-muted-foreground">Statut</span>
                </TableHead>
                <TableHead className="min-w-[90px]">
                  <span className="text-xs font-semibold text-muted-foreground">Priorité</span>
                </TableHead>
                <TableHead className="w-14 pr-6">
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {relances.map((relance) => {
                const type = typeConfig[relance.type]
                const status = statusConfig[relance.status]
                const priority = priorityConfig[relance.priority]
                const channel = channelConfig[relance.channel]
                const ChannelIcon = channel.icon
                const isSelected = selectedRelances.includes(relance.id)
                
                return (
                  <TableRow
                    key={relance.id}
                    className={`group transition-colors ${isSelected ? "bg-muted/50" : "hover:bg-muted/30"}`}
                    data-state={isSelected ? "selected" : undefined}
                  >
                    <TableCell className="pl-6">
                      <Checkbox
                        checked={isSelected}
                        onCheckedChange={() => toggleRelance(relance.id)}
                        aria-label={`Sélectionner ${relance.clientName}`}
                      />
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                          <AvatarFallback className="bg-muted text-xs font-semibold text-muted-foreground">
                            {getInitials(relance.clientName)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-foreground leading-tight">{relance.clientName}</span>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <Building2 className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{relance.company}</span>
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs font-medium ${type.className}`}>
                        {type.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-foreground line-clamp-1">{relance.subject}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-sm text-foreground">{relance.scheduledDate}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <ChannelIcon className={`h-4 w-4 ${channel.className}`} />
                        <span className="text-sm text-muted-foreground">{channel.label}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs font-medium ${status.className}`}>
                        <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${status.dot}`} />
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`text-xs font-medium ${priority.className}`}>
                        {priority.label}
                      </Badge>
                    </TableCell>
                    <TableCell className="pr-6">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100 data-[state=open]:opacity-100 transition-opacity"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48">
                          <DropdownMenuItem className="gap-2.5 cursor-pointer">
                            <Eye className="h-4 w-4 text-muted-foreground" />
                            Voir
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2.5 cursor-pointer">
                            <Pencil className="h-4 w-4 text-muted-foreground" />
                            Modifier
                          </DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem className="gap-2.5 cursor-pointer text-sky-600 focus:text-sky-600">
                            <Send className="h-4 w-4" />
                            Envoyer
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2.5 cursor-pointer text-red-600 focus:text-red-600">
                            <X className="h-4 w-4" />
                            Annuler
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

        {/* Pagination */}
        <div className="flex items-center justify-between border-t border-border/60 px-6 py-4">
          <p className="text-sm text-muted-foreground">
            Affichage de <span className="font-medium text-foreground">1</span> à{" "}
            <span className="font-medium text-foreground">10</span> sur{" "}
            <span className="font-medium text-foreground">{relances.length}</span> relances
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-1" disabled>
              <ChevronLeft className="h-4 w-4" />
              Précédent
            </Button>
            <Button variant="outline" size="sm" className="h-9 gap-1">
              Suivant
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
