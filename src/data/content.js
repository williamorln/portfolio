/* ---------------------------------------------------------------------------
   All site copy lives here. Edit this file, not the components.

   Two things are deliberately left blank for you to fill in:
     1. `links.github` / `links.kaggle`  — put your real usernames in.
     2. `result: null` on the ML cards   — these render a visible "to be added"
        chip on the site. Nothing was invented; drop in your real numbers.
   --------------------------------------------------------------------------- */

export const profile = {
  name: 'William Orlando',
  shortName: 'William',
  role: 'Information Systems · Fasilkom UI',
  location: 'Jakarta, Indonesia',
  available: 'Open to internships & collaboration',

  // Hero statement — the first thing anyone reads.
  headline: 'I build small, practical tools for problems I actually run into.',
  intro:
    'Information Systems student at Universitas Indonesia (Fasilkom UI), currently deep in data science and working toward becoming an AI Engineer.',
}

export const links = {
  email: 'adakanduo4@gmail.com',

  github: { label: 'GitHub', username: 'williamorln', base: 'https://github.com/' },

  // TODO(William): your Kaggle handle. The site hides any link whose username
  // is still a placeholder, so this stays invisible until you fill it in.
  kaggle: { label: 'Kaggle', username: 'your-kaggle-username', base: 'https://www.kaggle.com/' },
}

export const about = {
  paragraphs: [
    "Most of what I build starts as a personal annoyance. A course platform that never tells you when an assignment drops. A process someone is still tracking by hand across three spreadsheets. I'd rather spend a weekend automating something than keep working around it — that instinct is where nearly every project on this page came from.",
    "Right now my focus is data science: working through the fundamentals properly, then pushing toward the AI engineering side of things. I care more about shipping something that actually gets used than about having a tidy list of finished tutorials.",
    "Away from the code, I've spent a lot of time in organizational and people-facing roles — mentoring programs, campus events, freelance work at concerts and festivals. It sounds unrelated, but running a selection process or handling a crowd at a live event teaches the same habits good engineering does: communicate clearly, plan for what breaks, and stay useful when things move fast.",
  ],
}

export const education = {
  school: 'Universitas Indonesia — Faculty of Computer Science (Fasilkom)',
  degree: 'Undergraduate, Information Systems',
  period: 'Aug 2025 — Present',
}

/* ---------------------------------------------------------------------------
   TECHNICAL PROJECTS
   `repo: null` renders a "Repo coming soon" badge instead of a dead link.
   When a repo goes public, just swap null for the URL string.

   TODO(William): the `stack` tags below describe what each project *does* —
   they're taken straight from your own descriptions. Add the concrete
   language/framework tags (e.g. 'Python', 'python-telegram-bot', 'Node.js')
   once you want them public; I didn't want to guess and get it wrong.
   --------------------------------------------------------------------------- */
