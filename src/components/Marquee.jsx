import { marquee } from '../data/content.js'

function Row() {
  return (
    <div className="flex gap-[26px] pr-[26px]">
      {marquee.map((item) => (
        <span key={item} className="flex items-center gap-[26px] whitespace-nowrap">
          {item}
          <span className="text-accent">✳</span>
        </span>
      ))}
    </div>
  )
}

/** Skills strip under the hero. Two identical rows so the loop is seamless. */
export default function Marquee() {
  return (
    <section
      aria-label="Skills"
      className="overflow-hidden border-b border-ink/12 bg-paper"
    >
      <div className="animate-marquee flex w-max py-4 font-display text-[15px] font-medium tracking-[-0.01em] text-ink">
        <Row />
        <Row />
      </div>
    </section>
  )
}
