const hours = [
  ['Mon to Thu', '5:30 PM → 8:30 PM'],
  ['Friday',     '5:30 PM → 7:30 PM'],
  ['Saturday',   '11:00 AM → 1:00 PM'],
  ['Sunday',     'Closed'],
]

const reviews = [
  {
    quote:
      'MMA with Sensei Wright has been an amazing experience for my boys. My youngest gets picked up from his elementary school and brought to the dojo. Kids are not just taught to defend themselves, they are taught self discipline, confidence, and the courage to stand up for others.',
    author: 'Arianna M.',
    when: '2019',
  },
  {
    quote:
      'I started my son in MMA when he was 4.6 years old. Five years later he earned his Black Belt ending in a grueling 10-round fight. Sensei Wright pushed him in a way no one else would have.',
    author: 'George S.',
    when: '2025',
  },
  {
    quote:
      'Sensei Wright runs the room himself, every class. The kids leave with discipline, respect, and self-defense that actually holds up. The atmosphere is family.',
    author: 'Verified parent',
    when: 'Google',
  },
]

const googleReviewsUrl =
  'https://www.google.com/search?q=K2+Mixed+Martial+Arts+%26+Brazilian+Jiu+Jitsu+Royal+Palm+Beach+reviews'

export default function Location() {
  const mapsEmbed =
    'https://www.google.com/maps?q=11150+Okeechobee+Blvd+Suite+L+Royal+Palm+Beach+FL+33411&output=embed'

  const directions =
    'https://www.google.com/maps/dir/?api=1&destination=' +
    encodeURIComponent('11150 Okeechobee Blvd Suite L, Royal Palm Beach, FL 33411')

  return (
    <section id="location" className="relative section-pad bg-ink text-bone border-t border-wire">
      <div className="container-x">
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="eyebrow text-bone/55">Visit</span>
          <h2 className="display-massive text-bone text-[clamp(2.4rem,5.4vw,5rem)] mt-4 leading-[0.92]">
            Royal Palm Beach, <span className="text-k2">Florida.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-stretch">
          <div className="lg:col-span-7 relative border border-wire bg-wire/40 min-h-[380px] md:min-h-[520px] overflow-hidden group">
            <iframe
              title="K2 MMA & BJJ on the map"
              src={mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'grayscale(0.4) contrast(1.05)' }}
            />
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-wire" />
            <span className="absolute top-0 left-0 w-0 h-0 border-t-[36px] border-l-[36px] border-t-k2 border-l-transparent" aria-hidden="true" />
          </div>

          <div className="lg:col-span-5 flex flex-col">
            <div className="space-y-7">
              <div>
                <div className="eyebrow text-bone/55 mb-2">Address</div>
                <div className="font-display text-bone text-2xl leading-tight">
                  11150 Okeechobee Blvd<br />Suite L
                </div>
                <div className="text-bone/70 mt-1">Royal Palm Beach, FL 33411</div>
              </div>

              <div>
                <div className="eyebrow text-bone/55 mb-2">Call the gym</div>
                <a
                  href="tel:+15613835026"
                  className="font-display text-bone text-3xl md:text-4xl hover:text-k2 transition-colors"
                >
                  (561) 383.5026
                </a>
              </div>

              <div>
                <div className="eyebrow text-bone/55 mb-2">Hours</div>
                <ul className="text-bone/85 space-y-1.5">
                  {hours.map(([d, t]) => (
                    <li key={d} className="flex justify-between gap-6 border-b border-wire pb-1.5 last:border-b-0">
                      <span className="text-bone/65">{d}</span>
                      <span className="font-display text-bone tracking-wider2">{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="eyebrow text-bone/55 mb-3">Connect</div>
                <div className="flex gap-3">
                  <SocialLink href="https://www.facebook.com/K2MMABJJ" label="K2 on Facebook">
                    <FbIcon />
                  </SocialLink>
                  <SocialLink href="https://www.instagram.com/k2mmabjj" label="K2 on Instagram">
                    <IgIcon />
                  </SocialLink>
                  <SocialLink href="mailto:K2life@aol.com" label="Email K2">
                    <MailIcon />
                  </SocialLink>
                </div>
              </div>

              <a
                href={directions}
                target="_blank"
                rel="noreferrer"
                className="btn-primary mt-2"
              >
                Get directions
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="square"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Reviews block — squeezed in at the bottom near hours */}
        <div className="mt-20 md:mt-28 border-t border-wire pt-12 md:pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end mb-10 md:mb-12">
            <div className="lg:col-span-6">
              <span className="eyebrow text-bone/55">Word from the mat</span>
              <div className="flex items-baseline gap-4 mt-3">
                <Stars />
                <span className="font-display text-bone text-3xl md:text-4xl tracking-wider2">5.0</span>
                <span className="eyebrow text-bone/55 text-[11px]">152 Google reviews</span>
              </div>
            </div>
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noreferrer"
              className="lg:col-span-6 lg:justify-self-end inline-flex items-center gap-3 font-display tracking-wider2 text-bone text-sm md:text-base uppercase border-b border-bone/40 pb-1 hover:text-k2 hover:border-k2 transition-colors w-fit"
            >
              Read all reviews on Google
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"/>
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {reviews.map((r) => (
              <figure
                key={r.author}
                className="fx-up border border-wire bg-wire/30 p-6 md:p-7 flex flex-col gap-5"
              >
                <Stars small />
                <blockquote className="text-bone/85 text-sm md:text-base leading-relaxed flex-1">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <figcaption className="flex items-center justify-between border-t border-wire pt-4">
                  <div className="font-display text-bone text-base">{r.author}</div>
                  <div className="eyebrow text-bone/45 text-[10px]">{r.when}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function Stars({ small = false }) {
  const cls = small ? 'w-3.5 h-3.5' : 'w-4 h-4 md:w-5 md:h-5'
  return (
    <span className="inline-flex items-center gap-0.5" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`${cls} text-k2`}
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 2l2.9 6.9L22 10l-5.5 4.7L18 22l-6-3.6L6 22l1.5-7.3L2 10l7.1-1.1L12 2z" />
        </svg>
      ))}
    </span>
  )
}

function SocialLink({ href, label, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex items-center justify-center w-12 h-12 border border-wire text-bone hover:bg-k2 hover:text-ink hover:border-k2 transition-colors duration-300"
    >
      {children}
    </a>
  )
}

function FbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 22v-8h2.8l.4-3.2H13V8.7c0-.93.26-1.56 1.6-1.56H16V4.27c-.28-.04-1.24-.12-2.36-.12-2.34 0-3.94 1.43-3.94 4.05v2.6H7v3.2h2.7V22H13z"/>
    </svg>
  )
}

function IgIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="4"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/>
    </svg>
  )
}

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="1"/>
      <path d="M3 7l9 7 9-7"/>
    </svg>
  )
}
