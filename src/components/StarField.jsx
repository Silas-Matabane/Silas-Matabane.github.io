import { useEffect, useRef } from 'react'

export default function StarField() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    function build() {
      container.innerHTML = ''
      const count = window.innerWidth < 768 ? 60 : 120
      const sizes = ['small', 'medium', 'large']
      const frag = document.createDocumentFragment()

      for (let i = 0; i < count; i++) {
        const star = document.createElement('div')
        star.className = `star ${sizes[Math.floor(Math.random() * sizes.length)]}`
        star.style.left = Math.random() * 100 + '%'
        star.style.top = Math.random() * 100 + '%'
        star.style.animationDelay = (Math.random() * 3).toFixed(2) + 's'
        frag.appendChild(star)
      }
      container.appendChild(frag)
    }

    build()
    const handleResize = () => build()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  )
}
