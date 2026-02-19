import { useState, useEffect, useCallback } from 'react'
import { lookupeventUrl } from '../endpoints'
import type { SportsDbEvent } from '../types/event'
import type { LookupEventResponse } from '../types/event'

export interface UseMatchDetailsResult {
  event: SportsDbEvent | null
  loading: boolean
  error: Error | null
  refetch: () => Promise<void>
}

export function useMatchDetails(eventId: string | undefined): UseMatchDetailsResult {
  const [event, setEvent] = useState<SportsDbEvent | null>(null)
  const [loading, setLoading] = useState(Boolean(eventId))
  const [error, setError] = useState<Error | null>(null)

  // When navigating to a different match, clear previous data so we don't show the wrong event
  useEffect(() => {
    setEvent(null)
    setError(null)
    setLoading(Boolean(eventId))
  }, [eventId])

  const fetchMatch = useCallback(async () => {
    if (!eventId) {
      setEvent(null)
      setLoading(false)
      return
    }
    try {
      setError(null)
      setLoading(true)
      const res = await fetch(lookupeventUrl(eventId))
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const data: LookupEventResponse = await res.json()
      const list = data.events
      const single = Array.isArray(list) && list.length > 0 ? list[0] : null
      setEvent(single ?? null)
      if (!single && list?.length === 0) setError(new Error('Match not found'))
    } catch (e) {
      setError(e instanceof Error ? e : new Error('Failed to load match'))
      setEvent(null)
    } finally {
      setLoading(false)
    }
  }, [eventId])

  useEffect(() => {
    fetchMatch()
  }, [fetchMatch])

  return { event, loading, error, refetch: fetchMatch }
}
