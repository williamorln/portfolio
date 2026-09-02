import { profile, education, links } from '../data/content.js'

export default function Hero() {
  return (
    <section id="top" className="px-6 pb-20 pt-32 sm:px-8 md:pb-28 md:pt-44">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-ink-soft">
            {profile.available}
          </span>
        </div>

        <h1 className="mt-8 max-w-5xl font-display text-[2.75rem] leading-[1.02] tracking-tight sm:text-6xl md:text-7xl lg:text-[5.5rem]">
          {profile.headline}
        </h1>

        <div className="mt-10 grid gap-10 md:mt-14 md:grid-cols-12">
          <p className="max-w-xl text-lg leading-relaxed text-ink-soft md:col-span-7 md:text-xl">
            {profile.intro}
          </p>

          <dl className="space-y-4 md:col-span-4 md:col-start-9">
            <div className="flex justify-between gap-4 border-t border-line pt-3">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                Studying
              </dt>
              <dd className="text-right text-sm text-ink-soft">Information Systems</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-line pt-3">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">At</dt>
              <dd className="text-right text-sm text-ink-soft">Fasilkom UI</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-line pt-3">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                Since
              </dt>
              <dd className="text-right text-sm text-ink-soft">{education.period}</dd>
            </div>
            <div className="flex justify-between gap-4 border-t border-line pt-3">
              <dt className="font-mono text-[11px] uppercase tracking-widest text-ink-faint">
                Based in
              </dt>
              <dd className="text-right text-sm text-ink-soft">{profile.location}</dd>
            </div>
          </dl>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-3 md:mt-16">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-accent"
          >
            See the work
            <span aria-hidden className="transition-transform duration-300 group-hover:translate-y-0.5">
              ↓
            </span>
          </a>
          <a
            href={`mailto:${links.email}`}
            className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  )
}
