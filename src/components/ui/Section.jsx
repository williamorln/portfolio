import Reveal from './Reveal.jsx'

/**
 * Standard section shell: rule, numbered mono label, display heading,
 * optional lead paragraph. Every section on the page uses this so the
 * vertical rhythm stays identical top to bottom.
 */
export default function Section({ id, num, label, title, lead, children, className = '' }) {
  return (
    <section id={id} className={`scroll-mt-24 px-6 py-20 sm:px-8 md:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="border-t border-line pt-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-ink-faint">{num}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-ink-faint">
                {label}
              </span>
            </div>

            <h2 className="mt-6 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {title}
            </h2>

            {lead && (
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-soft sm:text-lg">
                {lead}
              </p>
            )}
          </div>
        </Reveal>

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  )
}
