import { useState, useEffect, useCallback } from 'react'
import { eventsNextUrl, DEFAULT_LEAGUE_ID } from '../endpoints'
import type { SportsDbEvent } from '../types/event'
import type { EventsNextResponse } from '../types/event'

export interface UseFixturesResult {
  events: SportsDbEvent[]
  loading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export function useFixtures(leagueId: string = DEFAULT_LEAGUE_ID): UseFixturesResult {
  const [events, setEvents] = useState<SportsDbEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchFixtures = useCallback(async () => {
    try {
      setError(null)
      const res = await fetch(eventsNextUrl(leagueId))
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: EventsNextResponse = await res.json()
      const list = data.events ?? []
      setEvents(Array.isArray(list) ? list : [])
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Failed to load fixtures'))
      setEvents([])
    } finally {
      setLoading(false)
    }
  }, [leagueId])

  useEffect(() => {
    setLoading(true)
    fetchFixtures()
  }, [fetchFixtures])

  return { events, loading, error, refetch: fetchFixtures }
}
