import Section from './ui/Section.jsx'
import Reveal from './ui/Reveal.jsx'
import { projects, sections } from '../data/content.js'

const meta = sections.find((s) => s.id === 'projects')

function Tag({ children }) {
  return (
    <li className="rounded-full border border-line px-3 py-1 font-mono text-[11px] text-ink-soft">
      {children}
    </li>
  )
}

/**
 * Projects without a public repo get an honest badge rather than a dead link.
 * Set `repo` on the project in content.js and this turns into a real link.
 */
function RepoSlot({ repo, live, noRepo, planned }) {
  // Distinguish "code exists, repo isn't public yet" from "there is no codebase"
  // and "not built yet" — promising a repo for the last two would be a lie.
  if (!repo && !live) {
    const label = noRepo
      ? 'Business & product work'
      : planned
        ? 'Not built yet'
        : 'Repo coming soon'

    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-dashed border-line px-3 py-1 font-mono text-[11px] text-ink-faint">
        <span aria-hidden>{noRepo ? '◆' : '◷'}</span> {label}
      </span>
    )
  }

  return (
    <span className="flex flex-wrap items-center gap-3">
      {repo && (
        <a
          href={repo}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink transition-colors hover:text-accent"
        >
          View repo
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      )}
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-ink transition-colors hover:text-accent"
        >
          Live
          <span aria-hidden className="transition-transform group-hover:translate-x-0.5">↗</span>
        </a>
      )}
    </span>
  )
}

function ProjectCard({ project, index }) {
  const { title, alt, client, kind, status, blurb, detail, stack, repo, live, featured, noRepo, planned } =
    project

  return (
    <Reveal
      delay={(index % 2) * 80}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-paper-2/40 p-7 transition-colors duration-300 hover:border-ink/40 sm:p-9 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl leading-tight tracking-tight sm:text-3xl">
            {title}
            {alt && <span className="text-ink-faint"> / {alt}</span>}
          </h3>
          {client && <p className="mt-1.5 font-mono text-[11px] text-ink-faint">for {client}</p>}
        </div>
        <span className="shrink-0 font-mono text-[11px] uppercase tracking-widest text-ink-faint">
          {kind}
        </span>
      </div>

      <p
        className={`mt-5 leading-relaxed text-ink ${featured ? 'max-w-2xl text-lg' : 'text-base'}`}
      >
        {blurb}
      </p>

      {detail && (
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink-soft">{detail}</p>
      )}

      <ul className="mt-7 flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center justify-between gap-3 border-t border-line pt-6">
        <span className="font-mono text-[11px] uppercase tracking-widest text-ink-soft">
          {status}
        </span>
        <RepoSlot repo={repo} live={live} noRepo={noRepo} planned={planned} />
      </div>
    </Reveal>
  )
}

export default function Projects() {
  return (
    <Section
      id={meta.id}
      num={meta.num}
      label={meta.label}
      title="Things I've built."
      lead="Mostly tools that started as something annoying me, plus a few built for other people. Where there's code, the repo is linked; where there isn't yet, it says so rather than hiding behind a dead link."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </Section>
  )
}
