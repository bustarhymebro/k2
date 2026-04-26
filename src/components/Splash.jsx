import { useEffect, useRef, useState } from 'react'

const FALLBACK_MS = 8500

export default function Splash() {
  const alreadyShown =
    typeof window !== 'undefined' &&
    window.sessionStorage?.getItem('k2_splash_shown') === '1'
  const [phase, setPhase] = useState(alreadyShown ? 'done' : 'show')
  const videoRef = useRef(null)

  useEffect(() => {
    if (alreadyShown) return
    document.body.style.overflow = 'hidden'
    try {
      window.sessionStorage.setItem('k2_splash_shown', '1')
    } catch {}

    const dismiss = () => setPhase('fading')
    const fallback = setTimeout(dismiss, FALLBACK_MS)
    const remove = setTimeout(() => {
      setPhase('done')
      document.body.style.overflow = ''
    }, FALLBACK_MS + 700)

    const v = videoRef.current
    if (v) {
      v.addEventListener('ended', dismiss, { once: true })
    }

    return () => {
      clearTimeout(fallback)
      clearTimeout(remove)
      document.body.style.overflow = ''
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (phase === 'done') return null

  return (
    <div
      className={`fixed inset-0 z-[200] bg-ink flex items-center justify-center transition-opacity duration-700 ease-out ${
        phase === 'fading' ? 'opacity-0' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        src="/k2-tornado-loop.mp4"
        autoPlay
        muted
        playsInline
        preload="auto"
        className="w-[88vw] max-w-[760px] h-auto select-none pointer-events-none"
      />
    </div>
  )
}
