import { FaCode, FaCloud, FaMusic, FaChartLine, FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaExternalLinkAlt, FaFileDownload, FaPaperPlane } from 'react-icons/fa'

const BADGES = [
  { icon: FaCloud, label: 'Cloud Developer' },
  { icon: FaCode, label: 'Full-Stack Developer' },
  { icon: FaMusic, label: 'Music Artist' },
  { icon: FaChartLine, label: 'Forex Trader' },
]

const CONTACTS = [
  { icon: FaPhone, label: '+27 72 977 6467', href: 'tel:+27729776467' },
  { icon: FaEnvelope, label: 'tetelosilas@gmail.com', href: 'mailto:tetelosilas@gmail.com' },
  { icon: FaMapMarkerAlt, label: 'Tembisa, South Africa', href: null },
  { icon: FaLinkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/silas-tetelo-matabane-TT' },
]

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (!el) return
    const navH = document.querySelector('.navbar-glass')?.offsetHeight ?? 70
    window.scrollTo({ top: el.offsetTop - navH, behavior: 'smooth' })
  }

  return (
    <header id="home" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-[1fr_auto] gap-12 items-center">

          {/* Left column */}
          <div>
            <div className="flex flex-wrap gap-2 mb-5 mt-2 hero-fade-1">
              {BADGES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold"
                  style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(238,244,255,0.90)' }}
                >
                  <Icon size={11} />
                  {label}
                </span>
              ))}
            </div>

            <h1
              className="font-accent leading-none mb-3 hero-fade-2"
              style={{ fontSize: 'clamp(2.4rem, 6.5vw, 4.5rem)', color: 'rgba(238,244,255,0.96)' }}
            >
              Matabane Mpako Silas
            </h1>

            <h2
              className="font-semibold mb-5 hero-fade-3"
              style={{ fontSize: 'clamp(1rem, 2.5vw, 1.375rem)', color: '#4f9cf9' }}
            >
              Cloud Developer · Full-Stack Developer · Music Artist · Forex Trader
            </h2>

            <p
              className="mb-7 max-w-xl leading-relaxed hero-fade-3"
              style={{ fontSize: 'clamp(0.9rem, 1.5vw, 1.0625rem)', color: 'rgba(200,218,240,0.92)' }}
            >
              Junior Cloud Developer at Konecta (Pty) Ltd, building cloud infrastructure and
              microservices on Azure &amp; AWS. Multi-disciplinary technologist with 4+ years
              across IT support, full-stack development, and cloud engineering — skilled in C#,
              ASP.NET Core, React, Node.js, SQL and equally passionate about creating music and
              trading the forex markets.
            </p>

            <div className="flex flex-wrap gap-3 mb-8 hero-fade-4">
              <a className="btn-gold" href="/Projects/CV/Silas Matabane Online CV.html" target="_blank" rel="noopener">
                <FaExternalLinkAlt size={13} />
                View Interactive CV
              </a>
              <a className="btn-outline-white" href="/Projects/CV/Matabane Mpako Silas - CV.pdf" download>
                <FaFileDownload size={13} />
                Download PDF CV
              </a>
              <button className="btn-dark" onClick={() => scrollTo('contact')}>
                <FaPaperPlane size={13} />
                Let's Collaborate
              </button>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 hero-fade-5">
              {CONTACTS.map(({ icon: Icon, label, href }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <Icon size={14} style={{ color: '#4f9cf9', flexShrink: 0 }} />
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm hover:text-accent-gold transition-colors duration-200"
                      style={{ color: 'rgba(200,218,240,0.92)' }}
                    >
                      {label}
                    </a>
                  ) : (
                    <span className="text-sm" style={{ color: 'rgba(200,218,240,0.92)' }}>{label}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right column — profile image */}
          <div className="flex justify-center lg:justify-end hero-image-anim">
            <img
              src="/images/profile-pic.jpg"
              alt="Silas Matabane — Software Developer"
              className="profile-img"
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator hidden lg:block">
          <div className="mouse" />
        </div>
      </div>
    </header>
  )
}
