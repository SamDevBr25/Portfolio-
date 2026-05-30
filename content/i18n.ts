import type { Project } from "@/content/site";

export const languages = [
  { code: "en", label: "EN", name: "English" },
  { code: "pt", label: "PT", name: "Português" },
  { code: "es", label: "ES", name: "Español" }
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

type LocalizedProject = Project;

export const localizedContent = {
  en: {
    nav: {
      work: "Work",
      services: "Services",
      trust: "Trust",
      recruiters: "Recruiters",
      contact: "Contact",
      recruiterPath: "Recruiter path",
      startConversation: "Start a conversation"
    },
    hero: {
      eyebrow: "Portugal based digital craft",
      titleName: "Samuel Pinto",
      titleBrand: "SP Digital",
      text:
        "Premium websites, interfaces, and web applications for brands that need trust, clarity, and reliable execution from the first impression.",
      startProject: "Start a project",
      recruiterPath: "Recruiter pathway",
      portraitAlt: "Samuel Pinto wearing a blue suit",
      roles: ["Founder", "Developer", "UX/UI", "Consultant"]
    },
    metrics: [
      {
        value: "95+",
        label: "Lighthouse targets",
        detail:
          "Performance, accessibility, best practices, and SEO are treated as product requirements."
      },
      {
        value: "3",
        label: "Working languages",
        detail:
          "Portuguese, English, and Spanish for clearer client and team communication."
      },
      {
        value: "5s",
        label: "Trust window",
        detail:
          "The first viewport is designed to make competence and reliability obvious immediately."
      }
    ],
    sections: {
      story: {
        eyebrow: "Professional story",
        title: "A serious digital brand with a human growth journey.",
        text:
          "The experience avoids a flat skills list. It tells a story of curiosity, discipline, and useful execution: design that earns attention, code that supports the business, and communication that reduces uncertainty."
      },
      trust: {
        eyebrow: "Trust architecture",
        title: "The site is designed to answer why Samuel is worth contacting.",
        text:
          "Trust is not a single testimonial block. It is the sum of positioning, communication, proof, clarity, and the way every interaction behaves.",
        cardTitle: "Built around credibility signals.",
        cardText:
          "This section exists for clients, recruiters, agencies, and business owners who need a quick reason to believe the conversation will be professional.",
        bullets: ["Business inquiry CTA", "Recruitment CTA", "Modern development practice"]
      },
      services: {
        eyebrow: "Services",
        title: "Presented like a premium agency, delivered with focused ownership.",
        text:
          "Each service is framed around business value: clearer offers, better trust, stronger conversion paths, faster performance, and a digital presence that feels intentional."
      },
      technology: {
        eyebrow: "Technology",
        title: "Modern stack, presented without noisy skill bars.",
        text:
          "The technical story is organized by capability: front-end craft, full-stack foundations, design systems, content operations, performance, and workflow."
      },
      work: {
        eyebrow: "Projects",
        title: "CMS-powered case studies, search, filtering, and detail pages.",
        text:
          "The work area is future-proofed for live projects, mobile builds, testimonials, outcomes, and long-form case studies. Each entry can grow into a fuller story as more proof and results become available."
      },
      recruiters: {
        eyebrow: "Recruiter experience",
        title: "A direct path for interviews, agencies, startups, and teams.",
        contact: "Contact Samuel",
        cv: "Request CV"
      },
      expansion: {
        title: "Built for expansion, not just launch.",
        text:
          "The architecture supports blog articles, case studies, resources, templates, digital products, courses, team growth, and multilingual pages.",
        seoTitle: "Enterprise-grade SEO surface.",
        accessTitle: "Accessibility is part of the craft."
      },
      contact: {
        eyebrow: "Contact",
        title: "The strongest conversion point in the experience.",
        text:
          "The contact path separates business inquiries, recruitment, agency collaboration, and general messages so the first reply can be useful and fast.",
        inquiry: "Inquiry desk",
        formTitle: "Tell Samuel what you need."
      },
      faq: {
        eyebrow: "FAQ",
        title: "Clear answers for clients, recruiters, and collaborators."
      }
    },
    storyChapters: [
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
    ],
    trustSignals: [
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
    ],
    buildCapabilities: [
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
    ],
    services: [
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
    ],
    technologyGroups: [
      { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { title: "Backend", items: ["Node.js", "API routes", "Server actions", "Resend", "Auth-ready architecture"] },
      { title: "Databases", items: ["PostgreSQL", "Supabase-ready", "Prisma-ready", "CMS content models"] },
      { title: "Design", items: ["UX strategy", "UI systems", "Responsive design", "Accessibility", "Editorial art direction"] },
      { title: "Tools", items: ["Git", "Vercel", "Cloudinary-ready", "Analytics", "Speed Insights"] },
      { title: "Workflow", items: ["Schema-first content", "Component libraries", "QA checklists", "SEO validation"] }
    ],
    projects: [
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
      }
    ] satisfies LocalizedProject[],
    recruiterProfile: {
      availability:
        "Open to freelance, collaborative projects, and selected full-time opportunities.",
      skills: [
        "Front-end development",
        "Full-stack foundations",
        "UX/UI design",
        "Conversion-focused websites",
        "SEO architecture",
        "Performance optimization"
      ],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "CMS integrations", "Framer Motion"],
      preferences: ["Remote-friendly", "Portugal or international teams", "Product-minded work", "Clear ownership", "High communication standards"],
      objectives:
        "Grow into increasingly responsible front-end, full-stack, and product design work while helping companies ship digital experiences that feel polished and useful."
    },
    contactLinks: [
      {
        label: "Email",
        href: "mailto:samuelferreiragomespinto25@gmail.com",
        detail: "Direct email for business, recruitment, and collaboration inquiries."
      },
      { label: "WhatsApp", href: "#contact-form", detail: "Add the public WhatsApp number before launch.", needsConfig: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/", detail: "Connect Samuel's profile before launch.", needsConfig: true },
      { label: "GitHub", href: "https://github.com/", detail: "Connect Samuel's GitHub before launch.", needsConfig: true },
      { label: "Instagram", href: "https://www.instagram.com/", detail: "Connect SP Digital's social presence before launch.", needsConfig: true },
      { label: "Direct Call", href: "#contact-form", detail: "Add a public phone number when ready.", needsConfig: true }
    ],
    faq: [
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
    ],
    expansion: {
      cmsCollections: ["Projects", "Case studies", "Services", "Testimonials", "Blog articles", "SEO metadata", "Resources", "Digital products", "Translations"],
      seoItems: ["Schema.org", "Open Graph", "Twitter cards", "Dynamic metadata", "Sitemap", "Robots", "FAQ schema", "Breadcrumb schema"],
      accessItems: ["Semantic HTML", "Keyboard navigation", "Reduced motion", "WCAG AA contrast", "Screen reader labels", "Responsive text flow"]
    },
    footer: {
      line: "Samuel Pinto. Portugal. Premium digital execution."
    },
    projectExplorer: {
      filters: {
        All: "All",
        Business: "Business",
        Mobile: "Mobile",
        Recruiter: "Recruiter",
        Experience: "Experience",
        System: "System"
      },
      search: "Search by service, stack, or outcome",
      noResults: "No projects match that search yet.",
      clear: "Clear search"
    },
    contactForm: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@example.com",
      intent: "Intent",
      budget: "Budget or timeline",
      budgetPlaceholder: "Optional",
      message: "Message",
      messagePlaceholder: "Tell Samuel what you want to build, improve, or discuss.",
      send: "Send inquiry",
      note: "Business and recruitment messages are prioritized.",
      success: "Message received. In preview mode, configure Resend to deliver it by email.",
      error: "Something prevented the message from sending. Try again or use the direct contact links."
    },
    assistant: {
      title: "SP Digital IA",
      subtitle: "Contact and project guide",
      hello:
        "Hi, I am the SP Digital IA assistant. I can answer quick questions, share Samuel's contact info, or help send him a message.",
      starters: ["How can I contact Samuel?", "What can Samuel build?", "Send Samuel a message"],
      placeholder: "Ask about services or contact...",
      thinking: "Thinking...",
      askButton: "Ask IA",
      leadTitle: "Send Samuel a message",
      leadName: "Your name",
      leadEmail: "Your email",
      leadMessage: "What should Samuel know?",
      leadSend: "Send to Samuel",
      leadError: "Please check the fields and try again."
    }
  },
  pt: {
    nav: {
      work: "Trabalhos",
      services: "Serviços",
      trust: "Confiança",
      recruiters: "Recrutadores",
      contact: "Contacto",
      recruiterPath: "Área recrutador",
      startConversation: "Iniciar conversa"
    },
    hero: {
      eyebrow: "Criação digital a partir de Portugal",
      titleName: "Samuel Pinto",
      titleBrand: "SP Digital",
      text:
        "Websites premium, interfaces e aplicações web para marcas que precisam de confiança, clareza e execução fiável desde a primeira impressão.",
      startProject: "Iniciar projeto",
      recruiterPath: "Área de recrutamento",
      portraitAlt: "Samuel Pinto com fato azul",
      roles: ["Fundador", "Developer", "UX/UI", "Consultor"]
    },
    metrics: [
      { value: "95+", label: "Objetivos Lighthouse", detail: "Performance, acessibilidade, boas práticas e SEO são tratados como requisitos de produto." },
      { value: "3", label: "Idiomas de trabalho", detail: "Português, inglês e espanhol para uma comunicação mais clara com clientes e equipas." },
      { value: "5s", label: "Janela de confiança", detail: "O primeiro ecrã foi pensado para comunicar competência e fiabilidade imediatamente." }
    ],
    sections: {
      story: {
        eyebrow: "História profissional",
        title: "Uma marca digital séria com uma jornada humana de crescimento.",
        text:
          "A experiência evita uma simples lista de competências. Conta uma história de curiosidade, disciplina e execução útil: design que conquista atenção, código que apoia o negócio e comunicação que reduz incerteza."
      },
      trust: {
        eyebrow: "Arquitetura de confiança",
        title: "O site foi desenhado para responder por que vale a pena contactar o Samuel.",
        text:
          "Confiança não é apenas um bloco de testemunhos. É a soma de posicionamento, comunicação, prova, clareza e da forma como cada interação se comporta.",
        cardTitle: "Construído à volta de sinais de credibilidade.",
        cardText:
          "Esta secção existe para clientes, recrutadores, agências e empresários que precisam de perceber rapidamente que a conversa será profissional.",
        bullets: ["CTA para negócios", "CTA para recrutamento", "Práticas modernas de desenvolvimento"]
      },
      services: {
        eyebrow: "Serviços",
        title: "Apresentado como uma agência premium, entregue com foco e responsabilidade.",
        text:
          "Cada serviço é enquadrado pelo valor para o negócio: ofertas mais claras, maior confiança, melhores caminhos de conversão, mais performance e uma presença digital intencional."
      },
      technology: {
        eyebrow: "Tecnologia",
        title: "Stack moderna, sem barras de competência ruidosas.",
        text:
          "A história técnica está organizada por capacidade: front-end, bases full-stack, sistemas de design, operações de conteúdo, performance e fluxo de trabalho."
      },
      work: {
        eyebrow: "Projetos",
        title: "Case studies com CMS, pesquisa, filtros e páginas de detalhe.",
        text:
          "A área de trabalhos está preparada para projetos reais, apps mobile, testemunhos, resultados e case studies longos. Cada entrada pode evoluir com mais prova e resultados."
      },
      recruiters: {
        eyebrow: "Experiência para recrutadores",
        title: "Um caminho direto para entrevistas, agências, startups e equipas.",
        contact: "Contactar Samuel",
        cv: "Pedir CV"
      },
      expansion: {
        title: "Construído para crescer, não apenas para lançar.",
        text:
          "A arquitetura suporta artigos, case studies, recursos, templates, produtos digitais, cursos, crescimento de equipa e páginas multilingues.",
        seoTitle: "Superfície SEO de nível profissional.",
        accessTitle: "A acessibilidade faz parte do trabalho."
      },
      contact: {
        eyebrow: "Contacto",
        title: "O ponto de conversão mais forte da experiência.",
        text:
          "O contacto separa pedidos de negócio, recrutamento, colaboração com agências e mensagens gerais para que a primeira resposta seja útil e rápida.",
        inquiry: "Mesa de contacto",
        formTitle: "Diz ao Samuel o que precisas."
      },
      faq: {
        eyebrow: "FAQ",
        title: "Respostas claras para clientes, recrutadores e colaboradores."
      }
    },
    storyChapters: [
      { title: "Um criador com consciência de design", text: "Samuel trata websites como ativos de negócio, não como decoração. O trabalho começa com clareza: o que o visitante precisa de acreditar, o que a empresa precisa de comunicar e o que a interface deve tornar mais fácil." },
      { title: "Crescimento sem fingimento", text: "A marca comunica aprendizagem contínua com transparência, mantendo o padrão de um profissional sério: pensamento estruturado, boa comunicação, hábitos modernos de engenharia e atenção ao design." },
      { title: "SP Digital como plataforma de longo prazo", text: "Este portfólio é a primeira expressão de uma marca digital maior: serviços, case studies, artigos, templates, produtos e conteúdo multilingue podem crescer a partir da mesma base." }
    ],
    trustSignals: ["Master D Portugal", "Certificações profissionais", "Comunicação multilingue", "Experiência freelance", "Disponibilidade internacional", "Mentalidade de negócio", "Aprendizagem contínua", "Compromisso profissional", "Comunicação rápida", "Práticas modernas de desenvolvimento"],
    buildCapabilities: ["Websites de negócio", "Websites corporativos", "Landing pages", "Portfólios", "Aplicações web", "Soluções à medida", "Sistemas UI", "Experiências UX", "Redesign de websites", "Otimização SEO", "Otimização de performance", "Experiências de branding digital"],
    services: [
      { title: "Websites Premium", eyebrow: "Credibilidade", description: "Websites editoriais e focados em conversão para fundadores, negócios locais, consultores e equipas que precisam de parecer sérios desde a primeira visita.", outcomes: ["Posicionamento claro", "Carregamento rápido", "Estrutura que gera confiança"] },
      { title: "Landing Pages", eyebrow: "Crescimento", description: "Páginas focadas numa ação comercial: captação de leads, marcação, recrutamento, validação de lançamento ou procura de produto.", outcomes: ["Oferta mais clara", "Formulários melhores", "Funis preparados para analytics"] },
      { title: "Aplicações Web", eyebrow: "Sistemas", description: "Interfaces modernas e bases full-stack para dashboards, portais de cliente, ferramentas internas e fluxos digitais personalizados.", outcomes: ["Arquitetura tipada", "UI reutilizável", "Padrões escaláveis"] },
      { title: "Redesign UX/UI", eyebrow: "Refinamento", description: "Um processo prático de redesign que melhora hierarquia, usabilidade, mobile, acessibilidade e clareza de negócio.", outcomes: ["Percursos mais limpos", "Melhor acessibilidade", "Marca mais confiante"] },
      { title: "SEO & Performance", eyebrow: "Alcance", description: "SEO técnico, dados estruturados, metadata, sitemaps, velocidade e arquitetura de conteúdo preparados para visibilidade a longo prazo.", outcomes: ["Rich snippets", "Páginas prontas para pesquisa", "Disciplina de Core Web Vitals"] },
      { title: "Branding Digital", eyebrow: "Identidade", description: "Sistemas visuais, linguagem de interação, direção de conteúdo e apresentação de marca para empresas e marcas pessoais digitais.", outcomes: ["Direção distinta", "Componentes reutilizáveis", "Consistência premium"] }
    ],
    technologyGroups: [
      { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { title: "Backend", items: ["Node.js", "Rotas API", "Server actions", "Resend", "Arquitetura preparada para auth"] },
      { title: "Bases de dados", items: ["PostgreSQL", "Supabase-ready", "Prisma-ready", "Modelos de conteúdo CMS"] },
      { title: "Design", items: ["Estratégia UX", "Sistemas UI", "Design responsivo", "Acessibilidade", "Direção editorial"] },
      { title: "Ferramentas", items: ["Git", "Vercel", "Cloudinary-ready", "Analytics", "Speed Insights"] },
      { title: "Workflow", items: ["Conteúdo por schema", "Bibliotecas de componentes", "Checklists de QA", "Validação SEO"] }
    ],
    projects: [
      {
        slug: "victoria-revestimentos-reformas",
        title: "Victoria Revestimentos & Reformas",
        eyebrow: "Website de negócio live",
        type: "Business",
        status: "Live-ready",
        summary: "Website profissional para uma empresa de remodelações e acabamentos na Maia e Porto, pensado para transformar confiança em pedidos de orçamento.",
        challenge: "O negócio precisava de uma presença digital credível para apresentar serviços, mostrar qualidade, reduzir dúvidas e levar visitantes ao WhatsApp ou pedido de orçamento.",
        response: "O site usa layout editorial premium, navegação clara por serviços, imagens de projetos, mensagens de confiança, FAQ, depoimentos e caminhos diretos para WhatsApp e orçamento.",
        outcome: "Um website live que posiciona a Victoria como organizada, atenta ao detalhe e fácil de contactar para remodelações, pisos, pintura, cozinhas, casas de banho e acabamentos.",
        stack: ["Design web responsivo", "Copy SEO", "UX de conversão", "Arquitetura de serviços"],
        services: ["Website de negócio", "SEO local", "Copy de conversão", "Direção visual"],
        year: "2026",
        image: "/assets/victoria-website-preview.webp",
        href: "https://www.victoriarevestimentosereformas.com/"
      },
      {
        slug: "aj-digital-consultant-android-app",
        title: "AJ Digital Consultant Android App",
        eyebrow: "App mobile freelance",
        type: "Mobile",
        status: "Concept-ready",
        summary: "App Android nativa de consulta e landing page para uma agência digital, empacotada como APK debug e focada em serviços, confiança, processo, testemunhos e contacto.",
        challenge: "A app precisava de comunicar uma oferta premium de consultoria digital em mobile mantendo a build leve e sem dependências externas.",
        response: "A implementação usa Activity Java nativa com layouts XML, sistema visual navy/gold/azul, cartões de serviço, scroll para CTA, validação de formulário e criação de rascunho de email.",
        outcome: "Uma base APK funcional que demonstra pensamento de UI mobile, estrutura Android nativa, lógica de contacto e posicionamento de serviços estilo agência.",
        stack: ["Android", "Java", "Layouts XML", "Gradle", "Email intents"],
        services: ["UI mobile", "Build Android nativa", "Fluxo de contacto", "Conceito freelance"],
        year: "2026",
        image: "/assets/aj-digital-consultant-app.webp",
        artifact: "APK debug: app/build/outputs/apk/debug/app-debug.apk"
      }
    ] satisfies LocalizedProject[],
    recruiterProfile: {
      availability: "Aberto a projetos freelance, colaborações e oportunidades full-time selecionadas.",
      skills: ["Desenvolvimento front-end", "Bases full-stack", "UX/UI design", "Websites focados em conversão", "Arquitetura SEO", "Otimização de performance"],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Integrações CMS", "Framer Motion"],
      preferences: ["Remote-friendly", "Portugal ou equipas internacionais", "Trabalho orientado a produto", "Responsabilidade clara", "Comunicação forte"],
      objectives: "Crescer em trabalho front-end, full-stack e product design com mais responsabilidade, ajudando empresas a lançar experiências digitais polidas e úteis."
    },
    contactLinks: [
      { label: "Email", href: "mailto:samuelferreiragomespinto25@gmail.com", detail: "Email direto para negócios, recrutamento e colaborações." },
      { label: "WhatsApp", href: "#contact-form", detail: "Adicionar número público de WhatsApp antes do lançamento.", needsConfig: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/", detail: "Ligar o perfil do Samuel antes do lançamento.", needsConfig: true },
      { label: "GitHub", href: "https://github.com/", detail: "Ligar o GitHub do Samuel antes do lançamento.", needsConfig: true },
      { label: "Instagram", href: "https://www.instagram.com/", detail: "Ligar a presença social da SP Digital antes do lançamento.", needsConfig: true },
      { label: "Chamada direta", href: "#contact-form", detail: "Adicionar número público quando estiver pronto.", needsConfig: true }
    ],
    faq: [
      { question: "A SP Digital faz apenas portfólios?", answer: "Não. A marca está posicionada para websites de negócio, landing pages, aplicações web, redesigns, sistemas UI, SEO e experiências premium de branding digital." },
      { question: "O Samuel está disponível para recrutadores e empresas?", answer: "Sim. O site inclui uma área para recrutadores com competências, tecnologias, idiomas, preferências de trabalho e contacto para entrevista." },
      { question: "O conteúdo pode ser editado mais tarde?", answer: "Sim. O conteúdo está estruturado em dados tipados e pode ser ligado a um CMS para projetos, testemunhos, serviços, SEO, blog posts e case studies." },
      { question: "O website está preparado para SEO?", answer: "Sim. Inclui metadata dinâmica, sitemap, robots, Open Graph, Twitter Cards e JSON-LD para Person, Organization, LocalBusiness, FAQ e Breadcrumb." }
    ],
    expansion: {
      cmsCollections: ["Projetos", "Case studies", "Serviços", "Testemunhos", "Artigos", "Metadata SEO", "Recursos", "Produtos digitais", "Traduções"],
      seoItems: ["Schema.org", "Open Graph", "Twitter Cards", "Metadata dinâmica", "Sitemap", "Robots", "FAQ schema", "Breadcrumb schema"],
      accessItems: ["HTML semântico", "Navegação por teclado", "Reduced motion", "Contraste WCAG AA", "Labels para leitores de ecrã", "Texto responsivo"]
    },
    footer: {
      line: "Samuel Pinto. Portugal. Execução digital premium."
    },
    projectExplorer: {
      filters: { All: "Todos", Business: "Negócio", Mobile: "Mobile", Recruiter: "Recrutador", Experience: "Experiência", System: "Sistema" },
      search: "Pesquisar por serviço, stack ou resultado",
      noResults: "Nenhum projeto corresponde à pesquisa.",
      clear: "Limpar pesquisa"
    },
    contactForm: {
      name: "Nome",
      namePlaceholder: "O teu nome",
      email: "Email",
      emailPlaceholder: "tu@exemplo.com",
      intent: "Objetivo",
      budget: "Orçamento ou prazo",
      budgetPlaceholder: "Opcional",
      message: "Mensagem",
      messagePlaceholder: "Diz ao Samuel o que queres construir, melhorar ou discutir.",
      send: "Enviar pedido",
      note: "Mensagens de negócio e recrutamento têm prioridade.",
      success: "Mensagem recebida. Em modo preview, configura o Resend para entregar por email.",
      error: "Algo impediu o envio. Tenta novamente ou usa os links diretos."
    },
    assistant: {
      title: "IA SP Digital",
      subtitle: "Guia de contacto e projetos",
      hello: "Olá, sou a IA da SP Digital. Posso responder a perguntas rápidas, dar o contacto do Samuel ou ajudar a enviar-lhe uma mensagem.",
      starters: ["Como contacto o Samuel?", "O que o Samuel pode construir?", "Enviar mensagem ao Samuel"],
      placeholder: "Pergunta sobre serviços ou contacto...",
      thinking: "A pensar...",
      askButton: "Perguntar à IA",
      leadTitle: "Enviar mensagem ao Samuel",
      leadName: "O teu nome",
      leadEmail: "O teu email",
      leadMessage: "O que o Samuel deve saber?",
      leadSend: "Enviar ao Samuel",
      leadError: "Confirma os campos e tenta novamente."
    }
  },
  es: {
    nav: {
      work: "Trabajos",
      services: "Servicios",
      trust: "Confianza",
      recruiters: "Reclutadores",
      contact: "Contacto",
      recruiterPath: "Ruta reclutador",
      startConversation: "Iniciar conversación"
    },
    hero: {
      eyebrow: "Creación digital desde Portugal",
      titleName: "Samuel Pinto",
      titleBrand: "SP Digital",
      text:
        "Websites premium, interfaces y aplicaciones web para marcas que necesitan confianza, claridad y ejecución fiable desde la primera impresión.",
      startProject: "Iniciar proyecto",
      recruiterPath: "Ruta de reclutamiento",
      portraitAlt: "Samuel Pinto con traje azul",
      roles: ["Fundador", "Developer", "UX/UI", "Consultor"]
    },
    metrics: [
      { value: "95+", label: "Objetivos Lighthouse", detail: "Performance, accesibilidad, buenas prácticas y SEO se tratan como requisitos del producto." },
      { value: "3", label: "Idiomas de trabajo", detail: "Portugués, inglés y español para una comunicación más clara con clientes y equipos." },
      { value: "5s", label: "Ventana de confianza", detail: "La primera pantalla está diseñada para comunicar competencia y fiabilidad de inmediato." }
    ],
    sections: {
      story: {
        eyebrow: "Historia profesional",
        title: "Una marca digital seria con una trayectoria humana de crecimiento.",
        text: "La experiencia evita una simple lista de habilidades. Cuenta una historia de curiosidad, disciplina y ejecución útil: diseño que gana atención, código que apoya el negocio y comunicación que reduce incertidumbre."
      },
      trust: {
        eyebrow: "Arquitectura de confianza",
        title: "El sitio está diseñado para responder por qué merece la pena contactar con Samuel.",
        text: "La confianza no es solo un bloque de testimonios. Es la suma de posicionamiento, comunicación, prueba, claridad y el comportamiento de cada interacción.",
        cardTitle: "Construido alrededor de señales de credibilidad.",
        cardText: "Esta sección existe para clientes, reclutadores, agencias y empresas que necesitan una razón rápida para creer que la conversación será profesional.",
        bullets: ["CTA para negocio", "CTA para reclutamiento", "Prácticas modernas de desarrollo"]
      },
      services: {
        eyebrow: "Servicios",
        title: "Presentado como una agencia premium, entregado con foco y responsabilidad.",
        text: "Cada servicio se plantea desde el valor de negocio: ofertas más claras, más confianza, mejores rutas de conversión, mayor performance y una presencia digital intencional."
      },
      technology: {
        eyebrow: "Tecnología",
        title: "Stack moderno, sin barras de habilidad innecesarias.",
        text: "La historia técnica se organiza por capacidad: front-end, bases full-stack, sistemas de diseño, operaciones de contenido, performance y workflow."
      },
      work: {
        eyebrow: "Proyectos",
        title: "Case studies con CMS, búsqueda, filtros y páginas de detalle.",
        text: "El área de trabajos está preparada para proyectos reales, apps móviles, testimonios, resultados y case studies largos. Cada entrada puede crecer con más prueba y resultados."
      },
      recruiters: {
        eyebrow: "Experiencia para reclutadores",
        title: "Un camino directo para entrevistas, agencias, startups y equipos.",
        contact: "Contactar a Samuel",
        cv: "Solicitar CV"
      },
      expansion: {
        title: "Construido para crecer, no solo para lanzar.",
        text: "La arquitectura soporta artículos, case studies, recursos, plantillas, productos digitales, cursos, crecimiento de equipo y páginas multilingües.",
        seoTitle: "Superficie SEO profesional.",
        accessTitle: "La accesibilidad forma parte del trabajo."
      },
      contact: {
        eyebrow: "Contacto",
        title: "El punto de conversión más fuerte de la experiencia.",
        text: "El contacto separa solicitudes de negocio, reclutamiento, colaboración con agencias y mensajes generales para que la primera respuesta sea útil y rápida.",
        inquiry: "Mesa de contacto",
        formTitle: "Cuéntale a Samuel qué necesitas."
      },
      faq: {
        eyebrow: "FAQ",
        title: "Respuestas claras para clientes, reclutadores y colaboradores."
      }
    },
    storyChapters: [
      { title: "Un creador con conciencia de diseño", text: "Samuel trata los websites como activos de negocio, no como decoración. El trabajo empieza con claridad: qué debe creer el visitante, qué necesita comunicar la empresa y qué debe facilitar la interfaz." },
      { title: "Crecimiento sin aparentar", text: "La marca comunica aprendizaje continuo con transparencia, manteniendo el estándar de un profesional serio: pensamiento estructurado, buena comunicación, hábitos modernos de ingeniería y criterio de diseño." },
      { title: "SP Digital como plataforma a largo plazo", text: "Este portfolio es la primera expresión de una marca digital más amplia: servicios, case studies, artículos, plantillas, productos y contenido multilingüe pueden crecer desde la misma base." }
    ],
    trustSignals: ["Master D Portugal", "Certificaciones profesionales", "Comunicación multilingüe", "Experiencia freelance", "Disponibilidad internacional", "Mentalidad de negocio", "Aprendizaje continuo", "Compromiso profesional", "Comunicación rápida", "Prácticas modernas de desarrollo"],
    buildCapabilities: ["Websites de negocio", "Websites corporativos", "Landing pages", "Portfolios", "Aplicaciones web", "Soluciones a medida", "Sistemas UI", "Experiencias UX", "Rediseño de websites", "Optimización SEO", "Optimización de performance", "Experiencias de branding digital"],
    services: [
      { title: "Websites Premium", eyebrow: "Credibilidad", description: "Websites editoriales y enfocados en conversión para fundadores, negocios locales, consultores y equipos que necesitan verse serios desde la primera visita.", outcomes: ["Posicionamiento claro", "Carga rápida", "Estructura que genera confianza"] },
      { title: "Landing Pages", eyebrow: "Crecimiento", description: "Páginas centradas en una acción comercial: leads, reservas, reclutamiento, validación de lanzamiento o demanda de producto.", outcomes: ["Oferta más clara", "Mejores formularios", "Embudos listos para analytics"] },
      { title: "Aplicaciones Web", eyebrow: "Sistemas", description: "Interfaces modernas y bases full-stack para dashboards, portales de cliente, herramientas internas y flujos digitales personalizados.", outcomes: ["Arquitectura tipada", "UI reutilizable", "Patrones escalables"] },
      { title: "Rediseño UX/UI", eyebrow: "Refinamiento", description: "Un proceso práctico de rediseño que mejora jerarquía, usabilidad, móvil, accesibilidad y claridad de negocio.", outcomes: ["Recorridos más limpios", "Mejor accesibilidad", "Marca más segura"] },
      { title: "SEO & Performance", eyebrow: "Alcance", description: "SEO técnico, datos estructurados, metadata, sitemaps, velocidad y arquitectura de contenido preparados para visibilidad a largo plazo.", outcomes: ["Rich snippets", "Páginas listas para búsqueda", "Disciplina de Core Web Vitals"] },
      { title: "Branding Digital", eyebrow: "Identidad", description: "Sistemas visuales, lenguaje de interacción, dirección de contenido y presentación de marca para empresas y marcas personales digitales.", outcomes: ["Dirección distintiva", "Componentes reutilizables", "Consistencia premium"] }
    ],
    technologyGroups: [
      { title: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"] },
      { title: "Backend", items: ["Node.js", "Rutas API", "Server actions", "Resend", "Arquitectura preparada para auth"] },
      { title: "Bases de datos", items: ["PostgreSQL", "Supabase-ready", "Prisma-ready", "Modelos CMS"] },
      { title: "Diseño", items: ["Estrategia UX", "Sistemas UI", "Diseño responsive", "Accesibilidad", "Dirección editorial"] },
      { title: "Herramientas", items: ["Git", "Vercel", "Cloudinary-ready", "Analytics", "Speed Insights"] },
      { title: "Workflow", items: ["Contenido por schema", "Bibliotecas de componentes", "Checklists QA", "Validación SEO"] }
    ],
    projects: [
      {
        slug: "victoria-revestimentos-reformas",
        title: "Victoria Revestimentos & Reformas",
        eyebrow: "Website de negocio live",
        type: "Business",
        status: "Live-ready",
        summary: "Website profesional para una empresa de reformas y acabados en Maia y Porto, pensado para convertir confianza en solicitudes de presupuesto.",
        challenge: "El negocio necesitaba una presencia digital creíble para presentar servicios, mostrar calidad, reducir dudas y llevar visitantes a WhatsApp o presupuesto.",
        response: "El sitio usa layout editorial premium, navegación clara por servicios, imágenes de proyectos, mensajes de confianza, FAQ, testimonios y rutas directas a WhatsApp y presupuesto.",
        outcome: "Un website live que posiciona a Victoria como organizada, detallista y fácil de contactar para reformas, pisos, pintura, cocinas, baños y acabados.",
        stack: ["Diseño web responsive", "Copy SEO", "UX de conversión", "Arquitectura de servicios"],
        services: ["Website de negocio", "SEO local", "Copy de conversión", "Dirección visual"],
        year: "2026",
        image: "/assets/victoria-website-preview.webp",
        href: "https://www.victoriarevestimentosereformas.com/"
      },
      {
        slug: "aj-digital-consultant-android-app",
        title: "AJ Digital Consultant Android App",
        eyebrow: "App móvil freelance",
        type: "Mobile",
        status: "Concept-ready",
        summary: "App Android nativa de consulta y landing page para una agencia digital, empaquetada como APK debug y enfocada en servicios, confianza, proceso, testimonios y contacto.",
        challenge: "La app necesitaba comunicar una oferta premium de consultoría digital en móvil manteniendo la build ligera y sin dependencias externas.",
        response: "La implementación usa una Activity Java nativa con layouts XML, sistema visual navy/gold/azul, tarjetas de servicio, scroll a CTA, validación de formulario y borrador de email.",
        outcome: "Una base APK funcional que demuestra pensamiento UI móvil, estructura Android nativa, lógica de contacto y posicionamiento de servicios estilo agencia.",
        stack: ["Android", "Java", "Layouts XML", "Gradle", "Email intents"],
        services: ["UI móvil", "Build Android nativa", "Flujo de contacto", "Concepto freelance"],
        year: "2026",
        image: "/assets/aj-digital-consultant-app.webp",
        artifact: "APK debug: app/build/outputs/apk/debug/app-debug.apk"
      }
    ] satisfies LocalizedProject[],
    recruiterProfile: {
      availability: "Abierto a proyectos freelance, colaboraciones y oportunidades full-time seleccionadas.",
      skills: ["Desarrollo front-end", "Bases full-stack", "UX/UI design", "Websites enfocados en conversión", "Arquitectura SEO", "Optimización de performance"],
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Integraciones CMS", "Framer Motion"],
      preferences: ["Remote-friendly", "Portugal o equipos internacionales", "Trabajo orientado a producto", "Responsabilidad clara", "Comunicación sólida"],
      objectives: "Crecer en trabajo front-end, full-stack y product design con mayor responsabilidad, ayudando a empresas a lanzar experiencias digitales pulidas y útiles."
    },
    contactLinks: [
      { label: "Email", href: "mailto:samuelferreiragomespinto25@gmail.com", detail: "Email directo para negocio, reclutamiento y colaboraciones." },
      { label: "WhatsApp", href: "#contact-form", detail: "Añadir número público de WhatsApp antes del lanzamiento.", needsConfig: true },
      { label: "LinkedIn", href: "https://www.linkedin.com/", detail: "Conectar el perfil de Samuel antes del lanzamiento.", needsConfig: true },
      { label: "GitHub", href: "https://github.com/", detail: "Conectar el GitHub de Samuel antes del lanzamiento.", needsConfig: true },
      { label: "Instagram", href: "https://www.instagram.com/", detail: "Conectar la presencia social de SP Digital antes del lanzamiento.", needsConfig: true },
      { label: "Llamada directa", href: "#contact-form", detail: "Añadir número público cuando esté listo.", needsConfig: true }
    ],
    faq: [
      { question: "¿SP Digital solo crea portfolios?", answer: "No. La marca está posicionada para websites de negocio, landing pages, aplicaciones web, rediseños, sistemas UI, SEO y experiencias premium de branding digital." },
      { question: "¿Samuel está disponible para reclutadores y empresas?", answer: "Sí. El sitio incluye una ruta para reclutadores con habilidades, tecnologías, idiomas, preferencias de trabajo y contacto para entrevista." },
      { question: "¿El contenido se puede editar más tarde?", answer: "Sí. El contenido está estructurado como datos tipados y puede conectarse a un CMS para proyectos, testimonios, servicios, SEO, blog posts y case studies." },
      { question: "¿El website está preparado para SEO?", answer: "Sí. Incluye metadata dinámica, sitemap, robots, Open Graph, Twitter Cards y JSON-LD para Person, Organization, LocalBusiness, FAQ y Breadcrumb." }
    ],
    expansion: {
      cmsCollections: ["Proyectos", "Case studies", "Servicios", "Testimonios", "Artículos", "Metadata SEO", "Recursos", "Productos digitales", "Traducciones"],
      seoItems: ["Schema.org", "Open Graph", "Twitter Cards", "Metadata dinámica", "Sitemap", "Robots", "FAQ schema", "Breadcrumb schema"],
      accessItems: ["HTML semántico", "Navegación por teclado", "Reduced motion", "Contraste WCAG AA", "Labels para lectores de pantalla", "Texto responsive"]
    },
    footer: {
      line: "Samuel Pinto. Portugal. Ejecución digital premium."
    },
    projectExplorer: {
      filters: { All: "Todos", Business: "Negocio", Mobile: "Móvil", Recruiter: "Reclutador", Experience: "Experiencia", System: "Sistema" },
      search: "Buscar por servicio, stack o resultado",
      noResults: "Ningún proyecto coincide con la búsqueda.",
      clear: "Limpiar búsqueda"
    },
    contactForm: {
      name: "Nombre",
      namePlaceholder: "Tu nombre",
      email: "Email",
      emailPlaceholder: "tu@ejemplo.com",
      intent: "Objetivo",
      budget: "Presupuesto o plazo",
      budgetPlaceholder: "Opcional",
      message: "Mensaje",
      messagePlaceholder: "Cuéntale a Samuel qué quieres crear, mejorar o discutir.",
      send: "Enviar solicitud",
      note: "Los mensajes de negocio y reclutamiento tienen prioridad.",
      success: "Mensaje recibido. En modo preview, configura Resend para entregarlo por email.",
      error: "Algo impidió el envío. Inténtalo de nuevo o usa los enlaces directos."
    },
    assistant: {
      title: "IA SP Digital",
      subtitle: "Guía de contacto y proyectos",
      hello: "Hola, soy la IA de SP Digital. Puedo responder preguntas rápidas, compartir el contacto de Samuel o ayudarte a enviarle un mensaje.",
      starters: ["¿Cómo contacto a Samuel?", "¿Qué puede construir Samuel?", "Enviar mensaje a Samuel"],
      placeholder: "Pregunta sobre servicios o contacto...",
      thinking: "Pensando...",
      askButton: "Preguntar IA",
      leadTitle: "Enviar mensaje a Samuel",
      leadName: "Tu nombre",
      leadEmail: "Tu email",
      leadMessage: "¿Qué debe saber Samuel?",
      leadSend: "Enviar a Samuel",
      leadError: "Revisa los campos e inténtalo otra vez."
    }
  }
} as const;

export type BuiltInLanguageCode = keyof typeof localizedContent;
type WidenLocalized<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer Item)[]
        ? readonly WidenLocalized<Item>[]
        : T extends object
          ? { [Key in keyof T]: WidenLocalized<T[Key]> }
          : T;

export type LocalizedContent = WidenLocalized<typeof localizedContent.en>;
