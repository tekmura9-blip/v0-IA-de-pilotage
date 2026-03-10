import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Users, TrendingUp, CalendarCheck, Zap } from "lucide-react"

const kpis = [
  { label: "Clients actifs", value: "2,847", icon: Users, color: "bg-accent/10 text-accent" },
  { label: "Taux de rétention", value: "94.2%", icon: TrendingUp, color: "bg-chart-4/10 text-chart-4" },
  { label: "Échéances ce mois", value: "156", icon: CalendarCheck, color: "bg-chart-2/10 text-chart-2" },
  { label: "Relances auto", value: "89", icon: Zap, color: "bg-chart-3/10 text-chart-3" },
]

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden bg-background">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-gradient-to-b from-accent/[0.03] via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent/[0.02] to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gradient-to-tl from-chart-2/[0.02] to-transparent rounded-full blur-3xl" />
      </div>
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-foreground text-background text-sm font-medium mb-8 shadow-lg">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            Nouveau : Génération automatique de relances par IA
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-foreground text-balance leading-[1.1]">
            Ne ratez plus aucun{" "}
            <span className="relative">
              <span className="relative z-10 text-accent">renouvellement</span>
              <span className="absolute bottom-2 left-0 right-0 h-3 bg-accent/10 -rotate-1 rounded" />
            </span>
            {" "}client
          </h1>
          
          <p className="mt-8 text-lg sm:text-xl lg:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance leading-relaxed">
            Pilotez vos échéances, relances et revenus récurrents dans un seul outil intelligent propulsé par l'IA.
          </p>
          
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/connexion">
              <Button size="lg" className="h-14 px-8 text-base gap-2.5 bg-foreground hover:bg-foreground/90 text-background shadow-xl shadow-foreground/10">
                Demander une démo gratuite
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/connexion">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base gap-2.5 border-2 hover:bg-muted">
                <Play className="h-4 w-4" />
                Voir le produit en action
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Essai gratuit 14 jours
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Aucune carte requise
            </span>
            <span className="flex items-center gap-2">
              <svg className="h-4 w-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Configuration en 5 min
            </span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {kpis.map((kpi, index) => (
            <div 
              key={index} 
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-300"
            >
              <div className={`inline-flex p-2.5 rounded-xl ${kpi.color} mb-4`}>
                <kpi.icon className="h-5 w-5" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-foreground tracking-tight">
                {kpi.value}
              </div>
              <div className="mt-1 text-sm text-muted-foreground">
                {kpi.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
