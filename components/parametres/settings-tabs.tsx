"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Settings,
  Users,
  Bell,
  CreditCard,
  Shield,
  Plug,
  MoreHorizontal,
  Pencil,
  Trash2,
  Send,
  Plus,
  CheckCircle2,
  Clock,
  Sparkles,
  Monitor,
  Smartphone,
} from "lucide-react"

const teamMembers = [
  { id: 1, name: "Marie Dupont", email: "marie.dupont@techflow.fr", role: "Administrateur", status: "active", initials: "MD" },
  { id: 2, name: "Pierre Martin", email: "pierre.martin@techflow.fr", role: "Gestionnaire", status: "active", initials: "PM" },
  { id: 3, name: "Sophie Bernard", email: "sophie.bernard@techflow.fr", role: "Gestionnaire", status: "active", initials: "SB" },
  { id: 4, name: "Lucas Petit", email: "lucas.petit@techflow.fr", role: "Lecture seule", status: "pending", initials: "LP" },
]

const integrations = [
  { id: "stripe", name: "Stripe", description: "Automatisez la facturation et les paiements", connected: true, icon: "💳" },
  { id: "hubspot", name: "HubSpot", description: "Synchronisez vos contacts et activités CRM", connected: false, icon: "🔶" },
  { id: "salesforce", name: "Salesforce", description: "Intégrez vos données commerciales", connected: false, icon: "☁️" },
  { id: "sheets", name: "Google Sheets", description: "Exportez automatiquement vers Sheets", connected: true, icon: "📊" },
]

const sessions = [
  { id: 1, device: "MacBook Pro", location: "Paris, France", lastActive: "Actif maintenant", current: true, icon: Monitor },
  { id: 2, device: "iPhone 15 Pro", location: "Paris, France", lastActive: "Il y a 2 heures", current: false, icon: Smartphone },
]

