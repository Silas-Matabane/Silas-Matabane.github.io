import { FaGithub } from 'react-icons/fa'
import { projects } from '../../data/projects'
import SectionHeading from '../ui/SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-3">
          <SectionHeading centered gradient>Featured Projects</SectionHeading>
        </div>
        <p className="text-center mb-12 max-w-lg mx-auto text-sm" style={{ color: 'rgba(160,180,210,0.82)' }}>
          A selection of my recent work — from enterprise platforms to client-facing web apps.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card"
            >
              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="w-full object-cover"
                style={{ height: 210 }}
              />
              <div className="p-5 flex flex-col flex-1">
                <h5 className="text-base font-semibold mb-2" style={{ color: 'rgba(242,249,255,0.98)' }}>
                  {project.title}
                </h5>
                <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(200,218,240,0.92)' }}>
                  {project.description}
                </p>
                <span className="btn-outline-blue self-center mt-5">Explore →</span>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://github.com/Silas-Matabane"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold"
          >
            <FaGithub size={14} />
            More on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
