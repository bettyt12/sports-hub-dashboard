import { Link } from 'react-router-dom'
import { matchDetail } from '../../routes'
import type { SportsDbEvent } from '../../types/event'
import { getMatchStatus } from '../../utils/matchStatus'

interface MatchCardProps {
  event: SportsDbEvent
}

function teamLogo(url: string | null | undefined) {
  if (url) {
    return (
      <img
        src={url}
        alt=""
        className="w-6 h-6 object-contain shrink-0"
      />
    )
  }
  return (
    <div className="w-6 h-6 rounded-full bg-surface-bar flex items-center justify-center text-xs text-muted shrink-0" aria-hidden>
      ?
    </div>
  )
}

export default function MatchCard({ event }: MatchCardProps) {
  const { status, label } = getMatchStatus(event)
  const homeLogo = event.strHomeTeamBadge ?? event.strHomeLogo
  const awayLogo = event.strAwayTeamBadge ?? event.strAwayLogo
  const homeScore = event.intHomeScore != null ? event.intHomeScore : null
  const awayScore = event.intAwayScore != null ? event.intAwayScore : null
  const hasScore = status !== 'upcoming' && homeScore != null && awayScore != null

  const barColor =
    status === 'finished'
      ? 'bg-finished'
      : status === 'live' || status === 'halftime'
        ? 'bg-live'
        : null

  return (
    <Link
      to={matchDetail(event.idEvent)}
      className="flex items-stretch bg-surface-card rounded-card overflow-hidden border border-border/50 hover:border-border transition-colors min-h-[72px]"
    >
      {barColor && (
        <div className={`w-status-bar shrink-0 self-stretch ${barColor}`} aria-hidden />
      )}
      <div className="flex flex-1 items-center gap-3 px-card-px py-card-py min-w-0">
        <div className="flex flex-col items-center shrink-0 w-10">
          <span
            className={`text-status font-medium ${
              status === 'live' || status === 'halftime' ? 'text-live' : 'text-white'
            }`}
          >
            {label}
          </span>
          {(status === 'live' || status === 'halftime') && (
            <div className="w-6 h-0.5 bg-live rounded mt-0.5" aria-hidden />
          )}
        </div>
        <div className="flex-1 grid grid-cols-[1fr_auto_auto] gap-2 items-center min-w-0">
          <div className="flex flex-col gap-1 min-w-0">
            <div className="flex items-center gap-2 min-w-0">
              {teamLogo(homeLogo)}
              <span className="text-team text-white truncate">{event.strHomeTeam}</span>
            </div>
            <div className="flex items-center gap-2 min-w-0">
              {teamLogo(awayLogo)}
              <span className="text-team text-white truncate">{event.strAwayTeam}</span>
            </div>
          </div>
          {hasScore && (
            <div className="flex flex-col items-end text-score text-white">
              <span>{homeScore}</span>
              <span>{awayScore}</span>
            </div>
          )}
          <button
            type="button"
            onClick={(e) => e.preventDefault()}
            className="p-2 text-muted hover:text-white rounded-full hover:bg-white/10"
            aria-label="More options"
          >
            <KebabIcon />
          </button>
        </div>
      </div>
    </Link>
  )
}

function KebabIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
    </svg>
  )
}
