"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ArrowRight } from "lucide-react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-foreground/95 backdrop-blur-xl shadow-lg" 
        : "bg-foreground"
    }`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 lg:h-18 items-center justify-between">
          <Link href="/landing" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent">
              <span className="text-sm font-bold text-accent-foreground">R</span>
            </div>
            <span className="text-xl font-semibold text-background tracking-tight">RenewFlow</span>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            <a href="#problemes" className="text-sm font-medium text-background/70 hover:text-background transition-colors">
              Problèmes
            </a>
            <a href="#solution" className="text-sm font-medium text-background/70 hover:text-background transition-colors">
              Solution
            </a>
            <a href="#ia" className="text-sm font-medium text-background/70 hover:text-background transition-colors">
              Intelligence IA
            </a>
            <a href="#tarifs" className="text-sm font-medium text-background/70 hover:text-background transition-colors">
              Tarifs
            </a>
            <a href="#faq" className="text-sm font-medium text-background/70 hover:text-background transition-colors">
              FAQ
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <Link href="/connexion">
              <Button variant="ghost" size="sm" className="text-background/80 hover:text-background hover:bg-background/10">
                Connexion
              </Button>
            </Link>
            <Link href="/connexion">
              <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground gap-2 shadow-lg shadow-accent/25">
                Demander une démo
                <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </Link>
          </div>

          <button
            className="lg:hidden p-2 text-background"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="lg:hidden py-6 border-t border-background/10">
            <div className="flex flex-col gap-5">
              <a href="#problemes" className="text-base font-medium text-background/70 hover:text-background transition-colors">
                Problèmes
              </a>
              <a href="#solution" className="text-base font-medium text-background/70 hover:text-background transition-colors">
                Solution
              </a>
              <a href="#ia" className="text-base font-medium text-background/70 hover:text-background transition-colors">
                Intelligence IA
              </a>
              <a href="#tarifs" className="text-base font-medium text-background/70 hover:text-background transition-colors">
                Tarifs
              </a>
              <a href="#faq" className="text-base font-medium text-background/70 hover:text-background transition-colors">
                FAQ
              </a>
              <div className="flex flex-col gap-3 pt-5 border-t border-background/10">
                <Link href="/connexion">
                  <Button variant="ghost" className="w-full justify-start text-background/80 hover:text-background hover:bg-background/10">
                    Connexion
                  </Button>
                </Link>
                <Link href="/connexion">
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground gap-2">
                    Demander une démo
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
