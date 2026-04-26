export default function Coach() {
  return (
    <section id="coach" className="relative section-pad bg-ink border-t border-wire overflow-hidden">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <figure className="lg:col-span-5 relative fx-left">
            <div className="relative bg-wire border border-wire overflow-hidden aspect-[4/5]">
              <img
                src="/coach-sensei.png"
                alt="Sensei William M. Wright III, head coach of K2 MMA and BJJ"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent pointer-events-none" />
              <span className="absolute top-0 left-0 w-0 h-0 border-t-[40px] border-l-[40px] border-t-k2 border-l-transparent" aria-hidden="true" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6 border-t border-wire bg-ink/75 backdrop-blur">
                <div className="eyebrow text-k2 text-[10px]">Sensei</div>
                <div className="font-display text-bone text-2xl md:text-3xl leading-none mt-1">
                  William M. Wright III
                </div>
              </figcaption>
            </div>
          </figure>

          <div className="lg:col-span-7 lg:pt-2">
            <span className="eyebrow text-bone/55">The head coach</span>
            <h2 className="display-massive text-bone text-[clamp(2.4rem,5vw,4.6rem)] mt-4 leading-[0.94]">
              Eighteen years on the mat. <span className="text-k2">Still teaching every class.</span>
            </h2>

            <div className="mt-8 space-y-5 text-bone/85 text-base md:text-lg leading-relaxed">
              <p>
                Born and raised in Jersey City. Opened K2 to give Royal Palm Beach what most martial
                arts gyms never offer: a head coach who has spent over half his life on the mat and
                still teaches the kids&rsquo; class at five thirty himself.
              </p>
              <p>
                NAGA&rsquo;s 2009 Coach of the Year. Founder of K2 MMA. Captain of the K2 Fight Team.
                Black belt in multiple disciplines, with the receipts to back it up.
              </p>
            </div>

            <blockquote className="font-display text-k2 text-2xl md:text-3xl leading-snug border-l-2 border-k2 pl-6 mt-10">
              &ldquo;If you walk out the same person you walked in, I didn&rsquo;t do my job.&rdquo;
            </blockquote>

            <div className="mt-8 grid grid-cols-3 gap-4 md:gap-8 border-t border-wire pt-6">
              <div>
                <div className="stat-num font-display text-k2 text-2xl md:text-3xl leading-none">2009</div>
                <div className="eyebrow text-bone/55 mt-2 text-[10px]">NAGA Coach of the Year</div>
              </div>
              <div>
                <div className="stat-num font-display text-k2 text-2xl md:text-3xl leading-none">18+</div>
                <div className="eyebrow text-bone/55 mt-2 text-[10px]">Years coaching</div>
              </div>
              <div>
                <div className="stat-num font-display text-k2 text-2xl md:text-3xl leading-none">K2</div>
                <div className="eyebrow text-bone/55 mt-2 text-[10px]">Fight Team captain</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
