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
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Checkbox } from "@/components/ui/checkbox"
import {
  MoreHorizontal,
  Eye,
  Pencil,
  CheckCircle2,
  Send,
  ArrowUpDown,
  ChevronLeft,
  ChevronRight,
  Building2,
  Calendar,
  CreditCard,
  FileText,
  Phone,
} from "lucide-react"

interface Echeance {
  id: string
  clientName: string
  clientEmail: string
  clientPhone: string
  company: string
  siret: string
  product: string
  contractRef: string
  amount: number
  dueDate: string
  daysUntilDue: number
  frequency: "mensuel" | "trimestriel" | "annuel"
  status: "paye" | "a_venir" | "en_retard" | "a_risque"
  priority: "haute" | "moyenne" | "faible"
  paymentMethod: string
}

const echeances: Echeance[] = [
  {
    id: "1",
    clientName: "Sophie Martin",
    clientEmail: "sophie.martin@techvision.fr",
    clientPhone: "+33 6 12 34 56 78",
    company: "TechVision SAS",
    siret: "812 345 678 00012",
    product: "Suite Enterprise",
    contractRef: "CTR-2024-0891",
    amount: 4800,
    dueDate: "10 mars 2026",
    daysUntilDue: 2,
    frequency: "annuel",
    status: "a_venir",
    priority: "haute",
    paymentMethod: "Prélèvement SEPA",
  },
  {
    id: "2",
    clientName: "Pierre Dubois",
    clientEmail: "p.dubois@greenlogistics.fr",
    clientPhone: "+33 6 23 45 67 89",
    company: "GreenLogistics SARL",
    siret: "823 456 789 00023",
    product: "Plan Pro",
    contractRef: "CTR-2024-0742",
    amount: 299,
    dueDate: "06 mars 2026",
    daysUntilDue: -2,
    frequency: "mensuel",
    status: "en_retard",
    priority: "haute",
    paymentMethod: "Carte bancaire",
  },
  {
    id: "3",
    clientName: "Marie Lefèvre",
    clientEmail: "m.lefevre@digitalagency.fr",
    clientPhone: "+33 6 34 56 78 90",
    company: "Digital Agency Paris",
    siret: "834 567 890 00034",
    product: "Suite Enterprise",
    contractRef: "CTR-2024-0523",
    amount: 5400,
    dueDate: "12 mars 2026",
    daysUntilDue: 4,
    frequency: "annuel",
    status: "a_risque",
    priority: "haute",
    paymentMethod: "Virement bancaire",
  },
  {
    id: "4",
    clientName: "Jean-Claude Mercier",
    clientEmail: "jc.mercier@buildpro.fr",
    clientPhone: "+33 6 45 67 89 01",
    company: "BuildPro Construction SAS",
    siret: "845 678 901 00045",
    product: "Plan Starter",
    contractRef: "CTR-2025-0089",
    amount: 99,
    dueDate: "15 mars 2026",
    daysUntilDue: 7,
    frequency: "mensuel",
    status: "a_venir",
    priority: "moyenne",
    paymentMethod: "Prélèvement SEPA",
  },
  {
    id: "5",
    clientName: "Isabelle Moreau",
    clientEmail: "i.moreau@cuisineplus.fr",
    clientPhone: "+33 6 56 78 90 12",
    company: "Cuisine Plus SA",
    siret: "856 789 012 00056",
    product: "Plan Pro",
    contractRef: "CTR-2024-0634",
    amount: 799,
    dueDate: "03 mars 2026",
    daysUntilDue: -5,
    frequency: "trimestriel",
    status: "en_retard",
    priority: "haute",
    paymentMethod: "Carte bancaire",
  },
  {
    id: "6",
    clientName: "François Bernard",
    clientEmail: "f.bernard@autoservice.fr",
    clientPhone: "+33 6 67 89 01 23",
    company: "AutoService Lyon SARL",
    siret: "867 890 123 00067",
    product: "Suite Enterprise",
    contractRef: "CTR-2024-0412",
    amount: 4200,
    dueDate: "18 mars 2026",
    daysUntilDue: 10,
    frequency: "annuel",
    status: "a_venir",
    priority: "moyenne",
    paymentMethod: "Virement bancaire",
  },
  {
    id: "7",
    clientName: "Claire Petit",
    clientEmail: "c.petit@mediasante.fr",
    clientPhone: "+33 6 78 90 12 34",
    company: "MédiaSanté SAS",
    siret: "878 901 234 00078",
    product: "Plan Pro",
    contractRef: "CTR-2024-0298",
    amount: 349,
    dueDate: "01 mars 2026",
    daysUntilDue: 0,
    frequency: "mensuel",
    status: "paye",
    priority: "faible",
    paymentMethod: "Prélèvement SEPA",
  },
  {
    id: "8",
    clientName: "Antoine Richard",
    clientEmail: "a.richard@sportclub.fr",
    clientPhone: "+33 6 89 01 23 45",
    company: "Sport Club Premium SA",
    siret: "889 012 345 00089",
    product: "Plan Starter",
    contractRef: "CTR-2024-0756",
    amount: 990,
    dueDate: "20 mars 2026",
    daysUntilDue: 12,
    frequency: "annuel",
    status: "a_risque",
    priority: "moyenne",
    paymentMethod: "Carte bancaire",
  },
  {
    id: "9",
    clientName: "Nathalie Girard",
    clientEmail: "n.girard@beautylab.fr",
    clientPhone: "+33 6 90 12 34 56",
    company: "Beauty Lab Paris SARL",
    siret: "890 123 456 00090",
    product: "Plan Pro",
    contractRef: "CTR-2025-0034",
    amount: 249,
    dueDate: "22 mars 2026",
    daysUntilDue: 14,
    frequency: "mensuel",
    status: "a_venir",
    priority: "faible",
    paymentMethod: "Prélèvement SEPA",
  },
  {
    id: "10",
    clientName: "Philippe Laurent",
    clientEmail: "p.laurent@consultinggroup.fr",
    clientPhone: "+33 6 01 23 45 67",
    company: "Consulting Group SAS",
    siret: "901 234 567 00101",
    product: "Suite Enterprise",
    contractRef: "CTR-2024-0189",
    amount: 7200,
    dueDate: "25 mars 2026",
    daysUntilDue: 17,
    frequency: "annuel",
    status: "a_venir",
    priority: "haute",
    paymentMethod: "Virement bancaire",
  },
  {
    id: "11",
    clientName: "Émilie Rousseau",
    clientEmail: "e.rousseau@mediafrance.fr",
    clientPhone: "+33 6 12 34 56 78",
    company: "Média France SA",
    siret: "912 345 678 00112",
    product: "Plan Pro",
    contractRef: "CTR-2024-0567",
    amount: 299,
    dueDate: "04 mars 2026",
    daysUntilDue: -4,
    frequency: "mensuel",
    status: "en_retard",
    priority: "moyenne",
    paymentMethod: "Carte bancaire",
  },
  {
    id: "12",
    clientName: "Marc Fontaine",
    clientEmail: "m.fontaine@logistiquepro.fr",
    clientPhone: "+33 6 23 45 67 89",
    company: "Logistique Pro SARL",
    siret: "923 456 789 00123",
    product: "Suite Enterprise",
    contractRef: "CTR-2024-0823",
    amount: 3600,
    dueDate: "28 mars 2026",
    daysUntilDue: 20,
    frequency: "annuel",
    status: "a_venir",
    priority: "faible",
    paymentMethod: "Prélèvement SEPA",
  },
]

