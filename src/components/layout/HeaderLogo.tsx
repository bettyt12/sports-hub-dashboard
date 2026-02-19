import { Link } from 'react-router-dom'
import { ROUTES } from '../../routes'

export default function HeaderLogo() {
  return (
    <Link to={ROUTES.HOME} className="flex items-center shrink-0">
      <span className="font-bold text-white">
        <span className="text-white">stat</span>
        <span className="text-white/90">score</span>
      </span>
    </Link>
  )
}
