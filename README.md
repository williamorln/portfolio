# William Orlando — Portfolio

Personal portfolio site. React + Vite + Tailwind CSS v4, static build, deploys to Vercel with no
configuration beyond what's already in the repo.

---

## Run it locally

Requires Node 18 or newer (built on Node 24).

```bash
npm install     # first time only
npm run dev     # http://localhost:5173
```

Other commands:

```bash
npm run build     # production build into dist/
npm run preview   # serve the built site locally to check it before deploying
```

---

## Editing the content

**Everything you'd want to change lives in one file: [`src/data/content.js`](src/data/content.js).**
The components read from it — you shouldn't need to touch JSX to update copy, add a project, or fix
a date.

### Before you go live — two things left to fill in

**1. Your Kaggle username**

```js
export const links = {
  email: 'adakanduo4@gmail.com',
  github: { label: 'GitHub', username: 'williamorln', base: 'https://github.com/' },
  kaggle: { label: 'Kaggle', username: 'your-kaggle-username', base: 'https://www.kaggle.com/' },
}
```

GitHub is set. Until you replace `your-kaggle-username`, **that button stays hidden on the live
site** — the placeholder is detected on purpose so the site never ships a link that 404s on a
recruiter. Running `npm run dev` shows a red reminder in the contact section; it never appears in
the production build.

**2. ML results and metrics**

The data science cards render `Result — to be added` chips wherever a number is missing. Nothing was
invented — no accuracy or RMSE figures are on the site that you didn't provide. Fill them in like
this:

```js
result: null,                                       // → shows the "to be added" chip
result: '0.79 accuracy on the public leaderboard.', // → shows the real result
todo: ['Model used', 'Accuracy / leaderboard score'],  // delete entries as you document them
```

### Repo links on projects

Four projects link to real repos. The other two deliberately don't:

```js
repo: 'https://github.com/williamorln/clipping-automation',  // → "View repo ↗"
repo: null,                  // → "Repo coming soon"       (code exists, repo not public yet)
repo: null, planned: true,   // → "Not built yet"          (Life OS — design stage, no code)
repo: null, noRepo: true,    // → "Business & product work" (QRMenuKu — never a codebase)
```

Three states instead of one, because promising a repo for something that has no code would be a lie
a recruiter can check in one click. There's also an optional `live:` field for a deployed demo URL.

---

## Deploying to Vercel

### Option A — Git-connected (recommended)

Push the project to GitHub, then:

1. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
2. Vercel auto-detects Vite. The settings should read:
   - **Framework Preset:** Vite
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
3. Click **Deploy**.

`vercel.json` already pins those values, so you shouldn't need to change anything by hand. After the
first deploy, every push to your default branch redeploys automatically, and pull requests get their
own preview URLs.

If you haven't pushed it to GitHub yet:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

### Option B — Vercel CLI

```bash
npm i -g vercel
vercel          # preview deployment, walks you through linking the project
vercel --prod   # production deployment
```

### Custom domain

Vercel gives you `<project>.vercel.app` for free. To use your own domain: Vercel dashboard →
your project → **Settings → Domains → Add**, then point the DNS records it shows you at Vercel.

---

## Project structure

```
├── index.html                 # document head, fonts, meta/social tags
├── vercel.json                # Vercel build settings
├── public/
│   ├── favicon.svg
│   └── william-orlando.jpg    # hero portrait
└── src/
    ├── main.jsx
    ├── App.jsx                # section order
    ├── index.css              # design tokens (colors, fonts) + keyframes
    ├── data/
    │   └── content.js         # ← ALL COPY LIVES HERE
    ├── lib/
    │   └── social.js          # hides profile links that are still placeholders
    ├── hooks/
    │   ├── useReveal.js       # scroll-into-view detection
    │   ├── useParallax.js     # hero portrait / wordmark drift
    │   └── useClock.js        # live Jakarta time
    └── components/
        ├── ScrollProgress.jsx # accent bar across the top
        ├── Nav.jsx            # fixed, mix-blend-difference
        ├── Hero.jsx           # portrait, wordmark, clock, tagline
        ├── Marquee.jsx        # scrolling skills strip
        ├── Work.jsx           # project list + sticky preview + detail drawer
        ├── DataScience.jsx    # incl. the "result to be added" chips
        ├── About.jsx
        ├── InTheField.jsx     # horizontal event strip
        ├── Experience.jsx     # two columns
        ├── Skills.jsx
        ├── Contact.jsx        # dark contact section + footer
        └── ui/
            ├── Reveal.jsx     # fade-and-rise wrapper
            └── RepoBadge.jsx  # the three honest repo states
```

## Design notes

The visual design was authored in Claude Design and ported here by hand. The export lives in
`DESIGN UNTUK PORTO/` (gitignored — it's the design source, not site code).

- **Colors and fonts** are Tailwind v4 theme tokens at the top of `src/index.css`, lifted from the
  design file exactly rather than rounded. Change `--color-accent` there and the accent updates
  everywhere (currently `#b5471f`).
- **Type:** Archivo for display, Instrument Sans for body.
- **The nav uses `mix-blend-mode: difference`**, so it inverts itself against whatever is behind it
  — white over the dark hero, dark over the paper sections. No scroll listener, no colour swapping.
- **The hero portrait was shot on white**, which would read as a pasted-on rectangle against the
  black hero. It's pushed to monochrome and dissolved into the background on every edge with two
  gradient overlays. If you swap in a photo shot on a dark background, drop the filter and the
  overlays in `Hero.jsx`.
- **Motion**: scroll reveals, two parallax layers in the hero, the marquee, and a progress bar.
  All of it stops under `prefers-reduced-motion`.
- **Responsive**: verified with no horizontal overflow and no console errors at 390px and 1440px.
  The hero repositions on mobile — the location pill and the tagline share a band at desktop widths
  and would otherwise collide.

### Photos still missing

- **A second portrait** for the About section. The design called for a candid/working shot; that
  slot currently holds the education card instead of an empty frame.
- **Event photography** for the "In the field" strip. Those cards are typographic for now — set
  `image` on any entry in `fieldwork` and the card switches to a photo.
