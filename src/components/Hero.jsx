import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Hero() {
  const root = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-bg', {
        scale: 1.08,
        duration: 2.0,
        ease: 'expo.out',
      })
      gsap.from('.hero-word-l', {
        x: -120,
        opacity: 0,
        duration: 1.1,
        delay: 0.25,
        ease: 'expo.out',
      })
      gsap.from('.hero-word-r', {
        x: 120,
        opacity: 0,
        duration: 1.1,
        delay: 0.25,
        ease: 'expo.out',
      })
      gsap.from('.hero-mascot', {
        y: 80,
        scale: 0.85,
        rotate: -6,
        opacity: 0,
        duration: 1.4,
        delay: 0.45,
        ease: 'expo.out',
      })
      gsap.from('.hero-bottom > *', {
        y: 18, opacity: 0, duration: 0.85, delay: 0.95, stagger: 0.1, ease: 'expo.out',
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
      <div className="relative min-h-[46svh] md:min-h-[51svh] w-full overflow-hidden">
        <img
          src="/k2-team-illustration.jpg"
          alt=""
          className="hero-bg absolute inset-0 w-full h-full object-cover object-top select-none pointer-events-none"
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
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(10,10,10,0.0) 0%, rgba(10,10,10,0.45) 75%)',
          }}
          aria-hidden="true"
        />

        <div className="container-x relative z-10 h-full min-h-[46svh] md:min-h-[51svh] flex flex-col justify-between pt-24 md:pt-28 pb-6 md:pb-8">
          <h1 className="sr-only">K2 Mixed Martial Arts and Brazilian Jiu Jitsu</h1>

          <div className="flex-1 flex items-center justify-between gap-3 md:gap-6 lg:gap-10">
            <span
              className="hero-word-l font-display text-k2 leading-[0.9] uppercase tracking-[-0.01em] text-[clamp(2.4rem,7.4vw,6.5rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              aria-hidden="true"
            >
              MMA
            </span>
            <span
              className="hero-word-r font-display text-k2 leading-[0.9] uppercase tracking-[-0.01em] text-[clamp(2.4rem,7.4vw,6.5rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
              aria-hidden="true"
            >
              BJJ
            </span>
          </div>

          <div className="hero-bottom flex items-end justify-between gap-4">
            <a
              href="tel:+15613835026"
              className="group inline-flex items-center gap-3 font-display text-bone tracking-wider2 text-sm md:text-base uppercase border-b border-bone/40 pb-1 hover:text-k2 hover:border-k2 transition-colors duration-300"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-k2 k2-pulse" aria-hidden="true" />
              (561) 383-5026
            </a>
            <a
              href="#schedule"
              className="group inline-flex items-center gap-3 font-display text-bone tracking-wider2 text-sm md:text-base uppercase border-b border-bone/40 pb-1 hover:text-k2 hover:border-k2 transition-colors duration-300"
            >
              View the schedule
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="square"
                  strokeLinejoin="miter"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div
        className="hero-mascot pointer-events-none absolute left-1/2 -translate-x-1/2 z-20
                   bottom-[-36%] md:bottom-[-50%] lg:bottom-[-60%]
                   w-[56vw] max-w-[300px]
                   md:w-[38vw] md:max-w-[460px]
                   lg:w-[34vw] lg:max-w-[600px]"
        aria-hidden="true"
      >
        <img
          src="/k2-tornado-clear.png"
          alt=""
          className="w-full h-auto select-none drop-shadow-[0_30px_60px_rgba(0,0,0,0.55)]"
          draggable={false}
        />
      </div>
    </section>
  )
}
