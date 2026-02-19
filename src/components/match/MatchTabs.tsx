const TABS = ['Details', 'Odds', 'Lineups', 'Events', 'Stats', 'Standings'] as const

export type MatchTabId = (typeof TABS)[number]

interface MatchTabsProps {
  active: MatchTabId
  onSelect: (tab: MatchTabId) => void
}

export default function MatchTabs({ active, onSelect }: MatchTabsProps) {
  return (
    <div className="flex items-center gap-6 px-4 py-3 bg-surface border-b border-border overflow-x-auto">
      {TABS.map((tab) => (
        <button
          key={tab}
          type="button"
          onClick={() => onSelect(tab)}
          className={`text-tab font-medium whitespace-nowrap pb-2 border-b-2 transition-colors ${
            active === tab
              ? 'text-live border-live'
              : 'text-muted border-transparent hover:text-white'
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