export const projects = [
  {
    title: 'SCELE Notifier',
    alt: 'SCELE Scraper',
    kind: 'Personal',
    status: 'Active',
    featured: true,
    blurb:
      "Fasilkom UI's course platform doesn't tell you when a new assignment or forum post appears — you just have to keep checking. So I built a Telegram bot that checks for me.",
    detail:
      "It logs into SCELE through session scraping and watches both the Timeline (assignment due dates) and forum activity, pushing notifications the moment something changes. The interesting part was that SCELE's RSS feeds are disabled, so there was no clean way in. I ended up working out how the Timeline actually loads its data — an internal AJAX endpoint — and built the scraper around that instead.",
    stack: ['Python', 'Telegram Bot', 'Session Scraping', 'GitHub Actions', 'Reverse Engineering'],
    repo: 'https://github.com/williamorln/Scele-Notifier-Automation',
    live: null,
  },
  {
    title: 'Life OS',
    kind: 'Personal',
    status: 'Planned — not built yet',
    planned: true,
    blurb:
      'Where SCELE Notifier is heading next: one assistant bot for everything, not just assignment deadlines.',
    detail:
      'The plan is to widen it past academic notifications into reminders, goal tracking, and daily planning — a lightweight personal operating system that lives where I already am, in a chat window. Design stage, no code yet.',
    stack: ['Telegram Bot', 'Personal Automation', 'Product Design'],
    repo: null,
    live: null,
  },
  {
    title: 'PRABU Assistant',
    client: 'Prabu',
    kind: 'Client',
    status: 'Prototype',
    featured: true,
    blurb:
      'An AI customer service assistant for a footwear brand — and mostly an exercise in stopping a language model from being helpful in the ways that hurt.',
    detail:
      "A bot that invents a material or confidently recommends the wrong shoe size doesn't just look bad, it generates returns. So facts come from a curated knowledge base rather than model recall, and most factual questions are answered deterministically before the model is ever reached. The sizing logic is the part I'm happiest with: when a customer's foot length falls between two sizes, it names both with their measurements and says outright that there's no official rule to choose between them, instead of guessing to sound useful.",
    stack: ['Next.js', 'TypeScript', 'Groq', 'Tailwind CSS', 'Prompt Guardrails'],
    repo: 'https://github.com/williamorln/prabu-ai-assistant',
    live: null,
  },
  {
    title: 'PRABU Workflow',
    client: 'Prabu',
    kind: 'Client',
    status: 'Prototype',
    blurb:
      'A purchase order system that models the real eight-stage journey from intake to delivery note — and enforces the order.',
    detail:
      "Orders arrived by WhatsApp, email, form, or someone typing them in, and nobody had a single view of where any of them stood. The expensive problem was sequencing: work could start on an order that was never financially cleared. So the approval gates are structural — the work order stays locked until verification, agreement, and clearance have all passed, rather than being a reminder someone can skip when they're in a hurry.",
    stack: ['Next.js', 'TypeScript', 'Workflow Design', 'Process Automation'],
    repo: 'https://github.com/williamorln/prabu-po-workflow',
    live: null,
  },
  {
    title: 'Clipping Automation',
    kind: 'Build',
    status: 'V8 foundation',
    featured: true,
    blurb:
      'A pipeline that turns long-form podcasts into vertical short-form clips — built around the idea that the editing decisions are the hard part, not the cutting.',
    detail:
      "The naive version detects loud moments, cuts, burns in captions, and produces something unwatchable. Clipping is an editorial problem: which 30 seconds of a 90-minute episode carry a story, where the hook lands, whether the payoff survives. So the architecture splits creative judgment from execution — a model writes an explicit, validated edit plan, and the render engine is barred from inventing any decision the plan left out. Verification runs against the actual encoded MP4 rather than the plan: it re-detects faces on real output frames to catch captions colliding with a speaker, and the publish gate refuses to pass until a human has genuinely reviewed the thing. 91 tests passing.",
    stack: ['Python', 'FFmpeg', 'Whisper', 'OpenCV YuNet', 'MCP'],
    repo: 'https://github.com/williamorln/clipping-automation',
    live: null,
  },
  {
    title: 'QRMenuKu',
    kind: 'Team',
    status: 'Business plan & product',
    blurb:
      'A digital ordering system for F&B small businesses, designed with a team — analytics dashboard and payment gateway included.',
    detail:
      'I worked on the business model and the operational workflow design: how a warung or small café would actually adopt this without disrupting the way they already take orders.',
    stack: ['Product Design', 'Business Modeling', 'Payments', 'Analytics Dashboard'],
    repo: null,
    live: null,
    noRepo: true, // business & product work, not a codebase — don't promise a repo
  },
]

/* ---------------------------------------------------------------------------
   DATA SCIENCE / ML
   `result: null` renders a visible "Result — to be added" chip.
   `todo: [...]` lists exactly what's missing, shown as small hint chips.
   Fill in `result` (and delete the matching todo entries) as you get numbers.
   --------------------------------------------------------------------------- */
export const mlWork = [
  {
    title: 'Titanic Survival Prediction',
    tag: 'Classification',
    problem:
      'Predict which passengers survived the Titanic disaster using demographic and ticket information.',
    approach:
      'Supervised binary classification over tabular data — passenger demographics (age, sex, class) alongside ticket and fare details.',
    dataset: 'Kaggle — Titanic: Machine Learning from Disaster',
    result: null,
    todo: ['Model used', 'Accuracy / leaderboard score'],
  },
  {
    title: 'House Pricing Prediction',
    tag: 'Regression',
    problem: 'Estimate housing sale prices from property characteristics.',
    approach:
      'Supervised regression across a wide feature set of property attributes, with the usual work of handling missing values and mixed categorical/numeric columns.',
    dataset: 'Kaggle — House Prices: Advanced Regression Techniques',
    result: null,
    todo: ['Model used', 'RMSE / R² score'],
  },
  {
    title: 'Digit Recognizer',
    tag: 'Computer Vision',
    problem: 'Recognise handwritten digits from images.',
    approach: 'Image classification over labelled grayscale digit images.',
    dataset: 'Kaggle — Digit Recognizer (MNIST)',
    result: null,
    todo: ['Model architecture', 'Test accuracy'],
  },
  {
    title: 'Customer Relevance Model',
    tag: 'Recommendation',
    problem:
      'Work out which products or offers are most relevant to a given customer — a first step toward proper recommendation systems.',
    approach:
      'Relevance scoring over customer attributes and product data, framed as a ranking problem rather than a straight classification one.',
    dataset: null,
    result: null,
    todo: ['Dataset source', 'Approach details', 'Evaluation metric'],
  },
]

