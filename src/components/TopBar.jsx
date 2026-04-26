import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import TornadoLogo from './TornadoLogo.jsx'

const navItems = [
  { label: 'About',    to: '/#about' },
  { label: 'Programs', to: '/#programs' },
  { label: 'Schedule', to: '/#schedule' },
  { label: 'Coach',    to: '/#coach' },
  { label: 'Visit',    to: '/#location' },
]

function parseHashTo(to) {
  if (to.startsWith('/#')) {
    return { pathname: '/', hash: to.slice(1) }
  }
  return { pathname: to }
}

export default function TopBar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-mute">
      <div className="container-x flex items-center justify-between gap-3 py-3 md:py-4">
        <Link
          to="/"
          className="flex items-center gap-2.5 md:gap-4 group min-w-0 shrink-0"
          aria-label="K2 Mixed Martial Arts and Brazilian Jiu Jitsu, home"
        >
          <span className="block w-9 h-9 md:w-11 md:h-11 shrink-0">
            <TornadoLogo size="100%" intensity="rage" glow={false} />
          </span>
          <span className="flex flex-col leading-[1.05] min-w-0">
            <span className="font-display text-ink text-[13px] md:text-xl tracking-punch whitespace-nowrap">
              K2 Mixed Martial Arts
            </span>
            <span className="font-display text-ink/75 text-[10px] md:text-[13px] tracking-wider2 uppercase whitespace-nowrap">
              &amp; Brazilian Jiu Jitsu
            </span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 xl:gap-9" aria-label="Primary">
          {navItems.map((item) => {
            const target = parseHashTo(item.to)
            const isActive =
              item.to.startsWith('/#') &&
              location.pathname === '/' &&
              location.hash === item.to.slice(1)
            return (
              <NavLink
                key={item.label}
                to={target}
                end
                className={() =>
                  `font-display text-[13px] xl:text-sm uppercase tracking-wider2 transition-colors duration-200 hover:text-k2 ${
                    isActive ? 'text-k2' : 'text-ink/85'
                  }`
                }
              >
                {item.label}
              </NavLink>
            )
          })}
        </nav>

        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <a
            href="tel:+15613835026"
            className="hidden sm:inline-flex group items-center gap-2 md:gap-3 border border-ink bg-k2 text-ink px-2.5 py-1.5 md:px-4 md:py-2.5 hover:bg-ink hover:text-k2 transition-colors duration-300"
            aria-label="Call K2"
          >
            <span className="w-1.5 h-1.5 bg-ink rounded-full group-hover:bg-k2 k2-pulse" aria-hidden="true" />
            <span className="font-display text-[13px] md:text-base tracking-wider2 whitespace-nowrap">
              (561) 383.5026
            </span>
          </a>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 border border-ink bg-white text-ink hover:bg-ink hover:text-bone transition-colors duration-200"
          >
            {open ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"/>
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"/>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu sheet */}
      {open && (
        <div
          className="lg:hidden absolute top-full left-0 right-0 bg-ink text-bone border-t border-wire shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
          role="dialog"
          aria-modal="true"
        >
          <nav className="container-x py-6 flex flex-col gap-1" aria-label="Mobile">
            {navItems.map((item) => {
              const target = parseHashTo(item.to)
              return (
                <Link
                  key={item.label}
                  to={target}
                  onClick={() => setOpen(false)}
                  className="font-display text-bone text-2xl tracking-wider2 uppercase py-3 border-b border-wire hover:text-k2 transition-colors duration-200 flex items-center justify-between"
                >
                  {item.label}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"/>
                  </svg>
                </Link>
              )
            })}
            <a
              href="tel:+15613835026"
              className="mt-5 inline-flex items-center justify-center gap-3 bg-k2 text-ink font-display text-lg tracking-wider2 px-5 py-4 uppercase hover:bg-bone transition-colors"
            >
              <span className="w-1.5 h-1.5 bg-ink rounded-full" aria-hidden="true" />
              (561) 383.5026
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
