import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'
import type { SportsDbEvent } from '../../types/event'
import { getMatchStatus } from '../../utils/matchStatus'

interface MatchHeaderProps {
  event: SportsDbEvent
}

function formatDate(dateStr: string | null): string {
  if (!dateStr) return '--'
  const d = new Date(dateStr)
  const day = d.getDate()
  const months = 'JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'.split(' ')
  const month = months[d.getMonth()] ?? '---'
  return `${day} ${month}`
}

export default function MatchHeader({ event }: MatchHeaderProps) {
  const { label } = getMatchStatus(event)
  const homeLogo = event.strHomeTeamBadge ?? event.strHomeLogo
  const awayLogo = event.strAwayTeamBadge ?? event.strAwayLogo
  const leagueLogo = event.strLeagueBadge ?? event.strLeagueLogo
  const homeScore = event.intHomeScore ?? '-'
  const awayScore = event.intAwayScore ?? '-'
  const isFinished = label === 'FT'

  return (
    <div className="bg-surface-card border-b border-border px-4 py-4">
      <Link
        to={ROUTES.HOME}
        className="inline-flex items-center gap-2 text-muted hover:text-white text-sm mb-4"
      >
        <ChevronLeftIcon />
        {leagueLogo ? (
          <img src={leagueLogo} alt="" className="w-5 h-5 object-contain shrink-0" />
        ) : null}
        <span>{event.strLeague || 'League'}</span>
      </Link>
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col items-center min-w-0 flex-1">
          {homeLogo ? (
            <img src={homeLogo} alt="" className="w-12 h-12 object-contain" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-surface-bar flex items-center justify-center text-muted text-xs">H</div>
          )}
          <span className="text-team text-white mt-2 truncate w-full text-center">{event.strHomeTeam}</span>
        </div>
        <div className="flex flex-col items-center shrink-0 px-4">
          <span className="text-surface-bar text-status mb-1">{formatDate(event.dateEvent)}</span>
          <span className="text-2xl font-bold text-white tabular-nums">{homeScore} - {awayScore}</span>
          <span
            className={`mt-2 px-3 py-1 rounded-pill text-status font-medium ${
              isFinished ? 'bg-finished text-white' : 'bg-surface-bar text-muted'
            }`}
          >
            {isFinished ? 'Finished' : label}
          </span>
        </div>
        <div className="flex flex-col items-center min-w-0 flex-1">
          {awayLogo ? (
            <img src={awayLogo} alt="" className="w-12 h-12 object-contain" />
          ) : (
            <div className="w-12 h-12 rounded-full bg-surface-bar flex items-center justify-center text-muted text-xs">A</div>
          )}
          <span className="text-team text-white mt-2 truncate w-full text-center">{event.strAwayTeam}</span>
        </div>
      </div>
    </div>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}
