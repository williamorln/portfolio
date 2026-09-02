import { useEffect, useRef } from 'react'

/**
 * Translates an element vertically as the page scrolls. Positive factors drift
 * with the scroll, negative ones against it. Writes are batched into one rAF,
 * and the whole thing sits out when the visitor asked for reduced motion.
 */
export function useParallax(factor = 0.1) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return

    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const y = window.scrollY || 0
        node.style.transform = `translate3d(0, ${(y * factor).toFixed(1)}px, 0)`
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [factor])

  return ref
}
