import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { experience, sections } from '../data/content.js'

const meta = sections.find((s) => s.id === 'experience')

function Entry({ item, index }) {
  return (
    <Reveal delay={index * 60} as="li" className="relative pl-8 sm:pl-0">
      <div className="grid gap-4 border-t border-line py-8 sm:grid-cols-12 sm:gap-8">
        {/* timeline rail — the dot sits on the section's left edge on mobile */}
        <span
          aria-hidden
          className={`absolute left-0 top-[calc(2rem+1px)] h-2.5 w-2.5 -translate-x-[4px] rounded-full sm:hidden ${
            item.current ? 'bg-accent' : 'bg-line'
          }`}
        />

        <div className="sm:col-span-3">
          <div className="flex items-center gap-2">
            <span
              aria-hidden
              className={`hidden h-2 w-2 shrink-0 rounded-full sm:block ${
                item.current ? 'bg-accent' : 'bg-line'
              }`}
            />
            <span className="font-mono text-xs tracking-wide text-ink-soft">{item.period}</span>
          </div>
          <span className="mt-2 block font-mono text-[11px] uppercase tracking-widest text-ink-faint sm:ml-4">
            {item.kind}
          </span>
        </div>

        <div className="sm:col-span-9">
          <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
            {item.role}
          </h3>
          <p className="mt-1.5 text-sm text-accent">{item.org}</p>

          <ul className="mt-4 space-y-2.5">
            {item.points.map((point, i) => (
              <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-ink-soft">
                <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

export default function Experience() {
  return (
    <Section
      id={meta.id}
      num={meta.num}
      label={meta.label}
      title="Where I've been useful."
      lead="Campus organizations, teaching, and a small business I've been running since 2023."
    >
      <ol className="relative before:absolute before:bottom-0 before:left-0 before:top-0 before:w-px before:bg-line sm:before:hidden">
        {experience.map((item, i) => (
          <Entry key={`${item.role}-${item.org}`} item={item} index={i} />
        ))}
      </ol>
    </Section>
  )
}