export function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("general")

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
      <div className="rounded-xl border border-border/60 bg-card p-1.5 shadow-sm">
        <TabsList className="grid w-full grid-cols-2 gap-1 bg-transparent sm:grid-cols-4 lg:grid-cols-7">
          <TabsTrigger value="general" className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
            <Settings className="h-4 w-4" />
            <span className="hidden sm:inline">Général</span>
          </TabsTrigger>
          <TabsTrigger value="equipe" className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
            <Users className="h-4 w-4" />
            <span className="hidden sm:inline">Équipe</span>
          </TabsTrigger>
          <TabsTrigger value="relances" className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Relances</span>
          </TabsTrigger>
          <TabsTrigger value="abonnements" className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
            <CreditCard className="h-4 w-4" />
            <span className="hidden sm:inline">Abonnements</span>
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
            <Bell className="h-4 w-4" />
            <span className="hidden sm:inline">Notifications</span>
          </TabsTrigger>
          <TabsTrigger value="securite" className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
            <Shield className="h-4 w-4" />
            <span className="hidden sm:inline">Sécurité</span>
          </TabsTrigger>
          <TabsTrigger value="integrations" className="gap-2 data-[state=active]:bg-foreground data-[state=active]:text-background">
            <Plug className="h-4 w-4" />
            <span className="hidden sm:inline">Intégrations</span>
          </TabsTrigger>
        </TabsList>
      </div>

      {/* General Settings */}
      <TabsContent value="general">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Général</CardTitle>
            <CardDescription>Configurez les informations de base de votre entreprise</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="company">Nom de l{"'"}entreprise</Label>
                <Input id="company" defaultValue="TechFlow SAS" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Adresse email principale</Label>
                <Input id="email" type="email" defaultValue="contact@techflow.fr" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" defaultValue="+33 1 42 68 53 00" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="currency">Devise</Label>
                <Select defaultValue="eur">
                  <SelectTrigger id="currency">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="timezone">Fuseau horaire</Label>
                <Select defaultValue="paris">
                  <SelectTrigger id="timezone">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="paris">Europe/Paris (UTC+1)</SelectItem>
                    <SelectItem value="london">Europe/London (UTC)</SelectItem>
                    <SelectItem value="newyork">America/New_York (UTC-5)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="language">Langue</Label>
                <Select defaultValue="fr">
                  <SelectTrigger id="language">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fr">Français</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="de">Deutsch</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Enregistrer les modifications</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Team Settings */}
      <TabsContent value="equipe">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Équipe</CardTitle>
                <CardDescription>Gérez les membres de votre équipe et leurs accès</CardDescription>
              </div>
              <Button className="gap-2">
                <Plus className="h-4 w-4" />
                Inviter un membre
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg border border-border/60 overflow-hidden">
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/30 hover:bg-muted/30">
                    <TableHead className="font-semibold">Membre</TableHead>
                    <TableHead className="font-semibold">Rôle</TableHead>
                    <TableHead className="font-semibold">Statut</TableHead>
                    <TableHead className="w-[50px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.id} className="group">
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-9 w-9">
                            <AvatarFallback className="bg-foreground text-background text-xs font-medium">
                              {member.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-foreground">{member.name}</p>
                            <p className="text-sm text-muted-foreground">{member.email}</p>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            member.role === "Administrateur"
                              ? "bg-violet-50 text-violet-700 border-violet-200"
                              : member.role === "Gestionnaire"
                                ? "bg-sky-50 text-sky-700 border-sky-200"
                                : "bg-muted text-muted-foreground"
                          }
                        >
                          {member.role}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant="outline"
                          className={
                            member.status === "active"
                              ? "gap-1.5 bg-emerald-50 text-emerald-700 border-emerald-200"
                              : "gap-1.5 bg-amber-50 text-amber-700 border-amber-200"
                          }
                        >
                          {member.status === "active" ? (
                            <CheckCircle2 className="h-3 w-3" />
                          ) : (
                            <Clock className="h-3 w-3" />
                          )}
                          {member.status === "active" ? "Actif" : "En attente"}
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
                              <Pencil className="h-4 w-4" />
                              Modifier
                            </DropdownMenuItem>
                            {member.status === "pending" && (
                              <DropdownMenuItem className="gap-2">
                                <Send className="h-4 w-4" />
                                Renvoyer l{"'"}invitation
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem className="gap-2 text-red-600">
                              <Trash2 className="h-4 w-4" />
                              Retirer
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Reminder Settings */}
      <TabsContent value="relances">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Relances automatiques</CardTitle>
            <CardDescription>Configurez les paramètres de relance automatique</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Activer les relances avant échéance</Label>
                  <p className="text-sm text-muted-foreground">Envoyez des rappels avant la date limite</p>
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="3">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 jour avant</SelectItem>
                      <SelectItem value="3">3 jours avant</SelectItem>
                      <SelectItem value="7">7 jours avant</SelectItem>
                      <SelectItem value="14">14 jours avant</SelectItem>
                    </SelectContent>
                  </Select>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Activer les relances après retard</Label>
                  <p className="text-sm text-muted-foreground">Envoyez des relances pour les paiements en retard</p>
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="2">
                    <SelectTrigger className="w-[140px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 jour après</SelectItem>
                      <SelectItem value="2">2 jours après</SelectItem>
                      <SelectItem value="5">5 jours après</SelectItem>
                      <SelectItem value="7">7 jours après</SelectItem>
                    </SelectContent>
                  </Select>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Activer les relances de renouvellement</Label>
                  <p className="text-sm text-muted-foreground">Rappelez aux clients de renouveler leur abonnement</p>
                </div>
                <div className="flex items-center gap-3">
                  <Select defaultValue="7">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="7">7 jours avant renouvellement</SelectItem>
                      <SelectItem value="14">14 jours avant renouvellement</SelectItem>
                      <SelectItem value="30">30 jours avant renouvellement</SelectItem>
                    </SelectContent>
                  </Select>
                  <Switch defaultChecked />
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border border-border/60 bg-gradient-to-r from-violet-50/50 to-sky-50/50 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
                    <Sparkles className="h-5 w-5 text-background" />
                  </div>
                  <div className="space-y-0.5">
                    <Label className="text-base">Générer les messages avec l{"'"}IA</Label>
                    <p className="text-sm text-muted-foreground">Personnalisez automatiquement vos messages de relance</p>
                  </div>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Subscription Settings */}
      <TabsContent value="abonnements">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Abonnements</CardTitle>
            <CardDescription>Configurez les paramètres par défaut des abonnements</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Fréquences disponibles</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Mensuel
                  </Badge>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Trimestriel
                  </Badge>
                  <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Annuel
                  </Badge>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="default-status">Statut par défaut des nouvelles échéances</Label>
                <Select defaultValue="a_venir">
                  <SelectTrigger id="default-status">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="a_venir">À venir</SelectItem>
                    <SelectItem value="en_attente">En attente</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="months-ahead">Nombre de mois générés à l{"'"}avance</Label>
                <Select defaultValue="12">
                  <SelectTrigger id="months-ahead">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="3">3 mois</SelectItem>
                    <SelectItem value="6">6 mois</SelectItem>
                    <SelectItem value="12">12 mois</SelectItem>
                    <SelectItem value="24">24 mois</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Génération automatique des échéances</Label>
                  <p className="text-sm text-muted-foreground">Créez les échéances à la création d{"'"}un abonnement</p>
                </div>
                <Switch defaultChecked />
              </div>
            </div>
            <div className="flex justify-end">
              <Button>Enregistrer les modifications</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Notification Settings */}
      <TabsContent value="notifications">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Notifications</CardTitle>
            <CardDescription>Gérez vos préférences de notification</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Recevoir un résumé quotidien</Label>
                <p className="text-sm text-muted-foreground">Un email récapitulatif chaque matin à 8h00</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Recevoir une alerte en cas de retard</Label>
                <p className="text-sm text-muted-foreground">Notification immédiate pour les paiements en retard</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Recevoir un rapport hebdomadaire</Label>
                <p className="text-sm text-muted-foreground">Rapport complet chaque lundi</p>
              </div>
              <Switch defaultChecked />
            </div>
            <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
              <div className="space-y-0.5">
                <Label className="text-base">Recevoir une alerte sur les clients à risque</Label>
                <p className="text-sm text-muted-foreground">Notification quand un client est détecté à risque</p>
              </div>
              <Switch />
            </div>
          </CardContent>
        </Card>
      </TabsContent>

      {/* Security Settings */}
      <TabsContent value="securite">
        <div className="space-y-6">
          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Sécurité du compte</CardTitle>
              <CardDescription>Gérez la sécurité de votre compte</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="current-password">Mot de passe actuel</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="new-password">Nouveau mot de passe</Label>
                  <Input id="new-password" type="password" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirmer le mot de passe</Label>
                  <Input id="confirm-password" type="password" />
                </div>
              </div>
              <div className="flex items-center justify-between rounded-lg border border-border/60 p-4">
                <div className="space-y-0.5">
                  <Label className="text-base">Activer la double authentification</Label>
                  <p className="text-sm text-muted-foreground">Ajoutez une couche de sécurité supplémentaire</p>
                </div>
                <Switch />
              </div>
              <Button>Changer le mot de passe</Button>
            </CardContent>
          </Card>

          <Card className="border-border/60 shadow-sm">
            <CardHeader>
              <CardTitle>Sessions actives</CardTitle>
              <CardDescription>Gérez vos appareils connectés</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className={`flex items-center justify-between rounded-lg border p-4 ${
                    session.current ? "border-emerald-200 bg-emerald-50/30" : "border-border/60"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-muted">
                      <session.icon className="h-5 w-5 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {session.device}
                        {session.current && (
                          <Badge variant="outline" className="ml-2 bg-emerald-50 text-emerald-700 border-emerald-200">
                            Session actuelle
                          </Badge>
                        )}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {session.location} · {session.lastActive}
                      </p>
                    </div>
                  </div>
                  {!session.current && (
                    <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
                      Déconnecter
                    </Button>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </TabsContent>

      {/* Integrations Settings */}
      <TabsContent value="integrations">
        <Card className="border-border/60 shadow-sm">
          <CardHeader>
            <CardTitle>Intégrations</CardTitle>
            <CardDescription>Connectez vos outils préférés à RenewFlow</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {integrations.map((integration) => (
              <div
                key={integration.id}
                className="flex items-center justify-between rounded-xl border border-border/60 p-4 transition-all hover:shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted text-2xl">
                    {integration.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-foreground">{integration.name}</h3>
                      {integration.connected && (
                        <Badge variant="outline" className="gap-1 bg-emerald-50 text-emerald-700 border-emerald-200">
                          <CheckCircle2 className="h-3 w-3" />
                          Connecté
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">{integration.description}</p>
                  </div>
                </div>
                <Button variant={integration.connected ? "outline" : "default"}>
                  {integration.connected ? "Gérer" : "Connecter"}
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
