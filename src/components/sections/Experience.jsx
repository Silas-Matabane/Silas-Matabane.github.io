import { timelineItems } from '../../data/timeline'
import SectionHeading from '../ui/SectionHeading'

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <SectionHeading centered>Experience &amp; Education</SectionHeading>
        </div>

        <div className="timeline-container">
          {timelineItems.map((item) => (
            <div key={item.id} className="timeline-item">
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                  <h3 className="text-base font-semibold" style={{ color: 'rgba(238,244,255,0.96)' }}>
                    {item.title}
                  </h3>
                  <span className="timeline-date whitespace-nowrap">{item.date}</span>
                </div>

                <div className="timeline-company">{item.company}</div>

                {item.description && (
                  <p className="text-sm mb-3 leading-relaxed" style={{ color: 'rgba(200,218,240,0.92)' }}>
                    {item.description}
                  </p>
                )}

                {item.achievements.length > 0 && (
                  <ul
                    className="text-sm space-y-1.5 mb-4 pl-4"
                    style={{ color: 'rgba(200,218,240,0.92)', listStyleType: 'disc' }}
                  >
                    {item.achievements.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                )}

                {item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {item.tags.map((tag) => (
                      <span key={tag} className="tech-tag">{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
