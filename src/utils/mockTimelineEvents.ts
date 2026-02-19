import type { SportsDbEvent } from '../types/event'
import type { TimelineEvent } from '../types/event'

/**
 * Build a mock events timeline when the API doesn't provide one.
 * Keeps the Events tab layout pixel-perfect; replace with real data when available.
 */
export function getMockTimelineEvents(event: SportsDbEvent): TimelineEvent[] {
  const home = event.strHomeTeam ?? 'Home'
  const away = event.strAwayTeam ?? 'Away'
  const id = event.idEvent

  return [
    { id: `${id}-1`, type: 'goal', minute: "89'", teamSide: 'home', primaryText: 'Gyokores (Odegard)' },
    { id: `${id}-2`, type: 'substitution', minute: "89'", teamSide: 'away', primaryText: '', playerIn: 'Ekitike', playerOut: 'Salah' },
    { id: `${id}-3`, type: 'substitution', minute: "89'", teamSide: 'home', primaryText: '', playerIn: 'Gyokores', playerOut: 'Odegard' },
    { id: `${id}-4`, type: 'yellow_card', minute: "78'", teamSide: 'home', primaryText: 'Saliba' },
    { id: `${id}-5`, type: 'corner', minute: "74'", teamSide: 'away', primaryText: '3rd corner' },
    { id: `${id}-6`, type: 'red_card', minute: "66'", teamSide: 'away', primaryText: 'Van Dijk Sent Off' },
    { id: `${id}-7`, type: 'substitution', minute: "67'", teamSide: 'home', primaryText: '', playerIn: 'Rice', playerOut: 'Zubemendi' },
    { id: `${id}-8`, type: 'substitution', minute: "67'", teamSide: 'away', primaryText: '', playerIn: 'Frimpong', playerOut: 'Robertson' },
    { id: `${id}-9`, type: 'goal', minute: "55'", teamSide: 'home', primaryText: 'Saka' },
    { id: `${id}-10`, type: 'corner', minute: "52'", teamSide: 'away', primaryText: '5th corner' },
    { id: `${id}-11`, type: 'corner', minute: "48'", teamSide: 'home', primaryText: '3rd Corner' },
    { id: `${id}-12`, type: 'yellow_card', minute: "34'", teamSide: 'away', primaryText: 'Konate' },
    { id: `${id}-13`, type: 'corner', minute: "16'", teamSide: 'away', primaryText: '2nd Corner' },
    { id: `${id}-14`, type: 'injury', minute: "44'", teamSide: 'away', primaryText: 'Jones Injured' },
    { id: `${id}-15`, type: 'goal', minute: "12'", teamSide: 'home', primaryText: 'Gyokores (Odegard)' },
    { id: `${id}-16`, type: 'corner', minute: "3'", teamSide: 'home', primaryText: '1st Corner' },
  ]
}
