import type { SportsDbEvent } from '../types/event'
import type { MatchStatus } from '../types/event'

/**
 * Derive UI status and display label from API event.
 * The SportsDB uses codes: FT, HT, 1H, 2H, etc. strProgress may be "45:30 - 1st" or minute.
 */
export function getMatchStatus(event: SportsDbEvent): { status: MatchStatus; label: string } {
  const progress = (event.strProgress ?? '').trim()
  const status = (event.strStatus ?? '').trim()
  const p = progress.toUpperCase()
  const s = status.toUpperCase()

  if (s === 'FT' || p === 'FT' || s.includes('FINISHED') || p.includes('FULL TIME')) {
    return { status: 'finished', label: 'FT' }
  }
  if (p === 'HT' || s === 'HT' || progress.toLowerCase().includes('half')) {
    return { status: 'halftime', label: 'HT' }
  }
  const minuteMatch = progress.match(/(\d+)/)
  if (p && (p === '1H' || p === '2H' || minuteMatch)) {
    const minute = minuteMatch ? minuteMatch[1] : ''
    return { status: 'live', label: minute ? `${minute}'` : 'Live' }
  }

  const time = event.strTime ?? event.strEventTime ?? ''
  return { status: 'upcoming', label: time || '--:--' }
}
