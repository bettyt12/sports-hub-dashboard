import HeaderLogo from './HeaderLogo'
import HeaderNav from './HeaderNav'
import HeaderControls from './HeaderControls'

export default function Header() {
  return (
    <header className="h-header bg-header px-4 flex items-center gap-4 w-full">
      <HeaderLogo />
      <HeaderNav />
      <HeaderControls />
    </header>
  )
}
