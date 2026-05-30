"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  Code2,
  Download,
  Globe2,
  Layers3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  UserRoundSearch,
  Zap
} from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { AssistantWidget } from "@/components/AssistantWidget";
import {
  LanguageProvider,
  LanguageSelector,
  useLanguage,
  type DisplayContent
} from "@/components/LanguageProvider";
import { JsonLd } from "@/components/JsonLd";
import { ProjectExplorer } from "@/components/ProjectExplorer";
import { Reveal } from "@/components/Reveal";
import { ScrollProgress } from "@/components/ScrollProgress";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteNav } from "@/components/SiteNav";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  profile
} from "@/content/site";
import {
  breadcrumbSchema,
  faqSchema,
  localBusinessSchema,
  organizationSchema,
  personSchema
} from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

const contactIcons = [Mail, MessageCircle, BriefcaseBusiness, Code2, Sparkles, Phone];

export default function HomePage() {
  return (
    <LanguageProvider>
      <HomePageContent />
    </LanguageProvider>
  );
}

function HomePageContent() {
  const { content, language } = useLanguage();

  return (
    <>
      <JsonLd
        data={[
          personSchema(),
          organizationSchema(),
          localBusinessSchema(),
          faqSchema(),
          breadcrumbSchema([{ name: "Home", url: absoluteUrl() }])
        ]}
      />
      <ScrollProgress />
      <SiteNav labels={content.nav} languageSelector={<LanguageSelector />} />
      <main id="main">
        <Hero content={content} />
        <StorySection content={content} />
        <TrustAndCapabilities content={content} />
        <ServicesSection content={content} />
        <TechnologySection content={content} />
        <WorkSection content={content} />
        <RecruiterSection content={content} />
        <ExpansionSection content={content} />
        <ContactSection content={content} />
        <FaqSection content={content} />
      </main>
      <AssistantWidget labels={content.assistant} language={language} />
      <Footer content={content} />
    </>
  );
}

