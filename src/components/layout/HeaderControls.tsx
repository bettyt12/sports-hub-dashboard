export default function HeaderControls() {
  return (
    <div className="flex items-center gap-4 ml-auto shrink-0">
      <button type="button" className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10" aria-label="Globe">
        <GlobeIcon />
      </button>
      <button type="button" className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10" aria-label="Football">
        <FootballIcon />
      </button>
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 text-white text-sm">
        <span>Premier League</span>
        <ChevronDownIcon />
      </div>
      <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/10 text-white text-sm">
        <span>2024/25</span>
        <ChevronDownIcon />
      </div>
      <button type="button" className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10" aria-label="Region">
        <FlagIcon />
      </button>
      <button type="button" className="p-2 text-white/90 hover:text-white rounded-full hover:bg-white/10 md:hidden" aria-label="Menu">
        <MenuIcon />
      </button>
    </div>
  )
}

function GlobeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  )
}

function FootballIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 2l2.5 4.5L12 8l-2.5-1.5L12 2zM12 22l-2.5-4.5L12 16l2.5 1.5L12 22zM2 12l4.5 2.5L8 12l-1.5-2.5L2 12zM22 12l-4.5-2.5L16 12l1.5 2.5L22 12z" />
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
    </svg>
  )
}

function ChevronDownIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

function FlagIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" y1="22" x2="4" y2="15" />
    </svg>
  )
}

function MenuIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  )
}
