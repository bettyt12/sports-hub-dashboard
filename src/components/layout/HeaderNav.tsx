import { useNavigate } from 'react-router-dom'
import type { HeaderTabId } from './types'
import { ROUTES } from '../../routes'

const TABS: HeaderTabId[] = [
  'Live',
  'Matches',
  'Standings',
  'Teams',
  'Comparison',
  'Statistics',
  'Venues',
]

interface HeaderNavProps {
  activeTab: HeaderTabId
  onTabChange: (tab: HeaderTabId) => void
}

export default function HeaderNav({ activeTab, onTabChange }: HeaderNavProps) {
  const navigate = useNavigate()

  const handleTabClick = (tab: HeaderTabId) => {
    onTabChange(tab)
    if (tab === 'Matches') {
      navigate(ROUTES.HOME)
    }
  }

  return (
    <nav className="hidden md:flex items-center gap-6 ml-8" aria-label="Main">
      {TABS.map((tab) => {
        const isActive = activeTab === tab
        return (
          <button
            key={tab}
            type="button"
            onClick={() => handleTabClick(tab)}
            className={`text-tab font-medium transition-colors pb-1 border-b-2 ${
              isActive
                ? 'text-secondary  border-secondary'
                : 'text-white/60 border-transparent hover:text-white/80'
            }`}
          >
            {tab}
          </button>
        )
      })}
    </nav>
  )
}
