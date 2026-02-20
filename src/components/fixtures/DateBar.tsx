import { getTodayISO, isToday } from '../../utils/dateFormat'

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
  const dateOnlyOptions = dates.filter((d) => d.value !== null) as (DateOption & { value: string })[]
  const currentIndex =
    selectedDate === null
      ? -1
      : dateOnlyOptions.findIndex((d) => d.value === selectedDate)
  const atFirstDate = currentIndex === 0
  const atLastDate = currentIndex >= 0 && currentIndex === dateOnlyOptions.length - 1

  const handlePrev = () => {
    if (dateOnlyOptions.length === 0) return
    if (currentIndex > 0) {
      onSelectDate(dateOnlyOptions[currentIndex - 1].value)
    } else if (currentIndex === -1) {
      onSelectDate(dateOnlyOptions[dateOnlyOptions.length - 1].value)
    }
    // when currentIndex === 0, button is disabled
  }

  const handleNext = () => {
    if (dateOnlyOptions.length === 0) return
    if (currentIndex === -1) {
      onSelectDate(dateOnlyOptions[0].value)
    } else if (currentIndex < dateOnlyOptions.length - 1) {
      onSelectDate(dateOnlyOptions[currentIndex + 1].value)
    }
    // when at last date, button is disabled
  }

  const handleToday = () => onSelectDate(getTodayISO())

  const centerLabel =
    selectedDate === null
      ? 'All'
      : isToday(selectedDate)
        ? 'Today'
        : dateOnlyOptions.find((d) => d.value === selectedDate)?.label ?? selectedDate

  return (
    <>
      {/* Desktop: compact bar with arrows and Today */}
      <div className="hidden md:flex items-center w-full py-3 px-4">
        <div className="w-full flex items-center justify-between rounded-xl bg-[#1A1B24] px-4 py-3">
          <button
            type="button"
            onClick={handlePrev}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-40 disabled:pointer-events-none"
            aria-label="Previous day"
            disabled={atFirstDate}
          >
            <ChevronLeftIcon />
          </button>
          <button
            type="button"
            onClick={handleToday}
            className="flex items-center gap-2 text-white font-medium hover:bg-white/10 py-2 px-3 rounded-lg transition-colors min-w-[8rem] justify-center"
          >
            <CalendarIcon className="w-5 h-5 shrink-0" />
            <span>{centerLabel}</span>
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors disabled:opacity-40 disabled:pointer-events-none"
            aria-label="Next day"
            disabled={atLastDate}
          >
            <ChevronRightIcon />
          </button>
        </div>
      </div>

      {/* Mobile: All tab (fixed) + scrollable date pills + calendar */}
      <div className="md:hidden bg-surface-bar flex items-center py-3 px-4 gap-0">
        <button
          type="button"
          onClick={() => onSelectDate(null)}
          className={`shrink-0 px-4 py-2 rounded-tab text-tab font-medium transition-colors mr-2 ${
            selectedDate === null
              ? 'bg-white/10 text-live'
              : 'bg-transparent text-white/80 hover:text-white'
          }`}
        >
          All
        </button>
        <div className="flex-1 min-w-0 relative">
          <div className="overflow-x-auto scrollbar-none flex gap-3 py-1 -mx-1 px-1">
            {dates.filter((d) => d.value !== null).map(({ value, label }) => {
              const isSelected = value === selectedDate
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => onSelectDate(value)}
                  className={`shrink-0 px-4 py-2 rounded-tab text-tab font-medium transition-colors ${
                    isSelected
                      ? 'bg-white/10 text-live'
                      : 'bg-transparent text-white/80 hover:text-white'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </div>
          <div
            className="absolute -left-2 top-0 bottom-0 w-20 pointer-events-none bg-gradient-to-r from-surface-bar to-transparent"
            aria-hidden
          />
          <div
            className="absolute -right-2 top-0 bottom-0 w-10 pointer-events-none bg-gradient-to-l from-surface-bar to-transparent"
            aria-hidden
          />
        </div>
        <button
          type="button"
          onClick={handleToday}
          className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center shrink-0 text-live ml-4"
          aria-label="Calendar"
        >
          <CalendarIcon className="w-5 h-5 text-live" />
        </button>
      </div>
    </>
  )
}

function CalendarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  )
}

function ChevronLeftIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" />
    </svg>
  )
}

function ChevronRightIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 18l6-6-6-6" />
    </svg>
  )
}
