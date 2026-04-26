import TornadoLogo from './TornadoLogo.jsx'

/*
 * Two oversized animated tornadoes pinned to the viewport behind everything.
 * Both run continuously, dialed to "subtle" intensity so they don't compete
 * with foreground content. The slow drift adds parallax life on long scrolls.
 */
export default function TornadoBackdrop() {
  return (
    <div className="tornado-backdrop" aria-hidden="true">
      <div className="t-watermark">
        <TornadoLogo size="100%" intensity="subtle" />
      </div>
      <div className="t-watermark-left">
        <TornadoLogo size="100%" intensity="subtle" />
      </div>
    </div>
  )
}
