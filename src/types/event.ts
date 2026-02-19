/**
 * Types for The SportsDB API and UI.
 * Aligned with eventsnext.php and lookupevent.php responses.
 */

/** Raw event from API (eventsnext / lookupevent). */
export interface SportsDbEvent {
  idEvent: string
  idLeague: string
  strLeague: string
  strLeagueBadge?: string | null
  strLeagueLogo?: string | null
  strSeason: string | null
  strSport: string | null
  strEvent: string | null
  strEventAlternate: string | null
  dateEvent: string
  strDate: string | null
  strTime: string | null
  strEventTime?: string | null
  idHomeTeam: string
  idAwayTeam: string
  strHomeTeam: string
  strAwayTeam: string
  strHomeLogo?: string | null
  strAwayLogo?: string | null
  strHomeTeamBadge?: string | null
  strAwayTeamBadge?: string | null
  intHomeScore: string | null
  intAwayScore: string | null
  intRound?: string | null
  strProgress?: string | null
  strStatus?: string | null
  strResult?: string | null
  strDescriptionEN?: string | null
  strThumb?: string | null
  strBanner?: string | null
  [key: string]: string | null | undefined
}

/** API response for events list (eventsnext). */
export interface EventsNextResponse {
  events: SportsDbEvent[] | null
}

/** API response for single event (lookupevent). */
export interface LookupEventResponse {
  events: SportsDbEvent[] | null
}

/** Normalized status for UI (card left bar + label). */
export type MatchStatus = 'live' | 'halftime' | 'finished' | 'upcoming'

/** Timeline event type for match details (Events tab). */
export type TimelineEventType = 'goal' | 'substitution' | 'yellow_card' | 'red_card' | 'corner' | 'injury' | 'other'

/** Single timeline event (for Events tab). API may not provide; can use mock. */
export interface TimelineEvent {
  id: string
  type: TimelineEventType
  minute: string
  teamSide: 'home' | 'away'
  primaryText: string
  secondaryText?: string
  /** For substitutions: player in / player out */
  playerIn?: string
  playerOut?: string
}
