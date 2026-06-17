import { useEffect, useRef } from 'react'

export default function CursorGlow() {
  const glowRef = useRef(null)

  useEffect(() => {
    const glow = glowRef.current
    if (!glow || !window.matchMedia('(pointer: fine)').matches) return

    let targetX = window.innerWidth / 2
    let targetY = window.innerHeight / 2
    let currentX = targetX
    let currentY = targetY
    let rafId
    let moving = false

    const onMove = (e) => {
      targetX = e.clientX
      targetY = e.clientY
      moving = true
    }
    const onLeave = () => { glow.style.opacity = '0' }
    const onEnter = () => { glow.style.opacity = '1' }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    function animate() {
      rafId = requestAnimationFrame(animate)
      if (!moving) return

      const dx = targetX - currentX
      const dy = targetY - currentY
      currentX += dx * 0.14
      currentY += dy * 0.14
      glow.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`

      if (Math.abs(dx) < 0.4 && Math.abs(dy) < 0.4) moving = false
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      cancelAnimationFrame(rafId)
    }
  }, [])

  return <div id="cursor-glow" ref={glowRef} aria-hidden="true" />
}
