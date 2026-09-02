import Reveal from './ui/Reveal.jsx'
import { links, profile, sections } from '../data/content.js'
import { getProfileLinks, hasPendingLinks, pendingLinkLabels } from '../lib/social.js'

const meta = sections.find((s) => s.id === 'contact')

export default function Contact() {
  const profileLinks = getProfileLinks()
  const year = new Date().getFullYear()

  return (
    <section id={meta.id} className="scroll-mt-24 bg-night px-6 py-20 text-paper sm:px-8 md:py-28">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="border-t border-paper/15 pt-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs tracking-widest text-paper/40">{meta.num}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-paper/40">
                {meta.label}
              </span>
            </div>

            <h2 className="mt-8 max-w-4xl font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Working on something interesting? I'd like to hear about it.
            </h2>

            <p className="mt-7 max-w-xl text-lg leading-relaxed text-paper/60">
              Open to internships, data science and automation projects, competition teams, or just
              a conversation about something you're building.
            </p>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <a
            href={`mailto:${links.email}`}
            className="group mt-12 inline-flex max-w-full items-center gap-4 md:mt-16"
          >
            <span className="break-all font-display text-2xl tracking-tight underline decoration-paper/25 decoration-1 underline-offset-8 transition-colors group-hover:decoration-accent sm:text-4xl md:text-5xl">
              {links.email}
            </span>
            <span
              aria-hidden
              className="hidden shrink-0 text-3xl text-paper/40 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-accent sm:block"
            >
              →
            </span>
          </a>
        </Reveal>

        {profileLinks.length > 0 && (
          <Reveal delay={120}>
            <ul className="mt-12 flex flex-wrap gap-3">
              {profileLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full border border-paper/20 px-5 py-2.5 text-sm transition-colors hover:border-paper/60"
                  >
                    {link.label}
                    <span className="font-mono text-[11px] text-paper/40">{link.handle}</span>
                    <span
                      aria-hidden
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    >
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        )}

        {/* Dev-only nudge. Never renders in the production build. */}
        {import.meta.env.DEV && hasPendingLinks() && (
          <p className="mt-10 rounded-lg border border-dashed border-accent/50 px-4 py-3 font-mono text-xs text-accent">
            Dev note: {pendingLinkLabels().join(' and ')} link
            {pendingLinkLabels().length > 1 ? 's are' : ' is'} still using a placeholder username, so
            {pendingLinkLabels().length > 1 ? ' they are' : ' it is'} hidden on the live site. Set it
            in src/data/content.js → links.
          </p>
        )}

        <footer className="mt-20 flex flex-col gap-4 border-t border-paper/15 pt-8 sm:flex-row sm:items-center sm:justify-between md:mt-28">
          <p className="font-mono text-xs text-paper/40">
            © {year} {profile.name}
          </p>
          <p className="font-mono text-xs text-paper/40">
            Built with React &amp; Tailwind · {profile.location}
          </p>
          <a
            href="#top"
            className="font-mono text-xs uppercase tracking-widest text-paper/60 transition-colors hover:text-paper"
          >
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  )
}
