import { FaBriefcase, FaTools, FaMusic, FaChartLine, FaGraduationCap } from 'react-icons/fa'
import { useStaggerReveal, useStatCounter } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'

const STATS = [
  { count: 4, label: 'Years Experience' },
  { count: 15, label: 'Projects Completed' },
  { count: 6, label: 'Certifications' },
  { count: 3, label: 'Career Paths' },
]

const SNAPSHOT = [
  { icon: FaBriefcase, text: 'Junior Cloud Developer at Konecta (Pty) Ltd (Nov 2025 – Current)' },
  { icon: FaTools, text: 'IT Technician (Seasonal) at Mahlwalerwa (Pty) Ltd.' },
  { icon: FaMusic, text: 'Music Artist — Producer & Performer' },
  { icon: FaChartLine, text: 'Forex Trader — Technical & Price Action Analysis' },
  { icon: FaGraduationCap, text: 'BSc Information Technology, North West University (2022).' },
]

function StatItem({ count, label }) {
  const ref = useStatCounter(count)
  return (
    <div className="text-center min-w-[100px]">
      <div ref={ref} className="stat-number">0+</div>
      <div className="stat-label mt-1">{label}</div>
    </div>
  )
}

export default function About() {
  const staggerRef = useStaggerReveal()

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_380px] gap-14 items-start">

          {/* Left */}
          <div>
            <SectionHeading className="mb-6">Professional Summary</SectionHeading>
            <p className="mb-8 leading-relaxed max-w-xl" style={{ color: 'rgba(200,218,240,0.92)', fontSize: '1.0625rem' }}>
              Experienced in desktop support, network troubleshooting, Wi-Fi captive portals,
              server maintenance, and building custom systems for clients. A forward-thinking
              problem-solver who leverages AI-augmented workflows and prompt engineering to maximize
              productivity and deliver modern, scalable solutions. Beyond tech, I express creativity
              through music and build financial independence through forex trading.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {STATS.map(s => <StatItem key={s.label} {...s} />)}
            </div>

            {/* Info cards — stagger reveal */}
            <div ref={staggerRef} className="grid sm:grid-cols-2 gap-4">
              <div className="glass-card p-5">
                <h6 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(160,180,210,0.82)' }}>
                  Core Competencies
                </h6>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,218,240,0.92)' }}>
                  IT Support & Helpdesk, Network Troubleshooting, Microsoft 365 Administration,
                  Wi-Fi Portals (HSNM), Server Maintenance.
                </p>
              </div>
              <div className="glass-card p-5">
                <h6 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: 'rgba(160,180,210,0.82)' }}>
                  Technical Focus
                </h6>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(200,218,240,0.92)' }}>
                  Full-Stack Development, Cloud Computing (Azure & AWS), AI-Integrated Workflows,
                  System Integration & Automation, SQL Databases.
                </p>
              </div>
            </div>
          </div>

          {/* Right — career snapshot */}
          <div className="glass-card p-6">
            <h3 className="text-lg font-semibold mb-5" style={{ color: 'rgba(238,244,255,0.96)' }}>
              Career Snapshot
            </h3>
            <ul className="space-y-4">
              {SNAPSHOT.map(({ icon: Icon, text }) => (
                <li key={text} className="flex gap-3 items-start">
                  <Icon size={14} style={{ color: '#4f9cf9', flexShrink: 0, marginTop: '3px' }} />
                  <span className="text-sm leading-relaxed" style={{ color: 'rgba(200,218,240,0.92)' }}>
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}
