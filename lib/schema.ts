import { faqs, profile, projects, services } from "@/content/site";
import { absoluteUrl } from "@/lib/utils";

export function personSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    url: absoluteUrl(),
    image: absoluteUrl(profile.ogImage),
    jobTitle: [
      "Founder of SP Digital",
      "Web Developer",
      "Front-End Developer",
      "Full-Stack Developer",
      "UX/UI Designer",
      "Freelance Consultant"
    ],
    worksFor: {
      "@type": "Organization",
      name: profile.brand,
      url: absoluteUrl()
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT"
    },
    knowsLanguage: profile.languages,
    knowsAbout: [
      "Web development",
      "UX design",
      "UI design",
      "SEO",
      "Performance optimization",
      "Digital branding",
      "Full-stack development"
    ]
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: profile.brand,
    founder: {
      "@type": "Person",
      name: profile.name
    },
    url: absoluteUrl(),
    logo: absoluteUrl("/icon.svg"),
    image: absoluteUrl(profile.ogImage),
    areaServed: ["Portugal", "European Union", "International"],
    makesOffer: services.map((service) => ({
      "@type": "Offer",
      name: service.title,
      description: service.description
    }))
  };
}

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: profile.brand,
    image: absoluteUrl(profile.ogImage),
    url: absoluteUrl(),
    address: {
      "@type": "PostalAddress",
      addressCountry: "PT"
    },
    areaServed: "International",
    priceRange: "$$",
    founder: profile.name
  };
}

export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function projectArticleSchema(slug: string) {
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.summary,
    image: absoluteUrl(project.image),
    author: {
      "@type": "Person",
      name: profile.name
    },
    publisher: {
      "@type": "Organization",
      name: profile.brand,
      logo: {
        "@type": "ImageObject",
        url: absoluteUrl("/icon.svg")
      }
    },
    mainEntityOfPage: absoluteUrl(`/projects/${project.slug}`)
  };
}
