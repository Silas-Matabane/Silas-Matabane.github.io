import { FaGithub, FaLinkedin, FaInstagram, FaFacebook, FaTwitter, FaTiktok, FaYoutube } from 'react-icons/fa'

const SOCIALS = [
  { icon: FaGithub, href: 'https://github.com/Silas-Matabane', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/silas-tetelo-matabane-TT', label: 'LinkedIn' },
  { icon: FaInstagram, href: 'https://www.instagram.com/tetelo_matabane/', label: 'Instagram' },
  { icon: FaFacebook, href: 'https://web.facebook.com/tetelo.matabane.2025/', label: 'Facebook' },
  { icon: FaTwitter, href: 'https://x.com/MpakoSilas', label: 'Twitter / X' },
  { icon: FaTiktok, href: 'https://www.tiktok.com/@tetelomatabanett', label: 'TikTok' },
  { icon: FaYoutube, href: 'https://www.youtube.com/channel/UC56rTfEeTExksx-BSmQ2ygw', label: 'YouTube' },
]

export default function Footer() {
  return (
    <footer
      className="py-8 text-center"
      style={{ background: 'rgba(4,6,12,0.97)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-center gap-5 mb-4">
          {SOCIALS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="social-icon"
            >
              <Icon size={22} />
            </a>
          ))}
        </div>
        <p className="text-sm" style={{ color: 'rgba(160,180,210,0.82)' }}>
          &copy; 2026 Matabane Mpako Silas. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
