export const identity = {
  name: "Ahmed Reda Sayed Massoud",
  shortName: "Ahmed Massoud",
  mark: "ARM",
  title: "Email Operations Manager & AI Automation Builder",
  location: "UAE",
  email: "ahmedredamassoud@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-reda-476b0514b/",
  siteUrl: "https://www.ahmedmassoud.co",
  keywords: [
    "Ahmed Reda Sayed Massoud",
    "Ahmed Massoud",
    "Email Operations Manager",
    "AI Automation Builder",
    "Email Marketing Operations",
    "Email Deliverability Specialist",
    "AI Automation Consultant",
    "Business Operations Manager",
    "Internal Tools Developer",
    "MailPilot AI",
  ],
};

export const nav = [
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Stack" },
  { href: "/#work", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#services", label: "Services" },
  { href: "/log", label: "Log" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resume", label: "Resume" },
  { href: "/#contact", label: "Contact" },
];

export const sectionIndex = [
  { id: "about", number: "01", label: "About" },
  { id: "skills", number: "02", label: "Stack" },
  { id: "work", number: "03", label: "Work" },
  { id: "experience", number: "04", label: "Experience" },
  { id: "services", number: "05", label: "Services" },
  { id: "testimonials", number: "06", label: "Testimonials" },
  { id: "contact", number: "07", label: "Contact" },
];

export const now = {
  eyebrow: "Now",
  text: "Running high-volume email operations day to day, and shipping new pieces of MailPilot AI as bottlenecks show up in the operation.",
  updated: "Updated Aug 2026",
};

export const hero = {
  status: "STATUS: LIVE — Email Operations, UAE",
  log: [
    { time: "09:14:02", text: "30+ sending servers monitored" },
    { time: "09:14:07", text: "150+ campaigns tracked in real time" },
    { time: "09:14:11", text: "MailPilot AI shipped — ops, centralized" },
  ],
  name: identity.name,
  nameLines: ["Ahmed", "Massoud"],
  title: identity.title,
  subhead:
    "I run high-volume email operations, and I build the AI-powered systems that keep them fast, visible, and under control.",
  ctaPrimary: { label: "Get in touch", href: "#contact" },
  ctaSecondary: { label: "See the work", href: "#work" },
};

export const about = {
  eyebrow: "About",
  heading: "I don't just run the operation. I build what runs it.",
  paragraphs: [
    "I work at the intersection of email operations, business management, and AI automation.",
    "I manage high-volume email marketing operations in the UAE — campaign performance, sending infrastructure, deliverability, and a team that keeps it all running.",
    "Where most people would stop at managing the operation, I build for it. When I hit a bottleneck — a blind spot in reporting, a manual process eating hours, infrastructure I couldn't see clearly — I built the tool that fixed it. MailPilot AI, the platform I built to run our entire operation, started that way.",
  ],
  pullQuote:
    "I'm not a software developer who does operations on the side. I'm an operator who builds — someone who understands what's actually breaking in a business, and has the technical range to go fix it with real software, automation, and AI.",
};

export const skillGroups = [
  {
    label: "Operations",
    items: [
      "Branch & team management",
      "Email operations management",
      "Workflow optimization",
      "Team performance monitoring",
      "Operational reporting",
      "Process design",
      "Problem solving",
    ],
  },
  {
    label: "Email Marketing",
    items: [
      "High-volume email operations",
      "Campaign management",
      "Email deliverability",
      "Sending infrastructure management",
      "Domains & IP management",
      "Inbox / spam monitoring",
      "Email warm-up",
      "PMTA operations",
      "Seed testing",
      "Performance analytics",
    ],
  },
  {
    label: "AI & Automation",
    items: [
      "AI workflow automation",
      "AI assistants",
      "Internal business tools",
      "Operations automation",
      "Automated reporting",
      "Monitoring and alert systems",
      "AI-assisted decision making",
      "Building practical AI applications",
    ],
  },
  {
    label: "Product & Technical",
    items: [
      "Internal platform development",
      "Dashboard design",
      "Business intelligence dashboards",
      "API integrations",
      "Database-driven applications",
      "Automation systems",
      "Monitoring systems",
    ],
  },
];

export const flagship = {
  tag: "Flagship",
  name: "MailPilot AI",
  subtitle: "Operations Intelligence Platform",
  role: "Creator · Product Builder · Operations Manager",
  description:
    "The platform I built to run our entire email operation from one place — campaigns, infrastructure, deliverability, team performance, and AI-assisted decision-making, unified into a single system instead of scattered across a dozen tools.",
  metrics: [
    { value: "30+", label: "sending servers" },
    { value: "150+", label: "campaigns tracked" },
    { value: "Millions", label: "of emails processed" },
    { value: "Full team", label: "managed through the platform" },
  ],
  figures: [
    {
      caption: "Operations dashboard — command overview",
      ratio: "1686 / 940",
      src: "/screenshots/dashboard-clean.png",
    },
    {
      caption: "Deliverability testing — automated run history",
      ratio: "1688 / 898",
      src: "/screenshots/pmta-test-auto-clean.png",
    },
  ],
  clusters: [
    {
      label: "Monitoring & Reporting",
      items: [
        "Real-time operations dashboard",
        "Campaign monitoring and analytics",
        "Team performance reporting",
        "Revenue and campaign reporting",
        "Daily reports",
      ],
    },
    {
      label: "Infrastructure & Deliverability",
      items: [
        "Sending server management",
        "Domain and IP monitoring",
        "DNS, SMTP, WHOIS & blacklist diagnostics",
        "Inbox / spam placement testing",
        "PMTA testing",
      ],
    },
    {
      label: "Automation & AI",
      items: [
        "Automated alerts",
        "Email warm-up automation",
        "Deliverability monitoring",
        "AI assistant for operational workflows",
      ],
    },
  ],
  impact:
    "MailPilot AI replaced a fragmented set of manual workflows with one system — faster problem detection, full visibility, and automation across the operation.",
};

export const secondaryProjects = [
  {
    index: "02",
    name: "Automated Deliverability Testing System",
    description:
      "Scheduled tests run automatically across sending infrastructure and seed mailboxes, checking whether messages land in the inbox, spam, or somewhere ambiguous — catching deliverability problems before they hit a live campaign.",
    spec: "Automated scheduling · server-by-server results · historical runs · Telegram alerts · failure & pending-state tracking",
  },
  {
    index: "03",
    name: "Email Warm-up Automation",
    description:
      "Runs and monitors warm-up activity across every sending server automatically — tracking status, completion, and failures so warm-up stops being a manual, easy-to-forget process.",
    spec: "Server-by-server status · completion tracking · failure detection · automated notifications",
  },
  {
    index: "04",
    name: "Daily Operations Reporting System",
    description:
      "One daily snapshot of the entire operation — agent performance, volume, deliverability, revenue, infrastructure issues, and test results — replacing the manual work of pulling the same data from five different systems.",
    spec: "Agent performance · volume & deliverability · revenue · infrastructure issues · automated test results",
  },
];

export const experience = {
  eyebrow: "Experience",
  range: "NOV 2025 — PRESENT",
  role: "Branch Manager / Email Operations Manager",
  company: "Email Marketing Operations Company — UAE",
  responsibilities: [
    "Manage day-to-day branch and email marketing operations",
    "Coordinate and monitor team performance",
    "Manage high-volume email campaigns",
    "Monitor email infrastructure and deliverability",
    "Identify operational problems and bottlenecks",
    "Build internal tools and AI automation to improve workflows",
    "Create reporting and monitoring systems",
    "Improve processes through automation",
  ],
};

export const services = [
  {
    index: "S1",
    title: "AI Automation for Business Operations",
    description:
      "Practical AI-powered workflows and internal systems that cut repetitive work and give you visibility into what's actually happening in the business.",
  },
  {
    index: "S2",
    title: "Email Marketing Operations",
    description:
      "Structuring and optimizing high-volume email operations — infrastructure, deliverability, campaign workflows — so they scale without breaking.",
  },
  {
    index: "S3",
    title: "Internal Tools & Operations Dashboards",
    description:
      "Custom dashboards and internal tools built around how your operation actually runs, not a generic template.",
  },
  {
    index: "S4",
    title: "Workflow & Process Automation",
    description:
      "Turning manual, repetitive business processes into monitored, automated systems that run themselves.",
  },
];

export const contact = {
  eyebrow: "Contact",
  heading: "Let's talk about your operation.",
  subhead:
    "Open to conversations with clients, recruiters, and collaborators — about roles, projects, or problems worth automating.",
  channels: [
    { kind: "email", label: "Email", value: identity.email, href: `mailto:${identity.email}` },
    { kind: "linkedin", label: "LinkedIn", value: "View LinkedIn profile", href: identity.linkedin },
    { kind: "resume", label: "Resume", value: "View / print", href: "/resume" },
  ],
};

export const beforeAfter = {
  label: "Daily operations report",
  heading: "One report, before and after.",
  intro:
    "The daily snapshot of the operation used to be assembled by hand. Now the same five sources feed it automatically.",
  sources: [
    "Agent performance",
    "Volume & deliverability",
    "Revenue",
    "Infrastructure issues",
    "Test results",
  ],
  before: {
    tag: "Before",
    title: "Pulled by hand",
    text: "Five systems opened one by one, numbers copied into a spreadsheet, checked, then sent — every day.",
    hub: "Copy · paste · check",
    output: "Manual spreadsheet",
    meta: "5 systems · manual · daily",
  },
  after: {
    tag: "After",
    title: "Generated by MailPilot AI",
    text: "MailPilot AI pulls from the same five sources on schedule and hands the team one snapshot.",
    hub: "MailPilot AI",
    output: "Daily snapshot",
    meta: "5 sources · automated · daily",
  },
};

export const ui = {
  header: {
    homeLabel: "Ahmed Massoud — home",
    tagline: "Email Operations",
    taglineSub: "Automation × Impact",
    status: "Systems operational",
    statusSub: "All channels nominal",
    location: "Dubai, UAE",
    locationSub: "Operations / live",
    menu: "Menu",
    close: "Close",
    search: "Search",
    languageSwitch: { label: "عربي", href: "/ar", lang: "ar", aria: "اقرأ الصفحة بالعربية" },
  },
  hero: {
    eyebrow: "Operations × Automation × Impact",
    location: "Dubai, UAE",
    locationTag: "Systems in motion",
    diagramTitle: "The operation, in orbit",
    diagramSub: "MailPilot AI / Network view 01",
    live: "Live",
    diagramAria: "Animated orbital diagram showing global email operations connected to the UAE hub",
    nodes: "30+ nodes / global routes",
    stats: [
      { value: "30", suffix: "+", label: "Sending servers" },
      { value: "150", suffix: "+", label: "Campaigns tracked" },
      { value: "UAE", suffix: "", label: "Based in Dubai" },
    ],
    figcaption:
      "MailPilot AI coordinates more than 30 sending servers and tracks over 150 campaigns from the UAE.",
  },
  now: {
    label: "Currently building",
    items: [
      "Automating campaign workflows",
      "Expanding sending infrastructure",
      "Building what’s next",
    ],
    closing: ["Same mission.", "A more scalable", "tomorrow."],
  },
  sections: {
    about: "LOG 01 — About",
    skills: "LOG 02 — Stack",
    work: "LOG 03 — Selected Work",
    experience: "LOG 04 — Experience",
    services: "LOG 05 — Services",
    testimonials: "LOG 06 — Testimonials",
    contact: "LOG 07 — Contact",
  },
  skills: { heading: "What I actually run." },
  work: {
    heading: "Built to run the operation.",
    brief: "MailPilot AI / System brief 01",
    operational: "Operational",
    steps: [
      {
        label: "01 / The challenge",
        text: "Campaigns, infrastructure, deliverability, and team reporting spread across separate workflows.",
      },
      {
        label: "02 / The system",
        text: "MailPilot brings sending control, server monitoring, seed tests, team reports, and AI assistance together.",
      },
      {
        label: "03 / The outcome",
        text: "One operational view for the people managing campaigns, infrastructure, and the team.",
      },
    ],
    galleryCta: "Explore project gallery",
    discussCta: "Discuss a similar system",
    projectPrefix: "LOG",
  },
  experience: {
    headline: "Operator first.",
    headlineAccent: "Builder by practice.",
    intro:
      "One role, four parts of the work: run the operation, spot friction, build the fix, and help the team scale it.",
    phases: [
      { title: "Operate", text: "Manage branch operations and high-volume campaign activity." },
      { title: "Monitor", text: "Follow team performance, infrastructure, and deliverability." },
      { title: "Improve", text: "Find process gaps and remove recurring operational bottlenecks." },
      { title: "Build", text: "Create internal tools, reporting, and AI automation for the team." },
    ],
  },
  services: { heading: "Ways to work together." },
  testimonials: {
    heading: "What it’s like to work together.",
    empty: "Testimonials are added through the CMS as they come in — nothing here yet.",
  },
  contact: {
    prompt: "Have a system to improve?",
    terminal: "Message terminal",
    formTag: "Form 01",
    copy: "Copy",
    copied: "Copied",
  },
  form: {
    name: "Name",
    email: "Email",
    message: "Message",
    send: "Send message",
    sending: "Sending…",
    sent: "Message sent — thanks. I’ll get back to you soon.",
    mailtoNote: "Submitting opens your email app with the message ready to send.",
    error: "Something went wrong — email me directly at",
    subject: "Portfolio contact",
  },
  footer: { backToTop: "Back to top" },
  screenshot: {
    enlarge: "Enlarge screenshot",
    openFull: "Open full-size screenshot",
    badge: "Open screenshot",
    close: "Close screenshot",
  },
  chat: {
    dialogLabel: "Chat with an assistant about Ahmed’s work",
    title: "Ask about Ahmed",
    close: "Close chat",
    open: "Open chat about Ahmed’s work",
    empty: "Ask me anything about Ahmed’s background, skills, or projects.",
    typing: "Typing…",
    inputLabel: "Your question",
    placeholder: "Type a question…",
    send: "Send",
    toggleOpen: "Ask a question",
    toggleClose: "Close",
    genericError: "Something went wrong.",
    offline: "You seem to be offline — try again in a moment.",
  },
  palette: {
    trigger: "Search the site",
    dialogLabel: "Command menu",
    placeholder: "Jump to a section, page, or post…",
    empty: "No matches. Try “work”, “log”, or “email”.",
    hint: "↑↓ to move · Enter to open · Esc to close",
    groups: { sections: "Sections", pages: "Pages", posts: "Log posts", actions: "Actions" },
    pages: [
      { label: "Home", href: "/" },
      { label: "Log", href: "/log" },
      { label: "Gallery", href: "/gallery" },
      { label: "Resume", href: "/resume" },
    ],
    actions: {
      copyEmail: "Copy email address",
      copied: "Email copied",
      linkedin: "Open LinkedIn profile",
      chat: "Ask the assistant a question",
      language: "اقرأ الموقع بالعربية",
    },
  },
};
