"use client";

import { Menu, X } from "lucide-react";
import { useMemo, useState, type ReactNode } from "react";

import { profile } from "@/content/site";
import { Button } from "@/components/ui/button";
import type { LocalizedContent } from "@/content/i18n";
import { cn } from "@/lib/utils";

type SiteNavProps = {
  labels?: LocalizedContent["nav"];
  languageSelector?: ReactNode;
};

export function SiteNav({ labels, languageSelector }: SiteNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useMemo(
    () => [
      { label: labels?.work || "Work", href: "#work" },
      { label: labels?.services || "Services", href: "#services" },
      { label: labels?.trust || "Trust", href: "#trust" },
      { label: labels?.recruiters || "Recruiters", href: "#recruiters" },
      { label: labels?.contact || "Contact", href: "#contact" }
    ],
    [labels]
  );

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-3">
      <div className="container-x flex h-14 items-center justify-between rounded-full border border-white/55 bg-ivory/78 px-3 shadow-sm backdrop-blur-xl">
        <a
          href="#top"
          className="flex min-w-0 items-center gap-3 rounded-full px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-signal"
          aria-label="SP Digital home"
        >
          <span className="grid h-9 w-9 place-items-center rounded-full bg-graphite text-sm font-semibold text-ivory">
            SP
          </span>
          <span className="hidden text-sm font-semibold text-graphite sm:block">
            {profile.brand}
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-ink-700 transition hover:bg-graphite/5 hover:text-graphite focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-signal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          {languageSelector}
          <Button asChild size="sm" variant="secondary">
            <a href="#recruiters">{labels?.recruiterPath || "Recruiter path"}</a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">{labels?.startConversation || "Start a conversation"}</a>
          </Button>
        </div>

        <Button
          size="icon"
          variant="ghost"
          className="md:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div
        className={cn(
          "container-x mt-2 overflow-hidden rounded-lg border border-ink-900/10 bg-ivory/95 shadow-editorial backdrop-blur-xl transition-all md:hidden",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 border-transparent opacity-0"
        )}
      >
        <nav className="grid p-2" aria-label="Mobile navigation">
          <div className="px-4 py-3">{languageSelector}</div>
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-md px-4 py-3 text-sm font-medium text-graphite hover:bg-graphite/5"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="mt-2 rounded-md bg-graphite px-4 py-3 text-center text-sm font-medium text-ivory"
          >
            {labels?.startConversation || "Start a conversation"}
          </a>
        </nav>
      </div>
    </header>
  );
}
