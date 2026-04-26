const programs = [
  {
    tag: 'Ages 5 to 7',
    title: 'Little Warriors',
    body:
      'The first mat. Listening, falling, controlling, and the very basics of striking and grappling. Most kids start here whether they are loud or shy, athletic or not.',
  },
  {
    tag: 'Ages 8 to 14',
    title: 'Youth Fight Team',
    body:
      'Our biggest group. BJJ, MMA, and stand up rolled into one progression, four nights a week. The kids who stick with it leave with self defense that actually works.',
  },
  {
    tag: 'Ages 15 and up',
    title: 'Adult & Competition',
    body:
      'Walk-in beginners, hobbyists who want to spar, and the K2 Fight Team. Same room, same coach, different intensities. Show up Monday night and we will figure out where you fit.',
  },
]

export default function Programs() {
  return (
    <section
      id="programs"
      className="relative section-pad bg-k2 text-ink border-t border-b border-ink overflow-hidden"
    >
      {/* faint hazard accent corner */}
      <span
        className="pointer-events-none absolute top-0 left-0 w-[96px] h-[96px] border-t-[44px] border-l-[44px] border-t-ink border-l-transparent opacity-90"
        aria-hidden="true"
      />

      <div className="container-x relative">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow text-ink/60">Programs</span>
          <h2 className="display-massive text-ink text-[clamp(2.4rem,5.4vw,5rem)] mt-4 leading-[0.92]">
            Three groups. <span className="underline decoration-ink decoration-[6px] underline-offset-[10px]">Same standard.</span>
          </h2>
        </div>

        <div className="space-y-3 md:space-y-4">
          {programs.map((p, i) => (
            <article
              key={p.title}
              className="program-card fx-up group relative grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 border border-ink bg-cream p-7 md:p-10 transition-all duration-500 ease-heavy hover:bg-ink hover:text-bone hover:translate-x-2"
            >
              <div className="md:col-span-3 flex md:flex-col md:justify-between gap-3">
                <span className="eyebrow text-ink/65 group-hover:text-bone/60 transition-colors">{p.tag}</span>
                <span className="font-display text-ink/25 group-hover:text-k2 text-2xl md:text-3xl tracking-wider2 leading-none transition-colors">
                  {String(i + 1).padStart(2, '0')}
                </span>
              </div>

              <div className="md:col-span-6">
                <h3 className="font-display text-ink text-3xl md:text-5xl leading-[0.95] group-hover:text-bone transition-colors">
                  {p.title}
                </h3>
                <p className="mt-4 text-ink/80 group-hover:text-bone/85 text-base md:text-lg leading-relaxed max-w-2xl transition-colors">
                  {p.body}
                </p>
              </div>

              <div className="md:col-span-3 flex md:items-end md:justify-end">
                <a
                  href="#schedule"
                  className="inline-flex items-center gap-3 font-display tracking-wider2 text-ink group-hover:text-k2 transition-all duration-300"
                >
                  See schedule
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"/>
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
