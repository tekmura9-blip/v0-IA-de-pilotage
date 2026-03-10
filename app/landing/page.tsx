import { Navbar } from "@/components/landing/navbar"
import { Hero } from "@/components/landing/hero"
import { Problems } from "@/components/landing/problems"
import { Solution } from "@/components/landing/solution"
import { UseCases } from "@/components/landing/use-cases"
import { AIFeatures } from "@/components/landing/ai-features"
import { DashboardPreview } from "@/components/landing/dashboard-preview"
import { Testimonials } from "@/components/landing/testimonials"
import { Pricing } from "@/components/landing/pricing"
import { FAQ } from "@/components/landing/faq"
import { FinalCTA } from "@/components/landing/final-cta"
import { Footer } from "@/components/landing/footer"

export const metadata = {
  title: "RenewFlow | Pilotez vos abonnements et revenus récurrents",
  description: "Ne ratez plus aucun renouvellement client. Pilotez vos échéances, relances et revenus récurrents dans un seul outil intelligent propulsé par l'IA.",
}

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Problems />
      <Solution />
      <UseCases />
      <AIFeatures />
      <DashboardPreview />
      <Testimonials />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  )
}
