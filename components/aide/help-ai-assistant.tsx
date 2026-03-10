"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, Send, Lightbulb } from "lucide-react"

const suggestions = [
  "Comment importer mes données ?",
  "Configurer les relances automatiques",
  "Comprendre mes indicateurs",
]

export function HelpAIAssistant() {
  return (
    <Card className="border-border/60 bg-gradient-to-br from-card via-card to-muted/30 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
            <Sparkles className="h-5 w-5 text-background" />
          </div>
          <div>
            <CardTitle className="text-lg">Assistant IA</CardTitle>
            <p className="text-sm text-muted-foreground">Posez votre question en langage naturel</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Je peux vous aider à importer vos données, configurer vos relances et comprendre vos
          indicateurs. Posez-moi simplement votre question !
        </p>

        {/* Suggestions */}
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lightbulb className="h-3.5 w-3.5" />
            <span>Suggestions :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {suggestions.map((suggestion, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="h-7 rounded-full bg-background text-xs"
              >
                {suggestion}
              </Button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div className="flex gap-2">
          <Input
            placeholder="Posez votre question..."
            className="flex-1 border-border/60 bg-background"
          />
          <Button size="icon" className="shrink-0">
            <Send className="h-4 w-4" />
          </Button>
        </div>

        {/* Status */}
        <div className="flex items-center justify-center gap-2 rounded-lg bg-emerald-50/50 p-2 text-xs text-emerald-700">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Assistant IA disponible
        </div>
      </CardContent>
    </Card>
  )
}
