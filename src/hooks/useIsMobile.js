import { useEffect, useState } from 'react'

const QUERY = '(max-width: 767px)'

function getInitial() {
  if (typeof window === 'undefined') return false
  return window.matchMedia(QUERY).matches
}

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(getInitial)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mql = window.matchMedia(QUERY)
    const handler = (e) => setIsMobile(e.matches)
    mql.addEventListener('change', handler)
    setIsMobile(mql.matches)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return isMobile
}
