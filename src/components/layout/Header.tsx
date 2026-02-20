import type { HeaderTabId } from './types'
import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderControls from './HeaderControls'

interface HeaderProps {
  activeTab: HeaderTabId
  onTabChange: (tab: HeaderTabId) => void
}

export default function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="h-header bg-header px-4 flex items-center gap-4 w-full">
      <HeaderLogo />
      <HeaderNav activeTab={activeTab} onTabChange={onTabChange} />
      <HeaderControls />
    </header>
  )
}