function Hero({ content }: { content: DisplayContent }) {
  return (
    <section
      id="top"
      className="fine-grain relative isolate min-h-[92svh] overflow-hidden bg-graphite text-ivory"
    >
      <Image
        src={profile.editorialImage}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-55"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(17,16,15,0.92),rgba(17,16,15,0.68)_42%,rgba(17,16,15,0.18)),linear-gradient(180deg,rgba(17,16,15,0.38),rgba(17,16,15,0.72))]" />

      <div className="container-x relative z-10 grid min-h-[92svh] items-end gap-12 pb-16 pt-32 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:pb-12">
        <div className="max-w-4xl">
          <Reveal>
            <Badge className="border-white/20 bg-white/10 text-ivory">
              {content.hero.eyebrow}
            </Badge>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-8 font-display text-6xl font-semibold leading-[0.86] text-balance sm:text-7xl lg:text-8xl">
              {content.hero.titleName}
              <span className="block text-champagne">{content.hero.titleBrand}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-ivory/82 text-pretty sm:text-xl">
              {content.hero.text}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" variant="dark">
                <a href="#contact">
                  {content.hero.startProject}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="dark" className="bg-transparent">
                <a href="#recruiters">
                  {content.hero.recruiterPath}
                  <UserRoundSearch className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative hidden min-h-[660px] lg:block">
          <figure className="absolute inset-x-0 bottom-0 overflow-hidden rounded-t-[44%] border border-white/18 bg-white/8 shadow-editorial">
            <Image
              src={profile.portrait}
              alt={content.hero.portraitAlt}
              width={1400}
              height={1700}
              priority
              className="h-[660px] w-full object-cover object-top"
            />
          </figure>
          <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-3">
            {content.hero.roles.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/20 bg-graphite/55 px-4 py-2 text-center text-xs font-medium uppercase tracking-[0.18em] text-ivory backdrop-blur"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>

      <div className="container-x relative z-10 -mt-10 pb-8">
        <div className="grid gap-px overflow-hidden rounded-lg border border-white/12 bg-white/12 backdrop-blur md:grid-cols-3">
          {content.metrics.map((metric) => (
            <div key={metric.label} className="bg-graphite/42 p-5">
              <p className="font-display text-4xl font-semibold text-champagne">{metric.value}</p>
              <p className="mt-1 text-sm font-semibold text-ivory">{metric.label}</p>
              <p className="mt-2 text-sm leading-6 text-ivory/68">{metric.detail}</p>
            </div>
          ))}
        </div>
      </div>

      <a
        href="#story"
        className="absolute bottom-5 right-5 z-20 hidden h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-ivory backdrop-blur transition hover:bg-white/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white md:grid"
        aria-label="Scroll to story"
      >
        <ArrowDown className="h-5 w-5" />
      </a>
    </section>
  );
}

function StorySection({ content }: { content: DisplayContent }) {
  return (
    <section id="story" className="editorial-grid bg-ivory py-24 sm:py-32">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow={content.sections.story.eyebrow}
              title={content.sections.story.title}
              text={content.sections.story.text}
            />
          </Reveal>
          <div className="grid gap-4">
            {content.storyChapters.map((chapter, index) => (
              <Reveal
                key={chapter.title}
                delay={index * 0.05}
                className="border-t border-ink-900/12 py-7"
              >
                <div className="grid gap-4 md:grid-cols-[160px_1fr]">
                  <p className="font-mono text-xs uppercase tracking-[0.22em] text-ink-500">
                    0{index + 1}
                  </p>
                  <div>
                    <h3 className="font-display text-3xl font-semibold leading-none text-graphite">
                      {chapter.title}
                    </h3>
                    <p className="mt-3 text-base leading-7 text-ink-700">{chapter.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustAndCapabilities({ content }: { content: DisplayContent }) {
  return (
    <section id="trust" className="bg-[#ede5d8] py-24 sm:py-32">
      <div className="container-x grid gap-14">
        <Reveal>
            <SectionHeading
            eyebrow={content.sections.trust.eyebrow}
            title={content.sections.trust.title}
            text={content.sections.trust.text}
          />
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-[0.82fr_1fr]">
          <Reveal className="rounded-lg bg-graphite p-7 text-ivory shadow-editorial sm:p-9">
            <ShieldCheck className="h-9 w-9 text-champagne" />
            <h3 className="mt-8 font-display text-4xl font-semibold leading-none">
              {content.sections.trust.cardTitle}
            </h3>
            <p className="mt-4 text-base leading-7 text-ivory/72">
              {content.sections.trust.cardText}
            </p>
            <div className="mt-8 grid gap-3">
              {content.sections.trust.bullets.map(
                (item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-ivory/82">
                    <Check className="h-4 w-4 text-champagne" />
                    {item}
                  </div>
                )
              )}
            </div>
          </Reveal>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.trustSignals.map((signal, index) => (
              <Reveal
                key={signal}
                delay={index * 0.025}
                className="flex items-center gap-3 rounded-lg border border-ink-900/10 bg-white/58 px-4 py-4"
              >
                <BadgeCheck className="h-5 w-5 shrink-0 text-mineral" />
                <span className="text-sm font-medium text-graphite">{signal}</span>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {content.buildCapabilities.map((item, index) => (
            <Reveal
              key={item}
              delay={index * 0.015}
              className="rounded-lg border border-ink-900/10 bg-white/58 px-4 py-4 text-sm font-medium text-ink-700"
            >
              {item}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection({ content }: { content: DisplayContent }) {
  return (
    <section id="services" className="bg-ivory py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.services.eyebrow}
            title={content.sections.services.title}
            text={content.sections.services.text}
          />
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-ink-900/10 bg-ink-900/10 md:grid-cols-2 lg:grid-cols-3">
          {content.services.map((service, index) => (
            <Reveal
              key={service.title}
              delay={index * 0.04}
              className="group bg-ivory p-6 transition hover:bg-white"
            >
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-champagne">
                {service.eyebrow}
              </p>
              <h3 className="mt-5 font-display text-4xl font-semibold leading-none text-graphite">
                {service.title}
              </h3>
              <p className="mt-4 min-h-28 text-sm leading-6 text-ink-700">
                {service.description}
              </p>
              <div className="mt-7 grid gap-3">
                {service.outcomes.map((outcome) => (
                  <div key={outcome} className="flex items-center gap-3 text-sm text-graphite">
                    <ChevronRight className="h-4 w-4 text-mineral" />
                    {outcome}
                  </div>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechnologySection({ content }: { content: DisplayContent }) {
  return (
    <section className="bg-graphite py-24 text-ivory sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.technology.eyebrow}
            title={content.sections.technology.title}
            text={content.sections.technology.text}
            tone="dark"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {content.technologyGroups.map((group, index) => (
            <Reveal
              key={group.title}
              delay={index * 0.04}
              className="rounded-lg border border-white/10 bg-white/[0.06] p-6"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-display text-3xl font-semibold text-ivory">{group.title}</h3>
                <Layers3 className="h-5 w-5 text-champagne" />
              </div>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-ivory/76"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkSection({ content }: { content: DisplayContent }) {
  return (
    <section id="work" className="bg-[#efe8dc] py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.work.eyebrow}
            title={content.sections.work.title}
            text={content.sections.work.text}
          />
        </Reveal>
        <div className="mt-12">
          <ProjectExplorer projects={content.projects} labels={content.projectExplorer} />
        </div>
      </div>
    </section>
  );
}

function RecruiterSection({ content }: { content: DisplayContent }) {
  return (
    <section id="recruiters" className="bg-ivory py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.recruiters.eyebrow}
            title={content.sections.recruiters.title}
            text={content.recruiterProfile.objectives}
          />
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <a href="#contact">
                {content.sections.recruiters.contact}
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="#contact">
                <Download className="h-4 w-4" />
                {content.sections.recruiters.cv}
              </a>
            </Button>
          </div>
        </Reveal>

        <Reveal className="grid gap-px overflow-hidden rounded-lg border border-ink-900/10 bg-ink-900/10">
          {[
            ["Availability", [content.recruiterProfile.availability]],
            ["Skills", content.recruiterProfile.skills],
            ["Technologies", content.recruiterProfile.technologies],
            ["Languages", profile.languages],
            ["Work preferences", content.recruiterProfile.preferences]
          ].map(([title, items]) => (
            <div key={title as string} className="grid gap-5 bg-white/70 p-6 md:grid-cols-[180px_1fr]">
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                {title as string}
              </h3>
              <div className="flex flex-wrap gap-2">
                {(items as string[]).map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-graphite/5 px-3 py-1 text-sm text-ink-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

function ExpansionSection({ content }: { content: DisplayContent }) {
  return (
    <section className="bg-[#e7ded0] py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-2">
        <Reveal className="rounded-lg bg-graphite p-7 text-ivory sm:p-9">
          <Globe2 className="h-9 w-9 text-champagne" />
          <h2 className="mt-8 font-display text-5xl font-semibold leading-none text-balance">
            {content.sections.expansion.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-ivory/72">
            {content.sections.expansion.text}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {content.expansion.cmsCollections.map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1 text-sm text-ivory/76"
              >
                {item}
              </span>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-5">
          <Reveal className="rounded-lg border border-ink-900/10 bg-white/65 p-7">
            <Zap className="h-7 w-7 text-signal" />
            <h3 className="mt-5 font-display text-4xl font-semibold leading-none text-graphite">
              {content.sections.expansion.seoTitle}
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {content.expansion.seoItems.map((item) => (
                <span key={item} className="rounded-full bg-graphite/5 px-3 py-1 text-sm text-ink-700">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal className="rounded-lg border border-ink-900/10 bg-white/65 p-7">
            <ShieldCheck className="h-7 w-7 text-mineral" />
            <h3 className="mt-5 font-display text-4xl font-semibold leading-none text-graphite">
              {content.sections.expansion.accessTitle}
            </h3>
            <div className="mt-6 flex flex-wrap gap-2">
              {content.expansion.accessItems.map((item) => (
                <span key={item} className="rounded-full bg-graphite/5 px-3 py-1 text-sm text-ink-700">
                  {item}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactSection({ content }: { content: DisplayContent }) {
  return (
    <section id="contact" className="bg-ivory py-24 sm:py-32">
      <div className="container-x grid gap-12 lg:grid-cols-[0.85fr_1fr]">
        <Reveal className="min-w-0">
          <SectionHeading
            eyebrow={content.sections.contact.eyebrow}
            title={content.sections.contact.title}
            text={content.sections.contact.text}
          />

          <div className="mt-10 grid min-w-0 max-w-full gap-3">
            {content.contactLinks.map((link, index) => {
              const Icon = contactIcons[index] || Mail;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex min-w-0 max-w-full items-center justify-between gap-4 overflow-hidden rounded-lg border border-ink-900/10 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:border-graphite/30"
                >
                  <span className="flex min-w-0 flex-1 items-center gap-4">
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-graphite text-ivory">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-graphite">{link.label}</span>
                      <span className="block truncate text-sm text-ink-600">{link.detail}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="hidden h-4 w-4 shrink-0 text-ink-500 transition group-hover:text-graphite sm:block" />
                </a>
              );
            })}
          </div>
        </Reveal>

        <Reveal className="min-w-0 rounded-lg border border-ink-900/10 bg-white/78 p-6 shadow-editorial sm:p-8">
          <div className="mb-7 flex items-center justify-between gap-4">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                {content.sections.contact.inquiry}
              </p>
              <h3 className="mt-2 font-display text-4xl font-semibold leading-none text-graphite">
                {content.sections.contact.formTitle}
              </h3>
            </div>
            <MapPin className="hidden h-8 w-8 text-mineral sm:block" />
          </div>
          <ContactForm labels={content.contactForm} />
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection({ content }: { content: DisplayContent }) {
  return (
    <section className="bg-[#ede5d8] py-24 sm:py-32">
      <div className="container-x">
        <Reveal>
          <SectionHeading
            eyebrow={content.sections.faq.eyebrow}
            title={content.sections.faq.title}
            align="center"
          />
        </Reveal>
        <div className="mx-auto mt-12 grid max-w-4xl gap-px overflow-hidden rounded-lg border border-ink-900/10 bg-ink-900/10">
          {content.faq.map((faq, index) => (
            <Reveal key={faq.question} delay={index * 0.03} className="bg-white/70 p-6">
              <h3 className="font-display text-2xl font-semibold leading-tight text-graphite">
                {faq.question}
              </h3>
              <p className="mt-3 text-sm leading-6 text-ink-700">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer({ content }: { content: DisplayContent }) {
  return (
    <footer className="bg-graphite py-10 text-ivory">
      <div className="container-x flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-3xl font-semibold">SP Digital</p>
          <p className="mt-1 text-sm text-ivory/62">
            {content.footer.line}
          </p>
        </div>
        <div className="flex flex-wrap gap-3 text-sm text-ivory/72">
          <Link href="#work" className="hover:text-ivory">
            {content.nav.work}
          </Link>
          <Link href="#services" className="hover:text-ivory">
            {content.nav.services}
          </Link>
          <Link href="#contact" className="hover:text-ivory">
            {content.nav.contact}
          </Link>
        </div>
      </div>
    </footer>
  );
}
