import { NavLink } from 'react-router-dom'
import { ROUTES } from '../../routes'

const TABS = [
  { label: 'Live', to: '#', end: true },
  { label: 'Matches', to: ROUTES.HOME, end: false },
  { label: 'Standings', to: '#', end: true },
  { label: 'Teams', to: '#', end: true },
  { label: 'Comparison', to: '#', end: true },
  { label: 'Statistics', to: '#', end: true },
  { label: 'Venues', to: '#', end: true },
] as const

export default function HeaderNav() {
  return (
    <nav className="hidden md:flex items-center gap-6 ml-8" aria-label="Main">
      {TABS.map(({ label, to, end }) => (
        <NavLink
          key={label}
          to={to}
          end={end}
          className={({ isActive }) =>
            `text-tab font-medium transition-colors pb-1 border-b-2 ${
              isActive ? 'text-white border-white' : 'text-white/70 border-transparent hover:text-white'
            }`
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
