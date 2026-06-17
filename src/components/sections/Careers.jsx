import { useState } from 'react'
import {
  FaCode, FaCloud, FaNetworkWired, FaRobot, FaDatabase, FaWordpress,
  FaLaptopCode, FaMicrophoneAlt, FaSlidersH, FaUsers, FaCompactDisc,
  FaPenFancy, FaShareAlt, FaChartLine, FaCrosshairs, FaShieldAlt,
  FaBookOpen, FaGraduationCap, FaUsersCog, FaHeadphonesAlt, FaChartBar,
  FaSpotify, FaApple, FaSoundcloud, FaYoutube,
} from 'react-icons/fa'
import { careerTabs, techFeatures, musicFeatures, forexFeatures } from '../../data/careers'
import SectionHeading from '../ui/SectionHeading'

const ICON_MAP = {
  FaCode, FaCloud, FaNetworkWired, FaRobot, FaDatabase, FaWordpress,
  FaLaptopCode, FaMicrophoneAlt, FaSlidersH, FaUsers, FaCompactDisc,
  FaPenFancy, FaShareAlt, FaChartLine, FaCrosshairs, FaShieldAlt,
  FaBookOpen, FaGraduationCap, FaUsersCog, FaHeadphonesAlt, FaChartBar,
}

const TAB_ICONS = { FaCode, FaHeadphonesAlt, FaChartBar }

const CANDLES = [
  { type: 'bullish', h: 30 }, { type: 'bearish', h: 45 }, { type: 'bullish', h: 20 },
  { type: 'bullish', h: 55 }, { type: 'bearish', h: 35 }, { type: 'bullish', h: 50 },
  { type: 'bearish', h: 25 }, { type: 'bullish', h: 40 },
]

const PLATFORM_LINKS = [
  { icon: FaSpotify, label: 'Spotify', href: '#' },
  { icon: FaApple, label: 'Apple Music', href: '#' },
  { icon: FaSoundcloud, label: 'SoundCloud', href: '#' },
  { icon: FaYoutube, label: 'YouTube Music', href: '#' },
]

function FeatureCards({ features }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
      {features.map((f) => {
        const Icon = ICON_MAP[f.icon]
        return (
          <div key={f.title} className="career-feature-card">
            <div className={`career-feature-icon ${f.bg}`}>
              {Icon && <Icon size={22} />}
            </div>
            <h4 className="text-base font-semibold mb-2" style={{ color: 'rgba(238,244,255,0.96)' }}>
              {f.title}
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,218,240,0.92)' }}>
              {f.desc}
            </p>
          </div>
        )
      })}
    </div>
  )
}

function TechPanel() {
  return <FeatureCards features={techFeatures} />
}

function MusicPanel() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="equalizer">
              {[0, 0.15, 0.3, 0.45, 0.6].map((delay, i) => (
                <div key={i} className="equalizer-bar" style={{ animationDelay: `${delay}s` }} />
              ))}
            </div>
            <h3 className="text-xl font-semibold" style={{ color: '#a78bfa' }}>
              The Music Journey
            </h3>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(200,218,240,0.92)' }}>
            Music is where I channel raw emotion into sound. As a producer and artist, I craft beats
            and lyrics that blend Amapiano, Hip-Hop, and Afro-Soul influences. Every track is a
            story — coded in rhythm instead of syntax. My journey in music has taught me discipline,
            creativity, and the art of connecting with people on a deeper level.
          </p>
          <p className="text-sm mb-5" style={{ color: 'rgba(160,180,210,0.82)' }}>
            <strong style={{ color: 'rgba(200,218,240,0.92)' }}>Genre:</strong> Amapiano · Hip-Hop · Afro-Soul
            <br />
            <strong style={{ color: 'rgba(200,218,240,0.92)' }}>Role:</strong> Producer · Vocalist · Songwriter
          </p>
          <div className="flex flex-wrap gap-2">
            {PLATFORM_LINKS.map(({ icon: Icon, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="platform-link">
                <Icon size={15} /> {label}
              </a>
            ))}
          </div>
        </div>

        <div className="music-embed-wrapper">
          <p className="text-xs text-center mb-3" style={{ color: 'rgba(160,180,210,0.82)' }}>
            <FaCompactDisc className="inline-block mr-1 animate-spin" size={12} />
            Latest Release
          </p>
          <iframe
            src="https://www.tiktok.com/embed/v2/7621981582949387541"
            height="352"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            title="TikTok video embed"
            className="w-full rounded-xl border-0"
          />
        </div>
      </div>

      <FeatureCards features={musicFeatures} />
    </>
  )
}

