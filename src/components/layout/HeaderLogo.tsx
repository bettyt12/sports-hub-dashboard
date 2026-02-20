import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

/** Put your logo in `public/` (e.g. logo.png). */
const LOGO_SRC = '/logo.png'

export default function HeaderLogo() {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <Link to={ROUTES.HOME} className="flex items-center shrink-0 gap-0.5 h-8">
      {!logoFailed ? (
        <img
          src={LOGO_SRC}
          alt="The Sports Hub"
          className="h-8 w-auto object-contain"
          onError={() => setLogoFailed(true)}
        />
      ) : (
        <span className="font-bold text-white flex items-center gap-0.5">
          <span>stat</span>
          <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" aria-hidden />
          <span>score</span>
        </span>
      )}
    </Link>
  )
}
