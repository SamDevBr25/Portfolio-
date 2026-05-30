import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check, ExternalLink, Package } from "lucide-react";

import { JsonLd } from "@/components/JsonLd";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/ui/button";
import { projects } from "@/content/site";
import { breadcrumbSchema, projectArticleSchema } from "@/lib/schema";
import { absoluteUrl } from "@/lib/utils";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug
  }));
}

export async function generateMetadata({
  params
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: {
      canonical: `/projects/${project.slug}`
    },
    openGraph: {
      title: project.title,
      description: project.summary,
      url: absoluteUrl(`/projects/${project.slug}`),
      images: [
        {
          url: project.image,
          width: 1200,
          height: 900,
          alt: project.title
        }
      ]
    }
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const schema = projectArticleSchema(project.slug);

  return (
    <>
      {schema ? (
        <JsonLd
          data={[
            schema,
            breadcrumbSchema([
              { name: "Home", url: absoluteUrl() },
              { name: "Projects", url: absoluteUrl("/#work") },
              { name: project.title, url: absoluteUrl(`/projects/${project.slug}`) }
            ])
          ]}
        />
      ) : null}
      <main className="min-h-screen bg-ivory">
        <section className="relative isolate overflow-hidden bg-graphite pb-20 pt-28 text-ivory">
          <Image
            src={project.image}
            alt=""
            fill
            sizes="100vw"
            priority
            className="object-cover opacity-32"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/76 via-graphite/72 to-graphite" />
          <div className="container-x relative z-10">
            <Button asChild variant="dark" className="mb-12 bg-transparent">
              <Link href="/#work">
                <ArrowLeft className="h-4 w-4" />
                Back to work
              </Link>
            </Button>
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.24em] text-champagne">
                {project.eyebrow} / {project.year}
              </p>
              <h1 className="mt-5 max-w-5xl font-display text-6xl font-semibold leading-[0.86] text-balance sm:text-7xl">
                {project.title}
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-ivory/76">
                {project.summary}
              </p>
            </Reveal>
          </div>
        </section>

        <section className="py-20 sm:py-28">
          <div className="container-x grid gap-12 lg:grid-cols-[0.75fr_1fr]">
            <aside className="grid content-start gap-5">
              {project.href || project.artifact ? (
                <div className="rounded-lg border border-ink-900/10 bg-white/70 p-6">
                  <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                    Availability
                  </h2>
                  {project.href ? (
                    <Button asChild className="mt-5 w-full" variant="secondary">
                      <a href={project.href} target="_blank" rel="noreferrer">
                        <ExternalLink className="h-4 w-4" />
                        Open live project
                      </a>
                    </Button>
                  ) : null}
                  {project.artifact ? (
                    <div className="mt-5 flex items-start gap-3 rounded-md bg-graphite/5 p-4 text-sm leading-6 text-ink-700">
                      <Package className="mt-1 h-4 w-4 shrink-0 text-mineral" />
                      <span>{project.artifact}</span>
                    </div>
                  ) : null}
                </div>
              ) : null}
              <div className="rounded-lg border border-ink-900/10 bg-white/70 p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                  Project services
                </h2>
                <div className="mt-5 grid gap-3">
                  {project.services.map((service) => (
                    <div key={service} className="flex items-center gap-3 text-sm text-graphite">
                      <Check className="h-4 w-4 text-mineral" />
                      {service}
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-ink-900/10 bg-white/70 p-6">
                <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-ink-500">
                  Stack
                </h2>
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-graphite/5 px-3 py-1 text-sm text-ink-700">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            <article className="grid gap-8">
              {[
                ["Challenge", project.challenge],
                ["Response", project.response],
                ["Outcome", project.outcome]
              ].map(([title, text]) => (
                <Reveal key={title} className="border-t border-ink-900/12 pt-8">
                  <h2 className="font-display text-4xl font-semibold leading-none text-graphite">
                    {title}
                  </h2>
                  <p className="mt-4 text-base leading-8 text-ink-700">{text}</p>
                </Reveal>
              ))}

              <div className="mt-6 rounded-lg bg-graphite p-7 text-ivory sm:p-9">
                <h2 className="font-display text-4xl font-semibold leading-none">
                  Want a project with this level of care?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-ivory/72">
                  Start with a short message. Samuel can respond as a freelancer,
                  collaborator, or candidate depending on your context.
                </p>
                <Button asChild size="lg" variant="dark" className="mt-7">
                  <Link href="/#contact">
                    Contact Samuel
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </article>
          </div>
        </section>
      </main>
    </>
  );
}
