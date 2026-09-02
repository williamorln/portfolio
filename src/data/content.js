/* ---------------------------------------------------------------------------
   All site copy lives here. Edit this file, not the components.

   Still to fill in:
     1. `links.kaggle.username` — the Kaggle button stays hidden until it's real.
     2. `result: null` on the ML cards — these render a visible "to be added"
        chip. Nothing was invented; drop in your real numbers.
   --------------------------------------------------------------------------- */

export const profile = {
  name: 'William Orlando',
  wordmark: 'Orlando',
  tagline: 'Data Science\n& AI Engineering',
  role: 'Information Systems · Fasilkom UI',
  location: 'Jakarta, Indonesia',
  available: 'Open for internships & freelance',
}

export const links = {
  email: 'adakanduo4@gmail.com',
  github: { label: 'GitHub', username: 'williamorln', base: 'https://github.com/' },

  // TODO(William): your Kaggle handle. Any link whose username still starts
  // with "your-" is hidden on the live site, so nothing 404s before you fill it.
  kaggle: { label: 'Kaggle', username: 'your-kaggle-username', base: 'https://www.kaggle.com/' },
}

/* Skills strip that scrolls under the hero. */
export const marquee = [
  'Python',
  'Java',
  'Data Analysis',
  'Bot Development',
  'Automation',
  'Machine Learning',
  'Workflow Design',
  'Stakeholder Management',
]

export const about = {
  heading: 'Information Systems student, heading toward AI engineering.',
  paragraphs: [
    "I study at Universitas Indonesia (Fasilkom UI) with a growing focus on data science. Most of my time outside coursework goes into building small, practical tools for problems I actually run into — a platform that won't notify you, a process someone still runs by hand.",
    'The other half of my experience is people-facing: mentoring programs, large-scale campus events, brand activations, and running my own floral business since 2023. That mix is why I tend to think about systems and the people using them at the same time.',
  ],
  // Counts are checked against what's actually on this page — see the repos.
  stats: [
    { value: '4', label: 'Public repos' },
    { value: '4', label: 'Org roles' },
    { value: '3y', label: 'Running a business' },
  ],
}

export const education = {
  school: 'Universitas Indonesia — Faculty of Computer Science (Fasilkom)',
  degree: 'Undergraduate, Information Systems',
  period: 'Aug 2025 — Present',
}

/* ---------------------------------------------------------------------------
   TECHNICAL PROJECTS
   `repo: null` + `planned` / `noRepo` drive three honest badge states:
     repo set    → "View repo ↗"
     planned     → "Not built yet"     (no code exists)
     noRepo      → "Business & product work" (never a codebase)
     otherwise   → "Repo coming soon"  (code exists, repo not public yet)
   `year: null` renders "—" rather than a guessed date.
   --------------------------------------------------------------------------- */
