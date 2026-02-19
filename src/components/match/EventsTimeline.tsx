import type { TimelineEvent } from '../../types/event'
import EventItem from './EventItem'

interface EventsTimelineProps {
  events: TimelineEvent[]
  homeScore: string | number
  awayScore: string | number
  kickOffTime?: string
}

export default function EventsTimeline({
  events,
  homeScore,
  awayScore,
  kickOffTime = '-13:00',
}: EventsTimelineProps) {
  return (
    <div className="px-4 py-6">
      <h2 className="text-league text-white font-semibold mb-4">Events</h2>
      <div className="border-t border-border pt-4">
        <TimelineDivider label={`Fulltime ${homeScore} - ${awayScore}`} />
        <div className="space-y-0 py-2">
          {events.map((ev) => (
            <EventItem key={ev.id} event={ev} />
          ))}
        </div>
        <TimelineDivider label="Halftime 1 - 0" />
        <p className="text-muted text-status py-4 text-center">Kick Off {kickOffTime}</p>
      </div>
    </div>
  )
}

function TimelineDivider({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-3 border-y border-border my-2">
      <span className="text-muted text-status">{label}</span>
    </div>
  )
}
