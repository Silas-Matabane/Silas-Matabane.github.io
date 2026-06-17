import { FaCode, FaCloud, FaNetworkWired, FaCertificate } from 'react-icons/fa'
import { skillBlocks } from '../../data/skills'
import { useStaggerReveal } from '../../hooks/useScrollReveal'
import SectionHeading from '../ui/SectionHeading'

const ICONS = { FaCode, FaCloud, FaNetworkWired, FaCertificate }

const BLOCK_COLORS = [
  { bg: 'rgba(79,156,249,0.15)', color: '#4f9cf9' },
  { bg: 'rgba(52,211,153,0.15)', color: '#34d399' },
  { bg: 'rgba(167,139,250,0.15)', color: '#a78bfa' },
  { bg: 'rgba(212,168,83,0.18)', color: '#d4a853' },
]

export default function Skills() {
  const ref = useStaggerReveal(0.1)

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading className="mb-14">Skills &amp; Tooling</SectionHeading>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {skillBlocks.map((block, idx) => {
            const Icon = ICONS[block.icon]
            const { bg, color } = BLOCK_COLORS[idx % BLOCK_COLORS.length]
            return (
              <div key={block.id} className="skill-block">
                <div className="flex items-center gap-4 mb-5">
                  {Icon && (
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: bg }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-base" style={{ color: 'rgba(238,244,255,0.96)' }}>
                      {block.title}
                    </h3>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(160,180,210,0.82)' }}>
                      {block.subtitle}
                    </p>
                  </div>
                </div>

                <div className="skill-pill-group">
                  {block.pills.map(({ label, variant }) => (
                    <span key={label} className={`skill-pill ${variant}`}>{label}</span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
