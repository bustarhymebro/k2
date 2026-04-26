import { Link } from 'react-router-dom'
import TornadoLogo from './TornadoLogo.jsx'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative bg-ink border-t border-wire">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <div className="flex items-center gap-3">
              <span className="block w-14 h-14">
                <TornadoLogo size="100%" />
              </span>
              <div>
                <div className="font-display text-bone text-xl tracking-wider2">K2</div>
                <div className="eyebrow text-bone/55 text-[10px]">MMA &amp; BJJ</div>
              </div>
            </div>
            <p className="mt-5 text-bone/60 text-sm max-w-sm leading-relaxed">
              Discipline determines destiny. Step on the mat in Royal Palm Beach.
            </p>
          </div>

          <div className="md:col-span-2">
            <div className="eyebrow text-k2 mb-4 text-[10px]">Train</div>
            <ul className="space-y-2 text-bone/70 text-sm">
              <li><Link className="hover:text-k2 transition-colors" to={{ pathname: '/', hash: '#about' }}>About K2</Link></li>
              <li><Link className="hover:text-k2 transition-colors" to={{ pathname: '/', hash: '#programs' }}>Programs</Link></li>
              <li><Link className="hover:text-k2 transition-colors" to={{ pathname: '/', hash: '#schedule' }}>Schedule</Link></li>
              <li><Link className="hover:text-k2 transition-colors" to={{ pathname: '/', hash: '#coach' }}>Head coach</Link></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-k2 mb-4 text-[10px]">Visit</div>
            <ul className="space-y-2 text-bone/70 text-sm">
              <li>11150 Okeechobee Blvd, Suite L</li>
              <li>Royal Palm Beach, FL 33411</li>
              <li className="pt-2">Mon to Thu 5:30 PM &middot; 8:30 PM</li>
              <li>Fri 5:30 PM &middot; 7:30 PM</li>
              <li>Sat 11:00 AM &middot; 1:00 PM</li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="eyebrow text-k2 mb-4 text-[10px]">Connect</div>
            <ul className="space-y-2 text-bone/70 text-sm">
              <li><a className="hover:text-k2 transition-colors" href="tel:+15613835026">(561) 383.5026</a></li>
              <li><a className="hover:text-k2 transition-colors" href="mailto:K2life@aol.com">K2life@aol.com</a></li>
              <li><a className="hover:text-k2 transition-colors" href="https://www.facebook.com/K2MMABJJ" target="_blank" rel="noreferrer">Facebook / @K2MMABJJ</a></li>
              <li><a className="hover:text-k2 transition-colors" href="https://www.instagram.com/k2mmabjj" target="_blank" rel="noreferrer">Instagram / @k2mmabjj</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-wire flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <div className="text-bone/45 text-xs uppercase tracking-wider2">
            &copy; {year} K2 Mixed Martial Arts &amp; Brazilian Jiu Jitsu &middot; Royal Palm Beach, FL
          </div>
          <div className="text-bone/35 text-[11px] uppercase tracking-wider2">
            Discipline determines destiny.
          </div>
        </div>
      </div>
    </footer>
  )
}