const statusConfig = {
  paye: { 
    label: "Payé", 
    className: "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
    dot: "bg-emerald-500"
  },
  a_venir: { 
    label: "À venir", 
    className: "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100",
    dot: "bg-sky-500"
  },
  en_retard: { 
    label: "En retard", 
    className: "bg-red-50 text-red-700 border-red-200 hover:bg-red-100",
    dot: "bg-red-500"
  },
  a_risque: { 
    label: "À risque", 
    className: "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
    dot: "bg-amber-500"
  },
}

const priorityConfig = {
  haute: { 
    label: "Haute", 
    className: "bg-red-50 text-red-700 border-red-200",
    indicator: "text-red-500"
  },
  moyenne: { 
    label: "Moyenne", 
    className: "bg-amber-50 text-amber-700 border-amber-200",
    indicator: "text-amber-500"
  },
  faible: { 
    label: "Faible", 
    className: "bg-slate-50 text-slate-600 border-slate-200",
    indicator: "text-slate-400"
  },
}

const frequencyLabels = {
  mensuel: "Mensuel",
  trimestriel: "Trimestriel",
  annuel: "Annuel",
}

export function EcheancesTable() {
  const [selectedEcheances, setSelectedEcheances] = useState<string[]>([])

  const toggleEcheance = (id: string) => {
    setSelectedEcheances((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const toggleAll = () => {
    setSelectedEcheances((prev) =>
      prev.length === echeances.length ? [] : echeances.map((e) => e.id)
    )
  }

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

  const getDueDateLabel = (daysUntilDue: number) => {
    if (daysUntilDue < 0) {
      return `${Math.abs(daysUntilDue)}j en retard`
    } else if (daysUntilDue === 0) {
      return "Aujourd'hui"
    } else if (daysUntilDue === 1) {
      return "Demain"
    } else {
      return `Dans ${daysUntilDue}j`
    }
  }

  return (
    <TooltipProvider>
      <div className="space-y-4">
        {/* Table Card */}
        <div className="rounded-xl border border-border/60 bg-card shadow-sm">
          {/* Table Header */}
          <div className="flex items-center justify-between border-b border-border/60 px-6 py-4">
            <div>
              <h3 className="text-base font-semibold text-foreground">Liste des échéances</h3>
              <p className="mt-0.5 text-sm text-muted-foreground">
                {echeances.length} échéances au total
                {selectedEcheances.length > 0 && (
                  <span className="ml-2 text-foreground font-medium">
                    - {selectedEcheances.length} sélectionnée(s)
                  </span>
                )}
              </p>
            </div>
            {selectedEcheances.length > 0 && (
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="h-9 gap-2 bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100 hover:text-emerald-800">
                  <CheckCircle2 className="h-4 w-4" />
                  Marquer payé
                </Button>
                <Button variant="outline" size="sm" className="h-9 gap-2 bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-100 hover:text-sky-800">
                  <Send className="h-4 w-4" />
                  Relancer
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
                      checked={selectedEcheances.length === echeances.length && echeances.length > 0}
                      onCheckedChange={toggleAll}
                      aria-label="Sélectionner tout"
                    />
                  </TableHead>
                  <TableHead className="min-w-[220px]">
                    <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
                      Client / Entreprise
                      <ArrowUpDown className="h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="min-w-[140px]">
                    <span className="text-xs font-semibold text-muted-foreground">Produit / Contrat</span>
                  </TableHead>
                  <TableHead className="min-w-[110px] text-right">
                    <Button variant="ghost" size="sm" className="-mr-3 h-8 gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
                      Montant
                      <ArrowUpDown className="h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="min-w-[130px]">
                    <Button variant="ghost" size="sm" className="-ml-3 h-8 gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground">
                      Échéance
                      <ArrowUpDown className="h-3.5 w-3.5" />
                    </Button>
                  </TableHead>
                  <TableHead className="min-w-[100px]">
                    <span className="text-xs font-semibold text-muted-foreground">Fréquence</span>
                  </TableHead>
                  <TableHead className="min-w-[100px]">
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
                {echeances.map((echeance) => {
                  const status = statusConfig[echeance.status]
                  const priority = priorityConfig[echeance.priority]
                  const isSelected = selectedEcheances.includes(echeance.id)
                  
                  return (
                    <TableRow
                      key={echeance.id}
                      className={`group transition-colors ${isSelected ? "bg-muted/50" : "hover:bg-muted/30"}`}
                      data-state={isSelected ? "selected" : undefined}
                    >
                      <TableCell className="pl-6">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={() => toggleEcheance(echeance.id)}
                          aria-label={`Sélectionner ${echeance.clientName}`}
                        />
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 border-2 border-background shadow-sm">
                            <AvatarFallback className="bg-muted text-xs font-semibold text-muted-foreground">
                              {getInitials(echeance.clientName)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex flex-col">
                            <span className="text-sm font-medium text-foreground leading-tight">{echeance.clientName}</span>
                            <div className="flex items-center gap-1.5 mt-0.5">
                              <Building2 className="h-3 w-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{echeance.company}</span>
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-foreground">{echeance.product}</span>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <FileText className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground font-mono">{echeance.contractRef}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-bold tabular-nums text-foreground">
                            {formatAmount(echeance.amount)}
                          </span>
                          <div className="flex items-center gap-1.5 mt-0.5">
                            <CreditCard className="h-3 w-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{echeance.paymentMethod}</span>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col">
                          <span className="text-sm text-foreground">{echeance.dueDate}</span>
                          <span className={`text-xs font-medium ${
                            echeance.daysUntilDue < 0 
                              ? "text-red-600" 
                              : echeance.daysUntilDue <= 3 
                                ? "text-amber-600" 
                                : "text-muted-foreground"
                          }`}>
                            {getDueDateLabel(echeance.daysUntilDue)}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-xs font-medium bg-background">
                          {frequencyLabels[echeance.frequency]}
                        </Badge>
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
                          <DropdownMenuContent align="end" className="w-52">
                            <DropdownMenuItem className="gap-2.5 cursor-pointer">
                              <Eye className="h-4 w-4 text-muted-foreground" />
                              Voir les détails
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2.5 cursor-pointer">
                              <Pencil className="h-4 w-4 text-muted-foreground" />
                              Modifier
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2.5 cursor-pointer">
                              <Phone className="h-4 w-4 text-muted-foreground" />
                              Appeler le client
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="gap-2.5 cursor-pointer text-emerald-600 focus:text-emerald-600">
                              <CheckCircle2 className="h-4 w-4" />
                              Marquer comme payé
                            </DropdownMenuItem>
                            <DropdownMenuItem className="gap-2.5 cursor-pointer text-sky-600 focus:text-sky-600">
                              <Send className="h-4 w-4" />
                              Envoyer une relance
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
        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            Affichage de <span className="font-medium text-foreground">1</span> à{" "}
            <span className="font-medium text-foreground">12</span> sur{" "}
            <span className="font-medium text-foreground">34</span> échéances
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="h-9 gap-1.5 px-3">
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Précédent</span>
            </Button>
            <div className="flex items-center gap-1">
              <Button size="sm" className="h-9 w-9 bg-foreground text-background hover:bg-foreground/90">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-9 w-9">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-9 w-9">
                3
              </Button>
            </div>
            <Button variant="outline" size="sm" className="h-9 gap-1.5 px-3">
              <span className="hidden sm:inline">Suivant</span>
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </TooltipProvider>
  )
}
