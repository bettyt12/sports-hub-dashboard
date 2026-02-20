const DAYS = 'SUN MON TUE WED THU FRI SAT'.split(' ')
const MONTHS = 'JAN FEB MAR APR MAY JUN JUL AUG SEP OCT NOV DEC'.split(' ')

/**
 * Format YYYY-MM-DD as "WED 15 AUG" for the date bar.
 */
export function formatDateBarLabel(dateStr: string): string {
  const d = new Date(dateStr + 'T12:00:00')
  const day = d.getDay()
  const date = d.getDate()
  const month = d.getMonth()
  return `${DAYS[day] ?? '---'} ${date} ${MONTHS[month] ?? '---'}`
}

/**
 * Check if dateStr (YYYY-MM-DD) is today in local time.
 */
export function isToday(dateStr: string): boolean {
  const today = new Date()
  const y = today.getFullYear()
  const m = String(today.getMonth() + 1).padStart(2, '0')
  const d = String(today.getDate()).padStart(2, '0')
  return dateStr === `${y}-${m}-${d}`
}

/**
 * Get today in YYYY-MM-DD.
 */
export function getTodayISO(): string {
  const t = new Date()
  return t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0')
}

/**
 * Get a list of date strings (YYYY-MM-DD) for a range: daysBack before today, daysForward after.
 */
export function getDateRange(daysBack: number, daysForward: number): string[] {
  const out: string[] = []
  const t = new Date()
  for (let i = -daysBack; i <= daysForward; i++) {
    const d = new Date(t)
    d.setDate(d.getDate() + i)
    const y = d.getFullYear()
    const m = String(d.getMonth() + 1).padStart(2, '0')
    const day = String(d.getDate()).padStart(2, '0')
    out.push(`${y}-${m}-${day}`)
  }
  return out
}
