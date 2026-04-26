import { useState } from 'react'
import SectionMarker from './SectionMarker.jsx'
import TornadoLogo from './TornadoLogo.jsx'

/*
 * Drop your Facebook photos into /public/fb/ named fb-1.jpg through fb-9.jpg
 * (or any mix of .jpg / .png — first match wins).
 * Empty slots show an animated K2 tornado watermark so the grid stays intentional.
 */
const slots = [
  { id: 1, label: 'On the mat',           span: 'lg:col-span-2 lg:row-span-2' },
  { id: 2, label: 'Sparring night',       span: '' },
  { id: 3, label: 'Kids fight team',      span: '' },
  { id: 4, label: 'Black belt promotion', span: 'lg:col-span-2' },
  { id: 5, label: 'Muay Thai',            span: '' },
  { id: 6, label: 'BJJ class',            span: '' },
  { id: 7, label: 'Open mat',             span: 'lg:col-span-2' },
  { id: 8, label: 'After class',          span: '' },
]

const exts = ['jpg', 'jpeg', 'png', 'webp']

function PhotoTile({ id, label, span }) {
  const [extIdx, setExtIdx] = useState(0)
  const [failed, setFailed] = useState(false)

  function handleError() {
    if (extIdx < exts.length - 1) {
      setExtIdx(extIdx + 1)
    } else {
      setFailed(true)
    }
  }

  const src = `/fb/fb-${id}.${exts[extIdx]}`

  return (
    <figure
      className={`group relative overflow-hidden border border-mute bg-white ${span} aspect-square lg:aspect-auto min-h-[220px] lg:min-h-[260px]`}
    >
      {!failed && (
        <img
          src={src}
          alt={`K2 MMA and BJJ — ${label}`}
          loading="lazy"
          decoding="async"
          onError={handleError}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-heavy group-hover:scale-[1.04]"
        />
      )}

      {failed && (
        <div className="absolute inset-0 flex items-center justify-center hazard-thin opacity-[0.06]" />
      )}
      {failed && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[55%] max-w-[180px] opacity-50">
            <TornadoLogo size="100%" intensity="subtle" />
          </div>
        </div>
      )}

      {/* foreground gradient + caption */}
      {!failed && (
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
      )}

      <figcaption className={`absolute bottom-0 left-0 right-0 p-4 md:p-5 flex items-end justify-between gap-3 ${failed ? 'text-ink' : 'text-bone'}`}>
        <div>
          <div className={`num-marker ${failed ? 'text-ink/45' : 'text-bone/55'} text-[10px] mb-1`}>
            {String(id).padStart(2, '0')}
          </div>
          <div className={`font-display text-base md:text-xl leading-tight transition-colors duration-500 ${failed ? 'text-ink/85 group-hover:text-ink' : 'text-bone group-hover:text-k2'}`}>
            {failed ? `Slot ${id}` : label}
          </div>
        </div>
        {failed && (
          <span className="eyebrow text-ink/35 text-[9px] hidden md:inline">
            drop fb-{id}.jpg
          </span>
        )}
      </figcaption>

      {/* corner accent on hover */}
      <span
        className="absolute top-0 right-0 w-0 h-0 border-t-[26px] border-l-[26px] border-t-ink border-l-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        aria-hidden="true"
      />
    </figure>
  )
}

export default function Gallery() {
  return (
    <section id="gallery" className="relative section-pad bg-cream border-t border-mute">
      <div className="container-x">
        <SectionMarker number="05" label="From the mat" theme="light" />

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
          <h2 className="display-massive text-ink text-[clamp(2.6rem,6.4vw,6rem)]">
            Inside the gym.<br />
            <span className="text-k2 [-webkit-text-stroke:2px_#0A0A0A] [paint-order:stroke]">No filter.</span>
          </h2>
          <p className="max-w-md text-ink/75 text-base md:text-lg">
            Real classes. Real fighters. Pulled straight from the K2 Facebook feed and dropped on
            the wall where they belong.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[220px] lg:auto-rows-[240px] gap-3 md:gap-4">
          {slots.map((s) => (
            <PhotoTile key={s.id} id={s.id} label={s.label} span={s.span} />
          ))}
        </div>

        <div className="mt-10 flex items-center gap-4 flex-wrap">
          <a
            href="https://www.facebook.com/K2MMABJJ"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-light"
          >
            See more on Facebook
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="square"/>
            </svg>
          </a>
          <a
            href="https://www.instagram.com/k2mmabjj"
            target="_blank"
            rel="noreferrer"
            className="btn-secondary-light"
          >
            Follow on Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
