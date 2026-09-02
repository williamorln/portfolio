import { mlWork } from '../data/content.js'
import Reveal from './ui/Reveal.jsx'

export default function DataScience() {
  return (
    <section style={{ padding: '0 clamp(20px,4vw,56px) clamp(72px,9vw,130px)' }}>
      <div className="mx-auto max-w-[1320px]">
        <Reveal className="mb-[22px] flex items-center gap-[9px] text-xs font-semibold uppercase tracking-[0.09em] text-ink-faint">
          <span className="h-[6px] w-[6px] rounded-full bg-accent" />
          02 — Data Science Practice
        </Reveal>

        <Reveal className="grid gap-3.5 [grid-template-columns:repeat(auto-fit,minmax(240px,1fr))]">
          {mlWork.map((item) => (
            <div
              key={item.title}
              className="flex min-h-[170px] flex-col border border-ink/14 bg-paper px-6 pb-[30px] pt-[26px] transition-colors hover:bg-paper-2"
            >
              <div className="font-display text-[19px] font-semibold tracking-[-0.02em]">
                {item.title}
              </div>
              <div className="mt-[9px] text-sm leading-[1.5] text-ink-soft">{item.summary}</div>

              <div className="mt-4 text-[13px] text-ink-faint">
                {item.dataset ?? (
                  <span className="text-accent">Dataset — to be added</span>
                )}
              </div>

              {/* Deliberately visible: no metric was invented for these. */}
              <div className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-[4px] border border-dashed border-accent/45 bg-accent/5 px-2.5 py-1 font-sans text-[11px] text-accent">
                <span aria-hidden>✎</span>
                {item.result ?? 'Result to be added'}
              </div>

              <div className="mt-auto pt-5 text-xs uppercase tracking-[0.06em] text-ink-faint">
                {item.tag}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
