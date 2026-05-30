export type LinkItem = {
  label: string;
  href: string;
  detail?: string;
  needsConfig?: boolean;
};

export type Project = {
  slug: string;
  title: string;
  eyebrow: string;
  type: "Business" | "Recruiter" | "Experience" | "System" | "Mobile";
  status: "Live-ready" | "CMS-ready" | "Concept-ready";
  summary: string;
  challenge: string;
  response: string;
  outcome: string;
  stack: string[];
  services: string[];
  year: string;
  image: string;
  href?: string;
  artifact?: string;
};

export const profile = {
  name: "Samuel Pinto",
  brand: "SP Digital",
  location: "Portugal",
  role:
    "Founder of SP Digital, web developer, UX/UI designer, and digital solutions creator.",
  languages: ["Portuguese", "English", "Spanish"],
  positioning:
    "Premium websites, interfaces, and web applications for brands that need trust, clarity, and reliable execution.",
  availability:
    "Available for freelance projects, business websites, agency collaboration, and recruiter conversations.",
  portrait: "/assets/samuel-pinto-portrait-editorial.webp",
  editorialImage: "/assets/sp-digital-editorial-hero.webp",
  ogImage: "/assets/samuel-pinto-og-editorial.jpg"
};

export const navigation = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Trust", href: "#trust" },
  { label: "Recruiters", href: "#recruiters" },
  { label: "Contact", href: "#contact" }
];

export const metrics = [
  {
    value: "95+",
    label: "Lighthouse targets",
    detail: "Performance, accessibility, best practices, and SEO are treated as product requirements."
  },
  {
    value: "3",
    label: "Working languages",
    detail: "Portuguese, English, and Spanish for clearer client and team communication."
  },
  {
    value: "5s",
    label: "Trust window",
    detail: "The first viewport is designed to make competence and reliability obvious immediately."
  }
];

export const storyChapters = [
  {
    title: "A builder with a design conscience",
    text:
      "Samuel approaches websites as business assets, not decoration. The work starts with clarity: what the visitor needs to believe, what the company needs to communicate, and what the interface must make easier."
  },
  {
    title: "Growth without pretending",
    text:
      "The brand is transparent about continuous learning while presenting the standard of a serious professional: structured thinking, strong communication, modern engineering habits, and careful design judgment."
  },
  {
    title: "SP Digital as a long-term platform",
    text:
      "This portfolio is built as the first expression of a wider digital brand: services, case studies, articles, templates, products, and multilingual content can grow from the same foundation."
  }
];

export const trustSignals = [
  "Master D Portugal",
  "Professional certifications",
  "Multilingual communication",
  "Freelance experience",
  "International availability",
  "Business mindset",
  "Continuous learning",
  "Professional commitment",
  "Fast communication",
  "Modern development practices"
];

export const services = [
  {
    title: "Premium Websites",
    eyebrow: "Credibility",
    description:
      "Editorial, conversion-focused websites for founders, local businesses, consultants, and teams that need to look serious from the first visit.",
    outcomes: ["Clear positioning", "Fast page speed", "Trust-building structure"]
  },
  {
    title: "Landing Pages",
    eyebrow: "Growth",
    description:
      "Focused pages built around one commercial action: lead capture, booking, recruitment, launch validation, or product demand.",
    outcomes: ["Sharper offer", "Better forms", "Analytics-ready funnels"]
  },
  {
    title: "Web Applications",
    eyebrow: "Systems",
    description:
      "Modern interfaces and full-stack foundations for dashboards, client portals, internal tools, and custom digital workflows.",
    outcomes: ["Typed architecture", "Reusable UI", "Scalable product patterns"]
  },
  {
    title: "UX/UI Redesign",
    eyebrow: "Refinement",
    description:
      "A practical redesign process that improves hierarchy, usability, mobile experience, accessibility, and business clarity.",
    outcomes: ["Cleaner journeys", "Better accessibility", "More confident brand feel"]
  },
  {
    title: "SEO & Performance",
    eyebrow: "Reach",
    description:
      "Technical SEO, structured data, metadata, sitemaps, speed work, and content architecture prepared for long-term visibility.",
    outcomes: ["Rich snippets", "Search-ready pages", "Core Web Vitals discipline"]
  },
  {
    title: "Digital Branding Experiences",
    eyebrow: "Identity",
    description:
      "Visual systems, interaction language, content direction, and brand presentation for digital-first companies and personal brands.",
    outcomes: ["Distinct art direction", "Reusable components", "Premium consistency"]
  }
];

