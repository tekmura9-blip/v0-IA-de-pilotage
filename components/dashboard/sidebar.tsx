"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  LayoutDashboard,
  Users,
  CalendarClock,
  Bell,
  TrendingUp,
  FileUp,
  Settings,
  LogOut,
  Sparkles,
  HelpCircle,
  ChevronRight,
  Menu,
  X,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const mainNavItems = [
  { href: "/", label: "Tableau de bord", icon: LayoutDashboard },
  { href: "/clients", label: "Clients", icon: Users, badge: "247" },
  { href: "/echeances", label: "Échéances", icon: CalendarClock, badge: "34" },
  { href: "/relances", label: "Relances", icon: Bell, badge: "8", badgeVariant: "destructive" as const },
  { href: "/revenus", label: "Revenus", icon: TrendingUp },
]

const secondaryNavItems = [
  { href: "/import-export", label: "Import / Export", icon: FileUp },
  { href: "/parametres", label: "Paramètres", icon: Settings },
  { href: "/aide", label: "Centre d'aide", icon: HelpCircle },
]

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleLogout = () => {
    router.push("/landing")
  }

  const SidebarContent = ({ onItemClick }: { onItemClick?: () => void }) => (
    <>
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-border/60 px-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-foreground">
          <Sparkles className="h-5 w-5 text-background" />
        </div>
        <div className="flex flex-col">
          <span className="text-base font-semibold tracking-tight text-foreground">
            RenewFlow
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
            Pro Plan
          </span>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-2 px-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Menu principal
          </span>
        </div>
        <div className="space-y-0.5">
          {mainNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onItemClick}
                className={cn(
                  "group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <div className="flex items-center gap-3">
                  <item.icon className={cn("h-[18px] w-[18px]", isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground")} />
                  {item.label}
                </div>
                {item.badge && (
                  <Badge 
                    variant={item.badgeVariant || (isActive ? "secondary" : "outline")}
                    className={cn(
                      "h-5 min-w-5 justify-center px-1.5 text-[10px] font-semibold",
                      isActive && !item.badgeVariant && "bg-background/20 text-background border-transparent"
                    )}
                  >
                    {item.badge}
                  </Badge>
                )}
              </Link>
            )
          })}
        </div>

        <div className="mb-2 mt-6 px-3">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
            Configuration
          </span>
        </div>
        <div className="space-y-0.5">
          {secondaryNavItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onItemClick}
                className={cn(
                  "group flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-150",
                  isActive
                    ? "bg-foreground text-background shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                <item.icon className={cn("h-[18px] w-[18px]", isActive ? "text-background" : "text-muted-foreground group-hover:text-foreground")} />
                {item.label}
              </Link>
            )
          })}
        </div>
      </nav>

      {/* Upgrade CTA */}
      <div className="border-t border-border/60 p-3">
        <div className="rounded-xl bg-gradient-to-br from-foreground to-foreground/80 p-4 text-background">
          <div className="mb-2 flex items-center gap-2">
            <Sparkles className="h-4 w-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">
              Essai Pro
            </span>
          </div>
          <p className="mb-3 text-xs leading-relaxed text-background/80">
            14 jours restants. Passez à Enterprise pour des fonctionnalités avancées.
          </p>
          <button className="flex w-full items-center justify-center gap-1 rounded-lg bg-background py-2 text-xs font-semibold text-foreground transition-colors hover:bg-background/90">
            Mettre à niveau
            <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-border/60 p-3">
        <button 
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <LogOut className="h-[18px] w-[18px]" />
          Déconnexion
        </button>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-[260px] flex-col border-r border-border/60 bg-card lg:flex">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar Toggle */}
      <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="fixed left-4 top-4 z-50 lg:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Ouvrir le menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[260px] p-0">
          <div className="flex h-full flex-col">
            <SidebarContent onItemClick={() => setMobileOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>

      {/* Mobile Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 flex h-16 items-center justify-around border-t border-border bg-card lg:hidden">
        {mainNavItems.slice(0, 5).map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative flex flex-col items-center gap-1 px-3 py-2",
                isActive ? "text-foreground" : "text-muted-foreground"
              )}
            >
              <item.icon className="h-5 w-5" />
              <span className="text-[10px] font-medium">{item.label.split(" ")[0]}</span>
              {item.badge && item.badgeVariant === "destructive" && (
                <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-destructive" />
              )}
            </Link>
          )
        })}
      </nav>
    </>
  )
}
