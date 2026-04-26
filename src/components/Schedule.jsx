const days = [
  { key: 'Mon', label: 'Monday' },
  { key: 'Tue', label: 'Tuesday' },
  { key: 'Wed', label: 'Wednesday' },
  { key: 'Thu', label: 'Thursday' },
  { key: 'Fri', label: 'Friday' },
  { key: 'Sat', label: 'Saturday' },
]

const descriptions = {
  'Kids MMA':
    'Striking, takedowns, and basic ground work for kids five and up. Built around discipline and fundamentals first.',
  'Kids BJJ':
    'Brazilian Jiu Jitsu basics. Grips, posture, sweeps, submissions. Gi based, taught at a kid-friendly pace.',
  'Kids / Teens MMA':
    'Full MMA progression for advanced kids and teens. Yellow belt or eight-plus required. Live drilling, controlled sparring.',
  '“Mix It Up” Class':
    'Our signature class. Striking, grappling, sparring drills rolled into one session. Different look every week.',
  'Open Mat':
    'Free roll and drilling. All levels welcome. Show up, partner up, work on what you need.',
  'Sparring':
    'Live contact for teens and adults. Stand up, ground, or both. Gear required.',
  'Teen / Adult MMA + BJJ':
    'Combined evening class. Stand up and ground in the same session. Beginners welcome.',
  'K2 Fight Team':
    'Competition prep for current K2 fighters. Sparring, conditioning, and fight-specific drilling.',
}

const slots = [
  {
    time: '5:30 PM',
    classes: {
      Mon: { name: 'Kids MMA',  tag: 'Ages 5 and up' },
      Tue: { name: 'Kids MMA',  tag: 'Ages 5 and up' },
      Wed: { name: 'Kids BJJ',  tag: 'Ages 5 and up' },
      Thu: { name: 'Kids MMA',  tag: 'Ages 5 and up' },
      Fri: { name: 'Open Mat',  tag: 'All levels' },
      Sat: null,
    },
  },
  {
    time: '6:30 PM',
    classes: {
      Mon: { name: 'Kids BJJ',           tag: 'Ages 5 and up' },
      Tue: { name: 'Kids / Teens MMA',   tag: 'Yellow belt or 8+' },
      Wed: { name: '“Mix It Up” Class', tag: 'Ages 5 and up' },
      Thu: { name: 'Kids / Teens MMA',   tag: 'Yellow belt or 8+' },
      Fri: { name: 'Sparring',           tag: 'Teens & adults' },
      Sat: null,
    },
  },
  {
    time: '7:30 PM',
    classes: {
      Mon: { name: 'Teen / Adult MMA + BJJ', tag: 'All levels' },
      Tue: null,
      Wed: { name: 'Teen / Adult MMA + BJJ', tag: 'All levels' },
      Thu: null,
      Fri: null,
      Sat: null,
    },
  },
  {
    time: '11:00 AM',
    classes: {
      Mon: null, Tue: null, Wed: null, Thu: null, Fri: null,
      Sat: { name: 'K2 Fight Team', tag: 'All ages' },
    },
  },
  {
    time: '12:00 PM',
    classes: {
      Mon: null, Tue: null, Wed: null, Thu: null, Fri: null,
      Sat: { name: 'Open Mat',      tag: 'Family welcome' },
    },
  },
]

