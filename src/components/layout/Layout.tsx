import { Outlet } from 'react-router-dom'
import Header from './Header'

export default function Layout() {
  return (
    <div className="min-h-screen bg-surface">
      <Header />
      <main className="flex justify-center">
        <div className="w-full max-w-4xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