export const buildCapabilities = [
  "Business websites",
  "Corporate websites",
  "Landing pages",
  "Portfolio websites",
  "Web applications",
  "Custom solutions",
  "UI systems",
  "UX experiences",
  "Website redesigns",
  "SEO optimization",
  "Performance optimization",
  "Digital branding experiences"
];

export const technologyGroups = [
  {
    title: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "Backend",
    items: ["Node.js", "API routes", "Server actions", "Resend", "Auth-ready architecture"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "Supabase-ready", "Prisma-ready", "CMS content models"]
  },
  {
    title: "Design",
    items: ["UX strategy", "UI systems", "Responsive design", "Accessibility", "Editorial art direction"]
  },
  {
    title: "Tools",
    items: ["Git", "Vercel", "Cloudinary-ready", "Analytics", "Speed Insights"]
  },
  {
    title: "Workflow",
    items: ["Schema-first content", "Component libraries", "QA checklists", "SEO validation"]
  }
];

export const projects: Project[] = [
  {
    slug: "victoria-revestimentos-reformas",
    title: "Victoria Revestimentos & Reformas",
    eyebrow: "Live business website",
    type: "Business",
    status: "Live-ready",
    summary:
      "A polished service-business website for a remodeling and finishes company serving Maia and Porto, built to turn trust into quote requests.",
    challenge:
      "The business needed a credible digital presence that could present services, show work quality, reduce uncertainty, and move visitors toward WhatsApp or quote contact quickly.",
    response:
      "The site uses premium editorial layout, clear service navigation, project imagery, trust messaging, FAQ content, testimonials, and direct conversion routes for WhatsApp and budget requests.",
    outcome:
      "A live client-facing website that positions Victoria as organized, detail-oriented, and easy to contact for remodeling, flooring, painting, kitchen, bathroom, and finish work.",
    stack: ["Responsive web design", "SEO copy", "Conversion UX", "Service architecture"],
    services: ["Business website", "Local SEO structure", "Conversion copy", "Visual direction"],
    year: "2026",
    image: "/assets/victoria-website-preview.webp",
    href: "https://www.victoriarevestimentosereformas.com/"
  },
  {
    slug: "aj-digital-consultant-android-app",
    title: "AJ Digital Consultant Android App",
    eyebrow: "Freelance mobile app",
    type: "Mobile",
    status: "Concept-ready",
    summary:
      "A native Android consultation and landing app for a digital agency concept, packaged as a debug APK and focused on services, trust, process, testimonials, and contact handoff.",
    challenge:
      "The app needed to communicate a premium digital consulting offer on mobile while keeping the build lightweight and independent from third-party app dependencies.",
    response:
      "The implementation uses a native Java Activity with XML layouts, a dark navy, gold, and blue visual system, service cards, CTA scrolling, form validation, and email draft generation.",
    outcome:
      "A working Android APK foundation that demonstrates mobile UI thinking, native Android structure, contact-flow logic, and agency-style service positioning.",
    stack: ["Android", "Java", "XML layouts", "Gradle", "Email intents"],
    services: ["Mobile app UI", "Native Android build", "Contact flow", "Freelance concept"],
    year: "2026",
    image: "/assets/aj-digital-consultant-app.webp",
    artifact: "Debug APK: app/build/outputs/apk/debug/app-debug.apk"
  },
  {
    slug: "sp-digital-portfolio-system",
    title: "SP Digital Portfolio System",
    eyebrow: "Personal brand platform",
    type: "Experience",
    status: "Live-ready",
    summary:
      "A premium portfolio experience designed to convert clients, recruiters, agencies, and startups without positioning Samuel as a junior profile.",
    challenge:
      "The portfolio had to communicate taste, technical competence, ambition, and trust in a few seconds while staying honest about a growth journey.",
    response:
      "The solution uses a cinematic first viewport, CMS-ready content models, recruiter pathways, service positioning, SEO structure, and conversion-focused contact flows.",
    outcome:
      "A site foundation that can expand into case studies, articles, digital products, multilingual pages, and agency-style service pages.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Structured data"],
    services: ["UX direction", "Frontend architecture", "SEO system", "Conversion copy"],
    year: "2026",
    image: "/assets/sp-digital-editorial-hero.webp"
  },
  {
    slug: "business-website-growth-framework",
    title: "Business Website Growth Framework",
    eyebrow: "Client acquisition",
    type: "Business",
    status: "CMS-ready",
    summary:
      "A repeatable structure for service businesses that need credibility, clean offers, contact intent, and local-search readiness.",
    challenge:
      "Many small businesses have fragmented messaging, slow websites, and unclear calls to action that weaken trust before the first conversation.",
    response:
      "SP Digital packages positioning, service architecture, performance requirements, schema markup, and fast inquiry paths into one modular website system.",
    outcome:
      "A practical launch path for corporate websites, redesigns, and lead-generation pages with space for real testimonials and case data.",
    stack: ["Next.js", "CMS models", "LocalBusiness schema", "Forms", "Analytics"],
    services: ["Business websites", "SEO optimization", "Website redesigns"],
    year: "2026",
    image: "/assets/sp-digital-editorial-hero.webp"
  },
  {
    slug: "recruiter-ready-developer-profile",
    title: "Recruiter-Ready Developer Profile",
    eyebrow: "Hiring signal",
    type: "Recruiter",
    status: "Live-ready",
    summary:
      "A hiring-focused section that makes Samuel's skills, preferences, languages, and career intent easy to evaluate quickly.",
    challenge:
      "Recruiters need fast evidence: role fit, availability, communication, technology stack, and links to the right next action.",
    response:
      "The recruiter path highlights frontend, full-stack, UX/UI, languages, work preferences, career objectives, and direct interview CTAs.",
    outcome:
      "A lower-friction experience for interview invitations, agency conversations, and startup opportunities.",
    stack: ["React", "TypeScript", "Accessibility", "Responsive UX"],
    services: ["Portfolio websites", "Professional positioning", "UX writing"],
    year: "2026",
    image: "/assets/samuel-pinto-portrait-editorial.webp"
  }
];