function Cell({ slot }) {
  if (!slot) {
    return (
      <div className="min-h-[88px] border-r border-b border-mute bg-cream/40">
        <div className="h-full w-full hazard-thin opacity-[0.05]" />
      </div>
    )
  }
  const desc = descriptions[slot.name]
  return (
    <div className="group relative min-h-[88px] border-r border-b border-mute p-3 md:p-4 transition-colors duration-300 hover:bg-k2 cursor-default">
      <div className="font-display text-ink text-base md:text-xl leading-tight">
        {slot.name}
      </div>
      <div className="eyebrow text-ink/55 mt-2 text-[9.5px] md:text-[10px]">{slot.tag}</div>
      {desc && (
        <div
          role="tooltip"
          className="hidden md:block absolute z-40 left-1/2 -translate-x-1/2 bottom-[calc(100%+10px)] w-60 p-4 bg-ink text-bone text-[12.5px] leading-snug opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-[opacity,visibility] duration-200 shadow-[0_18px_40px_-12px_rgba(0,0,0,0.45)] pointer-events-none"
        >
          <div className="font-display text-k2 text-[11px] uppercase tracking-wider2 mb-1.5">
            {slot.name}
          </div>
          {desc}
          <span
            className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[7px] border-r-[7px] border-t-[7px] border-l-transparent border-r-transparent border-t-ink"
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  )
}

export default function Schedule() {
  return (
    <section id="schedule" className="relative section-pad bg-cream border-t border-mute">
      <div className="container-x">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow text-ink/55">Class schedule</span>
          <h2 className="display-massive text-ink text-[clamp(2.4rem,5.4vw,5rem)] mt-4 leading-[0.92]">
            The week on the mat.
          </h2>
        </div>

        {/* Desktop / tablet grid */}
        <div className="hidden md:block border-t border-l border-mute relative" style={{ overflow: 'visible' }}>
          <div className="grid" style={{ gridTemplateColumns: '120px repeat(6, 1fr)' }}>
            <div className="border-r border-b border-mute p-3 bg-cream">
              <span className="eyebrow text-ink/45 text-[10px]">Time</span>
            </div>
            {days.map((d) => (
              <div key={d.key} className="border-r border-b border-mute p-3 bg-cream">
                <div className="font-display text-ink text-lg md:text-xl">{d.label}</div>
              </div>
            ))}

            {slots.map((row) => (
              <SlotRow key={row.time} row={row} />
            ))}
          </div>
        </div>

        {/* Mobile stacked day cards */}
        <div className="md:hidden space-y-4">
          {days.map((d) => {
            const items = slots
              .map((s) => ({ time: s.time, c: s.classes[d.key] }))
              .filter((x) => x.c)
            if (items.length === 0) return null
            return (
              <div key={d.key} className="border border-mute p-5 bg-white">
                <div className="flex items-center justify-between mb-4">
                  <div className="font-display text-ink text-2xl">{d.label}</div>
                  <span className="yellow-rule" aria-hidden="true" />
                </div>
                <ul className="space-y-3">
                  {items.map((it, idx) => (
                    <li key={idx} className="flex items-baseline justify-between gap-3 border-b border-mute pb-3 last:border-b-0 last:pb-0">
                      <div className="font-display text-ink/70 text-base shrink-0 w-20">{it.time}</div>
                      <div className="flex-1">
                        <div className="font-display text-ink text-lg leading-tight">{it.c.name}</div>
                        <div className="eyebrow text-ink/50 mt-1 text-[10px]">{it.c.tag}</div>
                        {descriptions[it.c.name] && (
                          <div className="text-ink/65 text-[12.5px] leading-snug mt-2">
                            {descriptions[it.c.name]}
                          </div>
                        )}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        {/* Footnotes — clean single block under the grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 text-ink/70 text-sm border-t border-mute pt-6">
          <div>
            <span className="eyebrow text-ink/40 text-[10px] block mb-1">Length</span>
            45 minutes to an hour. Show up fifteen minutes early to warm up.
          </div>
          <div>
            <span className="eyebrow text-ink/40 text-[10px] block mb-1">Family</span>
            Parents train free when you enroll your kid.
          </div>
          <div>
            <span className="eyebrow text-ink/40 text-[10px] block mb-1">New here</span>
            K2 gear required.{' '}
            <a
              href="#free-class"
              className="text-ink underline underline-offset-4 decoration-2 decoration-k2 font-display"
            >
              Book your free class
            </a>
            .
          </div>
        </div>
      </div>
    </section>
  )
}

function SlotRow({ row }) {
  const hasAny = Object.values(row.classes).some(Boolean)
  if (!hasAny) return null
  return (
    <>
      <div className="border-r border-b border-mute p-3 md:p-4 flex items-start bg-cream">
        <span className="font-display text-ink text-lg md:text-2xl">{row.time}</span>
      </div>
      {days.map((d) => (
        <Cell key={d.key} slot={row.classes[d.key]} />
      ))}
    </>
  )
}
