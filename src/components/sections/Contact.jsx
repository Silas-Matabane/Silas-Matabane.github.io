import { useState } from 'react'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import SectionHeading from '../ui/SectionHeading'

const METHODS = [
  { icon: FaEnvelope, title: 'Email', label: 'tetelosilas@gmail.com', href: 'mailto:tetelosilas@gmail.com', external: false },
  { icon: FaLinkedin, title: 'LinkedIn', label: 'Connect with me', href: 'https://www.linkedin.com/in/silas-tetelo-matabane-TT', external: true },
  { icon: FaGithub, title: 'GitHub', label: 'View my code', href: 'https://github.com/Silas-Matabane', external: true },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Please fill in your name, email, and message.' })
      return
    }
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    window.location.href = `mailto:tetelosilas@gmail.com?subject=${encodeURIComponent(form.subject || 'Portfolio Contact')}&body=${encodeURIComponent(body)}`
    setStatus({ type: 'success', text: 'Opening your email client…' })
  }

  const field = (key) => ({
    value: form[key],
    onChange: (e) => setForm(f => ({ ...f, [key]: e.target.value })),
  })

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-3">
          <SectionHeading centered>Let's Work Together</SectionHeading>
        </div>
        <p className="text-center mb-10" style={{ color: 'rgba(200,218,240,0.92)', fontSize: '1.0625rem' }}>
          Ready to bring your ideas to life? I'm always excited to work on new projects and
          collaborate with amazing people.
        </p>

        {/* Contact method cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {METHODS.map(({ icon: Icon, title, label, href, external }) => (
            <div key={title} className="contact-method">
              <Icon size={28} className="contact-icon mx-auto mb-3" />
              <h4 className="font-semibold mb-2" style={{ color: 'rgba(238,244,255,0.96)' }}>{title}</h4>
              <a
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="contact-link text-sm"
              >
                {label}
              </a>
            </div>
          ))}
        </div>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <h4 className="text-lg font-semibold text-center mb-6 flex items-center justify-center gap-2" style={{ color: 'rgba(238,244,255,0.96)' }}>
            <FaEnvelope style={{ color: '#d4a853' }} />
            Send a Message
          </h4>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'rgba(200,218,240,0.92)' }}>Name</label>
              <input type="text" className="form-input" placeholder="Your name" {...field('name')} required />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5" style={{ color: 'rgba(200,218,240,0.92)' }}>Email</label>
              <input type="email" className="form-input" placeholder="your@email.com" {...field('email')} required />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'rgba(200,218,240,0.92)' }}>Subject</label>
            <input type="text" className="form-input" placeholder="What's this about?" {...field('subject')} />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-1.5" style={{ color: 'rgba(200,218,240,0.92)' }}>Message</label>
            <textarea className="form-input" rows={5} placeholder="Tell me about your project or idea..." {...field('message')} required />
          </div>

          <div className="text-center">
            <button type="submit" className="btn-gold px-10">
              <FaPaperPlane size={13} />
              Send Message
            </button>
          </div>

          {status && (
            <div
              className="mt-4 p-4 rounded-xl text-sm text-center"
              style={{
                background: status.type === 'success' ? 'rgba(52,211,153,0.15)' : 'rgba(248,113,113,0.15)',
                border: `1px solid ${status.type === 'success' ? 'rgba(52,211,153,0.30)' : 'rgba(248,113,113,0.30)'}`,
                color: status.type === 'success' ? '#34d399' : '#f87171',
              }}
            >
              {status.text}
            </div>
          )}
        </form>
      </div>
    </section>
  )
}
