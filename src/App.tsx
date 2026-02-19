import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { ROUTES } from './routes'
import Layout from './components/layout/Layout'
import FixturesPage from './pages/FixturesPage'
import MatchDetailPage from './pages/MatchDetailPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Layout />}>
          <Route index element={<FixturesPage />} />
          <Route path={ROUTES.MATCH} element={<MatchDetailPage />} />
          <Route path="*" element={<Navigate to={ROUTES.HOME} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
