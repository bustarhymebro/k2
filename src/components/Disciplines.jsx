const disciplines = [
  {
    name: 'Mixed Martial Arts',
    blurb:
      'Striking, takedowns, ground. The full sport, taught the way it is fought. Our adult and teen MMA classes run Monday and Wednesday at 7:30.',
  },
  {
    name: 'Brazilian Jiu Jitsu',
    blurb:
      'Gi and no-gi. Grips, sweeps, submissions, the chess match on the mat. Run as part of the teen and adult evening block.',
  },
  {
    name: 'Mix It Up Kids',
    blurb:
      'Our signature kids program. Five and up, every weeknight. Discipline first, then technique, then sparring when they are ready.',
  },
  {
    name: 'Sparring & Fight Team',
    blurb:
      'Friday night sparring for teens and adults. Saturday mornings for the K2 Fight Team. Where it gets real.',
  },
]

export default function Disciplines() {
  return (
    <section id="disciplines" className="relative section-pad bg-cream border-t border-mute">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end mb-14 md:mb-20">
          <div className="lg:col-span-7">
            <span className="eyebrow text-ink/55">What we teach</span>
            <h2 className="display-massive text-ink text-[clamp(2.4rem,5.6vw,5.5rem)] mt-4 leading-[0.92]">
              Four things, taught by one coach who actually competes.
            </h2>
          </div>
          <p className="lg:col-span-5 text-ink/75 text-base md:text-lg leading-relaxed">
            We do not pad our schedule with twelve cardio classes a week. We teach four things, and
            we teach them properly. If you came to fight, you came to the right place.
          </p>
        </div>

        <ul className="border-t border-ink">
          {disciplines.map((d, i) => (
            <li
              key={d.name}
              className="fx-up grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-7 md:py-10 border-b border-mute group"
            >
              <div className="md:col-span-1 font-display text-ink/35 text-2xl md:text-3xl tracking-wider2 leading-none">
                {String(i + 1).padStart(2, '0')}
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-ink text-3xl md:text-5xl leading-[0.95] group-hover:text-ink transition-colors">
                  {d.name}
                </h3>
              </div>
              <div className="md:col-span-7 text-ink/75 text-base md:text-lg leading-relaxed max-w-2xl">
                {d.blurb}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