export const projects = [
  {
    n: '01',
    title: 'SCELE Notifier',
    kind: 'Telegram bot · session scraping',
    year: '2026',
    stack: ['Python', 'Telegram Bot API', 'Session Scraping', 'GitHub Actions'],
    blurb:
      "Fasilkom UI's course platform doesn't tell you when a new assignment or forum post appears — you just have to keep checking. So I built a Telegram bot that checks for me.",
    highlights: [
      "Built from scratch after finding the platform's RSS feeds disabled",
      "Reverse-engineered the internal AJAX endpoint SCELE's Timeline loads from",
      'Watches assignment due dates and forum activity in one pass',
      'Runs itself on a schedule through GitHub Actions',
    ],
    repo: 'https://github.com/williamorln/Scele-Notifier-Automation',
  },
  {
    n: '02',
    title: 'PRABU Assistant',
    kind: 'AI customer service · Prabu (footwear brand)',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'Groq', 'Tailwind CSS'],
    blurb:
      'An AI customer service assistant for a footwear brand — and mostly an exercise in stopping a language model from being helpful in the ways that hurt.',
    highlights: [
      'Facts come from a curated knowledge base, never from model recall',
      'Most factual questions are answered deterministically before the model is reached',
      'Sizing matches on foot length, not insole length — a quiet source of wrong sizes',
      'When a measurement falls between two sizes it names both and refuses to pick, rather than guessing and causing a return',
    ],
    repo: 'https://github.com/williamorln/prabu-ai-assistant',
  },
  {
    n: '03',
    title: 'PRABU Workflow',
    kind: 'Internal tool · Prabu (footwear brand)',
    year: '2026',
    stack: ['Next.js', 'TypeScript', 'Workflow Design'],
    blurb:
      'A purchase order system that models the real eight-stage journey from intake to delivery note — and enforces the order.',
    highlights: [
      'Maps the actual route an order takes: intake → verification → agreement → clearance → SPK → purchasing → production → QC',
      'Handles multi-channel intake: WhatsApp, email, form, or typed in by hand',
      'The work order stays locked until verification, agreement and clearance all pass',
      'Gates are structural, not a reminder someone can skip when they are in a hurry',
    ],
    repo: 'https://github.com/williamorln/prabu-po-workflow',
  },
  {
    n: '04',
    title: 'Clipping Automation',
    kind: 'Media pipeline · 91 tests passing',
    year: '2026',
    stack: ['Python', 'FFmpeg', 'Whisper', 'OpenCV YuNet', 'MCP'],
    blurb:
      'Long-form podcasts into vertical short-form clips — built around the idea that the editing decisions are the hard part, not the cutting.',
    highlights: [
      'A model writes an explicit, validated edit plan; the render engine is barred from inventing anything it left out',
      'Verification runs against the actual encoded MP4, not against the plan',
      'Re-detects faces on real output frames to catch captions colliding with a speaker',
      'The publish gate refuses to pass until a human has genuinely reviewed the result',
    ],
    repo: 'https://github.com/williamorln/clipping-automation',
  },
  {
    n: '05',
    title: 'Life OS',
    kind: 'Personal assistant bot · design stage',
    year: null,
    stack: ['Telegram Bot', 'Personal Automation'],
    blurb:
      'Where SCELE Notifier is heading next: one assistant bot for everything, not just assignment deadlines.',
    highlights: [
      'Widens the idea past academic notifications into reminders, goal tracking and daily planning',
      'Meant to live where I already am — a chat window, not another app',
      'Design stage. No code yet.',
    ],
    repo: null,
    planned: true,
  },
  {
    n: '06',
    title: 'QRMenuKu',
    kind: 'Business plan & product · team project',
    year: null,
    stack: ['Product Design', 'Business Modeling', 'Payments', 'Analytics'],
    blurb:
      'A digital ordering system for F&B small businesses, designed with a team — analytics dashboard and payment gateway included.',
    highlights: [
      'I worked on the business model and the operational workflow design',
      'The question was how a warung or small café adopts this without disrupting how they already take orders',
    ],
    repo: null,
    noRepo: true,
  },
]

/* ---------------------------------------------------------------------------
   DATA SCIENCE / ML
   `result: null` renders a visible "to be added" chip. Fill in `result` and
   trim the matching `todo` entries as you record real numbers.
   --------------------------------------------------------------------------- */
export const mlWork = [
  {
    title: 'Titanic Survival',
    tag: 'Classification',
    summary: 'Classification on demographic and ticket data.',
    problem:
      'Predict which passengers survived the Titanic disaster from demographic and ticket information.',
    dataset: 'Kaggle — Titanic',
    result: null,
    todo: ['Model used', 'Accuracy'],
  },
  {
    title: 'House Pricing',
    tag: 'Regression',
    summary: 'Regression on property features.',
    problem: 'Estimate housing sale prices from property characteristics.',
    dataset: 'Kaggle — House Prices',
    result: null,
    todo: ['Model used', 'RMSE'],
  },
  {
    title: 'Digit Recognizer',
    tag: 'Computer Vision',
    summary: 'Image classification on handwritten digits.',
    problem: 'Recognise handwritten digits from labelled grayscale images.',
    dataset: 'Kaggle — MNIST',
    result: null,
    todo: ['Architecture', 'Test accuracy'],
  },
  {
    title: 'Customer Relevance',
    tag: 'Recommendation',
    summary: 'Ranking the most relevant offer per customer.',
    problem:
      'Work out which products or offers are most relevant to a given customer — a first step toward recommendation systems.',
    dataset: null,
    result: null,
    todo: ['Dataset source', 'Evaluation metric'],
  },
]