export const recruiterProfile = {
  availability: "Open to freelance, collaborative projects, and selected full-time opportunities.",
  skills: [
    "Front-end development",
    "Full-stack foundations",
    "UX/UI design",
    "Conversion-focused websites",
    "SEO architecture",
    "Performance optimization"
  ],
  technologies: [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Node.js",
    "CMS integrations",
    "Framer Motion"
  ],
  preferences: [
    "Remote-friendly",
    "Portugal or international teams",
    "Product-minded work",
    "Clear ownership",
    "High communication standards"
  ],
  objectives:
    "Grow into increasingly responsible front-end, full-stack, and product design work while helping companies ship digital experiences that feel polished and useful."
};

export const contactLinks: LinkItem[] = [
  {
    label: "Email",
    href: "mailto:samuelferreiragomespinto25@gmail.com",
    detail: "Direct email for business, recruitment, and collaboration inquiries."
  },
  {
    label: "WhatsApp",
    href: "#contact-form",
    detail: "Add the public WhatsApp number before launch.",
    needsConfig: true
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    detail: "Connect Samuel's profile before launch.",
    needsConfig: true
  },
  {
    label: "GitHub",
    href: "https://github.com/",
    detail: "Connect Samuel's GitHub before launch.",
    needsConfig: true
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    detail: "Connect SP Digital's social presence before launch.",
    needsConfig: true
  },
  {
    label: "Direct Call",
    href: "#contact-form",
    detail: "Add a public phone number when ready.",
    needsConfig: true
  }
];

export const faqs = [
  {
    question: "Does SP Digital only build portfolio websites?",
    answer:
      "No. The brand is positioned for business websites, landing pages, web applications, redesigns, UI systems, SEO architecture, and premium digital branding experiences."
  },
  {
    question: "Is Samuel available for recruiters and companies?",
    answer:
      "Yes. The site includes a recruiter path for skills, technologies, languages, work preferences, and interview contact."
  },
  {
    question: "Can the content be edited later?",
    answer:
      "Yes. The current content is structured as typed data and can be connected to a CMS for projects, testimonials, services, SEO, blog posts, and case studies."
  },
  {
    question: "Is the website prepared for SEO?",
    answer:
      "Yes. It includes dynamic metadata, sitemap, robots, Open Graph, Twitter cards, and JSON-LD for Person, Organization, LocalBusiness, FAQ, and Breadcrumb entities."
  }
];

export const cmsCollections = [
  "Projects",
  "Case studies",
  "Services",
  "Testimonials",
  "Blog articles",
  "SEO metadata",
  "Resources",
  "Digital products",
  "Translations"
];
