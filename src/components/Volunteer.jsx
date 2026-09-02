import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { volunteer, sections } from '../data/content.js'

const meta = sections.find((s) => s.id === 'volunteer')

export default function Volunteer() {
  return (
    <Section
      id={meta.id}
      num={meta.num}
      label={meta.label}
      title="Time given, not billed."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {volunteer.map((item, i) => (
          <Reveal
            key={item.org}
            delay={(i % 2) * 60}
            className="rounded-2xl border border-line bg-paper-2/40 p-7 transition-colors duration-300 hover:border-ink/40"
          >
            <span className="font-mono text-[11px] uppercase tracking-widest text-accent">
              {item.role}
            </span>
            <h3 className="mt-3 font-display text-xl leading-snug tracking-tight sm:text-2xl">
              {item.org}
            </h3>
            {item.detail && (
              <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.detail}</p>
            )}
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
