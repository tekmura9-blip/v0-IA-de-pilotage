"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  History,
  FileSpreadsheet,
  FileText,
  MoreHorizontal,
  Eye,
  RefreshCw,
  CheckCircle2,
  Loader2,
  XCircle,
} from "lucide-react"

const recentImports = [
  {
    id: 1,
    filename: "clients_mars_2026.xlsx",
    date: "10 mars 2026",
    type: "Clients",
    rows: 156,
    status: "completed",
    fileType: "xlsx",
  },
  {
    id: 2,
    filename: "echeances_q1.csv",
    date: "08 mars 2026",
    type: "Échéances",
    rows: 342,
    status: "completed",
    fileType: "csv",
  },
  {
    id: 3,
    filename: "nouveaux_clients.xlsx",
    date: "05 mars 2026",
    type: "Clients",
    rows: 28,
    status: "processing",
    fileType: "xlsx",
  },
  {
    id: 4,
    filename: "import_legacy.csv",
    date: "01 mars 2026",
    type: "Clients",
    rows: 89,
    status: "error",
    fileType: "csv",
  },
]

const statusConfig = {
  completed: {
    label: "Terminé",
    icon: CheckCircle2,
    className: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  processing: {
    label: "En cours",
    icon: Loader2,
    className: "bg-sky-50 text-sky-700 border-sky-200",
  },
  error: {
    label: "Erreur",
    icon: XCircle,
    className: "bg-red-50 text-red-700 border-red-200",
  },
}

export function RecentImports() {
  return (
    <Card className="border-border/60 shadow-sm">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted ring-1 ring-border/60">
            <History className="h-5 w-5 text-muted-foreground" />
          </div>
          <div>
            <CardTitle className="text-lg">Imports récents</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="rounded-lg border border-border/60 overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-muted/30 hover:bg-muted/30">
                <TableHead className="font-semibold">Fichier</TableHead>
                <TableHead className="font-semibold">Date</TableHead>
                <TableHead className="font-semibold">Type</TableHead>
                <TableHead className="font-semibold text-right">Lignes</TableHead>
                <TableHead className="font-semibold">Statut</TableHead>
                <TableHead className="w-[50px]"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentImports.map((item) => {
                const status = statusConfig[item.status as keyof typeof statusConfig]
                const StatusIcon = status.icon
                return (
                  <TableRow key={item.id} className="group">
                    <TableCell>
                      <div className="flex items-center gap-2.5">
                        {item.fileType === "xlsx" ? (
                          <FileSpreadsheet className="h-4 w-4 text-emerald-600" />
                        ) : (
                          <FileText className="h-4 w-4 text-sky-600" />
                        )}
                        <span className="font-medium text-foreground">{item.filename}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{item.date}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="bg-background">
                        {item.type}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right tabular-nums font-medium">
                      {item.rows}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className={`gap-1.5 ${status.className}`}>
                        <StatusIcon
                          className={`h-3 w-3 ${item.status === "processing" ? "animate-spin" : ""}`}
                        />
                        {status.label}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 opacity-0 group-hover:opacity-100"
                          >
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem className="gap-2">
                            <Eye className="h-4 w-4" />
                            Voir le rapport
                          </DropdownMenuItem>
                          <DropdownMenuItem className="gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Réimporter
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
      </CardContent>
    </Card>
  )
}
