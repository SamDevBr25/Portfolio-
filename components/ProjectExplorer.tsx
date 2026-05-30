"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Search } from "lucide-react";
import { useMemo, useState } from "react";

import type { Project } from "@/content/site";
import type { LocalizedContent } from "@/content/i18n";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const filters = ["All", "Business", "Mobile", "Recruiter", "Experience", "System"] as const;

type ProjectExplorerProps = {
  projects: Project[];
  labels?: LocalizedContent["projectExplorer"];
};

export function ProjectExplorer({ projects, labels }: ProjectExplorerProps) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const visibleProjects = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return projects.filter((project) => {
      const matchesFilter = filter === "All" || project.type === filter;
      const haystack = [
        project.title,
        project.summary,
        project.stack.join(" "),
        project.services.join(" "),
        project.type
      ]
        .join(" ")
        .toLowerCase();
      return matchesFilter && (!normalizedQuery || haystack.includes(normalizedQuery));
    });
  }, [filter, projects, query]);

  return (
    <div className="grid gap-8">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap gap-2" role="list" aria-label="Project filters">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setFilter(item)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal",
                filter === item
                  ? "border-graphite bg-graphite text-ivory"
                  : "border-ink-900/10 bg-white/60 text-ink-700 hover:border-graphite/30"
              )}
            >
              {labels?.filters[item] || item}
            </button>
          ))}
        </div>

        <label className="relative block w-full max-w-md">
          <span className="sr-only">Search projects</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-500" />
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={labels?.search || "Search by service, stack, or outcome"}
            className="h-12 w-full rounded-full border border-ink-900/10 bg-white/70 pl-11 pr-4 text-sm text-graphite outline-none transition focus:border-graphite focus:ring-4 focus:ring-signal/10"
          />
        </label>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.slug}
            className="group overflow-hidden rounded-lg border border-ink-900/10 bg-white/75 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-editorial"
          >
            <Link href={`/projects/${project.slug}`} className="block">
              <div className="relative aspect-[4/3] overflow-hidden bg-graphite">
                <Image
                  src={project.image}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-graphite/45 to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <Badge className="border-white/25 bg-white/85 text-graphite">{project.status}</Badge>
                </div>
              </div>
              <div className="grid gap-4 p-5">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-ink-500">
                      {project.eyebrow}
                    </p>
                    <h3 className="mt-2 font-display text-3xl font-semibold leading-none text-graphite">
                      {project.title}
                    </h3>
                  </div>
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-ink-900/10 text-graphite transition group-hover:bg-graphite group-hover:text-ivory">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                <p className="text-sm leading-6 text-ink-700">{project.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 3).map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-graphite/5 px-3 py-1 text-xs text-ink-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {visibleProjects.length === 0 ? (
        <div className="rounded-lg border border-ink-900/10 bg-white/70 p-8 text-center">
          <p className="text-sm text-ink-700">
            {labels?.noResults || "No projects match that search yet."}
          </p>
          <Button className="mt-4" variant="secondary" onClick={() => setQuery("")}>
            {labels?.clear || "Clear search"}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
