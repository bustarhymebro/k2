export default function SectionMarker({ number, label, theme = 'dark' }) {
  const labelClass = theme === 'light' ? 'text-ink/70' : 'text-bone/70'
  return (
    <div
      className="flex items-center gap-4 mb-8 md:mb-12 section-marker"
      data-marker-num={number}
      data-marker-label={label}
    >
      <span className="num-marker">{number}</span>
      <span className="yellow-rule" aria-hidden="true" />
      <span className={`eyebrow ${labelClass}`}>{label}</span>
    </div>
  )
}
