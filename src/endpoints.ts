/**
 * The SportsDB API base and endpoints.
 * API key 3 is the free test key per assessment.
 */

export const API_BASE = 'https://www.thesportsdb.com/api/v1/json/3'

export const API_KEY = '3'

/** Premier League league id (used for fixtures list). */
export const DEFAULT_LEAGUE_ID = '133602'

/**
 * Upcoming/next events for a league (or team).
 * Use for the fixtures dashboard.
 */
export function eventsNextUrl(leagueOrTeamId: string): string {
  return `${API_BASE}/eventsnext.php?id=${leagueOrTeamId}`
}

/**
 * Single event details by id.
 * Use for the match detail view.
 */
export function lookupeventUrl(eventId: string): string {
  return `${API_BASE}/lookupevent.php?id=${eventId}`
}
