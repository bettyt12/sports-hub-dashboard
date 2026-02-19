import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ROUTES } from '../routes'
import { useMatchDetails } from '../hooks/useMatchDetails'
import MatchHeader from '../components/match/MatchHeader'
import MatchTabs, { type MatchTabId } from '../components/match/MatchTabs'
import EventsTimeline from '../components/match/EventsTimeline'
import { getMockTimelineEvents } from '../utils/mockTimelineEvents'

export default function MatchDetailPage() {
  const { id } = useParams<{ id: string }>()
  const { event, loading, error } = useMatchDetails(id)
  const [activeTab, setActiveTab] = useState<MatchTabId>('Events')

  if (loading && !event) {
    return (
      <div className="p-6">
        <div className="h-8 w-48 bg-surface-card rounded animate-pulse mb-6" />
        <div className="h-32 bg-surface-card rounded-card animate-pulse" />
      </div>
    )
  }

  if (error || !event) {
    return (
      <div className="p-6">
        <div className="bg-surface-card border border-finished/30 rounded-card p-6 text-center">
          <p className="text-white mb-2">Match not found</p>
          <p className="text-muted text-sm mb-4">{error?.message}</p>
          <Link to={ROUTES.HOME} className="text-live hover:underline">Back to fixtures</Link>
        </div>
      </div>
    )
  }

  const timelineEvents = getMockTimelineEvents(event)
  const homeScore = event.intHomeScore ?? '0'
  const awayScore = event.intAwayScore ?? '0'
  const kickOff = event.strTime ?? event.strEventTime ?? '-13:00'

  return (
    <div className="pb-8">
      <MatchHeader event={event} />
      <MatchTabs active={activeTab} onSelect={setActiveTab} />
      {activeTab === 'Events' && (
        <EventsTimeline
          events={timelineEvents}
          homeScore={homeScore}
          awayScore={awayScore}
          kickOffTime={kickOff}
        />
      )}
      {activeTab !== 'Events' && (
        <div className="px-4 py-8 text-center text-muted text-sm">
          {activeTab} — Coming soon
        </div>
      )}
    </div>
  )
}
