import { useEffect, useState } from 'react'

/** Thin accent bar across the top showing how far down the page you are. */
export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    let raf = null
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = null
        const max = document.documentElement.scrollHeight - window.innerHeight
        setPct(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0)
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      aria-hidden
      className="fixed left-0 top-0 z-99 h-0.5 bg-accent transition-[width] duration-100 ease-linear"
      style={{ width: `${pct}%` }}
    />
  )
}
