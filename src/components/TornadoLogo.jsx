/*
 * Animated K2 tornado.
 *
 * Uses the actual K2 logo PNG twice inside a single SVG:
 *   1. Lower copy gets a turbulence-driven displacement filter — the body's
 *      pixels visibly swirl in place (continuous animation via SMIL on the
 *      turbulence seed). Masked to hide face / fists / K2 letter.
 *   2. Upper copy is the same PNG with NO filter, masked to ONLY show the
 *      face / fists / K2 letter, sitting sharp on top.
 *
 * Result: the exact K2 logo, face / fists / K2 letter never move, body
 * actively swirls. No punching.
 *
 * Modes via `intensity`: 'subtle' | 'normal' | 'rage' control swirl speed
 * and amount.
 */

const W = 859
const H = 781

// Centers / radii of the regions that must stay sharp.
// Verified against actual k2-tornado.png pixel data:
// white pixels (eyes + teeth) span x 319-505, y 134-266.
const SHARP_REGIONS = [
  { cx: 412, cy: 200, rx: 142, ry: 118 },  // face (eyes + brows + mouth + teeth)
  { cx: 185, cy: 290, rx: 122, ry: 110 },  // left fist
  { cx: 640, cy: 290, rx: 122, ry: 110 },  // right fist
  { cx: 412, cy: 405, rx: 152, ry: 95  },  // K2 letter
]

const intensitySettings = {
  subtle: { dur: '11s', scale: 8,  baseFreq: 0.009 },
  normal: { dur: '6s',  scale: 13, baseFreq: 0.012 },
  rage:   { dur: '3.6s', scale: 18, baseFreq: 0.016 },
}

let _uid = 0
function nextId() {
  _uid += 1
  return `k2t${_uid}`
}

export default function TornadoLogo({
  size = 220,
  intensity = 'normal',
  spinning = true,
  className = '',
  glow = true,
}) {
  // Each instance needs its own filter / mask ids (SVG ids are global).
  const id = nextId()
  const fId = `${id}-swirl`
  const sharpMaskId = `${id}-sharp`
  const bodyMaskId = `${id}-body`

  const cfg = intensitySettings[intensity] || intensitySettings.normal
  const widthStyle = typeof size === 'number' ? `${size}px` : size

  const noGlow = !glow ? 'tornado-no-glow' : ''

  return (
    <div
      className={`tornado-wrap ${noGlow} ${className}`}
      style={{ width: widthStyle }}
      role="img"
      aria-label="K2 Mixed Martial Arts and Brazilian Jiu Jitsu logo"
    >
      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="tornado-svg"
        preserveAspectRatio="xMidYMid meet"
        aria-hidden="true"
      >
        <defs>
          <filter
            id={fId}
            x="-8%"
            y="-8%"
            width="116%"
            height="116%"
            colorInterpolationFilters="sRGB"
          >
            <feTurbulence
              type="turbulence"
              baseFrequency={cfg.baseFreq}
              numOctaves="2"
              seed="2"
              result="turb"
            >
              {spinning && (
                <animate
                  attributeName="seed"
                  values="2;6;14;28;52;88;130;180;240;2"
                  dur={cfg.dur}
                  repeatCount="indefinite"
                  calcMode="linear"
                />
              )}
            </feTurbulence>
            <feDisplacementMap
              in="SourceGraphic"
              in2="turb"
              scale={cfg.scale}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>

          {/* Soft-edge filter for masks so the boundary between swirling body
              and sharp face/fists fades smoothly instead of showing a hard
              edge that the displacement could jitter against. */}
          <filter id={`${id}-softMask`}>
            <feGaussianBlur stdDeviation="14" />
          </filter>

          {/* Mask: WHITE where face/fists/K2 letter are (so those pixels show
              through on the sharp top layer). */}
          <mask id={sharpMaskId} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
            <rect width={W} height={H} fill="black" />
            <g filter={`url(#${id}-softMask)`}>
              {SHARP_REGIONS.map((r, i) => (
                <ellipse key={i} cx={r.cx} cy={r.cy} rx={r.rx} ry={r.ry} fill="white" />
              ))}
            </g>
          </mask>

          {/* Inverse mask: WHITE everywhere except sharp regions (so the
              swirling body shows through everywhere else). */}
          <mask id={bodyMaskId} maskUnits="userSpaceOnUse" x="0" y="0" width={W} height={H}>
            <rect width={W} height={H} fill="white" />
            <g filter={`url(#${id}-softMask)`}>
              {SHARP_REGIONS.map((r, i) => (
                <ellipse key={i} cx={r.cx} cy={r.cy} rx={r.rx} ry={r.ry} fill="black" />
              ))}
            </g>
          </mask>
        </defs>

        {/* Body layer: full PNG, swirl filter, body mask reveals only the
            body region (face/fists/K2 area is hidden). */}
        <g mask={`url(#${bodyMaskId})`}>
          <image
            href="/k2-tornado-clear.png"
            x="0"
            y="0"
            width={W}
            height={H}
            preserveAspectRatio="none"
            filter={`url(#${fId})`}
          />
        </g>

        {/* Sharp layer: full PNG, no filter, mask reveals only face/fists/K2. */}
        <g mask={`url(#${sharpMaskId})`}>
          <image
            href="/k2-tornado-clear.png"
            x="0"
            y="0"
            width={W}
            height={H}
            preserveAspectRatio="none"
          />
        </g>
      </svg>
    </div>
  )
}
