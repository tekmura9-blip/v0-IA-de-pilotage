"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Calendar, CalendarDays } from "lucide-react"

interface CalendarDay {
  day: number
  isCurrentMonth: boolean
  isToday: boolean
  events: { type: "a_venir" | "en_retard" | "renouvellement"; count: number; amount?: number }[]
}

const daysOfWeek = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"]

const calendarDays: CalendarDay[] = [
  { day: 24, isCurrentMonth: false, isToday: false, events: [] },
  { day: 25, isCurrentMonth: false, isToday: false, events: [] },
  { day: 26, isCurrentMonth: false, isToday: false, events: [] },
  { day: 27, isCurrentMonth: false, isToday: false, events: [] },
  { day: 28, isCurrentMonth: false, isToday: false, events: [] },
  { day: 1, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 2, amount: 648 }] },
  { day: 2, isCurrentMonth: true, isToday: false, events: [{ type: "en_retard", count: 1, amount: 299 }] },
  { day: 3, isCurrentMonth: true, isToday: false, events: [{ type: "en_retard", count: 1, amount: 799 }] },
  { day: 4, isCurrentMonth: true, isToday: false, events: [{ type: "en_retard", count: 1, amount: 299 }] },
  { day: 5, isCurrentMonth: true, isToday: false, events: [] },
  { day: 6, isCurrentMonth: true, isToday: false, events: [{ type: "en_retard", count: 1, amount: 299 }] },
  { day: 7, isCurrentMonth: true, isToday: false, events: [] },
  { day: 8, isCurrentMonth: true, isToday: true, events: [{ type: "a_venir", count: 3, amount: 1247 }] },
  { day: 9, isCurrentMonth: true, isToday: false, events: [] },
  { day: 10, isCurrentMonth: true, isToday: false, events: [{ type: "renouvellement", count: 2, amount: 9600 }, { type: "a_venir", count: 1, amount: 4800 }] },
  { day: 11, isCurrentMonth: true, isToday: false, events: [] },
  { day: 12, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 1, amount: 5400 }] },
  { day: 13, isCurrentMonth: true, isToday: false, events: [] },
  { day: 14, isCurrentMonth: true, isToday: false, events: [] },
  { day: 15, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 4, amount: 2150 }, { type: "renouvellement", count: 1, amount: 7200 }] },
  { day: 16, isCurrentMonth: true, isToday: false, events: [] },
  { day: 17, isCurrentMonth: true, isToday: false, events: [] },
  { day: 18, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 2, amount: 4548 }] },
  { day: 19, isCurrentMonth: true, isToday: false, events: [] },
  { day: 20, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 1, amount: 990 }] },
  { day: 21, isCurrentMonth: true, isToday: false, events: [] },
  { day: 22, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 2, amount: 548 }] },
  { day: 23, isCurrentMonth: true, isToday: false, events: [] },
  { day: 24, isCurrentMonth: true, isToday: false, events: [] },
  { day: 25, isCurrentMonth: true, isToday: false, events: [{ type: "renouvellement", count: 3, amount: 11400 }] },
  { day: 26, isCurrentMonth: true, isToday: false, events: [] },
  { day: 27, isCurrentMonth: true, isToday: false, events: [] },
  { day: 28, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 1, amount: 3600 }] },
  { day: 29, isCurrentMonth: true, isToday: false, events: [] },
  { day: 30, isCurrentMonth: true, isToday: false, events: [] },
  { day: 31, isCurrentMonth: true, isToday: false, events: [{ type: "a_venir", count: 2, amount: 1290 }] },
  { day: 1, isCurrentMonth: false, isToday: false, events: [] },
  { day: 2, isCurrentMonth: false, isToday: false, events: [] },
  { day: 3, isCurrentMonth: false, isToday: false, events: [] },
  { day: 4, isCurrentMonth: false, isToday: false, events: [] },
  { day: 5, isCurrentMonth: false, isToday: false, events: [] },
  { day: 6, isCurrentMonth: false, isToday: false, events: [] },
]

const eventColors = {
  a_venir: { bg: "bg-sky-500", light: "bg-sky-100", text: "text-sky-700" },
  en_retard: { bg: "bg-red-500", light: "bg-red-100", text: "text-red-700" },
  renouvellement: { bg: "bg-emerald-500", light: "bg-emerald-100", text: "text-emerald-700" },
}

