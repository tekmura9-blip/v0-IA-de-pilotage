import { Button } from "@/components/ui/button"
import { FileText, Download, Plus, FileSpreadsheet, File } from "lucide-react"

const documents = [
  { name: "Contrat_2023.pdf", type: "pdf", size: "1.2 MB", date: "15 mars 2023" },
  { name: "Facture_fev_2026.pdf", type: "pdf", size: "245 KB", date: "15 fév. 2026" },
  { name: "Devis_upgrade.xlsx", type: "xlsx", size: "89 KB", date: "10 janv. 2026" },
]

const fileIcons = {
  pdf: FileText,
  xlsx: FileSpreadsheet,
  default: File,
}

export function ClientDocuments() {
  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
            <FileText className="h-5 w-5 text-foreground" />
          </div>
          <div>
            <h3 className="font-semibold text-foreground">Documents</h3>
            <p className="text-xs text-muted-foreground">{documents.length} fichiers</p>
          </div>
        </div>
        <Button size="icon" variant="ghost" className="h-8 w-8">
          <Plus className="h-4 w-4" />
          <span className="sr-only">Ajouter un document</span>
        </Button>
      </div>

      <div className="divide-y divide-border/60">
        {documents.map((doc, index) => {
          const IconComponent = fileIcons[doc.type as keyof typeof fileIcons] || fileIcons.default
          return (
            <div key={index} className="flex items-center gap-3 px-5 py-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-muted/50">
                <IconComponent className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-foreground">{doc.name}</p>
                <p className="text-xs text-muted-foreground">{doc.size} - {doc.date}</p>
              </div>
              <Button size="icon" variant="ghost" className="h-8 w-8 shrink-0">
                <Download className="h-4 w-4" />
                <span className="sr-only">Télécharger</span>
              </Button>
            </div>
          )
        })}
      </div>

      <div className="border-t border-border/60 p-4">
        <Button size="sm" variant="outline" className="w-full gap-2">
          <Plus className="h-4 w-4" />
          Ajouter un document
        </Button>
      </div>
    </div>
  )
}
