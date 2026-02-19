import { useEffect, useRef } from 'react'

const POLL_INTERVAL_MS = 18_000 // 18 seconds (within 15–20s)

/**
 * Calls callback every POLL_INTERVAL_MS. Cleans up on unmount or when deps change.
 */
export function usePolling(callback: () => void, deps: React.DependencyList) {
  const savedCallback = useRef(callback)
  savedCallback.current = callback

  useEffect(() => {
    const tick = () => savedCallback.current()
    tick()
    const id = setInterval(tick, POLL_INTERVAL_MS)
    return () => clearInterval(id)
  }, deps)
}
