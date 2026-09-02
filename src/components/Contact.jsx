import { links, profile, education } from '../data/content.js'
import { getProfileLinks, hasPendingLinks, pendingLinkLabels } from '../lib/social.js'
import { useClock } from '../hooks/useClock.js'

export default function Contact() {
  const profileLinks = getProfileLinks()
  const clock = useClock()
  const year = new Date().getFullYear()

  return (
    <section
      id="contact"
      className="bg-ink text-paper"
      style={{ padding: 'clamp(72px,9vw,140px) clamp(20px,4vw,56px) 40px' }}
    >
      <div className="mx-auto max-w-[1320px]">
        <div className="mb-[26px] flex items-center gap-[9px] text-xs font-semibold uppercase tracking-[0.09em] text-paper/55">
          <span className="h-[6px] w-[6px] rounded-full bg-accent" />
          06 — Contact
        </div>

        <h2
          className="m-0 font-display font-semibold leading-[0.86] tracking-[-0.05em]"
          style={{
            fontSize: 'clamp(42px, 8.4vw, 140px)',
            marginBottom: 'clamp(30px, 4vw, 54px)',
          }}
        >
          Let's build
          <br />
          something.
        </h2>

        <div
          className="grid gap-8 border-b border-paper/18 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]"
          style={{ paddingBottom: 'clamp(40px, 6vw, 90px)' }}
        >
          <div>
            <div className="mb-2.5 text-xs uppercase tracking-[0.08em] text-paper/50">Email</div>
            <a
              href={`mailto:${links.email}`}
              className="border-b border-paper/35 pb-[3px] font-display tracking-[-0.02em] text-paper transition-colors hover:border-accent"
              style={{ fontSize: 'clamp(18px, 1.7vw, 24px)' }}
            >
              {links.email}
            </a>
          </div>

          <div>
            <div className="mb-2.5 text-xs uppercase tracking-[0.08em] text-paper/50">
              Elsewhere
            </div>
            {profileLinks.length > 0 ? (
              <div className="flex flex-col gap-[7px] text-[15.5px]">
                {profileLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-paper/85 transition-colors hover:text-accent"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            ) : (
              <div className="text-[15.5px] text-paper/50">—</div>
            )}
          </div>

          <div>
            <div className="mb-2.5 text-xs uppercase tracking-[0.08em] text-paper/50">
              Currently
            </div>
            <div className="text-[15.5px] leading-[1.55] text-paper/85">
              {education.degree} — Universitas Indonesia. {profile.available}.
            </div>
          </div>
        </div>

        {/* Dev-only reminder; never present in the production build. */}
        {import.meta.env.DEV && hasPendingLinks() && (
          <p className="mt-8 rounded border border-dashed border-accent/60 px-4 py-3 text-xs text-accent">
            Dev note: {pendingLinkLabels().join(' and ')} still uses a placeholder username, so it
            is hidden on the live site. Set it in src/data/content.js → links.
          </p>
        )}

        <div className="flex flex-wrap justify-between gap-4 pt-[22px] text-[12.5px] text-paper/45">
          <span>
            © {year} {profile.name}
          </span>
          <span>
            {profile.location} — {clock} WIB
          </span>
        </div>
      </div>
    </section>
  )
}
