"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { HelpCircle } from "lucide-react"

const faqItems = [
  {
    question: "Quels formats de fichiers puis-je importer ?",
    answer:
      "RenewFlow supporte les formats CSV et XLSX (Excel). Vous pouvez importer vos clients, abonnements et échéances depuis ces formats. Notre assistant d'import vous guidera dans le mapping des colonnes.",
  },
  {
    question: "Quels types d'abonnements puis-je gérer ?",
    answer:
      "Vous pouvez gérer des abonnements mensuels, trimestriels et annuels. Chaque type peut avoir ses propres paramètres de relance et de génération d'échéances. Vous pouvez également définir des tarifs différents selon la fréquence.",
  },
  {
    question: "Comment sont gérés les paiements en retard ?",
    answer:
      "Les paiements en retard sont automatiquement détectés et signalés sur votre tableau de bord. Vous pouvez configurer des relances automatiques qui s'envoient après un certain nombre de jours de retard. L'IA peut également prioriser les relances selon le profil de risque du client.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer:
      "Oui, vos données sont chiffrées en transit et au repos. Nous utilisons le protocole TLS 1.3 pour toutes les communications. Vos données sont hébergées sur des serveurs sécurisés en Europe et nous effectuons des sauvegardes quotidiennes.",
  },
  {
    question: "Comment exporter mes données pour mon CRM ?",
    answer:
      "Vous pouvez exporter vos données au format CSV ou XLSX depuis la page Import / Export. Vous pouvez également configurer des exports automatiques vers vos outils préférés comme HubSpot ou Salesforce via nos intégrations natives.",
  },
  {
    question: "Comment fonctionnent les notifications ?",
    answer:
      "Les notifications peuvent être configurées selon vos préférences : résumé quotidien, alertes en temps réel pour les retards, rapport hebdomadaire et alertes sur les clients à risque. Vous recevez ces notifications par email et dans l'application.",
  },
]

export function HelpFAQ() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-50 ring-1 ring-sky-100">
            <HelpCircle className="h-5 w-5 text-sky-600" />
          </div>
          <div>
            <CardTitle className="text-lg">Questions fréquentes</CardTitle>
            <p className="text-sm text-muted-foreground">
              Les réponses aux questions les plus posées
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
              <AccordionTrigger className="text-left font-medium hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}