function ForexPanel() {
  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 items-center mb-8">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="candlestick-deco">
              {CANDLES.map((c, i) => (
                <div
                  key={i}
                  className={`candle ${c.type}`}
                  style={{ height: c.h, animationDelay: `${i * 0.08}s` }}
                />
              ))}
            </div>
            <h3 className="text-xl font-semibold" style={{ color: '#34d399' }}>
              The Trading Journey
            </h3>
          </div>
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(200,218,240,0.92)' }}>
            Forex trading is where discipline meets opportunity. I approach the markets with a
            systematic mindset — combining technical analysis, price action, and risk management to
            identify high-probability setups. The same analytical thinking that drives my software
            engineering fuels my trading strategy.
          </p>
          <p className="text-sm" style={{ color: 'rgba(160,180,210,0.82)' }}>
            <strong style={{ color: 'rgba(200,218,240,0.92)' }}>Markets:</strong> EUR/USD · GBP/USD · USD/JPY · Gold · US30
            <br />
            <strong style={{ color: 'rgba(200,218,240,0.92)' }}>Style:</strong> Swing Trading · Price Action · Smart Money Concepts
            <br />
            <strong style={{ color: 'rgba(200,218,240,0.92)' }}>Platforms:</strong> MetaTrader 5 · TradingView
          </p>
        </div>

        <div className="music-embed-wrapper text-center">
          <svg viewBox="0 0 500 200" className="w-full max-w-lg" aria-label="Decorative trading chart">
            <defs>
              <linearGradient id="chartGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#64b5f6" />
              </linearGradient>
            </defs>
            <polyline
              className="animate-draw-line"
              fill="none"
              stroke="url(#chartGrad)"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeDasharray="600"
              strokeDashoffset="600"
              points="10,150 50,130 90,140 130,90 170,100 210,60 250,80 290,40 330,70 370,30 410,50 450,20 490,35"
            />
            <text x="250" y="185" textAnchor="middle" fill="rgba(200,210,230,0.5)" fontSize="12">
              Continuous Growth Through Discipline
            </text>
          </svg>
        </div>
      </div>

      <FeatureCards features={forexFeatures} />
    </>
  )
}

const PANELS = { tech: TechPanel, music: MusicPanel, forex: ForexPanel }

export default function Careers() {
  const [active, setActive] = useState('tech')
  const Panel = PANELS[active]

  return (
    <section id="careers" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-3">
          <SectionHeading centered gradient>My Career Paths</SectionHeading>
        </div>
        <p className="text-center mb-10 max-w-lg mx-auto text-sm" style={{ color: 'rgba(160,180,210,0.82)' }}>
          I wear many hats — from building software systems, to producing music, to analyzing
          financial markets. Explore each path below.
        </p>

        {/* Tab nav */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {careerTabs.map((tab) => {
            const Icon = TAB_ICONS[tab.icon]
            return (
              <button
                key={tab.id}
                className={`career-tab-btn${active === tab.id ? ' active' : ''}`}
                onClick={() => setActive(tab.id)}
              >
                {Icon && <Icon size={14} />}
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Panel */}
        <div key={active} className="animate-panel-fade">
          <Panel />
        </div>
      </div>
    </section>
  )
}
