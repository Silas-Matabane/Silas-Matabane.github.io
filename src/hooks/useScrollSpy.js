import { useState, useEffect } from 'react'

export function useScrollSpy(ids, offset = 80) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    function update() {
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - offset - 20) {
          current = id
        }
      }
      setActiveId(current)
    }

    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => window.removeEventListener('scroll', update)
  }, [ids, offset])

  return activeId
}
