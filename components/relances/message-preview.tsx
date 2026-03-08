"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Mail,
  Copy,
  Pencil,
  Send,
} from "lucide-react"

export function MessagePreview() {
  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-sky-50 ring-1 ring-sky-100">
            <Mail className="h-4 w-4 text-sky-600" />
          </div>
          <div>
            <h3 className="text-sm font-semibold text-foreground">Aperçu du message</h3>
            <p className="text-xs text-muted-foreground">Modèle de relance professionnelle</p>
          </div>
        </div>
        <Badge variant="outline" className="bg-sky-50 text-sky-700 border-sky-200 text-xs">
          Email
        </Badge>
      </div>

      {/* Email Preview */}
      <div className="p-5">
        <div className="rounded-lg border border-border/60 bg-muted/30 p-4">
          {/* Subject */}
          <div className="mb-4 border-b border-border/60 pb-3">
            <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground mb-1">Objet</p>
            <p className="text-sm font-medium text-foreground">
              Rappel : Facture #INV-2026-0891 en attente de règlement
            </p>
          </div>

          {/* Email Body */}
          <div className="space-y-4 text-sm text-foreground leading-relaxed">
            <p>Bonjour Sophie,</p>
            
            <p>
              Nous nous permettons de vous contacter concernant la facture 
              <span className="font-medium"> #INV-2026-0891</span> d'un montant de 
              <span className="font-semibold"> 4 800,00 EUR</span>, émise le 15 février 2026 
              et dont l'échéance était fixée au 1er mars 2026.
            </p>
            
            <p>
              À ce jour, nous n'avons pas encore reçu votre règlement. 
              Nous vous serions reconnaissants de bien vouloir procéder au paiement 
              dans les meilleurs délais.
            </p>
            
            <p>
              Si votre virement a été effectué entre-temps, nous vous prions de ne pas 
              tenir compte de ce message.
            </p>
            
            <p>
              Nous restons à votre disposition pour toute question.
            </p>
            
            <div className="pt-2">
              <p>Cordialement,</p>
              <p className="font-medium">L'équipe RenewFlow</p>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="border-t border-border/60 px-5 py-4">
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Copy className="h-4 w-4" />
            Copier
          </Button>
          <Button variant="outline" size="sm" className="flex-1 gap-2">
            <Pencil className="h-4 w-4" />
            Modifier
          </Button>
          <Button size="sm" className="flex-1 gap-2 bg-foreground text-background hover:bg-foreground/90">
            <Send className="h-4 w-4" />
            Envoyer
          </Button>
        </div>
      </div>
    </div>
  )
}
