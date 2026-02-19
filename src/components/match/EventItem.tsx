import type { TimelineEvent } from '../../types/event'

interface EventItemProps {
  event: TimelineEvent
}

export default function EventItem({ event }: EventItemProps) {
  const isGoal = event.type === 'goal'
  const isHome = event.teamSide === 'home'

  return (
    <div className={`flex items-center gap-3 py-2 ${isHome ? 'flex-row' : 'flex-row-reverse'}`}>
      <div className={`flex-1 min-w-0 ${isHome ? 'text-left' : 'text-right'}`}>
        {event.type === 'substitution' ? (
          <div className="space-y-0.5">
            <span className="text-white text-sm">{event.playerIn} IN</span>
            <span className="text-muted text-xs block">{event.playerOut} OUT</span>
          </div>
        ) : (
          <span className="text-white text-sm">{event.primaryText}</span>
        )}
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <EventIcon type={event.type} />
        <span
          className={`px-2 py-1 rounded-pill text-status font-medium ${
            isGoal ? 'bg-live text-white' : 'bg-surface-bar text-muted'
          }`}
        >
          {event.minute}
        </span>
      </div>
    </div>
  )
}

function EventIcon({ type }: { type: TimelineEvent['type'] }) {
  switch (type) {
    case 'goal':
      return (
        <span className="w-8 h-8 rounded-full bg-live flex items-center justify-center">
          <BallIcon />
        </span>
      )
    case 'substitution':
      return (
        <span className="flex flex-col">
          <span className="text-finished"><ArrowUpIcon /></span>
          <span className="text-live -mt-1"><ArrowDownIcon /></span>
        </span>
      )
    case 'yellow_card':
      return <span className="w-4 h-5 bg-yellow-500 rounded-sm" aria-hidden />
    case 'red_card':
      return <span className="w-4 h-5 bg-finished rounded-sm" aria-hidden />
    case 'corner':
      return <CornerIcon />
    case 'injury':
      return <InjuryIcon />
    default:
      return <span className="w-3 h-3 rounded-full bg-surface-bar" aria-hidden />
  }
}

function BallIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2l2.5 4.5L12 8l-2.5-1.5L12 2zM12 22l-2.5-4.5L12 16l2.5 1.5L12 22zM2 12l4.5 2.5L8 12l-1.5-2.5L2 12zM22 12l-4.5-2.5L16 12l1.5 2.5L22 12z" />
    </svg>
  )
}

function ArrowUpIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 14l5-5 5 5z" />
    </svg>
  )
}

function ArrowDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M7 10l5 5 5-5z" />
    </svg>
  )
}

function CornerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 20V4h16" />
      <path d="M4 4l4 4" />
    </svg>
  )
}

function InjuryIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="8" r="3" />
      <path d="M8 21v-4a4 4 0 0 1 8 0v4" />
      <path d="M12 17v2" />
    </svg>
  )
}
