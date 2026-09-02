import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { about, education, sections } from '../data/content.js'

const meta = sections.find((s) => s.id === 'about')

export default function About() {
  return (
    <Section id={meta.id} num={meta.num} label={meta.label} title="A bit about how I work.">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="space-y-6 md:col-span-7">
          {about.paragraphs.map((text, i) => (
            <Reveal key={i} as="p" delay={i * 80} className="text-lg leading-relaxed text-ink-soft">
              {text}
            </Reveal>
          ))}
        </div>

        <Reveal delay={120} className="md:col-span-4 md:col-start-9">
          <div className="rounded-2xl border border-line bg-paper-2/50 p-7">
            <h3 className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              Education
            </h3>
            <p className="mt-5 font-display text-2xl leading-snug tracking-tight">
              {education.school}
            </p>
            <p className="mt-3 text-sm text-ink-soft">{education.degree}</p>
            <p className="mt-1 font-mono text-xs text-ink-faint">{education.period}</p>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
