"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Sparkles, ArrowLeft, Eye, EyeOff, CheckCircle2, Shield, Zap, BarChart3 } from "lucide-react"

export default function ConnexionPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login delay
    await new Promise(resolve => setTimeout(resolve, 800))
    
    // Redirect to dashboard
    router.push("/")
  }

  const benefits = [
    {
      icon: BarChart3,
      title: "Tableau de bord intelligent",
      description: "Visualisez vos KPIs et revenus récurrents en temps réel"
    },
    {
      icon: Zap,
      title: "Relances automatisées",
      description: "L'IA génère et envoie vos relances au bon moment"
    },
    {
      icon: Shield,
      title: "Données sécurisées",
      description: "Hébergement certifié ISO 27001 en France"
    }
  ]

  return (
    <div className="flex min-h-screen">
      {/* Left Panel - Login Form */}
      <div className="flex w-full flex-col justify-between bg-background px-6 py-8 lg:w-1/2 lg:px-12 xl:px-20">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/landing" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-foreground">
              <Sparkles className="h-5 w-5 text-background" />
            </div>
            <span className="text-xl font-semibold tracking-tight text-foreground">RenewFlow</span>
          </Link>
          <Link href="/landing">
            <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
              <span className="hidden sm:inline">Retour à l'accueil</span>
            </Button>
          </Link>
        </div>

        {/* Form */}
        <div className="mx-auto w-full max-w-md">
          <div className="mb-8">
            <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Connexion
            </h1>
            <p className="mt-2 text-muted-foreground">
              Accédez à votre espace RenewFlow
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-foreground">
                Adresse email
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="marie@entreprise.fr"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-12 border-border/60 bg-muted/30 px-4 text-base placeholder:text-muted-foreground/60 focus:bg-background"
                required
              />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-sm font-medium text-foreground">
                  Mot de passe
                </Label>
                <Link 
                  href="#" 
                  className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
                >
                  Mot de passe oublié ?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Entrez votre mot de passe"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="h-12 border-border/60 bg-muted/30 px-4 pr-12 text-base placeholder:text-muted-foreground/60 focus:bg-background"
                  required
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-2 top-1/2 h-8 w-8 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  <span className="sr-only">{showPassword ? "Masquer" : "Afficher"} le mot de passe</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <Checkbox id="remember" />
              <Label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
                Se souvenir de moi
              </Label>
            </div>

            <Button 
              type="submit" 
              className="h-12 w-full text-base font-medium shadow-lg shadow-foreground/10"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-background border-t-transparent" />
                  Connexion en cours...
                </div>
              ) : (
                "Se connecter"
              )}
            </Button>
          </form>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Vous n'avez pas encore de compte ?{" "}
              <Link href="#" className="font-medium text-foreground hover:underline">
                Demander une démo
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
          <Link href="#" className="hover:text-foreground transition-colors">Mentions légales</Link>
          <Link href="#" className="hover:text-foreground transition-colors">Politique de confidentialité</Link>
          <Link href="#" className="hover:text-foreground transition-colors">CGU</Link>
        </div>
      </div>

      {/* Right Panel - Marketing */}
      <div className="relative hidden w-1/2 bg-foreground lg:flex lg:flex-col lg:justify-between lg:p-12 xl:p-16">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/5 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent/20 px-3 py-1 text-xs font-medium text-accent">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Utilisé par +500 entreprises en France
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-background xl:text-4xl">
            Reprenez le contrôle de vos revenus récurrents
          </h2>
          <p className="mt-4 text-lg text-background/70">
            Rejoignez les entreprises qui optimisent leurs abonnements avec RenewFlow.
          </p>
        </div>

        {/* Benefits */}
        <div className="relative space-y-6">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-background/10">
                <benefit.icon className="h-5 w-5 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold text-background">{benefit.title}</h3>
                <p className="mt-0.5 text-sm text-background/60">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dashboard Preview */}
        <div className="relative">
          <div className="overflow-hidden rounded-xl border border-background/10 bg-background/5 p-1 shadow-2xl">
            <div className="aspect-[16/9] overflow-hidden rounded-lg bg-card">
              <div className="flex h-full flex-col">
                {/* Mock navbar */}
                <div className="flex h-8 items-center gap-2 border-b border-border/30 bg-card px-3">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 rounded-full bg-red-400/60" />
                    <div className="h-2 w-2 rounded-full bg-amber-400/60" />
                    <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
                  </div>
                  <div className="ml-4 h-3 w-32 rounded bg-muted/50" />
                </div>
                {/* Mock content */}
                <div className="flex flex-1 p-4">
                  {/* Sidebar mock */}
                  <div className="mr-4 w-24 space-y-2">
                    <div className="h-3 w-16 rounded bg-foreground" />
                    <div className="h-2 w-20 rounded bg-muted/50" />
                    <div className="h-2 w-14 rounded bg-muted/50" />
                    <div className="h-2 w-18 rounded bg-muted/50" />
                    <div className="h-2 w-16 rounded bg-muted/50" />
                  </div>
                  {/* Main content mock */}
                  <div className="flex-1 space-y-3">
                    <div className="flex gap-2">
                      <div className="h-12 flex-1 rounded-lg bg-emerald-500/10" />
                      <div className="h-12 flex-1 rounded-lg bg-sky-500/10" />
                      <div className="h-12 flex-1 rounded-lg bg-amber-500/10" />
                    </div>
                    <div className="h-20 rounded-lg bg-muted/30" />
                    <div className="h-16 rounded-lg bg-muted/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="mt-4 text-center text-sm text-background/50">
            Aperçu du tableau de bord RenewFlow
          </p>
        </div>
      </div>
    </div>
  )
}
