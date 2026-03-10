"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FileText, TrendingUp, Clock, ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Comment importer mes clients depuis un CSV ?",
    category: "Import / Export",
    readTime: "3 min",
    views: 1248,
  },
  {
    title: "Comment générer automatiquement les échéances ?",
    category: "Échéances",
    readTime: "4 min",
    views: 986,
  },
  {
    title: "Comment configurer les relances automatiques ?",
    category: "Relances",
    readTime: "5 min",
    views: 872,
  },
  {
    title: "Comment repérer les clients à risque ?",
    category: "Clients",
    readTime: "3 min",
    views: 654,
  },
  {
    title: "Comment exporter mes données vers Excel ?",
    category: "Import / Export",
    readTime: "2 min",
    views: 543,
  },
]

export function PopularArticles() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-50 ring-1 ring-amber-100">
              <TrendingUp className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <CardTitle className="text-lg">Articles populaires</CardTitle>
              <p className="text-sm text-muted-foreground">Les plus consultés par nos utilisateurs</p>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          {articles.map((article, index) => (
            <div
              key={index}
              className="group flex items-center justify-between rounded-lg border border-transparent p-3 transition-all hover:border-border/60 hover:bg-muted/30 cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground group-hover:text-foreground/80">
                    {article.title}
                  </p>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-muted-foreground">
                    <Badge variant="outline" className="h-5 bg-background text-[10px]">
                      {article.category}
                    </Badge>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {article.readTime}
                    </span>
                    <span>{article.views.toLocaleString("fr-FR")} vues</span>
                  </div>
                </div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
