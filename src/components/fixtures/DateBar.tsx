export interface DateOption {
  value: string | null
  label: string
  isToday: boolean
}

interface DateBarProps {
  dates: DateOption[]
  selectedDate: string | null
  onSelectDate: (value: string | null) => void
}

export default function DateBar({ dates, selectedDate, onSelectDate }: DateBarProps) {
  return (
    <div className="bg-surface-bar flex items-center gap-4 overflow-x-auto py-3 px-4">
      <div className="flex items-center gap-3 shrink-0">
        {dates.map(({ value, label, isToday }) => {
          const isSelected = value === selectedDate
          return (
            <button
              key={value ?? 'all'}
              type="button"
              onClick={() => onSelectDate(value)}
              className={`shrink-0 px-4 py-2 rounded-tab text-tab font-medium transition-colors ${
                isSelected
                  ? 'bg-live text-black'
                  : 'bg-transparent text-white/80 hover:text-white'
              }`}
            >
              {label}
            </button>
          )
        })}
      </div>
      <button
        type="button"
        className="ml-auto p-2 text-live shrink-0"
        aria-label="Calendar"
      >
        <CalendarIcon />
      </button>
    </div>
  )
}

function CalendarIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}
