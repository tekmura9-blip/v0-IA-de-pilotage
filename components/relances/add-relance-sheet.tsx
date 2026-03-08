"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Plus, Bell, Sparkles } from "lucide-react"

export function AddRelanceSheet() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="sm" className="h-10 gap-2 bg-foreground text-background hover:bg-foreground/90 shadow-sm">
          <Plus className="h-4 w-4" />
          <span className="hidden sm:inline">Nouvelle relance</span>
        </Button>
      </SheetTrigger>
      <SheetContent className="w-full overflow-y-auto sm:max-w-lg">
        <SheetHeader className="space-y-3 pb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-foreground shadow-sm">
            <Bell className="h-6 w-6 text-background" />
          </div>
          <div>
            <SheetTitle className="text-xl">Nouvelle relance</SheetTitle>
            <SheetDescription className="mt-1">
              Créez une nouvelle relance client pour suivre vos paiements
            </SheetDescription>
          </div>
        </SheetHeader>

        <div className="space-y-6">
          {/* Client Selection */}
          <div className="space-y-2">
            <Label htmlFor="client" className="text-sm font-medium">
              Client <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger id="client" className="h-11">
                <SelectValue placeholder="Sélectionner un client" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sophie">Sophie Martin - TechVision SAS</SelectItem>
                <SelectItem value="pierre">Pierre Dubois - GreenLogistics SARL</SelectItem>
                <SelectItem value="marie">Marie Lefèvre - Digital Agency Paris</SelectItem>
                <SelectItem value="jean">Jean-Claude Mercier - BuildPro Construction SAS</SelectItem>
                <SelectItem value="isabelle">Isabelle Moreau - Cuisine Plus SA</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Type Selection */}
          <div className="space-y-2">
            <Label htmlFor="type" className="text-sm font-medium">
              Type de relance <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger id="type" className="h-11">
                <SelectValue placeholder="Sélectionner le type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paiement_retard">Paiement en retard</SelectItem>
                <SelectItem value="echeance">Échéance à venir</SelectItem>
                <SelectItem value="renouvellement">Renouvellement</SelectItem>
                <SelectItem value="commerciale">Relance commerciale</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Subject */}
          <div className="space-y-2">
            <Label htmlFor="subject" className="text-sm font-medium">
              Objet <span className="text-red-500">*</span>
            </Label>
            <Input
              id="subject"
              placeholder="Ex: Rappel de paiement - Facture #INV-2026"
              className="h-11"
            />
          </div>

          {/* Channel Selection */}
          <div className="space-y-2">
            <Label htmlFor="channel" className="text-sm font-medium">
              Canal d'envoi <span className="text-red-500">*</span>
            </Label>
            <Select>
              <SelectTrigger id="channel" className="h-11">
                <SelectValue placeholder="Sélectionner le canal" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="email">Email</SelectItem>
                <SelectItem value="telephone">Téléphone</SelectItem>
                <SelectItem value="sms">SMS</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Scheduled Date */}
          <div className="space-y-2">
            <Label htmlFor="date" className="text-sm font-medium">
              Date d'envoi prévue <span className="text-red-500">*</span>
            </Label>
            <Input
              id="date"
              type="date"
              className="h-11"
            />
          </div>

          {/* Priority Selection */}
          <div className="space-y-2">
            <Label htmlFor="priority" className="text-sm font-medium">
              Priorité
            </Label>
            <Select defaultValue="moyenne">
              <SelectTrigger id="priority" className="h-11">
                <SelectValue placeholder="Sélectionner la priorité" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="haute">Haute</SelectItem>
                <SelectItem value="moyenne">Moyenne</SelectItem>
                <SelectItem value="faible">Faible</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Message */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="message" className="text-sm font-medium">
                Message
              </Label>
              <Button variant="ghost" size="sm" className="h-7 gap-1.5 text-xs text-muted-foreground hover:text-foreground">
                <Sparkles className="h-3.5 w-3.5" />
                Générer avec IA
              </Button>
            </div>
            <Textarea
              id="message"
              placeholder="Rédigez votre message de relance..."
              className="min-h-[120px] resize-none"
            />
          </div>

          {/* Automation Toggle */}
          <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-50 ring-1 ring-indigo-100">
                <Sparkles className="h-4 w-4 text-indigo-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">Activer l'automatisation</p>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  Programmez des relances automatiques si aucune réponse n'est reçue
                </p>
              </div>
              <Select defaultValue="none">
                <SelectTrigger className="w-[140px] h-9">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="none">Désactivé</SelectItem>
                  <SelectItem value="3d">Après 3 jours</SelectItem>
                  <SelectItem value="7d">Après 7 jours</SelectItem>
                  <SelectItem value="14d">Après 14 jours</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <SheetFooter className="mt-8 flex-col gap-3 sm:flex-row">
          <SheetClose asChild>
            <Button variant="outline" className="w-full sm:w-auto">
              Annuler
            </Button>
          </SheetClose>
          <Button className="w-full gap-2 bg-foreground text-background hover:bg-foreground/90 sm:w-auto">
            <Plus className="h-4 w-4" />
            Créer la relance
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