/* ---------------------------------------------------------------------------
   EXPERIENCE — rendered as a timeline, newest first.
   --------------------------------------------------------------------------- */
export const experience = [
  {
    role: 'VPIC, Mentor Division',
    org: 'DDP0',
    kind: 'Organization',
    period: 'Apr 2026 — Present',
    current: true,
    points: [
      'Built the SOPs and mentoring frameworks the division runs on, so guidance stays consistent across every mentor rather than varying person to person.',
    ],
  },
  {
    role: 'Staff, Academy Division (DSAI)',
    org: 'COMPFEST',
    kind: 'Organization',
    period: 'Apr 2026 — Present',
    current: true,
    points: [
      'Handle relations with industry mentors and lecturers.',
      'Designed the participant selection framework.',
      'Run real-time event operations, keeping technical and logistical sessions on track while they happen.',
    ],
  },
  {
    role: 'Academic & Teaching Staff',
    org: 'BETIS Fasilkom UI',
    kind: 'Teaching',
    period: 'Jan 2026 — Completed',
    points: [
      'Turned dense course material into structured teaching modules and taught the sessions — the goal was always getting students past the parts that usually make them give up.',
    ],
  },
  {
    role: 'Business Development Staff',
    org: 'Open House Fasilkom UI',
    kind: 'Organization',
    period: 'Sep — Dec 2025',
    points: [
      'Coordinated external vendors and sat between the committee and partners to keep event logistics moving.',
    ],
  },
  {
    role: 'Founder & Operator',
    org: 'Self-started floral business',
    kind: 'Business',
    period: 'Sep 2023 — Present',
    current: true,
    points: [
      'Run the whole thing myself: product assembly, order fulfilment, social media marketing, and talking to customers directly from first message to delivery.',
    ],
  },
]

/* ---------------------------------------------------------------------------
   FREELANCE & EVENTS
   Byon Combat Showbiz 8 recorded as Marketing Team per your confirmation.
   --------------------------------------------------------------------------- */
export const freelance = {
  note: 'The common thread across all of these is the same: direct, real-time interaction with a lot of people in fast-moving, high-pressure environments — promoting brands, managing crowds, and keeping things running when the clock is against you.',
  items: [
    { role: 'SPB (Sales Promotion Boy)', org: 'Kahf — Paragon Corp', context: 'PRJ 2026' },
    { role: 'Usher', org: 'Mitski Live in Jakarta', context: 'Concert' },
    { role: 'Usher', org: 'Bernadya Concert', context: 'Concert' },
    {
      role: 'Usher / SPB / Talent',
      org: 'JSD Blok M Festival',
      context: 'Prabu Indonesia',
    },
    { role: 'Marketing Team', org: 'Byon Combat Showbiz 8', context: 'Event' },
  ],
}

export const volunteer = [
  {
    org: 'Panti Werdha Muslim Rumah Oma',
    role: 'Field Crew',
    detail:
      'Prepared equipment and logistics on the day, and spent the rest of it talking with the elderly residents — mostly keeping them laughing, which turned out to be the actual job.',
  },
  {
    org: 'Panti Asuhan Hati Suci',
    role: 'Performer',
    detail: 'Open Donation event.',
  },
  { org: 'Smandu Idol Season 5', role: 'Performer', detail: null },
  { org: 'Asadha Event, Vihara Gunadharma', role: 'Performer', detail: null },
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

/* `nav: true` puts a section in the condensed desktop header.
   Every section still appears in the mobile menu and keeps its number. */
export const sections = [
  { id: 'about', label: 'About', num: '01', nav: true },
  { id: 'projects', label: 'Projects', num: '02', nav: true },
  { id: 'ml', label: 'Data Science', num: '03', nav: true },
  { id: 'experience', label: 'Experience', num: '04', nav: true },
  { id: 'freelance', label: 'Freelance & Events', num: '05', nav: false },
  { id: 'volunteer', label: 'Volunteer', num: '06', nav: false },
  { id: 'skills', label: 'Skills', num: '07', nav: true },
  { id: 'contact', label: 'Contact', num: '08', nav: false },
]
