import { useEffect, useState } from 'react'
import { profile, sections, links } from '../data/content.js'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock the page behind the mobile menu while it's open.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-paper"
      >
        Skip to content
      </a>

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <a href="#top" className="group flex items-baseline gap-2">
            <span className="font-display text-xl tracking-tight">{profile.name}</span>
            <span className="hidden font-mono text-[11px] uppercase tracking-widest text-ink-faint sm:inline">
              Fasilkom UI
            </span>
          </a>

          <ul className="hidden items-center gap-7 md:flex">
            {sections
              .filter((s) => s.nav)
              .map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="font-mono text-xs uppercase tracking-widest text-ink-soft transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            <li>
              <a
                href="#contact"
                className="rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-widest text-paper transition-colors hover:bg-accent"
              >
                Get in touch
              </a>
            </li>
          </ul>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="relative z-[60] flex h-10 w-10 items-center justify-center md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="flex w-6 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-ink transition-transform duration-300 ${
                  open ? 'translate-y-[3.5px] rotate-45' : ''
                }`}
              />
              <span
                className={`h-px w-full bg-ink transition-transform duration-300 ${
                  open ? '-translate-y-[3.5px] -rotate-45' : ''
                }`}
              />
            </span>
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-opacity duration-300 md:hidden ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <ul className="flex h-full flex-col justify-center gap-1 px-8">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-2"
              >
                <span className="font-mono text-xs text-ink-faint">{s.num}</span>
                <span className="font-display text-4xl tracking-tight">{s.label}</span>
              </a>
            </li>
          ))}
          <li className="mt-8 border-t border-line pt-6">
            <a
              href={`mailto:${links.email}`}
              className="font-mono text-sm text-ink-soft underline decoration-line underline-offset-4"
            >
              {links.email}
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
