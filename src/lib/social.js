import { links } from '../data/content.js'

/**
 * A profile link is only rendered once its username has actually been filled
 * in. Placeholder handles (the `your-*` defaults) are treated as "not set yet"
 * so the site never ships a link that 404s on whoever clicks it.
 */
const isPlaceholder = (username) => !username || /^your-/.test(username)

export function getProfileLinks() {
  return [links.github, links.kaggle]
    .filter((entry) => !isPlaceholder(entry.username))
    .map((entry) => ({
      label: entry.label,
      href: `${entry.base}${entry.username}`,
      handle: `@${entry.username}`,
    }))
}

/** True while any handle is still a placeholder — drives the dev-only hint. */
export function hasPendingLinks() {
  return [links.github, links.kaggle].some((entry) => isPlaceholder(entry.username))
}

export const pendingLinkLabels = () =>
  [links.github, links.kaggle].filter((e) => isPlaceholder(e.username)).map((e) => e.label)