/* ---------------------------------------------------------------------------
   EXPERIENCE — two columns, as in the design.
   --------------------------------------------------------------------------- */
export const organizational = [
  {
    role: 'VPIC, Mentor Division — DDP0',
    period: '2026 — Now',
    detail:
      'Built the SOPs and mentoring frameworks the division runs on, so guidance stays consistent across every mentor.',
  },
  {
    role: 'Academy Division (DSAI) — COMPFEST',
    period: '2026 — Now',
    detail:
      'Industry mentor and lecturer relations, the participant selection framework, and live event operations.',
  },
  {
    role: 'Academic & Teaching Staff — BETIS Fasilkom UI',
    period: '2026',
    detail:
      'Turned dense course material into structured modules and taught the sessions.',
  },
  {
    role: 'Business Development — Open House Fasilkom UI',
    period: 'Sep — Dec 2025',
    detail: 'Vendor coordination and partner liaison across event logistics.',
  },
]

export const business = {
  floral: {
    role: 'Self-started floral business',
    period: '2023 — Now',
    detail:
      'End to end: product assembly, order fulfilment, social media marketing, and talking to customers directly from first message to delivery.',
  },
  eventNote:
    'Real-time interaction with large crowds in fast-moving, high-pressure environments.',
  events: [
    'SPB — Kahf, Paragon (PRJ 2026)',
    'Usher — Mitski Live in Jakarta',
    'Usher — Bernadya Concert',
    'JSD Blok M Festival — Prabu Indonesia',
    'Marketing Team — Byon Combat Showbiz 8',
  ],
  volunteer: [
    'Panti Werdha Rumah Oma — Field crew',
    'Panti Asuhan Hati Suci — Performer',
    'Smandu Idol Season 5 — Performer',
    'Asadha, Vihara Gunadharma — Performer',
  ],
}

/* "In the field" strip. Cards without an `image` render typographically
   rather than as an empty frame — set `image` once a photo exists. `year:
   null` renders "—" rather than a guessed date. */
export const fieldwork = [
  { title: 'Kahf · Paragon', role: 'Sales Promotion Boy', year: 'PRJ 2026', image: '/fieldwork-kahf.jpg' },
  { title: 'Mitski Live Jakarta', role: 'Usher', year: '2026', image: '/fieldwork-mitski.jpg' },
  { title: 'Bernadya Concert', role: 'Usher', year: '2025', image: '/fieldwork-bernadya.jpg' },
  { title: 'JSD Blok M Festival', role: 'Prabu — brand booth', year: '2025', image: '/fieldwork-jsd.jpg' },
  { title: 'Byon Combat Showbiz 8', role: 'Marketing team', year: '2025', image: '/fieldwork-byon.jpg' },
  {
    title: 'Pagelaran Sabang Merauke',
    role: 'Prabu — brand exhibition',
    year: null,
    image: '/fieldwork-sabang-merauke.jpg',
  },
  { title: 'COMPFEST', role: 'Academy Division (DSAI)', year: '2026', image: null },
  { title: 'Open House Fasilkom UI', role: 'Business Development', year: '2025', image: null },
]

export const skills = [
  {
    group: 'Technical',
    items: [
      'Java',
      'Python',
      'Pandas',
      'Excel / Spreadsheets',
      'Data analysis',
      'Bot development',
      'Automation',
      'Workflow & system design',
    ],
  },
  {
    group: 'Soft skills',
    items: [
      'Communication',
      'Adaptability',
      'Leadership',
      'Stakeholder management',
      'SOP development',
      'Event coordination',
    ],
  },
  {
    group: 'Languages',
    items: ['Indonesian — Native', 'English — Professional working proficiency'],
  },
]

export const navLinks = [
  { id: 'work', label: 'Work' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
]
