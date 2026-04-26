import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Lenis from '@studio-freight/lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

import Splash from './components/Splash.jsx'
import TopBar from './components/TopBar.jsx'
import Marquee from './components/Marquee.jsx'
import Footer from './components/Footer.jsx'

import Home from './pages/Home.jsx'

gsap.registerPlugin(ScrollTrigger)

let sharedLenis = null

function ScrollManager() {
  const location = useLocation()

  // mount Lenis once
  useEffect(() => {
    sharedLenis = new Lenis({
      duration: 1.15,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      smoothTouch: false,
    })

    function raf(time) {
      sharedLenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
    sharedLenis.on('scroll', ScrollTrigger.update)

    const handler = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const id = link.getAttribute('href').slice(1)
      const target = id ? document.getElementById(id) : null
      if (!target) return
      e.preventDefault()
      sharedLenis.scrollTo(target, { offset: -60, duration: 1.4 })
    }
    document.addEventListener('click', handler)

    return () => {
      document.removeEventListener('click', handler)
      sharedLenis.destroy()
      sharedLenis = null
    }
  }, [])

  // when route changes: scroll to hash if present, else top
  useEffect(() => {
    const { pathname, hash } = location
    if (!sharedLenis) return
    if (hash) {
      const tryScroll = (attempts = 0) => {
        const id = hash.slice(1)
        const target = document.getElementById(id)
        if (target) {
          sharedLenis.scrollTo(target, { offset: -60, duration: 1.2, immediate: false })
        } else if (attempts < 12) {
          setTimeout(() => tryScroll(attempts + 1), 60)
        }
      }
      tryScroll()
    } else {
      sharedLenis.scrollTo(0, { immediate: true })
    }
  }, [location.pathname, location.hash])

  return null
}

function Animations() {
  // h2 reveals + parallax
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('section h2').forEach((el) => {
        gsap.from(el, {
          y: 32,
          opacity: 0,
          duration: 0.9,
          ease: 'expo.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })

      gsap.utils.toArray('.hero-mascot').forEach((el) => {
        gsap.to(el, {
          y: -50,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      })

      ScrollTrigger.refresh()
    })

    return () => ctx.revert()
  })

  // IO-driven `.in` toggling
  useEffect(() => {
    const targets = document.querySelectorAll(
      '.fx-up, .fx-left, .fx-mask, .photo-tile, .stat-num'
    )
    if (!targets.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const el = entry.target
          requestAnimationFrame(() => el.classList.add('in'))
          io.unobserve(el)
        })
      },
      { threshold: 0.18, rootMargin: '0px 0px -8% 0px' }
    )

    targets.forEach((el) => io.observe(el))
    return () => io.disconnect()
  })

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <Splash />
      <ScrollProgress />
      <TopBar />
      <ScrollManager />
      <Animations />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Marquee variant="yellow" />
      <Footer />
    </BrowserRouter>
  )
}

function ScrollProgress() {
  useEffect(() => {
    const bar = document.createElement('div')
    bar.className = 'scroll-progress'
    document.body.appendChild(bar)
    let raf = 0
    const tick = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      const max = (document.documentElement.scrollHeight - window.innerHeight) || 1
      const p = Math.min(1, Math.max(0, scrollTop / max))
      bar.style.setProperty('--p', String(p))
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      cancelAnimationFrame(raf)
      bar.remove()
    }
  }, [])
  return null
}
