import type { SportsDbEvent } from '../../types/event'
import MatchCard from './MatchCard'

interface LeagueSectionProps {
  leagueName: string
  events: SportsDbEvent[]
}

export default function LeagueSection({ leagueName, events }: LeagueSectionProps) {
  if (events.length === 0) return null

  return (
    <section className="mb-section-gap">
      <button
        type="button"
        className="w-full flex items-center justify-between px-4 py-3 bg-surface-bar text-left rounded-tab"
      >
        <span className="text-league text-white font-semibold">{leagueName}</span>
        <ChevronIcon />
      </button>
      <div className="mt-1 flex flex-col gap-1 px-4">
        {events.map((event) => (
          <MatchCard key={event.idEvent} event={event} />
        ))}
      </div>
    </section>
  )
}

function ChevronIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
