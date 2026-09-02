import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { skills, sections } from '../data/content.js'

const meta = sections.find((s) => s.id === 'skills')

export default function Skills() {
  return (
    <Section id={meta.id} num={meta.num} label={meta.label} title="What I bring to a team.">
      <div className="grid gap-10 md:grid-cols-3 md:gap-8">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 70}>
            <h3 className="border-t border-line pt-5 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
              {group.group}
            </h3>
            <ul className="mt-5 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-paper-2/60 px-3.5 py-1.5 text-sm text-ink-soft"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
