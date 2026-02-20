export type TabId = 'all' | 'live' | 'favorites'

const TABS: { id: TabId; label: string; icon?: 'live' | 'heart' }[] = [
  { id: 'all', label: 'All' },
  { id: 'live', label: 'Live', icon: 'live' },
  { id: 'favorites', label: 'Favorites', icon: 'heart' },
]

interface FilterTabsProps {
  active: TabId
  onSelect: (id: TabId) => void
  counts?: Partial<Record<TabId, number>>
}

export default function FilterTabs({ active, onSelect, counts = {} }: FilterTabsProps) {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-surface">
      {TABS.map(({ id, label, icon }) => {
        const count = counts[id] ?? 0
        return (
        <button
          key={id}
          type="button"
          onClick={() => onSelect(id)}
          className={`flex items-center gap-2 px-4 py-2 rounded-tab text-tab font-medium transition-colors ${
            active === id
              ? 'bg-live text-white'
              : 'bg-surface-bar text-white hover:bg-surface-card'
          }`}
        >
          {icon === 'live' && <LiveIcon />}
          {icon === 'heart' && <HeartIcon />}
          <span>{label}</span>
          <span className="min-w-[1.25rem] px-1.5 py-0.5 rounded-md bg-black/20 text-center text-xs font-medium">
            {count}
          </span>
        </button>
        )
      })}
    </div>
  )
}

function LiveIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 2a10 10 0 0 1 10 10c0 5.52-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z" />
      <circle cx="12" cy="12" r="3" fill="currentColor" />
    </svg>
  )
}

function HeartIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}
