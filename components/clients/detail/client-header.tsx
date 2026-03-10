"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  ChevronLeft,
  Pencil,
  CalendarPlus,
  Bell,
  Download,
  MoreHorizontal,
  Mail,
  Phone,
  Trash2,
  Building2,
} from "lucide-react"

export function ClientHeader() {
  return (
    <div className="mb-8">
      {/* Breadcrumb */}
      <div className="mb-4">
        <Link 
          href="/clients" 
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
          Retour aux clients
        </Link>
      </div>
      
      {/* Header Content */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex items-start gap-4">
          <Avatar className="h-14 w-14 border-2 border-border/60 sm:h-16 sm:w-16">
            <AvatarFallback className="bg-foreground text-lg font-semibold text-background sm:text-xl">
              AD
            </AvatarFallback>
          </Avatar>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl lg:text-3xl">
                Atelier Dubois & Fils
              </h1>
              <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                Actif
              </Badge>
            </div>
            <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5">
                <Building2 className="h-3.5 w-3.5" />
                PME - Menuiserie
              </span>
              <span className="flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" />
                contact@dubois-fils.fr
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="h-3.5 w-3.5" />
                01 42 36 58 74
              </span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Consultez les informations du client, ses échéances, ses relances et son historique.
            </p>
          </div>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <Button variant="outline" size="sm" className="h-9 gap-2 border-border/60 bg-card shadow-sm">
            <Pencil className="h-4 w-4" />
            <span className="hidden sm:inline">Modifier</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-2 border-border/60 bg-card shadow-sm">
            <CalendarPlus className="h-4 w-4" />
            <span className="hidden sm:inline">Ajouter une échéance</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-2 border-border/60 bg-card shadow-sm">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Générer une relance</span>
          </Button>
          <Button variant="outline" size="sm" className="h-9 gap-2 border-border/60 bg-card shadow-sm">
            <Download className="h-4 w-4" />
            <span className="hidden sm:inline">Exporter</span>
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="h-9 w-9 border-border/60 bg-card shadow-sm">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">Plus d'actions</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem className="gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                Envoyer un email
              </DropdownMenuItem>
              <DropdownMenuItem className="gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                Appeler le client
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="gap-2 text-destructive focus:text-destructive">
                <Trash2 className="h-4 w-4" />
                Supprimer le client
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )
}
