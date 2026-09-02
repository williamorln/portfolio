import { skills } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'

export default function Skills() {
  return (
    <section
      id="skills"
      className="bg-paper-2"
      style={{ padding: 'clamp(64px,8vw,120px) clamp(20px,4vw,56px)' }}
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-[22px] flex items-center gap-[9px] text-xs font-semibold uppercase tracking-[0.09em] text-ink-faint">
          <span className="h-[6px] w-[6px] rounded-full bg-accent" />
          05 — Skills
        </Reveal>

        <div
          className="grid [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]"
          style={{ gap: 'clamp(28px, 4vw, 56px)' }}
        >
          {skills.map((group, i) => (
            <Reveal key={group.group} delay={i * 70}>
              <div className="border-t border-ink/14 pt-5 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
                {group.group}
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-ink/18 px-[13px] py-[7px] text-[13px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
