import { useEffect, useState } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import type { HeaderTabId } from './types'
import Header from './Header'

export default function Layout() {
  const location = useLocation()
  const [activeTab, setActiveTab] = useState<HeaderTabId>('Matches')

  // Keep "Matches" active when we're on fixtures or match detail (no unique URL for other tabs)
  useEffect(() => {
    const path = location.pathname
    if (path === '/' || path.startsWith('/match/')) {
      setActiveTab('Matches')
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-surface">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="flex justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
