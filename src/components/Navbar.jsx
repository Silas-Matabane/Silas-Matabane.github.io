import { useState, useEffect } from 'react'
import { useScrollSpy } from '../hooks/useScrollSpy'

const NAV_LINKS = [
  { href: 'home', label: 'Home' },
  { href: 'about', label: 'About' },
  { href: 'careers', label: 'Careers' },
  { href: 'skills', label: 'Skills' },
  { href: 'experience', label: 'Experience' },
  { href: 'projects', label: 'Projects' },
  { href: 'contact', label: 'Contact' },
]

const SECTION_IDS = NAV_LINKS.map(l => l.href)

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(SECTION_IDS)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const navH = document.querySelector('.navbar-glass')?.offsetHeight ?? 70
    window.scrollTo({ top: el.offsetTop - navH, behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav className={`navbar-glass${scrolled ? ' scrolled' : ''}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Brand */}
        <button
          className="flex items-center gap-2 font-bold text-base text-text-base"
          onClick={() => scrollTo('home')}
        >
          <img src="/images/mainLogo.png" alt="Logo" className="w-7 h-7" />
          Silas Matabane
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <button
                className={`nav-link${activeId === href ? ' active' : ''}`}
                onClick={() => scrollTo(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
        >
          <span className={`block w-6 h-0.5 bg-text-sub transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-sub transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-text-sub transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96' : 'max-h-0'}`}
        style={{ background: 'rgba(6,8,16,0.97)', backdropFilter: 'blur(24px)' }}
      >
        <ul className="flex flex-col px-6 pb-4 gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <button
                className={`w-full text-left py-2.5 text-sm font-medium transition-colors duration-200 ${activeId === href ? 'text-accent-gold' : 'text-text-sub hover:text-text-base'}`}
                onClick={() => scrollTo(href)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
