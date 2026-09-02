/**
 * Three honest states instead of one. A project with no public repo says which
 * kind of "no" it is — code that isn't public yet, something not built, or work
 * that was never a codebase — rather than promising a link that doesn't exist.
 */
export function repoState({ repo, planned, noRepo }) {
  if (repo) return { kind: 'link', label: 'View repo ↗', href: repo }
  if (planned) return { kind: 'none', label: 'Not built yet' }
  if (noRepo) return { kind: 'none', label: 'Business & product work' }
  return { kind: 'none', label: 'Repo coming soon' }
}

export default function RepoBadge({ project, tone = 'light' }) {
  const state = repoState(project)
  const muted = tone === 'dark' ? 'text-paper/55 border-paper/30' : 'text-ink-faint border-ink/25'

  if (state.kind === 'link') {
    return (
      <a
        href={state.href}
        target="_blank"
        rel="noreferrer"
        onClick={(e) => e.stopPropagation()}
        className={`inline-flex items-center rounded-full border border-accent px-[13px] py-[6px] text-[12.5px] font-medium text-accent transition-colors hover:bg-accent ${
          tone === 'dark' ? 'hover:text-ink' : 'hover:text-paper'
        }`}
      >
        {state.label}
      </a>
    )
  }

  return (
    <span
      className={`inline-flex items-center rounded-full border border-dashed px-[13px] py-[6px] text-[12.5px] ${muted}`}
    >
      {state.label}
    </span>
  )
}
