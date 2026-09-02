import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { mlWork, sections } from '../data/content.js'

const meta = sections.find((s) => s.id === 'ml')

/** Placeholder for anything not filled in yet — deliberately visible. */
function Pending({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-md border border-dashed border-accent/40 bg-accent/[0.04] px-2.5 py-1 font-mono text-[11px] text-accent">
      <span aria-hidden>✎</span>
      {children}
    </span>
  )
}

function Row({ label, children }) {
  return (
    <div className="grid gap-1.5 border-t border-line py-4 sm:grid-cols-[7.5rem_1fr] sm:gap-4">
      <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">{label}</dt>
      <dd className="text-sm leading-relaxed text-ink-soft">{children}</dd>
    </div>
  )
}

function CaseStudy({ item, index }) {
  return (
    <Reveal
      delay={(index % 2) * 80}
      className="flex h-full flex-col rounded-2xl border border-line bg-paper-2/40 p-7 transition-colors duration-300 hover:border-ink/40 sm:p-9"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
          {item.title}
        </h3>
        <span className="shrink-0 rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-soft">
          {item.tag}
        </span>
      </div>

      <dl className="mt-6">
        <Row label="Problem">{item.problem}</Row>
        <Row label="Approach">{item.approach}</Row>
        <Row label="Dataset">
          {item.dataset ?? <Pending>Dataset source to be added</Pending>}
        </Row>
        <Row label="Result">
          {item.result ?? <Pending>Result to be added</Pending>}
        </Row>
      </dl>

      {item.todo?.length > 0 && (
        <div className="mt-auto flex flex-wrap items-center gap-2 border-t border-line pt-5">
          <span className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
            Still to document
          </span>
          {item.todo.map((t) => (
            <span
              key={t}
              className="rounded-full border border-dashed border-line px-2.5 py-0.5 font-mono text-[11px] text-ink-faint"
            >
              {t}
            </span>
          ))}
        </div>
      )}
    </Reveal>
  )
}

export default function DataScience() {
  return (
    <Section
      id={meta.id}
      num={meta.num}
      label={meta.label}
      title="Data science practice, written up properly."
      lead="Foundational work — the classic problems, done to build real intuition rather than to pad a list. I've left the metrics blank instead of rounding up something vague; they go in as I re-run and record them."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {mlWork.map((item, i) => (
          <CaseStudy key={item.title} item={item} index={i} />
        ))}
      </div>
    </Section>
  )
}
