import { useEffect, useLayoutEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15, once = true) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible')
          if (once) observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, once])

  return ref
}

export function useStaggerReveal(threshold = 0.15) {
  const ref = useRef(null)

  useLayoutEffect(() => {
    const container = ref.current
    if (!container) return
    Array.from(container.children).forEach((child, i) => {
      child.classList.add('stagger-item')
      child.style.transitionDelay = `${i * 80}ms`
    })
  }, [])

  useEffect(() => {
    const container = ref.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          Array.from(container.children).forEach(child => child.classList.add('visible'))
          observer.unobserve(container)
        }
      },
      { threshold }
    )

    observer.observe(container)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

export function useStatCounter(target, duration = 2000) {
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const start = performance.now()

          function update(now) {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            el.textContent = Math.round(eased * target) + '+'
            if (progress < 1) requestAnimationFrame(update)
          }
          requestAnimationFrame(update)
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}
