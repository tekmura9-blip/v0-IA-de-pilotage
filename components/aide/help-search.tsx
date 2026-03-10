"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, FileUp, Bell, CalendarClock } from "lucide-react"

const quickLinks = [
  { icon: FileUp, label: "Importer un fichier CSV", href: "#" },
  { icon: Bell, label: "Configurer les relances automatiques", href: "#" },
  { icon: CalendarClock, label: "Gérer les échéances", href: "#" },
]

export function HelpSearch() {
  return (
    <div className="rounded-2xl border border-border/60 bg-gradient-to-br from-card via-card to-muted/30 p-8 shadow-sm lg:p-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-xl font-semibold text-foreground lg:text-2xl">
          Comment pouvons-nous vous aider ?
        </h2>
        <p className="mt-2 text-muted-foreground">
          Recherchez dans notre documentation ou explorez les guides ci-dessous
        </p>

        {/* Search Input */}
        <div className="relative mt-6">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Rechercher une question, une fonctionnalité, un guide..."
            className="h-14 w-full rounded-xl border-border/60 bg-background pl-12 pr-4 text-base shadow-sm"
          />
        </div>

        {/* Quick Links */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          <span className="text-sm text-muted-foreground">Liens rapides :</span>
          {quickLinks.map((link, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              className="gap-2 rounded-full bg-background"
            >
              <link.icon className="h-4 w-4" />
              {link.label}
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
