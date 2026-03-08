"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Plus, CalendarClock, Building2, Package, CreditCard, Bell, FileText, Sparkles } from "lucide-react"

export function AddEcheanceSheet() {
  const [isOpen, setIsOpen] = useState(false)
  const [autoReminder, setAutoReminder] = useState(true)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button className="h-10 gap-2 shadow-sm">
          <Plus className="h-4 w-4" />
          Nouvelle échéance
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader className="pb-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground shadow-sm">
              <CalendarClock className="h-6 w-6 text-background" />
            </div>
            <div>
              <SheetTitle className="text-xl">Nouvelle échéance</SheetTitle>
              <SheetDescription>
                Créer une nouvelle échéance de paiement
              </SheetDescription>
            </div>
          </div>
        </SheetHeader>

        <form className="space-y-8">
          {/* Client Selection */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Building2 className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-foreground">Client</h4>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="client" className="text-xs font-medium text-muted-foreground">
                  Sélectionner un client existant
                </Label>
                <Select>
                  <SelectTrigger id="client" className="h-11 bg-background">
                    <SelectValue placeholder="Rechercher un client..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">
                      <div className="flex flex-col">
                        <span>Sophie Martin</span>
                        <span className="text-xs text-muted-foreground">TechVision SAS - SIRET: 812 345 678 00012</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="2">
                      <div className="flex flex-col">
                        <span>Pierre Dubois</span>
                        <span className="text-xs text-muted-foreground">GreenLogistics SARL - SIRET: 823 456 789 00023</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="3">
                      <div className="flex flex-col">
                        <span>Marie Lefèvre</span>
                        <span className="text-xs text-muted-foreground">Digital Agency Paris - SIRET: 834 567 890 00034</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="4">
                      <div className="flex flex-col">
                        <span>Jean-Claude Mercier</span>
                        <span className="text-xs text-muted-foreground">BuildPro Construction SAS - SIRET: 845 678 901 00045</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="5">
                      <div className="flex flex-col">
                        <span>François Bernard</span>
                        <span className="text-xs text-muted-foreground">AutoService Lyon SARL - SIRET: 867 890 123 00067</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Product & Amount */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Package className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-foreground">Détails de l'échéance</h4>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4 space-y-4">
              <div className="space-y-2">
                <Label htmlFor="product" className="text-xs font-medium text-muted-foreground">
                  Produit / Service
                </Label>
                <Select>
                  <SelectTrigger id="product" className="h-11 bg-background">
                    <SelectValue placeholder="Sélectionner un produit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="starter">
                      <div className="flex items-center gap-2">
                        <span>Plan Starter</span>
                        <Badge variant="outline" className="text-[10px]">99 EUR/mois</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="pro">
                      <div className="flex items-center gap-2">
                        <span>Plan Pro</span>
                        <Badge variant="outline" className="text-[10px]">299 EUR/mois</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="enterprise">
                      <div className="flex items-center gap-2">
                        <span>Suite Enterprise</span>
                        <Badge variant="outline" className="text-[10px]">Sur devis</Badge>
                      </div>
                    </SelectItem>
                    <SelectItem value="custom">Personnalisé</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="contractRef" className="text-xs font-medium text-muted-foreground">
                  Référence contrat
                </Label>
                <Input
                  id="contractRef"
                  placeholder="CTR-2026-XXXX"
                  className="h-11 bg-background font-mono"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="amount" className="text-xs font-medium text-muted-foreground">
                    Montant HT (EUR)
                  </Label>
                  <Input
                    id="amount"
                    type="number"
                    placeholder="0,00"
                    className="h-11 bg-background tabular-nums"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="frequency" className="text-xs font-medium text-muted-foreground">
                    Fréquence
                  </Label>
                  <Select>
                    <SelectTrigger id="frequency" className="h-11 bg-background">
                      <SelectValue placeholder="Fréquence" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="mensuel">Mensuel</SelectItem>
                      <SelectItem value="trimestriel">Trimestriel</SelectItem>
                      <SelectItem value="annuel">Annuel</SelectItem>
                      <SelectItem value="unique">Paiement unique</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CreditCard className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-foreground">Mode de paiement</h4>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
              <Select>
                <SelectTrigger className="h-11 bg-background">
                  <SelectValue placeholder="Sélectionner le mode de paiement" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="sepa">Prélèvement SEPA</SelectItem>
                  <SelectItem value="carte">Carte bancaire</SelectItem>
                  <SelectItem value="virement">Virement bancaire</SelectItem>
                  <SelectItem value="cheque">Chèque</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Date & Priority */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <CalendarClock className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-foreground">Planification</h4>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="dueDate" className="text-xs font-medium text-muted-foreground">
                    Date d'échéance
                  </Label>
                  <Input
                    id="dueDate"
                    type="date"
                    className="h-11 bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="priority" className="text-xs font-medium text-muted-foreground">
                    Priorité
                  </Label>
                  <Select>
                    <SelectTrigger id="priority" className="h-11 bg-background">
                      <SelectValue placeholder="Priorité" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="haute">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          Haute
                        </div>
                      </SelectItem>
                      <SelectItem value="moyenne">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-amber-500" />
                          Moyenne
                        </div>
                      </SelectItem>
                      <SelectItem value="faible">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-400" />
                          Faible
                        </div>
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </div>

          {/* Auto Reminder */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Bell className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-foreground">Rappels automatiques</h4>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">Activer les rappels automatiques</p>
                  <p className="text-xs text-muted-foreground mt-0.5">L'IA enverra des relances personnalisées</p>
                </div>
                <Switch 
                  checked={autoReminder}
                  onCheckedChange={setAutoReminder}
                />
              </div>
              
              {autoReminder && (
                <div className="space-y-2 pt-2 border-t border-border/60">
                  <Label htmlFor="reminderDays" className="text-xs font-medium text-muted-foreground">
                    Premier rappel avant échéance
                  </Label>
                  <Select defaultValue="7">
                    <SelectTrigger id="reminderDays" className="h-11 bg-background">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 jour avant</SelectItem>
                      <SelectItem value="3">3 jours avant</SelectItem>
                      <SelectItem value="7">7 jours avant</SelectItem>
                      <SelectItem value="14">14 jours avant</SelectItem>
                      <SelectItem value="30">30 jours avant</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
            </div>
          </div>

          {/* Notes */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <h4 className="text-sm font-semibold text-foreground">Notes internes</h4>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
              <Textarea
                id="notes"
                placeholder="Ajouter des notes sur cette échéance (visible uniquement par votre équipe)..."
                className="min-h-[100px] resize-none bg-background"
              />
            </div>
          </div>
        </form>

        <SheetFooter className="mt-8 flex-col gap-3 sm:flex-row">
          <SheetClose asChild>
            <Button variant="outline" className="w-full h-11 sm:w-auto">
              Annuler
            </Button>
          </SheetClose>
          <Button type="submit" className="w-full h-11 sm:w-auto gap-2">
            <Sparkles className="h-4 w-4" />
            Créer l'échéance
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
