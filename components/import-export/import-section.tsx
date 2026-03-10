"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import {
  Upload,
  FileSpreadsheet,
  FileText,
  ArrowRight,
  CheckCircle2,
  User,
  Building2,
  Mail,
  Package,
  Euro,
  Calendar,
  RefreshCw,
  Activity,
} from "lucide-react"

const mappingFields = [
  { icon: User, label: "Nom du client", mapped: true, sample: "Jean Dupont" },
  { icon: Building2, label: "Entreprise", mapped: true, sample: "TechFlow SAS" },
  { icon: Mail, label: "Email", mapped: true, sample: "contact@techflow.fr" },
  { icon: Package, label: "Produit", mapped: true, sample: "Licence Pro" },
  { icon: Euro, label: "Montant", mapped: true, sample: "299,00 EUR" },
  { icon: Calendar, label: "Date de début", mapped: true, sample: "01/03/2026" },
  { icon: RefreshCw, label: "Fréquence", mapped: false, sample: "Mensuel" },
  { icon: Activity, label: "Statut", mapped: false, sample: "Actif" },
]

export function ImportSection() {
  const [dragActive, setDragActive] = useState(false)
  const [fileUploaded, setFileUploaded] = useState(false)

  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-50 ring-1 ring-emerald-100">
            <Upload className="h-5 w-5 text-emerald-600" />
          </div>
          <div>
            <CardTitle className="text-lg">Importer des données</CardTitle>
            <CardDescription>
              Importez vos clients, abonnements et échéances depuis un fichier CSV ou Excel
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Drop Zone */}
        <div
          className={`relative rounded-xl border-2 border-dashed p-8 text-center transition-all ${
            dragActive
              ? "border-emerald-500 bg-emerald-50/50"
              : fileUploaded
                ? "border-emerald-500 bg-emerald-50/30"
                : "border-border hover:border-muted-foreground/50 hover:bg-muted/30"
          }`}
          onDragEnter={() => setDragActive(true)}
          onDragLeave={() => setDragActive(false)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={() => {
            setDragActive(false)
            setFileUploaded(true)
          }}
        >
          {fileUploaded ? (
            <div className="space-y-3">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                <CheckCircle2 className="h-7 w-7 text-emerald-600" />
              </div>
              <div>
                <p className="font-semibold text-foreground">clients_mars_2026.xlsx</p>
                <p className="text-sm text-muted-foreground">156 lignes détectées</p>
              </div>
              <Button variant="outline" size="sm" onClick={() => setFileUploaded(false)}>
                Changer de fichier
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-muted">
                <Upload className="h-6 w-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-medium text-foreground">
                  Glissez-déposez votre fichier ici
                </p>
                <p className="mt-1 text-sm text-muted-foreground">
                  ou cliquez pour parcourir vos fichiers
                </p>
              </div>
              <div className="flex items-center justify-center gap-3">
                <Badge variant="outline" className="gap-1.5 bg-background">
                  <FileSpreadsheet className="h-3.5 w-3.5 text-emerald-600" />
                  XLSX
                </Badge>
                <Badge variant="outline" className="gap-1.5 bg-background">
                  <FileText className="h-3.5 w-3.5 text-sky-600" />
                  CSV
                </Badge>
              </div>
              <Button variant="outline" onClick={() => setFileUploaded(true)}>
                Choisir un fichier
              </Button>
            </div>
          )}
        </div>

        {/* Import Options */}
        <div className="space-y-3">
          <p className="text-sm font-medium text-foreground">Options d{"'"}import</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <Checkbox id="create-missing" defaultChecked />
              <Label htmlFor="create-missing" className="text-sm font-normal text-muted-foreground">
                Créer les clients manquants
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="update-existing" defaultChecked />
              <Label htmlFor="update-existing" className="text-sm font-normal text-muted-foreground">
                Mettre à jour les clients existants
              </Label>
            </div>
            <div className="flex items-center space-x-3">
              <Checkbox id="generate-deadlines" />
              <Label htmlFor="generate-deadlines" className="text-sm font-normal text-muted-foreground">
                Générer automatiquement les échéances
              </Label>
            </div>
          </div>
        </div>

        {/* Mapping Preview */}
        {fileUploaded && (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-foreground">Aperçu du mapping</p>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                6/8 colonnes mappées
              </Badge>
            </div>
            <div className="rounded-lg border border-border/60 bg-muted/30">
              <div className="grid grid-cols-2 gap-px bg-border/60">
                {mappingFields.map((field, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-3 bg-card p-3 ${
                      index === 0 ? "rounded-tl-lg" : ""
                    } ${index === 1 ? "rounded-tr-lg" : ""} ${
                      index === mappingFields.length - 2 ? "rounded-bl-lg" : ""
                    } ${index === mappingFields.length - 1 ? "rounded-br-lg" : ""}`}
                  >
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg ${
                        field.mapped
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-amber-50 text-amber-600"
                      }`}
                    >
                      <field.icon className="h-4 w-4" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-medium text-foreground">
                        {field.label}
                      </p>
                      <p className="truncate text-xs text-muted-foreground">{field.sample}</p>
                    </div>
                    {field.mapped ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-500" />
                    ) : (
                      <Badge variant="outline" className="shrink-0 text-[10px] bg-amber-50 text-amber-600 border-amber-200">
                        Non mappé
                      </Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Action Button */}
        <Button className="w-full gap-2" disabled={!fileUploaded}>
          Lancer l{"'"}import
          <ArrowRight className="h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  )
}