export function CalendarView() {
  return (
    <div className="rounded-xl border border-border/60 bg-card shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-muted ring-1 ring-border/60">
            <CalendarDays className="h-5 w-5 text-foreground" />
          </div>
          <div>
            <h3 className="text-base font-semibold text-foreground">Calendrier</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              Visualisez vos échéances
            </p>
          </div>
        </div>
      </div>

      {/* Month Navigation */}
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex items-center gap-2">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-semibold text-foreground">Mars 2026</span>
        </div>
        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-foreground">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Calendar Grid */}
      <div className="p-4">
        {/* Days of Week Header */}
        <div className="mb-2 grid grid-cols-7 gap-1">
          {daysOfWeek.map((day) => (
            <div key={day} className="py-2 text-center text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Days */}
        <div className="grid grid-cols-7 gap-1">
          {calendarDays.map((calDay, index) => {
            const hasEvents = calDay.events.length > 0
            const hasUrgent = calDay.events.some(e => e.type === "en_retard")
            
            return (
              <div
                key={index}
                className={`relative flex min-h-[68px] flex-col rounded-lg border p-1.5 transition-all cursor-pointer ${
                  calDay.isCurrentMonth
                    ? calDay.isToday
                      ? "border-foreground bg-foreground/5 ring-1 ring-foreground/20"
                      : hasUrgent
                        ? "border-red-200 bg-red-50/50 hover:bg-red-50"
                        : hasEvents
                          ? "border-border/60 bg-background hover:bg-muted/50 hover:border-border"
                          : "border-border/40 bg-background hover:bg-muted/30"
                    : "border-transparent bg-muted/20"
                }`}
              >
                <span
                  className={`mb-1 text-xs font-medium ${
                    calDay.isCurrentMonth
                      ? calDay.isToday
                        ? "rounded-full bg-foreground text-background w-5 h-5 flex items-center justify-center text-[10px]"
                        : "text-foreground"
                      : "text-muted-foreground/40"
                  }`}
                >
                  {calDay.day}
                </span>
                {calDay.events.length > 0 && calDay.isCurrentMonth && (
                  <div className="mt-auto flex flex-col gap-0.5">
                    {calDay.events.slice(0, 2).map((event, eventIndex) => (
                      <div
                        key={eventIndex}
                        className={`flex items-center gap-1 rounded px-1 py-0.5 ${eventColors[event.type].light}`}
                      >
                        <span className={`h-1.5 w-1.5 rounded-full ${eventColors[event.type].bg}`} />
                        <span className={`text-[9px] font-semibold ${eventColors[event.type].text}`}>
                          {event.count}
                        </span>
                      </div>
                    ))}
                    {calDay.events.length > 2 && (
                      <span className="text-[9px] text-muted-foreground text-center">
                        +{calDay.events.length - 2}
                      </span>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-5 rounded-lg border border-border/60 bg-muted/30 p-3">
          <p className="text-xs font-semibold text-foreground mb-2.5">Légende</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded px-1.5 py-0.5 bg-sky-100">
                <span className="h-2 w-2 rounded-full bg-sky-500" />
              </div>
              <span className="text-xs text-muted-foreground">À venir</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded px-1.5 py-0.5 bg-red-100">
                <span className="h-2 w-2 rounded-full bg-red-500" />
              </div>
              <span className="text-xs text-muted-foreground">En retard</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 rounded px-1.5 py-0.5 bg-emerald-100">
                <span className="h-2 w-2 rounded-full bg-emerald-500" />
              </div>
              <span className="text-xs text-muted-foreground">Renouvellements</span>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-4 grid grid-cols-2 gap-3">
          <div className="rounded-lg border border-border/60 bg-background p-3">
            <p className="text-lg font-bold tabular-nums text-foreground">8</p>
            <p className="text-xs text-muted-foreground">Jours avec échéances</p>
          </div>
          <div className="rounded-lg border border-border/60 bg-background p-3">
            <p className="text-lg font-bold tabular-nums text-foreground">42 850 EUR</p>
            <p className="text-xs text-muted-foreground">Total du mois</p>
          </div>
        </div>
      </div>
    </div>
  )
}
