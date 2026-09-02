import { profile, navLinks } from '../data/content.js'

/**
 * Fixed nav using mix-blend-mode: difference, so the labels invert themselves
 * against whatever section is behind them — white over the dark hero, dark over
 * the paper sections. No scroll listener, no colour swapping.
 */
export default function Nav() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-paper focus:px-4 focus:py-2 focus:text-sm focus:text-ink"
      >
        Skip to content
      </a>

      <nav
        className="fixed inset-x-0 top-0 z-80 flex items-center justify-between text-[13px] font-medium tracking-[-0.01em] text-white mix-blend-difference sm:text-[15px]"
        style={{ padding: 'clamp(18px, 2.4vw, 26px) clamp(16px, 4vw, 56px)' }}
      >
        {/* The full name wraps and collides with the links on a phone, so the
            brand shortens below sm rather than reflowing to two lines. */}
        <a href="#top" className="whitespace-nowrap text-white">
          <span className="hidden sm:inline">© {profile.name}</span>
          <span className="sm:hidden">© Orlando</span>
        </a>
        <div className="flex whitespace-nowrap" style={{ gap: 'clamp(12px, 3vw, 44px)' }}>
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-white">
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </>
  )
}
