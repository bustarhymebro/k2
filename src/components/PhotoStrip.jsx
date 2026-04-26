const photos = [
  { src: '/k2-action.jpg',   alt: 'K2 students training on the mat',   span: 'col-span-2 md:col-span-2' },
  { src: '/k2-shirt.jpg',    alt: 'K2 MMA & BJJ apparel',              span: 'col-span-1 md:col-span-1' },
  { src: '/coach-sensei.png', alt: 'Sensei William M. Wright III',     span: 'col-span-1 md:col-span-1' },
]

export default function PhotoStrip({ variant = 'dark' }) {
  const isDark = variant === 'dark'
  return (
    <section
      aria-label="Inside the K2 dojo"
      className={`relative ${isDark ? 'bg-ink border-wire' : 'bg-cream border-mute'} border-t border-b`}
    >
      <div className="container-x py-10 md:py-14">
        <div className="flex items-baseline justify-between mb-6 md:mb-8">
          <span className={`eyebrow ${isDark ? 'text-bone/55' : 'text-ink/55'}`}>Inside the room</span>
          <span className={`eyebrow ${isDark ? 'text-bone/35' : 'text-ink/35'} text-[10px]`}>Royal Palm Beach</span>
        </div>
        <div className="grid grid-cols-4 gap-2 md:gap-4 photo-strip">
          {photos.map((p, i) => (
            <figure
              key={i}
              className={`photo-tile relative overflow-hidden ${p.span} aspect-[4/5] md:aspect-[3/4] border ${isDark ? 'border-wire' : 'border-mute'} group`}
            >
              <img
                src={p.src}
                alt={p.alt}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-heavy group-hover:scale-105"
              />
              <div className={`absolute inset-0 pointer-events-none ${isDark ? 'bg-gradient-to-t from-ink/55 via-transparent to-transparent' : 'bg-gradient-to-t from-ink/15 via-transparent to-transparent'}`} />
              {i === 0 && (
                <span className="absolute top-0 left-0 w-0 h-0 border-t-[28px] border-l-[28px] border-t-k2 border-l-transparent" aria-hidden="true" />
              )}
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
