import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { freelance, sections } from '../data/content.js'

const meta = sections.find((s) => s.id === 'freelance')

export default function Freelance() {
  return (
    <Section
      id={meta.id}
      num={meta.num}
      label={meta.label}
      title="Concerts, festivals, brand activations."
    >
      <div className="grid gap-12 md:grid-cols-12">
        <ul className="md:col-span-7">
          {freelance.items.map((item, i) => (
            <Reveal
              key={`${item.role}-${item.org}`}
              as="li"
              delay={i * 50}
              className="group flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1 border-t border-line py-5 last:border-b"
            >
              <div>
                <span className="font-display text-xl tracking-tight sm:text-2xl">{item.org}</span>
                <span className="ml-3 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                  {item.context}
                </span>
              </div>
              <span className="text-sm text-ink-soft">{item.role}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={100} className="md:col-span-4 md:col-start-9">
          <p className="text-base leading-relaxed text-ink-soft">{freelance.note}</p>
        </Reveal>
      </div>
    </Section>
  )
}
