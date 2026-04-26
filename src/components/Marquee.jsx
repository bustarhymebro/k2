export default function Marquee({ variant = 'dark' }) {
  const wrap =
    variant === 'dark'
      ? 'bg-ink text-bone border-ink'
      : variant === 'yellow'
      ? 'bg-k2 text-ink border-ink'
      : 'bg-cream text-ink border-mute'
  const items = ['K2', 'MMA', 'BJJ', 'ROYAL PALM BEACH', 'STEP ON THE MAT', 'NO CONTRACTS']
  const row = (
    <div className="marquee-row flex shrink-0 items-center gap-12 md:gap-20 pr-12 md:pr-20">
      {items.map((t, i) => (
        <span key={i} className="flex items-center gap-12 md:gap-20">
          <span className="font-display tracking-wider2 text-2xl md:text-4xl whitespace-nowrap">{t}</span>
          <span className="inline-flex shrink-0 marquee-tornado" aria-hidden="true">
            <img
              src="/k2-tornado-clear.png"
              alt=""
              className="w-7 h-7 md:w-10 md:h-10 object-contain select-none pointer-events-none"
              draggable={false}
            />
          </span>
        </span>
      ))}
    </div>
  )
  return (
    <div className={`marquee relative w-full overflow-hidden border-y ${wrap} py-4 md:py-6`}>
      <div className="marquee-track flex w-max">
        {row}
        {row}
      </div>
    </div>
  )
}
