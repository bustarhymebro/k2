export default function KStandard() {
  return (
    <section
      id="about"
      className="relative bg-ink text-bone border-t border-wire overflow-hidden"
      style={{
        paddingBottom: 'clamp(5rem, 9vw, 8rem)',
      }}
    >
      {/* MMA / BJJ row flanks the mascot tail bleeding in from the hero above */}
      <div className="container-x relative pt-8">
        <div className="flex items-center justify-between gap-6 lg:gap-10">
          <span
            className="kstd-word-l font-display text-k2 leading-[0.9] uppercase tracking-[-0.01em] text-[clamp(2.4rem,7.4vw,6.5rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          >
            MMA
          </span>
          <span
            className="kstd-word-r font-display text-k2 leading-[0.9] uppercase tracking-[-0.01em] text-[clamp(2.4rem,7.4vw,6.5rem)] drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]"
            aria-hidden="true"
          >
            BJJ
          </span>
        </div>
      </div>

      <div className="container-x pt-10 md:pt-[clamp(7rem,22vw,18rem)]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 fx-left">
            <span className="eyebrow text-bone/55">About K2</span>
            <h2 className="display-massive text-bone text-[clamp(2.4rem,5.4vw,5rem)] mt-4 leading-[0.92]">
              One head coach.<br />
              One standard.<br />
              <span className="text-k2">One room.</span>
            </h2>
          </div>

          <div className="lg:col-span-7 lg:pt-3 space-y-6 text-bone/80 text-base md:text-lg leading-relaxed fx-up">
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
            <p className="text-bone/55 text-sm uppercase tracking-wider2 pt-2">
              Beginner&rsquo;s welcome night every week. No belt required. No contract on day one.
            </p>
          </div>
        </div>

        {/* wide cinematic action shot */}
        <figure className="mt-14 md:mt-20 relative border border-wire overflow-hidden aspect-[21/9] fx-up">
          <img
            src="/k2-action.jpg"
            alt="Inside the K2 dojo on Okeechobee Boulevard"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-ink/85 via-ink/15 to-transparent" />
          <span className="absolute top-0 left-0 w-0 h-0 border-t-[44px] border-l-[44px] border-t-k2 border-l-transparent" aria-hidden="true" />
          <figcaption className="absolute bottom-0 left-0 right-0 px-6 md:px-10 pb-5 md:pb-7 flex items-end justify-between gap-6">
            <div className="font-display text-bone text-2xl md:text-4xl leading-tight max-w-2xl">
              Same coach. Same room. Every night.
            </div>
            <div className="eyebrow text-k2 text-[10px] hidden md:block">Royal Palm Beach</div>
          </figcaption>
        </figure>

        <div className="mt-16 md:mt-20 grid grid-cols-2 md:grid-cols-4 border-t border-wire">
          {[
            ['2009', 'NAGA Coach of the Year'],
            ['18+',  'Years on the mat'],
            ['4',    'Disciplines, taught right'],
            ['5:30', 'Doors open weeknights'],
          ].map(([k, v]) => (
            <div
              key={v}
              className="py-8 px-2 md:px-6 border-b md:border-b-0 md:border-r border-wire last:border-r-0"
            >
              <div className="stat-num font-display text-k2 text-4xl md:text-6xl leading-none">{k}</div>
              <div className="eyebrow text-bone/55 mt-3 text-[10px]">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
