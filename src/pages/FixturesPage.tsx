import { useState, useMemo } from 'react'
import { useFixtures } from '../hooks/useFixtures'
import { usePolling } from '../hooks/usePolling'
import DateBar from '../components/fixtures/DateBar'
import FilterTabs from '../components/fixtures/FilterTabs'
import LeagueSection from '../components/fixtures/LeagueSection'
import { getMatchStatus } from '../utils/matchStatus'
import { formatDateBarLabel, isToday } from '../utils/dateFormat'
import type { SportsDbEvent } from '../types/event'

type TabId = 'all' | 'live' | 'favorites'

function groupByLeague(events: SportsDbEvent[]): Map<string, SportsDbEvent[]> {
  const map = new Map<string, SportsDbEvent[]>()
  for (const event of events) {
    const league = event.strLeague || 'Other'
    if (!map.has(league)) map.set(league, [])
    map.get(league)!.push(event)
  }
  return map
}

/** Extract YYYY-MM-DD from dateEvent (may be "YYYY-MM-DD" or with time). */
function getEventDate(event: SportsDbEvent): string | null {
  const d = event.dateEvent
  if (!d) return null
  return d.slice(0, 10)
}

export default function FixturesPage() {
  const [activeTab, setActiveTab] = useState<TabId>('all')
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const { events, loading, error, refetch } = useFixtures()

  usePolling(refetch, [])

  const dateOptions = useMemo(() => {
    const set = new Set<string>()
    events.forEach((e) => {
      const d = getEventDate(e)
      if (d) set.add(d)
    })
    const sorted = Array.from(set).sort()
    const options: { value: string | null; label: string; isToday: boolean }[] = [
      { value: null, label: 'All', isToday: false },
    ]
    sorted.forEach((d) => {
      const full = formatDateBarLabel(d)
      const dayAndMonth = full.split(' ').slice(1).join(' ')
      options.push({
        value: d,
        label: isToday(d) ? `Today ${dayAndMonth}` : full,
        isToday: isToday(d),
      })
    })
    return options
  }, [events])

  const filteredByDate = useMemo(() => {
    if (selectedDate === null) return events
    return events.filter((e) => getEventDate(e) === selectedDate)
  }, [events, selectedDate])

  const filtered = useMemo(() => {
    if (activeTab === 'all') return filteredByDate
    if (activeTab === 'live') {
      return filteredByDate.filter((e) => {
        const { status } = getMatchStatus(e)
        return status === 'live' || status === 'halftime'
      })
    }
    return filteredByDate
  }, [filteredByDate, activeTab])

  const byLeague = useMemo(() => groupByLeague(filtered), [filtered])


  if (error) {
    return (
      <div className="p-6">
        <h1 className="text-page-title text-white mb-4">Fixtures</h1>
        <div className="bg-surface-card border border-finished/30 rounded-card p-6 text-center">
          <p className="text-white mb-2">Could not load fixtures.</p>
          <p className="text-muted text-sm mb-4">{error.message}</p>
          <button
            type="button"
            onClick={() => refetch()}
            className="px-4 py-2 bg-header text-white rounded-button hover:bg-header-hover"
          >
            Retry
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pb-8">
      <h1 className="text-page-title text-white px-4 pt-6 pb-2">Matches</h1>
      <DateBar
        dates={dateOptions}
        selectedDate={selectedDate}
        onSelectDate={setSelectedDate}
      />
      <FilterTabs
        active={activeTab}
        onSelect={setActiveTab}
        counts={{
          all: filteredByDate.length,
          live: filteredByDate.filter((e) => ['live', 'halftime'].includes(getMatchStatus(e).status)).length,
          favorites: 0,
        }}
      />
      <div className="px-4 pt-4">
        {loading && events.length === 0 ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-20 bg-surface-card rounded-card animate-pulse"
                aria-hidden
              />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="py-12 text-center text-muted">
            <p>No matches to show.</p>
          </div>
        ) : (
          Array.from(byLeague.entries()).map(([leagueName, leagueEvents]) => (
            <LeagueSection
              key={leagueName}
              leagueName={leagueName}
              events={leagueEvents}
            />
          ))
        )}
      </div>
    </div>
  )
}
