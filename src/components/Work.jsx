import { useEffect, useState } from 'react'
import { projects } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'
import RepoBadge, { repoState } from './ui/RepoBadge.jsx'

function SectionLabel({ children, tone = 'light' }) {
  return (
    <div
      className={`flex items-center gap-[9px] text-xs font-semibold uppercase tracking-[0.09em] ${
        tone === 'dark' ? 'text-paper/55' : 'text-ink-faint'
      }`}
    >
      <span className="h-[6px] w-[6px] rounded-full bg-accent" />
      {children}
    </div>
  )
}

/** The sticky panel beside the list. Projects with a real screenshot show it
 *  full-bleed under a scrim; the rest fall back to a typographic card rather
 *  than a stock photo standing in for something that doesn't exist yet. */
function Preview({ project }) {
  return (
    <div className="sticky top-24 hidden aspect-4/5 overflow-hidden rounded-lg bg-ink lg:block">
      {projects.map((p) => (
        <div
          key={p.n}
          className="absolute inset-0 transition-all duration-500"
          style={{
            opacity: p.n === project.n ? 1 : 0,
            transform: p.n === project.n ? 'scale(1)' : 'scale(1.06)',
          }}
        >
          {p.image ? (
            <>
              <img
                src={p.image}
                alt={`${p.title} — screenshot`}
                className="absolute inset-0 h-full w-full object-cover object-top"
              />

              {/* Number/year float over the image directly — a small pill
                  reads fine without a scrim. Everything else lives in one
                  solid block at the bottom so it never fights image content
                  for contrast. */}
              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-ink/70 px-3 py-1 backdrop-blur-sm">
                <span className="font-display text-[12px] font-semibold tracking-[0.06em] text-accent">
                  {p.n}
                </span>
                <span className="text-[12px] text-paper/60">{p.year ?? '—'}</span>
              </div>

              <div className="absolute inset-x-0 bottom-0 bg-ink p-6">
                <div className="font-display text-2xl leading-[1.05] tracking-[-0.03em] text-paper">
                  {p.title}
                </div>
                <div className="mt-1.5 text-[13px] text-paper/60">{p.kind}</div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 3).map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-paper/20 px-2.5 py-0.5 text-[11px] text-paper/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-paper/15 pt-4 text-[12px] uppercase tracking-[0.04em] text-paper/55">
                  <span>{repoState(p).label}</span>
                  <span aria-hidden>↗</span>
                </div>
              </div>
            </>
          ) : (
            <div className="absolute inset-0 flex flex-col justify-between p-8">
              <div className="flex items-start justify-between">
                <span className="font-display text-[13px] font-semibold tracking-[0.06em] text-accent">
                  {p.n}
                </span>
                <span className="text-[13px] text-paper/50">{p.year ?? '—'}</span>
              </div>

              <div>
                <div className="font-display text-4xl leading-[1.02] tracking-[-0.035em] text-paper">
                  {p.title}
                </div>
                <div className="mt-3 text-sm text-paper/60">{p.kind}</div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-paper/20 px-3 py-1 text-[12px] text-paper/75"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between border-t border-paper/15 pt-5 text-[13px] uppercase tracking-[0.04em] text-paper/55">
                <span>{repoState(p).label}</span>
                <span aria-hidden>↗</span>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}

function Drawer({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <>
      <div
        onClick={onClose}
        className="fixed inset-0 z-90 bg-ink/50 backdrop-blur-[3px]"
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label={project.title}
        className="fixed inset-y-0 right-0 z-95 w-[min(560px,92vw)] overflow-y-auto bg-paper shadow-[-24px_0_60px_rgba(12,12,12,.28)]"
        style={{ padding: 'clamp(26px, 3vw, 46px)' }}
      >
        <div className="mb-[30px] flex items-start justify-between gap-5">
          <div className="font-display text-[13px] font-semibold tracking-[0.08em] text-ink-faint">
            {project.n} / {project.year ?? '—'}
          </div>
          <button
            type="button"
            onClick={onClose}
            className="cursor-pointer rounded-full border border-ink/20 bg-transparent px-[15px] py-2 font-sans text-[13px] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            Close ✕
          </button>
        </div>

        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} — screenshot`}
            className="mb-[26px] w-full rounded-lg border border-ink/10 object-cover object-top"
            style={{ maxHeight: '340px' }}
          />
        )}

        <h3
          className="m-0 mb-[10px] font-display font-semibold leading-[1.02] tracking-[-0.035em]"
          style={{ fontSize: 'clamp(28px, 3.4vw, 42px)' }}
        >
          {project.title}
        </h3>
        <div className="mb-[26px] text-[14.5px] text-ink-faint">{project.kind}</div>
        <p className="m-0 mb-[30px] text-base leading-[1.62] text-ink-deep text-pretty">
          {project.blurb}
        </p>

        <div className="mb-[14px] text-xs font-semibold uppercase tracking-[0.08em] text-accent">
          Highlights
        </div>
        <div className="mb-8 flex flex-col gap-3">
          {project.highlights.map((h) => (
            <div key={h} className="flex gap-3 text-[15px] leading-[1.55] text-ink-deep">
              <span className="text-accent">—</span>
              <span>{h}</span>
            </div>
          ))}
        </div>

        <div className="mb-3 text-xs font-semibold uppercase tracking-[0.08em] text-ink-faint">
          Stack
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-full border border-ink/18 px-[13px] py-[7px] text-[13px]"
            >
              {s}
            </span>
          ))}
        </div>

        <RepoBadge project={project} />
      </aside>
    </>
  )
}

export default function Work() {
  const [hovered, setHovered] = useState(null)
  const [active, setActive] = useState(null)

  const preview = projects[hovered ?? 0]

  return (
    <section
      id="work"
      style={{
        padding: 'clamp(72px,9vw,140px) clamp(20px,4vw,56px) clamp(56px,7vw,110px)',
      }}
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal
          className="flex flex-wrap items-end justify-between gap-7"
          style={{ marginBottom: 'clamp(32px, 4vw, 60px)' }}
        >
          <div>
            <div className="mb-4">
              <SectionLabel>01 — Selected Work</SectionLabel>
            </div>
            <h2
              className="m-0 max-w-[16ch] font-display font-semibold leading-[0.94] tracking-[-0.04em]"
              style={{ fontSize: 'clamp(38px, 5.4vw, 76px)' }}
            >
              Things I built to fix real problems.
            </h2>
          </div>
          <p className="m-0 max-w-[34ch] text-[15.5px] leading-[1.55] text-ink-soft text-pretty">
            Most of these started as a personal annoyance — a platform that doesn't notify you, a
            process someone still runs by hand. Open any project for the detail.
          </p>
        </Reveal>

        <div
          className="grid items-start lg:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)]"
          style={{ gap: 'clamp(24px, 3.4vw, 56px)' }}
        >
          <div className="border-t border-ink/14">
            {projects.map((p, i) => {
              const on = hovered === i
              return (
                <div
                  key={p.n}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      setActive(i)
                    }
                  }}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className={`grid cursor-pointer grid-cols-[40px_1fr_28px] items-center gap-3 border-b border-ink/10 transition-all duration-400 sm:grid-cols-[64px_minmax(0,1.5fr)_minmax(0,1fr)_80px_34px] sm:gap-[18px] ${
                    on ? 'bg-paper-2 px-5 py-[30px]' : 'px-2 py-[26px]'
                  }`}
                >
                  <div
                    className={`font-display text-[13px] font-semibold tracking-[0.06em] transition-colors ${
                      on ? 'text-accent' : 'text-ink-faint'
                    }`}
                  >
                    {p.n}
                  </div>

                  <div className="min-w-0">
                    <div
                      className={`font-display font-semibold leading-[1.05] tracking-[-0.035em] transition-colors ${
                        on ? 'text-accent' : 'text-ink'
                      }`}
                      style={{ fontSize: 'clamp(20px, 2.5vw, 34px)' }}
                    >
                      {p.title}
                    </div>
                    <div className="mt-1.5 text-sm text-ink-faint">{p.kind}</div>
                    <div className="mt-3 text-[13px] text-ink-faint sm:hidden">
                      {p.stack.slice(0, 3).join(' · ')}
                    </div>
                  </div>

                  <div
                    className={`hidden text-[13.5px] text-ink-faint transition-opacity sm:block ${
                      on ? 'opacity-100' : 'opacity-60'
                    }`}
                  >
                    {p.stack.slice(0, 3).join(' · ')}
                  </div>

                  <div className="hidden text-right text-sm text-ink-faint sm:block">
                    {p.year ?? '—'}
                  </div>

                  <div
                    className={`text-right text-[19px] transition-all duration-350 ${
                      on ? 'translate-x-[3px] -translate-y-[3px] text-accent' : 'text-ink-faint'
                    }`}
                    aria-hidden
                  >
                    ↗
                  </div>
                </div>
              )
            })}
          </div>

          <Preview project={preview} />
        </div>

        <Reveal
          className="flex items-center gap-[14px] text-sm text-ink-faint"
          style={{ marginTop: 'clamp(32px, 4vw, 56px)' }}
        >
          <span className="h-px w-[34px] bg-ink/25" />
          More projects land here as they ship.
        </Reveal>
      </div>

      {active !== null && <Drawer project={projects[active]} onClose={() => setActive(null)} />}
    </section>
  )
}
