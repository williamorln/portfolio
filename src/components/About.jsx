import { about, education, profile } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'

export default function About() {
  return (
    <section
      id="about"
      className="bg-paper-2"
      style={{ padding: 'clamp(72px,9vw,140px) clamp(20px,4vw,56px)' }}
    >
      <div
        className="mx-auto grid max-w-[1320px] items-start [grid-template-columns:repeat(auto-fit,minmax(320px,1fr))]"
        style={{ gap: 'clamp(32px, 5vw, 80px)' }}
      >
        <Reveal className="relative aspect-4/5 overflow-hidden rounded-md bg-ink">
          <img
            src="/about-portrait.jpg"
            alt={`${profile.name}, candid`}
            className="h-full w-full object-cover"
            style={{ objectPosition: '50% 78%' }}
          />
        </Reveal>

        <div>
          <Reveal className="mb-5 flex items-center gap-[9px] text-xs font-semibold uppercase tracking-[0.09em] text-ink-faint">
            <span className="h-[6px] w-[6px] rounded-full bg-accent" />
            03 — About
          </Reveal>

          <Reveal
            as="h2"
            className="m-0 mb-6 font-display font-semibold leading-[1.04] tracking-[-0.035em] text-pretty"
            style={{ fontSize: 'clamp(30px, 3.6vw, 50px)' }}
          >
            {about.heading}
          </Reveal>

          {about.paragraphs.map((text, i) => (
            <Reveal
              key={i}
              as="p"
              delay={i * 60}
              className="m-0 mb-[18px] max-w-[52ch] text-[16.5px] leading-[1.62] text-ink-deep text-pretty"
            >
              {text}
            </Reveal>
          ))}

          <Reveal className="mt-[34px] border-t border-ink/14 pt-7">
            <div className="font-display text-lg leading-snug tracking-[-0.02em]">
              {education.school}
            </div>
            <div className="mt-1.5 text-sm text-ink-faint">
              {education.degree} · {education.period}
            </div>
          </Reveal>

          <Reveal className="mt-7 grid gap-[22px] [grid-template-columns:repeat(auto-fit,minmax(130px,1fr))]">
            {about.stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-[34px] font-semibold tracking-[-0.03em]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[13px] text-ink-faint">{stat.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
