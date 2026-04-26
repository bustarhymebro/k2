import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function MobileHero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.m-hero-bg', { scale: 1.08, duration: 1.6, ease: 'expo.out' })
      gsap.from('.m-hero-mascot', {
        y: 40,
        scale: 0.9,
        rotate: -4,
        opacity: 0,
        duration: 1.2,
        delay: 0.3,
        ease: 'expo.out',
      })
      gsap.from('.m-hero-bottom > *', {
        y: 14, opacity: 0, duration: 0.7, delay: 0.6, stagger: 0.08, ease: 'expo.out',
      })
    }, root)
    return () => ctx.revert()
  }, [])

  return (
    <section
      id="hero"
      ref={root}
      className="relative w-full bg-ink overflow-visible"
    >
      <div className="relative min-h-[44svh] w-full overflow-hidden">
        <img
          src="/k2-team-illustration.jpg"
          alt=""
          className="m-hero-bg absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
          draggable={false}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(180deg, rgba(10,10,10,0.92) 0%, rgba(10,10,10,0.45) 35%, rgba(10,10,10,0.45) 65%, rgba(10,10,10,0.96) 100%)',
          }}
          aria-hidden="true"
        />

        <div className="container-x relative z-10 h-full min-h-[44svh] flex flex-col justify-end pt-24 pb-5">
          <h1 className="sr-only">K2 Mixed Martial Arts and Brazilian Jiu Jitsu</h1>

          <div className="m-hero-bottom flex items-end justify-between gap-3">
            <a
              href="tel:+15613835026"
              className="group inline-flex items-center gap-2 font-display text-bone tracking-wider2 text-[12px] uppercase border-b border-bone/40 pb-1 hover:text-k2 hover:border-k2 transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-k2 k2-pulse" aria-hidden="true" />
              (561) 383-5026
            </a>
            <a
              href="#schedule"
              className="group inline-flex items-center gap-2 font-display text-bone tracking-wider2 text-[12px] uppercase border-b border-bone/40 pb-1 hover:text-k2 hover:border-k2 transition-colors duration-300"
            >
              View the schedule
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className="m-hero-mascot pointer-events-none absolute left-1/2 -translate-x-1/2 z-20
                   bottom-[-26%]
                   w-[58vw] max-w-[260px]"
        aria-hidden="true"
      >
        <img
          src="/k2-tornado-clear.png"
          alt=""
          className="w-full h-auto select-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
          draggable={false}
        />
      </div>
    </section>
  )
}
