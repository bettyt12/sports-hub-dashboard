# The Sports Hub

A dark-mode sports dashboard for browsing football fixtures and match details. Built with React, TypeScript, and Tailwind, and powered by [The SportsDB](https://www.thesportsdb.com/) public API.

**Live demo:** [sports-hub-dashboard.vercel.app](https://sports-hub-dashboard.vercel.app/)

---

## What’s in it

- **Fixtures view** – Matches grouped by league, with a date bar (including an “All” option on mobile), filter tabs (All / Live / Favorites), and cards showing team logos, scores, and status (FT, HT, live minute, or kick-off).
- **Live updates** – Fixtures refresh every 18 seconds while you’re on the dashboard.
- **Match details** – Click any match to see the head-to-head header, league logo when available, and an events timeline (goals, cards, subs, etc.). We use mock timeline data when the API doesn’t provide events.
- **Navigation** – Match cards go to `/match/:id`; back takes you to the dashboard.

## Tech

React 18, TypeScript, Vite, React Router v6, Tailwind CSS (dark theme, no component library).

---

## How to run it

You’ll need **Node.js 18+** and npm (or yarn/pnpm).

1. **Clone the repo** (if you haven’t already) and go into the project folder:
   ```bash
   cd sports-hub-dashboard
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the dev server:**
   ```bash
   npm run dev
   ```
   The app will be at **http://localhost:5173**. Edit the code and it’ll hot-reload.

4. **Optional – production build and preview:**
   ```bash
   npm run build
   npm run preview
   ```
   This builds into `dist/` and serves it locally so you can test the production build.

---

## Project layout (quick reference)

- `src/routes.ts` – Route paths and `matchDetail(id)` helper  
- `src/endpoints.ts` – The SportsDB base URL and endpoint helpers  
- `src/types/event.ts` – Event types for API and UI  
- `src/hooks/` – `useFixtures`, `useMatchDetails`, `usePolling`  
- `src/components/layout/` – Header, logo, nav  
- `src/components/fixtures/` – DateBar, FilterTabs, LeagueSection, MatchCard  
- `src/components/match/` – MatchHeader, MatchTabs, EventsTimeline, EventItem  
- `src/pages/` – FixturesPage, MatchDetailPage  
- `src/utils/` – date formatting, match status, mock timeline events  

---

## API

Fixtures and match details come from The SportsDB. We use the free API key `3` as in the original setup. Fixtures: `GET .../eventsnext.php?id=133602` (Premier League). Match detail: `GET .../lookupevent.php?id={EVENT_ID}`.
