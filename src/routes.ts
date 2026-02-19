/**
 * Centralized route paths for the app.
 * Use these instead of magic strings for navigation and routing.
 */

export const ROUTES = {
  HOME: '/',
  MATCH: '/match/:id',
} as const

/**
 * Build the match detail URL for a given event id.
 */
export function matchDetail(id: string): string {
  return `/match/${id}`
}
