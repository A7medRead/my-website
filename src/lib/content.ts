export const identity = {
  name: "Ahmed Reda Sayed Massoud",
  shortName: "Ahmed Massoud",
  mark: "ARM",
  title: "Email Operations Manager & AI Automation Builder",
  location: "UAE",
  email: "ahmedredamassoud@gmail.com",
  linkedin: "https://www.linkedin.com/in/ahmed-reda-476b0514b/",
  siteUrl: "https://ahmedmassoud.co",
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
  { href: "/#contact", label: "Contact" },
] as const;

export const sectionIndex = [
  { id: "about", number: "01", label: "About" },
  { id: "skills", number: "02", label: "Stack" },
  { id: "work", number: "03", label: "Work" },
  { id: "experience", number: "04", label: "Experience" },
  { id: "services", number: "05", label: "Services" },
  { id: "contact", number: "06", label: "Contact" },
] as const;

export const hero = {
  status: "STATUS: LIVE — Email Operations, UAE",
  log: [
    { time: "09:14:02", text: "30+ sending servers monitored" },
    { time: "09:14:07", text: "150+ campaigns tracked in real time" },
    { time: "09:14:11", text: "MailPilot AI shipped — ops, centralized" },
  ],
  name: identity.name,
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
] as const;

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
      caption: "Operations dashboard — live view",
      ratio: "16/10",
      src: "/screenshots/dashboard.png",
    },
    {
      caption: "Deliverability & infrastructure monitor",
      ratio: "16/10",
      src: "/screenshots/pmta-test-auto.png",
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
] as const;

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
] as const;

export const contact = {
  eyebrow: "Contact",
  heading: "Let's talk about your operation.",
  subhead:
    "Open to conversations with clients, recruiters, and collaborators — about roles, projects, or problems worth automating.",
  channels: [
    { label: "Email", value: identity.email, href: `mailto:${identity.email}` },
    { label: "LinkedIn", value: "/in/ahmed-reda", href: identity.linkedin },
  ],
};
