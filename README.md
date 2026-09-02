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
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx                # section order
    ├── index.css              # design tokens (colors, fonts) + reveal animation
    ├── data/
    │   └── content.js         # ← ALL COPY LIVES HERE
    ├── lib/
    │   └── social.js          # hides profile links that are still placeholders
    ├── hooks/
    │   └── useReveal.js       # scroll-into-view detection
    └── components/
        ├── Nav.jsx            # sticky header + mobile menu
        ├── Hero.jsx
        ├── About.jsx
        ├── Projects.jsx       # incl. the "Repo coming soon" badge logic
        ├── DataScience.jsx    # incl. the TODO placeholder chips
        ├── Experience.jsx     # timeline
        ├── Freelance.jsx
        ├── Volunteer.jsx
        ├── Skills.jsx
        ├── Contact.jsx        # dark contact section + footer
        └── ui/
            ├── Section.jsx    # shared section shell (number, label, heading)
            └── Reveal.jsx     # fade-and-rise wrapper
```

## Design notes

- **Colors and fonts** are defined once as Tailwind v4 theme tokens at the top of `src/index.css`.
  Change `--color-accent` there and the accent updates everywhere (currently a burnt rust,
  `#b4441f`).
- **Type:** Instrument Serif for display headings, Inter for body, JetBrains Mono for labels, tags,
  and metadata — the mono gives the technical sections their character without shouting.
- **Motion** is deliberately restrained: one fade-and-rise on scroll, fired once per element, plus
  hover states. It fully disables itself under `prefers-reduced-motion`.
- **Responsive** and mobile-first throughout; verified with no horizontal overflow at 390px and
  1440px.
