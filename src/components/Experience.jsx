import { organizational, business } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'

function Pill({ children }) {
  return (
    <span className="rounded-full border border-ink/18 px-[13px] py-[7px] text-[13px]">
      {children}
    </span>
  )
}

function ColumnHead({ children }) {
  return (
    <div className="border-b border-ink/14 pb-3.5 text-xs font-semibold uppercase tracking-[0.08em] text-accent">
      {children}
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ padding: 'clamp(72px,9vw,140px) clamp(20px,4vw,56px)' }}
    >
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-[22px] flex items-center gap-[9px] text-xs font-semibold uppercase tracking-[0.09em] text-ink-faint">
          <span className="h-[6px] w-[6px] rounded-full bg-accent" />
          04 — Experience
        </Reveal>

        <Reveal
          as="h2"
          className="m-0 font-display font-semibold leading-[0.96] tracking-[-0.04em]"
          style={{
            fontSize: 'clamp(34px, 4.6vw, 66px)',
            marginBottom: 'clamp(34px, 4vw, 58px)',
          }}
        >
          Organizations, events, and a flower shop.
        </Reveal>

        <div
          className="grid [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))]"
          style={{ gap: 'clamp(30px, 4vw, 64px)' }}
        >
          <Reveal>
            <ColumnHead>Organizational</ColumnHead>
            <div className="flex flex-col">
              {organizational.map((item, i) => (
                <div
                  key={item.role}
                  className={`py-[22px] ${
                    i < organizational.length - 1 ? 'border-b border-ink/10' : ''
                  }`}
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <div className="font-display text-[18.5px] font-semibold tracking-[-0.02em]">
                      {item.role}
                    </div>
                    <div className="whitespace-nowrap text-[12.5px] text-ink-faint">
                      {item.period}
                    </div>
                  </div>
                  <p className="m-0 mt-2 max-w-[46ch] text-[14.5px] leading-[1.55] text-ink-soft">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={80}>
            <ColumnHead>Business, Events &amp; Volunteer</ColumnHead>

            <div className="border-b border-ink/10 py-[22px]">
              <div className="flex items-baseline justify-between gap-4">
                <div className="font-display text-[18.5px] font-semibold tracking-[-0.02em]">
                  {business.floral.role}
                </div>
                <div className="whitespace-nowrap text-[12.5px] text-ink-faint">
                  {business.floral.period}
                </div>
              </div>
              <p className="m-0 mt-2 max-w-[46ch] text-[14.5px] leading-[1.55] text-ink-soft">
                {business.floral.detail}
              </p>
            </div>

            <div className="border-b border-ink/10 py-[22px]">
              <div className="mb-3 font-display text-[18.5px] font-semibold tracking-[-0.02em]">
                Brand &amp; event work
              </div>
              <div className="flex flex-wrap gap-2">
                {business.events.map((e) => (
                  <Pill key={e}>{e}</Pill>
                ))}
              </div>
              <p className="m-0 mt-3 max-w-[46ch] text-[14.5px] leading-[1.55] text-ink-soft">
                {business.eventNote}
              </p>
            </div>

            <div className="py-[22px]">
              <div className="mb-3 font-display text-[18.5px] font-semibold tracking-[-0.02em]">
                Volunteer
              </div>
              <div className="flex flex-wrap gap-2">
                {business.volunteer.map((v) => (
                  <Pill key={v}>{v}</Pill>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
