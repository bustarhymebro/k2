import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const sections = [
  { id: 'hero',        num: '00', label: 'K2',         theme: 'dark'  },
  { id: 'standard',    num: '01', label: 'Foundation', theme: 'light' },
  { id: 'disciplines', num: '02', label: 'Arsenal',    theme: 'light' },
  { id: 'programs',    num: '03', label: 'Programs',   theme: 'light' },
  { id: 'coach',       num: '04', label: 'Coach',      theme: 'dark'  },
  { id: 'gallery',     num: '05', label: 'Mat',        theme: 'light' },
  { id: 'schedule',    num: '06', label: 'Schedule',   theme: 'light' },
  { id: 'free-class',  num: '07', label: 'Trial',      theme: 'yellow' },
  { id: 'location',    num: '08', label: 'Visit',      theme: 'light' },
]

export default function SectionRail() {
  const [active, setActive] = useState('hero')

  useEffect(() => {
    const triggers = sections.map((s) =>
      ScrollTrigger.create({
        trigger: `#${s.id}`,
        start: 'top 35%',
        end: 'bottom 35%',
        onToggle: (self) => {
          if (self.isActive) setActive(s.id)
        },
      }),
    )
    return () => triggers.forEach((t) => t.kill())
  }, [])

  const current = sections.find((s) => s.id === active) || sections[0]

  // Numeric / label colors per section background
  const numColor =
    current.theme === 'yellow'
      ? 'text-ink'
      : current.theme === 'light'
      ? 'text-ink'
      : 'text-k2'
  const labelColor =
    current.theme === 'yellow'
      ? 'text-ink/70'
      : current.theme === 'light'
      ? 'text-ink/65'
      : 'text-bone/55'
  const tickActive =
    current.theme === 'yellow' || current.theme === 'light' ? 'bg-ink h-10' : 'bg-k2 h-10'

  return (
    <aside
      className="hidden md:flex fixed left-0 top-0 h-screen z-40 flex-col items-center justify-center pointer-events-none w-14 lg:w-16"
      aria-hidden="true"
    >
      <div className="flex flex-col items-center gap-6">
        <div
          className={`font-display text-3xl lg:text-5xl leading-none transition-colors duration-500 ${numColor}`}
          style={{ fontVariantNumeric: 'tabular-nums' }}
        >
          {current.num}
        </div>
        <div className={`flex flex-col gap-2 transition-colors duration-500 ${labelColor}`}>
          {sections.map((s) => (
            <span
              key={s.id}
              className={`block w-px h-6 transition-all duration-500 ${
                s.id === active ? tickActive : 'bg-current opacity-40'
              }`}
            />
          ))}
        </div>
        <div
          className={`text-[10px] tracking-wider2 uppercase rotate-180 [writing-mode:vertical-rl] transition-colors duration-500 ${labelColor}`}
        >
          {current.label}
        </div>
      </div>
    </aside>
  )
}
