import { useRef, useState } from 'react'

const disciplines = [
  'Brazilian Jiu Jitsu',
  'Mixed Martial Arts',
  'Muay Thai',
  'Kickboxing',
  'Boxing',
  'Kyokushin Karate',
  'Submission Wrestling',
  'Not sure yet',
]

export default function FreeClass() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')
  const formRef = useRef(null)

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    setError('')
    const data = new FormData(e.currentTarget)
    const payload = Object.fromEntries(data.entries())
    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('bad response')
      setStatus('done')
      formRef.current?.reset()
    } catch (err) {
      setStatus('error')
      setError('Something went sideways. Call us at (561) 383.5026 and we’ll get you in.')
    }
  }

  return (
    <section
      id="free-class"
      className="relative bg-k2 text-ink overflow-hidden border-t border-b border-ink"
    >
      <div className="container-x section-pad-short">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          <div className="lg:col-span-7">
            <div className="eyebrow text-ink/70">No contracts. No pressure.</div>
            <h2 className="mt-4 display-massive text-ink text-[clamp(2.6rem,6.4vw,6.5rem)] leading-[0.9]">
              Your first class is on us.
            </h2>
            <p className="mt-7 max-w-xl text-ink/85 text-base md:text-lg leading-relaxed">
              Walk in. Train. Decide. We&rsquo;ll pair you with a discipline, hand you the basics,
              and run you through a real K2 class. Then you tell us if you&rsquo;re in.
            </p>
            <ul className="mt-7 space-y-2 text-ink/80 text-sm md:text-base">
              <li className="flex items-center gap-3"><Tick />Free trial class, no card on file.</li>
              <li className="flex items-center gap-3"><Tick />Ages three and up.</li>
              <li className="flex items-center gap-3"><Tick />Beginners welcome. Pros sharpen here too.</li>
            </ul>
          </div>

          <div className="lg:col-span-5 w-full">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-ink text-bone p-6 md:p-8 border border-ink shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6)]"
              noValidate
            >
              <div className="font-display text-bone text-2xl md:text-3xl mb-1">Book your free class</div>
              <div className="eyebrow text-bone/55 text-[10px] mb-6">We&rsquo;ll text you back same day.</div>

              <div className="space-y-3">
                <label className="block">
                  <span className="sr-only">Full name</span>
                  <input
                    name="name"
                    type="text"
                    required
                    placeholder="Full name"
                    className="input-field"
                    autoComplete="name"
                  />
                </label>

                <label className="block">
                  <span className="sr-only">Phone number</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    placeholder="Phone number"
                    className="input-field"
                    autoComplete="tel"
                    inputMode="tel"
                  />
                </label>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="sr-only">Age of student</span>
                    <input
                      name="age"
                      type="number"
                      min="3"
                      max="99"
                      required
                      placeholder="Age"
                      className="input-field"
                    />
                  </label>

                  <label className="block">
                    <span className="sr-only">Preferred discipline</span>
                    <select
                      name="discipline"
                      defaultValue=""
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option value="" disabled>Discipline</option>
                      {disciplines.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="mt-6 w-full inline-flex items-center justify-center gap-3 bg-k2 text-ink font-display text-lg tracking-wider2 px-6 py-4 border border-k2 hover:bg-ink hover:text-k2 transition-colors duration-300 ease-heavy disabled:opacity-60 disabled:cursor-progress uppercase"
              >
                {status === 'sending' ? 'Sending…' : 'Lock in my free class'}
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"/>
                </svg>
              </button>

              <p className="mt-4 text-bone/45 text-[11px] leading-relaxed">
                By submitting you agree to be contacted by K2 about your trial class. Standard
                message rates may apply.
              </p>

              {status === 'done' && (
                <div className="mt-5 border border-k2 p-4 text-bone bg-ink">
                  <div className="font-display text-k2 text-lg">You&rsquo;re in.</div>
                  <div className="text-sm text-bone/80 mt-1">
                    We&rsquo;ll reach out shortly to lock in your slot. Want it faster?{' '}
                    <a href="tel:+15613835026" className="text-k2 underline underline-offset-4 decoration-2">
                      Call (561) 383.5026
                    </a>.
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mt-5 border border-k2 p-4 text-bone bg-ink">
                  <div className="font-display text-k2 text-lg">Hiccup.</div>
                  <div className="text-sm text-bone/80 mt-1">{error}</div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

function Tick() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 bg-ink text-k2 shrink-0">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="3" strokeLinecap="square"/>
      </svg>
    </span>
  )
}
