export default function MobileAbout() {
  return (
    <section
      id="about"
      className="relative bg-ink text-bone border-t border-wire overflow-hidden pt-[7.5rem] pb-16"
    >
      {/* MMA / BJJ row sits below the mascot tail bleeding from the hero above */}
      <div className="container-x">
        <div className="flex items-center justify-between gap-4">
          <span
            className="font-display text-k2 leading-[0.9] uppercase tracking-[-0.01em] text-[clamp(2.4rem,12vw,4rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          >
            MMA
          </span>
          <span
            className="font-display text-k2 leading-[0.9] uppercase tracking-[-0.01em] text-[clamp(2.4rem,12vw,4rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          >
            BJJ
          </span>
        </div>
      </div>

      <div className="container-x mt-12">
        <span className="eyebrow text-bone/55">About K2</span>
        <h2 className="display-massive text-bone text-[clamp(2.2rem,9vw,3.5rem)] mt-4 leading-[0.92]">
          One head coach.<br />
          One standard.<br />
          <span className="text-k2">One room.</span>
        </h2>

        <div className="mt-8 space-y-5 text-bone/80 text-[15px] leading-relaxed">
          <p>
            K2 has been on Okeechobee Boulevard since the early 2000s. It is run, day in and day
            out, by Sensei William M. Wright III. Jersey City born, Royal Palm Beach based, NAGA
            2009 Coach of the Year. He teaches the kids&rsquo; class at five thirty and the
            adult sparring class at eight. Same room. Same standard.
          </p>
          <p>
            We do not pad our schedule with twelve cardio classes a week. We teach four things,
            and we teach them properly. If you came to fight, you came to the right place.
          </p>
          <p className="text-bone/55 text-[12px] uppercase tracking-wider2 pt-2">
            Beginner&rsquo;s welcome night every week. No belt required. No contract on day one.
          </p>
        </div>

        <figure className="mt-10 relative border border-wire overflow-hidden aspect-[4/3] fx-up">
          <img
            src="/k2-action.jpg"
            alt="Inside the K2 dojo on Okeechobee Boulevard"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
          <span className="absolute top-0 left-0 w-0 h-0 border-t-[28px] border-l-[28px] border-t-k2 border-l-transparent" aria-hidden="true" />
          <figcaption className="absolute bottom-0 left-0 right-0 px-5 pb-4">
            <div className="font-display text-bone text-xl leading-tight">
              Same coach. Same room. Every night.
            </div>
          </figcaption>
        </figure>

        <div className="mt-10 grid grid-cols-2 border-t border-wire">
          {[
            ['2009', 'NAGA Coach of the Year'],
            ['18+',  'Years on the mat'],
            ['4',    'Disciplines, taught right'],
            ['5:30', 'Doors open weeknights'],
          ].map(([k, v]) => (
            <div
              key={v}
              className="py-6 px-1 border-b border-wire last:border-b-0 [&:nth-child(odd)]:border-r"
            >
              <div className="stat-num font-display text-k2 text-3xl leading-none">{k}</div>
              <div className="eyebrow text-bone/55 mt-2 text-[10px]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
